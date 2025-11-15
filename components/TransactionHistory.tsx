
import React from 'react';
import type { Transaction } from '../types';
import { NetflixIcon, SpotifyIcon, TransferIcon, ChevronRightIcon } from './Icons';

const MOCK_TRANSACTIONS: Transaction[] = [
  {
    id: '1',
    type: 'debit',
    description: 'Netflix Subscription',
    category: 'Entertainment',
    amount: 5500,
    date: 'Today',
    Icon: NetflixIcon,
  },
  {
    id: '2',
    type: 'credit',
    description: 'Bank Transfer',
    category: 'Income',
    amount: 50000,
    date: 'Yesterday',
    Icon: TransferIcon,
  },
  {
    id: '3',
    type: 'debit',
    description: 'Spotify Premium',
    category: 'Music',
    amount: 2300,
    date: 'Oct 28',
    Icon: SpotifyIcon,
  },
   {
    id: '4',
    type: 'debit',
    description: 'Netflix Subscription',
    category: 'Entertainment',
    amount: 5500,
    date: 'Sep 30',
    Icon: NetflixIcon,
  },
];

const TransactionItem: React.FC<{ transaction: Transaction }> = ({ transaction }) => {
  const { Icon, description, date, amount, type } = transaction;
  const amountColor = type === 'credit' ? 'text-green-500' : 'text-gray-800 dark:text-gray-100';
  const amountPrefix = type === 'credit' ? '+' : '-';

  return (
    <div className="flex items-center justify-between py-4">
      <div className="flex items-center space-x-4">
        <div className="bg-gray-100 dark:bg-gray-800 rounded-full p-3">
          <Icon className="w-5 h-5 text-gray-600 dark:text-gray-300" />
        </div>
        <div>
          <p className="font-semibold text-gray-800 dark:text-gray-100">{description}</p>
          <p className="text-sm text-gray-500 dark:text-gray-400">{date}</p>
        </div>
      </div>
      <div className="flex items-center space-x-2">
         <p className={`font-bold ${amountColor}`}>
          {amountPrefix}₦{amount.toLocaleString()}
        </p>
        <ChevronRightIcon className="w-4 h-4 text-gray-400" />
      </div>
    </div>
  );
};

const TransactionHistory: React.FC = () => {
  return (
    <div className="mt-8">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-bold text-gray-800 dark:text-gray-100">Transactions</h2>
        <a href="#" className="text-sm font-semibold text-blue-600 hover:underline">
          View All
        </a>
      </div>
      <div>
        {MOCK_TRANSACTIONS.map((tx) => (
          <TransactionItem key={tx.id} transaction={tx} />
        ))}
      </div>
    </div>
  );
};

export default TransactionHistory;
