import { useAuthStore } from "@/stores/authStore";

export const authMiddleware = async (to) => {
  const authStore = useAuthStore();

  if (!authStore.userInfo.ownerCode) {
    try {
      await authStore.getInfo();
    } catch (err) {
      authStore.resetToken();
      return { name: "login" };
    }
    return;
  }
};
