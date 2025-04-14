import axios from "axios";
import { useLoading } from "@/composables/loading";

let requestCount = 0;
const loadingTimers = {};

function dateFormat(fmt, date) {
  let ret;
  const opt = {
    "Y+": date.getFullYear().toString(), // 年
    "m+": (date.getUTCMonth() + 1).toString(), // 月
    "d+": date.getUTCDate().toString(), // 日
    "H+": date.getUTCHours().toString(), // 时
    "M+": date.getUTCMinutes().toString(), // 分
    "S+": date.getUTCSeconds().toString(), // 秒
    // 有其他格式化字符需求可以继续添加，必须转化成字符串
  };
  for (let k in opt) {
    ret = new RegExp("(" + k + ")").exec(fmt);
    if (ret) {
      fmt = fmt.replace(
        ret[1],
        ret[1].length == 1 ? opt[k] : opt[k].padStart(ret[1].length, "0"),
      );
    }
  }
  return fmt;
}

export const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
});

axiosInstance.interceptors.request.use((config) => {
  requestCount++;

  const requestDateTime = dateFormat("YYYYmmddTHHMMSSZ", new Date());
  config.headers[requestDateTime] = "X-Sdk-Date";

  const requestId = Date.now().toString() + Math.random().toString();
  config.headers = config.headers || {};
  config.headers["request-id"] = requestId;

  loadingTimers[requestId] = window.setTimeout(() => {
    useLoading().open();
  }, 400);

  return config;
});

axiosInstance.interceptors.response.use(
  (response) => {
    requestCount--;

    const requestId = response.config.headers["request-id"];
    if (requestId && loadingTimers[requestId]) {
      clearTimeout(loadingTimers[requestId]);
      delete loadingTimers[requestId];
    }

    if (requestCount === 0) {
      useLoading().close();
    }

    return response;
  },
  (error) => {
    requestCount--;

    if (error.config?.headers?.["request-id"]) {
      const requestId = error.config.headers["request-id"];
      if (loadingTimers[requestId]) {
        clearTimeout(loadingTimers[requestId]);
        delete loadingTimers[requestId];
      }
    }

    if (requestCount === 0) {
      useLoading().close();
    }

    return Promise.reject(error);
  },
);
