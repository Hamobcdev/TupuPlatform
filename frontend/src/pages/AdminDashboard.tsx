import React, { useState } from 'react';
import Card from '../components/Card';
import { Plus, Eye, Settings, BarChart3, Users, DollarSign } from 'lucide-react';

const AdminDashboard = () => {
  const [showModal, setShowModal] = useState(false);
  
  const projects = ['Water Security Initiative', 'Solar Schools Program', 'Emergency Clinics Network'];
  const stats = [
    { label: 'Total Projects', value: '24', icon: BarChart3, color: 'text-primary' },
    { label: 'Active Contractors', value: '12', icon: Users, color: 'text-accent' },
    { label: 'Funds Disbursed', value: '$2.4M', icon: DollarSign, color: 'text-secondary' },
  ];

  return (
    <div className="min-h-screen bg-background py-8 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Hero Section */}
        <section 
          className="relative h-64 flex items-center justify-center text-white mb-8 rounded-xl overflow-hidden"
          style={{
            backgroundImage: 'linear-gradient(rgba(0, 123, 167, 0.7), rgba(46, 139, 87, 0.7)), url(https://images.unsplash.com/photo-1614064548237-096f72de6bb4?auto=format&fit=crop&w=1500&q=80)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}
        >
          <div className="text-center max-w-4xl mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
              Admin Tools
            </h1>
            <p className="text-lg md:text-xl text-gray-100 leading-relaxed">
              Admins can create projects, assign stakeholders, track contracts, and verify progress in real time.
            </p>
          </div>
        </section>

        <div className="mb-8">
          <h2 className="text-3xl font-bold text-text mb-2">Project Management</h2>
          <p className="text-gray-600">Create and oversee transparent funding projects</p>
        </div>

        {/* Stats */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-600 text-sm font-medium">{stat.label}</p>
                  <p className="text-3xl font-bold text-text">{stat.value}</p>
                </div>
                <stat.icon className={`h-12 w-12 ${stat.color}`} />
              </div>
            </div>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          <Card 
            title="Create New Project"
            onClick={() => setShowModal(true)}
            className="border-2 border-dashed border-primary/30 hover:border-primary/60"
          >
            <div className="flex flex-col items-center justify-center py-8">
              <Plus className="h-16 w-16 text-primary mb-4" />
              <p className="text-gray-600 text-center">
                Click to set up a new climate or aid project with milestone tracking
              </p>
            </div>
          </Card>

          <Card title="All Projects">
            <div className="space-y-4">
              {projects.map((project, index) => (
                <div 
                  key={index}
                  className="flex items-center justify-between p-4 bg-background rounded-lg hover:bg-gray-200 transition-colors cursor-pointer"
                >
                  <div>
                    <h4 className="font-semibold text-text">{project}</h4>
                    <p className="text-sm text-gray-600">Status: Active</p>
                  </div>
                  <div className="flex space-x-2">
                    <button className="p-2 text-primary hover:bg-primary/10 rounded-full">
                      <Eye className="h-4 w-4" />
                    </button>
                    <button className="p-2 text-gray-600 hover:bg-gray-200 rounded-full">
                      <Settings className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </div>

        {/* Project Creation Modal */}
        {showModal && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-xl p-8 max-w-md w-full">
              <h3 className="text-2xl font-bold text-text mb-4">Create New Project</h3>
              <form className="space-y-4">
                <input
                  type="text"
                  placeholder="Project Name"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                />
                <textarea
                  placeholder="Project Description"
                  rows={4}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                ></textarea>
                <input
                  type="number"
                  placeholder="Total Budget (USD)"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                />
                <div className="flex space-x-4">
                  <button
                    type="button"
                    onClick={() => setShowModal(false)}
                    className="flex-1 px-4 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="flex-1 px-4 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors"
                  >
                    Create Project
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminDashboard;