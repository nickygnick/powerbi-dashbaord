import { defineStore } from "pinia";
import { computed, ref } from "vue";
import { useRouter } from "vue-router";
import { apiGetToken, apiGetInfo } from "@/api/authApi";

export const useAuthStore = defineStore("auth", () => {
  const router = useRouter();
  const authToken = ref("");
  const userInfo = ref({});

  const roleList = computed(() => {
    return [
      ...userInfo.value.loginCurrentInfo?.roleList,
      { roleName: "售服主管" },
    ];
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

    if (!response.success) return;

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
      if (err.response && err.response.status === 401) {
        resetToken();
        router.push({ name: "login" });
      }
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
