import { configureStore } from '@reduxjs/toolkit';
import { initialize } from './slices/userSlice'; // Путь к вашему файлу с userSlice
import userReducer from './slices/userSlice';
import accountingBetSlice from './slices/accountingBetSlice';
import accountingTransactionSlice from './slices/accountingTransactionSlice';

export const store = configureStore({
  reducer: {
    user: userReducer,
    accountingBet: accountingBetSlice,
    accountingTransaction: accountingTransactionSlice
  },
});

// Вызываем инициализацию сразу после создания стора
store.dispatch(initialize());

// Типы для использования с TypeScript
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
