import axios, { AxiosError } from "axios";
// import createAuthRefreshInterceptor from "axios-auth-refresh";
// import { refreshAuthLogic } from "@/services/api/refreshAuthLogic";
import { requestInterceptor, responseInterceptor } from "./interceptors";

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL,
});

// Instantiate the interceptor
// createAuthRefreshInterceptor(api, refreshAuthLogic, {
//     interceptNetworkError: true,
//     shouldRefresh(error: AxiosError): boolean {
//         if (error.config && error?.config.url?.includes("/refresh-token")) {
//             return false;
//         }
//         return error?.response?.status === 401;
//     },
// });

// api.interceptors.request.use(
//   requestInterceptor.onFulfilled,
//   requestInterceptor.onRejected
// );

// api.interceptors.response.use(
//   responseInterceptor.onFulfilled,
//   responseInterceptor.onRejected
// );

export default api;
