import React from 'react';
import { TrendingUp, TrendingDown, Wallet, Target } from 'lucide-react';
import { Transaction } from '../types';
import { formatCurrency } from '../utils/currency';

interface DashboardProps {
  transactions: Transaction[];
  currency: string;
}

const Dashboard: React.FC<DashboardProps> = ({ transactions, currency }) => {
  const totalIncome = transactions
    .filter(t => t.type === 'income')
    .reduce((sum, t) => sum + t.amount, 0);

  const totalExpenses = transactions
    .filter(t => t.type === 'expense')
    .reduce((sum, t) => sum + t.amount, 0);

  const totalSavings = totalIncome - totalExpenses;
  const savingsRate = totalIncome > 0 ? (totalSavings / totalIncome) * 100 : 0;

  const stats = [
    {
      title: 'Total Income',
      amount: totalIncome,
      icon: TrendingUp,
      color: 'green',
      bgColor: 'bg-green-50',
      iconColor: 'text-green-600',
      textColor: 'text-green-600',
    },
    {
      title: 'Total Expenses',
      amount: totalExpenses,
      icon: TrendingDown,
      color: 'red',
      bgColor: 'bg-red-50',
      iconColor: 'text-red-600',
      textColor: 'text-red-600',
    },
    {
      title: 'Net Savings',
      amount: totalSavings,
      icon: Wallet,
      color: totalSavings >= 0 ? 'blue' : 'red',
      bgColor: totalSavings >= 0 ? 'bg-blue-50' : 'bg-red-50',
      iconColor: totalSavings >= 0 ? 'text-blue-600' : 'text-red-600',
      textColor: totalSavings >= 0 ? 'text-blue-600' : 'text-red-600',
    },
    {
      title: 'Savings Rate',
      amount: savingsRate,
      icon: Target,
      color: 'purple',
      bgColor: 'bg-purple-50',
      iconColor: 'text-purple-600',
      textColor: 'text-purple-600',
      isPercentage: true,
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {stats.map((stat, index) => (
        <div key={index} className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300">
          <div className="flex items-center justify-between mb-4">
            <div className={`p-3 rounded-lg ${stat.bgColor}`}>
              <stat.icon className={`w-6 h-6 ${stat.iconColor}`} />
            </div>
          </div>
          
          <div>
            <p className="text-gray-600 dark:text-gray-300 text-sm font-medium mb-1">{stat.title}</p>
            <p className={`text-2xl font-bold ${stat.textColor}`}>
              {stat.isPercentage 
                ? `${stat.amount.toFixed(1)}%`
                : formatCurrency(Math.abs(stat.amount), currency)
              }
            </p>
            {stat.title === 'Net Savings' && totalSavings < 0 && (
              <p className="text-xs text-red-500 mt-1">Deficit</p>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Dashboard;