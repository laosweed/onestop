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
  FileText,
  RefreshCw,
  BarChart3,
  Calculator,
  Download
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

      {/* Tracking Tab Content */}
      {activeTab === 'tracking' && (
        <div className="space-y-6">
          {/* Tracking Overview Stats */}
          <div className="grid grid-cols-2 gap-4">
            <div className="card text-center">
              <Navigation className="w-8 h-8 text-green-600 mx-auto mb-2" />
              <div className="text-2xl font-bold text-gray-900">12</div>
              <div className="text-sm text-gray-600">Active Trucks</div>
            </div>
            <div className="card text-center">
              <MapPin className="w-8 h-8 text-blue-600 mx-auto mb-2" />
              <div className="text-2xl font-bold text-gray-900">8</div>
              <div className="text-sm text-gray-600">In Transit</div>
            </div>
            <div className="card text-center">
              <AlertTriangle className="w-8 h-8 text-orange-600 mx-auto mb-2" />
              <div className="text-2xl font-bold text-gray-900">2</div>
              <div className="text-sm text-gray-600">Route Deviations</div>
            </div>
            <div className="card text-center">
              <CheckCircle className="w-8 h-8 text-purple-600 mx-auto mb-2" />
              <div className="text-2xl font-bold text-gray-900">94%</div>
              <div className="text-sm text-gray-600">On-Time Delivery</div>
            </div>
          </div>

          {/* Live GPS Tracking */}
      <div className="card">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-semibold text-gray-900 flex items-center">
                <Navigation className="w-5 h-5 mr-2 text-green-600" />
                Live GPS Tracking
              </h3>
              <button className="btn-secondary">
                <RefreshCw className="w-4 h-4 mr-2" />
                Refresh
          </button>
            </div>
            <div className="space-y-3">
              {[
                {
                  truck: 'TRK-2024-001',
                  driver: 'Ahmed Hassan',
                  route: 'Cairo → Dubai',
                  currentLocation: 'Aqaba, Jordan',
                  coordinates: '29.5267°N, 35.0078°E',
                  speed: '85 km/h',
                  status: 'in_transit',
                  eta: '2024-02-15 14:30',
                  distanceCovered: '1,200 km',
                  distanceRemaining: '800 km'
                },
                {
                  truck: 'TRK-2024-002',
                  driver: 'Mohammed Ali',
                  route: 'Alexandria → Jeddah',
                  currentLocation: 'Port Said, Egypt',
                  coordinates: '31.2667°N, 32.3000°E',
                  speed: '0 km/h',
                  status: 'stopped',
                  eta: '2024-02-16 08:00',
                  distanceCovered: '200 km',
                  distanceRemaining: '1,400 km'
                },
                {
                  truck: 'TRK-2024-003',
                  driver: 'Omar Khalil',
                  route: 'Cairo → Dubai',
                  currentLocation: 'Suez, Egypt',
                  coordinates: '29.9668°N, 32.5497°E',
                  speed: '92 km/h',
                  status: 'in_transit',
                  eta: '2024-02-15 16:45',
                  distanceCovered: '150 km',
                  distanceRemaining: '1,850 km'
                }
              ].map((tracking, index) => (
                <div key={index} className="border border-gray-200 rounded-lg p-4">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex-1">
                      <div className="flex items-center space-x-2">
                        <h4 className="font-medium text-gray-900">{tracking.truck}</h4>
                        <span className={`px-2 py-1 rounded text-xs ${
                          tracking.status === 'in_transit' ? 'bg-green-100 text-green-800' :
                          tracking.status === 'stopped' ? 'bg-yellow-100 text-yellow-800' :
                          'bg-red-100 text-red-800'
                        }`}>
                          {tracking.status === 'in_transit' ? 'In Transit' : 
                           tracking.status === 'stopped' ? 'Stopped' : 'Delayed'}
                        </span>
                      </div>
                      <p className="text-sm text-gray-600">{tracking.driver} • {tracking.route}</p>
                      <p className="text-xs text-gray-500">{tracking.currentLocation}</p>
                    </div>
                    <div className="text-right">
                      <div className="text-lg font-semibold text-gray-900">{tracking.speed}</div>
                      <div className="text-xs text-gray-600">Speed</div>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4 text-sm mb-3">
                    <div>
                      <span className="text-gray-500">Coordinates:</span>
                      <div className="font-medium text-xs">{tracking.coordinates}</div>
                    </div>
                    <div>
                      <span className="text-gray-500">ETA:</span>
                      <div className="font-medium">{tracking.eta}</div>
                    </div>
                    <div>
                      <span className="text-gray-500">Covered:</span>
                      <div className="font-medium text-green-600">{tracking.distanceCovered}</div>
                    </div>
                    <div>
                      <span className="text-gray-500">Remaining:</span>
                      <div className="font-medium text-orange-600">{tracking.distanceRemaining}</div>
                    </div>
                  </div>

                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-blue-500 h-2 rounded-full" 
                      style={{ width: `${(parseInt(tracking.distanceCovered) / (parseInt(tracking.distanceCovered) + parseInt(tracking.distanceRemaining))) * 100}%` }}
                    ></div>
                  </div>
                  <div className="flex justify-between text-xs text-gray-500 mt-1">
                    <span>Progress: {Math.round((parseInt(tracking.distanceCovered) / (parseInt(tracking.distanceCovered) + parseInt(tracking.distanceRemaining))) * 100)}%</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Route Compliance Monitoring */}
          <div className="card">
            <h3 className="font-semibold text-gray-900 mb-4 flex items-center">
              <Shield className="w-5 h-5 mr-2 text-blue-600" />
              Route Compliance Monitoring
            </h3>
            <div className="space-y-3">
              {[
                {
                  truck: 'TRK-2024-001',
                  route: 'Cairo → Dubai',
                  deviation: 'Minor deviation - 2km off route',
                  location: 'Aqaba, Jordan',
                  time: '2024-02-14 15:30',
                  severity: 'low',
                  status: 'resolved'
                },
                {
                  truck: 'TRK-2024-002',
                  route: 'Alexandria → Jeddah',
                  deviation: 'Significant deviation - 15km off route',
                  location: 'Port Said, Egypt',
                  time: '2024-02-14 12:15',
                  severity: 'high',
                  status: 'investigating'
                },
                {
                  truck: 'TRK-2024-003',
                  route: 'Cairo → Dubai',
                  deviation: 'Speed limit violation - 95km/h in 80km/h zone',
                  location: 'Suez, Egypt',
                  time: '2024-02-14 14:20',
                  severity: 'medium',
                  status: 'warning_sent'
                }
              ].map((compliance, index) => (
                <div key={index} className="border border-gray-200 rounded-lg p-4">
                  <div className="flex items-start justify-between mb-2">
                    <div className="flex-1">
                      <h4 className="font-medium text-gray-900">{compliance.truck}</h4>
                      <p className="text-sm text-gray-600">{compliance.route}</p>
                      <p className="text-xs text-gray-500">{compliance.location} • {compliance.time}</p>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className={`px-2 py-1 rounded text-xs ${
                        compliance.severity === 'high' ? 'bg-red-100 text-red-800' :
                        compliance.severity === 'medium' ? 'bg-yellow-100 text-yellow-800' :
                        'bg-blue-100 text-blue-800'
                      }`}>
                        {compliance.severity} severity
                      </span>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                        compliance.status === 'resolved' ? 'bg-green-100 text-green-800' :
                        compliance.status === 'investigating' ? 'bg-orange-100 text-orange-800' :
                        'bg-yellow-100 text-yellow-800'
                      }`}>
                        {compliance.status === 'investigating' ? 'Investigating' : 
                         compliance.status === 'warning_sent' ? 'Warning Sent' : 
                         compliance.status.charAt(0).toUpperCase() + compliance.status.slice(1)}
                      </span>
                    </div>
                  </div>
                  <p className="text-sm text-gray-700">{compliance.deviation}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Tracking Analytics */}
          <div className="card">
            <h3 className="font-semibold text-gray-900 mb-4 flex items-center">
              <BarChart3 className="w-5 h-5 mr-2 text-purple-600" />
              Tracking Analytics
            </h3>
            <div className="space-y-4">
              {[
                { metric: 'Average Speed', value: '78 km/h', trend: '+5%', status: 'good' },
                { metric: 'Fuel Efficiency', value: '8.2 km/L', trend: '-2%', status: 'warning' },
                { metric: 'Route Adherence', value: '96%', trend: '+1%', status: 'good' },
                { metric: 'Delivery Time', value: '42 hours', trend: '-8%', status: 'good' },
                { metric: 'GPS Signal Strength', value: '98%', trend: '+2%', status: 'good' },
                { metric: 'Idle Time', value: '12%', trend: '+3%', status: 'warning' }
              ].map((analytics, index) => (
                <div key={index} className="border border-gray-200 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-medium text-gray-900">{analytics.metric}</h4>
                    <div className="flex items-center space-x-2">
                      <span className={`text-sm ${
                        analytics.trend.startsWith('+') ? 'text-green-600' : 'text-red-600'
                      }`}>
                        {analytics.trend}
                      </span>
                      <span className={`px-2 py-1 rounded text-xs ${
                        analytics.status === 'good' ? 'bg-green-100 text-green-800' :
                        analytics.status === 'warning' ? 'bg-yellow-100 text-yellow-800' :
                        'bg-red-100 text-red-800'
                      }`}>
                        {analytics.status}
                      </span>
                    </div>
                  </div>
                  <div className="text-2xl font-bold text-gray-900">{analytics.value}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Location History */}
          <div className="card">
            <h3 className="font-semibold text-gray-900 mb-4 flex items-center">
              <Map className="w-5 h-5 mr-2 text-indigo-600" />
              Recent Location History
            </h3>
            <div className="space-y-3">
              {[
                {
                  truck: 'TRK-2024-001',
                  location: 'Aqaba, Jordan',
                  time: '2024-02-14 15:30',
                  speed: '85 km/h',
                  event: 'Route checkpoint'
                },
                {
                  truck: 'TRK-2024-001',
                  location: 'Suez, Egypt',
                  time: '2024-02-14 12:00',
                  speed: '78 km/h',
                  event: 'Fuel stop'
                },
                {
                  truck: 'TRK-2024-002',
                  location: 'Port Said, Egypt',
                  time: '2024-02-14 14:15',
                  speed: '0 km/h',
                  event: 'Rest break'
                },
                {
                  truck: 'TRK-2024-003',
                  location: 'Cairo, Egypt',
                  time: '2024-02-14 10:30',
                  speed: '92 km/h',
                  event: 'Departure'
                }
              ].map((history, index) => (
                <div key={index} className="border border-gray-200 rounded-lg p-4">
                  <div className="flex items-start justify-between mb-2">
                    <div className="flex-1">
                      <h4 className="font-medium text-gray-900">{history.truck}</h4>
                      <p className="text-sm text-gray-600">{history.location}</p>
                      <p className="text-xs text-gray-500">{history.time}</p>
                    </div>
                    <div className="text-right">
                      <div className="text-sm font-medium text-gray-900">{history.speed}</div>
                      <div className="text-xs text-gray-600">Speed</div>
                    </div>
                  </div>
                  <div className="text-sm text-blue-600">
                    {history.event}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Fees Tab Content */}
      {activeTab === 'fees' && (
        <div className="space-y-6">
          {/* Fees Overview Stats */}
          <div className="grid grid-cols-2 gap-4">
            <div className="card text-center">
              <DollarSign className="w-8 h-8 text-green-600 mx-auto mb-2" />
              <div className="text-2xl font-bold text-gray-900">$156.8K</div>
              <div className="text-sm text-gray-600">Total Revenue</div>
            </div>
            <div className="card text-center">
              <Clock className="w-8 h-8 text-orange-600 mx-auto mb-2" />
              <div className="text-2xl font-bold text-gray-900">$24.5K</div>
              <div className="text-sm text-gray-600">Outstanding</div>
            </div>
            <div className="card text-center">
              <CheckCircle className="w-8 h-8 text-blue-600 mx-auto mb-2" />
              <div className="text-2xl font-bold text-gray-900">87%</div>
              <div className="text-sm text-gray-600">Collection Rate</div>
            </div>
            <div className="card text-center">
              <AlertTriangle className="w-8 h-8 text-red-600 mx-auto mb-2" />
              <div className="text-2xl font-bold text-gray-900">5</div>
              <div className="text-sm text-gray-600">Overdue</div>
            </div>
          </div>

          {/* Fee Categories Breakdown */}
          <div className="card">
            <h3 className="font-semibold text-gray-900 mb-4 flex items-center">
              <BarChart3 className="w-5 h-5 mr-2 text-blue-600" />
              Fee Categories Breakdown
            </h3>
            <div className="space-y-3">
              {[
                {
                  category: 'Route Permit Fees',
                  total: 85000,
                  collected: 72000,
                  pending: 13000,
                  trucks: 25
                },
                {
                  category: 'Cross-Border Taxes',
                  total: 45000,
                  collected: 38000,
                  pending: 7000,
                  trucks: 22
                },
                {
                  category: 'Security Deposits',
                  total: 18000,
                  collected: 15000,
                  pending: 3000,
                  trucks: 18
                },
                {
                  category: 'GPS Tracking Fees',
                  total: 12000,
                  collected: 11000,
                  pending: 1000,
                  trucks: 15
                },
                {
                  category: 'Late Payment Penalties',
                  total: 6800,
                  collected: 5800,
                  pending: 1000,
                  trucks: 8
                }
              ].map((category, index) => (
                <div key={index} className="border border-gray-200 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-3">
                    <div>
                      <h4 className="font-medium text-gray-900">{category.category}</h4>
                      <p className="text-sm text-gray-600">{category.trucks} trucks</p>
                    </div>
                    <div className="text-right">
                      <div className="text-lg font-semibold text-gray-900">
                        ${category.total.toLocaleString()}
                      </div>
                      <div className="text-sm text-gray-600">Total</div>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Collected:</span>
                      <span className="font-medium text-green-600">
                        ${category.collected.toLocaleString()}
                      </span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Pending:</span>
                      <span className="font-medium text-orange-600">
                        ${category.pending.toLocaleString()}
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className="bg-green-500 h-2 rounded-full" 
                        style={{ width: `${(category.collected / category.total) * 100}%` }}
                      ></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Truck Fee Details */}
          <div className="card">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-semibold text-gray-900 flex items-center">
                <Truck className="w-5 h-5 mr-2 text-purple-600" />
                Truck Fee Details
              </h3>
              <button className="btn-secondary">
                <Download className="w-4 h-4 mr-2" />
                Export Report
          </button>
            </div>
            <div className="space-y-3">
              {[
                {
                  truck: 'TRK-2024-001',
                  driver: 'Ahmed Hassan',
                  route: 'Cairo → Dubai',
                  permitFee: 5000,
                  taxes: 1500,
                  deposit: 2000,
                  gpsFee: 800,
                  totalFees: 9300,
                  paidAmount: 9300,
                  status: 'paid',
                  dueDate: '2024-02-15'
                },
                {
                  truck: 'TRK-2024-002',
                  driver: 'Mohammed Ali',
                  route: 'Alexandria → Jeddah',
                  permitFee: 4500,
                  taxes: 1200,
                  deposit: 2000,
                  gpsFee: 800,
                  totalFees: 8500,
                  paidAmount: 6000,
                  status: 'partial',
                  dueDate: '2024-02-10'
                },
                {
                  truck: 'TRK-2024-003',
                  driver: 'Omar Khalil',
                  route: 'Cairo → Dubai',
                  permitFee: 5000,
                  taxes: 1500,
                  deposit: 2000,
                  gpsFee: 800,
                  totalFees: 9300,
                  paidAmount: 0,
                  status: 'overdue',
                  dueDate: '2024-01-15'
                },
                {
                  truck: 'TRK-2024-004',
                  driver: 'Hassan Ibrahim',
                  route: 'Port Said → Kuwait',
                  permitFee: 4200,
                  taxes: 1100,
                  deposit: 2000,
                  gpsFee: 800,
                  totalFees: 8100,
                  paidAmount: 8100,
                  status: 'paid',
                  dueDate: '2024-02-20'
                }
              ].map((truck, index) => (
                <div key={index} className="border border-gray-200 rounded-lg p-4">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex-1">
                      <h4 className="font-medium text-gray-900">{truck.truck}</h4>
                      <p className="text-sm text-gray-600">{truck.driver} • {truck.route}</p>
                    </div>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                      truck.status === 'paid' ? 'bg-green-100 text-green-800' :
                      truck.status === 'partial' ? 'bg-yellow-100 text-yellow-800' :
                      'bg-red-100 text-red-800'
                    }`}>
                      {truck.status === 'paid' ? 'Paid' : 
                       truck.status === 'partial' ? 'Partial' : 'Overdue'}
                    </span>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4 text-sm mb-3">
                    <div>
                      <span className="text-gray-500">Permit Fee:</span>
                      <div className="font-medium">${truck.permitFee.toLocaleString()}</div>
                    </div>
                    <div>
                      <span className="text-gray-500">Taxes:</span>
                      <div className="font-medium">${truck.taxes.toLocaleString()}</div>
                    </div>
                    <div>
                      <span className="text-gray-500">Deposit:</span>
                      <div className="font-medium">${truck.deposit.toLocaleString()}</div>
                    </div>
                    <div>
                      <span className="text-gray-500">GPS Fee:</span>
                      <div className="font-medium">${truck.gpsFee.toLocaleString()}</div>
                    </div>
                  </div>

                  <div className="pt-3 border-t border-gray-100">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm text-gray-600">
                        Paid: ${truck.paidAmount.toLocaleString()} / ${truck.totalFees.toLocaleString()}
                      </span>
                      <span className="text-sm text-gray-600">Due: {truck.dueDate}</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className={`h-2 rounded-full ${
                          truck.status === 'paid' ? 'bg-green-500' :
                          truck.status === 'partial' ? 'bg-yellow-500' :
                          'bg-red-500'
                        }`}
                        style={{ width: `${(truck.paidAmount / truck.totalFees) * 100}%` }}
                      ></div>
                    </div>
                    {truck.status !== 'paid' && (
                      <div className="mt-2 text-xs text-orange-600">
                        Outstanding: ${(truck.totalFees - truck.paidAmount).toLocaleString()}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Payment History */}
          <div className="card">
            <h3 className="font-semibold text-gray-900 mb-4 flex items-center">
              <Calendar className="w-5 h-5 mr-2 text-indigo-600" />
              Recent Payment History
            </h3>
            <div className="space-y-3">
              {[
                {
                  truck: 'TRK-2024-001',
                  driver: 'Ahmed Hassan',
                  amount: 9300,
                  date: '2024-01-25',
                  method: 'Bank Transfer',
                  reference: 'TRX-2024-045',
                  status: 'completed'
                },
                {
                  truck: 'TRK-2024-004',
                  driver: 'Hassan Ibrahim',
                  amount: 8100,
                  date: '2024-01-24',
                  method: 'Credit Card',
                  reference: 'CC-2024-078',
                  status: 'completed'
                },
                {
                  truck: 'TRK-2024-002',
                  driver: 'Mohammed Ali',
                  amount: 6000,
                  date: '2024-01-23',
                  method: 'Online Payment',
                  reference: 'ONL-2024-123',
                  status: 'completed'
                },
                {
                  truck: 'TRK-2024-003',
                  driver: 'Omar Khalil',
                  amount: 3000,
                  date: '2024-01-22',
                  method: 'Check',
                  reference: 'CHK-2024-056',
                  status: 'pending'
                }
              ].map((payment, index) => (
                <div key={index} className="border border-gray-200 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex-1">
                      <h4 className="font-medium text-gray-900">{payment.truck}</h4>
                      <p className="text-sm text-gray-600">
                        {payment.driver} • {payment.method} • {payment.reference}
                      </p>
                    </div>
                    <div className="text-right">
                      <div className="text-lg font-semibold text-gray-900">
                        ${payment.amount.toLocaleString()}
                      </div>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                        payment.status === 'completed' ? 'bg-green-100 text-green-800' :
                        'bg-yellow-100 text-yellow-800'
                      }`}>
                        {payment.status.charAt(0).toUpperCase() + payment.status.slice(1)}
                      </span>
                    </div>
                  </div>
                  <div className="text-xs text-gray-600">
                    Date: {payment.date}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Fee Calculator */}
          <div className="card">
            <h3 className="font-semibold text-gray-900 mb-4 flex items-center">
              <Calculator className="w-5 h-5 mr-2 text-green-600" />
              Fee Calculator
            </h3>
            <div className="grid grid-cols-1 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Origin Country
                </label>
                <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500">
                  <option>Egypt</option>
                  <option>Jordan</option>
                  <option>Saudi Arabia</option>
                  <option>UAE</option>
                  <option>Kuwait</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Destination Country
                </label>
                <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500">
                  <option>UAE</option>
                  <option>Saudi Arabia</option>
                  <option>Kuwait</option>
                  <option>Qatar</option>
                  <option>Oman</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Truck Type
                </label>
                <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500">
                  <option>Heavy Truck (40+ tons)</option>
                  <option>Medium Truck (20-40 tons)</option>
                  <option>Light Truck (10-20 tons)</option>
                  <option>Container Truck</option>
                  <option>Refrigerated Truck</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Cargo Type
                </label>
                <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500">
                  <option>General Cargo</option>
                  <option>Perishable Goods</option>
                  <option>Hazardous Materials</option>
                  <option>Construction Materials</option>
                  <option>Electronics</option>
                </select>
              </div>
              <button className="btn-primary">
                Calculate Fees
          </button>
        </div>
      </div>
        </div>
      )}


    </div>
  );
};

export default OverseasTruckPermission;
