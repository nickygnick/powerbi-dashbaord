import { defineStore } from "pinia";
import { ref } from "vue";
import { apiGetToken, apiGetInfo } from "@/api/authApi";

export const useAuthStore = defineStore("auth", () => {
  const authToken = ref("");
  const setSession = (token) => {
    window.localStorage.setItem("token", token);
  };

  const login = async (userName, password) => {
    const response = await apiGetToken(userName, password);

    if (!response.success) return;

    const token = response.data;
    setSession(token);
    authToken.value = token;
  };

  const getInfo = (account, password) => {
    return apiGetInfo(account, password);
  };

  return {
    login,
    getInfo,
  };
});
