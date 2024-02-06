import axios, { type AxiosError } from 'axios';
import createAuthRefreshInterceptor from 'axios-auth-refresh';

export const API_URL = 'http://localhost:3000/api'

const axiosInstance = axios.create({
  baseURL: API_URL,
  withCredentials: true,
});

// createAuthRefreshInterceptor(axiosInstance, async (failedRequest) => {
//   await axiosInstance.post(endpoints.refresh);
//   return await Promise.resolve();
// });

export type RequestError = AxiosError<{message: string, statusCode: number,}>;
export default axiosInstance;
