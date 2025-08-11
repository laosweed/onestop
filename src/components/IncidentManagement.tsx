import React, { useState } from 'react';
import { 
  AlertTriangle, 
  AlertCircle, 
  Clock, 
  CheckCircle, 
  Plus, 
  Search, 
  Filter,
  BarChart3,
  FileText,
  Shield,
  MapPin,
  User,
  Calendar,
  Phone,
  Mail,
  Camera,
  Download,
  Eye,
  Edit,
  X,
  Save,
  Send,
  Bell,
  Activity,
  TrendingUp,
  TrendingDown,
  Users,
  Building,
  Car,
  Truck,
  Ship,
  Globe,
  Zap,
  Target,
  Flag,
  AlertOctagon,
  Info,
  HelpCircle
} from 'lucide-react';

interface Incident {
  id: string;
  title: string;
  description: string;
  type: 'safety' | 'security' | 'environmental' | 'operational' | 'technical' | 'medical';
  severity: 'low' | 'medium' | 'high' | 'critical';
  status: 'reported' | 'investigating' | 'in-progress' | 'resolved' | 'closed';
  location: string;
  reportedBy: string;
  reportedAt: string;
  assignedTo: string;
  priority: 'low' | 'medium' | 'high' | 'urgent';
  category: 'licensing' | 'building' | 'vehicles' | 'overseas' | 'maritime' | 'general';
  affectedServices: string[];
  witnesses: string[];
  evidence: string[];
  actions: string[];
  resolution: string;
  resolvedAt: string;
  followUpRequired: boolean;
  followUpDate: string;
}

const IncidentManagement = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [searchTerm, setSearchTerm] = useState('');
  const [showReportModal, setShowReportModal] = useState(false);
  const [selectedIncident, setSelectedIncident] = useState<Incident | null>(null);

  const mockIncidents: Incident[] = [
    {
      id: '1',
      title: 'Building Site Safety Violation',
      description: 'Multiple safety violations observed at construction site including lack of proper safety equipment and unauthorized access to restricted areas.',
      type: 'safety',
      severity: 'high',
      status: 'investigating',
      location: 'Downtown Construction Zone',
      reportedBy: 'Safety Inspector Ahmed Hassan',
      reportedAt: '2024-02-15 09:30',
      assignedTo: 'Safety Team Lead',
      priority: 'high',
      category: 'building',
      affectedServices: ['Building Permits', 'Safety Compliance'],
      witnesses: ['Site Worker 1', 'Site Worker 2', 'Neighbor'],
      evidence: ['Photos', 'Video footage', 'Witness statements'],
      actions: ['Site inspection scheduled', 'Safety equipment audit', 'Worker training required'],
      resolution: '',
      resolvedAt: '',
      followUpRequired: true,
      followUpDate: '2024-02-20'
    },
    {
      id: '2',
      title: 'Vehicle Registration Fraud Attempt',
      description: 'Suspicious activity detected during vehicle registration process with forged documents submitted.',
      type: 'security',
      severity: 'critical',
      status: 'in-progress',
      location: 'Vehicle Registration Center',
      reportedBy: 'Registration Officer Sarah Johnson',
      reportedAt: '2024-02-14 14:15',
      assignedTo: 'Security Investigation Team',
      priority: 'urgent',
      category: 'vehicles',
      affectedServices: ['Vehicle Registration', 'Document Verification'],
      witnesses: ['Registration Officer', 'Security Guard', 'CCTV footage'],
      evidence: ['Forged documents', 'CCTV recordings', 'Digital logs'],
      actions: ['Document verification enhanced', 'Security protocols updated', 'Legal action initiated'],
      resolution: '',
      resolvedAt: '',
      followUpRequired: true,
      followUpDate: '2024-02-18'
    },
    {
      id: '3',
      title: 'Maritime Vessel Safety Incident',
      description: 'Minor collision between fishing vessel and cargo ship in port area, no injuries reported but vessel damage occurred.',
      type: 'operational',
      severity: 'medium',
      status: 'resolved',
      location: 'Port Alexandria',
      reportedBy: 'Port Authority Officer',
      reportedAt: '2024-02-13 16:45',
      assignedTo: 'Maritime Safety Team',
      priority: 'medium',
      category: 'maritime',
      affectedServices: ['Maritime Management', 'Port Operations'],
      witnesses: ['Port Authority', 'Vessel Crew', 'Harbor Master'],
      evidence: ['Damage assessment', 'Weather reports', 'Navigation logs'],
      actions: ['Vessel inspection completed', 'Navigation protocols reviewed', 'Insurance claim processed'],
      resolution: 'Incident resolved with vessel repairs completed and navigation protocols updated',
      resolvedAt: '2024-02-15 10:30',
      followUpRequired: false,
      followUpDate: ''
    },
    {
      id: '4',
      title: 'Environmental Compliance Issue',
      description: 'Unauthorized waste disposal detected at construction site, potential environmental hazard identified.',
      type: 'environmental',
      severity: 'high',
      status: 'reported',
      location: 'Industrial Zone Construction Site',
      reportedBy: 'Environmental Inspector',
      reportedAt: '2024-02-15 11:20',
      assignedTo: 'Environmental Compliance Team',
      priority: 'high',
      category: 'building',
      affectedServices: ['Building Permits', 'Environmental Compliance'],
      witnesses: ['Environmental Inspector', 'Site Manager', 'Local Resident'],
      evidence: ['Soil samples', 'Photographic evidence', 'Environmental assessment'],
      actions: ['Site investigation initiated', 'Environmental assessment scheduled', 'Compliance review required'],
      resolution: '',
      resolvedAt: '',
      followUpRequired: true,
      followUpDate: '2024-02-22'
    }
  ];

  const filteredIncidents = mockIncidents.filter(incident =>
    incident.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    incident.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
    incident.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
    incident.reportedBy.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const getSeverityBadge = (severity: string) => {
    const colors = {
      'low': 'bg-green-100 text-green-800',
      'medium': 'bg-yellow-100 text-yellow-800',
      'high': 'bg-orange-100 text-orange-800',
      'critical': 'bg-red-100 text-red-800'
    };
    return (
      <span className={`px-2 py-1 rounded-full text-xs font-medium ${colors[severity as keyof typeof colors]}`}>
        {severity.charAt(0).toUpperCase() + severity.slice(1)}
      </span>
    );
  };

  const getStatusBadge = (status: string) => {
    const colors = {
      'reported': 'bg-blue-100 text-blue-800',
      'investigating': 'bg-purple-100 text-purple-800',
      'in-progress': 'bg-yellow-100 text-yellow-800',
      'resolved': 'bg-green-100 text-green-800',
      'closed': 'bg-gray-100 text-gray-800'
    };
    return (
      <span className={`px-2 py-1 rounded-full text-xs font-medium ${colors[status as keyof typeof colors]}`}>
        {status.charAt(0).toUpperCase() + status.slice(1)}
      </span>
    );
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'safety': return <Shield className="w-4 h-4" />;
      case 'security': return <AlertTriangle className="w-4 h-4" />;
      case 'environmental': return <Globe className="w-4 h-4" />;
      case 'operational': return <Activity className="w-4 h-4" />;
      case 'technical': return <Zap className="w-4 h-4" />;
      case 'medical': return <HelpCircle className="w-4 h-4" />;
      default: return <AlertCircle className="w-4 h-4" />;
    }
  };

  return (
    <>
      <div className="p-4 space-y-6">
        {/* Header */}
        <div className="flex items-center space-x-3">
          <div className="p-2 bg-red-100 rounded-lg">
            <AlertTriangle className="w-6 h-6 text-red-600" />
          </div>
          <div>
            <h1 className="text-xl font-bold text-gray-900">Incident Management</h1>
            <p className="text-sm text-gray-600">Safety, Security & Compliance Incidents</p>
          </div>
        </div>

        {/* Search and Filter */}
        <div className="flex space-x-2">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            <input
              type="text"
              placeholder="Search incidents, locations, or reporters..."
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
              { id: 'incidents', label: 'All Incidents', icon: AlertTriangle },
              { id: 'reports', label: 'Reports', icon: FileText },
              { id: 'analytics', label: 'Analytics', icon: TrendingUp },
              { id: 'prevention', label: 'Prevention', icon: Shield }
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
              <AlertTriangle className="w-8 h-8 text-red-600 mx-auto mb-2" />
              <div className="text-2xl font-bold text-gray-900">4</div>
              <div className="text-sm text-gray-600">Active Incidents</div>
            </div>
            <div className="card text-center">
              <Clock className="w-8 h-8 text-yellow-600 mx-auto mb-2" />
              <div className="text-2xl font-bold text-gray-900">2</div>
              <div className="text-sm text-gray-600">Under Investigation</div>
            </div>
            <div className="card text-center">
              <CheckCircle className="w-8 h-8 text-green-600 mx-auto mb-2" />
              <div className="text-2xl font-bold text-gray-900">1</div>
              <div className="text-sm text-gray-600">Resolved Today</div>
            </div>
            <div className="card text-center">
              <Shield className="w-8 h-8 text-blue-600 mx-auto mb-2" />
              <div className="text-2xl font-bold text-gray-900">85%</div>
              <div className="text-sm text-gray-600">Response Rate</div>
            </div>
          </div>
        )}

        {/* All Incidents */}
        {activeTab === 'incidents' && (
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-semibold text-gray-900">All Incidents</h2>
              <button 
                onClick={() => setShowReportModal(true)}
                className="btn-primary flex items-center space-x-2"
              >
                <Plus className="w-4 h-4" />
                <span>Report Incident</span>
              </button>
            </div>

            {filteredIncidents.map((incident) => (
              <div key={incident.id} className="card">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-2">
                      {getTypeIcon(incident.type)}
                      <h3 className="font-semibold text-gray-900">{incident.title}</h3>
                    </div>
                    <p className="text-sm text-gray-600 mb-2">{incident.description}</p>
                    <div className="flex items-center space-x-2 text-xs text-gray-500">
                      <MapPin className="w-3 h-3" />
                      <span>{incident.location}</span>
                      <span>•</span>
                      <Calendar className="w-3 h-3" />
                      <span>{incident.reportedAt}</span>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    {getSeverityBadge(incident.severity)}
                    {getStatusBadge(incident.status)}
                  </div>
                </div>
                
                {/* Incident Details */}
                <div className="grid grid-cols-2 gap-4 text-sm mb-3">
                  <div className="flex items-center space-x-2">
                    <User className="w-4 h-4 text-gray-400" />
                    <span>Reporter: {incident.reportedBy}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <User className="w-4 h-4 text-gray-400" />
                    <span>Assigned: {incident.assignedTo}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Flag className="w-4 h-4 text-gray-400" />
                    <span>Category: {incident.category}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Target className="w-4 h-4 text-gray-400" />
                    <span>Priority: {incident.priority}</span>
                  </div>
                </div>

                {/* Affected Services */}
                <div className="mb-3">
                  <div className="flex items-center space-x-2 mb-2">
                    <Building className="w-4 h-4 text-gray-400" />
                    <span className="text-sm font-medium text-gray-700">Affected Services</span>
                  </div>
                  <div className="flex flex-wrap gap-1">
                    {incident.affectedServices.map((service, index) => (
                      <span key={index} className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded">
                        {service}
                      </span>
                    ))}
                  </div>
                </div>
                
                {/* Actions and Status */}
                <div className="pt-3 border-t border-gray-100">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex space-x-4 text-sm text-gray-600">
                      <span>Witnesses: {incident.witnesses.length}</span>
                      <span>Evidence: {incident.evidence.length}</span>
                      <span>Actions: {incident.actions.length}</span>
                    </div>
                    <div className="flex space-x-2">
                      <button 
                        onClick={() => {
                          setSelectedIncident(incident);
                          setShowReportModal(true);
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
                  {incident.followUpRequired && (
                    <div className="flex items-center space-x-2 text-xs text-orange-600">
                      <Bell className="w-3 h-3" />
                      <span>Follow-up required: {incident.followUpDate}</span>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Reports */}
        {activeTab === 'reports' && (
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-semibold text-gray-900">Incident Reports</h2>
              <button className="btn-primary flex items-center space-x-2">
                <Plus className="w-4 h-4" />
                <span>Generate Report</span>
              </button>
            </div>

            <div className="card">
              <div className="text-center py-8">
                <FileText className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Incident Reports</h3>
                <p className="text-gray-600">Comprehensive reporting and analytics will be implemented here</p>
              </div>
            </div>
          </div>
        )}

        {/* Analytics */}
        {activeTab === 'analytics' && (
          <div className="space-y-4">
            <h2 className="text-lg font-semibold text-gray-900">Incident Analytics</h2>
            
            <div className="card">
              <div className="text-center py-8">
                <TrendingUp className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Analytics Dashboard</h3>
                <p className="text-gray-600">Advanced analytics and trend analysis will be implemented here</p>
              </div>
            </div>
          </div>
        )}

        {/* Prevention */}
        {activeTab === 'prevention' && (
          <div className="space-y-4">
            <h2 className="text-lg font-semibold text-gray-900">Prevention & Training</h2>
            
            <div className="card">
              <div className="text-center py-8">
                <Shield className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Prevention Programs</h3>
                <p className="text-gray-600">Safety training and prevention measures will be implemented here</p>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Incident Report Modal */}
      {showReportModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between p-6 border-b border-gray-200">
              <div>
                <h2 className="text-xl font-bold text-gray-900">
                  {selectedIncident ? 'Incident Details' : 'Report New Incident'}
                </h2>
                <p className="text-sm text-gray-600">
                  {selectedIncident ? 'View and manage incident details' : 'Complete incident report form'}
                </p>
              </div>
              <button 
                onClick={() => {
                  setShowReportModal(false);
                  setSelectedIncident(null);
                }}
                className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
              >
                <X className="w-5 h-5 text-gray-500" />
              </button>
            </div>

            <div className="p-6">
              <div className="text-center py-8">
                <AlertTriangle className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {selectedIncident ? 'Incident Management Form' : 'Incident Report Form'}
                </h3>
                <p className="text-gray-600">
                  {selectedIncident 
                    ? 'Comprehensive incident management form will be implemented here'
                    : 'Comprehensive incident report form will be implemented here'
                  }
                </p>
              </div>
            </div>

            <div className="flex space-x-3 p-6 border-t border-gray-200">
              <button
                onClick={() => {
                  setShowReportModal(false);
                  setSelectedIncident(null);
                }}
                className="flex-1 btn-secondary"
              >
                Cancel
              </button>
              <button className="flex-1 btn-primary">
                {selectedIncident ? 'Update Incident' : 'Submit Report'}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default IncidentManagement;
