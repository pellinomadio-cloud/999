
import React from 'react';
import Header from './components/Header';
import BalanceCard from './components/BalanceCard';
import Actions from './components/Actions';
import TransactionHistory from './components/TransactionHistory';
import BottomNav from './components/BottomNav';

const App: React.FC = () => {
  return (
    <div className="bg-gray-100 dark:bg-gray-900 min-h-screen font-sans flex items-center justify-center">
      <div className="relative mx-auto w-full max-w-sm bg-white dark:bg-black rounded-3xl shadow-2xl overflow-hidden h-[844px] flex flex-col">
        <Header />
        <main className="flex-1 px-6 py-2 overflow-y-auto no-scrollbar">
          <BalanceCard />
          <Actions />
          <TransactionHistory />
        </main>
        <BottomNav />
      </div>
    </div>
  );
};

// Helper style to hide scrollbar
const style = document.createElement('style');
style.textContent = `
  .no-scrollbar::-webkit-scrollbar {
    display: none;
  }
  .no-scrollbar {
    -ms-overflow-style: none;
    scrollbar-width: none;
  }
`;
document.head.append(style);

export default App;
