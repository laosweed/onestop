# Public Service Mobile Application

A comprehensive React-based mobile application for managing public service operations across four core domains: Licensing Management, Building & Construction Permits, Vehicle Registration, and Overseas Truck Permissions.

## 🚀 Features

### 1. Licensing Management
- **Company Identity & License Portfolio**
  - TIN/Tax ID management
  - License types and areas
  - Capital tracking
  - Specialists management
  - Expiry date monitoring
  - Permission extensions

### 2. Building & Construction Permits
- **Projects & Compliance Pack**
  - ESIA (Environmental and Social Impact Assessment)
  - Company & sub-contractors management
  - Site/location & zoning information
  - Height limits tracking
  - Materials/labour "summits"
  - Urban planning/usage compliance
  - Design & regulations
  - Fees/deposits/penalties management

### 3. Vehicle Registration & Extensions
- **Vehicles + Drivers + Inspections/Payments**
  - Driving licenses management
  - Technical tests tracking
  - Road fees management
  - Expired car handling
  - Parking management
  - System integrations

### 4. Overseas Truck Permission
- **Cross-border Operations**
  - Truck/driver records
  - Vehicle specification validation
  - Route permits
  - Validity duration tracking
  - Empty weight registration
  - GPS tracking integration
  - Fees/deposits management
  - Taxes/obligations tracking

## 🛠️ Technology Stack

- **Frontend**: React 18 with TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Routing**: React Router DOM
- **Build Tool**: Create React App
- **Package Manager**: npm

## 📱 Mobile-First Design

The application is designed with a mobile-first approach, featuring:
- Responsive design optimized for mobile devices
- Touch-friendly interface
- Bottom navigation for easy access
- Card-based layouts for better mobile UX
- Optimized typography and spacing

## 🎨 UI/UX Features

- **Modern Design**: Clean, professional interface with consistent design language
- **Status Indicators**: Color-coded badges for different statuses (Active, Pending, Expired)
- **Search & Filter**: Advanced search and filtering capabilities
- **Progress Tracking**: Visual progress indicators for fees and timelines
- **Quick Actions**: Easy access to common operations
- **Real-time Updates**: Live status updates and notifications

## 🚀 Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm (comes with Node.js)

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd public-service-mobile
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm start
   ```

4. **Open your browser**
   Navigate to `http://localhost:3000` to view the application

### Building for Production

```bash
npm run build
```

This creates an optimized production build in the `build` folder.

## 📁 Project Structure

```
src/
├── components/
│   ├── Dashboard.tsx              # Main dashboard with overview
│   ├── LicensingManagement.tsx    # License management module
│   ├── BuildingPermits.tsx        # Building permits module
│   ├── VehicleRegistration.tsx    # Vehicle registration module
│   ├── OverseasTruckPermission.tsx # Overseas truck permissions
│   └── BottomNavigation.tsx       # Mobile navigation
├── utils/
│   └── cn.ts                      # Utility for class names
├── App.tsx                        # Main application component
├── index.tsx                      # Application entry point
└── index.css                      # Global styles and Tailwind imports
```

## 🎯 Core Components

### Dashboard
- Overview of all four domains
- Quick statistics and metrics
- Recent activity feed
- Quick access to all services

### Licensing Management
- Company portfolio management
- License tracking and renewal
- Specialist management
- Fee and capital tracking

### Building Permits
- Project management
- ESIA compliance tracking
- Contractor management
- Site and zoning information

### Vehicle Registration
- Vehicle and driver management
- Inspection scheduling
- Fee management
- Technical test tracking

### Overseas Truck Permissions
- Cross-border permit management
- Route planning and tracking
- GPS integration
- International compliance

## 🔧 Configuration

### Tailwind CSS
The application uses Tailwind CSS for styling. Configuration can be found in `tailwind.config.js`.

### TypeScript
TypeScript configuration is in `tsconfig.json` with strict type checking enabled.

## 📊 Data Management

The application currently uses mock data for demonstration purposes. In a production environment, you would integrate with:

- REST APIs for data fetching
- Real-time databases
- Authentication services
- Payment gateways
- GPS tracking services

## 🔒 Security Considerations

For production deployment, consider implementing:

- User authentication and authorization
- Data encryption
- API security
- Input validation
- Rate limiting
- Audit logging

## 📱 Mobile Optimization

The application is optimized for mobile devices with:

- Responsive breakpoints
- Touch-friendly buttons and interactions
- Optimized loading times
- Progressive Web App (PWA) capabilities
- Offline functionality support

## 🚀 Deployment

### Netlify
1. Connect your repository to Netlify
2. Set build command: `npm run build`
3. Set publish directory: `build`

### Vercel
1. Connect your repository to Vercel
2. Vercel will automatically detect React and deploy

### Other Platforms
The application can be deployed to any static hosting service that supports React applications.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 📞 Support

For support and questions, please contact the development team or create an issue in the repository.

---

**Built with ❤️ for efficient public service management**
