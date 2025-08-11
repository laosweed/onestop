import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { 
  Home, 
  Building, 
  Car, 
  Truck, 
  FileText, 
  Ship,
  Anchor,
  Navigation,
  AlertTriangle,
  TrendingUp,
  X, 
  User, 
  Settings, 
  HelpCircle, 
  LogOut,
  Bell,
  Shield,
  Plus,
  Upload,
  Search,
  Clock,
  DollarSign,
  Users,
  MapPin,
  CheckCircle,
  BarChart3,
  Download,
  Edit,
  Eye,
  ChevronDown,
  ChevronRight
} from 'lucide-react';
import { cn } from '../utils/cn';

interface MobileSidebarProps {
  isOpen: boolean;
  onClose: () => void;
  onLogout: () => void;
}

const MobileSidebar: React.FC<MobileSidebarProps> = ({ isOpen, onClose, onLogout }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const [expandedService, setExpandedService] = useState<string | null>(null);

  const mainNavItems = [
    { 
      path: '/', 
      icon: Home, 
      label: 'Dashboard', 
      description: 'Overview & Statistics',
      quickActions: [
        { icon: BarChart3, label: 'View Reports', action: 'dashboard-reports' },
        { icon: Bell, label: 'Recent Activities', action: 'dashboard-activities' },
        { icon: CheckCircle, label: 'System Status', action: 'dashboard-status' }
      ]
    },
    { 
      path: '/licensing', 
      icon: FileText, 
      label: 'Licensing Management', 
      description: 'Registration & Renewals',
      quickActions: [
        { icon: Plus, label: 'New Application', action: 'licensing-new' },
        { icon: Upload, label: 'Upload Documents', action: 'licensing-upload' },
        { icon: Search, label: 'Track Status', action: 'licensing-track' },
        { icon: Clock, label: 'Renewals Due', action: 'licensing-renewals' },
        { icon: Bell, label: 'Notifications', action: 'licensing-notifications' }
      ]
    },
    { 
      path: '/building', 
      icon: Building, 
      label: 'Building Permits', 
      description: 'Construction & ESIA',
      quickActions: [
        { icon: Plus, label: 'New Project', action: 'building-new' },
        { icon: FileText, label: 'ESIA Application', action: 'building-esia' },
        { icon: Users, label: 'Contractor Mgmt', action: 'building-contractors' },
        { icon: MapPin, label: 'Site Inspection', action: 'building-inspection' },
        { icon: DollarSign, label: 'Fee Payments', action: 'building-fees' },
        { icon: Upload, label: 'Upload Docs', action: 'building-upload' }
      ]
    },
    { 
      path: '/vehicles', 
      icon: Car, 
      label: 'Vehicle Registration', 
      description: 'Cars & Drivers',
      quickActions: [
        { icon: Plus, label: 'Register Vehicle', action: 'vehicle-register' },
        { icon: User, label: 'Add Driver', action: 'vehicle-driver' },
        { icon: CheckCircle, label: 'Technical Test', action: 'vehicle-test' },
        { icon: DollarSign, label: 'Road Fees', action: 'vehicle-fees' },
        { icon: Clock, label: 'Renewals', action: 'vehicle-renewals' }
      ]
    },
    { 
      path: '/overseas', 
      icon: Truck, 
      label: 'Overseas Permission', 
      description: 'Cross-border Operations',
      quickActions: [
        { icon: Plus, label: 'New Permit', action: 'overseas-new' },
        { icon: MapPin, label: 'Route Planning', action: 'overseas-route' },
        { icon: BarChart3, label: 'GPS Tracking', action: 'overseas-tracking' },
        { icon: DollarSign, label: 'Fees & Taxes', action: 'overseas-fees' },
        { icon: FileText, label: 'Documentation', action: 'overseas-docs' }
      ]
    },
    { 
      path: '/maritime', 
      icon: Ship, 
      label: 'Maritime Management', 
      description: 'Vessels & Port Operations',
      quickActions: [
        { icon: Plus, label: 'Register Vessel', action: 'maritime-vessel' },
        { icon: Anchor, label: 'Port Operations', action: 'maritime-operations' },
        { icon: FileText, label: 'Maritime Permits', action: 'maritime-permits' },
        { icon: Shield, label: 'Safety Compliance', action: 'maritime-safety' },
        { icon: Navigation, label: 'Vessel Tracking', action: 'maritime-tracking' }
      ]
    },
    { 
      path: '/incidents', 
      icon: AlertTriangle, 
      label: 'Incident Management', 
      description: 'Safety & Security',
      quickActions: [
        { icon: Plus, label: 'Report Incident', action: 'incident-report' },
        { icon: AlertTriangle, label: 'Active Incidents', action: 'incident-active' },
        { icon: FileText, label: 'Incident Reports', action: 'incident-reports' },
        { icon: TrendingUp, label: 'Analytics', action: 'incident-analytics' },
        { icon: Shield, label: 'Prevention', action: 'incident-prevention' }
      ]
    },
  ];

  const bottomNavItems = [
    { icon: User, label: 'Profile', action: 'profile' },
    { icon: Bell, label: 'Notifications', action: 'notifications' },
    { icon: Settings, label: 'Settings', action: 'settings' },
    { icon: HelpCircle, label: 'Help & Support', action: 'help' },
    { icon: LogOut, label: 'Logout', action: 'logout' },
  ];

  const handleNavigation = (path: string) => {
    navigate(path);
    onClose();
  };

  const handleAction = (action: string) => {
    switch (action) {
      case 'logout':
        onLogout();
        break;
      case 'profile':
      case 'notifications':
      case 'settings':
      case 'help':
        // These could navigate to specific pages or open modals
        console.log(`Action: ${action}`);
        break;
      // Quick actions for different services
      case 'dashboard-reports':
        navigate('/reports');
        break;
      case 'licensing-new':
      case 'building-new':
      case 'vehicle-register':
      case 'overseas-new':
      case 'maritime-vessel':
      case 'maritime-operations':
      case 'maritime-permits':
      case 'maritime-safety':
      case 'maritime-tracking':
      case 'incident-report':
      case 'incident-active':
      case 'incident-reports':
      case 'incident-analytics':
      case 'incident-prevention':
        console.log(`Quick action: ${action}`);
        // These could trigger modals or navigate to specific forms
        break;
      default:
        console.log(`Quick action: ${action}`);
        break;
    }
    onClose();
  };

  const toggleServiceExpansion = (path: string) => {
    setExpandedService(expandedService === path ? null : path);
  };

  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={onClose}
        />
      )}

      {/* Sidebar */}
      <div className={cn(
        "fixed inset-y-0 left-0 z-50 w-80 bg-white shadow-xl transform transition-transform duration-300 ease-in-out lg:hidden",
        isOpen ? "translate-x-0" : "-translate-x-full"
      )}>
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-gray-200 bg-gradient-to-r from-primary-600 to-blue-600">
          <div className="flex items-center space-x-3">
            <img src="/pwt.png" alt="PWT Logo" className="w-8 h-8 object-contain" />
            <div>
              <h2 className="text-lg font-bold text-white">Public Service</h2>
              <p className="text-xs text-primary-100">Mobile Portal</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-lg bg-white bg-opacity-20 text-white hover:bg-opacity-30 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* User Info */}
        <div className="p-4 bg-gray-50 border-b border-gray-200">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-primary-600 rounded-full flex items-center justify-center">
              <User className="w-6 h-6 text-white" />
            </div>
            <div>
              <h3 className="font-semibold text-gray-900">John Doe</h3>
              <p className="text-sm text-gray-600">Authorized User</p>
              <div className="flex items-center mt-1">
                <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                <span className="text-xs text-green-600">Online</span>
              </div>
            </div>
          </div>
        </div>

        {/* Main Navigation */}
        <div className="flex-1 overflow-y-auto">
          <div className="p-4">
            <div className="flex items-center justify-between mb-3">
              <h4 className="text-xs font-semibold text-gray-500 uppercase tracking-wider">
                Main Services
              </h4>
              <span className="text-xs text-gray-400">
                {expandedService ? 'Expanded' : 'Tap chevron for actions'}
              </span>
            </div>
            <nav className="space-y-1">
              {mainNavItems.map((item) => {
                const Icon = item.icon;
                const isActive = location.pathname === item.path;
                const isExpanded = expandedService === item.path;
                
                return (
                  <div key={item.path} className="space-y-1">
                    {/* Main Navigation Item */}
                    <div className={cn(
                      "flex items-center rounded-lg transition-colors duration-200",
                      isActive 
                        ? "bg-primary-50 text-primary-700 border-l-4 border-primary-600" 
                        : "text-gray-700 hover:bg-gray-100"
                    )}>
                      <button
                        onClick={() => handleNavigation(item.path)}
                        className="flex-1 flex items-center px-3 py-3 text-left"
                      >
                        <Icon className={cn(
                          "w-5 h-5 mr-3",
                          isActive ? "text-primary-600" : "text-gray-500"
                        )} />
                        <div className="flex-1">
                          <div className="font-medium">{item.label}</div>
                          <div className="text-xs text-gray-500 mt-0.5 flex items-center">
                            <span>{item.description}</span>
                            <span className="ml-2 px-1.5 py-0.5 bg-gray-200 text-gray-600 rounded-full text-xs">
                              {item.quickActions.length}
                            </span>
                          </div>
                        </div>
                        {isActive && (
                          <div className="w-2 h-2 bg-primary-600 rounded-full mr-2"></div>
                        )}
                      </button>
                      
                      {/* Expand/Collapse Button */}
                      <button
                        onClick={() => toggleServiceExpansion(item.path)}
                        className="px-2 py-3 text-gray-400 hover:text-gray-600 transition-colors"
                      >
                        {isExpanded ? (
                          <ChevronDown className="w-4 h-4" />
                        ) : (
                          <ChevronRight className="w-4 h-4" />
                        )}
                      </button>
                    </div>

                    {/* Quick Actions (Expandable) */}
                    {isExpanded && (
                      <div className="ml-6 pl-4 border-l-2 border-gray-200 space-y-1">
                        {item.quickActions.map((action, index) => {
                          const ActionIcon = action.icon;
                          return (
                            <button
                              key={index}
                              onClick={() => handleAction(action.action)}
                              className="w-full flex items-center px-3 py-2 text-sm text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-lg transition-colors duration-200"
                            >
                              <ActionIcon className="w-4 h-4 mr-3 text-gray-400" />
                              <span>{action.label}</span>
                            </button>
                          );
                        })}
                      </div>
                    )}
                  </div>
                );
              })}
            </nav>
          </div>

          {/* Quick Stats */}
          <div className="p-4 border-t border-gray-200">
            <h4 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">
              Quick Overview
            </h4>
            <div className="grid grid-cols-2 gap-3">
              <div className="bg-blue-50 p-3 rounded-lg text-center">
                <div className="text-lg font-bold text-blue-600">8</div>
                <div className="text-xs text-blue-600">Active Applications</div>
              </div>
              <div className="bg-green-50 p-3 rounded-lg text-center">
                <div className="text-lg font-bold text-green-600">3</div>
                <div className="text-xs text-green-600">Approved Today</div>
              </div>
              <div className="bg-yellow-50 p-3 rounded-lg text-center">
                <div className="text-lg font-bold text-yellow-600">5</div>
                <div className="text-xs text-yellow-600">Pending Review</div>
              </div>
              <div className="bg-purple-50 p-3 rounded-lg text-center">
                <div className="text-lg font-bold text-purple-600">2</div>
                <div className="text-xs text-purple-600">Expiring Soon</div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-200 bg-gray-50">
          <div className="p-4">
            <h4 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">
              Account & Support
            </h4>
            <nav className="space-y-1">
              {bottomNavItems.map((item) => {
                const Icon = item.icon;
                const isLogout = item.action === 'logout';
                
                return (
                  <button
                    key={item.action}
                    onClick={() => handleAction(item.action)}
                    className={cn(
                      "w-full flex items-center px-3 py-2 rounded-lg text-left transition-colors duration-200",
                      isLogout 
                        ? "text-red-600 hover:bg-red-50" 
                        : "text-gray-700 hover:bg-gray-100"
                    )}
                  >
                    <Icon className={cn(
                      "w-4 h-4 mr-3",
                      isLogout ? "text-red-500" : "text-gray-500"
                    )} />
                    <span className="font-medium">{item.label}</span>
                    {item.action === 'notifications' && (
                      <div className="ml-auto w-2 h-2 bg-red-500 rounded-full"></div>
                    )}
                  </button>
                );
              })}
            </nav>
          </div>

          {/* App Version */}
          <div className="px-4 py-2 border-t border-gray-200">
            <div className="flex items-center justify-between text-xs text-gray-500">
              <span>Version 1.0.0</span>
              <span>© 2024 Public Service</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MobileSidebar;
