import { defineStore } from "pinia";
import { computed, ref } from "vue";
import { useRouter } from "vue-router";
import { apiGetToken, apiGetInfo } from "@/api/authApi";

export const useAuthStore = defineStore("auth", () => {
  const router = useRouter();
  const authToken = ref("");
  const userInfo = ref({});

  const roleList = computed(() => {
    if (!userInfo.value.loginCurrentInfo) return [];
    return userInfo.value.loginCurrentInfo?.roleList;
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

  const getInfo = async () => {
    try {
      const response = await apiGetInfo(getToken());
      if (!response.success) return;

      userInfo.value = response.data;
    } catch (err) {
      resetToken();
      router.push({ name: "login" });
    }
  };

  return {
    authToken,
    userInfo,
    roleList,
    login,
    getInfo,
  };
});
