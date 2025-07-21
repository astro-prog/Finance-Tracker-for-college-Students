import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
} from 'chart.js';
import { Bar, Doughnut } from 'react-chartjs-2';
import { Transaction } from '../types';
import { formatCurrency } from '../utils/currency';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
);

interface ChartsProps {
  transactions: Transaction[];
  currency: string;
}

const Charts: React.FC<ChartsProps> = ({ transactions, currency }) => {
  // Calculate expense categories
  const expensesByCategory = transactions
    .filter(t => t.type === 'expense')
    .reduce((acc, transaction) => {
      acc[transaction.category] = (acc[transaction.category] || 0) + transaction.amount;
      return acc;
    }, {} as Record<string, number>);

  // Calculate monthly data
  const monthlyData = transactions.reduce((acc, transaction) => {
    const month = new Date(transaction.date).toLocaleDateString('en-US', { month: 'short' });
    if (!acc[month]) {
      acc[month] = { income: 0, expenses: 0 };
    }
    if (transaction.type === 'income') {
      acc[month].income += transaction.amount;
    } else {
      acc[month].expenses += transaction.amount;
    }
    return acc;
  }, {} as Record<string, { income: number; expenses: number }>);

  const doughnutData = {
    labels: Object.keys(expensesByCategory),
    datasets: [
      {
        data: Object.values(expensesByCategory),
        backgroundColor: [
          '#FF6384',
          '#36A2EB',
          '#FFCE56',
          '#4BC0C0',
          '#9966FF',
          '#FF9F40',
          '#FF6384',
          '#C9CBCF'
        ],
        borderWidth: 0,
      },
    ],
  };

  const barData = {
    labels: Object.keys(monthlyData),
    datasets: [
      {
        label: 'Income',
        data: Object.values(monthlyData).map(d => d.income),
        backgroundColor: '#10B981',
        borderRadius: 8,
      },
      {
        label: 'Expenses',
        data: Object.values(monthlyData).map(d => d.expenses),
        backgroundColor: '#EF4444',
        borderRadius: 8,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'bottom' as const,
        labels: {
          padding: 20,
          usePointStyle: true,
        },
      },
      tooltip: {
        callbacks: {
          label: (context: any) => {
            const value = typeof context.parsed === 'object' ? context.parsed.y : context.parsed;
            return `${context.label}: ${formatCurrency(value, currency)}`;
          },
        },
      },
    },
  };

  const barOptions = {
    ...chartOptions,
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          callback: (value: any) => formatCurrency(value, currency),
        },
      },
    },
  };

  if (transactions.length === 0) {
    return (
      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 text-center">
          <h3 className="text-lg font-semibold text-gray-600 dark:text-gray-300 mb-2">Expense Categories</h3>
          <p className="text-gray-500 dark:text-gray-400">Add transactions to see your spending breakdown</p>
        </div>
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 text-center">
          <h3 className="text-lg font-semibold text-gray-600 dark:text-gray-300 mb-2">Monthly Overview</h3>
          <p className="text-gray-500 dark:text-gray-400">Track your income vs expenses over time</p>
        </div>
      </div>
    );
  }

  return (
    <div className="grid md:grid-cols-2 gap-6">
      {Object.keys(expensesByCategory).length > 0 && (
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
          <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">Expense Categories</h3>
          <div className="h-64">
            <Doughnut data={doughnutData} options={chartOptions} />
          </div>
        </div>
      )}
      
      {Object.keys(monthlyData).length > 0 && (
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
          <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">Monthly Overview</h3>
          <div className="h-64">
            <Bar data={barData} options={barOptions} />
          </div>
        </div>
      )}
    </div>
  );
};

export default Charts;