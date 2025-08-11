import React from 'react';
import Card from '../components/Card';
import { Eye, Upload, Clock, CheckCircle, AlertCircle } from 'lucide-react';

const ContractorDashboard = () => {
  const assignedProjects = [
    { name: 'Solar School Installations', status: 'In Progress', deadline: '2025-03-15', completion: 65 },
    { name: 'Water Pump Maintenance', status: 'Completed', deadline: '2025-01-20', completion: 100 },
    { name: 'Emergency Shelter Setup', status: 'Pending Review', deadline: '2025-02-28', completion: 85 },
  ];

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'Completed':
        return <CheckCircle className="h-5 w-5 text-accent" />;
      case 'In Progress':
        return <Clock className="h-5 w-5 text-secondary" />;
      case 'Pending Review':
        return <AlertCircle className="h-5 w-5 text-orange-500" />;
      default:
        return <Clock className="h-5 w-5 text-gray-500" />;
    }
  };

  return (
    <div className="min-h-screen bg-background py-8 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Hero Section */}
        <section 
          className="relative h-64 flex items-center justify-center text-white mb-8 rounded-xl overflow-hidden"
          style={{
            backgroundImage: 'linear-gradient(rgba(0, 123, 167, 0.7), rgba(46, 139, 87, 0.7)), url(https://images.unsplash.com/photo-1578898886423-75b1fc5fc87c?auto=format&fit=crop&w=1500&q=80)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}
        >
          <div className="text-center max-w-4xl mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
              Your Work Sites
            </h1>
            <p className="text-lg md:text-xl text-gray-100 leading-relaxed">
              Upload deliverables, mark milestones complete, and request payout based on smart contract terms.
            </p>
          </div>
        </section>

        <div className="mb-8">
          <h2 className="text-3xl font-bold text-text mb-2">Project Assignments</h2>
          <p className="text-gray-600">Track progress and submit deliverables</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          <Card title="Assigned Projects">
            <div className="space-y-4">
              {assignedProjects.map((project, index) => (
                <div key={index} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex-1">
                      <h4 className="font-semibold text-text mb-1">{project.name}</h4>
                      <div className="flex items-center space-x-2 mb-2">
                        {getStatusIcon(project.status)}
                        <span className="text-sm text-gray-600">{project.status}</span>
                      </div>
                      <p className="text-sm text-gray-500">Deadline: {project.deadline}</p>
                    </div>
                    <button className="p-2 text-primary hover:bg-primary/10 rounded-full">
                      <Eye className="h-4 w-4" />
                    </button>
                  </div>
                  
                  <div className="mb-2">
                    <div className="flex justify-between text-sm text-gray-600 mb-1">
                      <span>Progress</span>
                      <span>{project.completion}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className="bg-primary h-2 rounded-full transition-all duration-300"
                        style={{ width: `${project.completion}%` }}
                      ></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </Card>

          <Card title="Upload Deliverables" className="h-fit">
            <div className="space-y-6">
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-primary/50 transition-colors cursor-pointer">
                <Upload className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                <p className="text-gray-600 mb-2">Drop files here or click to upload</p>
                <p className="text-sm text-gray-500">Supported: PDF, JPG, PNG (Max 10MB)</p>
              </div>
              
              <div className="space-y-3">
                <label className="block text-sm font-medium text-gray-700">Project</label>
                <select className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent">
                  <option>Select a project...</option>
                  <option>Solar School Installations</option>
                  <option>Emergency Shelter Setup</option>
                </select>
              </div>

              <div className="space-y-3">
                <label className="block text-sm font-medium text-gray-700">Milestone</label>
                <select className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent">
                  <option>Select milestone...</option>
                  <option>Phase 1 - Site Assessment</option>
                  <option>Phase 2 - Installation</option>
                  <option>Phase 3 - Testing</option>
                </select>
              </div>

              <textarea
                placeholder="Add notes or comments..."
                rows={4}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
              ></textarea>

              <button className="w-full bg-primary text-white py-3 rounded-lg hover:bg-primary/90 transition-colors font-semibold">
                Submit Deliverable
              </button>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default ContractorDashboard;