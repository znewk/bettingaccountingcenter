import { LoginPayload, UserResponse } from '@/schemas/user';
import { create } from 'zustand';

interface UserState {
  token: string | null;
  name: string | null;
  roles: string[] | null;
  isLogged: boolean;
  isLoading: boolean; // Добавляем isLoading
  setUserData: (userData: UserResponse) => void;
  logout: () => void;
  initialize: () => void;
  login: (creds: LoginPayload) => Promise<void>;
}

export const useUserStore = create<UserState>((set) => ({
  token: null,
  name: null,
  roles: null,
  isLogged: false,
  isLoading: true, // Изначально устанавливаем isLoading в true
  setUserData: (userData: UserResponse) => {
    set({
      token: userData.token,
      name: userData.name,
      roles: userData.roles,
      isLogged: true,
      isLoading: false, // Устанавливаем isLoading в false после установки данных пользователя
    });
    localStorage.setItem('userData', JSON.stringify(userData));
  },
  logout: () => {
    set({
      token: null,
      name: null,
      roles: null,
      isLogged: false,
      isLoading: false, // Устанавливаем isLoading в false после выхода
    });
    localStorage.removeItem('userData');
  },
  initialize: () => {
    const userData = localStorage.getItem('userData');
    if (userData) {
      const parsedUserData: UserResponse = JSON.parse(userData);
      set({
        token: parsedUserData.token,
        name: parsedUserData.name,
        roles: parsedUserData.roles,
        isLogged: true,
        isLoading: false, // Устанавливаем isLoading в false после инициализации данных из localStorage
      });
    } else {
      set((state) => ({
        ...state,
        isLoading: false, // Если данных нет, завершаем инициализацию с isLoading = false
      }));
    }
  },
  login: async (creds: LoginPayload) => {
    try {
      set({ isLoading: true }); // Устанавливаем isLoading в true при начале входа
      // Замените этот код на ваш реальный API запрос
      // const response = await api.userApi.login(creds);
      // const userData: UserResponse = response.data;

      // Simulate async login process
      await new Promise((resolve) => setTimeout(resolve, 1000));
      const userData: UserResponse = {
        name: "Ryan Gosling",
        token: 'token',
        roles: ['admin']
      };
      set((state) => ({
        ...state,
        token: userData.token,
        name: userData.name,
        roles: userData.roles,
        isLogged: true,
        isLoading: false, // Устанавливаем isLoading в false после успешного входа
      }));
      localStorage.setItem('userData', JSON.stringify(userData));
    } catch (error) {
      console.error('Ошибка входа:', error);
      set((state) => ({
        ...state,
        token: null,
        name: null,
        roles: null,
        isLogged: false,
        isLoading: false, // Устанавливаем isLoading в false при ошибке входа
      }));
      localStorage.removeItem('userData');
    }
  },
}));
