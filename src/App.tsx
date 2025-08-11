import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Home, Building, Car, Truck, FileText, Ship, AlertTriangle } from 'lucide-react';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import LicensingManagement from './components/LicensingManagement';
import BuildingPermits from './components/BuildingPermits';
import VehicleRegistration from './components/VehicleRegistration';
import OverseasTruckPermission from './components/OverseasTruckPermission';
import MaritimeManagement from './components/MaritimeManagement';
import IncidentManagement from './components/IncidentManagement';
import ViewReports from './components/ViewReports';
import BottomNavigation from './components/BottomNavigation';
import MobileSidebar from './components/MobileSidebar';
import MobileHeader from './components/MobileHeader';

// Main App Content Component that can use routing hooks
const AppContent: React.FC<{ onLogout: () => void }> = ({ onLogout }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const location = useLocation();

  // Get page title based on current route
  const getPageTitle = () => {
    switch (location.pathname) {
      case '/': return 'Dashboard';
      case '/licensing': return 'Licensing Management';
      case '/building': return 'Building Permits';
      case '/vehicles': return 'Vehicle Registration';
      case '/overseas': return 'Overseas Permission';
      case '/maritime': return 'Maritime Management';
      case '/incidents': return 'Incident Management';
      case '/reports': return 'Reports & Analytics';
      default: return 'Public Service';
    }
  };

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const closeSidebar = () => {
    setSidebarOpen(false);
  };

  return (
    <div className="mobile-container">
      {/* Mobile Header */}
      <MobileHeader 
        onMenuToggle={toggleSidebar}
        title={getPageTitle()}
        showSearch={true}
      />

      {/* Mobile Sidebar */}
      <MobileSidebar 
        isOpen={sidebarOpen}
        onClose={closeSidebar}
        onLogout={onLogout}
      />

      {/* Main Content */}
      <div className="pb-20">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/licensing" element={<LicensingManagement />} />
          <Route path="/building" element={<BuildingPermits />} />
          <Route path="/vehicles" element={<VehicleRegistration />} />
          <Route path="/overseas" element={<OverseasTruckPermission />} />
          <Route path="/maritime" element={<MaritimeManagement />} />
          <Route path="/incidents" element={<IncidentManagement />} />
          <Route path="/reports" element={<ViewReports />} />
        </Routes>
      </div>

      {/* Bottom Navigation */}
      <BottomNavigation onLogout={onLogout} />
    </div>
  );
};

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  // Check for existing authentication on app load
  useEffect(() => {
    const checkAuth = () => {
      const savedAuth = localStorage.getItem('publicservice_auth');
      if (savedAuth === 'true') {
        setIsAuthenticated(true);
      }
      setIsLoading(false);
    };

    // Simulate loading time
    setTimeout(checkAuth, 1000);
  }, []);

  const handleLogin = (success: boolean) => {
    if (success) {
      setIsAuthenticated(true);
      localStorage.setItem('publicservice_auth', 'true');
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    localStorage.removeItem('publicservice_auth');
  };

  // Loading screen
  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50 flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-blue-600 border-t-transparent rounded-full animate-spin mb-4"></div>
          <h2 className="text-xl font-semibold text-gray-700">Loading Public Service Portal...</h2>
        </div>
      </div>
    );
  }

  // Show login if not authenticated
  if (!isAuthenticated) {
    return <Login onLogin={handleLogin} />;
  }

  // Show main app if authenticated
  return (
    <Router>
      <AppContent onLogout={handleLogout} />
    </Router>
  );
}

export default App;
