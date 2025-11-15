
import React, { useState } from 'react';
import { EyeIcon, EyeSlashIcon } from './Icons';

const BalanceCard: React.FC = () => {
  const [isBalanceVisible, setIsBalanceVisible] = useState(true);
  const balance = 200000;

  const toggleVisibility = () => {
    setIsBalanceVisible(!isBalanceVisible);
  };

  return (
    <div className="bg-gradient-to-br from-blue-600 to-blue-800 text-white rounded-2xl p-6 mb-6 shadow-lg">
      <div className="flex justify-between items-center mb-2">
        <span className="text-sm opacity-80">Total Balance</span>
        <button onClick={toggleVisibility} className="focus:outline-none">
          {isBalanceVisible ? <EyeSlashIcon className="w-5 h-5 opacity-80" /> : <EyeIcon className="w-5 h-5 opacity-80" />}
        </button>
      </div>
      <div className="text-4xl font-bold tracking-tight mb-4">
        {isBalanceVisible ? `₦${balance.toLocaleString('en-US', { minimumFractionDigits: 2 })}` : '••••••••'}
      </div>
      <div className="flex items-center space-x-2 text-sm">
        <span className="bg-green-400 bg-opacity-30 text-green-100 text-xs font-semibold px-2 py-1 rounded-full">
          +5.2%
        </span>
        <span className="opacity-80">this month</span>
      </div>
    </div>
  );
};

export default BalanceCard;
