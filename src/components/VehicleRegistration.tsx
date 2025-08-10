import React, { useState } from 'react';
import { 
  Car, 
  User, 
  FileText, 
  DollarSign, 
  AlertTriangle,
  CheckCircle,
  Clock,
  Plus,
  Search,
  Filter,
  Wrench,
  MapPin,
  Calendar,
  Shield,
  ParkingCircle,
  BarChart3,
  Calculator,
  Download
} from 'lucide-react';

interface Vehicle {
  id: string;
  plateNumber: string;
  vehicleType: 'car' | 'truck' | 'motorcycle';
  ownerName: string;
  driverLicense: string;
  registrationStatus: 'active' | 'expired' | 'pending';
  inspectionStatus: 'passed' | 'failed' | 'pending';
  roadFees: number;
  parkingFees: number;
  lastInspection: string;
  nextInspection: string;
  insuranceExpiry: string;
  technicalTestPassed: boolean;
}

interface Driver {
  id: string;
  name: string;
  licenseNumber: string;
  licenseType: string;
  expiryDate: string;
  status: 'active' | 'expired' | 'suspended';
  vehicles: number;
}

const VehicleRegistration = () => {
  const [activeTab, setActiveTab] = useState('vehicles');
  const [searchTerm, setSearchTerm] = useState('');

  const mockVehicles: Vehicle[] = [
    {
      id: '1',
      plateNumber: 'ABC-1234',
      vehicleType: 'car',
      ownerName: 'John Smith',
      driverLicense: 'DL-2024-001',
      registrationStatus: 'active',
      inspectionStatus: 'passed',
      roadFees: 500,
      parkingFees: 200,
      lastInspection: '2024-01-15',
      nextInspection: '2024-07-15',
      insuranceExpiry: '2024-12-31',
      technicalTestPassed: true
    },
    {
      id: '2',
      plateNumber: 'XYZ-5678',
      vehicleType: 'truck',
      ownerName: 'Sarah Johnson',
      driverLicense: 'DL-2024-002',
      registrationStatus: 'pending',
      inspectionStatus: 'pending',
      roadFees: 800,
      parkingFees: 300,
      lastInspection: '2024-02-01',
      nextInspection: '2024-08-01',
      insuranceExpiry: '2024-06-30',
      technicalTestPassed: false
    },
    {
      id: '3',
      plateNumber: 'DEF-9012',
      vehicleType: 'car',
      ownerName: 'Mike Wilson',
      driverLicense: 'DL-2024-003',
      registrationStatus: 'expired',
      inspectionStatus: 'failed',
      roadFees: 600,
      parkingFees: 250,
      lastInspection: '2023-12-01',
      nextInspection: '2024-06-01',
      insuranceExpiry: '2024-03-15',
      technicalTestPassed: true
    }
  ];

  const mockDrivers: Driver[] = [
    {
      id: '1',
      name: 'John Smith',
      licenseNumber: 'DL-2024-001',
      licenseType: 'Class C',
      expiryDate: '2026-05-15',
      status: 'active',
      vehicles: 2
    },
    {
      id: '2',
      name: 'Sarah Johnson',
      licenseNumber: 'DL-2024-002',
      licenseType: 'Class B',
      expiryDate: '2025-08-20',
      status: 'active',
      vehicles: 1
    },
    {
      id: '3',
      name: 'Mike Wilson',
      licenseNumber: 'DL-2024-003',
      licenseType: 'Class C',
      expiryDate: '2024-03-10',
      status: 'expired',
      vehicles: 1
    }
  ];

  const filteredVehicles = mockVehicles.filter(vehicle =>
    vehicle.plateNumber.toLowerCase().includes(searchTerm.toLowerCase()) ||
    vehicle.ownerName.toLowerCase().includes(searchTerm.toLowerCase())
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

  const getInspectionBadge = (status: string) => {
    switch (status) {
      case 'passed':
        return <span className="status-badge status-active">Passed</span>;
      case 'failed':
        return <span className="status-badge status-expired">Failed</span>;
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
        <div className="p-2 bg-purple-100 rounded-lg">
          <Car className="w-6 h-6 text-purple-600" />
        </div>
        <div>
          <h1 className="text-xl font-bold text-gray-900">Vehicle Registration</h1>
          <p className="text-sm text-gray-600">Cars, trucks & inspections</p>
        </div>
      </div>

      {/* Search and Filter */}
      <div className="flex space-x-2">
        <div className="flex-1 relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
          <input
            type="text"
            placeholder="Search vehicles..."
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
        {['vehicles', 'drivers', 'inspections', 'fees'].map((tab) => (
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
      {activeTab === 'vehicles' && (
        <div className="grid grid-cols-2 gap-4">
          <div className="card text-center">
            <CheckCircle className="w-8 h-8 text-success-600 mx-auto mb-2" />
            <div className="text-2xl font-bold text-gray-900">25</div>
            <div className="text-sm text-gray-600">Active Vehicles</div>
          </div>
          <div className="card text-center">
            <Clock className="w-8 h-8 text-warning-600 mx-auto mb-2" />
            <div className="text-2xl font-bold text-gray-900">3</div>
            <div className="text-sm text-gray-600">Pending Review</div>
          </div>
          <div className="card text-center">
            <AlertTriangle className="w-8 h-8 text-danger-600 mx-auto mb-2" />
            <div className="text-2xl font-bold text-gray-900">7</div>
            <div className="text-sm text-gray-600">Expired</div>
          </div>
          <div className="card text-center">
            <DollarSign className="w-8 h-8 text-primary-600 mx-auto mb-2" />
            <div className="text-2xl font-bold text-gray-900">$15K</div>
            <div className="text-sm text-gray-600">Total Fees</div>
          </div>
        </div>
      )}

      {/* Vehicles List */}
      {activeTab === 'vehicles' && (
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold text-gray-900">Registered Vehicles</h2>
            <button className="btn-primary flex items-center space-x-2">
              <Plus className="w-4 h-4" />
              <span>Register Vehicle</span>
            </button>
          </div>

          {filteredVehicles.map((vehicle) => (
            <div key={vehicle.id} className="card">
              <div className="flex items-start justify-between mb-3">
                <div>
                  <h3 className="font-semibold text-gray-900">{vehicle.plateNumber}</h3>
                  <p className="text-sm text-gray-600">{vehicle.ownerName}</p>
                </div>
                {getStatusBadge(vehicle.registrationStatus)}
              </div>
              
              <div className="grid grid-cols-2 gap-4 text-sm mb-3">
                <div className="flex items-center space-x-2">
                  <Car className="w-4 h-4 text-gray-400" />
                  <span className="capitalize">{vehicle.vehicleType}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <User className="w-4 h-4 text-gray-400" />
                  <span>{vehicle.driverLicense}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Wrench className="w-4 h-4 text-gray-400" />
                  <span>Inspection: {vehicle.inspectionStatus}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Shield className="w-4 h-4 text-gray-400" />
                  <span>Insurance: {vehicle.insuranceExpiry}</span>
                </div>
              </div>

              {/* Inspection Status */}
              <div className="mb-3 p-2 bg-gray-50 rounded-lg">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Technical Test:</span>
                  <div className="flex items-center space-x-2">
                    {vehicle.technicalTestPassed ? (
                      <CheckCircle className="w-4 h-4 text-success-600" />
                    ) : (
                      <AlertTriangle className="w-4 h-4 text-danger-600" />
                    )}
                    <span className="text-sm font-medium">
                      {vehicle.technicalTestPassed ? 'Passed' : 'Failed'}
                    </span>
                  </div>
                </div>
              </div>
              
              {/* Fees and Timeline */}
              <div className="pt-3 border-t border-gray-100">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex space-x-4 text-sm text-gray-600">
                    <span>Road: ${vehicle.roadFees}</span>
                    <span>Parking: ${vehicle.parkingFees}</span>
                  </div>
                  <span className="text-sm text-gray-600">Next: {vehicle.nextInspection}</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div 
                    className="bg-primary-600 h-2 rounded-full" 
                    style={{ width: '75%' }}
                  ></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Drivers List */}
      {activeTab === 'drivers' && (
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold text-gray-900">Drivers</h2>
            <button className="btn-primary flex items-center space-x-2">
              <Plus className="w-4 h-4" />
              <span>Add Driver</span>
            </button>
          </div>

          {mockDrivers.map((driver) => (
            <div key={driver.id} className="card">
              <div className="flex items-start justify-between mb-3">
                <div>
                  <h3 className="font-semibold text-gray-900">{driver.name}</h3>
                  <p className="text-sm text-gray-600">{driver.licenseNumber}</p>
                </div>
                {getStatusBadge(driver.status)}
              </div>
              
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <span className="text-gray-500">License Type:</span>
                  <span className="ml-2 font-medium">{driver.licenseType}</span>
                </div>
                <div>
                  <span className="text-gray-500">Vehicles:</span>
                  <span className="ml-2 font-medium">{driver.vehicles}</span>
                </div>
                <div>
                  <span className="text-gray-500">Expires:</span>
                  <span className="ml-2 font-medium">{driver.expiryDate}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Inspections Tab Content */}
      {activeTab === 'inspections' && (
        <div className="space-y-6">
          {/* Inspection Overview Stats */}
          <div className="grid grid-cols-2 gap-4">
            <div className="card text-center">
              <CheckCircle className="w-8 h-8 text-green-600 mx-auto mb-2" />
              <div className="text-2xl font-bold text-gray-900">156</div>
              <div className="text-sm text-gray-600">Passed Inspections</div>
            </div>
            <div className="card text-center">
              <AlertTriangle className="w-8 h-8 text-orange-600 mx-auto mb-2" />
              <div className="text-2xl font-bold text-gray-900">23</div>
              <div className="text-sm text-gray-600">Failed Inspections</div>
            </div>
            <div className="card text-center">
              <Clock className="w-8 h-8 text-blue-600 mx-auto mb-2" />
              <div className="text-2xl font-bold text-gray-900">18</div>
              <div className="text-sm text-gray-600">Upcoming Inspections</div>
            </div>
            <div className="card text-center">
              <Shield className="w-8 h-8 text-purple-600 mx-auto mb-2" />
              <div className="text-2xl font-bold text-gray-900">87%</div>
              <div className="text-sm text-gray-600">Pass Rate</div>
            </div>
          </div>

          {/* Inspection Centers */}
          <div className="card">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-semibold text-gray-900 flex items-center">
                <MapPin className="w-5 h-5 mr-2 text-blue-600" />
                Inspection Centers
              </h3>
              <button className="btn-secondary">
                <Plus className="w-4 h-4 mr-2" />
                Add Center
              </button>
            </div>
            <div className="space-y-3">
              {[
                {
                  name: 'Central Vehicle Inspection Center',
                  location: 'Downtown District',
                  inspector: 'Mike Johnson',
                  status: 'active',
                  capacity: 50,
                  todayInspections: 12,
                  avgWaitTime: '45 min'
                },
                {
                  name: 'Northside Auto Inspection',
                  location: 'North Suburbs',
                  inspector: 'Sarah Williams',
                  status: 'active',
                  capacity: 30,
                  todayInspections: 8,
                  avgWaitTime: '30 min'
                },
                {
                  name: 'Industrial Zone Inspection',
                  location: 'Industrial District',
                  inspector: 'David Chen',
                  status: 'maintenance',
                  capacity: 40,
                  todayInspections: 0,
                  avgWaitTime: 'Closed'
                }
              ].map((center, index) => (
                <div key={index} className="border border-gray-200 rounded-lg p-4">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex-1">
                      <h4 className="font-medium text-gray-900">{center.name}</h4>
                      <p className="text-sm text-gray-600">{center.location}</p>
                      <p className="text-xs text-gray-500">Inspector: {center.inspector}</p>
                    </div>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                      center.status === 'active' ? 'bg-green-100 text-green-800' :
                      'bg-yellow-100 text-yellow-800'
                    }`}>
                      {center.status === 'active' ? 'Active' : 'Maintenance'}
                    </span>
                  </div>
                  <div className="grid grid-cols-3 gap-4 text-sm">
                    <div>
                      <span className="text-gray-500">Capacity:</span>
                      <div className="font-medium">{center.capacity}/day</div>
                    </div>
                    <div>
                      <span className="text-gray-500">Today:</span>
                      <div className="font-medium">{center.todayInspections}</div>
                    </div>
                    <div>
                      <span className="text-gray-500">Wait Time:</span>
                      <div className="font-medium">{center.avgWaitTime}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Upcoming Inspections */}
          <div className="card">
            <h3 className="font-semibold text-gray-900 mb-4 flex items-center">
              <Calendar className="w-5 h-5 mr-2 text-green-600" />
              Upcoming Inspections
            </h3>
            <div className="space-y-3">
              {[
                {
                  vehicle: 'ABC-1234',
                  owner: 'John Smith',
                  type: 'car',
                  scheduledDate: '2024-02-15',
                  time: '10:00 AM',
                  center: 'Central Vehicle Inspection Center',
                  inspector: 'Mike Johnson',
                  priority: 'normal'
                },
                {
                  vehicle: 'XYZ-5678',
                  owner: 'Sarah Johnson',
                  type: 'truck',
                  scheduledDate: '2024-02-16',
                  time: '2:30 PM',
                  center: 'Northside Auto Inspection',
                  inspector: 'Sarah Williams',
                  priority: 'high'
                },
                {
                  vehicle: 'DEF-9012',
                  owner: 'Mike Wilson',
                  type: 'car',
                  scheduledDate: '2024-02-17',
                  time: '9:00 AM',
                  center: 'Central Vehicle Inspection Center',
                  inspector: 'Mike Johnson',
                  priority: 'normal'
                },
                {
                  vehicle: 'GHI-3456',
                  owner: 'Lisa Brown',
                  type: 'motorcycle',
                  scheduledDate: '2024-02-18',
                  time: '11:15 AM',
                  center: 'Northside Auto Inspection',
                  inspector: 'Sarah Williams',
                  priority: 'low'
                }
              ].map((inspection, index) => (
                <div key={index} className="border border-gray-200 rounded-lg p-4">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex-1">
                      <div className="flex items-center space-x-2">
                        <h4 className="font-medium text-gray-900">{inspection.vehicle}</h4>
                        <span className={`px-2 py-1 rounded text-xs ${
                          inspection.priority === 'high' ? 'bg-red-100 text-red-800' :
                          inspection.priority === 'normal' ? 'bg-yellow-100 text-yellow-800' :
                          'bg-blue-100 text-blue-800'
                        }`}>
                          {inspection.priority} priority
                        </span>
                      </div>
                      <p className="text-sm text-gray-600">{inspection.owner} • {inspection.type}</p>
                      <p className="text-xs text-gray-500">{inspection.center}</p>
                    </div>
                    <div className="text-right">
                      <div className="text-sm font-medium text-gray-900">{inspection.scheduledDate}</div>
                      <div className="text-xs text-gray-600">{inspection.time}</div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between text-xs text-gray-600">
                    <span>Inspector: {inspection.inspector}</span>
                    <button className="text-blue-600 hover:text-blue-800">Reschedule</button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Recent Inspection Results */}
          <div className="card">
            <h3 className="font-semibold text-gray-900 mb-4 flex items-center">
              <FileText className="w-5 h-5 mr-2 text-purple-600" />
              Recent Inspection Results
            </h3>
            <div className="space-y-3">
              {[
                {
                  vehicle: 'ABC-1234',
                  owner: 'John Smith',
                  inspectionDate: '2024-01-15',
                  inspector: 'Mike Johnson',
                  result: 'passed',
                  score: 95,
                  issues: [],
                  nextInspection: '2024-07-15'
                },
                {
                  vehicle: 'XYZ-5678',
                  owner: 'Sarah Johnson',
                  inspectionDate: '2024-01-20',
                  inspector: 'Sarah Williams',
                  result: 'failed',
                  score: 65,
                  issues: ['Brake system needs repair', 'Headlight alignment'],
                  nextInspection: '2024-02-20'
                },
                {
                  vehicle: 'DEF-9012',
                  owner: 'Mike Wilson',
                  inspectionDate: '2024-01-10',
                  inspector: 'David Chen',
                  result: 'passed',
                  score: 88,
                  issues: ['Minor tire wear noted'],
                  nextInspection: '2024-07-10'
                },
                {
                  vehicle: 'GHI-3456',
                  owner: 'Lisa Brown',
                  inspectionDate: '2024-01-25',
                  inspector: 'Mike Johnson',
                  result: 'passed',
                  score: 92,
                  issues: [],
                  nextInspection: '2024-07-25'
                }
              ].map((result, index) => (
                <div key={index} className="border border-gray-200 rounded-lg p-4">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex-1">
                      <h4 className="font-medium text-gray-900">{result.vehicle}</h4>
                      <p className="text-sm text-gray-600">{result.owner}</p>
                      <p className="text-xs text-gray-500">Inspector: {result.inspector}</p>
                    </div>
                    <div className="text-right">
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                        result.result === 'passed' ? 'bg-green-100 text-green-800' :
                        'bg-red-100 text-red-800'
                      }`}>
                        {result.result.charAt(0).toUpperCase() + result.result.slice(1)}
                      </span>
                      <div className="text-sm font-medium text-gray-900 mt-1">{result.score}/100</div>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4 text-xs text-gray-600 mb-3">
                    <div>
                      <span className="text-gray-500">Date:</span> {result.inspectionDate}
                    </div>
                    <div>
                      <span className="text-gray-500">Next:</span> {result.nextInspection}
                    </div>
                  </div>

                  {result.issues.length > 0 && (
                    <div className="pt-3 border-t border-gray-100">
                      <h5 className="text-sm font-medium text-gray-900 mb-2">Issues Found:</h5>
                      <ul className="space-y-1">
                        {result.issues.map((issue, issueIndex) => (
                          <li key={issueIndex} className="text-xs text-red-600 flex items-center">
                            <AlertTriangle className="w-3 h-3 mr-1" />
                            {issue}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Inspection Statistics */}
          <div className="card">
            <h3 className="font-semibold text-gray-900 mb-4 flex items-center">
              <BarChart3 className="w-5 h-5 mr-2 text-indigo-600" />
              Monthly Inspection Statistics
            </h3>
            <div className="space-y-4">
              {[
                { month: 'Jan', passed: 45, failed: 8, total: 53 },
                { month: 'Feb', passed: 52, failed: 6, total: 58 },
                { month: 'Mar', passed: 48, failed: 9, total: 57 },
                { month: 'Apr', passed: 55, failed: 5, total: 60 },
                { month: 'May', passed: 51, failed: 7, total: 58 },
                { month: 'Jun', passed: 49, failed: 8, total: 57 }
              ].map((stat, index) => (
                <div key={index} className="border border-gray-200 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-3">
                    <h4 className="font-medium text-gray-900">{stat.month} 2024</h4>
                    <div className="text-right">
                      <div className="text-lg font-semibold text-gray-900">{stat.total}</div>
                      <div className="text-sm text-gray-600">Total Inspections</div>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <span className="text-gray-500">Passed:</span>
                      <div className="font-medium text-green-600">{stat.passed}</div>
                    </div>
                    <div>
                      <span className="text-gray-500">Failed:</span>
                      <div className="font-medium text-red-600">{stat.failed}</div>
                    </div>
                  </div>
                  <div className="mt-3">
                    <div className="flex justify-between text-xs text-gray-600 mb-1">
                      <span>Pass Rate: {Math.round((stat.passed / stat.total) * 100)}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className="bg-green-500 h-2 rounded-full" 
                        style={{ width: `${(stat.passed / stat.total) * 100}%` }}
                      ></div>
                    </div>
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
              <div className="text-2xl font-bold text-gray-900">$45.2K</div>
              <div className="text-sm text-gray-600">Total Revenue</div>
            </div>
            <div className="card text-center">
              <Clock className="w-8 h-8 text-orange-600 mx-auto mb-2" />
              <div className="text-2xl font-bold text-gray-900">$8.7K</div>
              <div className="text-sm text-gray-600">Outstanding</div>
            </div>
            <div className="card text-center">
              <CheckCircle className="w-8 h-8 text-blue-600 mx-auto mb-2" />
              <div className="text-2xl font-bold text-gray-900">92%</div>
              <div className="text-sm text-gray-600">Collection Rate</div>
            </div>
            <div className="card text-center">
              <AlertTriangle className="w-8 h-8 text-red-600 mx-auto mb-2" />
              <div className="text-2xl font-bold text-gray-900">7</div>
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
                  category: 'Vehicle Registration Fees',
                  total: 18500,
                  collected: 17200,
                  pending: 1300,
                  vehicles: 156
                },
                {
                  category: 'Road Usage Fees',
                  total: 12400,
                  collected: 11500,
                  pending: 900,
                  vehicles: 142
                },
                {
                  category: 'Parking Permits',
                  total: 6800,
                  collected: 6200,
                  pending: 600,
                  vehicles: 89
                },
                {
                  category: 'Inspection Fees',
                  total: 4500,
                  collected: 4200,
                  pending: 300,
                  vehicles: 67
                },
                {
                  category: 'Late Payment Penalties',
                  total: 3000,
                  collected: 2800,
                  pending: 200,
                  vehicles: 12
                }
              ].map((category, index) => (
                <div key={index} className="border border-gray-200 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-3">
                    <div>
                      <h4 className="font-medium text-gray-900">{category.category}</h4>
                      <p className="text-sm text-gray-600">{category.vehicles} vehicles</p>
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

          {/* Vehicle Fee Details */}
          <div className="card">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-semibold text-gray-900 flex items-center">
                <Car className="w-5 h-5 mr-2 text-purple-600" />
                Vehicle Fee Details
              </h3>
              <button className="btn-secondary">
                <Download className="w-4 h-4 mr-2" />
                Export Report
              </button>
            </div>
            <div className="space-y-3">
              {[
                {
                  vehicle: 'ABC-1234',
                  owner: 'John Smith',
                  type: 'car',
                  registrationFee: 150,
                  roadFee: 120,
                  parkingFee: 80,
                  inspectionFee: 50,
                  totalFees: 400,
                  paidAmount: 400,
                  status: 'paid',
                  dueDate: '2024-02-15'
                },
                {
                  vehicle: 'XYZ-5678',
                  owner: 'Sarah Johnson',
                  type: 'truck',
                  registrationFee: 250,
                  roadFee: 200,
                  parkingFee: 120,
                  inspectionFee: 75,
                  totalFees: 645,
                  paidAmount: 500,
                  status: 'partial',
                  dueDate: '2024-02-10'
                },
                {
                  vehicle: 'DEF-9012',
                  owner: 'Mike Wilson',
                  type: 'car',
                  registrationFee: 150,
                  roadFee: 120,
                  parkingFee: 80,
                  inspectionFee: 50,
                  totalFees: 400,
                  paidAmount: 0,
                  status: 'overdue',
                  dueDate: '2024-01-15'
                },
                {
                  vehicle: 'GHI-3456',
                  owner: 'Lisa Brown',
                  type: 'motorcycle',
                  registrationFee: 100,
                  roadFee: 80,
                  parkingFee: 60,
                  inspectionFee: 40,
                  totalFees: 280,
                  paidAmount: 280,
                  status: 'paid',
                  dueDate: '2024-02-20'
                }
              ].map((vehicle, index) => (
                <div key={index} className="border border-gray-200 rounded-lg p-4">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex-1">
                      <h4 className="font-medium text-gray-900">{vehicle.vehicle}</h4>
                      <p className="text-sm text-gray-600">{vehicle.owner} • {vehicle.type}</p>
                    </div>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                      vehicle.status === 'paid' ? 'bg-green-100 text-green-800' :
                      vehicle.status === 'partial' ? 'bg-yellow-100 text-yellow-800' :
                      'bg-red-100 text-red-800'
                    }`}>
                      {vehicle.status === 'paid' ? 'Paid' : 
                       vehicle.status === 'partial' ? 'Partial' : 'Overdue'}
                    </span>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4 text-sm mb-3">
                    <div>
                      <span className="text-gray-500">Registration:</span>
                      <div className="font-medium">${vehicle.registrationFee}</div>
                    </div>
                    <div>
                      <span className="text-gray-500">Road Fee:</span>
                      <div className="font-medium">${vehicle.roadFee}</div>
                    </div>
                    <div>
                      <span className="text-gray-500">Parking:</span>
                      <div className="font-medium">${vehicle.parkingFee}</div>
                    </div>
                    <div>
                      <span className="text-gray-500">Inspection:</span>
                      <div className="font-medium">${vehicle.inspectionFee}</div>
                    </div>
                  </div>

                  <div className="pt-3 border-t border-gray-100">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm text-gray-600">
                        Paid: ${vehicle.paidAmount.toLocaleString()} / ${vehicle.totalFees.toLocaleString()}
                      </span>
                      <span className="text-sm text-gray-600">Due: {vehicle.dueDate}</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className={`h-2 rounded-full ${
                          vehicle.status === 'paid' ? 'bg-green-500' :
                          vehicle.status === 'partial' ? 'bg-yellow-500' :
                          'bg-red-500'
                        }`}
                        style={{ width: `${(vehicle.paidAmount / vehicle.totalFees) * 100}%` }}
                      ></div>
                    </div>
                    {vehicle.status !== 'paid' && (
                      <div className="mt-2 text-xs text-orange-600">
                        Outstanding: ${(vehicle.totalFees - vehicle.paidAmount).toLocaleString()}
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
                  vehicle: 'ABC-1234',
                  owner: 'John Smith',
                  amount: 400,
                  date: '2024-01-25',
                  method: 'Credit Card',
                  reference: 'CC-2024-025',
                  status: 'completed'
                },
                {
                  vehicle: 'GHI-3456',
                  owner: 'Lisa Brown',
                  amount: 280,
                  date: '2024-01-24',
                  method: 'Bank Transfer',
                  reference: 'TRX-2024-018',
                  status: 'completed'
                },
                {
                  vehicle: 'XYZ-5678',
                  owner: 'Sarah Johnson',
                  amount: 500,
                  date: '2024-01-23',
                  method: 'Online Payment',
                  reference: 'ONL-2024-032',
                  status: 'completed'
                },
                {
                  vehicle: 'DEF-9012',
                  owner: 'Mike Wilson',
                  amount: 200,
                  date: '2024-01-22',
                  method: 'Check',
                  reference: 'CHK-2024-015',
                  status: 'pending'
                }
              ].map((payment, index) => (
                <div key={index} className="border border-gray-200 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex-1">
                      <h4 className="font-medium text-gray-900">{payment.vehicle}</h4>
                      <p className="text-sm text-gray-600">
                        {payment.owner} • {payment.method} • {payment.reference}
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
                  Vehicle Type
                </label>
                <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500">
                  <option>Car</option>
                  <option>Truck</option>
                  <option>Motorcycle</option>
                  <option>Bus</option>
                  <option>Trailer</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Engine Size (cc)
                </label>
                <input 
                  type="number" 
                  placeholder="Enter engine size"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Vehicle Age (years)
                </label>
                <input 
                  type="number" 
                  placeholder="Enter vehicle age"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Parking Zone
                </label>
                <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500">
                  <option>Zone A (Downtown)</option>
                  <option>Zone B (Suburban)</option>
                  <option>Zone C (Industrial)</option>
                  <option>Zone D (Residential)</option>
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

export default VehicleRegistration;
