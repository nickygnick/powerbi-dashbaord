import { axiosInstance } from "./instance";

export const apiGetToken = async (userName, password) => {
  try {
    const response = await axiosInstance.get(
      "/openapi/bff-sales-line/auth/queryToken",
      {
        params: {
          userName: userName,
          password: password,
          clientId: import.meta.env.VITE_CLIENT_ID,
        },
      },
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const apiGetInfo = async (account, password) => {
  try {
    const response = await axiosInstance.get(
      "/api/2b/bff-sales-line/auth/users/queryUserInfo",
      {
        account,
        password,
      },
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};
