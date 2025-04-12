import { useAuthStore } from "@/stores/authStore";

export const authMiddleware = async (to) => {
  const authStore = useAuthStore();

  if (!authStore.userInfo.ownerCode) {
    await authStore.getInfo();
    return;
  }
};
