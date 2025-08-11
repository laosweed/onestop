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
  Download,
  TrendingUp,
  Link,
  Eye,
  Edit,
  Trash2,
  RefreshCw,
  Settings,
  Database,
  Cloud,
  Zap,
  Target,
  BookOpen,
  TestTube,
  Timer,
  CheckSquare,
  XCircle,
  Users,
  Building,
  Receipt
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
  const [showRegistrationModal, setShowRegistrationModal] = useState(false);
  const [registrationForm, setRegistrationForm] = useState({
    // Vehicle Information
    plateNumber: '',
    vehicleType: 'car',
    make: '',
    model: '',
    year: '',
    engineSize: '',
    color: '',
    vin: '',
    
    // Owner Information
    ownerName: '',
    ownerId: '',
    ownerPhone: '',
    ownerEmail: '',
    ownerAddress: '',
    
    // Driver Information
    driverName: '',
    driverLicense: '',
    driverLicenseType: 'Class C',
    driverPhone: '',
    
    // Insurance Information
    insuranceCompany: '',
    insurancePolicy: '',
    insuranceExpiry: '',
    
    // Registration Details
    registrationType: 'new',
    purpose: 'personal',
    fuelType: 'gasoline'
  });

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

  const handleFormChange = (field: string, value: string) => {
    setRegistrationForm(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Create new vehicle object
    const newVehicle: Vehicle = {
      id: Date.now().toString(),
      plateNumber: registrationForm.plateNumber,
      vehicleType: registrationForm.vehicleType as 'car' | 'truck' | 'motorcycle',
      ownerName: registrationForm.ownerName,
      driverLicense: registrationForm.driverLicense,
      registrationStatus: 'pending',
      inspectionStatus: 'pending',
      roadFees: 500,
      parkingFees: 200,
      lastInspection: '',
      nextInspection: new Date(Date.now() + 6 * 30 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
      insuranceExpiry: registrationForm.insuranceExpiry,
      technicalTestPassed: false
    };

    // In a real app, you would send this to your backend
    console.log('New vehicle registration:', newVehicle);
    
    // Close modal and reset form
    setShowRegistrationModal(false);
    setRegistrationForm({
      plateNumber: '',
      vehicleType: 'car',
      make: '',
      model: '',
      year: '',
      engineSize: '',
      color: '',
      vin: '',
      ownerName: '',
      ownerId: '',
      ownerPhone: '',
      ownerEmail: '',
      ownerAddress: '',
      driverName: '',
      driverLicense: '',
      driverLicenseType: 'Class C',
      driverPhone: '',
      insuranceCompany: '',
      insurancePolicy: '',
      insuranceExpiry: '',
      registrationType: 'new',
      purpose: 'personal',
      fuelType: 'gasoline'
    });
    
    // Show success message (you could add a toast notification here)
    alert('Vehicle registration submitted successfully!');
  };

  return (
    <>
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
      <div className="flex space-x-1 bg-gray-100 p-1 rounded-lg overflow-x-auto scrollbar-hide">
        {[
          { id: 'vehicles', label: 'Vehicles', icon: Car },
          { id: 'drivers', label: 'Driving License', icon: User },
          { id: 'technical', label: 'Technical Test', icon: Wrench },
          { id: 'roadfees', label: 'Road Fees', icon: DollarSign },
          { id: 'expired', label: 'Expired Cars', icon: AlertTriangle },
          { id: 'parking', label: 'Parking', icon: ParkingCircle },
          { id: 'growth', label: 'Growth', icon: TrendingUp },
          { id: 'integration', label: 'Integration', icon: Link }
        ].map((tab) => {
          const Icon = tab.icon;
          return (
          <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex-shrink-0 flex items-center space-x-2 py-2 px-3 rounded-md text-sm font-medium transition-colors whitespace-nowrap ${
                activeTab === tab.id
                ? 'bg-white text-primary-600 shadow-sm'
                : 'text-gray-600 hover:text-gray-900'
            }`}
          >
              <Icon className="w-4 h-4" />
              <span className="hidden sm:inline">{tab.label}</span>
              <span className="sm:hidden">{tab.label.charAt(0)}</span>
          </button>
          );
        })}
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
            <button 
              onClick={() => setShowRegistrationModal(true)}
              className="btn-primary flex items-center space-x-2"
            >
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

      {/* Driving License Management */}
      {activeTab === 'drivers' && (
        <div className="space-y-6">
          {/* License Overview Stats */}
          <div className="grid grid-cols-2 gap-4">
            <div className="card text-center">
              <User className="w-8 h-8 text-green-600 mx-auto mb-2" />
              <div className="text-2xl font-bold text-gray-900">1,250</div>
              <div className="text-sm text-gray-600">Active Licenses</div>
            </div>
            <div className="card text-center">
              <AlertTriangle className="w-8 h-8 text-red-600 mx-auto mb-2" />
              <div className="text-2xl font-bold text-gray-900">45</div>
              <div className="text-sm text-gray-600">Expired Licenses</div>
            </div>
            <div className="card text-center">
              <Clock className="w-8 h-8 text-orange-600 mx-auto mb-2" />
              <div className="text-2xl font-bold text-gray-900">23</div>
              <div className="text-sm text-gray-600">Expiring Soon</div>
            </div>
            <div className="card text-center">
              <Shield className="w-8 h-8 text-blue-600 mx-auto mb-2" />
              <div className="text-2xl font-bold text-gray-900">8</div>
              <div className="text-sm text-gray-600">Suspended</div>
            </div>
          </div>

          {/* License Types */}
          <div className="card">
            <h3 className="font-semibold text-gray-900 mb-4 flex items-center">
              <BookOpen className="w-5 h-5 mr-2 text-blue-600" />
              License Types & Requirements
            </h3>
            <div className="space-y-3">
              {[
                {
                  type: 'Class A - Motorcycle',
                  description: 'Motorcycles and scooters',
                  requirements: ['18+ years old', 'Vision test', 'Written test', 'Road test'],
                  validity: '5 years',
                  fee: 50,
                  activeCount: 320
                },
                {
                  type: 'Class B - Light Vehicle',
                  description: 'Light vehicles up to 3.5 tons',
                  requirements: ['18+ years old', 'Vision test', 'Written test', 'Road test'],
                  validity: '5 years',
                  fee: 75,
                  activeCount: 450
                },
                {
                  type: 'Class C - Car',
                  description: 'Passenger cars and light trucks',
                  requirements: ['18+ years old', 'Vision test', 'Written test', 'Road test'],
                  validity: '5 years',
                  fee: 100,
                  activeCount: 680
                },
                {
                  type: 'Class D - Truck',
                  description: 'Heavy trucks and commercial vehicles',
                  requirements: ['21+ years old', 'Class C license', 'Medical certificate', 'Advanced test'],
                  validity: '3 years',
                  fee: 150,
                  activeCount: 180
                },
                {
                  type: 'Class E - Bus',
                  description: 'Passenger buses and coaches',
                  requirements: ['25+ years old', 'Class C license', 'Medical certificate', 'Specialized test'],
                  validity: '3 years',
                  fee: 200,
                  activeCount: 95
                }
              ].map((license, index) => (
                <div key={index} className="border border-gray-200 rounded-lg p-4">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex-1">
                      <h4 className="font-medium text-gray-900">{license.type}</h4>
                      <p className="text-sm text-gray-600">{license.description}</p>
                      <p className="text-xs text-gray-500">{license.activeCount} active licenses</p>
                    </div>
                    <div className="text-right">
                      <div className="text-lg font-semibold text-gray-900">${license.fee}</div>
                      <div className="text-sm text-gray-600">Fee</div>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4 text-sm mb-3">
                    <div>
                      <span className="text-gray-500">Validity:</span>
                      <div className="font-medium">{license.validity}</div>
                    </div>
                    <div>
                      <span className="text-gray-500">Requirements:</span>
                      <div className="font-medium">{license.requirements.length} items</div>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <h5 className="text-sm font-medium text-gray-900">Requirements:</h5>
                    <ul className="space-y-1">
                      {license.requirements.map((req, reqIndex) => (
                        <li key={reqIndex} className="text-xs text-gray-600 flex items-center">
                          <CheckCircle className="w-3 h-3 mr-1 text-green-600" />
                          {req}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Drivers List */}
          <div className="card">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-semibold text-gray-900 flex items-center">
                <Users className="w-5 h-5 mr-2 text-purple-600" />
                Registered Drivers
              </h3>
            <button className="btn-primary flex items-center space-x-2">
              <Plus className="w-4 h-4" />
              <span>Add Driver</span>
            </button>
          </div>
            <div className="space-y-3">
          {mockDrivers.map((driver) => (
                <div key={driver.id} className="border border-gray-200 rounded-lg p-4">
              <div className="flex items-start justify-between mb-3">
                <div>
                      <h4 className="font-semibold text-gray-900">{driver.name}</h4>
                  <p className="text-sm text-gray-600">{driver.licenseNumber}</p>
                      <p className="text-xs text-gray-500">Type: {driver.licenseType}</p>
                </div>
                {getStatusBadge(driver.status)}
              </div>
              
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <span className="text-gray-500">Vehicles:</span>
                  <span className="ml-2 font-medium">{driver.vehicles}</span>
                </div>
                <div>
                  <span className="text-gray-500">Expires:</span>
                  <span className="ml-2 font-medium">{driver.expiryDate}</span>
                </div>
              </div>
                  <div className="flex space-x-2 mt-3">
                    <button className="btn-secondary text-xs">
                      <Eye className="w-3 h-3 mr-1" />
                      View Details
                    </button>
                    <button className="btn-secondary text-xs">
                      <Edit className="w-3 h-3 mr-1" />
                      Renew
                    </button>
                    <button className="btn-secondary text-xs">
                      <Download className="w-3 h-3 mr-1" />
                      Download
                    </button>
                  </div>
            </div>
          ))}
            </div>
          </div>
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

      {/* Technical Test Tab Content */}
      {activeTab === 'technical' && (
        <div className="space-y-6">
          {/* Technical Test Overview Stats */}
          <div className="grid grid-cols-2 gap-4">
            <div className="card text-center">
              <CheckSquare className="w-8 h-8 text-green-600 mx-auto mb-2" />
              <div className="text-2xl font-bold text-gray-900">234</div>
              <div className="text-sm text-gray-600">Tests Passed</div>
            </div>
            <div className="card text-center">
              <XCircle className="w-8 h-8 text-red-600 mx-auto mb-2" />
              <div className="text-2xl font-bold text-gray-900">45</div>
              <div className="text-sm text-gray-600">Tests Failed</div>
            </div>
            <div className="card text-center">
              <Timer className="w-8 h-8 text-blue-600 mx-auto mb-2" />
              <div className="text-2xl font-bold text-gray-900">28</div>
              <div className="text-sm text-gray-600">Scheduled Today</div>
            </div>
            <div className="card text-center">
              <Target className="w-8 h-8 text-purple-600 mx-auto mb-2" />
              <div className="text-2xl font-bold text-gray-900">84%</div>
              <div className="text-sm text-gray-600">Pass Rate</div>
            </div>
          </div>

          {/* Test Centers */}
          <div className="card">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-semibold text-gray-900 flex items-center">
                <Building className="w-5 h-5 mr-2 text-blue-600" />
                Technical Test Centers
              </h3>
              <button className="btn-secondary">
                <Plus className="w-4 h-4 mr-2" />
                Add Center
          </button>
        </div>
            <div className="space-y-3">
              {[
                {
                  name: 'Central Technical Test Center',
                  location: 'Downtown District',
                  examiner: 'Dr. Ahmed Hassan',
                  status: 'active',
                  capacity: 30,
                  todayTests: 15,
                  avgWaitTime: '2 hours',
                  specialties: ['Engine Systems', 'Electrical', 'Safety']
                },
                {
                  name: 'Northside Vehicle Testing',
                  location: 'North Suburbs',
                  examiner: 'Eng. Sarah Williams',
                  status: 'active',
                  capacity: 25,
                  todayTests: 12,
                  avgWaitTime: '1.5 hours',
                  specialties: ['Brake Systems', 'Suspension', 'Emissions']
                },
                {
                  name: 'Industrial Zone Testing',
                  location: 'Industrial District',
                  examiner: 'Eng. David Chen',
                  status: 'maintenance',
                  capacity: 20,
                  todayTests: 0,
                  avgWaitTime: 'Closed',
                  specialties: ['Heavy Vehicles', 'Commercial', 'Specialized']
                }
              ].map((center, index) => (
                <div key={index} className="border border-gray-200 rounded-lg p-4">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex-1">
                      <h4 className="font-medium text-gray-900">{center.name}</h4>
                      <p className="text-sm text-gray-600">{center.location}</p>
                      <p className="text-xs text-gray-500">Examiner: {center.examiner}</p>
      </div>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                      center.status === 'active' ? 'bg-green-100 text-green-800' :
                      'bg-yellow-100 text-yellow-800'
                    }`}>
                      {center.status === 'active' ? 'Active' : 'Maintenance'}
                    </span>
    </div>
                  <div className="grid grid-cols-2 gap-4 text-sm mb-3">
                    <div>
                      <span className="text-gray-500">Capacity:</span>
                      <div className="font-medium">{center.capacity}/day</div>
                    </div>
                    <div>
                      <span className="text-gray-500">Today:</span>
                      <div className="font-medium">{center.todayTests}</div>
                    </div>
                    <div>
                      <span className="text-gray-500">Wait Time:</span>
                      <div className="font-medium">{center.avgWaitTime}</div>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-1">
                    {center.specialties.map((specialty, specIndex) => (
                      <span key={specIndex} className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded">
                        {specialty}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Test Categories */}
          <div className="card">
            <h3 className="font-semibold text-gray-900 mb-4 flex items-center">
              <TestTube className="w-5 h-5 mr-2 text-green-600" />
              Test Categories & Requirements
            </h3>
            <div className="space-y-4">
              {[
                {
                  category: 'Engine Performance Test',
                  description: 'Comprehensive engine diagnostics and performance evaluation',
                  duration: '45 minutes',
                  passScore: 80,
                  requirements: ['Engine running smoothly', 'No unusual noises', 'Proper fuel efficiency'],
                  equipment: ['Dynamometer', 'Emission analyzer', 'Diagnostic tools']
                },
                {
                  category: 'Brake System Test',
                  description: 'Brake efficiency and safety system evaluation',
                  duration: '30 minutes',
                  passScore: 85,
                  requirements: ['Proper brake response', 'Even brake distribution', 'No brake fluid leaks'],
                  equipment: ['Brake tester', 'Fluid pressure gauge', 'Safety equipment']
                },
                {
                  category: 'Electrical System Test',
                  description: 'Electrical components and wiring integrity check',
                  duration: '25 minutes',
                  passScore: 75,
                  requirements: ['All lights functional', 'Battery in good condition', 'No electrical shorts'],
                  equipment: ['Multimeter', 'Battery tester', 'Circuit analyzer']
                },
                {
                  category: 'Safety Equipment Test',
                  description: 'Safety features and emergency systems verification',
                  duration: '20 minutes',
                  passScore: 90,
                  requirements: ['Seatbelts functional', 'Airbags operational', 'Emergency exits accessible'],
                  equipment: ['Safety inspection tools', 'Emergency system tester']
                }
              ].map((test, index) => (
                <div key={index} className="border border-gray-200 rounded-lg p-4">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex-1">
                      <h4 className="font-medium text-gray-900">{test.category}</h4>
                      <p className="text-sm text-gray-600">{test.description}</p>
                    </div>
                    <div className="text-right">
                      <div className="text-sm font-medium text-gray-900">{test.duration}</div>
                      <div className="text-xs text-gray-600">Duration</div>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4 text-sm mb-3">
                    <div>
                      <span className="text-gray-500">Pass Score:</span>
                      <div className="font-medium">{test.passScore}%</div>
                    </div>
                    <div>
                      <span className="text-gray-500">Equipment:</span>
                      <div className="font-medium">{test.equipment.length} items</div>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <h5 className="text-sm font-medium text-gray-900">Requirements:</h5>
                    <ul className="space-y-1">
                      {test.requirements.map((req, reqIndex) => (
                        <li key={reqIndex} className="text-xs text-gray-600 flex items-center">
                          <CheckCircle className="w-3 h-3 mr-1 text-green-600" />
                          {req}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Road Fees Tab Content */}
      {activeTab === 'roadfees' && (
        <div className="space-y-6">
          {/* Road Fees Overview Stats */}
          <div className="grid grid-cols-2 gap-4">
            <div className="card text-center">
              <DollarSign className="w-8 h-8 text-green-600 mx-auto mb-2" />
              <div className="text-2xl font-bold text-gray-900">$125K</div>
              <div className="text-sm text-gray-600">Total Collected</div>
            </div>
            <div className="card text-center">
              <Clock className="w-8 h-8 text-orange-600 mx-auto mb-2" />
              <div className="text-2xl font-bold text-gray-900">$18K</div>
              <div className="text-sm text-gray-600">Outstanding</div>
            </div>
            <div className="card text-center">
              <CheckCircle className="w-8 h-8 text-blue-600 mx-auto mb-2" />
              <div className="text-2xl font-bold text-gray-900">87%</div>
              <div className="text-sm text-gray-600">Collection Rate</div>
            </div>
            <div className="card text-center">
              <AlertTriangle className="w-8 h-8 text-red-600 mx-auto mb-2" />
              <div className="text-2xl font-bold text-gray-900">23</div>
              <div className="text-sm text-gray-600">Overdue</div>
            </div>
          </div>

          {/* Fee Structure */}
          <div className="card">
            <h3 className="font-semibold text-gray-900 mb-4 flex items-center">
              <Receipt className="w-5 h-5 mr-2 text-blue-600" />
              Road Fee Structure
            </h3>
            <div className="space-y-3">
              {[
                {
                  category: 'Private Cars',
                  baseFee: 120,
                  perKm: 0.05,
                  annualCap: 500,
                  vehicles: 1250,
                  description: 'Standard road usage fees for private vehicles'
                },
                {
                  category: 'Commercial Trucks',
                  baseFee: 250,
                  perKm: 0.12,
                  annualCap: 1200,
                  vehicles: 340,
                  description: 'Higher fees for commercial vehicle usage'
                },
                {
                  category: 'Motorcycles',
                  baseFee: 60,
                  perKm: 0.02,
                  annualCap: 300,
                  vehicles: 890,
                  description: 'Reduced fees for motorcycles and scooters'
                },
                {
                  category: 'Heavy Vehicles',
                  baseFee: 400,
                  perKm: 0.18,
                  annualCap: 2000,
                  vehicles: 156,
                  description: 'Premium fees for heavy commercial vehicles'
                }
              ].map((fee, index) => (
                <div key={index} className="border border-gray-200 rounded-lg p-4">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex-1">
                      <h4 className="font-medium text-gray-900">{fee.category}</h4>
                      <p className="text-sm text-gray-600">{fee.description}</p>
                      <p className="text-xs text-gray-500">{fee.vehicles} vehicles</p>
                    </div>
                    <div className="text-right">
                      <div className="text-lg font-semibold text-gray-900">
                        ${fee.baseFee.toLocaleString()}
                      </div>
                      <div className="text-sm text-gray-600">Base Fee</div>
                    </div>
                  </div>
                  <div className="grid grid-cols-3 gap-4 text-sm">
                    <div>
                      <span className="text-gray-500">Per KM:</span>
                      <div className="font-medium">${fee.perKm}</div>
                    </div>
                    <div>
                      <span className="text-gray-500">Annual Cap:</span>
                      <div className="font-medium">${fee.annualCap.toLocaleString()}</div>
                    </div>
                    <div>
                      <span className="text-gray-500">Vehicles:</span>
                      <div className="font-medium">{fee.vehicles.toLocaleString()}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Expired Cars Management Tab Content */}
      {activeTab === 'expired' && (
        <div className="space-y-6">
          {/* Expired Cars Overview Stats */}
          <div className="grid grid-cols-2 gap-4">
            <div className="card text-center">
              <AlertTriangle className="w-8 h-8 text-red-600 mx-auto mb-2" />
              <div className="text-2xl font-bold text-gray-900">284</div>
              <div className="text-sm text-gray-600">Expired Registrations</div>
            </div>
            <div className="card text-center">
              <Clock className="w-8 h-8 text-orange-600 mx-auto mb-2" />
              <div className="text-2xl font-bold text-gray-900">45</div>
              <div className="text-sm text-gray-600">Expiring This Month</div>
            </div>
            <div className="card text-center">
              <CheckCircle className="w-8 h-8 text-green-600 mx-auto mb-2" />
              <div className="text-2xl font-bold text-gray-900">156</div>
              <div className="text-sm text-gray-600">Renewed This Month</div>
            </div>
            <div className="card text-center">
              <DollarSign className="w-8 h-8 text-purple-600 mx-auto mb-2" />
              <div className="text-2xl font-bold text-gray-900">$12K</div>
              <div className="text-sm text-gray-600">Late Fees Collected</div>
            </div>
          </div>

          {/* Expired Vehicles List */}
          <div className="card">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-semibold text-gray-900 flex items-center">
                <AlertTriangle className="w-5 h-5 mr-2 text-red-600" />
                Expired Vehicle Registrations
              </h3>
              <button className="btn-secondary">
                <Download className="w-4 h-4 mr-2" />
                Export List
              </button>
            </div>
            <div className="space-y-3">
              {[
                {
                  plateNumber: 'ABC-1234',
                  owner: 'John Smith',
                  type: 'car',
                  expiryDate: '2024-01-15',
                  daysOverdue: 30,
                  lateFees: 150,
                  status: 'overdue',
                  contactAttempts: 3
                },
                {
                  plateNumber: 'XYZ-5678',
                  owner: 'Sarah Johnson',
                  type: 'truck',
                  expiryDate: '2024-01-20',
                  daysOverdue: 25,
                  lateFees: 200,
                  status: 'overdue',
                  contactAttempts: 2
                },
                {
                  plateNumber: 'DEF-9012',
                  owner: 'Mike Wilson',
                  type: 'car',
                  expiryDate: '2024-02-01',
                  daysOverdue: 14,
                  lateFees: 100,
                  status: 'overdue',
                  contactAttempts: 1
                },
                {
                  plateNumber: 'GHI-3456',
                  owner: 'Lisa Brown',
                  type: 'motorcycle',
                  expiryDate: '2024-02-05',
                  daysOverdue: 10,
                  lateFees: 75,
                  status: 'overdue',
                  contactAttempts: 0
                }
              ].map((vehicle, index) => (
                <div key={index} className="border border-gray-200 rounded-lg p-4">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex-1">
                      <h4 className="font-medium text-gray-900">{vehicle.plateNumber}</h4>
                      <p className="text-sm text-gray-600">{vehicle.owner} • {vehicle.type}</p>
                      <p className="text-xs text-gray-500">Expired: {vehicle.expiryDate}</p>
                    </div>
                    <div className="text-right">
                      <span className="px-2 py-1 rounded-full text-xs font-medium bg-red-100 text-red-800">
                        {vehicle.daysOverdue} days overdue
                      </span>
                      <div className="text-sm font-medium text-gray-900 mt-1">
                        ${vehicle.lateFees} late fees
                      </div>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4 text-sm mb-3">
                    <div>
                      <span className="text-gray-500">Contact Attempts:</span>
                      <div className="font-medium">{vehicle.contactAttempts}</div>
                    </div>
                    <div>
                      <span className="text-gray-500">Status:</span>
                      <div className="font-medium capitalize">{vehicle.status}</div>
                    </div>
                  </div>
                  <div className="flex space-x-2">
                    <button className="btn-secondary text-xs">
                      <Eye className="w-3 h-3 mr-1" />
                      View Details
                    </button>
                    <button className="btn-secondary text-xs">
                      <Edit className="w-3 h-3 mr-1" />
                      Send Notice
                    </button>
                    <button className="btn-secondary text-xs">
                      <Trash2 className="w-3 h-3 mr-1" />
                      Impound
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Parking Management Tab Content */}
      {activeTab === 'parking' && (
        <div className="space-y-6">
          {/* Parking Overview Stats */}
          <div className="grid grid-cols-2 gap-4">
            <div className="card text-center">
              <ParkingCircle className="w-8 h-8 text-blue-600 mx-auto mb-2" />
              <div className="text-2xl font-bold text-gray-900">1,250</div>
              <div className="text-sm text-gray-600">Total Spaces</div>
            </div>
            <div className="card text-center">
              <CheckCircle className="w-8 h-8 text-green-600 mx-auto mb-2" />
              <div className="text-2xl font-bold text-gray-900">890</div>
              <div className="text-sm text-gray-600">Occupied</div>
            </div>
            <div className="card text-center">
              <Clock className="w-8 h-8 text-orange-600 mx-auto mb-2" />
              <div className="text-2xl font-bold text-gray-900">360</div>
              <div className="text-sm text-gray-600">Available</div>
            </div>
            <div className="card text-center">
              <DollarSign className="w-8 h-8 text-purple-600 mx-auto mb-2" />
              <div className="text-2xl font-bold text-gray-900">$8.5K</div>
              <div className="text-sm text-gray-600">Daily Revenue</div>
            </div>
          </div>

          {/* Parking Zones */}
          <div className="card">
            <h3 className="font-semibold text-gray-900 mb-4 flex items-center">
              <MapPin className="w-5 h-5 mr-2 text-blue-600" />
              Parking Zones & Rates
            </h3>
            <div className="space-y-3">
              {[
                {
                  zone: 'Zone A - Downtown',
                  totalSpaces: 450,
                  occupied: 420,
                  hourlyRate: 2.50,
                  dailyRate: 15.00,
                  monthlyRate: 180.00,
                  status: 'high-demand'
                },
                {
                  zone: 'Zone B - Suburban',
                  totalSpaces: 350,
                  occupied: 280,
                  hourlyRate: 1.75,
                  dailyRate: 10.00,
                  monthlyRate: 120.00,
                  status: 'moderate'
                },
                {
                  zone: 'Zone C - Industrial',
                  totalSpaces: 250,
                  occupied: 120,
                  hourlyRate: 1.00,
                  dailyRate: 6.00,
                  monthlyRate: 80.00,
                  status: 'low-demand'
                },
                {
                  zone: 'Zone D - Residential',
                  totalSpaces: 200,
                  occupied: 70,
                  hourlyRate: 0.75,
                  dailyRate: 4.00,
                  monthlyRate: 60.00,
                  status: 'low-demand'
                }
              ].map((zone, index) => (
                <div key={index} className="border border-gray-200 rounded-lg p-4">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex-1">
                      <h4 className="font-medium text-gray-900">{zone.zone}</h4>
                      <p className="text-sm text-gray-600">
                        {zone.occupied}/{zone.totalSpaces} spaces occupied
                      </p>
                    </div>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                      zone.status === 'high-demand' ? 'bg-red-100 text-red-800' :
                      zone.status === 'moderate' ? 'bg-yellow-100 text-yellow-800' :
                      'bg-green-100 text-green-800'
                    }`}>
                      {zone.status.replace('-', ' ')}
                    </span>
                  </div>
                  <div className="grid grid-cols-3 gap-4 text-sm">
                    <div>
                      <span className="text-gray-500">Hourly:</span>
                      <div className="font-medium">${zone.hourlyRate}</div>
                    </div>
                    <div>
                      <span className="text-gray-500">Daily:</span>
                      <div className="font-medium">${zone.dailyRate}</div>
                    </div>
                    <div>
                      <span className="text-gray-500">Monthly:</span>
                      <div className="font-medium">${zone.monthlyRate}</div>
                    </div>
                  </div>
                  <div className="mt-3">
                    <div className="flex justify-between text-xs text-gray-600 mb-1">
                      <span>Occupancy Rate</span>
                      <span>{Math.round((zone.occupied / zone.totalSpaces) * 100)}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className="bg-blue-500 h-2 rounded-full" 
                        style={{ width: `${(zone.occupied / zone.totalSpaces) * 100}%` }}
                      ></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Expected Growth Tab Content */}
      {activeTab === 'growth' && (
        <div className="space-y-6">
          {/* Growth Overview Stats */}
          <div className="grid grid-cols-2 gap-4">
            <div className="card text-center">
              <TrendingUp className="w-8 h-8 text-green-600 mx-auto mb-2" />
              <div className="text-2xl font-bold text-gray-900">+15.2%</div>
              <div className="text-sm text-gray-600">Annual Growth</div>
            </div>
            <div className="card text-center">
              <Users className="w-8 h-8 text-blue-600 mx-auto mb-2" />
              <div className="text-2xl font-bold text-gray-900">2,450</div>
              <div className="text-sm text-gray-600">New Registrations</div>
            </div>
            <div className="card text-center">
              <DollarSign className="w-8 h-8 text-purple-600 mx-auto mb-2" />
              <div className="text-2xl font-bold text-gray-900">$45K</div>
              <div className="text-sm text-gray-600">Revenue Growth</div>
            </div>
            <div className="card text-center">
              <Target className="w-8 h-8 text-orange-600 mx-auto mb-2" />
              <div className="text-2xl font-bold text-gray-900">3,200</div>
              <div className="text-sm text-gray-600">Projected 2025</div>
            </div>
          </div>

          {/* Growth Trends */}
          <div className="card">
            <h3 className="font-semibold text-gray-900 mb-4 flex items-center">
              <BarChart3 className="w-5 h-5 mr-2 text-blue-600" />
              Vehicle Registration Growth Trends
            </h3>
            <div className="space-y-4">
              {[
                { year: '2020', registrations: 1850, growth: '+8.5%', revenue: 125000 },
                { year: '2021', registrations: 2100, growth: '+13.5%', revenue: 145000 },
                { year: '2022', registrations: 2350, growth: '+11.9%', revenue: 165000 },
                { year: '2023', registrations: 2650, growth: '+12.8%', revenue: 185000 },
                { year: '2024', registrations: 3050, growth: '+15.1%', revenue: 215000 },
                { year: '2025', registrations: 3200, growth: '+4.9%', revenue: 230000 }
              ].map((trend, index) => (
                <div key={index} className="border border-gray-200 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex-1">
                      <h4 className="font-medium text-gray-900">{trend.year}</h4>
                      <p className="text-sm text-gray-600">
                        {trend.registrations.toLocaleString()} vehicles registered
                      </p>
                    </div>
                    <div className="text-right">
                      <div className="text-lg font-semibold text-gray-900">
                        {trend.growth}
                      </div>
                      <div className="text-sm text-gray-600">Growth Rate</div>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <span className="text-gray-500">Revenue:</span>
                      <div className="font-medium">${trend.revenue.toLocaleString()}</div>
                    </div>
                    <div>
                      <span className="text-gray-500">Registrations:</span>
                      <div className="font-medium">{trend.registrations.toLocaleString()}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Integration Tab Content */}
      {activeTab === 'integration' && (
        <div className="space-y-6">
          {/* Integration Overview Stats */}
          <div className="grid grid-cols-2 gap-4">
            <div className="card text-center">
              <Database className="w-8 h-8 text-blue-600 mx-auto mb-2" />
              <div className="text-2xl font-bold text-gray-900">12</div>
              <div className="text-sm text-gray-600">Active Integrations</div>
            </div>
            <div className="card text-center">
              <Cloud className="w-8 h-8 text-green-600 mx-auto mb-2" />
              <div className="text-2xl font-bold text-gray-900">99.8%</div>
              <div className="text-sm text-gray-600">Uptime</div>
            </div>
            <div className="card text-center">
              <Zap className="w-8 h-8 text-purple-600 mx-auto mb-2" />
              <div className="text-2xl font-bold text-gray-900">2.3s</div>
              <div className="text-sm text-gray-600">Avg Response</div>
            </div>
            <div className="card text-center">
              <Shield className="w-8 h-8 text-orange-600 mx-auto mb-2" />
              <div className="text-2xl font-bold text-gray-900">256-bit</div>
              <div className="text-sm text-gray-600">Encryption</div>
            </div>
          </div>

          {/* System Integrations */}
          <div className="card">
            <h3 className="font-semibold text-gray-900 mb-4 flex items-center">
              <Link className="w-5 h-5 mr-2 text-blue-600" />
              System Integrations
            </h3>
            <div className="space-y-3">
              {[
                {
                  name: 'Police Department Database',
                  status: 'active',
                  type: 'API Integration',
                  lastSync: '2 minutes ago',
                  dataShared: 'Vehicle records, violations, warrants',
                  security: '256-bit SSL encryption'
                },
                {
                  name: 'Insurance Companies Portal',
                  status: 'active',
                  type: 'Real-time API',
                  lastSync: 'Real-time',
                  dataShared: 'Registration status, vehicle details',
                  security: 'OAuth 2.0 authentication'
                },
                {
                  name: 'Municipal Parking System',
                  status: 'active',
                  type: 'Database Sync',
                  lastSync: '5 minutes ago',
                  dataShared: 'Vehicle ownership, permit status',
                  security: 'VPN tunnel encryption'
                },
                {
                  name: 'Traffic Management System',
                  status: 'maintenance',
                  type: 'WebSocket',
                  lastSync: '1 hour ago',
                  dataShared: 'Real-time vehicle tracking',
                  security: 'Certificate-based authentication'
                },
                {
                  name: 'Financial Institutions',
                  status: 'active',
                  type: 'Payment Gateway',
                  lastSync: 'Real-time',
                  dataShared: 'Fee payments, transaction history',
                  security: 'PCI DSS compliant'
                }
              ].map((integration, index) => (
                <div key={index} className="border border-gray-200 rounded-lg p-4">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex-1">
                      <h4 className="font-medium text-gray-900">{integration.name}</h4>
                      <p className="text-sm text-gray-600">{integration.type}</p>
                      <p className="text-xs text-gray-500">Last sync: {integration.lastSync}</p>
                    </div>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                      integration.status === 'active' ? 'bg-green-100 text-green-800' :
                      'bg-yellow-100 text-yellow-800'
                    }`}>
                      {integration.status}
                    </span>
                  </div>
                  <div className="space-y-2">
                    <div>
                      <span className="text-sm text-gray-600">Data Shared:</span>
                      <p className="text-xs text-gray-500">{integration.dataShared}</p>
                    </div>
                    <div>
                      <span className="text-sm text-gray-600">Security:</span>
                      <p className="text-xs text-gray-500">{integration.security}</p>
                    </div>
                  </div>
                  <div className="flex space-x-2 mt-3">
                    <button className="btn-secondary text-xs">
                      <Eye className="w-3 h-3 mr-1" />
                      View Logs
                    </button>
                    <button className="btn-secondary text-xs">
                      <Settings className="w-3 h-3 mr-1" />
                      Configure
                    </button>
                    <button className="btn-secondary text-xs">
                      <RefreshCw className="w-3 h-3 mr-1" />
                      Test
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Vehicle Registration Modal */}
      {showRegistrationModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6 border-b border-gray-200">
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-bold text-gray-900">Register New Vehicle</h2>
                <button 
                  onClick={() => setShowRegistrationModal(false)}
                  className="text-gray-400 hover:text-gray-600"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
          </button>
        </div>
      </div>

            <form onSubmit={handleSubmit} className="p-6 space-y-6">
              {/* Vehicle Information */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                  <Car className="w-5 h-5 mr-2 text-blue-600" />
                  Vehicle Information
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Plate Number *
                    </label>
                    <input
                      type="text"
                      required
                      value={registrationForm.plateNumber}
                      onChange={(e) => handleFormChange('plateNumber', e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                      placeholder="ABC-1234"
                    />
    </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Vehicle Type *
                    </label>
                    <select
                      required
                      value={registrationForm.vehicleType}
                      onChange={(e) => handleFormChange('vehicleType', e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                    >
                      <option value="car">Car</option>
                      <option value="truck">Truck</option>
                      <option value="motorcycle">Motorcycle</option>
                      <option value="bus">Bus</option>
                      <option value="trailer">Trailer</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Make *
                    </label>
                    <input
                      type="text"
                      required
                      value={registrationForm.make}
                      onChange={(e) => handleFormChange('make', e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                      placeholder="Toyota"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Model *
                    </label>
                    <input
                      type="text"
                      required
                      value={registrationForm.model}
                      onChange={(e) => handleFormChange('model', e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                      placeholder="Camry"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Year *
                    </label>
                    <input
                      type="number"
                      required
                      value={registrationForm.year}
                      onChange={(e) => handleFormChange('year', e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                      placeholder="2020"
                      min="1900"
                      max={new Date().getFullYear() + 1}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Engine Size (cc)
                    </label>
                    <input
                      type="number"
                      value={registrationForm.engineSize}
                      onChange={(e) => handleFormChange('engineSize', e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                      placeholder="2000"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Color
                    </label>
                    <input
                      type="text"
                      value={registrationForm.color}
                      onChange={(e) => handleFormChange('color', e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                      placeholder="White"
                    />
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      VIN (Vehicle Identification Number)
                    </label>
                    <input
                      type="text"
                      value={registrationForm.vin}
                      onChange={(e) => handleFormChange('vin', e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                      placeholder="1HGBH41JXMN109186"
                    />
                  </div>
                </div>
              </div>

              {/* Owner Information */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                  <User className="w-5 h-5 mr-2 text-green-600" />
                  Owner Information
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Owner Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={registrationForm.ownerName}
                      onChange={(e) => handleFormChange('ownerName', e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                      placeholder="John Smith"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      ID Number *
                    </label>
                    <input
                      type="text"
                      required
                      value={registrationForm.ownerId}
                      onChange={(e) => handleFormChange('ownerId', e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                      placeholder="123456789"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      value={registrationForm.ownerPhone}
                      onChange={(e) => handleFormChange('ownerPhone', e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                      placeholder="+1234567890"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      value={registrationForm.ownerEmail}
                      onChange={(e) => handleFormChange('ownerEmail', e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                      placeholder="john@example.com"
                    />
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Address *
                    </label>
                    <textarea
                      required
                      value={registrationForm.ownerAddress}
                      onChange={(e) => handleFormChange('ownerAddress', e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                      placeholder="123 Main Street, City, State, ZIP"
                      rows={3}
                    />
                  </div>
                </div>
              </div>

              {/* Driver Information */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                  <User className="w-5 h-5 mr-2 text-purple-600" />
                  Driver Information
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Driver Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={registrationForm.driverName}
                      onChange={(e) => handleFormChange('driverName', e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                      placeholder="John Smith"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Driver License Number *
                    </label>
                    <input
                      type="text"
                      required
                      value={registrationForm.driverLicense}
                      onChange={(e) => handleFormChange('driverLicense', e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                      placeholder="DL-2024-001"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      License Type *
                    </label>
                    <select
                      required
                      value={registrationForm.driverLicenseType}
                      onChange={(e) => handleFormChange('driverLicenseType', e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                    >
                      <option value="Class A">Class A (Motorcycle)</option>
                      <option value="Class B">Class B (Light Vehicle)</option>
                      <option value="Class C">Class C (Car)</option>
                      <option value="Class D">Class D (Truck)</option>
                      <option value="Class E">Class E (Bus)</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Driver Phone
                    </label>
                    <input
                      type="tel"
                      value={registrationForm.driverPhone}
                      onChange={(e) => handleFormChange('driverPhone', e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                      placeholder="+1234567890"
                    />
                  </div>
                </div>
              </div>

              {/* Insurance Information */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                  <Shield className="w-5 h-5 mr-2 text-orange-600" />
                  Insurance Information
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Insurance Company *
                    </label>
                    <input
                      type="text"
                      required
                      value={registrationForm.insuranceCompany}
                      onChange={(e) => handleFormChange('insuranceCompany', e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                      placeholder="ABC Insurance Co."
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Policy Number *
                    </label>
                    <input
                      type="text"
                      required
                      value={registrationForm.insurancePolicy}
                      onChange={(e) => handleFormChange('insurancePolicy', e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                      placeholder="POL-2024-001"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Expiry Date *
                    </label>
                    <input
                      type="date"
                      required
                      value={registrationForm.insuranceExpiry}
                      onChange={(e) => handleFormChange('insuranceExpiry', e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                    />
                  </div>
                </div>
              </div>

              {/* Registration Details */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                  <FileText className="w-5 h-5 mr-2 text-indigo-600" />
                  Registration Details
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Registration Type
                    </label>
                    <select
                      value={registrationForm.registrationType}
                      onChange={(e) => handleFormChange('registrationType', e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                    >
                      <option value="new">New Registration</option>
                      <option value="renewal">Renewal</option>
                      <option value="transfer">Transfer</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Purpose
                    </label>
                    <select
                      value={registrationForm.purpose}
                      onChange={(e) => handleFormChange('purpose', e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                    >
                      <option value="personal">Personal Use</option>
                      <option value="commercial">Commercial Use</option>
                      <option value="rental">Rental</option>
                      <option value="government">Government</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Fuel Type
                    </label>
                    <select
                      value={registrationForm.fuelType}
                      onChange={(e) => handleFormChange('fuelType', e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                    >
                      <option value="gasoline">Gasoline</option>
                      <option value="diesel">Diesel</option>
                      <option value="electric">Electric</option>
                      <option value="hybrid">Hybrid</option>
                      <option value="lpg">LPG</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Form Actions */}
              <div className="flex justify-end space-x-3 pt-6 border-t border-gray-200">
                <button
                  type="button"
                  onClick={() => setShowRegistrationModal(false)}
                  className="px-4 py-2 text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-6 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors"
                >
                  Register Vehicle
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
      </div>

      {/* Vehicle Registration Modal */}
      {showRegistrationModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6 border-b border-gray-200">
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-bold text-gray-900">Register New Vehicle</h2>
                <button 
                  onClick={() => setShowRegistrationModal(false)}
                  className="text-gray-400 hover:text-gray-600"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="p-6 space-y-6">
              {/* Vehicle Information */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                  <Car className="w-5 h-5 mr-2 text-blue-600" />
                  Vehicle Information
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Plate Number *
                    </label>
                    <input
                      type="text"
                      required
                      value={registrationForm.plateNumber}
                      onChange={(e) => handleFormChange('plateNumber', e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                      placeholder="ABC-1234"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Vehicle Type *
                    </label>
                    <select
                      required
                      value={registrationForm.vehicleType}
                      onChange={(e) => handleFormChange('vehicleType', e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                    >
                      <option value="car">Car</option>
                      <option value="truck">Truck</option>
                      <option value="motorcycle">Motorcycle</option>
                      <option value="bus">Bus</option>
                      <option value="trailer">Trailer</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Make *
                    </label>
                    <input
                      type="text"
                      required
                      value={registrationForm.make}
                      onChange={(e) => handleFormChange('make', e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                      placeholder="Toyota"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Model *
                    </label>
                    <input
                      type="text"
                      required
                      value={registrationForm.model}
                      onChange={(e) => handleFormChange('model', e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                      placeholder="Camry"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Year *
                    </label>
                    <input
                      type="number"
                      required
                      value={registrationForm.year}
                      onChange={(e) => handleFormChange('year', e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                      placeholder="2020"
                      min="1900"
                      max={new Date().getFullYear() + 1}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Engine Size (cc)
                    </label>
                    <input
                      type="number"
                      value={registrationForm.engineSize}
                      onChange={(e) => handleFormChange('engineSize', e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                      placeholder="2000"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Color
                    </label>
                    <input
                      type="text"
                      value={registrationForm.color}
                      onChange={(e) => handleFormChange('color', e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                      placeholder="White"
                    />
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      VIN (Vehicle Identification Number)
                    </label>
                    <input
                      type="text"
                      value={registrationForm.vin}
                      onChange={(e) => handleFormChange('vin', e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                      placeholder="1HGBH41JXMN109186"
                    />
                  </div>
                </div>
              </div>

              {/* Owner Information */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                  <User className="w-5 h-5 mr-2 text-green-600" />
                  Owner Information
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Owner Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={registrationForm.ownerName}
                      onChange={(e) => handleFormChange('ownerName', e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                      placeholder="John Smith"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      ID Number *
                    </label>
                    <input
                      type="text"
                      required
                      value={registrationForm.ownerId}
                      onChange={(e) => handleFormChange('ownerId', e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                      placeholder="123456789"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      value={registrationForm.ownerPhone}
                      onChange={(e) => handleFormChange('ownerPhone', e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                      placeholder="+1234567890"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      value={registrationForm.ownerEmail}
                      onChange={(e) => handleFormChange('ownerEmail', e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                      placeholder="john@example.com"
                    />
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Address *
                    </label>
                    <textarea
                      required
                      value={registrationForm.ownerAddress}
                      onChange={(e) => handleFormChange('ownerAddress', e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                      placeholder="123 Main Street, City, State, ZIP"
                      rows={3}
                    />
                  </div>
                </div>
              </div>

              {/* Driver Information */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                  <User className="w-5 h-5 mr-2 text-purple-600" />
                  Driver Information
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Driver Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={registrationForm.driverName}
                      onChange={(e) => handleFormChange('driverName', e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                      placeholder="John Smith"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Driver License Number *
                    </label>
                    <input
                      type="text"
                      required
                      value={registrationForm.driverLicense}
                      onChange={(e) => handleFormChange('driverLicense', e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                      placeholder="DL-2024-001"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      License Type *
                    </label>
                    <select
                      required
                      value={registrationForm.driverLicenseType}
                      onChange={(e) => handleFormChange('driverLicenseType', e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                    >
                      <option value="Class A">Class A (Motorcycle)</option>
                      <option value="Class B">Class B (Light Vehicle)</option>
                      <option value="Class C">Class C (Car)</option>
                      <option value="Class D">Class D (Truck)</option>
                      <option value="Class E">Class E (Bus)</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Driver Phone
                    </label>
                    <input
                      type="tel"
                      value={registrationForm.driverPhone}
                      onChange={(e) => handleFormChange('driverPhone', e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                      placeholder="+1234567890"
                    />
                  </div>
                </div>
              </div>

              {/* Insurance Information */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                  <Shield className="w-5 h-5 mr-2 text-orange-600" />
                  Insurance Information
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Insurance Company *
                    </label>
                    <input
                      type="text"
                      required
                      value={registrationForm.insuranceCompany}
                      onChange={(e) => handleFormChange('insuranceCompany', e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                      placeholder="ABC Insurance Co."
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Policy Number *
                    </label>
                    <input
                      type="text"
                      required
                      value={registrationForm.insurancePolicy}
                      onChange={(e) => handleFormChange('insurancePolicy', e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                      placeholder="POL-2024-001"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Expiry Date *
                    </label>
                    <input
                      type="date"
                      required
                      value={registrationForm.insuranceExpiry}
                      onChange={(e) => handleFormChange('insuranceExpiry', e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                    />
                  </div>
                </div>
              </div>

              {/* Registration Details */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                  <FileText className="w-5 h-5 mr-2 text-indigo-600" />
                  Registration Details
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Registration Type
                    </label>
                    <select
                      value={registrationForm.registrationType}
                      onChange={(e) => handleFormChange('registrationType', e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                    >
                      <option value="new">New Registration</option>
                      <option value="renewal">Renewal</option>
                      <option value="transfer">Transfer</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Purpose
                    </label>
                    <select
                      value={registrationForm.purpose}
                      onChange={(e) => handleFormChange('purpose', e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                    >
                      <option value="personal">Personal Use</option>
                      <option value="commercial">Commercial Use</option>
                      <option value="rental">Rental</option>
                      <option value="government">Government</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Fuel Type
                    </label>
                    <select
                      value={registrationForm.fuelType}
                      onChange={(e) => handleFormChange('fuelType', e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                    >
                      <option value="gasoline">Gasoline</option>
                      <option value="diesel">Diesel</option>
                      <option value="electric">Electric</option>
                      <option value="hybrid">Hybrid</option>
                      <option value="lpg">LPG</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Form Actions */}
              <div className="flex justify-end space-x-3 pt-6 border-t border-gray-200">
                <button
                  type="button"
                  onClick={() => setShowRegistrationModal(false)}
                  className="px-4 py-2 text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-6 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors"
                >
                  Register Vehicle
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default VehicleRegistration;
