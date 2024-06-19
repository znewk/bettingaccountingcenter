import { create } from 'zustand';
import { AccountingBetType } from '@/schemas/accounting';
import { accountingBetFakeData } from './fakeData/accounting';

interface AccountingBetState {
  accountingBetData: AccountingBetType[];
  setData: (data: AccountingBetType[]) => void;
  load: () => Promise<void>;
}

export const useAccountingBetStore = create<AccountingBetState>((set) => ({
  accountingBetData: [],
  setData: (data: AccountingBetType[]) => {
    try {
      set({ accountingBetData: data });
      console.log(data);
    } catch {
      console.log('state error');
    }
  },
  load: async () => {
    try {
      // const response = await api.accountingApi.getAccountingBet();
      // const accountingBetData: AccountingBetType[] = response.data;

      // Simulate async data loading process
      await new Promise(resolve => setTimeout(resolve, 1000));
      const accountingBetData: AccountingBetType[] = accountingBetFakeData;
      set({ accountingBetData });
    } catch (error) {
      console.error('Ошибка загрузки данных:', error);
    }
  },
}));
