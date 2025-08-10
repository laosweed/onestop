import React, { useState } from 'react';
import { 
  Truck, 
  User, 
  MapPin, 
  Calendar, 
  DollarSign, 
  AlertTriangle,
  CheckCircle,
  Clock,
  Plus,
  Search,
  Filter,
  Navigation,
  Scale,
  Shield,
  Globe,
  Map,
  FileText
} from 'lucide-react';

interface OverseasTruck {
  id: string;
  truckNumber: string;
  driverName: string;
  driverLicense: string;
  vehicleSpecs: {
    make: string;
    model: string;
    year: number;
    weight: number;
    emptyWeight: number;
  };
  routePermit: {
    origin: string;
    destination: string;
    route: string;
    validityStart: string;
    validityEnd: string;
  };
  gpsTracking: boolean;
  status: 'active' | 'expired' | 'pending';
  fees: {
    permitFee: number;
    deposit: number;
    taxes: number;
    total: number;
  };
  obligations: string[];
}

const OverseasTruckPermission = () => {
  const [activeTab, setActiveTab] = useState('trucks');
  const [searchTerm, setSearchTerm] = useState('');

  const mockTrucks: OverseasTruck[] = [
    {
      id: '1',
      truckNumber: 'TRK-2024-001',
      driverName: 'Ahmed Hassan',
      driverLicense: 'INT-DL-2024-001',
      vehicleSpecs: {
        make: 'Volvo',
        model: 'FH16',
        year: 2022,
        weight: 40000,
        emptyWeight: 8500
      },
      routePermit: {
        origin: 'Cairo, Egypt',
        destination: 'Dubai, UAE',
        route: 'Cairo → Suez → Aqaba → Dubai',
        validityStart: '2024-01-01',
        validityEnd: '2024-12-31'
      },
      gpsTracking: true,
      status: 'active',
      fees: {
        permitFee: 5000,
        deposit: 2000,
        taxes: 1500,
        total: 8500
      },
      obligations: ['Insurance', 'Safety Equipment', 'Route Compliance']
    },
    {
      id: '2',
      truckNumber: 'TRK-2024-002',
      driverName: 'Mohammed Ali',
      driverLicense: 'INT-DL-2024-002',
      vehicleSpecs: {
        make: 'Scania',
        model: 'R500',
        year: 2023,
        weight: 35000,
        emptyWeight: 7800
      },
      routePermit: {
        origin: 'Alexandria, Egypt',
        destination: 'Jeddah, Saudi Arabia',
        route: 'Alexandria → Port Said → Jeddah',
        validityStart: '2024-02-01',
        validityEnd: '2024-08-01'
      },
      gpsTracking: false,
      status: 'pending',
      fees: {
        permitFee: 4000,
        deposit: 1500,
        taxes: 1200,
        total: 6700
      },
      obligations: ['Insurance', 'Safety Equipment']
    },
    {
      id: '3',
      truckNumber: 'TRK-2024-003',
      driverName: 'Omar Khalil',
      driverLicense: 'INT-DL-2024-003',
      vehicleSpecs: {
        make: 'Mercedes-Benz',
        model: 'Actros',
        year: 2021,
        weight: 38000,
        emptyWeight: 8200
      },
      routePermit: {
        origin: 'Giza, Egypt',
        destination: 'Amman, Jordan',
        route: 'Giza → Sinai → Amman',
        validityStart: '2023-06-01',
        validityEnd: '2024-05-31'
      },
      gpsTracking: true,
      status: 'expired',
      fees: {
        permitFee: 4500,
        deposit: 1800,
        taxes: 1350,
        total: 7650
      },
      obligations: ['Insurance', 'Safety Equipment', 'Route Compliance', 'Weight Verification']
    }
  ];

  const filteredTrucks = mockTrucks.filter(truck =>
    truck.truckNumber.toLowerCase().includes(searchTerm.toLowerCase()) ||
    truck.driverName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'active':
        return <span className="status-badge status-active">Active</span>;
      case 'expired':
        return <span className="status-badge status-expired">Expired</span>;
      case 'pending':
        return <span className="status-badge status-pending">Pending</span>;
      default:
        return null;
    }
  };

  return (
    <div className="p-4 space-y-6">
      {/* Header */}
      <div className="flex items-center space-x-3">
        <div className="p-2 bg-orange-100 rounded-lg">
          <Truck className="w-6 h-6 text-orange-600" />
        </div>
        <div>
          <h1 className="text-xl font-bold text-gray-900">Overseas Truck Permission</h1>
          <p className="text-sm text-gray-600">Cross-border operations</p>
        </div>
      </div>

      {/* Search and Filter */}
      <div className="flex space-x-2">
        <div className="flex-1 relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
          <input
            type="text"
            placeholder="Search trucks..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="input-field pl-10"
          />
        </div>
        <button className="btn-secondary">
          <Filter className="w-4 h-4" />
        </button>
      </div>

      {/* Tabs */}
      <div className="flex space-x-1 bg-gray-100 p-1 rounded-lg">
        {['trucks', 'routes', 'tracking', 'fees'].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`flex-1 py-2 px-3 rounded-md text-sm font-medium transition-colors ${
              activeTab === tab
                ? 'bg-white text-primary-600 shadow-sm'
                : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            {tab.charAt(0).toUpperCase() + tab.slice(1)}
          </button>
        ))}
      </div>

      {/* Overview Stats */}
      {activeTab === 'trucks' && (
        <div className="grid grid-cols-2 gap-4">
          <div className="card text-center">
            <CheckCircle className="w-8 h-8 text-success-600 mx-auto mb-2" />
            <div className="text-2xl font-bold text-gray-900">6</div>
            <div className="text-sm text-gray-600">Active Trucks</div>
          </div>
          <div className="card text-center">
            <Clock className="w-8 h-8 text-warning-600 mx-auto mb-2" />
            <div className="text-2xl font-bold text-gray-900">1</div>
            <div className="text-sm text-gray-600">Pending Review</div>
          </div>
          <div className="card text-center">
            <AlertTriangle className="w-8 h-8 text-danger-600 mx-auto mb-2" />
            <div className="text-2xl font-bold text-gray-900">2</div>
            <div className="text-sm text-gray-600">Expired</div>
          </div>
          <div className="card text-center">
            <DollarSign className="w-8 h-8 text-primary-600 mx-auto mb-2" />
            <div className="text-2xl font-bold text-gray-900">$22.8K</div>
            <div className="text-sm text-gray-600">Total Fees</div>
          </div>
        </div>
      )}

      {/* Trucks List */}
      {activeTab === 'trucks' && (
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold text-gray-900">Overseas Trucks</h2>
            <button className="btn-primary flex items-center space-x-2">
              <Plus className="w-4 h-4" />
              <span>New Permit</span>
            </button>
          </div>

          {filteredTrucks.map((truck) => (
            <div key={truck.id} className="card">
              <div className="flex items-start justify-between mb-3">
                <div>
                  <h3 className="font-semibold text-gray-900">{truck.truckNumber}</h3>
                  <p className="text-sm text-gray-600">{truck.driverName}</p>
                </div>
                {getStatusBadge(truck.status)}
              </div>
              
              {/* Vehicle Specs */}
              <div className="grid grid-cols-2 gap-4 text-sm mb-3">
                <div className="flex items-center space-x-2">
                  <Truck className="w-4 h-4 text-gray-400" />
                  <span>{truck.vehicleSpecs.make} {truck.vehicleSpecs.model}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Scale className="w-4 h-4 text-gray-400" />
                  <span>{truck.vehicleSpecs.weight}kg / {truck.vehicleSpecs.emptyWeight}kg</span>
                </div>
                <div className="flex items-center space-x-2">
                  <User className="w-4 h-4 text-gray-400" />
                  <span>{truck.driverLicense}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Navigation className="w-4 h-4 text-gray-400" />
                  <span>{truck.gpsTracking ? 'GPS Active' : 'GPS Inactive'}</span>
                </div>
              </div>

              {/* Route Information */}
              <div className="mb-3 p-2 bg-gray-50 rounded-lg">
                <div className="flex items-center space-x-2 mb-2">
                  <Map className="w-4 h-4 text-gray-400" />
                  <span className="text-sm font-medium text-gray-700">Route Permit</span>
                </div>
                <div className="text-sm text-gray-600">
                  <div className="flex justify-between">
                    <span>{truck.routePermit.origin}</span>
                    <span>→</span>
                    <span>{truck.routePermit.destination}</span>
                  </div>
                  <div className="text-xs text-gray-500 mt-1">
                    Valid: {truck.routePermit.validityStart} - {truck.routePermit.validityEnd}
                  </div>
                </div>
              </div>

              {/* Obligations */}
              <div className="mb-3">
                <div className="flex items-center space-x-2 mb-2">
                  <Shield className="w-4 h-4 text-gray-400" />
                  <span className="text-sm font-medium text-gray-700">Obligations</span>
                </div>
                <div className="flex flex-wrap gap-1">
                  {truck.obligations.map((obligation, index) => (
                    <span key={index} className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded">
                      {obligation}
                    </span>
                  ))}
                </div>
              </div>
              
              {/* Fees and Timeline */}
              <div className="pt-3 border-t border-gray-100">
                <div className="flex items-center justify-between mb-2">
                  <div className="text-sm text-gray-600">
                    Total: ${truck.fees.total.toLocaleString()}
                  </div>
                  <span className="text-sm text-gray-600">
                    Expires: {truck.routePermit.validityEnd}
                  </span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div 
                    className="bg-primary-600 h-2 rounded-full" 
                    style={{ width: '85%' }}
                  ></div>
                </div>
                <div className="flex justify-between text-xs text-gray-500 mt-1">
                  <span>Permit: ${truck.fees.permitFee}</span>
                  <span>Deposit: ${truck.fees.deposit}</span>
                  <span>Taxes: ${truck.fees.taxes}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Routes Overview */}
      {activeTab === 'routes' && (
        <div className="space-y-4">
          <h2 className="text-lg font-semibold text-gray-900">Active Routes</h2>
          <div className="grid gap-4">
            <div className="card">
              <div className="flex items-center space-x-3 mb-3">
                <Globe className="w-6 h-6 text-primary-600" />
                <div>
                  <h3 className="font-semibold text-gray-900">Egypt → UAE</h3>
                  <p className="text-sm text-gray-600">3 active trucks</p>
                </div>
              </div>
              <div className="text-sm text-gray-600">
                <div>Cairo → Suez → Aqaba → Dubai</div>
                <div className="text-xs text-gray-500 mt-1">Average duration: 48 hours</div>
              </div>
            </div>
            <div className="card">
              <div className="flex items-center space-x-3 mb-3">
                <Globe className="w-6 h-6 text-primary-600" />
                <div>
                  <h3 className="font-semibold text-gray-900">Egypt → Saudi Arabia</h3>
                  <p className="text-sm text-gray-600">2 active trucks</p>
                </div>
              </div>
              <div className="text-sm text-gray-600">
                <div>Alexandria → Port Said → Jeddah</div>
                <div className="text-xs text-gray-500 mt-1">Average duration: 36 hours</div>
              </div>
            </div>
          </div>
        </div>
      )}


    </div>
  );
};

export default OverseasTruckPermission;
