import React, { useState } from 'react';
import { 
  Ship, 
  Anchor, 
  MapPin, 
  Calendar, 
  DollarSign, 
  AlertTriangle,
  CheckCircle,
  Clock,
  Plus,
  Search,
  Filter,
  BarChart3,
  FileText,
  Shield,
  Navigation,
  Globe,
  User,
  Gauge,
  Waves,
  Compass,
  Wind,
  Thermometer,
  Eye,
  Edit,
  Download
} from 'lucide-react';

interface Vessel {
  id: string;
  name: string;
  registrationNumber: string;
  vesselType: 'cargo' | 'passenger' | 'fishing' | 'tanker' | 'container';
  flag: string;
  grossTonnage: number;
  owner: string;
  operator: string;
  homePort: string;
  status: 'active' | 'maintenance' | 'drydock' | 'decommissioned';
  safetyRating: 'A' | 'B' | 'C' | 'D';
  lastInspection: string;
  nextInspection: string;
  insuranceExpiry: string;
  crewSize: number;
}

const MaritimeManagement = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [searchTerm, setSearchTerm] = useState('');

  const mockVessels: Vessel[] = [
    {
      id: '1',
      name: 'Ocean Voyager',
      registrationNumber: 'MV-2024-001',
      vesselType: 'cargo',
      flag: 'Panama',
      grossTonnage: 25000,
      owner: 'Maritime Corp Ltd',
      operator: 'Global Shipping Co',
      homePort: 'Port Said',
      status: 'active',
      safetyRating: 'A',
      lastInspection: '2024-01-15',
      nextInspection: '2024-07-15',
      insuranceExpiry: '2024-12-31',
      crewSize: 25
    },
    {
      id: '2',
      name: 'Blue Horizon',
      registrationNumber: 'MV-2024-002',
      vesselType: 'container',
      flag: 'Liberia',
      grossTonnage: 45000,
      owner: 'Container Lines Inc',
      operator: 'Fast Freight Ltd',
      homePort: 'Alexandria',
      status: 'active',
      safetyRating: 'A',
      lastInspection: '2024-02-01',
      nextInspection: '2024-08-01',
      insuranceExpiry: '2024-06-30',
      crewSize: 30
    },
    {
      id: '3',
      name: 'Sea Explorer',
      registrationNumber: 'MV-2024-003',
      vesselType: 'fishing',
      flag: 'Egypt',
      grossTonnage: 800,
      owner: 'Red Sea Fisheries',
      operator: 'Red Sea Fisheries',
      homePort: 'Suez',
      status: 'maintenance',
      safetyRating: 'B',
      lastInspection: '2023-12-01',
      nextInspection: '2024-06-01',
      insuranceExpiry: '2024-03-15',
      crewSize: 8
    }
  ];

  const filteredVessels = mockVessels.filter(vessel =>
    vessel.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    vessel.registrationNumber.toLowerCase().includes(searchTerm.toLowerCase()) ||
    vessel.owner.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'active':
        return <span className="status-badge status-active">Active</span>;
      case 'maintenance':
        return <span className="status-badge status-pending">Maintenance</span>;
      case 'drydock':
        return <span className="status-badge status-expired">Dry Dock</span>;
      case 'decommissioned':
        return <span className="status-badge status-expired">Decommissioned</span>;
      default:
        return null;
    }
  };

  const getSafetyRatingBadge = (rating: string) => {
    const colors = {
      'A': 'bg-green-100 text-green-800',
      'B': 'bg-blue-100 text-blue-800',
      'C': 'bg-yellow-100 text-yellow-800',
      'D': 'bg-red-100 text-red-800'
    };
    return (
      <span className={`px-2 py-1 rounded-full text-xs font-medium ${colors[rating as keyof typeof colors]}`}>
        Safety Rating {rating}
      </span>
    );
  };

  return (
    <>
      <div className="p-4 space-y-6">
        {/* Header */}
        <div className="flex items-center space-x-3">
          <div className="p-2 bg-blue-100 rounded-lg">
            <Ship className="w-6 h-6 text-blue-600" />
          </div>
          <div>
            <h1 className="text-xl font-bold text-gray-900">Maritime Management</h1>
            <p className="text-sm text-gray-600">Vessels, Port Operations & Safety</p>
          </div>
        </div>

        {/* Search and Filter */}
        <div className="flex space-x-2">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            <input
              type="text"
              placeholder="Search vessels, permits, or operations..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="input-field pl-10"
            />
          </div>
          <button className="btn-secondary">
            <Filter className="w-4 h-4" />
          </button>
        </div>

        {/* Responsive Tabs */}
        <div className="bg-gray-100 rounded-lg p-1">
          <div className="flex overflow-x-auto scrollbar-hide">
            {[
              { id: 'overview', label: 'Overview', icon: BarChart3 },
              { id: 'vessels', label: 'Vessels', icon: Ship },
              { id: 'operations', label: 'Port Operations', icon: Anchor },
              { id: 'permits', label: 'Permits', icon: FileText },
              { id: 'safety', label: 'Safety', icon: Shield },
              { id: 'tracking', label: 'Tracking', icon: Navigation }
            ].map((tab) => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex-shrink-0 flex items-center space-x-2 py-2 px-4 rounded-md text-sm font-medium transition-colors whitespace-nowrap ${
                    activeTab === tab.id
                      ? 'bg-white text-primary-600 shadow-sm'
                      : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span className="hidden sm:inline">{tab.label}</span>
                  <span className="sm:hidden">{tab.label.charAt(0).toUpperCase() + tab.label.slice(1, 3)}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Overview Stats */}
        {activeTab === 'overview' && (
          <div className="grid grid-cols-2 gap-4">
            <div className="card text-center">
              <Ship className="w-8 h-8 text-blue-600 mx-auto mb-2" />
              <div className="text-2xl font-bold text-gray-900">45</div>
              <div className="text-sm text-gray-600">Active Vessels</div>
            </div>
            <div className="card text-center">
              <Anchor className="w-8 h-8 text-green-600 mx-auto mb-2" />
              <div className="text-2xl font-bold text-gray-900">12</div>
              <div className="text-sm text-gray-600">Port Operations</div>
            </div>
            <div className="card text-center">
              <Shield className="w-8 h-8 text-purple-600 mx-auto mb-2" />
              <div className="text-2xl font-bold text-gray-900">38</div>
              <div className="text-sm text-gray-600">Safety Rating A</div>
            </div>
            <div className="card text-center">
              <DollarSign className="w-8 h-8 text-orange-600 mx-auto mb-2" />
              <div className="text-2xl font-bold text-gray-900">$2.8M</div>
              <div className="text-sm text-gray-600">Revenue</div>
            </div>
          </div>
        )}

        {/* Vessels List */}
        {activeTab === 'vessels' && (
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-semibold text-gray-900">Registered Vessels</h2>
              <button className="btn-primary flex items-center space-x-2">
                <Plus className="w-4 h-4" />
                <span>Register Vessel</span>
              </button>
            </div>

            {filteredVessels.map((vessel) => (
              <div key={vessel.id} className="card">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h3 className="font-semibold text-gray-900">{vessel.name}</h3>
                    <p className="text-sm text-gray-600">{vessel.registrationNumber} • {vessel.vesselType}</p>
                  </div>
                  <div className="flex items-center space-x-2">
                    {getStatusBadge(vessel.status)}
                    {getSafetyRatingBadge(vessel.safetyRating)}
                  </div>
                </div>
                
                {/* Vessel Details */}
                <div className="grid grid-cols-2 gap-4 text-sm mb-3">
                  <div className="flex items-center space-x-2">
                    <Globe className="w-4 h-4 text-gray-400" />
                    <span>Flag: {vessel.flag}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <MapPin className="w-4 h-4 text-gray-400" />
                    <span>Port: {vessel.homePort}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Gauge className="w-4 h-4 text-gray-400" />
                    <span>GT: {vessel.grossTonnage.toLocaleString()}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <User className="w-4 h-4 text-gray-400" />
                    <span>Crew: {vessel.crewSize}</span>
                  </div>
                </div>

                {/* Owner & Operator */}
                <div className="mb-3 p-2 bg-gray-50 rounded-lg">
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <span className="text-gray-500">Owner:</span>
                      <div className="font-medium">{vessel.owner}</div>
                    </div>
                    <div>
                      <span className="text-gray-500">Operator:</span>
                      <div className="font-medium">{vessel.operator}</div>
                    </div>
                  </div>
                </div>
                
                {/* Inspection & Insurance */}
                <div className="pt-3 border-t border-gray-100">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex space-x-4 text-sm text-gray-600">
                      <span>Next Inspection: {vessel.nextInspection}</span>
                      <span>Insurance: {vessel.insuranceExpiry}</span>
                    </div>
                    <div className="flex space-x-2">
                      <button className="p-1 text-gray-400 hover:text-gray-600">
                        <Eye className="w-4 h-4" />
                      </button>
                      <button className="p-1 text-gray-400 hover:text-gray-600">
                        <Edit className="w-4 h-4" />
                      </button>
                      <button className="p-1 text-gray-400 hover:text-gray-600">
                        <Download className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-primary-600 h-2 rounded-full" 
                      style={{ width: '85%' }}
                    ></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Port Operations */}
        {activeTab === 'operations' && (
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-semibold text-gray-900">Port Operations</h2>
              <button className="btn-primary flex items-center space-x-2">
                <Plus className="w-4 h-4" />
                <span>Schedule Operation</span>
              </button>
            </div>

            <div className="card">
              <div className="text-center py-8">
                <Anchor className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Port Operations</h3>
                <p className="text-gray-600">Port operations management will be implemented here</p>
              </div>
            </div>
          </div>
        )}

        {/* Maritime Permits */}
        {activeTab === 'permits' && (
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-semibold text-gray-900">Maritime Permits</h2>
              <button className="btn-primary flex items-center space-x-2">
                <Plus className="w-4 h-4" />
                <span>Apply Permit</span>
              </button>
            </div>

            <div className="card">
              <div className="text-center py-8">
                <FileText className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Maritime Permits</h3>
                <p className="text-gray-600">Permit management will be implemented here</p>
              </div>
            </div>
          </div>
        )}

        {/* Safety Management */}
        {activeTab === 'safety' && (
          <div className="space-y-4">
            <h2 className="text-lg font-semibold text-gray-900">Safety Management</h2>
            
            <div className="card">
              <div className="text-center py-8">
                <Shield className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Safety Management</h3>
                <p className="text-gray-600">Safety management features will be implemented here</p>
              </div>
            </div>
          </div>
        )}

        {/* Vessel Tracking */}
        {activeTab === 'tracking' && (
          <div className="space-y-4">
            <h2 className="text-lg font-semibold text-gray-900">Vessel Tracking</h2>
            
            <div className="card">
              <div className="text-center py-8">
                <Navigation className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Vessel Tracking</h3>
                <p className="text-gray-600">Vessel tracking features will be implemented here</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default MaritimeManagement;
