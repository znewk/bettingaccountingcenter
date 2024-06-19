import { api } from '@/lib/api/AppApi';
import { ScoringData, VerifyPayload } from '@/schemas/verification';
import { create } from 'zustand';

interface VerifyState {
  data: string | null;
  isLoading: boolean;
  scoringData: ScoringData | null;
  verify: (creds: VerifyPayload) => Promise<void>;
  scoringPerson: () => Promise<void>;
}


export const useVerificationStore = create<VerifyState>((set) => ({
  data: null,
  isLoading: true, // Изначально устанавливаем isLoading в true
  scoringData: null,
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

  scoringPerson: async () => {
    const successData = {
      message: 'Ваши данные успешно проверены, и теперь вы можете продолжить процедуру у букмекера.',
      success: true,
      returnUrl: '/'
    };
    
    const failureData = {
      message: 'К сожалению, на данный момент вам отказано в доступе. Это решение принято на основе анализа ваших данных для обеспечения безопасности и соответствия требованиям. Если у вас есть вопросы или вы хотите узнать больше, пожалуйста, свяжитесь с нашей службой поддержки.',
      success: false,
      returnUrl: '/'
    };
    try {
      set({ isLoading: true }); // Устанавливаем isLoading в true при начале входа
      // Замените этот код на ваш реальный API запрос
  
      await new Promise((resolve) => setTimeout(resolve, 3000));
  
      // Генерируем случайное число от 0 до 1
      const randomValue = Math.random();
  
      // Выбираем responseData в зависимости от случайного числа
      const responseData = randomValue < 0.5 ? successData : failureData;
  
      set((state) => ({
        ...state,
        scoringData: responseData,
        isLoading: false, // Устанавливаем isLoading в false после успешного входа
      }));
    } catch (error) {
      console.error('Ошибка скоринга:', error);
      set((state) => ({
        ...state,
        data: null,
        isLoading: false, // Устанавливаем isLoading в false при ошибке входа
      }));
    }
  }
}));
