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
  ParkingCircle
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


    </div>
  );
};

export default VehicleRegistration;
