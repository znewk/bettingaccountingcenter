import { createSlice, PayloadAction, Dispatch } from '@reduxjs/toolkit';
import { AccountingBetType } from '@/schemas/accounting';
import { api } from '../../lib/api/AppApi';
import { accountingBetFakeData } from '../fakeData/accounting';

interface InitialState {
  accountingBetData: AccountingBetType[];
}

const initialState: InitialState = {
  accountingBetData: [],
};

const accountingBetSlice = createSlice({
  name: 'accountingBet',
  initialState,
  reducers: {
    setData(state, action: PayloadAction<AccountingBetType[]>) {
        try {
            state.accountingBetData = action.payload; // Обновляем состояние
            console.log(state.accountingBetData);
        } catch {
            console.log('state error');
        }
    },
  },
});

export const { setData } = accountingBetSlice.actions;
export const load = () => async (dispatch: Dispatch<any>) => {
  try {
    // const response = await api.accountingApi.getAccountingBet();
    // const accountingBetData: AccountingBetType[] = response.data;

    // Simulate async login process
    await new Promise(resolve => setTimeout(resolve, 1000));
    const accountingBetData: AccountingBetType[] = accountingBetFakeData;
    dispatch(setData(accountingBetData));
  } catch (error) {
    console.error('Ошибка загрузки данных:', error);
  }
};

export default accountingBetSlice.reducer;
