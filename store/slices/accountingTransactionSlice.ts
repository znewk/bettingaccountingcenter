import { createSlice, PayloadAction, Dispatch } from '@reduxjs/toolkit';
import { AccountingTransactionType } from '@/schemas/accounting';
import { api } from '../../lib/api/AppApi';
import { accountingTransactionFakeData } from '../fakeData/accounting';

interface InitialState {
  accountingTransactionData: AccountingTransactionType[];
}

const initialState: InitialState = {
    accountingTransactionData: [],
};

const accountingBetSlice = createSlice({
  name: 'accountingTransaction',
  initialState,
  reducers: {
    setData(state, action: PayloadAction<AccountingTransactionType[]>) {
        try {
            state.accountingTransactionData = action.payload; // Обновляем состояние
            console.log(state.accountingTransactionData);
        } catch {
            console.log('state error');
        }
    },
  },
});

export const { setData } = accountingBetSlice.actions;
export const load = () => async (dispatch: Dispatch<any>) => {
  try {
    // const response = await api.accountingApi.getAccountingTransaction();
    // const accountingBetData: AccountingTransactionType[] = response.data;

    // Simulate async login process
    await new Promise(resolve => setTimeout(resolve, 1000));
    const accountingTransactionData: AccountingTransactionType[] = accountingTransactionFakeData;
    dispatch(setData(accountingTransactionData));
  } catch (error) {
    console.error('Ошибка загрузки данных:', error);
  }
};

export default accountingBetSlice.reducer;
