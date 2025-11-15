
import React, { useState } from 'react';
import { HomeIcon, CardIcon, StatsIcon, SettingsIcon } from './Icons';

interface NavItemProps {
  Icon: React.ComponentType<{ className?: string }>;
  label: string;
  isActive: boolean;
  onClick: () => void;
}

const NavItem: React.FC<NavItemProps> = ({ Icon, label, isActive, onClick }) => {
  const activeClass = isActive ? 'text-blue-600' : 'text-gray-400';
  return (
    <button onClick={onClick} className={`flex flex-col items-center space-y-1 ${activeClass} hover:text-blue-500 transition-colors focus:outline-none`}>
      <Icon className="w-6 h-6" />
      <span className="text-xs font-medium">{label}</span>
    </button>
  );
};


const BottomNav: React.FC = () => {
  const [activeItem, setActiveItem] = useState('Home');
  const navItems = [
    { label: 'Home', Icon: HomeIcon },
    { label: 'Cards', Icon: CardIcon },
    { label: 'Stats', Icon: StatsIcon },
    { label: 'Settings', Icon: SettingsIcon },
  ];

  return (
    <div className="sticky bottom-0 bg-white dark:bg-black/80 backdrop-blur-sm border-t border-gray-100 dark:border-gray-800 px-6 py-3">
      <div className="flex justify-around items-center">
        {navItems.map(({ label, Icon }) => (
           <NavItem
            key={label}
            Icon={Icon}
            label={label}
            isActive={activeItem === label}
            onClick={() => setActiveItem(label)}
          />
        ))}
      </div>
    </div>
  );
};

export default BottomNav;
