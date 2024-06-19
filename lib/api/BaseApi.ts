import { useUserStore } from '@/store/useUserStore';
import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';

// Функция для асинхронного получения токена
const getToken = async () => {
  return useUserStore(state => state.token); // Подставьте правильный селектор вашего хранилища
};

// Создаем интерцепторы с использованием async/await
const instance: AxiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL || "http://localhost:8181/api",
  timeout: 1800000,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
  withCredentials: true,
});

instance.interceptors.request.use(
  async (config: any) => {
    try {
      const token = await getToken(); // Асинхронно получаем токен
      if (token) {
        config.headers = {
          ...config.headers,
          Authorization: `Bearer ${token}`,
        };
      }
    } catch (error) {
      console.error('Failed to retrieve token:', error);
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

instance.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response && error.response.status === 401) {
      // Обработка ошибки 401, например, редирект на страницу логина
    }
    return Promise.reject(error);
  }
);

class BaseApi {
  protected axios: AxiosInstance = instance;

  constructor() {}
}

export { BaseApi, instance };
