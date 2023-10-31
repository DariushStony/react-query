import { AxiosError, AxiosResponse, InternalAxiosRequestConfig } from "axios";
import { IErrorResponse } from "./share.props";

export const requestInterceptor = {
  onFulfilled: (config: InternalAxiosRequestConfig) => {
    // config.withCredentials = true;
    return config;
  },
  onRejected: (error: any) => {
    return Promise.reject(error);
  },
};

export const responseInterceptor = {
  onFulfilled: (response: AxiosResponse) => {
    return response;
  },
  onRejected: (error: AxiosError<IErrorResponse>) => {
    // TODO: complete this method
    if (error.response) {
      const customError = error?.response?.data;
      return Promise.reject(customError);
    }
    return Promise.reject(error);
  },
};
