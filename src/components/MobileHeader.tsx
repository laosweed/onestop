import React from 'react';
import { Menu, Bell, Search } from 'lucide-react';
import { cn } from '../utils/cn';

interface MobileHeaderProps {
  onMenuToggle: () => void;
  title?: string;
  showSearch?: boolean;
}

const MobileHeader: React.FC<MobileHeaderProps> = ({ 
  onMenuToggle, 
  title = "Public Service", 
  showSearch = false 
}) => {
  return (
    <header className="sticky top-0 z-30 bg-white border-b border-gray-200 lg:hidden">
      <div className="flex items-center justify-between px-4 py-3">
        {/* Left Section - Menu Button */}
        <div className="flex items-center space-x-3">
          <button
            onClick={onMenuToggle}
            className="p-2 rounded-lg bg-gray-100 text-gray-600 hover:bg-gray-200 transition-colors"
            aria-label="Open menu"
          >
            <Menu className="w-5 h-5" />
          </button>
          
          {/* Title */}
          <div>
            <h1 className="text-lg font-semibold text-gray-900">{title}</h1>
          </div>
        </div>

        {/* Right Section - Actions */}
        <div className="flex items-center space-x-2">
          {showSearch && (
            <button
              className="p-2 rounded-lg bg-gray-100 text-gray-600 hover:bg-gray-200 transition-colors"
              aria-label="Search"
            >
              <Search className="w-5 h-5" />
            </button>
          )}
          
          <button
            className="relative p-2 rounded-lg bg-gray-100 text-gray-600 hover:bg-gray-200 transition-colors"
            aria-label="Notifications"
          >
            <Bell className="w-5 h-5" />
            {/* Notification Badge */}
            <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full border-2 border-white"></div>
          </button>
        </div>
      </div>
    </header>
  );
};

export default MobileHeader;
