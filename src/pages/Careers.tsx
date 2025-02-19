import React from 'react';
import { Briefcase, GraduationCap, Clock, MapPin } from 'lucide-react';

const jobs = [
  {
    title: 'Security Systems Engineer',
    location: 'Kochi, Kerala',
    type: 'Full-time',
    experience: '3-5 years',
    description: 'We are looking for an experienced Security Systems Engineer to join our team.',
    requirements: [
      'Bachelor s degree in Electronics/Electrical Engineering',
      'Experience with CCTV and access control systems',
      'Strong problem-solving skills',
      'Excellent communication abilities'
    ]
  },
  {
    title: 'Home Automation Specialist',
    location: 'Calicut, Kerala',
    type: 'Full-time',
    experience: '2-4 years',
    description: 'Join our team as a Home Automation Specialist to design and implement smart home solutions.',
    requirements: [
      'Experience with home automation systems',
      'Knowledge of IoT technologies',
      'Customer service orientation',
      'Project management skills'
    ]
  }
];

export function Careers() {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-20 pb-32 bg-gradient-to-r from-blue-50 to-blue-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
          <div className="text-center">
            <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
              Join Our Team
            </h1>
            <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
              Build your career with the leader in security and automation solutions
            </p>
          </div>
        </div>
      </section>

      {/* Why Join Us */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900">Why Join Starmax Systems?</h2>
            <p className="mt-4 text-xl text-gray-600">Discover the benefits of being part of our team</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-8 rounded-lg">
              <GraduationCap className="h-12 w-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Learning & Growth</h3>
              <p className="text-gray-600">Continuous learning opportunities and professional development programs.</p>
            </div>
            <div className="bg-gray-50 p-8 rounded-lg">
              <Briefcase className="h-12 w-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Career Development</h3>
              <p className="text-gray-600">Clear career paths and opportunities for advancement.</p>
            </div>
            <div className="bg-gray-50 p-8 rounded-lg">
              <Clock className="h-12 w-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Work-Life Balance</h3>
              <p className="text-gray-600">Flexible working hours and a supportive work environment.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900">Open Positions</h2>
            <p className="mt-4 text-xl text-gray-600">Join our growing team of professionals</p>
          </div>

          <div className="space-y-8">
            {jobs.map((job, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-sm">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                  <div>
                    <h3 className="text-2xl font-semibold text-gray-900 mb-2">{job.title}</h3>
                    <div className="flex flex-wrap gap-4 text-gray-600 mb-4">
                      <div className="flex items-center">
                        <MapPin className="h-5 w-5 mr-2" />
                        {job.location}
                      </div>
                      <div className="flex items-center">
                        <Briefcase className="h-5 w-5 mr-2" />
                        {job.type}
                      </div>
                      <div className="flex items-center">
                        <Clock className="h-5 w-5 mr-2" />
                        {job.experience}
                      </div>
                    </div>
                  </div>
                  <button className="mt-4 md:mt-0 inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700">
                    Apply Now
                  </button>
                </div>
                <p className="text-gray-600 mb-4">{job.description}</p>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Requirements:</h4>
                  <ul className="list-disc list-inside text-gray-600 space-y-1">
                    {job.requirements.map((req, rIndex) => (
                      <li key={rIndex}>{req}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}