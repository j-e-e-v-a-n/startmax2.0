import React, { useEffect, useRef } from 'react';
import { ChevronRight, Shield, Clock, Camera, Home as HomeIcon, Navigation2, Lock, ArrowRight, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const services = [
  { icon: Lock, title: 'Access Control', description: 'Secure authentication and authorization systems' },
  { icon: Shield, title: 'Automatic Gates', description: 'Custom automated gate solutions' },
  { icon: Clock, title: 'Time & Attendance', description: 'Efficient employee tracking systems' },
  { icon: Camera, title: 'IP CCTV Systems', description: 'Advanced surveillance solutions' },
  { icon: HomeIcon, title: 'Home Automation', description: 'Smart home integration services' },
  { icon: Navigation2, title: 'GPS Tracking', description: 'Real-time vehicle and asset tracking' }
];

const clients = [
  {
    logo: 'https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
    name: 'Tech Corp'
  },
  {
    logo: 'https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
    name: 'Innovate Inc'
  },
  {
    logo: 'https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
    name: 'Future Systems'
  },
  {
    logo: 'https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
    name: 'Smart Solutions'
  },
  {
    logo: 'https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
    name: 'Global Tech'
  },
  {
    logo: 'https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
    name: 'Digital Dynamics'
  }
];

const testimonials = [
  {
    content: "Starmax Systems provided us with an excellent security solution. Their team was professional and the implementation was flawless.",
    author: "John Doe",
    position: "CEO, Tech Corp",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
  },
  {
    content: "The home automation system has transformed our living experience. The team's attention to detail was impressive.",
    author: "Jane Smith",
    position: "Homeowner",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
  },
  {
    content: "Their GPS tracking solution has significantly improved our fleet management efficiency. Highly recommended!",
    author: "Mike Johnson",
    position: "Fleet Manager",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
  },
  {
    content: "Outstanding service and support. The access control system has enhanced our workplace security tremendously.",
    author: "Sarah Williams",
    position: "Operations Director",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
  }
];

export function Home() {
  const clientsRef = useRef<HTMLDivElement>(null);
  const testimonialsRef = useRef<HTMLDivElement>(null);

  const scroll = (ref: React.RefObject<HTMLDivElement>, direction: 'left' | 'right') => {
    if (ref.current) {
      const scrollAmount = direction === 'left' ? -300 : 300;
      ref.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const autoScroll = (ref: HTMLDivElement) => {
      const scrollWidth = ref.scrollWidth;
      const clientWidth = ref.clientWidth;
      let scrollPos = 0;

      const scroll = () => {
        scrollPos += 1;
        if (scrollPos >= scrollWidth - clientWidth) {
          scrollPos = 0;
        }
        ref.scrollLeft = scrollPos;
      };

      const interval = setInterval(scroll, 50);
      return () => clearInterval(interval);
    };

    if (clientsRef.current) {
      const cleanup = autoScroll(clientsRef.current);
      return cleanup;
    }
  }, []);

  return (
    <>
      {/* Hero Section */}
      <section className="pt-20 pb-32 bg-gradient-to-r from-blue-50 to-blue-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
          <div className="text-center">
            <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
              <span className="block">Securing Your Future with</span>
              <span className="block text-blue-600">Advanced Technology</span>
            </h1>
            <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
              Leading provider of security solutions, access control systems, and smart automation services.
            </p>
            <div className="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8">
              <div className="rounded-md shadow">
                <Link to="/contact" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 md:py-4 md:text-lg md:px-10">
                  Get Started
                </Link>
              </div>
              <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3">
                <Link to="/services" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-blue-600 bg-white hover:bg-gray-50 md:py-4 md:text-lg md:px-10">
                  Learn More
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Our Services
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
              Comprehensive security and automation solutions for your needs
            </p>
          </div>

          <div className="mt-20 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <div key={index} className="relative group">
                <div className="h-full flex flex-col items-center p-6 bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <service.icon className="h-12 w-12 text-blue-600 mb-4" />
                  <h3 className="text-lg font-medium text-gray-900">{service.title}</h3>
                  <p className="mt-2 text-base text-gray-500 text-center">{service.description}</p>
                  <Link to={`/services#${service.title.toLowerCase().replace(' ', '-')}`} className="mt-4 flex items-center text-blue-600 hover:text-blue-700">
                    Learn more
                    <ChevronRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Clients Section */}
      <section className="py-20 bg-gray-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Trusted by Industry Leaders
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
              We work with companies of all sizes across various industries
            </p>
          </div>

          <div className="relative">
            <button 
              onClick={() => scroll(clientsRef, 'left')}
              className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white p-2 rounded-full shadow-lg hover:bg-gray-50"
            >
              <ArrowLeft className="h-6 w-6 text-gray-600" />
            </button>
            
            <div 
              ref={clientsRef}
              className="flex space-x-8 overflow-x-hidden scroll-smooth"
            >
              {[...clients, ...clients].map((client, index) => (
                <div key={index} className="flex-none w-48">
                  <img
                    className="h-12 w-auto grayscale hover:grayscale-0 transition-all duration-300"
                    src={client.logo}
                    alt={client.name}
                  />
                </div>
              ))}
            </div>

            <button 
              onClick={() => scroll(clientsRef, 'right')}
              className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white p-2 rounded-full shadow-lg hover:bg-gray-50"
            >
              <ArrowRight className="h-6 w-6 text-gray-600" />
            </button>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              What Our Clients Say
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
              Hear from our satisfied customers about their experience with Starmax Systems
            </p>
          </div>

          <div className="relative">
            <button 
              onClick={() => scroll(testimonialsRef, 'left')}
              className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white p-2 rounded-full shadow-lg hover:bg-gray-50"
            >
              <ArrowLeft className="h-6 w-6 text-gray-600" />
            </button>

            <div 
              ref={testimonialsRef}
              className="flex space-x-8 overflow-x-auto scroll-smooth hide-scrollbar pb-4"
            >
              {testimonials.map((testimonial, index) => (
                <div key={index} className="flex-none w-full md:w-[400px] bg-gray-50 p-8 rounded-lg shadow-sm">
                  <p className="text-gray-600 italic mb-6">{testimonial.content}</p>
                  <div className="flex items-center">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.author}
                      className="h-12 w-12 rounded-full object-cover"
                    />
                    <div className="ml-4">
                      <p className="font-semibold text-gray-900">{testimonial.author}</p>
                      <p className="text-gray-500">{testimonial.position}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <button 
              onClick={() => scroll(testimonialsRef, 'right')}
              className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white p-2 rounded-full shadow-lg hover:bg-gray-50"
            >
              <ArrowRight className="h-6 w-6 text-gray-600" />
            </button>
          </div>
        </div>
      </section>
    </>
  );
}