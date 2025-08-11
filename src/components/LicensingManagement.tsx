import React, { useState } from 'react';
import { 
  FileText, 
  Building2, 
  Users, 
  Calendar, 
  DollarSign, 
  AlertTriangle,
  CheckCircle,
  Clock,
  Plus,
  Search,
  Filter,
  Upload,
  Bell,
  Eye,
  Edit,
  Download,
  X,
  Save,
  User,
  Building,
  Car,
  Briefcase,
  BarChart3,
  FileSpreadsheet,
  FolderOpen,
  Activity,
  BellRing
} from 'lucide-react';

interface License {
  id: string;
  type: string;
  companyName: string;
  registrationNumber: string;
  licenseNumber: string;
  capital: number;
  specialists: number;
  expiryDate: string;
  status: 'active' | 'expired' | 'pending';
  renewalStatus: 'not_due' | 'due_soon' | 'overdue';
  documents: string[];
}

interface ApplicationForm {
  companyName: string;
  licenseType: string;
  registrationNumber: string;
  capital: string;
  specialists: string;
  contactPerson: string;
  email: string;
  phone: string;
  address: string;
  businessDescription: string;
}

const LicensingManagement = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [searchTerm, setSearchTerm] = useState('');
  const [showApplicationForm, setShowApplicationForm] = useState(false);
  const [showPreviewModal, setShowPreviewModal] = useState(false);
  const [selectedLicense, setSelectedLicense] = useState<License | null>(null);
  const [applicationForm, setApplicationForm] = useState<ApplicationForm>({
    companyName: '',
    licenseType: '',
    registrationNumber: '',
    capital: '',
    specialists: '',
    contactPerson: '',
    email: '',
    phone: '',
    address: '',
    businessDescription: ''
  });

  const licenseTypes = [
    { id: 'business', name: 'Business License', icon: Building, description: 'General business operations' },
    { id: 'construction', name: 'Construction License', icon: Building2, description: 'Construction and building projects' },
    { id: 'transport', name: 'Transport License', icon: Car, description: 'Transportation and logistics' },
    { id: 'specialist', name: 'Specialist License', icon: Briefcase, description: 'Specialized professional services' }
  ];

  const mockLicenses: License[] = [
    {
      id: '1',
      type: 'Business License',
      companyName: 'TechCorp Solutions',
      registrationNumber: 'REG-2024-001',
      licenseNumber: 'BL-2024-001',
      capital: 500000,
      specialists: 15,
      expiryDate: '2024-12-31',
      status: 'active',
      renewalStatus: 'not_due',
      documents: ['Business Registration', 'Tax Certificate', 'Specialist Certificates']
    },
    {
      id: '2',
      type: 'Construction License',
      companyName: 'BuildRight Construction',
      registrationNumber: 'REG-2024-002',
      licenseNumber: 'CL-2024-002',
      capital: 1000000,
      specialists: 25,
      expiryDate: '2024-06-15',
      status: 'pending',
      renewalStatus: 'due_soon',
      documents: ['Construction Permit', 'Safety Certificates', 'Capital Verification']
    },
    {
      id: '3',
      type: 'Transport License',
      companyName: 'FastTrack Logistics',
      registrationNumber: 'REG-2024-003',
      licenseNumber: 'TL-2024-003',
      capital: 750000,
      specialists: 8,
      expiryDate: '2024-03-20',
      status: 'expired',
      renewalStatus: 'overdue',
      documents: ['Transport Permit', 'Vehicle Registration', 'Driver Licenses']
    }
  ];

  const filteredLicenses = mockLicenses.filter(license =>
    license.companyName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    license.licenseNumber.toLowerCase().includes(searchTerm.toLowerCase()) ||
    license.registrationNumber.toLowerCase().includes(searchTerm.toLowerCase())
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

  const getRenewalBadge = (status: string) => {
    switch (status) {
      case 'not_due':
        return <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full">Not Due</span>;
      case 'due_soon':
        return <span className="text-xs bg-yellow-100 text-yellow-700 px-2 py-1 rounded-full">Due Soon</span>;
      case 'overdue':
        return <span className="text-xs bg-red-100 text-red-700 px-2 py-1 rounded-full">Overdue</span>;
      default:
        return null;
    }
  };

  const handleFormChange = (field: keyof ApplicationForm, value: string) => {
    setApplicationForm(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmitApplication = () => {
    // Here you would typically send the data to your backend
    console.log('Submitting application:', applicationForm);
    setShowApplicationForm(false);
    setApplicationForm({
      companyName: '',
      licenseType: '',
      registrationNumber: '',
      capital: '',
      specialists: '',
      contactPerson: '',
      email: '',
      phone: '',
      address: '',
      businessDescription: ''
    });
  };

  const ApplicationFormModal = () => (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-xl max-w-md w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-gray-200">
          <h2 className="text-lg font-bold text-gray-900">New License Application</h2>
          <button 
            onClick={() => setShowApplicationForm(false)}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
          >
            <X className="w-5 h-5 text-gray-500" />
          </button>
        </div>

        {/* Form */}
        <div className="p-4 space-y-4">
          {/* License Type Selection */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">License Type</label>
            <div className="grid grid-cols-2 gap-2">
              {licenseTypes.map((type) => {
                const Icon = type.icon;
                return (
                  <button
                    key={type.id}
                    onClick={() => handleFormChange('licenseType', type.name)}
                    className={`p-3 border rounded-lg text-left transition-colors ${
                      applicationForm.licenseType === type.name
                        ? 'border-blue-500 bg-blue-50'
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    <Icon className="w-5 h-5 text-gray-600 mb-1" />
                    <div className="text-sm font-medium text-gray-900">{type.name}</div>
                    <div className="text-xs text-gray-500">{type.description}</div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Company Information */}
          <div className="space-y-3">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Company Name</label>
              <input
                type="text"
                value={applicationForm.companyName}
                onChange={(e) => handleFormChange('companyName', e.target.value)}
                className="input-field"
                placeholder="Enter company name"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Registration Number</label>
              <input
                type="text"
                value={applicationForm.registrationNumber}
                onChange={(e) => handleFormChange('registrationNumber', e.target.value)}
                className="input-field"
                placeholder="Enter registration number"
              />
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Registered Capital</label>
                <input
                  type="number"
                  value={applicationForm.capital}
                  onChange={(e) => handleFormChange('capital', e.target.value)}
                  className="input-field"
                  placeholder="Amount"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Specialists</label>
                <input
                  type="number"
                  value={applicationForm.specialists}
                  onChange={(e) => handleFormChange('specialists', e.target.value)}
                  className="input-field"
                  placeholder="Number"
                />
              </div>
            </div>
          </div>

          {/* Contact Information */}
          <div className="space-y-3">
            <h3 className="text-sm font-medium text-gray-700">Contact Information</h3>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Contact Person</label>
              <input
                type="text"
                value={applicationForm.contactPerson}
                onChange={(e) => handleFormChange('contactPerson', e.target.value)}
                className="input-field"
                placeholder="Full name"
              />
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                <input
                  type="email"
                  value={applicationForm.email}
                  onChange={(e) => handleFormChange('email', e.target.value)}
                  className="input-field"
                  placeholder="email@company.com"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
                <input
                  type="tel"
                  value={applicationForm.phone}
                  onChange={(e) => handleFormChange('phone', e.target.value)}
                  className="input-field"
                  placeholder="Phone number"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Business Address</label>
              <textarea
                value={applicationForm.address}
                onChange={(e) => handleFormChange('address', e.target.value)}
                className="input-field"
                rows={3}
                placeholder="Enter business address"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Business Description</label>
              <textarea
                value={applicationForm.businessDescription}
                onChange={(e) => handleFormChange('businessDescription', e.target.value)}
                className="input-field"
                rows={3}
                placeholder="Describe your business activities"
              />
            </div>
          </div>

          {/* Required Documents */}
          <div>
            <h3 className="text-sm font-medium text-gray-700 mb-2">Required Documents</h3>
            <div className="space-y-2">
              <div className="flex items-center space-x-2 p-2 bg-gray-50 rounded-lg">
                <Upload className="w-4 h-4 text-gray-400" />
                <span className="text-sm text-gray-600">Business Registration Certificate</span>
              </div>
              <div className="flex items-center space-x-2 p-2 bg-gray-50 rounded-lg">
                <Upload className="w-4 h-4 text-gray-400" />
                <span className="text-sm text-gray-600">Tax Registration Certificate</span>
              </div>
              <div className="flex items-center space-x-2 p-2 bg-gray-50 rounded-lg">
                <Upload className="w-4 h-4 text-gray-400" />
                <span className="text-sm text-gray-600">Specialist Qualifications</span>
              </div>
              <div className="flex items-center space-x-2 p-2 bg-gray-50 rounded-lg">
                <Upload className="w-4 h-4 text-gray-400" />
                <span className="text-sm text-gray-600">Capital Verification Document</span>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="flex space-x-3 p-4 border-t border-gray-200">
          <button
            onClick={() => setShowApplicationForm(false)}
            className="flex-1 btn-secondary"
          >
            Cancel
          </button>
          <button
            onClick={handleSubmitApplication}
            className="flex-1 btn-primary flex items-center justify-center space-x-2"
          >
            <Save className="w-4 h-4" />
            <span>Submit Application</span>
          </button>
        </div>
      </div>
    </div>
  );

  return (
    <>
    <div className="p-4 space-y-6">
      {/* Header */}
      <div className="flex items-center space-x-3">
        <div className="p-2 bg-blue-100 rounded-lg">
          <FileText className="w-6 h-6 text-blue-600" />
        </div>
        <div>
          <h1 className="text-xl font-bold text-gray-900">Licensing Management</h1>
          <p className="text-sm text-gray-600">Registration Numbers, Renewals & Capital</p>
        </div>
      </div>

      {/* Search and Filter */}
      <div className="flex space-x-2">
        <div className="flex-1 relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
          <input
            type="text"
            placeholder="Search licenses, companies, or registration numbers..."
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
            { id: 'applications', label: 'Applications', icon: FileSpreadsheet },
            { id: 'documents', label: 'Documents', icon: FolderOpen },
            { id: 'tracking', label: 'Tracking', icon: Activity },
            { id: 'notifications', label: 'Notifications', icon: BellRing }
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
            <CheckCircle className="w-8 h-8 text-success-600 mx-auto mb-2" />
            <div className="text-2xl font-bold text-gray-900">12</div>
            <div className="text-sm text-gray-600">Active Licenses</div>
          </div>
          <div className="card text-center">
            <Clock className="w-8 h-8 text-warning-600 mx-auto mb-2" />
            <div className="text-2xl font-bold text-gray-900">3</div>
            <div className="text-sm text-gray-600">Pending Renewals</div>
          </div>
          <div className="card text-center">
            <AlertTriangle className="w-8 h-8 text-danger-600 mx-auto mb-2" />
            <div className="text-2xl font-bold text-gray-900">2</div>
            <div className="text-sm text-gray-600">Expired Licenses</div>
          </div>
          <div className="card text-center">
            <DollarSign className="w-8 h-8 text-primary-600 mx-auto mb-2" />
            <div className="text-2xl font-bold text-gray-900">$2.25M</div>
            <div className="text-sm text-gray-600">Total Capital</div>
          </div>
        </div>
      )}

      {/* Licenses List */}
      {activeTab === 'overview' && (
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold text-gray-900">License Portfolio</h2>
            <button 
              onClick={() => setShowApplicationForm(true)}
              className="btn-primary flex items-center space-x-2"
            >
              <Plus className="w-4 h-4" />
              <span>New Application</span>
            </button>
          </div>

          {filteredLicenses.map((license) => (
            <div key={license.id} className="card">
              <div className="flex items-start justify-between mb-3">
                <div>
                  <h3 className="font-semibold text-gray-900">{license.companyName}</h3>
                  <p className="text-sm text-gray-600">{license.type}</p>
                </div>
                <div className="flex items-center space-x-2">
                  {getStatusBadge(license.status)}
                  {getRenewalBadge(license.renewalStatus)}
                </div>
              </div>
              
              {/* Registration & License Numbers */}
              <div className="grid grid-cols-2 gap-4 text-sm mb-3">
                <div className="flex items-center space-x-2">
                  <FileText className="w-4 h-4 text-gray-400" />
                  <span>Reg: {license.registrationNumber}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <FileText className="w-4 h-4 text-gray-400" />
                  <span>License: {license.licenseNumber}</span>
                </div>
              </div>

              {/* Capital & Specialists */}
              <div className="grid grid-cols-2 gap-4 text-sm mb-3">
                <div className="flex items-center space-x-2">
                  <DollarSign className="w-4 h-4 text-gray-400" />
                  <span>Capital: ${license.capital.toLocaleString()}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Users className="w-4 h-4 text-gray-400" />
                  <span>Specialists: {license.specialists}</span>
                </div>
              </div>

              {/* Documents */}
              <div className="mb-3">
                <div className="flex items-center space-x-2 mb-2">
                  <Upload className="w-4 h-4 text-gray-400" />
                  <span className="text-sm font-medium text-gray-700">Documents</span>
                </div>
                <div className="flex flex-wrap gap-1">
                  {license.documents.map((doc, index) => (
                    <span key={index} className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded">
                      {doc}
                    </span>
                  ))}
                </div>
              </div>
              
              {/* Expiry and Actions */}
              <div className="pt-3 border-t border-gray-100">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center space-x-2 text-sm text-gray-600">
                    <Calendar className="w-4 h-4" />
                    <span>Expires: {license.expiryDate}</span>
                  </div>
                  <div className="flex space-x-2">
                    <button 
                      onClick={() => {
                        setSelectedLicense(license);
                        setShowPreviewModal(true);
                      }}
                      className="p-1 text-gray-400 hover:text-gray-600"
                    >
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
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Application/Renewal Forms Tab */}
      {activeTab === 'applications' && (
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold text-gray-900">Application & Renewal Forms</h2>
            <button 
              onClick={() => setShowApplicationForm(true)}
              className="btn-primary flex items-center space-x-2"
            >
              <Plus className="w-4 h-4" />
              <span>New Application</span>
            </button>
          </div>
          <div className="grid grid-cols-1 gap-4">
            <div className="card">
              <h3 className="font-semibold text-gray-900 mb-3">New License Application</h3>
              <div className="space-y-3">
                <div className="grid grid-cols-2 gap-3">
                  {licenseTypes.map((type) => {
                    const Icon = type.icon;
                    return (
                      <button
                        key={type.id}
                        onClick={() => {
                          handleFormChange('licenseType', type.name);
                          setShowApplicationForm(true);
                        }}
                        className="btn-secondary flex items-center space-x-2"
                      >
                        <Icon className="w-4 h-4" />
                        <span>{type.name}</span>
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>
            
            <div className="card">
              <h3 className="font-semibold text-gray-900 mb-3">License Renewal</h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between p-3 bg-yellow-50 rounded-lg">
                  <div>
                    <div className="font-medium text-gray-900">BuildRight Construction</div>
                    <div className="text-sm text-gray-600">Expires: 2024-06-15</div>
                  </div>
                  <button className="btn-primary">Renew Now</button>
                </div>
                <div className="flex items-center justify-between p-3 bg-red-50 rounded-lg">
                  <div>
                    <div className="font-medium text-gray-900">FastTrack Logistics</div>
                    <div className="text-sm text-gray-600">Expired: 2024-03-20</div>
                  </div>
                  <button className="btn-primary">Renew Now</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Document Uploads Tab */}
      {activeTab === 'documents' && (
        <div className="space-y-4">
          <h2 className="text-lg font-semibold text-gray-900">Document Management</h2>
          <div className="card">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-semibold text-gray-900">Upload Documents</h3>
              <button className="btn-primary flex items-center space-x-2">
                <Upload className="w-4 h-4" />
                <span>Upload New</span>
              </button>
            </div>
            <div className="space-y-3">
              <div className="grid grid-cols-2 gap-3">
                <div className="p-3 border-2 border-dashed border-gray-300 rounded-lg text-center">
                  <Upload className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                  <div className="text-sm text-gray-600">Business Registration</div>
                </div>
                <div className="p-3 border-2 border-dashed border-gray-300 rounded-lg text-center">
                  <Upload className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                  <div className="text-sm text-gray-600">Tax Certificate</div>
                </div>
                <div className="p-3 border-2 border-dashed border-gray-300 rounded-lg text-center">
                  <Upload className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                  <div className="text-sm text-gray-600">Specialist Certificates</div>
                </div>
                <div className="p-3 border-2 border-dashed border-gray-300 rounded-lg text-center">
                  <Upload className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                  <div className="text-sm text-gray-600">Capital Verification</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* License Status Tracking Tab */}
      {activeTab === 'tracking' && (
        <div className="space-y-4">
          <h2 className="text-lg font-semibold text-gray-900">License Status Tracking</h2>
          <div className="space-y-3">
            {filteredLicenses.map((license) => (
              <div key={license.id} className="card">
                <div className="flex items-center justify-between mb-3">
                  <div>
                    <h3 className="font-semibold text-gray-900">{license.companyName}</h3>
                    <p className="text-sm text-gray-600">{license.licenseNumber}</p>
                  </div>
                  {getStatusBadge(license.status)}
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-600">Registration Status:</span>
                    <span className="font-medium text-green-600">Verified</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-600">Document Status:</span>
                    <span className="font-medium text-green-600">Complete</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-600">Capital Verification:</span>
                    <span className="font-medium text-green-600">Approved</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-600">Specialist Verification:</span>
                    <span className="font-medium text-green-600">Complete</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Expiry Date Notifications Tab */}
      {activeTab === 'notifications' && (
        <div className="space-y-4">
          <h2 className="text-lg font-semibold text-gray-900">Expiry Date Notifications</h2>
          <div className="space-y-3">
            <div className="card border-l-4 border-red-500">
              <div className="flex items-center space-x-3">
                <Bell className="w-6 h-6 text-red-500" />
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-900">FastTrack Logistics</h3>
                  <p className="text-sm text-gray-600">License expired on March 20, 2024</p>
                  <p className="text-xs text-red-600 mt-1">OVERDUE - Immediate action required</p>
                </div>
                <button className="btn-primary">Renew Now</button>
              </div>
            </div>
            
            <div className="card border-l-4 border-yellow-500">
              <div className="flex items-center space-x-3">
                <Bell className="w-6 h-6 text-yellow-500" />
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-900">BuildRight Construction</h3>
                  <p className="text-sm text-gray-600">License expires on June 15, 2024</p>
                  <p className="text-xs text-yellow-600 mt-1">Due in 45 days</p>
                </div>
                <button className="btn-secondary">Remind Later</button>
              </div>
            </div>
            
            <div className="card border-l-4 border-blue-500">
              <div className="flex items-center space-x-3">
                <Bell className="w-6 h-6 text-blue-500" />
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-900">TechCorp Solutions</h3>
                  <p className="text-sm text-gray-600">License expires on December 31, 2024</p>
                  <p className="text-xs text-blue-600 mt-1">Due in 6 months</p>
                </div>
                <button className="btn-secondary">Set Reminder</button>
              </div>
            </div>
          </div>
        </div>
      )}



      {/* License Preview Modal */}
      {showPreviewModal && selectedLicense && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-gray-200">
              <div>
                <h2 className="text-xl font-bold text-gray-900">License Details</h2>
                <p className="text-sm text-gray-600">Complete license information and status</p>
              </div>
          <button 
                onClick={() => setShowPreviewModal(false)}
                className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
          >
                <X className="w-5 h-5 text-gray-500" />
          </button>
            </div>

            {/* Content */}
            <div className="p-6 space-y-6">
              {/* Company Information */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                  <Building className="w-5 h-5 mr-2 text-blue-600" />
                  Company Information
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Company Name</label>
                    <div className="text-sm text-gray-900 font-medium">{selectedLicense.companyName}</div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">License Type</label>
                    <div className="text-sm text-gray-900 font-medium">{selectedLicense.type}</div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Registration Number</label>
                    <div className="text-sm text-gray-900 font-medium">{selectedLicense.registrationNumber}</div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">License Number</label>
                    <div className="text-sm text-gray-900 font-medium">{selectedLicense.licenseNumber}</div>
                  </div>
                </div>
              </div>

              {/* Financial Information */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                  <DollarSign className="w-5 h-5 mr-2 text-green-600" />
                  Financial Information
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Registered Capital</label>
                    <div className="text-lg font-bold text-green-600">${selectedLicense.capital.toLocaleString()}</div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Number of Specialists</label>
                    <div className="text-lg font-bold text-blue-600">{selectedLicense.specialists}</div>
                  </div>
                </div>
              </div>

              {/* License Status */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                  <Activity className="w-5 h-5 mr-2 text-purple-600" />
                  License Status
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Current Status</label>
                    <div className="flex items-center space-x-2">
                      {getStatusBadge(selectedLicense.status)}
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Renewal Status</label>
                    <div className="flex items-center space-x-2">
                      {getRenewalBadge(selectedLicense.renewalStatus)}
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Expiry Date</label>
                    <div className="text-sm text-gray-900 font-medium">{selectedLicense.expiryDate}</div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Days Remaining</label>
                    <div className="text-sm text-gray-900 font-medium">
                      {(() => {
                        const today = new Date();
                        const expiry = new Date(selectedLicense.expiryDate);
                        const diffTime = expiry.getTime() - today.getTime();
                        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
                        return diffDays > 0 ? `${diffDays} days` : `${Math.abs(diffDays)} days overdue`;
                      })()}
                    </div>
                  </div>
                </div>
              </div>

              {/* Documents */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                  <FolderOpen className="w-5 h-5 mr-2 text-orange-600" />
                  Required Documents
                </h3>
                <div className="space-y-2">
                  {selectedLicense.documents.map((doc, index) => (
                    <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                      <div className="flex items-center space-x-2">
                        <FileText className="w-4 h-4 text-gray-400" />
                        <span className="text-sm text-gray-900">{doc}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full">Uploaded</span>
                        <button className="p-1 text-blue-600 hover:text-blue-800">
                          <Download className="w-4 h-4" />
          </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* License Timeline */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                  <Calendar className="w-5 h-5 mr-2 text-indigo-600" />
                  License Timeline
                </h3>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    <div className="flex-1">
                      <div className="text-sm font-medium text-gray-900">License Issued</div>
                      <div className="text-xs text-gray-600">January 15, 2024</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                    <div className="flex-1">
                      <div className="text-sm font-medium text-gray-900">First Inspection</div>
                      <div className="text-xs text-gray-600">February 20, 2024</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="flex-1">
                      <div className="text-sm font-medium text-gray-900">Renewal Notice Sent</div>
                      <div className="text-xs text-gray-600">March 1, 2024</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-gray-300 rounded-full"></div>
                    <div className="flex-1">
                      <div className="text-sm font-medium text-gray-900">License Expires</div>
                      <div className="text-xs text-gray-600">{selectedLicense.expiryDate}</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Compliance Status */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                  <CheckCircle className="w-5 h-5 mr-2 text-green-600" />
                  Compliance Status
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-3 bg-green-50 rounded-lg">
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-600" />
                      <span className="text-sm font-medium text-green-800">Tax Compliance</span>
                    </div>
                  </div>
                  <div className="p-3 bg-green-50 rounded-lg">
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-600" />
                      <span className="text-sm font-medium text-green-800">Safety Standards</span>
                    </div>
                  </div>
                  <div className="p-3 bg-green-50 rounded-lg">
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-600" />
                      <span className="text-sm font-medium text-green-800">Insurance Coverage</span>
                    </div>
                  </div>
                  <div className="p-3 bg-green-50 rounded-lg">
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-600" />
                      <span className="text-sm font-medium text-green-800">Environmental Compliance</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Footer */}
            <div className="flex space-x-3 p-6 border-t border-gray-200">
              <button
                onClick={() => setShowPreviewModal(false)}
                className="flex-1 btn-secondary"
              >
                Close
          </button>
              <button className="flex-1 btn-primary flex items-center justify-center space-x-2">
                <Download className="w-4 h-4" />
                <span>Download License</span>
          </button>
        </div>
      </div>
        </div>
      )}

      </div>

      {/* License Preview Modal */}
      {showPreviewModal && selectedLicense && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-gray-200">
              <div>
                <h2 className="text-xl font-bold text-gray-900">License Details</h2>
                <p className="text-sm text-gray-600">Complete license information and status</p>
              </div>
              <button 
                onClick={() => setShowPreviewModal(false)}
                className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
              >
                <X className="w-5 h-5 text-gray-500" />
              </button>
            </div>

            {/* Content */}
            <div className="p-6 space-y-6">
              {/* Company Information */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                  <Building className="w-5 h-5 mr-2 text-blue-600" />
                  Company Information
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Company Name</label>
                    <div className="text-sm text-gray-900 font-medium">{selectedLicense.companyName}</div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">License Type</label>
                    <div className="text-sm text-gray-900 font-medium">{selectedLicense.type}</div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Registration Number</label>
                    <div className="text-sm text-gray-900 font-medium">{selectedLicense.registrationNumber}</div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">License Number</label>
                    <div className="text-sm text-gray-900 font-medium">{selectedLicense.licenseNumber}</div>
                  </div>
                </div>
              </div>

              {/* Financial Information */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                  <DollarSign className="w-5 h-5 mr-2 text-green-600" />
                  Financial Information
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Registered Capital</label>
                    <div className="text-lg font-bold text-green-600">${selectedLicense.capital.toLocaleString()}</div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Number of Specialists</label>
                    <div className="text-lg font-bold text-blue-600">{selectedLicense.specialists}</div>
                  </div>
                </div>
              </div>

              {/* License Status */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                  <Activity className="w-5 h-5 mr-2 text-purple-600" />
                  License Status
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Current Status</label>
                    <div className="flex items-center space-x-2">
                      {getStatusBadge(selectedLicense.status)}
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Renewal Status</label>
                    <div className="flex items-center space-x-2">
                      {getRenewalBadge(selectedLicense.renewalStatus)}
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Expiry Date</label>
                    <div className="text-sm text-gray-900 font-medium">{selectedLicense.expiryDate}</div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Days Remaining</label>
                    <div className="text-sm text-gray-900 font-medium">
                      {(() => {
                        const today = new Date();
                        const expiry = new Date(selectedLicense.expiryDate);
                        const diffTime = expiry.getTime() - today.getTime();
                        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
                        return diffDays > 0 ? `${diffDays} days` : `${Math.abs(diffDays)} days overdue`;
                      })()}
                    </div>
                  </div>
                </div>
              </div>

              {/* Documents */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                  <FolderOpen className="w-5 h-5 mr-2 text-orange-600" />
                  Required Documents
                </h3>
                <div className="space-y-2">
                  {selectedLicense.documents.map((doc, index) => (
                    <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                      <div className="flex items-center space-x-2">
                        <FileText className="w-4 h-4 text-gray-400" />
                        <span className="text-sm text-gray-900">{doc}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full">Uploaded</span>
                        <button className="p-1 text-blue-600 hover:text-blue-800">
                          <Download className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* License Timeline */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                  <Calendar className="w-5 h-5 mr-2 text-indigo-600" />
                  License Timeline
                </h3>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    <div className="flex-1">
                      <div className="text-sm font-medium text-gray-900">License Issued</div>
                      <div className="text-xs text-gray-600">January 15, 2024</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                    <div className="flex-1">
                      <div className="text-sm font-medium text-gray-900">First Inspection</div>
                      <div className="text-xs text-gray-600">February 20, 2024</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="flex-1">
                      <div className="text-sm font-medium text-gray-900">Renewal Notice Sent</div>
                      <div className="text-xs text-gray-600">March 1, 2024</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-gray-300 rounded-full"></div>
                    <div className="flex-1">
                      <div className="text-sm font-medium text-gray-900">License Expires</div>
                      <div className="text-xs text-gray-600">{selectedLicense.expiryDate}</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Compliance Status */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                  <CheckCircle className="w-5 h-5 mr-2 text-green-600" />
                  Compliance Status
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-3 bg-green-50 rounded-lg">
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-600" />
                      <span className="text-sm font-medium text-green-800">Tax Compliance</span>
                    </div>
                  </div>
                  <div className="p-3 bg-green-50 rounded-lg">
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-600" />
                      <span className="text-sm font-medium text-green-800">Safety Standards</span>
                    </div>
                  </div>
                  <div className="p-3 bg-green-50 rounded-lg">
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-600" />
                      <span className="text-sm font-medium text-green-800">Insurance Coverage</span>
                    </div>
                  </div>
                  <div className="p-3 bg-green-50 rounded-lg">
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-600" />
                      <span className="text-sm font-medium text-green-800">Environmental Compliance</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Footer */}
            <div className="flex space-x-3 p-6 border-t border-gray-200">
              <button
                onClick={() => setShowPreviewModal(false)}
                className="flex-1 btn-secondary"
              >
                Close
              </button>
              <button className="flex-1 btn-primary flex items-center justify-center space-x-2">
                <Download className="w-4 h-4" />
                <span>Download License</span>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Application Form Modal */}
      {showApplicationForm && <ApplicationFormModal />}
    </>
  );
};

export default LicensingManagement;
