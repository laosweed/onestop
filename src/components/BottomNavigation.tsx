import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Home, Building, Car, Truck, FileText, Ship, AlertTriangle } from 'lucide-react';
import { cn } from '../utils/cn';

interface BottomNavigationProps {
  onLogout: () => void;
}

const BottomNavigation: React.FC<BottomNavigationProps> = ({ onLogout }) => {
  const location = useLocation();
  const navigate = useNavigate();

  const navItems = [
    { path: '/', icon: Home, label: 'Dashboard' },
    { path: '/licensing', icon: FileText, label: 'Licenses' },
    { path: '/building', icon: Building, label: 'Building' },
    { path: '/vehicles', icon: Car, label: 'Vehicles' },
    { path: '/overseas', icon: Truck, label: 'Overseas' },
    { path: '/maritime', icon: Ship, label: 'Maritime' },
    { path: '/incidents', icon: AlertTriangle, label: 'Incidents' },
  ];

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 z-50">
      <div className="max-w-md mx-auto">
        <div className="flex justify-around items-center py-2">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = location.pathname === item.path;
            
            return (
              <button
                key={item.path}
                onClick={() => navigate(item.path)}
                className={cn(
                  "flex flex-col items-center py-2 px-3 rounded-lg transition-colors duration-200",
                  isActive 
                    ? "text-primary-600 bg-primary-50" 
                    : "text-gray-500 hover:text-gray-700"
                )}
              >
                <Icon size={20} />
                <span className="text-xs mt-1 font-medium">{item.label}</span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default BottomNavigation;
