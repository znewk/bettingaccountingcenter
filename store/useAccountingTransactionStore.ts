import { create } from 'zustand';
import { AccountingTransactionType } from '@/schemas/accounting';
import { accountingTransactionFakeData } from './fakeData/accounting';

interface AccountingTransactionState {
  accountingTransactionData: AccountingTransactionType[];
  setData: (data: AccountingTransactionType[]) => void;
  load: () => Promise<void>;
}

export const useAccountingTransactionStore = create<AccountingTransactionState>((set) => ({
  accountingTransactionData: [],
  setData: (data: AccountingTransactionType[]) => {
    try {
      set({ accountingTransactionData: data });
      console.log(data);
    } catch {
      console.log('state error');
    }
  },
  load: async () => {
    try {
      // const response = await api.accountingApi.getAccountingTransaction();
      // const accountingTransactionData: AccountingTransactionType[] = response.data;

      // Simulate async data loading process
      await new Promise(resolve => setTimeout(resolve, 1000));
      const accountingTransactionData: AccountingTransactionType[] = accountingTransactionFakeData;
      set({ accountingTransactionData });
    } catch (error) {
      console.error('Ошибка загрузки данных:', error);
    }
  },
}));