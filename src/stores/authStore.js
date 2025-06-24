import { defineStore } from "pinia";
import { computed, ref } from "vue";
import { useRouter } from "vue-router";
import { apiGetToken, apiGetInfo, apiGetCompanyInfo } from "@/api/authApi";

export const useAuthStore = defineStore("auth", () => {
  const router = useRouter();
  const authToken = ref("");
  const userInfo = ref({});

  const roleList = computed(() => {
    if (
      !userInfo.value.loginCurrentInfo?.roleList ||
      userInfo.value.loginCurrentInfo?.roleList.length === 0
    ) {
      return [];
    }
    return userInfo.value.loginCurrentInfo?.roleList.filter(
      (item) => item.roleName,
    );
  });

  const setToken = (token) => {
    window.localStorage.setItem("token", token);
  };

  const resetToken = () => {
    window.localStorage.removeItem("token");
    authToken.value = "";
  };

  const getToken = () => {
    if (authToken.value) {
      return authToken.value;
    }
    const token = window.localStorage.getItem("token");
    if (token) {
      authToken.value = token;
    }
    return token;
  };

  const login = async (userName, password) => {
    const response = await apiGetToken(userName, password);

    if (!response.success) {
      throw new Error(response.errMsg);
    }

    const token = response.data;
    setToken(token);
    authToken.value = token;
  };

  const logout = () => {
    resetToken();
    userInfo.value = {};
    router.push({ name: "login" });
  };

  const getInfo = async () => {
    try {
      const response = await apiGetInfo(getToken());
      if (!response.success) return;

      userInfo.value = response.data;
      userInfo.value.reportCode = userInfo.value.ownerCode;

      if (userInfo.value.loginCurrentInfo.orgType == "15061008") {
        const companyInfo = await getCompanyInfo();
        if (companyInfo && companyInfo.length > 0) {
          const code = companyInfo[0].companyCode.substring(0, 2);
          userInfo.value.reportCode = code;
        }
      }
    } catch (err) {
      resetToken();
      router.push({ name: "login" });
    }
  };

  const getCompanyInfo = async () => {
    try {
      const response = await apiGetCompanyInfo(
        getToken(),
        userInfo.value.loginCurrentInfo.orgId,
      );
      if (response.resultCode != "200") {
        alert(response.errMsg);
        return;
      }

      return response.data;
    } catch (err) {
      console.error(err);
    }
  };

  return {
    authToken,
    userInfo,
    roleList,
    login,
    logout,
    getInfo,
    getCompanyInfo,
  };
});
