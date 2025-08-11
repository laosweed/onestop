import React, { useState } from 'react';
import { 
  BarChart3, 
  TrendingUp, 
  TrendingDown, 
  Download, 
  Filter, 
  Calendar,
  FileText,
  Building,
  Car,
  Truck,
  Ship,
  AlertTriangle,
  Users,
  DollarSign,
  Clock,
  CheckCircle,
  X,
  ChevronDown,
  ChevronRight,
  PieChart,
  Activity,
  Target,
  Globe,
  Shield,
  MapPin,
  Star,
  Zap,
  ArrowUp,
  ArrowDown,
  Eye,
  Settings,
  Bell,
  Search
} from 'lucide-react';

interface ServiceStats {
  id: string;
  name: string;
  icon: any;
  color: string;
  totalItems: number;
  activeItems: number;
  pendingItems: number;
  expiredItems: number;
  monthlyTrend: number[];
  categoryData: { name: string; value: number; color: string }[];
  performance: {
    completionRate: number;
    responseTime: number;
    satisfaction: number;
    efficiency: number;
  };
  recentActivity: {
    type: string;
    description: string;
    time: string;
    status: 'success' | 'warning' | 'error';
  }[];
}

const ViewReports = () => {
  const [selectedPeriod, setSelectedPeriod] = useState('month');
  const [selectedService, setSelectedService] = useState('all');
  const [showFilters, setShowFilters] = useState(false);

  const serviceStats: ServiceStats[] = [
    {
      id: 'construction',
      name: 'Construction Permits',
      icon: Building,
      color: 'from-green-500 to-green-600',
      totalItems: 1256,
      activeItems: 980,
      pendingItems: 156,
      expiredItems: 120,
      monthlyTrend: [85, 92, 78, 95, 88, 102, 96, 110, 105, 98, 112, 125],
      categoryData: [
        { name: 'Residential', value: 45, color: '#10b981' },
        { name: 'Commercial', value: 30, color: '#3b82f6' },
        { name: 'Industrial', value: 15, color: '#f59e0b' },
        { name: 'Infrastructure', value: 10, color: '#ef4444' }
      ],
      performance: {
        completionRate: 92,
        responseTime: 2.5,
        satisfaction: 4.2,
        efficiency: 88
      },
      recentActivity: [
        { type: 'Permit', description: 'New construction permit approved', time: '2h ago', status: 'success' },
        { type: 'Inspection', description: 'Site inspection scheduled', time: '4h ago', status: 'warning' },
        { type: 'Completion', description: 'Project completed successfully', time: '1d ago', status: 'success' }
      ]
    },
    {
      id: 'materials',
      name: 'Material Suppliers',
      icon: Truck,
      color: 'from-orange-500 to-orange-600',
      totalItems: 890,
      activeItems: 720,
      pendingItems: 89,
      expiredItems: 81,
      monthlyTrend: [65, 72, 68, 75, 70, 78, 72, 85, 80, 88, 82, 89],
      categoryData: [
        { name: 'Sand & Gravel', value: 35, color: '#f97316' },
        { name: 'Road Supplies', value: 25, color: '#3b82f6' },
        { name: 'Electrical', value: 20, color: '#10b981' },
        { name: 'Specialist', value: 20, color: '#ef4444' }
      ],
      performance: {
        completionRate: 88,
        responseTime: 3.2,
        satisfaction: 4.0,
        efficiency: 85
      },
      recentActivity: [
        { type: 'Supply', description: 'Material delivery completed', time: '1h ago', status: 'success' },
        { type: 'Order', description: 'New material order placed', time: '3h ago', status: 'warning' },
        { type: 'Quality', description: 'Quality inspection passed', time: '6h ago', status: 'success' }
      ]
    },
    {
      id: 'vehicles',
      name: 'Vehicle Registration',
      icon: Car,
      color: 'from-purple-500 to-purple-600',
      totalItems: 3420,
      activeItems: 2980,
      pendingItems: 156,
      expiredItems: 284,
      monthlyTrend: [280, 295, 310, 285, 320, 305, 335, 318, 350, 332, 365, 342],
      categoryData: [
        { name: 'Cars', value: 50, color: '#8b5cf6' },
        { name: 'Trucks', value: 25, color: '#3b82f6' },
        { name: 'Motorcycles', value: 15, color: '#10b981' },
        { name: 'Buses', value: 10, color: '#f59e0b' }
      ],
      performance: {
        completionRate: 95,
        responseTime: 1.8,
        satisfaction: 4.5,
        efficiency: 92
      },
      recentActivity: [
        { type: 'Registration', description: 'New vehicle registered', time: '30m ago', status: 'success' },
        { type: 'Inspection', description: 'Technical inspection passed', time: '2h ago', status: 'success' },
        { type: 'Renewal', description: 'Registration renewal due', time: '1d ago', status: 'warning' }
      ]
    },
    {
      id: 'roads',
      name: 'Road Network',
      icon: MapPin,
      color: 'from-blue-500 to-blue-600',
      totalItems: 567,
      activeItems: 445,
      pendingItems: 67,
      expiredItems: 55,
      monthlyTrend: [35, 42, 38, 45, 41, 48, 44, 52, 49, 56, 53, 56],
      categoryData: [
        { name: 'Highways', value: 40, color: '#3b82f6' },
        { name: 'City Roads', value: 30, color: '#10b981' },
        { name: 'Rural Roads', value: 20, color: '#f59e0b' },
        { name: 'Bridges', value: 10, color: '#ef4444' }
      ],
      performance: {
        completionRate: 85,
        responseTime: 4.1,
        satisfaction: 3.8,
        efficiency: 82
      },
      recentActivity: [
        { type: 'Maintenance', description: 'Road maintenance completed', time: '1h ago', status: 'success' },
        { type: 'Inspection', description: 'Road condition assessment', time: '4h ago', status: 'success' },
        { type: 'Repair', description: 'Pothole repair scheduled', time: '1d ago', status: 'warning' }
      ]
    },
    {
      id: 'maritime',
      name: 'Maritime & Ports',
      icon: Ship,
      color: 'from-cyan-500 to-cyan-600',
      totalItems: 234,
      activeItems: 198,
      pendingItems: 23,
      expiredItems: 13,
      monthlyTrend: [18, 22, 20, 25, 23, 28, 26, 31, 29, 33, 31, 23],
      categoryData: [
        { name: 'Cargo Vessels', value: 45, color: '#06b6d4' },
        { name: 'Container Ships', value: 30, color: '#3b82f6' },
        { name: 'Fishing Boats', value: 15, color: '#10b981' },
        { name: 'Tankers', value: 10, color: '#ef4444' }
      ],
      performance: {
        completionRate: 89,
        responseTime: 3.8,
        satisfaction: 4.1,
        efficiency: 87
      },
      recentActivity: [
        { type: 'Vessel', description: 'New vessel registered', time: '2h ago', status: 'success' },
        { type: 'Operation', description: 'Port operation completed', time: '5h ago', status: 'success' },
        { type: 'Safety', description: 'Safety inspection scheduled', time: '1d ago', status: 'warning' }
      ]
    },
    {
      id: 'aviation',
      name: 'Aviation & Airports',
      icon: Globe,
      color: 'from-indigo-500 to-indigo-600',
      totalItems: 156,
      activeItems: 134,
      pendingItems: 12,
      expiredItems: 10,
      monthlyTrend: [12, 15, 13, 18, 16, 20, 18, 22, 20, 24, 22, 15],
      categoryData: [
        { name: 'Passenger Flights', value: 50, color: '#6366f1' },
        { name: 'Cargo Flights', value: 30, color: '#3b82f6' },
        { name: 'Private Jets', value: 15, color: '#10b981' },
        { name: 'Charter', value: 5, color: '#f59e0b' }
      ],
      performance: {
        completionRate: 91,
        responseTime: 2.1,
        satisfaction: 4.4,
        efficiency: 89
      },
      recentActivity: [
        { type: 'Flight', description: 'New flight schedule added', time: '1h ago', status: 'success' },
        { type: 'Booking', description: 'Cargo booking request', time: '3h ago', status: 'warning' },
        { type: 'Maintenance', description: 'Aircraft maintenance completed', time: '6h ago', status: 'success' }
      ]
    },
    {
      id: 'projects',
      name: 'New Projects',
      icon: Target,
      color: 'from-yellow-500 to-yellow-600',
      totalItems: 89,
      activeItems: 45,
      pendingItems: 23,
      expiredItems: 21,
      monthlyTrend: [8, 12, 10, 15, 13, 18, 16, 21, 19, 23, 21, 8],
      categoryData: [
        { name: 'Construction', value: 40, color: '#eab308' },
        { name: 'Infrastructure', value: 30, color: '#3b82f6' },
        { name: 'Development', value: 20, color: '#10b981' },
        { name: 'Renovation', value: 10, color: '#ef4444' }
      ],
      performance: {
        completionRate: 78,
        responseTime: 1.2,
        satisfaction: 4.3,
        efficiency: 85
      },
      recentActivity: [
        { type: 'Approval', description: 'Project approved for construction', time: '1h ago', status: 'success' },
        { type: 'Progress', description: 'Construction progress updated', time: '3h ago', status: 'warning' },
        { type: 'Completion', description: 'Project completed successfully', time: '6h ago', status: 'success' }
      ]
    }
  ];

  const overallStats = {
    totalServices: serviceStats.length,
    totalItems: serviceStats.reduce((sum, service) => sum + service.totalItems, 0),
    activeItems: serviceStats.reduce((sum, service) => sum + service.activeItems, 0),
    pendingItems: serviceStats.reduce((sum, service) => sum + service.pendingItems, 0),
    avgCompletionRate: Math.round(serviceStats.reduce((sum, service) => sum + service.performance.completionRate, 0) / serviceStats.length),
    avgResponseTime: (serviceStats.reduce((sum, service) => sum + service.performance.responseTime, 0) / serviceStats.length).toFixed(1),
    avgSatisfaction: (serviceStats.reduce((sum, service) => sum + service.performance.satisfaction, 0) / serviceStats.length).toFixed(1)
  };

  const filteredServices = selectedService === 'all' 
    ? serviceStats 
    : serviceStats.filter(service => service.id === selectedService);

  // Simple chart components
  const BarChart = ({ data, color }: { data: number[], color: string }) => {
    const maxValue = Math.max(...data);
    return (
      <div className="flex items-end space-x-1 h-20">
        {data.map((value, index) => (
          <div
            key={index}
            className={`flex-1 rounded-t-sm ${color}`}
            style={{ height: `${(value / maxValue) * 100}%` }}
          />
        ))}
      </div>
    );
  };

  const PieChart = ({ data }: { data: { name: string; value: number; color: string }[] }) => {
    const total = data.reduce((sum, item) => sum + item.value, 0);
    let currentAngle = 0;
    
    return (
      <div className="relative w-24 h-24">
        <svg className="w-24 h-24 transform -rotate-90" viewBox="0 0 48 48">
          {data.map((item, index) => {
            const percentage = (item.value / total) * 100;
            const angle = (percentage / 100) * 360;
            const x1 = 24 + 24 * Math.cos((currentAngle * Math.PI) / 180);
            const y1 = 24 + 24 * Math.sin((currentAngle * Math.PI) / 180);
            const x2 = 24 + 24 * Math.cos(((currentAngle + angle) * Math.PI) / 180);
            const y2 = 24 + 24 * Math.sin(((currentAngle + angle) * Math.PI) / 180);
            
            const largeArcFlag = angle > 180 ? 1 : 0;
            
            const pathData = [
              `M 24 24`,
              `L ${x1} ${y1}`,
              `A 24 24 0 ${largeArcFlag} 1 ${x2} ${y2}`,
              'Z'
            ].join(' ');
            
            currentAngle += angle;
            
            return (
              <path
                key={index}
                d={pathData}
                fill={item.color}
                stroke="white"
                strokeWidth="1"
              />
            );
          })}
        </svg>
      </div>
    );
  };

  return (
    <div className="p-4 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-xl font-bold text-gray-900">Reports & Analytics</h1>
          <p className="text-sm text-gray-600">Comprehensive service performance insights</p>
        </div>
        <div className="flex space-x-2">
          <button className="btn-secondary flex items-center space-x-2">
            <Filter className="w-4 h-4" />
            <span>Filters</span>
          </button>
          <button className="btn-primary flex items-center space-x-2">
            <Download className="w-4 h-4" />
            <span>Export Report</span>
          </button>
        </div>
      </div>

      {/* Filters */}
      <div className="bg-white rounded-xl p-4 border border-gray-200">
        <div className="flex flex-wrap gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Time Period</label>
            <select 
              value={selectedPeriod} 
              onChange={(e) => setSelectedPeriod(e.target.value)}
              className="input-field"
            >
              <option value="week">Last Week</option>
              <option value="month">Last Month</option>
              <option value="quarter">Last Quarter</option>
              <option value="year">Last Year</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Service</label>
            <select 
              value={selectedService} 
              onChange={(e) => setSelectedService(e.target.value)}
              className="input-field"
            >
              <option value="all">All Services</option>
              {serviceStats.map(service => (
                <option key={service.id} value={service.id}>{service.name}</option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* Overall Statistics */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="card text-center">
          <BarChart3 className="w-8 h-8 text-blue-600 mx-auto mb-2" />
          <div className="text-2xl font-bold text-gray-900">{overallStats.totalItems.toLocaleString()}</div>
          <div className="text-sm text-gray-600">Total Items</div>
        </div>
        <div className="card text-center">
          <CheckCircle className="w-8 h-8 text-green-600 mx-auto mb-2" />
          <div className="text-2xl font-bold text-gray-900">{overallStats.activeItems.toLocaleString()}</div>
          <div className="text-sm text-gray-600">Active Items</div>
        </div>
        <div className="card text-center">
          <Clock className="w-8 h-8 text-yellow-600 mx-auto mb-2" />
          <div className="text-2xl font-bold text-gray-900">{overallStats.pendingItems.toLocaleString()}</div>
          <div className="text-sm text-gray-600">Pending Items</div>
        </div>
        <div className="card text-center">
          <Target className="w-8 h-8 text-purple-600 mx-auto mb-2" />
          <div className="text-2xl font-bold text-gray-900">{overallStats.avgCompletionRate}%</div>
          <div className="text-sm text-gray-600">Avg Completion Rate</div>
        </div>
      </div>

      {/* Performance Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="card">
          <h3 className="font-semibold text-gray-900 mb-4 flex items-center">
            <Activity className="w-5 h-5 mr-2 text-blue-600" />
            Response Time
          </h3>
          <div className="text-3xl font-bold text-gray-900 mb-2">{overallStats.avgResponseTime} days</div>
          <div className="text-sm text-gray-600">Average response time across all services</div>
        </div>
        <div className="card">
          <h3 className="font-semibold text-gray-900 mb-4 flex items-center">
            <Star className="w-5 h-5 mr-2 text-yellow-600" />
            Satisfaction Score
          </h3>
          <div className="text-3xl font-bold text-gray-900 mb-2">{overallStats.avgSatisfaction}/5.0</div>
          <div className="text-sm text-gray-600">Average user satisfaction rating</div>
        </div>
        <div className="card">
          <h3 className="font-semibold text-gray-900 mb-4 flex items-center">
            <Zap className="w-5 h-5 mr-2 text-green-600" />
            Efficiency Rate
          </h3>
          <div className="text-3xl font-bold text-gray-900 mb-2">87%</div>
          <div className="text-sm text-gray-600">Overall system efficiency</div>
        </div>
      </div>

      {/* Service Performance Grid */}
      <div className="space-y-6">
        <h2 className="text-lg font-semibold text-gray-900">Service Performance Analysis</h2>
        
        {filteredServices.map((service) => {
          const Icon = service.icon;
          return (
            <div key={service.id} className="card">
              {/* Service Header */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center space-x-3">
                  <div className={`p-3 rounded-lg bg-gradient-to-r ${service.color} text-white`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">{service.name}</h3>
                    <p className="text-sm text-gray-600">Performance metrics and trends</p>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold text-gray-900">{service.totalItems.toLocaleString()}</div>
                  <div className="text-sm text-gray-600">Total Items</div>
                </div>
              </div>

              {/* Key Metrics */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                <div className="text-center p-3 bg-green-50 rounded-lg">
                  <div className="text-lg font-bold text-green-600">{service.activeItems.toLocaleString()}</div>
                  <div className="text-xs text-gray-600">Active</div>
                </div>
                <div className="text-center p-3 bg-yellow-50 rounded-lg">
                  <div className="text-lg font-bold text-yellow-600">{service.pendingItems.toLocaleString()}</div>
                  <div className="text-xs text-gray-600">Pending</div>
                </div>
                <div className="text-center p-3 bg-red-50 rounded-lg">
                  <div className="text-lg font-bold text-red-600">{service.expiredItems.toLocaleString()}</div>
                  <div className="text-xs text-gray-600">Expired</div>
                </div>
                <div className="text-center p-3 bg-blue-50 rounded-lg">
                  <div className="text-lg font-bold text-blue-600">{service.performance.completionRate}%</div>
                  <div className="text-xs text-gray-600">Completion</div>
                </div>
              </div>

              {/* Charts Row */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Monthly Trend */}
                <div>
                  <h4 className="font-medium text-gray-900 mb-3">Monthly Trend</h4>
                  <BarChart 
                    data={service.monthlyTrend} 
                    color={`bg-gradient-to-t ${service.color}`}
                  />
                  <div className="text-xs text-gray-500 text-center mt-2">Last 12 months</div>
                </div>

                {/* Category Distribution */}
                <div>
                  <h4 className="font-medium text-gray-900 mb-3">Category Distribution</h4>
                  <div className="flex items-center space-x-4">
                    <PieChart data={service.categoryData} />
                    <div className="flex-1 space-y-2">
                      {service.categoryData.map((category, index) => (
                        <div key={index} className="flex items-center space-x-2">
                          <div 
                            className="w-3 h-3 rounded-full"
                            style={{ backgroundColor: category.color }}
                          ></div>
                          <span className="text-sm text-gray-600">{category.name}</span>
                          <span className="text-sm font-medium text-gray-900">{category.value}%</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Performance Metrics */}
              <div className="mt-6 pt-6 border-t border-gray-200">
                <h4 className="font-medium text-gray-900 mb-3">Performance Metrics</h4>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div>
                    <div className="text-sm text-gray-600">Response Time</div>
                    <div className="text-lg font-semibold text-gray-900">{service.performance.responseTime} days</div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-600">Satisfaction</div>
                    <div className="text-lg font-semibold text-gray-900">{service.performance.satisfaction}/5.0</div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-600">Efficiency</div>
                    <div className="text-lg font-semibold text-gray-900">{service.performance.efficiency}%</div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-600">Completion Rate</div>
                    <div className="text-lg font-semibold text-gray-900">{service.performance.completionRate}%</div>
                  </div>
                </div>
              </div>

              {/* Recent Activity */}
              <div className="mt-6 pt-6 border-t border-gray-200">
                <h4 className="font-medium text-gray-900 mb-3">Recent Activity</h4>
                <div className="space-y-2">
                  {service.recentActivity.map((activity, index) => (
                    <div key={index} className="flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-50">
                      <div className={`w-2 h-2 rounded-full ${
                        activity.status === 'success' ? 'bg-green-500' :
                        activity.status === 'warning' ? 'bg-yellow-500' : 'bg-red-500'
                      }`}></div>
                      <div className="flex-1">
                        <div className="text-sm font-medium text-gray-900">{activity.type}</div>
                        <div className="text-xs text-gray-600">{activity.description}</div>
                      </div>
                      <div className="text-xs text-gray-500">{activity.time}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Detailed Data Analytics */}
      <div className="space-y-6">
        <h2 className="text-lg font-semibold text-gray-900">Detailed Data Analytics</h2>
        
        {/* Construction Permits Detailed Data */}
        <div className="card">
          <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
            <Building className="w-5 h-5 mr-2 text-green-600" />
            Construction Permits - Detailed Analysis
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Permit Types */}
            <div>
              <h4 className="font-medium text-gray-900 mb-3">Permit Types by Location</h4>
              <div className="space-y-2">
                {[
                  { type: 'Residential', count: 565, value: '$2.5M', locations: ['Downtown', 'Suburbs', 'Rural'] },
                  { type: 'Commercial', count: 378, value: '$4.2M', locations: ['Business District', 'Industrial Zone'] },
                  { type: 'Industrial', count: 189, value: '$3.8M', locations: ['Industrial Zone', 'Port Area'] },
                  { type: 'Infrastructure', count: 124, value: '$6.1M', locations: ['Highways', 'Bridges', 'Tunnels'] }
                ].map((permit, index) => (
                  <div key={index} className="border border-gray-200 rounded-lg p-3">
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-medium text-gray-900">{permit.type}</span>
                      <span className="text-sm text-gray-600">{permit.count} permits</span>
                    </div>
                    <div className="text-sm text-gray-600 mb-2">Value: {permit.value}</div>
                    <div className="flex flex-wrap gap-1">
                      {permit.locations.map((location, locIndex) => (
                        <span key={locIndex} className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded">
                          {location}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Property Types */}
            <div>
              <h4 className="font-medium text-gray-900 mb-3">Property Types & Purposes</h4>
              <div className="space-y-2">
                {[
                  { property: 'Apartment Complex', purpose: 'Residential', owner: 'ABC Developers', value: '$1.2M' },
                  { property: 'Shopping Mall', purpose: 'Commercial', owner: 'XYZ Corp', value: '$2.8M' },
                  { property: 'Factory', purpose: 'Industrial', owner: 'Industrial Ltd', value: '$1.5M' },
                  { property: 'Highway Bridge', purpose: 'Infrastructure', owner: 'Govt Agency', value: '$3.2M' }
                ].map((property, index) => (
                  <div key={index} className="border border-gray-200 rounded-lg p-3">
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-medium text-gray-900">{property.property}</span>
                      <span className="text-sm text-gray-600">{property.value}</span>
                    </div>
                    <div className="text-sm text-gray-600 mb-1">Purpose: {property.purpose}</div>
                    <div className="text-sm text-gray-600">Owner: {property.owner}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Material Suppliers Detailed Data */}
        <div className="card">
          <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
            <Truck className="w-5 h-5 mr-2 text-orange-600" />
            Material Suppliers - Comprehensive Data
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Supplier Categories */}
            <div>
              <h4 className="font-medium text-gray-900 mb-3">Supplier Categories & Values</h4>
              <div className="space-y-2">
                {[
                  { category: 'Sand & Gravel', value: '$850K', suppliers: 45, contractors: 23 },
                  { category: 'Road Supplies', value: '$620K', suppliers: 32, contractors: 18 },
                  { category: 'Electrical', value: '$480K', suppliers: 28, contractors: 15 },
                  { category: 'Specialist Materials', value: '$320K', suppliers: 12, contractors: 8 }
                ].map((category, index) => (
                  <div key={index} className="border border-gray-200 rounded-lg p-3">
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-medium text-gray-900">{category.category}</span>
                      <span className="text-sm text-gray-600">{category.value}</span>
                    </div>
                    <div className="grid grid-cols-2 gap-4 text-sm text-gray-600">
                      <div>Suppliers: {category.suppliers}</div>
                      <div>Contractors: {category.contractors}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Special Lists */}
            <div>
              <h4 className="font-medium text-gray-900 mb-3">Special Lists & Sub-contractors</h4>
              <div className="space-y-2">
                {[
                  { type: 'Pre-approved Suppliers', count: 156, value: '$2.1M', status: 'Active' },
                  { type: 'Certified Contractors', count: 89, value: '$1.8M', status: 'Active' },
                  { type: 'Sub-contractors', count: 234, value: '$3.2M', status: 'Active' },
                  { type: 'Specialist Labor', count: 67, value: '$950K', status: 'Active' }
                ].map((list, index) => (
                  <div key={index} className="border border-gray-200 rounded-lg p-3">
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-medium text-gray-900">{list.type}</span>
                      <span className="text-sm text-gray-600">{list.value}</span>
                    </div>
                    <div className="grid grid-cols-2 gap-4 text-sm text-gray-600">
                      <div>Count: {list.count}</div>
                      <div>Status: {list.status}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Vehicle Registration Detailed Data */}
        <div className="card">
          <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
            <Car className="w-5 h-5 mr-2 text-purple-600" />
            Vehicle Registration - Comprehensive Details
          </h3>
          
          {/* Vehicle Types & Engine Specifications */}
          <div className="mb-6">
            <h4 className="font-medium text-gray-900 mb-3">Vehicle Types & Engine Specifications</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                {[
                  { type: 'Sedan', cc: '1500-2500', model: 'Toyota Camry', standard: 'Euro 6', use: 'Personal', count: 1250, value: '$18.5M' },
                  { type: 'SUV', cc: '2000-3500', model: 'Honda CR-V', standard: 'Euro 6', use: 'Family', count: 890, value: '$15.2M' },
                  { type: 'Truck', cc: '3000-6000', model: 'Ford F-150', standard: 'Euro 5', use: 'Commercial', count: 680, value: '$12.8M' },
                  { type: 'Motorcycle', cc: '125-1000', model: 'Honda CBR', standard: 'Euro 5', use: 'Personal', count: 420, value: '$3.2M' },
                  { type: 'Bus', cc: '4000-8000', model: 'Mercedes-Benz', standard: 'Euro 6', use: 'Public Transport', count: 180, value: '$8.5M' }
                ].map((vehicle, index) => (
                  <div key={index} className="border border-gray-200 rounded-lg p-3">
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-medium text-gray-900">{vehicle.type}</span>
                      <span className="text-sm text-gray-600">{vehicle.cc} CC</span>
                    </div>
                    <div className="text-sm text-gray-600 mb-1">Model: {vehicle.model}</div>
                    <div className="text-sm text-gray-600 mb-1">Standard: {vehicle.standard}</div>
                    <div className="text-sm text-gray-600 mb-1">Use: {vehicle.use}</div>
                    <div className="grid grid-cols-2 gap-4 text-sm text-gray-600">
                      <div>Count: {vehicle.count}</div>
                      <div>Value: {vehicle.value}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Detailed Vehicle Registration Data */}
          <div className="mb-6">
            <h4 className="font-medium text-gray-900 mb-3">Detailed Vehicle Registration Data</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                {[
                  { plate: 'ABC-1234', owner: 'John Smith', type: 'Sedan', cc: '2000', model: 'Toyota Camry', location: 'Downtown', payment: 'Online', status: 'Active', registrationDate: '2023-03-15' },
                  { plate: 'XYZ-5678', owner: 'Sarah Johnson', type: 'SUV', cc: '2500', model: 'Honda CR-V', location: 'Suburbs', payment: 'Bank Transfer', status: 'Active', registrationDate: '2023-06-22' },
                  { plate: 'DEF-9012', owner: 'Mike Wilson', type: 'Truck', cc: '4500', model: 'Ford F-150', location: 'Industrial Zone', payment: 'Cash', status: 'Pending', registrationDate: '2023-09-08' },
                  { plate: 'GHI-3456', owner: 'Lisa Brown', type: 'Motorcycle', cc: '600', model: 'Honda CBR', location: 'Rural Area', payment: 'Credit Card', status: 'Active', registrationDate: '2023-11-30' },
                  { plate: 'JKL-7890', owner: 'David Lee', type: 'Bus', cc: '6000', model: 'Mercedes-Benz', location: 'City Center', payment: 'Corporate Account', status: 'Active', registrationDate: '2023-01-12' }
                ].map((vehicle, index) => (
                  <div key={index} className="border border-gray-200 rounded-lg p-3">
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-medium text-gray-900">{vehicle.plate}</span>
                      <span className="text-sm text-gray-600">{vehicle.payment}</span>
                    </div>
                    <div className="text-sm text-gray-600 mb-1">Owner: {vehicle.owner}</div>
                    <div className="text-sm text-gray-600 mb-1">Type: {vehicle.type} ({vehicle.cc} CC)</div>
                    <div className="text-sm text-gray-600 mb-1">Model: {vehicle.model}</div>
                    <div className="text-sm text-gray-600 mb-1">Location: {vehicle.location}</div>
                    <div className="text-sm text-gray-600 mb-1">Status: {vehicle.status}</div>
                    <div className="text-sm text-gray-600">Registered: {vehicle.registrationDate}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Vehicle Weekly Technical Inspection */}
          <div className="mb-6">
            <h4 className="font-medium text-gray-900 mb-3">Vehicle Weekly Technical Inspection Details</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                {[
                  { inspection: 'Weekly Technical', vehicles: 3420, passed: 3150, failed: 270, fee: '$45 per inspection', total: '$153.9K', centers: 8, inspectors: 25 },
                  { inspection: 'Monthly Safety', vehicles: 2850, passed: 2680, failed: 170, fee: '$25 per inspection', total: '$71.25K', centers: 6, inspectors: 18 },
                  { inspection: 'Annual Comprehensive', vehicles: 1200, passed: 1080, failed: 120, fee: '$120 per inspection', total: '$144K', centers: 4, inspectors: 12 },
                  { inspection: 'Pre-registration', vehicles: 450, passed: 420, failed: 30, fee: '$80 per inspection', total: '$36K', centers: 3, inspectors: 8 }
                ].map((item, index) => (
                  <div key={index} className="border border-gray-200 rounded-lg p-3">
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-medium text-gray-900">{item.inspection}</span>
                      <span className="text-sm text-gray-600">{item.total}</span>
                    </div>
                    <div className="grid grid-cols-2 gap-4 text-sm text-gray-600 mb-2">
                      <div>Vehicles: {item.vehicles}</div>
                      <div>Passed: {item.passed}</div>
                      <div>Failed: {item.failed}</div>
                      <div>Fee: {item.fee}</div>
                      <div>Centers: {item.centers}</div>
                      <div>Inspectors: {item.inspectors}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Road Fee Payment Details */}
          <div className="mb-6">
            <h4 className="font-medium text-gray-900 mb-3">Road Fee Payment Details</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                {[
                  { category: 'Annual Road Fee', vehicles: 2980, paid: 2850, pending: 130, fee: '$180 per year', total: '$536.4K', dueDate: '2024-12-31' },
                  { category: 'Monthly Road Tax', vehicles: 2850, paid: 2720, pending: 130, fee: '$15 per month', total: '$40.8K', dueDate: '2024-02-01' },
                  { category: 'Toll Road Pass', vehicles: 1200, paid: 1150, pending: 50, fee: '$50 per month', total: '$60K', dueDate: '2024-02-01' },
                  { category: 'Parking Permit', vehicles: 890, paid: 850, pending: 40, fee: '$30 per month', total: '$26.7K', dueDate: '2024-02-01' }
                ].map((fee, index) => (
                  <div key={index} className="border border-gray-200 rounded-lg p-3">
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-medium text-gray-900">{fee.category}</span>
                      <span className="text-sm text-gray-600">{fee.total}</span>
                    </div>
                    <div className="grid grid-cols-2 gap-4 text-sm text-gray-600 mb-2">
                      <div>Vehicles: {fee.vehicles}</div>
                      <div>Paid: {fee.paid}</div>
                      <div>Pending: {fee.pending}</div>
                      <div>Fee: {fee.fee}</div>
                      <div>Due Date: {fee.dueDate}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Temporary Foreign Vehicle Registration */}
          <div className="mb-6">
            <h4 className="font-medium text-gray-900 mb-3">Temporary (Foreign) Vehicle Registration</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                {[
                  { type: 'Tourist Vehicles', user: 'John Smith', nationality: 'USA', amount: '$250', location: 'Downtown Hotel', duration: '30 days', status: 'Active', plate: 'TEMP-001' },
                  { type: 'Business Vehicles', user: 'Sarah Johnson', nationality: 'UK', amount: '$500', location: 'Business District', duration: '90 days', status: 'Active', plate: 'TEMP-002' },
                  { type: 'Diplomatic Vehicles', user: 'Embassy Staff', nationality: 'Germany', amount: '$750', location: 'Diplomatic Zone', duration: '180 days', status: 'Active', plate: 'DIP-001' },
                  { type: 'Temporary Import', user: 'Mike Wilson', nationality: 'Canada', amount: '$300', location: 'Port Area', duration: '60 days', status: 'Pending', plate: 'IMP-001' },
                  { type: 'Exhibition Vehicles', user: 'Auto Show Org', nationality: 'Japan', amount: '$400', location: 'Convention Center', duration: '45 days', status: 'Active', plate: 'EXH-001' }
                ].map((vehicle, index) => (
                  <div key={index} className="border border-gray-200 rounded-lg p-3">
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-medium text-gray-900">{vehicle.type}</span>
                      <span className="text-sm text-gray-600">{vehicle.amount}</span>
                    </div>
                    <div className="text-sm text-gray-600 mb-1">User: {vehicle.user} ({vehicle.nationality})</div>
                    <div className="text-sm text-gray-600 mb-1">Plate: {vehicle.plate}</div>
                    <div className="text-sm text-gray-600 mb-1">Location: {vehicle.location}</div>
                    <div className="text-sm text-gray-600 mb-1">Duration: {vehicle.duration}</div>
                    <div className="text-sm text-gray-600">Status: {vehicle.status}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Vehicle Registration Statistics */}
          <div className="mb-6">
            <h4 className="font-medium text-gray-900 mb-3">Vehicle Registration Statistics</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                {[
                  { metric: 'Total Registered Vehicles', count: 3420, growth: '+8.5%', breakdown: 'Sedan: 1250, SUV: 890, Truck: 680, Motorcycle: 420, Bus: 180' },
                  { metric: 'Active Registrations', count: 2980, growth: '+12.3%', breakdown: 'Personal: 1850, Commercial: 680, Public: 180, Special: 270' },
                  { metric: 'Pending Applications', count: 156, growth: '-5.2%', breakdown: 'New: 89, Renewal: 45, Transfer: 22' },
                  { metric: 'Expired Registrations', count: 284, growth: '+2.1%', breakdown: 'Overdue: 156, Grace Period: 89, Suspended: 39' }
                ].map((stat, index) => (
                  <div key={index} className="border border-gray-200 rounded-lg p-3">
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-medium text-gray-900">{stat.metric}</span>
                      <span className="text-sm text-gray-600">{stat.count}</span>
                    </div>
                    <div className="text-sm text-green-600 mb-2">Growth: {stat.growth}</div>
                    <div className="text-xs text-gray-500">{stat.breakdown}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Road Network Detailed Data */}
        <div className="card">
          <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
            <MapPin className="w-5 h-5 mr-2 text-blue-600" />
            Road Network - Infrastructure Analysis
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Road Types & Lengths */}
            <div>
              <h4 className="font-medium text-gray-900 mb-3">Road Types & Lengths</h4>
              <div className="space-y-2">
                {[
                  { type: 'Highways', length: '450 km', entry: 25, maintenance: '$2.1M', condition: 'Good' },
                  { type: 'City Roads', length: '320 km', entry: 18, maintenance: '$1.8M', condition: 'Fair' },
                  { type: 'Rural Roads', length: '280 km', entry: 12, maintenance: '$950K', condition: 'Poor' },
                  { type: 'Bridges', length: '45 km', entry: 8, maintenance: '$1.2M', condition: 'Good' }
                ].map((road, index) => (
                  <div key={index} className="border border-gray-200 rounded-lg p-3">
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-medium text-gray-900">{road.type}</span>
                      <span className="text-sm text-gray-600">{road.length}</span>
                    </div>
                    <div className="grid grid-cols-2 gap-4 text-sm text-gray-600">
                      <div>Entries: {road.entry}</div>
                      <div>Maintenance: {road.maintenance}</div>
                      <div>Condition: {road.condition}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Land & Capacity */}
            <div>
              <h4 className="font-medium text-gray-900 mb-3">Land & Capacity Analysis</h4>
              <div className="space-y-2">
                {[
                  { area: 'Downtown', capacity: 'High', land: '2.5 sq km', traffic: 'Heavy', value: '$15M' },
                  { area: 'Suburbs', capacity: 'Medium', land: '8.2 sq km', traffic: 'Moderate', value: '$8.5M' },
                  { area: 'Industrial Zone', capacity: 'High', land: '12.5 sq km', traffic: 'Heavy', value: '$22M' },
                  { area: 'Rural Areas', capacity: 'Low', land: '45.8 sq km', traffic: 'Light', value: '$3.2M' }
                ].map((area, index) => (
                  <div key={index} className="border border-gray-200 rounded-lg p-3">
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-medium text-gray-900">{area.area}</span>
                      <span className="text-sm text-gray-600">{area.capacity}</span>
                    </div>
                    <div className="grid grid-cols-2 gap-4 text-sm text-gray-600">
                      <div>Land: {area.land}</div>
                      <div>Traffic: {area.traffic}</div>
                      <div>Value: {area.value}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Maritime & Ports Detailed Data */}
        <div className="card">
          <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
            <Ship className="w-5 h-5 mr-2 text-cyan-600" />
            Maritime & Ports - Comprehensive Data
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Port Locations & Clusters */}
            <div>
              <h4 className="font-medium text-gray-900 mb-3">Ports & Locations</h4>
              <div className="space-y-2">
                {[
                  { port: 'Main Port', location: 'Coastal City', clusters: 8, capacity: 'High', vessels: 45 },
                  { port: 'Industrial Port', location: 'Industrial Zone', clusters: 5, capacity: 'Medium', vessels: 28 },
                  { port: 'Fishing Port', location: 'Fishing Village', clusters: 3, capacity: 'Low', vessels: 15 },
                  { port: 'Container Port', location: 'Trade Zone', clusters: 6, capacity: 'High', vessels: 32 }
                ].map((port, index) => (
                  <div key={index} className="border border-gray-200 rounded-lg p-3">
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-medium text-gray-900">{port.port}</span>
                      <span className="text-sm text-gray-600">{port.clusters} clusters</span>
                    </div>
                    <div className="text-sm text-gray-600 mb-1">Location: {port.location}</div>
                    <div className="grid grid-cols-2 gap-4 text-sm text-gray-600">
                      <div>Capacity: {port.capacity}</div>
                      <div>Vessels: {port.vessels}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Boat & Ship Registration */}
            <div>
              <h4 className="font-medium text-gray-900 mb-3">Boat & Ship Registration</h4>
              <div className="space-y-2">
                {[
                  { type: 'Cargo Vessel', count: 45, tonnage: '5000-25000', status: 'Active' },
                  { type: 'Container Ship', count: 32, tonnage: '10000-50000', status: 'Active' },
                  { type: 'Fishing Boat', count: 28, tonnage: '100-1000', status: 'Active' },
                  { type: 'Tanker', count: 15, tonnage: '15000-75000', status: 'Active' }
                ].map((vessel, index) => (
                  <div key={index} className="border border-gray-200 rounded-lg p-3">
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-medium text-gray-900">{vessel.type}</span>
                      <span className="text-sm text-gray-600">{vessel.count}</span>
                    </div>
                    <div className="text-sm text-gray-600 mb-1">Tonnage: {vessel.tonnage}</div>
                    <div className="text-sm text-gray-600">Status: {vessel.status}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Aviation & Airports Detailed Data */}
        <div className="card">
          <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
            <Globe className="w-5 h-5 mr-2 text-indigo-600" />
            Aviation & Airports - Flight Data
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Flight Schedules */}
            <div>
              <h4 className="font-medium text-gray-900 mb-3">Flight Schedules & Airport Info</h4>
              <div className="space-y-2">
                {[
                  { flight: 'PA-001', type: 'Passenger', destination: 'International', schedule: 'Daily', status: 'Active' },
                  { flight: 'CA-002', type: 'Cargo', destination: 'Domestic', schedule: '3x Weekly', status: 'Active' },
                  { flight: 'PR-003', type: 'Private', destination: 'Charter', schedule: 'On Demand', status: 'Active' },
                  { flight: 'CH-004', type: 'Charter', destination: 'Regional', schedule: 'Weekly', status: 'Active' }
                ].map((flight, index) => (
                  <div key={index} className="border border-gray-200 rounded-lg p-3">
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-medium text-gray-900">{flight.flight}</span>
                      <span className="text-sm text-gray-600">{flight.type}</span>
                    </div>
                    <div className="text-sm text-gray-600 mb-1">Destination: {flight.destination}</div>
                    <div className="text-sm text-gray-600 mb-1">Schedule: {flight.schedule}</div>
                    <div className="text-sm text-gray-600">Status: {flight.status}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Cargo Booking Requests */}
            <div>
              <h4 className="font-medium text-gray-900 mb-3">Cargo Booking Requests</h4>
              <div className="space-y-2">
                {[
                  { request: 'CR-001', cargo: 'Electronics', weight: '2.5 tons', destination: 'International', status: 'Pending' },
                  { request: 'CR-002', cargo: 'Textiles', weight: '1.8 tons', destination: 'Domestic', status: 'Approved' },
                  { request: 'CR-003', cargo: 'Machinery', weight: '5.2 tons', destination: 'Regional', status: 'Processing' },
                  { request: 'CR-004', cargo: 'Food Items', weight: '0.8 tons', destination: 'Local', status: 'Completed' }
                ].map((request, index) => (
                  <div key={index} className="border border-gray-200 rounded-lg p-3">
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-medium text-gray-900">{request.request}</span>
                      <span className="text-sm text-gray-600">{request.weight}</span>
                    </div>
                    <div className="text-sm text-gray-600 mb-1">Cargo: {request.cargo}</div>
                    <div className="text-sm text-gray-600 mb-1">Destination: {request.destination}</div>
                    <div className="text-sm text-gray-600">Status: {request.status}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* New Projects Detailed Data */}
        <div className="card">
          <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
            <Target className="w-5 h-5 mr-2 text-yellow-600" />
            New Projects - Progress & Expenditures
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Project Progress */}
            <div>
              <h4 className="font-medium text-gray-900 mb-3">Project Progress & Status</h4>
              <div className="space-y-2">
                {[
                  { project: 'Highway Extension', type: 'Infrastructure', progress: '75%', status: 'In Progress', budget: '$15M', startDate: '2024-01-15', endDate: '2024-12-30', contractor: 'ABC Construction' },
                  { project: 'Shopping Mall', type: 'Construction', progress: '45%', status: 'In Progress', budget: '$8.5M', startDate: '2024-03-01', endDate: '2024-11-15', contractor: 'XYZ Builders' },
                  { project: 'Residential Complex', type: 'Building', progress: '90%', status: 'Near Completion', budget: '$12M', startDate: '2023-09-01', endDate: '2024-06-30', contractor: 'Home Developers' },
                  { project: 'Industrial Park', type: 'Development', progress: '30%', status: 'In Progress', budget: '$25M', startDate: '2024-02-01', endDate: '2025-03-31', contractor: 'Industrial Corp' }
                ].map((project, index) => (
                  <div key={index} className="border border-gray-200 rounded-lg p-3">
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-medium text-gray-900">{project.project}</span>
                      <span className="text-sm text-gray-600">{project.progress}</span>
                    </div>
                    <div className="text-sm text-gray-600 mb-1">Type: {project.type}</div>
                    <div className="text-sm text-gray-600 mb-1">Status: {project.status}</div>
                    <div className="text-sm text-gray-600 mb-1">Budget: {project.budget}</div>
                    <div className="text-sm text-gray-600 mb-1">Contractor: {project.contractor}</div>
                    <div className="text-sm text-gray-600">Timeline: {project.startDate} to {project.endDate}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Money Expenditures */}
            <div>
              <h4 className="font-medium text-gray-900 mb-3">Money Expenditures by Category</h4>
              <div className="space-y-2">
                {[
                  { category: 'Construction Materials', amount: '$8.2M', projects: 15, status: 'Completed', breakdown: 'Concrete: $3.2M, Steel: $2.1M, Wood: $1.8M, Others: $1.1M' },
                  { category: 'Labor Costs', amount: '$5.8M', projects: 12, status: 'Ongoing', breakdown: 'Skilled: $3.5M, Unskilled: $1.8M, Supervisors: $500K' },
                  { category: 'Equipment Rental', amount: '$2.1M', projects: 8, status: 'Active', breakdown: 'Excavators: $800K, Cranes: $600K, Trucks: $400K, Others: $300K' },
                  { category: 'Consulting Fees', amount: '$1.5M', projects: 6, status: 'Completed', breakdown: 'Architects: $600K, Engineers: $500K, Surveyors: $300K, Others: $100K' }
                ].map((expenditure, index) => (
                  <div key={index} className="border border-gray-200 rounded-lg p-3">
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-medium text-gray-900">{expenditure.category}</span>
                      <span className="text-sm text-gray-600">{expenditure.amount}</span>
                    </div>
                    <div className="grid grid-cols-2 gap-4 text-sm text-gray-600 mb-2">
                      <div>Projects: {expenditure.projects}</div>
                      <div>Status: {expenditure.status}</div>
                    </div>
                    <div className="text-xs text-gray-500">{expenditure.breakdown}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Additional Detailed Analytics */}
        <div className="card">
          <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
            <BarChart3 className="w-5 h-5 mr-2 text-blue-600" />
            Additional Detailed Analytics
          </h3>
          
          {/* Vehicle Technical Inspection & Road Fees */}
          <div className="mb-6">
            <h4 className="font-medium text-gray-900 mb-3">Vehicle Technical Inspection & Road Fee Payment Details</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                {[
                  { inspection: 'Weekly Technical', vehicles: 3420, passed: 3150, failed: 270, fee: '$45 per inspection', total: '$153.9K' },
                  { inspection: 'Monthly Safety', vehicles: 2850, passed: 2680, failed: 170, fee: '$25 per inspection', total: '$71.25K' },
                  { inspection: 'Annual Comprehensive', vehicles: 1200, passed: 1080, failed: 120, fee: '$120 per inspection', total: '$144K' },
                  { inspection: 'Road Fee Payment', vehicles: 2980, paid: 2850, pending: 130, fee: '$180 per year', total: '$536.4K' }
                ].map((item, index) => (
                  <div key={index} className="border border-gray-200 rounded-lg p-3">
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-medium text-gray-900">{item.inspection}</span>
                      <span className="text-sm text-gray-600">{item.total}</span>
                    </div>
                    <div className="grid grid-cols-2 gap-4 text-sm text-gray-600">
                      <div>Vehicles: {item.vehicles}</div>
                      <div>Passed: {item.passed}</div>
                      <div>Failed: {item.failed || item.pending}</div>
                      <div>Fee: {item.fee}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Temporary Foreign Vehicle Registration */}
          <div className="mb-6">
            <h4 className="font-medium text-gray-900 mb-3">Temporary (Foreign) Vehicle Registration</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                {[
                  { type: 'Tourist Vehicles', user: 'John Smith', amount: '$250', location: 'Downtown Hotel', duration: '30 days', status: 'Active' },
                  { type: 'Business Vehicles', user: 'Sarah Johnson', amount: '$500', location: 'Business District', duration: '90 days', status: 'Active' },
                  { type: 'Diplomatic Vehicles', user: 'Embassy Staff', amount: '$750', location: 'Diplomatic Zone', duration: '180 days', status: 'Active' },
                  { type: 'Temporary Import', user: 'Mike Wilson', amount: '$300', location: 'Port Area', duration: '60 days', status: 'Pending' }
                ].map((vehicle, index) => (
                  <div key={index} className="border border-gray-200 rounded-lg p-3">
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-medium text-gray-900">{vehicle.type}</span>
                      <span className="text-sm text-gray-600">{vehicle.amount}</span>
                    </div>
                    <div className="text-sm text-gray-600 mb-1">User: {vehicle.user}</div>
                    <div className="text-sm text-gray-600 mb-1">Location: {vehicle.location}</div>
                    <div className="text-sm text-gray-600 mb-1">Duration: {vehicle.duration}</div>
                    <div className="text-sm text-gray-600">Status: {vehicle.status}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* BST Registration */}
          <div className="mb-6">
            <h4 className="font-medium text-gray-900 mb-3">BST Registration - Active & Run Active</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                {[
                  { type: 'Active BST', count: 156, value: '$2.8M', status: 'Active', renewal: 'Annual', fee: '$18K' },
                  { type: 'Run Active BST', count: 89, value: '$1.6M', status: 'Active', renewal: 'Biannual', fee: '$12K' },
                  { type: 'Pending BST', count: 23, value: '$420K', status: 'Pending', renewal: 'N/A', fee: '$8K' },
                  { type: 'Expired BST', count: 12, value: '$220K', status: 'Expired', renewal: 'Overdue', fee: '$15K' }
                ].map((bst, index) => (
                  <div key={index} className="border border-gray-200 rounded-lg p-3">
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-medium text-gray-900">{bst.type}</span>
                      <span className="text-sm text-gray-600">{bst.value}</span>
                    </div>
                    <div className="grid grid-cols-2 gap-4 text-sm text-gray-600">
                      <div>Count: {bst.count}</div>
                      <div>Status: {bst.status}</div>
                      <div>Renewal: {bst.renewal}</div>
                      <div>Fee: {bst.fee}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Management Map Integration */}
          <div className="mb-6">
            <h4 className="font-medium text-gray-900 mb-3">Management Map (Integrating) - Infrastructure Details</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                {[
                  { facility: 'Water Treatment Plant 1', location: 'North District', capacity: '50M liters/day', status: 'Operational', liability: 'No Liability', value: '$25M' },
                  { facility: 'Water Treatment Plant 2', location: 'South District', capacity: '35M liters/day', status: 'Operational', liability: 'No Liability', value: '$18M' },
                  { facility: 'New Layout Development', location: 'East Zone', capacity: 'N/A', status: 'Planning', liability: 'No Liability', value: '$45M' },
                  { facility: 'Sewage Treatment Plant', location: 'West District', capacity: '30M liters/day', status: 'Under Construction', liability: 'No Liability', value: '$22M' }
                ].map((facility, index) => (
                  <div key={index} className="border border-gray-200 rounded-lg p-3">
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-medium text-gray-900">{facility.facility}</span>
                      <span className="text-sm text-gray-600">{facility.value}</span>
                    </div>
                    <div className="text-sm text-gray-600 mb-1">Location: {facility.location}</div>
                    <div className="text-sm text-gray-600 mb-1">Capacity: {facility.capacity}</div>
                    <div className="text-sm text-gray-600 mb-1">Status: {facility.status}</div>
                    <div className="text-sm text-gray-600">Liability: {facility.liability}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Meeting Schedules */}
          <div className="mb-6">
            <h4 className="font-medium text-gray-900 mb-3">Meeting Schedules - Passenger & Cargo Operations</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                {[
                  { type: 'Passenger Daily Meeting', time: '09:00 AM', attendees: 15, agenda: 'Flight schedules, passenger services', status: 'Scheduled' },
                  { type: 'Cargo Daily Meeting', time: '10:30 AM', attendees: 12, agenda: 'Cargo operations, booking requests', status: 'Scheduled' },
                  { type: 'Weekly Operations Review', time: '02:00 PM', attendees: 25, agenda: 'Performance review, safety protocols', status: 'Scheduled' },
                  { type: 'Monthly Strategic Meeting', time: '11:00 AM', attendees: 30, agenda: 'Strategic planning, budget review', status: 'Scheduled' }
                ].map((meeting, index) => (
                  <div key={index} className="border border-gray-200 rounded-lg p-3">
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-medium text-gray-900">{meeting.type}</span>
                      <span className="text-sm text-gray-600">{meeting.time}</span>
                    </div>
                    <div className="text-sm text-gray-600 mb-1">Attendees: {meeting.attendees}</div>
                    <div className="text-sm text-gray-600 mb-1">Agenda: {meeting.agenda}</div>
                    <div className="text-sm text-gray-600">Status: {meeting.status}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Developers & Companies */}
          <div className="mb-6">
            <h4 className="font-medium text-gray-900 mb-3">Developers, Consulting Companies & Inspection Companies</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                {[
                  { type: 'Developers', count: 45, active: 38, projects: 89, value: '$125M', specializations: ['Residential', 'Commercial', 'Industrial'], employees: 1250, certifications: 156 },
                  { type: 'Consulting Companies', count: 23, active: 20, projects: 67, value: '$45M', specializations: ['Engineering', 'Architecture', 'Project Management'], employees: 450, certifications: 89 },
                  { type: 'Inspection Companies', count: 18, active: 15, projects: 156, value: '$28M', specializations: ['Safety', 'Quality', 'Environmental'], employees: 280, certifications: 67 },
                  { type: 'Environmental Inspectors', count: 12, active: 10, projects: 78, value: '$15M', specializations: ['ESIA', 'Compliance', 'Monitoring'], employees: 180, certifications: 45 }
                ].map((company, index) => (
                  <div key={index} className="border border-gray-200 rounded-lg p-3">
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-medium text-gray-900">{company.type}</span>
                      <span className="text-sm text-gray-600">{company.value}</span>
                    </div>
                    <div className="grid grid-cols-2 gap-4 text-sm text-gray-600 mb-2">
                      <div>Total: {company.count}</div>
                      <div>Active: {company.active}</div>
                      <div>Projects: {company.projects}</div>
                      <div>Employees: {company.employees}</div>
                      <div>Certifications: {company.certifications}</div>
                    </div>
                    <div className="flex flex-wrap gap-1">
                      {company.specializations.map((spec, specIndex) => (
                        <span key={specIndex} className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded">
                          {spec}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Financial Performance Analytics */}
          <div className="mb-6">
            <h4 className="font-medium text-gray-900 mb-3">Financial Performance Analytics</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                {[
                  { category: 'Revenue Generation', total: '$45.8M', growth: '+12.5%', breakdown: 'Permits: $18.2M, Fees: $15.6M, Services: $12M' },
                  { category: 'Cost Management', total: '$28.4M', growth: '+8.2%', breakdown: 'Operations: $15.2M, Maintenance: $8.8M, Personnel: $4.4M' },
                  { category: 'Profit Margins', total: '$17.4M', growth: '+18.7%', breakdown: 'Net Profit: 38%, Operating Margin: 42%, EBITDA: 45%' },
                  { category: 'Investment Returns', total: '$32.6M', growth: '+15.3%', breakdown: 'ROI: 28%, Payback Period: 3.2 years, NPV: $8.9M' }
                ].map((financial, index) => (
                  <div key={index} className="border border-gray-200 rounded-lg p-3">
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-medium text-gray-900">{financial.category}</span>
                      <span className="text-sm text-gray-600">{financial.total}</span>
                    </div>
                    <div className="text-sm text-green-600 mb-2">Growth: {financial.growth}</div>
                    <div className="text-xs text-gray-500">{financial.breakdown}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Operational Efficiency Metrics */}
          <div className="mb-6">
            <h4 className="font-medium text-gray-900 mb-3">Operational Efficiency Metrics</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                {[
                  { metric: 'Processing Time', avg: '2.3 days', target: '3 days', efficiency: '92%', trend: 'Improving' },
                  { metric: 'Customer Satisfaction', score: '4.6/5.0', target: '4.5/5.0', efficiency: '102%', trend: 'Stable' },
                  { metric: 'Resource Utilization', rate: '87%', target: '85%', efficiency: '102%', trend: 'Optimal' },
                  { metric: 'Error Rate', rate: '1.2%', target: '2%', efficiency: '167%', trend: 'Excellent' }
                ].map((metric, index) => (
                  <div key={index} className="border border-gray-200 rounded-lg p-3">
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-medium text-gray-900">{metric.metric}</span>
                      <span className="text-sm text-gray-600">{metric.avg || metric.score || metric.rate}</span>
                    </div>
                    <div className="grid grid-cols-2 gap-4 text-sm text-gray-600 mb-2">
                      <div>Target: {metric.target}</div>
                      <div>Efficiency: {metric.efficiency}</div>
                    </div>
                    <div className="text-sm text-green-600">Trend: {metric.trend}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Compliance & Regulatory Status */}
          <div className="mb-6">
            <h4 className="font-medium text-gray-900 mb-3">Compliance & Regulatory Status</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                {[
                  { area: 'Environmental Compliance', status: 'Compliant', score: '98%', audits: 12, violations: 0, nextAudit: '2024-09-15' },
                  { area: 'Safety Standards', status: 'Compliant', score: '96%', audits: 8, violations: 2, nextAudit: '2024-08-20' },
                  { area: 'Quality Assurance', status: 'Compliant', score: '94%', audits: 15, violations: 1, nextAudit: '2024-10-05' },
                  { area: 'Legal Requirements', status: 'Compliant', score: '100%', audits: 6, violations: 0, nextAudit: '2024-12-01' }
                ].map((compliance, index) => (
                  <div key={index} className="border border-gray-200 rounded-lg p-3">
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-medium text-gray-900">{compliance.area}</span>
                      <span className="text-sm text-green-600">{compliance.status}</span>
                    </div>
                    <div className="grid grid-cols-2 gap-4 text-sm text-gray-600 mb-2">
                      <div>Score: {compliance.score}</div>
                      <div>Audits: {compliance.audits}</div>
                      <div>Violations: {compliance.violations}</div>
                      <div>Next: {compliance.nextAudit}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Geographic Distribution */}
          <div className="mb-6">
            <h4 className="font-medium text-gray-900 mb-3">Geographic Distribution & Coverage</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                {[
                  { region: 'North District', projects: 45, value: '$28.5M', population: '125K', coverage: '95%', facilities: 8 },
                  { region: 'South District', projects: 38, value: '$22.3M', population: '98K', coverage: '88%', facilities: 6 },
                  { region: 'East Zone', projects: 32, value: '$18.7M', population: '85K', coverage: '82%', facilities: 5 },
                  { region: 'West District', projects: 28, value: '$15.2M', population: '72K', coverage: '78%', facilities: 4 }
                ].map((region, index) => (
                  <div key={index} className="border border-gray-200 rounded-lg p-3">
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-medium text-gray-900">{region.region}</span>
                      <span className="text-sm text-gray-600">{region.value}</span>
                    </div>
                    <div className="grid grid-cols-2 gap-4 text-sm text-gray-600 mb-2">
                      <div>Projects: {region.projects}</div>
                      <div>Population: {region.population}</div>
                      <div>Coverage: {region.coverage}</div>
                      <div>Facilities: {region.facilities}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Technology & Digital Infrastructure */}
          <div className="mb-6">
            <h4 className="font-medium text-gray-900 mb-3">Technology & Digital Infrastructure</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                {[
                  { system: 'Database Management', status: 'Operational', uptime: '99.8%', users: 1250, dataSize: '2.5TB', lastBackup: '2024-01-15 02:00' },
                  { system: 'Cloud Infrastructure', status: 'Operational', uptime: '99.9%', users: 980, dataSize: '1.8TB', lastBackup: '2024-01-15 01:30' },
                  { system: 'Mobile Applications', status: 'Operational', uptime: '99.5%', users: 2100, dataSize: '500GB', lastBackup: '2024-01-15 03:00' },
                  { system: 'API Services', status: 'Operational', uptime: '99.7%', users: 450, dataSize: '200GB', lastBackup: '2024-01-15 01:45' }
                ].map((system, index) => (
                  <div key={index} className="border border-gray-200 rounded-lg p-3">
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-medium text-gray-900">{system.system}</span>
                      <span className="text-sm text-green-600">{system.status}</span>
                    </div>
                    <div className="grid grid-cols-2 gap-4 text-sm text-gray-600 mb-2">
                      <div>Uptime: {system.uptime}</div>
                      <div>Users: {system.users}</div>
                      <div>Data: {system.dataSize}</div>
                      <div>Backup: {system.lastBackup}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Comparative Analysis */}
      <div className="card">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Service Comparison</h3>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="text-left py-2">Service</th>
                <th className="text-center py-2">Total Items</th>
                <th className="text-center py-2">Active</th>
                <th className="text-center py-2">Pending</th>
                <th className="text-center py-2">Completion Rate</th>
                <th className="text-center py-2">Response Time</th>
                <th className="text-center py-2">Satisfaction</th>
              </tr>
            </thead>
            <tbody>
              {serviceStats.map((service) => (
                <tr key={service.id} className="border-b border-gray-100">
                  <td className="py-2">
                    <div className="flex items-center space-x-2">
                      <div className={`w-3 h-3 rounded-full bg-gradient-to-r ${service.color}`}></div>
                      <span className="font-medium">{service.name}</span>
                    </div>
                  </td>
                  <td className="text-center py-2">{service.totalItems.toLocaleString()}</td>
                  <td className="text-center py-2 text-green-600">{service.activeItems.toLocaleString()}</td>
                  <td className="text-center py-2 text-yellow-600">{service.pendingItems.toLocaleString()}</td>
                  <td className="text-center py-2">{service.performance.completionRate}%</td>
                  <td className="text-center py-2">{service.performance.responseTime} days</td>
                  <td className="text-center py-2">{service.performance.satisfaction}/5.0</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ViewReports;
