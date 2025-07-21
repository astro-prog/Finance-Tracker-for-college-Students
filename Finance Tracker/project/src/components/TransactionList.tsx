import React from 'react';
import { Trash2, Edit, Calendar, Tag } from 'lucide-react';
import { Transaction } from '../types';
import { formatCurrency } from '../utils/currency';
import { format } from 'date-fns';

interface TransactionListProps {
  transactions: Transaction[];
  onDelete: (id: string) => void;
  currency: string;
}

const TransactionList: React.FC<TransactionListProps> = ({
  transactions,
  onDelete,
  currency,
}) => {
  const sortedTransactions = [...transactions].sort((a, b) => 
    new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  if (transactions.length === 0) {
    return (
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 text-center">
        <div className="text-gray-400 dark:text-gray-500 mb-4">
          <Calendar className="w-12 h-12 mx-auto" />
        </div>
        <h3 className="text-lg font-medium text-gray-600 dark:text-gray-300 mb-2">No transactions yet</h3>
        <p className="text-gray-500 dark:text-gray-400">Start by adding your first transaction to track your finances.</p>
      </div>
    );
  }

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden">
      <div className="p-6 border-b border-gray-200 dark:border-gray-700">
        <h3 className="text-lg font-semibold text-gray-800 dark:text-white">Recent Transactions</h3>
      </div>
      
      <div className="divide-y divide-gray-100 dark:divide-gray-700">
        {sortedTransactions.map((transaction) => (
          <div key={transaction.id} className="p-6 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-150">
            <div className="flex items-center justify-between">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <div className={`p-2 rounded-lg ${
                    transaction.type === 'income' 
                      ? 'bg-green-100 text-green-600' 
                      : 'bg-red-100 text-red-600'
                  }`}>
                    <Tag className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-800 dark:text-white">{transaction.category}</h4>
                    {transaction.description && (
                      <p className="text-sm text-gray-600 dark:text-gray-300">{transaction.description}</p>
                    )}
                  </div>
                </div>
                <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    {format(new Date(transaction.date), 'MMM dd, yyyy')}
                  </div>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className={`text-lg font-semibold ${
                  transaction.type === 'income' ? 'text-green-600' : 'text-red-600'
                }`}>
                  {transaction.type === 'income' ? '+' : '-'}
                  {formatCurrency(transaction.amount, currency)}
                </div>
                
                <div className="flex gap-2">
                  <button className="p-2 hover:bg-gray-200 dark:hover:bg-gray-600 rounded-lg transition-colors duration-200 text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200">
                    <Edit className="w-4 h-4" />
                  </button>
                  <button 
                    onClick={() => onDelete(transaction.id)}
                    className="p-2 hover:bg-red-100 dark:hover:bg-red-900 rounded-lg transition-colors duration-200 text-gray-500 dark:text-gray-400 hover:text-red-600 dark:hover:text-red-400"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TransactionList;