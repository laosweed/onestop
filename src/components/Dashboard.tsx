import React from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  FileText, 
  Building, 
  Car, 
  Truck, 
  TrendingUp, 
  AlertTriangle,
  CheckCircle,
  Clock,
  Plus,
  Search,
  Filter,
  Star,
  Zap,
  Shield,
  Globe,
  Users,
  Settings,
  BarChart3,
  PieChart,
  Activity,
  ArrowUp,
  ArrowDown,
  Calendar,
  DollarSign
} from 'lucide-react';

const Dashboard = () => {
  const navigate = useNavigate();

  const serviceCategories = [
    {
      id: 'licensing',
      title: 'Licensing Management',
      subtitle: 'Registration Numbers, Renewals & Capital',
      icon: FileText,
      path: '/licensing',
      color: 'from-blue-500 to-blue-600',
      bgColor: 'bg-blue-50',
      iconColor: 'text-blue-600',
      stats: { active: 12, expired: 3, pending: 2 },
      priority: 'high',
      features: [
        'Application/Renewal Forms',
        'Document Uploads',
        'License Status Tracking',
        'Expiry Date Notifications'
      ],
      chartData: {
        monthly: [8, 10, 12, 11, 13, 12, 14, 13, 15, 14, 16, 12],
        categories: ['Registration Numbers', 'License Renewals', 'Specialist Info', 'Registered Capital'],
        categoryData: [40, 30, 20, 10],
        trend: '+12%',
        trendDirection: 'up'
      }
    },
    {
      id: 'building',
      title: 'Building & Construction',
      subtitle: 'Projects & Compliance',
      icon: Building,
      path: '/building',
      color: 'from-green-500 to-green-600',
      bgColor: 'bg-green-50',
      iconColor: 'text-green-600',
      stats: { active: 8, expired: 1, pending: 5 },
      priority: 'medium',
      chartData: {
        monthly: [5, 6, 7, 8, 7, 9, 8, 10, 9, 11, 10, 8],
        categories: ['ESIA', 'Site Planning', 'Materials', 'Fees'],
        categoryData: [40, 25, 20, 15],
        trend: '+8%',
        trendDirection: 'up'
      }
    },
    {
      id: 'vehicles',
      title: 'Vehicle Registration',
      subtitle: 'Cars, Trucks & Inspections',
      icon: Car,
      path: '/vehicles',
      color: 'from-purple-500 to-purple-600',
      bgColor: 'bg-purple-50',
      iconColor: 'text-purple-600',
      stats: { active: 25, expired: 7, pending: 3 },
      priority: 'high',
      chartData: {
        monthly: [20, 22, 25, 23, 26, 24, 28, 26, 30, 28, 32, 25],
        categories: ['Cars', 'Trucks', 'Inspections', 'Licenses'],
        categoryData: [50, 25, 15, 10],
        trend: '+15%',
        trendDirection: 'up'
      }
    },
    {
      id: 'overseas',
      title: 'Overseas Permission',
      subtitle: 'Cross-Border Operations',
      icon: Truck,
      path: '/overseas',
      color: 'from-orange-500 to-orange-600',
      bgColor: 'bg-orange-50',
      iconColor: 'text-orange-600',
      stats: { active: 6, expired: 2, pending: 1 },
      priority: 'medium',
      chartData: {
        monthly: [4, 5, 6, 5, 7, 6, 8, 7, 9, 8, 10, 6],
        categories: ['Route Permits', 'GPS Tracking', 'Weight Reg', 'Taxes'],
        categoryData: [35, 30, 20, 15],
        trend: '+5%',
        trendDirection: 'up'
      }
    }
  ];

  const quickStats = [
    { label: 'Total Active', value: '51', icon: CheckCircle, color: 'text-success-600', bgColor: 'bg-success-50', change: '+12%', trend: 'up' },
    { label: 'Expiring Soon', value: '13', icon: Clock, color: 'text-warning-600', bgColor: 'bg-warning-50', change: '-5%', trend: 'down' },
    { label: 'Pending Review', value: '11', icon: AlertTriangle, color: 'text-danger-600', bgColor: 'bg-danger-50', change: '+8%', trend: 'up' },
  ];

  const quickActions = [
    { label: 'New License', icon: Plus, action: () => navigate('/licensing') },
    { label: 'Search', icon: Search, action: () => {} },
    { label: 'Settings', icon: Settings, action: () => {} },
  ];

  // Simple bar chart component
  const BarChart = ({ data, color }: { data: number[], color: string }) => {
    const maxValue = Math.max(...data);
    return (
      <div className="flex items-end space-x-1 h-16">
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

  // Simple pie chart component
  const PieChartComponent = ({ data, colors }: { data: number[], colors: string[] }) => {
    const total = data.reduce((sum, value) => sum + value, 0);
    let currentAngle = 0;
    
    return (
      <div className="relative w-16 h-16">
        <svg className="w-16 h-16 transform -rotate-90" viewBox="0 0 32 32">
          {data.map((value, index) => {
            const percentage = (value / total) * 100;
            const angle = (percentage / 100) * 360;
            const x1 = 16 + 16 * Math.cos((currentAngle * Math.PI) / 180);
            const y1 = 16 + 16 * Math.sin((currentAngle * Math.PI) / 180);
            const x2 = 16 + 16 * Math.cos(((currentAngle + angle) * Math.PI) / 180);
            const y2 = 16 + 16 * Math.sin(((currentAngle + angle) * Math.PI) / 180);
            
            const largeArcFlag = angle > 180 ? 1 : 0;
            
            const pathData = [
              `M 16 16`,
              `L ${x1} ${y1}`,
              `A 16 16 0 ${largeArcFlag} 1 ${x2} ${y2}`,
              'Z'
            ].join(' ');
            
            currentAngle += angle;
            
            return (
              <path
                key={index}
                d={pathData}
                fill={colors[index]}
                stroke="white"
                strokeWidth="0.5"
              />
            );
          })}
        </svg>
      </div>
    );
  };

  return (
    <div className="p-4 space-y-6">
      {/* Enhanced Header */}
      <div className="text-center space-y-2">
        <div className="flex items-center justify-center space-x-2">
          <Shield className="w-8 h-8 text-primary-600" />
          <h1 className="text-2xl font-bold text-gray-900">Public Service</h1>
        </div>
        <p className="text-gray-600">Comprehensive Management Dashboard</p>
        <div className="flex items-center justify-center space-x-1 text-sm text-gray-500">
          <Star className="w-4 h-4 text-yellow-500" />
          <span>Premium Service Portal</span>
        </div>
      </div>



      {/* Enhanced Quick Stats with Trends */}
      <div className="grid grid-cols-3 gap-3">
        {quickStats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <div key={index} className={`${stat.bgColor} rounded-xl p-4 text-center border border-gray-100`}>
              <Icon className={`w-6 h-6 mx-auto mb-2 ${stat.color}`} />
              <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
              <div className="text-xs text-gray-600 font-medium">{stat.label}</div>
              <div className={`flex items-center justify-center space-x-1 text-xs mt-1 ${
                stat.trend === 'up' ? 'text-success-600' : 'text-danger-600'
              }`}>
                {stat.trend === 'up' ? <ArrowUp className="w-3 h-3" /> : <ArrowDown className="w-3 h-3" />}
                <span>{stat.change}</span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Services as Icons Grid */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-xl font-bold text-gray-900">Services</h2>
            <p className="text-sm text-gray-600">Access your public service operations</p>
          </div>
          <button className="p-2 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors duration-200">
            <Filter className="w-5 h-5 text-gray-600" />
          </button>
        </div>

        {/* Services Icons Grid */}
        <div className="grid grid-cols-2 gap-4">
          {serviceCategories.map((service, index) => {
            const Icon = service.icon;
            
            return (
              <div
                key={index}
                onClick={() => navigate(service.path)}
                className="bg-white rounded-xl p-4 cursor-pointer hover:shadow-lg transition-all duration-300 border border-gray-100 hover:border-gray-200 text-center group"
              >
                {/* Service Icon Container */}
                <div className="relative mb-3">
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${service.color} text-white shadow-lg group-hover:shadow-xl transition-all duration-300 transform group-hover:scale-105`}>
                    <Icon size={28} />
                  </div>
                  
                  {/* Status Indicator */}
                  <div className="absolute -top-1 -right-1">
                    <div className={`w-4 h-4 rounded-full border-2 border-white ${
                      service.stats.active > service.stats.expired ? 'bg-success-500' : 
                      service.stats.pending > 0 ? 'bg-warning-500' : 'bg-danger-500'
                    }`}></div>
                  </div>
                </div>
                
                {/* Service Title */}
                <h3 className="font-semibold text-gray-900 text-sm mb-1">{service.title}</h3>
                
                {/* Service Subtitle */}
                <p className="text-xs text-gray-500 mb-3">{service.subtitle}</p>
                
                {/* Quick Stats */}
                <div className="flex items-center justify-center space-x-3 text-xs">
                  <div className="flex items-center space-x-1">
                    <div className="w-2 h-2 bg-success-500 rounded-full"></div>
                    <span className="text-success-600 font-medium">{service.stats.active}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <div className="w-2 h-2 bg-warning-500 rounded-full"></div>
                    <span className="text-warning-600 font-medium">{service.stats.pending}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <div className="w-2 h-2 bg-danger-500 rounded-full"></div>
                    <span className="text-danger-600 font-medium">{service.stats.expired}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Module Statistics & Graphs */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-xl font-bold text-gray-900">Module Statistics</h2>
            <p className="text-sm text-gray-600">Detailed analytics for each service module</p>
          </div>
          <div className="flex space-x-2">
            <button className="p-2 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors duration-200">
              <BarChart3 className="w-5 h-5 text-gray-600" />
            </button>
            <button className="p-2 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors duration-200">
              <PieChart className="w-5 h-5 text-gray-600" />
            </button>
          </div>
        </div>

        {/* Module Stats Grid */}
        <div className="grid grid-cols-1 gap-4">
          {serviceCategories.map((service, index) => {
            const Icon = service.icon;
            const totalItems = service.stats.active + service.stats.expired + service.stats.pending;
            const completionRate = Math.round((service.stats.active / totalItems) * 100);
            
            return (
              <div key={index} className="bg-white rounded-xl p-4 border border-gray-100">
                {/* Module Header */}
                <div className="flex items-center space-x-3 mb-4">
                  <div className={`p-2 rounded-lg bg-gradient-to-r ${service.color} text-white`}>
                    <Icon size={20} />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-900">{service.title}</h3>
                    <p className="text-sm text-gray-600">{service.subtitle}</p>
                  </div>
                  <div className="text-right">
                    <div className="text-lg font-bold text-gray-900">{totalItems}</div>
                    <div className="text-xs text-gray-500">Total Items</div>
                  </div>
                </div>

                {/* Stats and Charts Row */}
                <div className="grid grid-cols-3 gap-4">
                  {/* Key Metrics */}
                  <div className="space-y-3">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-success-600">{service.stats.active}</div>
                      <div className="text-xs text-gray-500">Active</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-warning-600">{service.stats.pending}</div>
                      <div className="text-xs text-gray-500">Pending</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-danger-600">{service.stats.expired}</div>
                      <div className="text-xs text-gray-500">Expired</div>
                    </div>
                  </div>

                  {/* Monthly Trend Chart */}
                  <div className="space-y-2">
                    <div className="text-xs font-medium text-gray-700">Monthly Trend</div>
                    <BarChart 
                      data={service.chartData.monthly.slice(-6)} 
                      color={`bg-gradient-to-t ${service.color}`}
                    />
                    <div className="text-xs text-gray-500 text-center">Last 6 months</div>
                  </div>

                  {/* Category Distribution */}
                  <div className="space-y-2">
                    <div className="text-xs font-medium text-gray-700">Distribution</div>
                    <div className="flex justify-center">
                      <PieChartComponent 
                        data={service.chartData.categoryData}
                        colors={['#3b82f6', '#10b981', '#f59e0b', '#ef4444']}
                      />
                    </div>
                    <div className="space-y-1">
                      {service.chartData.categories.map((category, catIndex) => (
                        <div key={catIndex} className="flex items-center space-x-2 text-xs">
                          <div 
                            className="w-2 h-2 rounded-full"
                            style={{ backgroundColor: ['#3b82f6', '#10b981', '#f59e0b', '#ef4444'][catIndex] }}
                          ></div>
                          <span className="text-gray-600">{category}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Progress and Actions */}
                <div className="mt-4 pt-4 border-t border-gray-100">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <Activity className="w-4 h-4 text-gray-400" />
                      <span className="text-sm text-gray-600">Completion Rate</span>
                    </div>
                    <span className="text-sm font-medium text-gray-900">{completionRate}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
                    <div 
                      className={`h-2 rounded-full bg-gradient-to-r ${service.color}`}
                      style={{ width: `${completionRate}%` }}
                    ></div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Enhanced Recent Activity */}
      <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
        <div className="flex items-center justify-between mb-4">
          <h3 className="font-bold text-gray-900">Recent Activity</h3>
          <button className="text-sm text-primary-600 hover:text-primary-700 font-medium">
            View All
          </button>
        </div>
        <div className="space-y-3">
          <div className="flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-50 transition-colors duration-200">
            <div className="w-2 h-2 bg-success-500 rounded-full"></div>
            <div className="flex-1">
              <span className="text-sm text-gray-700 font-medium">Building permit approved</span>
              <div className="text-xs text-gray-500">Project Alpha • 2h ago</div>
            </div>
            <CheckCircle className="w-4 h-4 text-success-500" />
          </div>
          <div className="flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-50 transition-colors duration-200">
            <div className="w-2 h-2 bg-warning-500 rounded-full"></div>
            <div className="flex-1">
              <span className="text-sm text-gray-700 font-medium">Vehicle registration renewal due</span>
              <div className="text-xs text-gray-500">7 days remaining • 5h ago</div>
            </div>
            <Clock className="w-4 h-4 text-warning-500" />
          </div>
          <div className="flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-50 transition-colors duration-200">
            <div className="w-2 h-2 bg-danger-500 rounded-full"></div>
            <div className="flex-1">
              <span className="text-sm text-gray-700 font-medium">Overseas truck permit expired</span>
              <div className="text-xs text-gray-500">Requires immediate attention • 1d ago</div>
            </div>
            <AlertTriangle className="w-4 h-4 text-danger-500" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
