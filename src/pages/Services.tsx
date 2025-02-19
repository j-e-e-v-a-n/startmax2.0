import React from 'react';
import { Shield, Lock, Clock, Camera, Home as HomeIcon, Navigation2 } from 'lucide-react';
import { Link } from 'react-router-dom';

const services = [
  {
    icon: Lock,
    title: 'Access Control',
    description: 'State-of-the-art access control systems for businesses and residential properties. Features biometric authentication, card readers, and mobile access.',
    features: [
      'Biometric Authentication',
      'Smart Card Access',
      'Mobile App Integration',
      'Visitor Management',
      'Time-based Access Control'
    ]
  },
  {
    icon: Shield,
    title: 'Automatic Gates',
    description: 'Custom automated gate solutions with remote control capabilities and integration with access control systems.',
    features: [
      'Remote Control Operation',
      'Safety Sensors',
      'Integration with Access Control',
      'Battery Backup',
      'Mobile App Control'
    ]
  },
  {
    icon: Clock,
    title: 'Time & Attendance',
    description: 'Advanced time and attendance tracking systems for workforce management and payroll integration.',
    features: [
      'Biometric Time Tracking',
      'Real-time Attendance Reports',
      'Leave Management',
      'Payroll Integration',
      'Mobile Clock-in/out'
    ]
  },
  {
    icon: Camera,
    title: 'IP CCTV Systems',
    description: 'High-definition surveillance solutions with advanced analytics and remote monitoring capabilities.',
    features: [
      'HD Video Quality',
      'Night Vision',
      'Motion Detection',
      'Cloud Storage',
      'Mobile Viewing'
    ]
  },
  {
    icon: HomeIcon,
    title: 'Home Automation',
    description: 'Smart home solutions that integrate lighting, climate control, security, and entertainment systems.',
    features: [
      'Smart Lighting Control',
      'Climate Control',
      'Security Integration',
      'Voice Control',
      'Energy Management'
    ]
  },
  {
    icon: Navigation2,
    title: 'GPS Tracking',
    description: 'Real-time vehicle and asset tracking solutions for fleet management and security.',
    features: [
      'Real-time Tracking',
      'Route Optimization',
      'Fuel Monitoring',
      'Driver Behavior Analysis',
      'Geofencing'
    ]
  }
];

export function Services() {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-20 pb-32 bg-gradient-to-r from-blue-50 to-blue-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
          <div className="text-center">
            <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
              Our Services
            </h1>
            <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
              Comprehensive security and automation solutions tailored to your needs
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-32">
            {services.map((service, index) => (
              <div 
                key={index}
                id={service.title.toLowerCase().replace(' ', '-')}
                className={`flex flex-col lg:flex-row gap-12 items-center ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                <div className="w-full lg:w-1/2">
                  <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden bg-gray-100 flex items-center justify-center">
                    <service.icon className="h-32 w-32 text-blue-600" />
                  </div>
                </div>
                <div className="w-full lg:w-1/2">
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">{service.title}</h2>
                  <p className="text-lg text-gray-600 mb-6">{service.description}</p>
                  <div className="space-y-4">
                    <h3 className="text-xl font-semibold text-gray-900">Key Features:</h3>
                    <ul className="space-y-2">
                      {service.features.map((feature, fIndex) => (
                        <li key={fIndex} className="flex items-start">
                          <Shield className="h-6 w-6 text-blue-600 mr-2 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-600">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="pt-6">
                      <Link
                        to="/contact"
                        className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors duration-300"
                      >
                        Get Started
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Secure Your Future?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Contact us today for a free consultation and quote
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-4 border border-transparent text-lg font-medium rounded-md text-blue-600 bg-white hover:bg-blue-50 transition-colors duration-300"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}