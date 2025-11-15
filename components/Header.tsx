
import React from 'react';
import { BellIcon } from './Icons';

const Header: React.FC = () => {
  return (
    <header className="flex items-center justify-between p-6 bg-white dark:bg-black sticky top-0 z-10">
      <div className="flex items-center space-x-3">
        <img
          src="https://picsum.photos/seed/user-avatar/40/40"
          alt="User Avatar"
          className="w-10 h-10 rounded-full object-cover"
        />
        <div>
          <p className="text-sm text-gray-500 dark:text-gray-400">Welcome back,</p>
          <h1 className="font-bold text-gray-800 dark:text-gray-100">David</h1>
        </div>
      </div>
      <button className="relative text-gray-400 hover:text-blue-500 transition-colors">
        <BellIcon className="w-6 h-6" />
        <span className="absolute top-0 right-0 block h-2 w-2 rounded-full bg-red-500 ring-2 ring-white dark:ring-black"></span>
      </button>
    </header>
  );
};

export default Header;
