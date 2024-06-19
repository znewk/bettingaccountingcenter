import { api } from '@/lib/api/AppApi';
import { VerifyPayload } from '@/schemas/verification';
import { create } from 'zustand';

interface VerifyState {
  data: string | null;
  isLoading: boolean; // Добавляем isLoading
  verify: (creds: VerifyPayload) => Promise<void>;
}


export const useVerificationStore = create<VerifyState>((set) => ({
  data: null,
  isLoading: true, // Изначально устанавливаем isLoading в true
  verify: async (creds: VerifyPayload) => {
    try {
      set({ isLoading: true }); // Устанавливаем isLoading в true при начале входа
      // Замените этот код на ваш реальный API запрос
      const response = await api.verificationApi.verify(creds);
      const verifyData: any = response.data;

      set((state) => ({
        ...state,
        data: verifyData,
        isLoading: false, // Устанавливаем isLoading в false после успешного входа
      }));

      console.log(response.data)
    } catch (error) {
      console.error('Ошибка верификации:', error);
      set((state) => ({
        ...state,
        data: null,
        isLoading: false, // Устанавливаем isLoading в false при ошибке входа
      }));
    }
  },
}));
