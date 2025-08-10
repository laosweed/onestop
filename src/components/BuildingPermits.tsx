import React, { useState } from 'react';
import { 
  Building, 
  MapPin, 
  Users, 
  FileText, 
  DollarSign, 
  AlertTriangle,
  CheckCircle,
  Clock,
  Plus,
  Search,
  Filter,
  Ruler,
  HardHat,
  Globe,
  X,
  Save,
  Upload,
  Calendar,
  Building2,
  Home,
  Factory,
  Store,
  Leaf,
  Shield,
  BarChart3,
  MessageSquare,
  Download,
  Calculator
} from 'lucide-react';

interface BuildingProject {
  id: string;
  projectName: string;
  company: string;
  location: string;
  zoning: string;
  heightLimit: number;
  esiaStatus: 'approved' | 'pending' | 'rejected';
  permitStatus: 'active' | 'expired' | 'pending';
  totalFees: number;
  paidFees: number;
  startDate: string;
  endDate: string;
  contractors: number;
  materialsSummit: boolean;
  urbanPlanningApproved: boolean;
  esia?: ESIADetails;
}

interface ESIADetails {
  id: string;
  projectId: string;
  submissionDate: string;
  reviewDate?: string;
  completionDate?: string;
  assessor: string;
  category: 'A' | 'B' | 'C'; // Environmental risk category
  environmentalImpacts: EnvironmentalImpact[];
  socialImpacts: SocialImpact[];
  mitigationMeasures: MitigationMeasure[];
  monitoringPlan: MonitoringPlan[];
  publicConsultation: PublicConsultation;
  complianceStatus: ComplianceStatus[];
  documents: ESIADocument[];
  recommendations: string[];
  conditions: string[];
  validityPeriod: string;
  reviewerComments?: string;
}

interface EnvironmentalImpact {
  category: 'air' | 'water' | 'soil' | 'noise' | 'waste' | 'biodiversity' | 'landscape';
  description: string;
  severity: 'low' | 'medium' | 'high';
  likelihood: 'low' | 'medium' | 'high';
  impact: 'positive' | 'negative' | 'neutral';
  phase: 'construction' | 'operation' | 'decommissioning';
}

interface SocialImpact {
  category: 'employment' | 'community' | 'health' | 'safety' | 'cultural' | 'economic';
  description: string;
  affectedGroups: string[];
  severity: 'low' | 'medium' | 'high';
  impact: 'positive' | 'negative' | 'neutral';
  phase: 'construction' | 'operation' | 'decommissioning';
}

interface MitigationMeasure {
  impactType: string;
  measure: string;
  responsibility: string;
  timeline: string;
  cost: number;
  effectiveness: 'low' | 'medium' | 'high';
  status: 'planned' | 'implemented' | 'completed';
}

interface MonitoringPlan {
  parameter: string;
  frequency: string;
  method: string;
  responsible: string;
  target: string;
  currentValue?: string;
  compliance: 'compliant' | 'non-compliant' | 'pending';
}

interface PublicConsultation {
  conductedDate: string;
  participants: number;
  method: string[];
  keyFeedback: string[];
  concerns: string[];
  responseProvided: boolean;
}

interface ComplianceStatus {
  regulation: string;
  requirement: string;
  status: 'compliant' | 'non-compliant' | 'pending';
  evidence: string;
  dueDate: string;
}

interface ESIADocument {
  type: string;
  name: string;
  uploadDate: string;
  status: 'submitted' | 'reviewed' | 'approved' | 'rejected';
  reviewer?: string;
  comments?: string;
}

interface NewProjectForm {
  projectName: string;
  projectType: string;
  company: string;
  contactPerson: string;
  email: string;
  phone: string;
  location: string;
  address: string;
  zoning: string;
  plotSize: string;
  heightLimit: string;
  floors: string;
  buildingType: string;
  estimatedCost: string;
  startDate: string;
  endDate: string;
  contractors: string;
  description: string;
}

const BuildingPermits = () => {
  const [activeTab, setActiveTab] = useState('projects');
  const [searchTerm, setSearchTerm] = useState('');
  const [showNewProjectForm, setShowNewProjectForm] = useState(false);
  const [newProjectForm, setNewProjectForm] = useState<NewProjectForm>({
    projectName: '',
    projectType: '',
    company: '',
    contactPerson: '',
    email: '',
    phone: '',
    location: '',
    address: '',
    zoning: '',
    plotSize: '',
    heightLimit: '',
    floors: '',
    buildingType: '',
    estimatedCost: '',
    startDate: '',
    endDate: '',
    contractors: '',
    description: ''
  });

  const projectTypes = [
    { id: 'residential', name: 'Residential', icon: Home, description: 'Houses, apartments, condos' },
    { id: 'commercial', name: 'Commercial', icon: Store, description: 'Offices, shops, malls' },
    { id: 'industrial', name: 'Industrial', icon: Factory, description: 'Factories, warehouses' },
    { id: 'mixed', name: 'Mixed Use', icon: Building2, description: 'Combined residential/commercial' }
  ];

  const zoningTypes = ['Residential', 'Commercial', 'Industrial', 'Mixed Use', 'Agricultural', 'Institutional'];
  const buildingTypes = ['Low-rise', 'Mid-rise', 'High-rise', 'Single Story', 'Multi-story'];

  const handleFormChange = (field: keyof NewProjectForm, value: string) => {
    setNewProjectForm(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmitProject = () => {
    // Here you would typically send the data to your backend
    console.log('Submitting new project:', newProjectForm);
    setShowNewProjectForm(false);
    setNewProjectForm({
      projectName: '',
      projectType: '',
      company: '',
      contactPerson: '',
      email: '',
      phone: '',
      location: '',
      address: '',
      zoning: '',
      plotSize: '',
      heightLimit: '',
      floors: '',
      buildingType: '',
      estimatedCost: '',
      startDate: '',
      endDate: '',
      contractors: '',
      description: ''
    });
  };

  const mockESIAData: ESIADetails[] = [
    {
      id: 'ESIA-001',
      projectId: '1',
      submissionDate: '2023-11-15',
      reviewDate: '2023-12-01',
      completionDate: '2023-12-20',
      assessor: 'Dr. Sarah Johnson, Environmental Consultant',
      category: 'B',
      environmentalImpacts: [
        {
          category: 'air',
          description: 'Construction dust and vehicle emissions during building phase',
          severity: 'medium',
          likelihood: 'high',
          impact: 'negative',
          phase: 'construction'
        },
        {
          category: 'noise',
          description: 'Construction noise affecting nearby residential areas',
          severity: 'medium',
          likelihood: 'high',
          impact: 'negative',
          phase: 'construction'
        },
        {
          category: 'waste',
          description: 'Construction waste generation and disposal',
          severity: 'low',
          likelihood: 'high',
          impact: 'negative',
          phase: 'construction'
        },
        {
          category: 'landscape',
          description: 'Modern architectural design enhancing urban skyline',
          severity: 'low',
          likelihood: 'high',
          impact: 'positive',
          phase: 'operation'
        }
      ],
      socialImpacts: [
        {
          category: 'employment',
          description: 'Creation of 200+ permanent jobs in the technology sector',
          affectedGroups: ['Local workforce', 'Tech professionals'],
          severity: 'high',
          impact: 'positive',
          phase: 'operation'
        },
        {
          category: 'community',
          description: 'Increased traffic and congestion during peak hours',
          affectedGroups: ['Local residents', 'Commuters'],
          severity: 'medium',
          impact: 'negative',
          phase: 'operation'
        },
        {
          category: 'economic',
          description: 'Boost to local economy through business activities',
          affectedGroups: ['Local businesses', 'Service providers'],
          severity: 'high',
          impact: 'positive',
          phase: 'operation'
        }
      ],
      mitigationMeasures: [
        {
          impactType: 'Air Quality',
          measure: 'Use of dust suppression systems and regular water spraying',
          responsibility: 'Main Contractor',
          timeline: 'Throughout construction',
          cost: 15000,
          effectiveness: 'high',
          status: 'implemented'
        },
        {
          impactType: 'Noise Control',
          measure: 'Restrict construction hours (7AM-6PM) and use noise barriers',
          responsibility: 'Main Contractor',
          timeline: 'Throughout construction',
          cost: 25000,
          effectiveness: 'high',
          status: 'implemented'
        },
        {
          impactType: 'Traffic Management',
          measure: 'Implement traffic management plan and provide shuttle services',
          responsibility: 'Project Owner',
          timeline: 'Post-completion',
          cost: 50000,
          effectiveness: 'medium',
          status: 'planned'
        }
      ],
      monitoringPlan: [
        {
          parameter: 'Air Quality (PM10)',
          frequency: 'Daily during construction',
          method: 'Automated monitoring stations',
          responsible: 'Environmental Consultant',
          target: '< 150 μg/m³',
          currentValue: '125 μg/m³',
          compliance: 'compliant'
        },
        {
          parameter: 'Noise Levels',
          frequency: 'Continuous during work hours',
          method: 'Sound level meters',
          responsible: 'Environmental Consultant',
          target: '< 70 dB during day',
          currentValue: '68 dB',
          compliance: 'compliant'
        },
        {
          parameter: 'Waste Generation',
          frequency: 'Weekly',
          method: 'Waste audit reports',
          responsible: 'Waste Management Contractor',
          target: '80% recycling rate',
          currentValue: '85%',
          compliance: 'compliant'
        }
      ],
      publicConsultation: {
        conductedDate: '2023-10-25',
        participants: 45,
        method: ['Public meetings', 'Online surveys', 'Written submissions'],
        keyFeedback: [
          'Support for job creation',
          'Concerns about traffic increase',
          'Request for green building features'
        ],
        concerns: [
          'Construction noise during school hours',
          'Parking availability',
          'Impact on local businesses during construction'
        ],
        responseProvided: true
      },
      complianceStatus: [
        {
          regulation: 'Environmental Protection Act 2023',
          requirement: 'Air quality monitoring and reporting',
          status: 'compliant',
          evidence: 'Monthly air quality reports submitted',
          dueDate: '2024-01-31'
        },
        {
          regulation: 'Noise Control Regulations',
          requirement: 'Noise level compliance during construction',
          status: 'compliant',
          evidence: 'Daily noise monitoring logs',
          dueDate: '2024-12-31'
        },
        {
          regulation: 'Waste Management Guidelines',
          requirement: 'Waste reduction and recycling plan',
          status: 'compliant',
          evidence: 'Waste management plan approved',
          dueDate: '2024-12-31'
        }
      ],
      documents: [
        {
          type: 'Environmental Impact Assessment',
          name: 'TechHub_EIA_Report_Final.pdf',
          uploadDate: '2023-11-15',
          status: 'approved',
          reviewer: 'Environmental Review Board',
          comments: 'Comprehensive assessment with adequate mitigation measures'
        },
        {
          type: 'Social Impact Assessment',
          name: 'TechHub_SIA_Report.pdf',
          uploadDate: '2023-11-15',
          status: 'approved',
          reviewer: 'Social Development Unit',
          comments: 'Positive social impact with good stakeholder engagement'
        },
        {
          type: 'Mitigation Plan',
          name: 'TechHub_Mitigation_Plan.pdf',
          uploadDate: '2023-11-20',
          status: 'approved',
          reviewer: 'Technical Review Committee'
        }
      ],
      recommendations: [
        'Implement green building standards (LEED certification)',
        'Establish community liaison committee',
        'Provide quarterly environmental monitoring reports',
        'Develop local hiring policy for construction phase'
      ],
      conditions: [
        'Maintain noise levels below 70dB during daytime construction',
        'Submit monthly air quality monitoring reports',
        'Implement approved traffic management plan',
        'Complete public consultation on final design modifications'
      ],
      validityPeriod: '5 years from approval date',
      reviewerComments: 'Project demonstrates good environmental planning with comprehensive mitigation measures. Recommend approval with stated conditions.'
    },
    {
      id: 'ESIA-002',
      projectId: '2',
      submissionDate: '2024-01-20',
      reviewDate: '2024-02-05',
      assessor: 'Green Impact Associates',
      category: 'B',
      environmentalImpacts: [
        {
          category: 'water',
          description: 'Potential impact on local groundwater during excavation',
          severity: 'medium',
          likelihood: 'medium',
          impact: 'negative',
          phase: 'construction'
        },
        {
          category: 'biodiversity',
          description: 'Minimal impact due to existing urban development',
          severity: 'low',
          likelihood: 'low',
          impact: 'negative',
          phase: 'construction'
        },
        {
          category: 'landscape',
          description: 'Green building design with sustainable features',
          severity: 'medium',
          likelihood: 'high',
          impact: 'positive',
          phase: 'operation'
        }
      ],
      socialImpacts: [
        {
          category: 'employment',
          description: 'Provision of 150 affordable housing units',
          affectedGroups: ['Young families', 'First-time buyers'],
          severity: 'high',
          impact: 'positive',
          phase: 'operation'
        },
        {
          category: 'community',
          description: 'Improved community facilities and green spaces',
          affectedGroups: ['Local residents', 'Children'],
          severity: 'medium',
          impact: 'positive',
          phase: 'operation'
        }
      ],
      mitigationMeasures: [
        {
          impactType: 'Water Protection',
          measure: 'Install dewatering system with treatment facility',
          responsibility: 'Environmental Contractor',
          timeline: 'Pre-construction',
          cost: 35000,
          effectiveness: 'high',
          status: 'planned'
        }
      ],
      monitoringPlan: [
        {
          parameter: 'Groundwater Quality',
          frequency: 'Weekly during excavation',
          method: 'Water sampling and laboratory analysis',
          responsible: 'Environmental Consultant',
          target: 'No contamination above baseline',
          compliance: 'pending'
        }
      ],
      publicConsultation: {
        conductedDate: '2024-01-10',
        participants: 62,
        method: ['Community workshops', 'Online platform'],
        keyFeedback: [
          'Strong support for affordable housing',
          'Request for playground and community center'
        ],
        concerns: [
          'Construction duration and phasing',
          'Parking adequacy'
        ],
        responseProvided: true
      },
      complianceStatus: [
        {
          regulation: 'Housing Development Standards',
          requirement: 'Affordable housing quota compliance',
          status: 'compliant',
          evidence: 'Design plans show 40% affordable units',
          dueDate: '2024-08-15'
        }
      ],
      documents: [
        {
          type: 'Environmental Impact Assessment',
          name: 'GreenComplex_EIA_Draft.pdf',
          uploadDate: '2024-01-20',
          status: 'reviewed',
          reviewer: 'Environmental Review Board',
          comments: 'Minor revisions required for water management section'
        }
      ],
      recommendations: [
        'Incorporate rainwater harvesting system',
        'Establish resident environmental committee'
      ],
      conditions: [
        'Submit revised water management plan',
        'Complete energy efficiency certification'
      ],
      validityPeriod: '3 years from approval date',
      reviewerComments: 'Good residential project with strong sustainability focus. Addressing water management concerns will strengthen the proposal.'
    }
  ];

  const mockProjects: BuildingProject[] = [
    {
      id: '1',
      projectName: 'Tech Hub Tower',
      company: 'Skyline Developers',
      location: 'Downtown District',
      zoning: 'Commercial',
      heightLimit: 150,
      esiaStatus: 'approved',
      permitStatus: 'active',
      totalFees: 25000,
      paidFees: 20000,
      startDate: '2024-01-15',
      endDate: '2025-06-30',
      contractors: 8,
      materialsSummit: true,
      urbanPlanningApproved: true,
      esia: mockESIAData[0]
    },
    {
      id: '2',
      projectName: 'Green Residential Complex',
      company: 'EcoBuild Ltd',
      location: 'Suburban Area',
      zoning: 'Residential',
      heightLimit: 45,
      esiaStatus: 'pending',
      permitStatus: 'pending',
      totalFees: 15000,
      paidFees: 5000,
      startDate: '2024-03-01',
      endDate: '2024-12-31',
      contractors: 5,
      materialsSummit: false,
      urbanPlanningApproved: true,
      esia: mockESIAData[1]
    },
    {
      id: '3',
      projectName: 'Industrial Warehouse',
      company: 'LogiSpace Inc',
      location: 'Industrial Zone',
      zoning: 'Industrial',
      heightLimit: 30,
      esiaStatus: 'rejected',
      permitStatus: 'expired',
      totalFees: 18000,
      paidFees: 18000,
      startDate: '2023-08-01',
      endDate: '2024-02-28',
      contractors: 12,
      materialsSummit: true,
      urbanPlanningApproved: true
    }
  ];

  const filteredProjects = mockProjects.filter(project =>
    project.projectName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    project.company.toLowerCase().includes(searchTerm.toLowerCase())
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

  const getESIAStatusBadge = (status: string) => {
    switch (status) {
      case 'approved':
        return <span className="status-badge status-active">Approved</span>;
      case 'rejected':
        return <span className="status-badge status-expired">Rejected</span>;
      case 'pending':
        return <span className="status-badge status-pending">Pending</span>;
      default:
        return null;
    }
  };

  const NewProjectModal = () => (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-xl max-w-md w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-gray-200">
          <h2 className="text-lg font-bold text-gray-900">New Construction Project</h2>
          <button 
            onClick={() => setShowNewProjectForm(false)}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
          >
            <X className="w-5 h-5 text-gray-500" />
          </button>
        </div>

        {/* Form */}
        <div className="p-4 space-y-4">
          {/* Project Type Selection */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Project Type</label>
            <div className="grid grid-cols-2 gap-2">
              {projectTypes.map((type) => {
                const Icon = type.icon;
                return (
                  <button
                    key={type.id}
                    onClick={() => handleFormChange('projectType', type.name)}
                    className={`p-3 border rounded-lg text-left transition-colors ${
                      newProjectForm.projectType === type.name
                        ? 'border-green-500 bg-green-50'
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

          {/* Project Information */}
          <div className="space-y-3">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Project Name</label>
              <input
                type="text"
                value={newProjectForm.projectName}
                onChange={(e) => handleFormChange('projectName', e.target.value)}
                className="input-field"
                placeholder="Enter project name"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Company Name</label>
              <input
                type="text"
                value={newProjectForm.company}
                onChange={(e) => handleFormChange('company', e.target.value)}
                className="input-field"
                placeholder="Enter company name"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Contact Person</label>
              <input
                type="text"
                value={newProjectForm.contactPerson}
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
                  value={newProjectForm.email}
                  onChange={(e) => handleFormChange('email', e.target.value)}
                  className="input-field"
                  placeholder="email@company.com"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
                <input
                  type="tel"
                  value={newProjectForm.phone}
                  onChange={(e) => handleFormChange('phone', e.target.value)}
                  className="input-field"
                  placeholder="Phone number"
                />
              </div>
            </div>
          </div>

          {/* Location Information */}
          <div className="space-y-3">
            <h3 className="text-sm font-medium text-gray-700">Location & Zoning</h3>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Location/District</label>
              <input
                type="text"
                value={newProjectForm.location}
                onChange={(e) => handleFormChange('location', e.target.value)}
                className="input-field"
                placeholder="District or area"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Full Address</label>
              <textarea
                value={newProjectForm.address}
                onChange={(e) => handleFormChange('address', e.target.value)}
                className="input-field"
                rows={2}
                placeholder="Complete project address"
              />
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Zoning Type</label>
                <select
                  value={newProjectForm.zoning}
                  onChange={(e) => handleFormChange('zoning', e.target.value)}
                  className="input-field"
                >
                  <option value="">Select zoning</option>
                  {zoningTypes.map((zone) => (
                    <option key={zone} value={zone}>{zone}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Plot Size (sqm)</label>
                <input
                  type="number"
                  value={newProjectForm.plotSize}
                  onChange={(e) => handleFormChange('plotSize', e.target.value)}
                  className="input-field"
                  placeholder="Square meters"
                />
              </div>
            </div>
          </div>

          {/* Building Specifications */}
          <div className="space-y-3">
            <h3 className="text-sm font-medium text-gray-700">Building Specifications</h3>
            
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Height Limit (m)</label>
                <input
                  type="number"
                  value={newProjectForm.heightLimit}
                  onChange={(e) => handleFormChange('heightLimit', e.target.value)}
                  className="input-field"
                  placeholder="Meters"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Number of Floors</label>
                <input
                  type="number"
                  value={newProjectForm.floors}
                  onChange={(e) => handleFormChange('floors', e.target.value)}
                  className="input-field"
                  placeholder="Floors"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Building Type</label>
              <select
                value={newProjectForm.buildingType}
                onChange={(e) => handleFormChange('buildingType', e.target.value)}
                className="input-field"
              >
                <option value="">Select building type</option>
                {buildingTypes.map((type) => (
                  <option key={type} value={type}>{type}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Estimated Cost ($)</label>
              <input
                type="number"
                value={newProjectForm.estimatedCost}
                onChange={(e) => handleFormChange('estimatedCost', e.target.value)}
                className="input-field"
                placeholder="Total project cost"
              />
            </div>
          </div>

          {/* Timeline & Resources */}
          <div className="space-y-3">
            <h3 className="text-sm font-medium text-gray-700">Timeline & Resources</h3>
            
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Start Date</label>
                <input
                  type="date"
                  value={newProjectForm.startDate}
                  onChange={(e) => handleFormChange('startDate', e.target.value)}
                  className="input-field"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Expected End Date</label>
                <input
                  type="date"
                  value={newProjectForm.endDate}
                  onChange={(e) => handleFormChange('endDate', e.target.value)}
                  className="input-field"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Number of Contractors</label>
              <input
                type="number"
                value={newProjectForm.contractors}
                onChange={(e) => handleFormChange('contractors', e.target.value)}
                className="input-field"
                placeholder="Sub-contractors"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Project Description</label>
              <textarea
                value={newProjectForm.description}
                onChange={(e) => handleFormChange('description', e.target.value)}
                className="input-field"
                rows={3}
                placeholder="Detailed project description"
              />
            </div>
          </div>

          {/* Required Documents */}
          <div>
            <h3 className="text-sm font-medium text-gray-700 mb-2">Required Documents</h3>
            <div className="space-y-2">
              <div className="flex items-center space-x-2 p-2 bg-gray-50 rounded-lg">
                <Upload className="w-4 h-4 text-gray-400" />
                <span className="text-sm text-gray-600">ESIA Assessment Report</span>
              </div>
              <div className="flex items-center space-x-2 p-2 bg-gray-50 rounded-lg">
                <Upload className="w-4 h-4 text-gray-400" />
                <span className="text-sm text-gray-600">Site Plan & Architectural Drawings</span>
              </div>
              <div className="flex items-center space-x-2 p-2 bg-gray-50 rounded-lg">
                <Upload className="w-4 h-4 text-gray-400" />
                <span className="text-sm text-gray-600">Company Registration & Licenses</span>
              </div>
              <div className="flex items-center space-x-2 p-2 bg-gray-50 rounded-lg">
                <Upload className="w-4 h-4 text-gray-400" />
                <span className="text-sm text-gray-600">Contractor Qualifications</span>
              </div>
              <div className="flex items-center space-x-2 p-2 bg-gray-50 rounded-lg">
                <Upload className="w-4 h-4 text-gray-400" />
                <span className="text-sm text-gray-600">Urban Planning Approval</span>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="flex space-x-3 p-4 border-t border-gray-200">
          <button
            onClick={() => setShowNewProjectForm(false)}
            className="flex-1 btn-secondary"
          >
            Cancel
          </button>
          <button
            onClick={handleSubmitProject}
            className="flex-1 btn-primary flex items-center justify-center space-x-2"
          >
            <Save className="w-4 h-4" />
            <span>Submit Project</span>
          </button>
        </div>
      </div>
    </div>
  );

  return (
    <div className="p-4 space-y-6">
      {/* Header */}
      <div className="flex items-center space-x-3">
        <div className="p-2 bg-green-100 rounded-lg">
          <Building className="w-6 h-6 text-green-600" />
        </div>
        <div>
          <h1 className="text-xl font-bold text-gray-900">Building & Construction</h1>
          <p className="text-sm text-gray-600">Projects & compliance pack</p>
        </div>
      </div>

      {/* Search and Filter */}
      <div className="flex space-x-2">
        <div className="flex-1 relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
          <input
            type="text"
            placeholder="Search projects..."
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
        {['projects', 'esia', 'compliance', 'fees'].map((tab) => (
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
      {activeTab === 'projects' && (
        <div className="grid grid-cols-2 gap-4">
          <div className="card text-center">
            <CheckCircle className="w-8 h-8 text-success-600 mx-auto mb-2" />
            <div className="text-2xl font-bold text-gray-900">8</div>
            <div className="text-sm text-gray-600">Active Projects</div>
          </div>
          <div className="card text-center">
            <Clock className="w-8 h-8 text-warning-600 mx-auto mb-2" />
            <div className="text-2xl font-bold text-gray-900">5</div>
            <div className="text-sm text-gray-600">Pending Review</div>
          </div>
          <div className="card text-center">
            <AlertTriangle className="w-8 h-8 text-danger-600 mx-auto mb-2" />
            <div className="text-2xl font-bold text-gray-900">1</div>
            <div className="text-sm text-gray-600">Expired Permits</div>
          </div>
          <div className="card text-center">
            <DollarSign className="w-8 h-8 text-primary-600 mx-auto mb-2" />
            <div className="text-2xl font-bold text-gray-900">$58K</div>
            <div className="text-sm text-gray-600">Total Fees</div>
          </div>
        </div>
      )}

      {/* Projects List - Hidden when ESIA, Compliance, or Fees tabs are active */}
      {activeTab !== 'esia' && activeTab !== 'compliance' && activeTab !== 'fees' && (
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold text-gray-900">Construction Projects</h2>
            <button 
              onClick={() => setShowNewProjectForm(true)}
              className="btn-primary flex items-center space-x-2"
            >
              <Plus className="w-4 h-4" />
              <span>New Project</span>
            </button>
          </div>

          {filteredProjects.map((project) => (
          <div key={project.id} className="card">
            <div className="flex items-start justify-between mb-3">
              <div>
                <h3 className="font-semibold text-gray-900">{project.projectName}</h3>
                <p className="text-sm text-gray-600">{project.company}</p>
              </div>
              {getStatusBadge(project.permitStatus)}
            </div>
            
            <div className="grid grid-cols-2 gap-4 text-sm mb-3">
              <div className="flex items-center space-x-2">
                <MapPin className="w-4 h-4 text-gray-400" />
                <span>{project.location}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Globe className="w-4 h-4 text-gray-400" />
                <span>{project.zoning}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Ruler className="w-4 h-4 text-gray-400" />
                <span>{project.heightLimit}m height</span>
              </div>
              <div className="flex items-center space-x-2">
                <Users className="w-4 h-4 text-gray-400" />
                <span>{project.contractors} contractors</span>
              </div>
            </div>

            {/* ESIA Status */}
            <div className="mb-3 p-2 bg-gray-50 rounded-lg">
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">ESIA Status:</span>
                {getESIAStatusBadge(project.esiaStatus)}
              </div>
            </div>

            {/* Compliance Indicators */}
            <div className="flex space-x-2 mb-3">
              <div className={`flex items-center space-x-1 text-xs ${
                project.materialsSummit ? 'text-success-600' : 'text-gray-400'
              }`}>
                <HardHat className="w-3 h-3" />
                <span>Materials Summit</span>
              </div>
              <div className={`flex items-center space-x-1 text-xs ${
                project.urbanPlanningApproved ? 'text-success-600' : 'text-gray-400'
              }`}>
                <FileText className="w-3 h-3" />
                <span>Urban Planning</span>
              </div>
            </div>
            
            {/* Fees and Timeline */}
            <div className="pt-3 border-t border-gray-100">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-gray-600">Fees: ${project.paidFees.toLocaleString()}/${project.totalFees.toLocaleString()}</span>
                <span className="text-sm text-gray-600">{project.startDate} - {project.endDate}</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div 
                  className="bg-primary-600 h-2 rounded-full" 
                  style={{ width: `${(project.paidFees / project.totalFees) * 100}%` }}
                ></div>
              </div>
            </div>
          </div>
          ))}
        </div>
      )}

      {/* ESIA Tab Content */}
      {activeTab === 'esia' && (
        <div className="space-y-6">
          {/* ESIA Overview Stats */}
          <div className="grid grid-cols-2 gap-4">
            <div className="card text-center">
              <CheckCircle className="w-8 h-8 text-success-600 mx-auto mb-2" />
              <div className="text-2xl font-bold text-gray-900">1</div>
              <div className="text-sm text-gray-600">Approved ESIA</div>
            </div>
            <div className="card text-center">
              <Clock className="w-8 h-8 text-warning-600 mx-auto mb-2" />
              <div className="text-2xl font-bold text-gray-900">1</div>
              <div className="text-sm text-gray-600">Under Review</div>
            </div>
            <div className="card text-center">
              <AlertTriangle className="w-8 h-8 text-danger-600 mx-auto mb-2" />
              <div className="text-2xl font-bold text-gray-900">1</div>
              <div className="text-sm text-gray-600">Rejected</div>
            </div>
            <div className="card text-center">
              <FileText className="w-8 h-8 text-primary-600 mx-auto mb-2" />
              <div className="text-2xl font-bold text-gray-900">15</div>
              <div className="text-sm text-gray-600">Total Documents</div>
            </div>
          </div>

          {/* ESIA Details for each project */}
          {filteredProjects.filter(p => p.esia).map((project) => (
            <div key={project.id} className="card">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="font-semibold text-gray-900">{project.projectName}</h3>
                  <p className="text-sm text-gray-600">{project.esia?.assessor}</p>
                </div>
                <div className="flex items-center space-x-2">
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                    project.esia?.category === 'A' ? 'bg-red-100 text-red-800' :
                    project.esia?.category === 'B' ? 'bg-yellow-100 text-yellow-800' :
                    'bg-green-100 text-green-800'
                  }`}>
                    Category {project.esia?.category}
                  </span>
                  {getESIAStatusBadge(project.esiaStatus)}
                </div>
              </div>

              {/* ESIA Timeline */}
              <div className="grid grid-cols-3 gap-4 mb-4 text-sm">
                <div>
                  <span className="text-gray-500">Submitted:</span>
                  <div className="font-medium">{project.esia?.submissionDate}</div>
                </div>
                <div>
                  <span className="text-gray-500">Reviewed:</span>
                  <div className="font-medium">{project.esia?.reviewDate || 'Pending'}</div>
                </div>
                <div>
                  <span className="text-gray-500">Completed:</span>
                  <div className="font-medium">{project.esia?.completionDate || 'Pending'}</div>
                </div>
              </div>

              {/* Environmental Impacts */}
              <div className="mb-4">
                <h4 className="font-medium text-gray-900 mb-2 flex items-center">
                  <Leaf className="w-4 h-4 mr-2 text-green-600" />
                  Environmental Impacts ({project.esia?.environmentalImpacts.length})
                </h4>
                <div className="space-y-2">
                  {project.esia?.environmentalImpacts.slice(0, 3).map((impact, index) => (
                    <div key={index} className="flex items-center justify-between p-2 bg-gray-50 rounded-lg">
                      <div className="flex-1">
                        <div className="font-medium text-sm capitalize">{impact.category}</div>
                        <div className="text-xs text-gray-600">{impact.description}</div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <span className={`px-2 py-1 rounded text-xs ${
                          impact.severity === 'high' ? 'bg-red-100 text-red-800' :
                          impact.severity === 'medium' ? 'bg-yellow-100 text-yellow-800' :
                          'bg-green-100 text-green-800'
                        }`}>
                          {impact.severity}
                        </span>
                        <span className={`px-2 py-1 rounded text-xs ${
                          impact.impact === 'positive' ? 'bg-green-100 text-green-800' :
                          impact.impact === 'negative' ? 'bg-red-100 text-red-800' :
                          'bg-gray-100 text-gray-800'
                        }`}>
                          {impact.impact}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Social Impacts */}
              <div className="mb-4">
                <h4 className="font-medium text-gray-900 mb-2 flex items-center">
                  <Users className="w-4 h-4 mr-2 text-blue-600" />
                  Social Impacts ({project.esia?.socialImpacts.length})
                </h4>
                <div className="space-y-2">
                  {project.esia?.socialImpacts.map((impact, index) => (
                    <div key={index} className="flex items-center justify-between p-2 bg-gray-50 rounded-lg">
                      <div className="flex-1">
                        <div className="font-medium text-sm capitalize">{impact.category}</div>
                        <div className="text-xs text-gray-600">{impact.description}</div>
                        <div className="text-xs text-gray-500 mt-1">
                          Affected: {impact.affectedGroups.join(', ')}
                        </div>
                      </div>
                      <span className={`px-2 py-1 rounded text-xs ${
                        impact.impact === 'positive' ? 'bg-green-100 text-green-800' :
                        impact.impact === 'negative' ? 'bg-red-100 text-red-800' :
                        'bg-gray-100 text-gray-800'
                      }`}>
                        {impact.impact}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Mitigation Measures */}
              <div className="mb-4">
                <h4 className="font-medium text-gray-900 mb-2 flex items-center">
                  <Shield className="w-4 h-4 mr-2 text-purple-600" />
                  Mitigation Measures ({project.esia?.mitigationMeasures.length})
                </h4>
                <div className="space-y-2">
                  {project.esia?.mitigationMeasures.map((measure, index) => (
                    <div key={index} className="p-3 bg-gray-50 rounded-lg">
                      <div className="flex items-center justify-between mb-2">
                        <div className="font-medium text-sm">{measure.impactType}</div>
                        <div className="flex items-center space-x-2">
                          <span className="text-xs text-gray-600">${measure.cost.toLocaleString()}</span>
                          <span className={`px-2 py-1 rounded text-xs ${
                            measure.status === 'completed' ? 'bg-green-100 text-green-800' :
                            measure.status === 'implemented' ? 'bg-blue-100 text-blue-800' :
                            'bg-yellow-100 text-yellow-800'
                          }`}>
                            {measure.status}
                          </span>
                        </div>
                      </div>
                      <div className="text-xs text-gray-600 mb-2">{measure.measure}</div>
                      <div className="flex items-center justify-between text-xs text-gray-500">
                        <span>Responsible: {measure.responsibility}</span>
                        <span>Timeline: {measure.timeline}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Monitoring Plan */}
              <div className="mb-4">
                <h4 className="font-medium text-gray-900 mb-2 flex items-center">
                  <BarChart3 className="w-4 h-4 mr-2 text-indigo-600" />
                  Monitoring Plan ({project.esia?.monitoringPlan.length})
                </h4>
                <div className="space-y-2">
                  {project.esia?.monitoringPlan.map((plan, index) => (
                    <div key={index} className="p-3 bg-gray-50 rounded-lg">
                      <div className="flex items-center justify-between mb-2">
                        <div className="font-medium text-sm">{plan.parameter}</div>
                        <span className={`px-2 py-1 rounded text-xs ${
                          plan.compliance === 'compliant' ? 'bg-green-100 text-green-800' :
                          plan.compliance === 'non-compliant' ? 'bg-red-100 text-red-800' :
                          'bg-yellow-100 text-yellow-800'
                        }`}>
                          {plan.compliance}
                        </span>
                      </div>
                      <div className="grid grid-cols-2 gap-4 text-xs text-gray-600">
                        <div>
                          <span className="text-gray-500">Frequency:</span> {plan.frequency}
                        </div>
                        <div>
                          <span className="text-gray-500">Method:</span> {plan.method}
                        </div>
                        <div>
                          <span className="text-gray-500">Target:</span> {plan.target}
                        </div>
                        <div>
                          <span className="text-gray-500">Current:</span> {plan.currentValue || 'N/A'}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Public Consultation */}
              <div className="mb-4">
                <h4 className="font-medium text-gray-900 mb-2 flex items-center">
                  <MessageSquare className="w-4 h-4 mr-2 text-orange-600" />
                  Public Consultation
                </h4>
                <div className="p-3 bg-gray-50 rounded-lg">
                  <div className="grid grid-cols-2 gap-4 mb-3 text-sm">
                    <div>
                      <span className="text-gray-500">Date:</span> {project.esia?.publicConsultation.conductedDate}
                    </div>
                    <div>
                      <span className="text-gray-500">Participants:</span> {project.esia?.publicConsultation.participants}
                    </div>
                  </div>
                  <div className="mb-3">
                    <div className="text-sm font-medium text-gray-700 mb-1">Methods:</div>
                    <div className="flex flex-wrap gap-1">
                      {project.esia?.publicConsultation.method.map((method, index) => (
                        <span key={index} className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded">
                          {method}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="mb-3">
                    <div className="text-sm font-medium text-gray-700 mb-1">Key Feedback:</div>
                    <ul className="text-sm text-gray-600 list-disc list-inside space-y-1">
                      {project.esia?.publicConsultation.keyFeedback.map((feedback, index) => (
                        <li key={index}>{feedback}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <div className="text-sm font-medium text-gray-700 mb-1">Concerns:</div>
                    <ul className="text-sm text-gray-600 list-disc list-inside space-y-1">
                      {project.esia?.publicConsultation.concerns.map((concern, index) => (
                        <li key={index}>{concern}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* Documents */}
              <div className="mb-4">
                <h4 className="font-medium text-gray-900 mb-2 flex items-center">
                  <FileText className="w-4 h-4 mr-2 text-gray-600" />
                  ESIA Documents ({project.esia?.documents.length})
                </h4>
                <div className="space-y-2">
                  {project.esia?.documents.map((doc, index) => (
                    <div key={index} className="flex items-center justify-between p-2 bg-gray-50 rounded-lg">
                      <div className="flex-1">
                        <div className="font-medium text-sm">{doc.name}</div>
                        <div className="text-xs text-gray-600">{doc.type} • {doc.uploadDate}</div>
                        {doc.comments && (
                          <div className="text-xs text-gray-500 mt-1">{doc.comments}</div>
                        )}
                      </div>
                      <div className="flex items-center space-x-2">
                        <span className={`px-2 py-1 rounded text-xs ${
                          doc.status === 'approved' ? 'bg-green-100 text-green-800' :
                          doc.status === 'reviewed' ? 'bg-blue-100 text-blue-800' :
                          doc.status === 'rejected' ? 'bg-red-100 text-red-800' :
                          'bg-yellow-100 text-yellow-800'
                        }`}>
                          {doc.status}
                        </span>
                        <button className="text-blue-600 hover:text-blue-800">
                          <Download className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Reviewer Comments */}
              {project.esia?.reviewerComments && (
                <div className="p-3 bg-blue-50 rounded-lg">
                  <h4 className="font-medium text-gray-900 mb-2">Reviewer Comments</h4>
                  <p className="text-sm text-gray-700">{project.esia.reviewerComments}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      )}

      {/* Compliance Tab Content */}
      {activeTab === 'compliance' && (
        <div className="space-y-6">
          {/* Compliance Overview Stats */}
          <div className="grid grid-cols-2 gap-4">
            <div className="card text-center">
              <CheckCircle className="w-8 h-8 text-green-600 mx-auto mb-2" />
              <div className="text-2xl font-bold text-gray-900">12</div>
              <div className="text-sm text-gray-600">Compliant Projects</div>
            </div>
            <div className="card text-center">
              <AlertTriangle className="w-8 h-8 text-orange-600 mx-auto mb-2" />
              <div className="text-2xl font-bold text-gray-900">3</div>
              <div className="text-sm text-gray-600">Pending Reviews</div>
            </div>
            <div className="card text-center">
              <Clock className="w-8 h-8 text-blue-600 mx-auto mb-2" />
              <div className="text-2xl font-bold text-gray-900">7</div>
              <div className="text-sm text-gray-600">Upcoming Inspections</div>
            </div>
            <div className="card text-center">
              <Shield className="w-8 h-8 text-purple-600 mx-auto mb-2" />
              <div className="text-2xl font-bold text-gray-900">98%</div>
              <div className="text-sm text-gray-600">Compliance Rate</div>
            </div>
          </div>

          {/* Regulatory Requirements */}
          <div className="card">
            <h3 className="font-semibold text-gray-900 mb-4 flex items-center">
              <FileText className="w-5 h-5 mr-2 text-blue-600" />
              Regulatory Requirements
            </h3>
            <div className="space-y-3">
              {[
                {
                  regulation: 'Building Code 2023',
                  requirement: 'Structural engineering approval',
                  status: 'compliant',
                  lastCheck: '2024-01-15',
                  nextDue: '2024-07-15'
                },
                {
                  regulation: 'Fire Safety Regulations',
                  requirement: 'Fire safety system inspection',
                  status: 'compliant',
                  lastCheck: '2024-01-10',
                  nextDue: '2024-04-10'
                },
                {
                  regulation: 'Environmental Protection Act',
                  requirement: 'Environmental impact compliance',
                  status: 'pending',
                  lastCheck: '2023-12-20',
                  nextDue: '2024-02-28'
                },
                {
                  regulation: 'Zoning Ordinance',
                  requirement: 'Zoning compliance review',
                  status: 'non-compliant',
                  lastCheck: '2024-01-05',
                  nextDue: '2024-02-05'
                }
              ].map((req, index) => (
                <div key={index} className="border border-gray-200 rounded-lg p-4">
                  <div className="flex items-start justify-between mb-2">
                    <div className="flex-1">
                      <h4 className="font-medium text-gray-900">{req.regulation}</h4>
                      <p className="text-sm text-gray-600">{req.requirement}</p>
                    </div>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                      req.status === 'compliant' ? 'bg-green-100 text-green-800' :
                      req.status === 'pending' ? 'bg-yellow-100 text-yellow-800' :
                      'bg-red-100 text-red-800'
                    }`}>
                      {req.status.charAt(0).toUpperCase() + req.status.slice(1)}
                    </span>
                  </div>
                  <div className="grid grid-cols-2 gap-4 text-xs text-gray-600">
                    <div>
                      <span className="text-gray-500">Last Check:</span> {req.lastCheck}
                    </div>
                    <div>
                      <span className="text-gray-500">Next Due:</span> {req.nextDue}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Inspection Schedule */}
          <div className="card">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-semibold text-gray-900 flex items-center">
                <Calendar className="w-5 h-5 mr-2 text-green-600" />
                Inspection Schedule
              </h3>
              <button className="btn-secondary">
                <Plus className="w-4 h-4 mr-2" />
                Schedule Inspection
              </button>
            </div>
            <div className="space-y-3">
              {[
                {
                  project: 'Skyline Tower',
                  type: 'Fire Safety Inspection',
                  inspector: 'Fire Department',
                  date: '2024-02-15',
                  time: '10:00 AM',
                  status: 'scheduled',
                  priority: 'high'
                },
                {
                  project: 'Green Complex',
                  type: 'Structural Inspection',
                  inspector: 'Building Authority',
                  date: '2024-02-18',
                  time: '2:00 PM',
                  status: 'scheduled',
                  priority: 'medium'
                },
                {
                  project: 'Industrial Hub',
                  type: 'Environmental Compliance',
                  inspector: 'EPA Inspector',
                  date: '2024-02-20',
                  time: '9:00 AM',
                  status: 'pending',
                  priority: 'high'
                }
              ].map((inspection, index) => (
                <div key={index} className="border border-gray-200 rounded-lg p-4">
                  <div className="flex items-start justify-between mb-2">
                    <div className="flex-1">
                      <div className="flex items-center space-x-2">
                        <h4 className="font-medium text-gray-900">{inspection.project}</h4>
                        <span className={`px-2 py-1 rounded text-xs ${
                          inspection.priority === 'high' ? 'bg-red-100 text-red-800' :
                          inspection.priority === 'medium' ? 'bg-yellow-100 text-yellow-800' :
                          'bg-gray-100 text-gray-800'
                        }`}>
                          {inspection.priority} priority
                        </span>
                      </div>
                      <p className="text-sm text-gray-600">{inspection.type}</p>
                      <p className="text-xs text-gray-500">Inspector: {inspection.inspector}</p>
                    </div>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                      inspection.status === 'completed' ? 'bg-green-100 text-green-800' :
                      inspection.status === 'scheduled' ? 'bg-blue-100 text-blue-800' :
                      'bg-yellow-100 text-yellow-800'
                    }`}>
                      {inspection.status.charAt(0).toUpperCase() + inspection.status.slice(1)}
                    </span>
                  </div>
                  <div className="grid grid-cols-2 gap-4 text-xs text-gray-600">
                    <div>
                      <span className="text-gray-500">Date:</span> {inspection.date}
                    </div>
                    <div>
                      <span className="text-gray-500">Time:</span> {inspection.time}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Violation Tracking */}
          <div className="card">
            <h3 className="font-semibold text-gray-900 mb-4 flex items-center">
              <AlertTriangle className="w-5 h-5 mr-2 text-red-600" />
              Recent Violations & Actions
            </h3>
            <div className="space-y-3">
              {[
                {
                  project: 'Mixed Use Plaza',
                  violation: 'Zoning height limit exceeded',
                  severity: 'major',
                  dateReported: '2024-01-10',
                  status: 'open',
                  correctionDeadline: '2024-02-15',
                  assignedTo: 'Project Manager'
                },
                {
                  project: 'Industrial Hub',
                  violation: 'Missing fire safety signage',
                  severity: 'minor',
                  dateReported: '2024-01-08',
                  status: 'resolved',
                  correctionDeadline: '2024-01-22',
                  assignedTo: 'Safety Coordinator'
                },
                {
                  project: 'Green Complex',
                  violation: 'Noise levels during restricted hours',
                  severity: 'moderate',
                  dateReported: '2024-01-05',
                  status: 'in_progress',
                  correctionDeadline: '2024-01-30',
                  assignedTo: 'Site Supervisor'
                }
              ].map((violation, index) => (
                <div key={index} className="border border-gray-200 rounded-lg p-4">
                  <div className="flex items-start justify-between mb-2">
                    <div className="flex-1">
                      <div className="flex items-center space-x-2">
                        <h4 className="font-medium text-gray-900">{violation.project}</h4>
                        <span className={`px-2 py-1 rounded text-xs ${
                          violation.severity === 'major' ? 'bg-red-100 text-red-800' :
                          violation.severity === 'moderate' ? 'bg-yellow-100 text-yellow-800' :
                          'bg-blue-100 text-blue-800'
                        }`}>
                          {violation.severity} severity
                        </span>
                      </div>
                      <p className="text-sm text-gray-600">{violation.violation}</p>
                    </div>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                      violation.status === 'resolved' ? 'bg-green-100 text-green-800' :
                      violation.status === 'in_progress' ? 'bg-blue-100 text-blue-800' :
                      'bg-red-100 text-red-800'
                    }`}>
                      {violation.status === 'in_progress' ? 'In Progress' : 
                       violation.status.charAt(0).toUpperCase() + violation.status.slice(1)}
                    </span>
                  </div>
                  <div className="grid grid-cols-2 gap-4 text-xs text-gray-600">
                    <div>
                      <span className="text-gray-500">Reported:</span> {violation.dateReported}
                    </div>
                    <div>
                      <span className="text-gray-500">Deadline:</span> {violation.correctionDeadline}
                    </div>
                    <div>
                      <span className="text-gray-500">Assigned To:</span> {violation.assignedTo}
                    </div>
                    <div>
                      {violation.status === 'resolved' ? (
                        <div className="flex items-center space-x-1 text-green-600">
                          <CheckCircle className="w-3 h-3" />
                          <span>Resolved</span>
                        </div>
                      ) : (
                        <span className="text-orange-600">Action Required</span>
                      )}
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
              <div className="text-2xl font-bold text-gray-900">$124.5K</div>
              <div className="text-sm text-gray-600">Total Revenue</div>
            </div>
            <div className="card text-center">
              <Clock className="w-8 h-8 text-orange-600 mx-auto mb-2" />
              <div className="text-2xl font-bold text-gray-900">$18.2K</div>
              <div className="text-sm text-gray-600">Outstanding</div>
            </div>
            <div className="card text-center">
              <CheckCircle className="w-8 h-8 text-blue-600 mx-auto mb-2" />
              <div className="text-2xl font-bold text-gray-900">85%</div>
              <div className="text-sm text-gray-600">Collection Rate</div>
            </div>
            <div className="card text-center">
              <AlertTriangle className="w-8 h-8 text-red-600 mx-auto mb-2" />
              <div className="text-2xl font-bold text-gray-900">3</div>
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
                  category: 'Building Permit Fees',
                  total: 45000,
                  collected: 42000,
                  pending: 3000,
                  projects: 8
                },
                {
                  category: 'ESIA Assessment Fees',
                  total: 28000,
                  collected: 25000,
                  pending: 3000,
                  projects: 3
                },
                {
                  category: 'Inspection Fees',
                  total: 18500,
                  collected: 17500,
                  pending: 1000,
                  projects: 12
                },
                {
                  category: 'Compliance Monitoring',
                  total: 15000,
                  collected: 12000,
                  pending: 3000,
                  projects: 5
                },
                {
                  category: 'Late Payment Penalties',
                  total: 18000,
                  collected: 15000,
                  pending: 3000,
                  projects: 2
                }
              ].map((category, index) => (
                <div key={index} className="border border-gray-200 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-3">
                    <div>
                      <h4 className="font-medium text-gray-900">{category.category}</h4>
                      <p className="text-sm text-gray-600">{category.projects} projects</p>
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

          {/* Project Fee Details */}
          <div className="card">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-semibold text-gray-900 flex items-center">
                <FileText className="w-5 h-5 mr-2 text-purple-600" />
                Project Fee Details
              </h3>
              <button className="btn-secondary">
                <Download className="w-4 h-4 mr-2" />
                Export Report
              </button>
            </div>
            <div className="space-y-3">
              {[
                {
                  project: 'Skyline Tower',
                  company: 'Urban Development Corp',
                  permitFee: 15000,
                  esiaFee: 8000,
                  inspectionFee: 3500,
                  totalFees: 26500,
                  paidAmount: 25000,
                  status: 'partial',
                  dueDate: '2024-02-15'
                },
                {
                  project: 'Green Complex',
                  company: 'EcoBuild Ltd',
                  permitFee: 12000,
                  esiaFee: 6000,
                  inspectionFee: 2800,
                  totalFees: 20800,
                  paidAmount: 20800,
                  status: 'paid',
                  dueDate: '2024-01-30'
                },
                {
                  project: 'Industrial Hub',
                  company: 'Manufacturing Inc',
                  permitFee: 18000,
                  esiaFee: 12000,
                  inspectionFee: 4200,
                  totalFees: 34200,
                  paidAmount: 30000,
                  status: 'overdue',
                  dueDate: '2024-01-15'
                },
                {
                  project: 'Mixed Use Plaza',
                  company: 'Commercial Properties',
                  permitFee: 10000,
                  esiaFee: 5000,
                  inspectionFee: 2500,
                  totalFees: 17500,
                  paidAmount: 17500,
                  status: 'paid',
                  dueDate: '2024-01-20'
                }
              ].map((project, index) => (
                <div key={index} className="border border-gray-200 rounded-lg p-4">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex-1">
                      <h4 className="font-medium text-gray-900">{project.project}</h4>
                      <p className="text-sm text-gray-600">{project.company}</p>
                    </div>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                      project.status === 'paid' ? 'bg-green-100 text-green-800' :
                      project.status === 'partial' ? 'bg-yellow-100 text-yellow-800' :
                      'bg-red-100 text-red-800'
                    }`}>
                      {project.status === 'paid' ? 'Paid' : 
                       project.status === 'partial' ? 'Partial' : 'Overdue'}
                    </span>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4 text-sm mb-3">
                    <div>
                      <span className="text-gray-500">Permit Fee:</span>
                      <div className="font-medium">${project.permitFee.toLocaleString()}</div>
                    </div>
                    <div>
                      <span className="text-gray-500">ESIA Fee:</span>
                      <div className="font-medium">${project.esiaFee.toLocaleString()}</div>
                    </div>
                    <div>
                      <span className="text-gray-500">Inspection Fee:</span>
                      <div className="font-medium">${project.inspectionFee.toLocaleString()}</div>
                    </div>
                    <div>
                      <span className="text-gray-500">Total:</span>
                      <div className="font-semibold">${project.totalFees.toLocaleString()}</div>
                    </div>
                  </div>

                  <div className="pt-3 border-t border-gray-100">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm text-gray-600">
                        Paid: ${project.paidAmount.toLocaleString()} / ${project.totalFees.toLocaleString()}
                      </span>
                      <span className="text-sm text-gray-600">Due: {project.dueDate}</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className={`h-2 rounded-full ${
                          project.status === 'paid' ? 'bg-green-500' :
                          project.status === 'partial' ? 'bg-yellow-500' :
                          'bg-red-500'
                        }`}
                        style={{ width: `${(project.paidAmount / project.totalFees) * 100}%` }}
                      ></div>
                    </div>
                    {project.status !== 'paid' && (
                      <div className="mt-2 text-xs text-orange-600">
                        Outstanding: ${(project.totalFees - project.paidAmount).toLocaleString()}
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
                  project: 'Green Complex',
                  amount: 8500,
                  date: '2024-01-25',
                  method: 'Bank Transfer',
                  reference: 'TRX-2024-001',
                  status: 'completed'
                },
                {
                  project: 'Mixed Use Plaza',
                  amount: 12000,
                  date: '2024-01-20',
                  method: 'Credit Card',
                  reference: 'CC-2024-015',
                  status: 'completed'
                },
                {
                  project: 'Skyline Tower',
                  amount: 15000,
                  date: '2024-01-18',
                  method: 'Bank Transfer',
                  reference: 'TRX-2024-002',
                  status: 'completed'
                },
                {
                  project: 'Industrial Hub',
                  amount: 8000,
                  date: '2024-01-15',
                  method: 'Check',
                  reference: 'CHK-2024-008',
                  status: 'pending'
                }
              ].map((payment, index) => (
                <div key={index} className="border border-gray-200 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex-1">
                      <h4 className="font-medium text-gray-900">{payment.project}</h4>
                      <p className="text-sm text-gray-600">
                        {payment.method} • {payment.reference}
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
                  Project Type
                </label>
                <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500">
                  <option>Residential</option>
                  <option>Commercial</option>
                  <option>Industrial</option>
                  <option>Mixed Use</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Project Value ($)
                </label>
                <input 
                  type="number" 
                  placeholder="Enter project value"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Floor Area (sq ft)
                </label>
                <input 
                  type="number" 
                  placeholder="Enter floor area"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                />
              </div>
              <button className="btn-primary">
                Calculate Fees
              </button>
            </div>
          </div>
        </div>
      )}

      {/* New Project Modal */}
      {showNewProjectForm && <NewProjectModal />}
    </div>
  );
};

export default BuildingPermits;
