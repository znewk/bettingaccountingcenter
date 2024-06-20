import { fetchWrapper } from './fetchWrapper';
import { AccountingBetType, AccountingTransactionType } from '@/schemas/accounting';

export async function getAccountingBet(): Promise<AccountingBetType[]> {
  return await fetchWrapper.get('/accounting/bet');
}

export async function getAccountingTransaction(): Promise<AccountingTransactionType[]> {
  return await fetchWrapper.get('/accounting/transaction');
}
