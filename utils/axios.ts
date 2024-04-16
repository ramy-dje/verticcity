import axios from "axios";
import * as expoSecureStore from 'expo-secure-store';

const axiosInstance = axios.create({
  baseURL: 'http://192.168.1.7:8000',
});

axiosInstance.interceptors.request.use(
  async function (config) {
    const refreshToken = await expoSecureStore.getItemAsync('refreshToken');
    console.log(refreshToken)
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
