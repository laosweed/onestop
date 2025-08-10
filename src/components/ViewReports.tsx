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
  Users,
  DollarSign,
  CheckCircle,
  AlertTriangle,
  Clock,
  Eye,
  PieChart,
  Activity
} from 'lucide-react';

const ViewReports = () => {
  const [selectedPeriod, setSelectedPeriod] = useState('month');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [showFilters, setShowFilters] = useState(false);

  const reportCategories = [
    { id: 'all', name: 'All Services', icon: Activity },
    { id: 'licensing', name: 'Licensing', icon: FileText },
    { id: 'building', name: 'Building Permits', icon: Building },
    { id: 'vehicles', name: 'Vehicle Registration', icon: Car },
    { id: 'overseas', name: 'Overseas Permission', icon: Truck }
  ];

  const timePeriods = [
    { id: 'week', name: 'Last Week' },
    { id: 'month', name: 'Last Month' },
    { id: 'quarter', name: 'Last Quarter' },
    { id: 'year', name: 'Last Year' }
  ];

  const keyMetrics = [
    {
      title: 'Total Applications',
      value: '1,247',
      change: '+12.5%',
      trend: 'up',
      icon: FileText,
      color: 'text-blue-600',
      bgColor: 'bg-blue-50'
    },
    {
      title: 'Approval Rate',
      value: '94.2%',
      change: '+2.1%',
      trend: 'up',
      icon: CheckCircle,
      color: 'text-green-600',
      bgColor: 'bg-green-50'
    },
    {
      title: 'Pending Reviews',
      value: '89',
      change: '-8.3%',
      trend: 'down',
      icon: Clock,
      color: 'text-orange-600',
      bgColor: 'bg-orange-50'
    },
    {
      title: 'Revenue Generated',
      value: '$124.5K',
      change: '+18.7%',
      trend: 'up',
      icon: DollarSign,
      color: 'text-purple-600',
      bgColor: 'bg-purple-50'
    }
  ];

  const serviceReports = [
    {
      service: 'Licensing Management',
      applications: 342,
      approved: 321,
      pending: 15,
      rejected: 6,
      revenue: '$45.2K',
      avgProcessingTime: '5.2 days',
      icon: FileText,
      color: 'text-blue-600'
    },
    {
      service: 'Building Permits',
      applications: 189,
      approved: 176,
      pending: 8,
      rejected: 5,
      revenue: '$67.8K',
      avgProcessingTime: '12.7 days',
      icon: Building,
      color: 'text-green-600'
    },
    {
      service: 'Vehicle Registration',
      applications: 523,
      approved: 495,
      pending: 22,
      rejected: 6,
      revenue: '$8.9K',
      avgProcessingTime: '2.1 days',
      icon: Car,
      color: 'text-purple-600'
    },
    {
      service: 'Overseas Permission',
      applications: 193,
      approved: 182,
      pending: 8,
      rejected: 3,
      revenue: '$2.6K',
      avgProcessingTime: '7.8 days',
      icon: Truck,
      color: 'text-orange-600'
    }
  ];

  const monthlyData = [
    { month: 'Jan', applications: 98, revenue: 12.4 },
    { month: 'Feb', applications: 112, revenue: 15.2 },
    { month: 'Mar', applications: 134, revenue: 18.7 },
    { month: 'Apr', applications: 125, revenue: 16.9 },
    { month: 'May', applications: 156, revenue: 21.3 },
    { month: 'Jun', applications: 142, revenue: 19.8 },
    { month: 'Jul', applications: 167, revenue: 23.1 },
    { month: 'Aug', applications: 189, revenue: 26.4 },
    { month: 'Sep', applications: 178, revenue: 24.7 },
    { month: 'Oct', applications: 195, revenue: 28.2 },
    { month: 'Nov', applications: 203, revenue: 29.8 },
    { month: 'Dec', applications: 187, revenue: 27.5 }
  ];

  const maxApplications = Math.max(...monthlyData.map(d => d.applications));
  const maxRevenue = Math.max(...monthlyData.map(d => d.revenue));

  return (
    <div className="p-4 space-y-6">
      {/* Header */}
      <div className="text-center space-y-2">
        <div className="flex items-center justify-center space-x-2">
          <BarChart3 className="w-8 h-8 text-primary-600" />
          <h1 className="text-2xl font-bold text-gray-900">Reports & Analytics</h1>
        </div>
        <p className="text-gray-600">Comprehensive insights and performance metrics</p>
      </div>

      {/* Filters */}
      <div className="card">
        <div className="flex items-center justify-between mb-4">
          <h3 className="font-semibold text-gray-900">Filters</h3>
          <button
            onClick={() => setShowFilters(!showFilters)}
            className="btn-secondary"
          >
            <Filter className="w-4 h-4 mr-2" />
            {showFilters ? 'Hide' : 'Show'} Filters
          </button>
        </div>

        {showFilters && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Time Period</label>
              <select
                value={selectedPeriod}
                onChange={(e) => setSelectedPeriod(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
              >
                {timePeriods.map(period => (
                  <option key={period.id} value={period.id}>{period.name}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Service Category</label>
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
              >
                {reportCategories.map(category => (
                  <option key={category.id} value={category.id}>{category.name}</option>
                ))}
              </select>
            </div>
          </div>
        )}
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-2 gap-3">
        {keyMetrics.map((metric, index) => {
          const Icon = metric.icon;
          const TrendIcon = metric.trend === 'up' ? TrendingUp : TrendingDown;
          
          return (
            <div key={index} className="card">
              <div className="flex items-start justify-between mb-2">
                <div className={`p-2 rounded-lg ${metric.bgColor}`}>
                  <Icon className={`w-5 h-5 ${metric.color}`} />
                </div>
                <div className={`flex items-center space-x-1 text-xs ${
                  metric.trend === 'up' ? 'text-green-600' : 'text-red-600'
                }`}>
                  <TrendIcon className="w-3 h-3" />
                  <span>{metric.change}</span>
                </div>
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-900">{metric.value}</h3>
                <p className="text-sm text-gray-600">{metric.title}</p>
              </div>
            </div>
          );
        })}
      </div>

      {/* Monthly Trends Chart */}
      <div className="card">
        <div className="flex items-center justify-between mb-4">
          <h3 className="font-semibold text-gray-900">Monthly Trends</h3>
          <button className="btn-secondary">
            <Download className="w-4 h-4 mr-2" />
            Export
          </button>
        </div>
        
        <div className="space-y-4">
          {/* Applications Chart */}
          <div>
            <h4 className="text-sm font-medium text-gray-700 mb-2">Applications Processed</h4>
            <div className="flex items-end space-x-1 h-32">
              {monthlyData.map((data, index) => (
                <div key={index} className="flex-1 flex flex-col items-center">
                  <div 
                    className="w-full bg-blue-500 rounded-t"
                    style={{ height: `${(data.applications / maxApplications) * 100}%` }}
                  ></div>
                  <span className="text-xs text-gray-600 mt-1">{data.month}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Revenue Chart */}
          <div>
            <h4 className="text-sm font-medium text-gray-700 mb-2">Revenue Generated ($K)</h4>
            <div className="flex items-end space-x-1 h-32">
              {monthlyData.map((data, index) => (
                <div key={index} className="flex-1 flex flex-col items-center">
                  <div 
                    className="w-full bg-green-500 rounded-t"
                    style={{ height: `${(data.revenue / maxRevenue) * 100}%` }}
                  ></div>
                  <span className="text-xs text-gray-600 mt-1">{data.month}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Service Performance */}
      <div className="card">
        <div className="flex items-center justify-between mb-4">
          <h3 className="font-semibold text-gray-900">Service Performance</h3>
          <button className="btn-secondary">
            <Eye className="w-4 h-4 mr-2" />
            View Details
          </button>
        </div>
        
        <div className="space-y-4">
          {serviceReports.map((service, index) => {
            const Icon = service.icon;
            const approvalRate = ((service.approved / service.applications) * 100).toFixed(1);
            
            return (
              <div key={index} className="border border-gray-200 rounded-lg p-4">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center space-x-3">
                    <Icon className={`w-5 h-5 ${service.color}`} />
                    <div>
                      <h4 className="font-medium text-gray-900">{service.service}</h4>
                      <p className="text-sm text-gray-600">
                        {service.applications} applications • {approvalRate}% approval rate
                      </p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-semibold text-gray-900">{service.revenue}</p>
                    <p className="text-sm text-gray-600">Revenue</p>
                  </div>
                </div>
                
                <div className="grid grid-cols-4 gap-3 text-center">
                  <div>
                    <p className="text-lg font-semibold text-green-600">{service.approved}</p>
                    <p className="text-xs text-gray-600">Approved</p>
                  </div>
                  <div>
                    <p className="text-lg font-semibold text-orange-600">{service.pending}</p>
                    <p className="text-xs text-gray-600">Pending</p>
                  </div>
                  <div>
                    <p className="text-lg font-semibold text-red-600">{service.rejected}</p>
                    <p className="text-xs text-gray-600">Rejected</p>
                  </div>
                  <div>
                    <p className="text-lg font-semibold text-blue-600">{service.avgProcessingTime}</p>
                    <p className="text-xs text-gray-600">Avg Time</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Quick Actions */}
      <div className="card">
        <h3 className="font-semibold text-gray-900 mb-4">Quick Actions</h3>
        <div className="grid grid-cols-2 gap-3">
          <button className="btn-secondary flex items-center space-x-2">
            <Download className="w-4 h-4" />
            <span>Export All Data</span>
          </button>
          <button className="btn-secondary flex items-center space-x-2">
            <Calendar className="w-4 h-4" />
            <span>Schedule Report</span>
          </button>
          <button className="btn-secondary flex items-center space-x-2">
            <PieChart className="w-4 h-4" />
            <span>Custom Analysis</span>
          </button>
          <button className="btn-secondary flex items-center space-x-2">
            <Users className="w-4 h-4" />
            <span>Team Performance</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ViewReports;
