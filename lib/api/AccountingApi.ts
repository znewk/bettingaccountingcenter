import { BaseApi } from './BaseApi';
import { AccountingBetType, AccountingTransactionType } from '@/schemas/accounting';

class AccountingApi extends BaseApi {
  getAccountingBet() {
    return this.axios.get<AccountingBetType[]>('/api/auth/login');
  }
  getAccountingTransaction() {
    return this.axios.get<AccountingTransactionType[]>('/api/auth/login');
  }
}

export default new AccountingApi();
