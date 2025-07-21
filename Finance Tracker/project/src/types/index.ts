export interface Transaction {
  id: string;
  type: 'income' | 'expense';
  amount: number;
  category: string;
  description: string;
  date: string;
  currency: string;
}

export interface Budget {
  category: string;
  limit: number;
  spent: number;
}

export interface CurrencyRate {
  code: string;
  name: string;
  symbol: string;
  rate: number;
}