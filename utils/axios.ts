import axios from "axios";
import * as expoSecureStore from 'expo-secure-store';

const axiosInstance = axios.create({
  baseURL: 'https://server-2wfe.onrender.com',
});

axiosInstance.interceptors.request.use(
  async function (config) {
    const refreshToken = await expoSecureStore.getItemAsync('refreshToken');
    if (refreshToken) {
      config.headers.refreshToken = `Bearer ${refreshToken}`;
    }

    const accessToken = await expoSecureStore.getItemAsync('accessToken');
    if (accessToken) {
      config.headers.accessToken = `Bearer ${accessToken}`;
    }

    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

export default axiosInstance;
