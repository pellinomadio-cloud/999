
import React from 'react';
import { SendIcon, AddIcon, BillIcon, MoreIcon } from './Icons';

interface ActionButtonProps {
  Icon: React.ComponentType<{ className?: string }>;
  label: string;
}

const ActionButton: React.FC<ActionButtonProps> = ({ Icon, label }) => (
  <div className="flex flex-col items-center space-y-2">
    <button className="bg-blue-50 dark:bg-gray-800 text-blue-600 dark:text-blue-400 w-14 h-14 rounded-full flex items-center justify-center hover:bg-blue-100 dark:hover:bg-gray-700 transition-colors shadow">
      <Icon className="w-6 h-6" />
    </button>
    <span className="text-xs text-gray-600 dark:text-gray-300 font-medium">{label}</span>
  </div>
);

const Actions: React.FC = () => {
  return (
    <div className="flex justify-around items-center my-6">
      <ActionButton Icon={SendIcon} label="Send" />
      <ActionButton Icon={AddIcon} label="Add" />
      <ActionButton Icon={BillIcon} label="Bills" />
      <ActionButton Icon={MoreIcon} label="More" />
    </div>
  );
};

export default Actions;
