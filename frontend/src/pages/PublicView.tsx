import React from 'react';
import Card from '../components/Card';
import { Eye, MapPin, Calendar, DollarSign, Blocks as Blockchain, Users, Shield } from 'lucide-react';

const PublicView = () => {
  const ongoingProjects = [
    {
      name: 'Youth Centre Renovation',
      location: 'Suva, Fiji',
      budget: '$150,000',
      progress: 75,
      contractor: 'Pacific Builders',
      startDate: '2024-09-15',
      expectedCompletion: '2025-03-30',
    },
    {
      name: 'Bridge Maintenance Program',
      location: 'Vanuatu',
      budget: '$320,000',
      progress: 45,
      contractor: 'Island Infrastructure',
      startDate: '2024-11-01',
      expectedCompletion: '2025-05-15',
    },
    {
      name: 'Coastal Resilience Project',
      location: 'Tonga',
      budget: '$580,000',
      progress: 30,
      contractor: 'Oceanic Solutions',
      startDate: '2024-12-01',
      expectedCompletion: '2025-08-30',
    },
  ];

  const blockchainBenefits = [
    {
      title: 'Immutable Records',
      description: 'All transactions are permanently recorded and cannot be altered',
      icon: Shield,
    },
    {
      title: 'Public Accessibility',
      description: 'Anyone can verify fund usage and project progress',
      icon: Eye,
    },
    {
      title: 'Automated Payments',
      description: 'Smart contracts release funds automatically when milestones are met',
      icon: DollarSign,
    },
  ];

  return (
    <div className="min-h-screen bg-background py-8 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Hero Section */}
        <section 
          className="relative h-64 flex items-center justify-center text-white mb-8 rounded-xl overflow-hidden"
          style={{
            backgroundImage: 'linear-gradient(rgba(0, 123, 167, 0.7), rgba(46, 139, 87, 0.7)), url(https://images.unsplash.com/photo-1591522810744-f4f065f994b0?auto=format&fit=crop&w=1500&q=80)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}
        >
          <div className="text-center max-w-4xl mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
              Community Transparency
            </h1>
            <p className="text-lg md:text-xl text-gray-100 leading-relaxed">
              Public users can view project status, costs, and completion updates for community visibility.
            </p>
          </div>
        </section>

        <div className="mb-8">
          <h2 className="text-3xl font-bold text-text mb-2">Live Project Tracking</h2>
          <p className="text-gray-600">Real-time transparency for all community projects</p>
        </div>

        {/* Stats Overview */}
        <div className="grid md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-xl shadow-lg p-6 text-center">
            <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <DollarSign className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-2xl font-bold text-text">$2.4M</h3>
            <p className="text-gray-600">Total Funded</p>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-6 text-center">
            <div className="bg-accent/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <Eye className="h-8 w-8 text-accent" />
            </div>
            <h3 className="text-2xl font-bold text-text">24</h3>
            <p className="text-gray-600">Active Projects</p>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-6 text-center">
            <div className="bg-secondary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <Users className="h-8 w-8 text-secondary/80" />
            </div>
            <h3 className="text-2xl font-bold text-text">12</h3>
            <p className="text-gray-600">Communities</p>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-6 text-center">
            <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <Shield className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-2xl font-bold text-text">100%</h3>
            <p className="text-gray-600">Transparent</p>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <Card title="Live Projects">
              <div className="space-y-6">
                {ongoingProjects.map((project, index) => (
                  <div key={index} className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h4 className="text-xl font-semibold text-text mb-2">{project.name}</h4>
                        <div className="flex items-center space-x-4 text-sm text-gray-600">
                          <div className="flex items-center space-x-1">
                            <MapPin className="h-4 w-4" />
                            <span>{project.location}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <DollarSign className="h-4 w-4" />
                            <span>{project.budget}</span>
                          </div>
                        </div>
                      </div>
                      <span className="text-2xl font-bold text-primary">{project.progress}%</span>
                    </div>
                    
                    <div className="mb-4">
                      <div className="w-full bg-gray-200 rounded-full h-3">
                        <div 
                          className="bg-primary h-3 rounded-full transition-all duration-300"
                          style={{ width: `${project.progress}%` }}
                        ></div>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4 text-sm text-gray-600">
                      <div>
                        <span className="font-medium">Contractor:</span>
                        <p>{project.contractor}</p>
                      </div>
                      <div>
                        <span className="font-medium">Started:</span>
                        <p>{new Date(project.startDate).toLocaleDateString()}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </div>

          <div>
            <Card title="How Blockchain Helps">
              <div className="space-y-6">
                <p className="text-gray-600 leading-relaxed">
                  All transactions are public, secure, and auditable. Our blockchain infrastructure ensures complete transparency in fund management.
                </p>

                <div className="space-y-4">
                  {blockchainBenefits.map((benefit, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <div className="bg-primary/10 rounded-full w-10 h-10 flex items-center justify-center flex-shrink-0">
                        <benefit.icon className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h5 className="font-semibold text-text mb-1">{benefit.title}</h5>
                        <p className="text-sm text-gray-600">{benefit.description}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="bg-accent/10 rounded-lg p-4 mt-6">
                  <div className="flex items-center space-x-2 mb-2">
                    <Blockchain className="h-5 w-5 text-accent" />
                    <span className="font-semibold text-text">Powered by Polygon</span>
                  </div>
                  <p className="text-sm text-gray-600">
                    Fast, secure, and environmentally friendly blockchain technology
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PublicView;