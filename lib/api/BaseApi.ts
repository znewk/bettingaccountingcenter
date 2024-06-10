import { store } from '@/store/store';
import axios from 'axios';

const instance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL || "http://locahost:5000/api", // Используем базовый URL из переменных окружения
  timeout: 1800000, // 30 минут
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
  withCredentials: true,
});

instance.interceptors.request.use(
  (config) => {
    const token = store.getState().user.token; // Пример получения токена из Redux store
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
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
    if (error.response.status === 401) {
      // Обработка ошибки 401, например, редирект на страницу логина
    }
    return Promise.reject(error);
  }
);

class BaseApi {
  protected axios = instance;

  constructor() {}
}

export { BaseApi, instance };