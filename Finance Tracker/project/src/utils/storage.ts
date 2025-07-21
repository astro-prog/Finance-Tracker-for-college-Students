import { Transaction } from '../types';

const STORAGE_KEY = 'finance_tracker_data';

export const saveTransactions = (transactions: Transaction[]): void => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(transactions));
};

export const loadTransactions = (): Transaction[] => {
  const data = localStorage.getItem(STORAGE_KEY);
  return data ? JSON.parse(data) : [];
};

export const saveCurrency = (currency: string): void => {
  localStorage.setItem('selected_currency', currency);
};

export const loadCurrency = (): string => {
  return localStorage.getItem('selected_currency') || 'USD';
};