import React, { useState } from 'react';
import Card from '../components/Card';
import { CheckCircle, XCircle, DollarSign, Clock, AlertTriangle, FileCheck } from 'lucide-react';

const FundingAgencyDashboard = () => {
  const [selectedMilestone, setSelectedMilestone] = useState<any>(null);

  const milestones = [
    {
      id: 1,
      project: 'Solar Schools Program',
      milestone: 'Phase 1 - Site Assessment',
      contractor: 'Pacific Solar Solutions',
      amount: '$45,000',
      status: 'Pending Review',
      submittedDate: '2025-01-15',
      description: 'Initial site surveys and feasibility studies for 5 rural schools',
    },
    {
      id: 2,
      project: 'Water Security Initiative',
      milestone: 'Phase 2 - Well Drilling',
      contractor: 'Island Infrastructure Ltd',
      amount: '$120,000',
      status: 'Pending Review',
      submittedDate: '2025-01-18',
      description: 'Completion of 3 community wells with pump installations',
    },
    {
      id: 3,
      project: 'Emergency Clinics Network',
      milestone: 'Phase 1 - Foundation',
      contractor: 'Coral Construction',
      amount: '$85,000',
      status: 'Approved',
      submittedDate: '2025-01-10',
      description: 'Foundation and structural work for main clinic building',
    },
  ];

  return (
    <div className="min-h-screen bg-background py-8 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Hero Section */}
        <section 
          className="relative h-64 flex items-center justify-center text-white mb-8 rounded-xl overflow-hidden"
          style={{
            backgroundImage: 'linear-gradient(rgba(0, 123, 167, 0.7), rgba(46, 139, 87, 0.7)), url(https://images.unsplash.com/photo-1629728820874-cd52fafeecb6?auto=format&fit=crop&w=1500&q=80)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}
        >
          <div className="text-center max-w-4xl mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
              Project Oversight
            </h1>
            <p className="text-lg md:text-xl text-gray-100 leading-relaxed">
              Funders can approve milestones, track project status, and release payments through blockchain verification.
            </p>
          </div>
        </section>

        <div className="mb-8">
          <h2 className="text-3xl font-bold text-text mb-2">Milestone Review</h2>
          <p className="text-gray-600">Approve deliverables and release funding</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          <Card title="Review Project Milestones">
            <div className="space-y-4">
              {milestones.map((milestone) => (
                <div 
                  key={milestone.id}
                  className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow cursor-pointer"
                  onClick={() => setSelectedMilestone(milestone)}
                >
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex-1">
                      <h4 className="font-semibold text-text mb-1">{milestone.project}</h4>
                      <p className="text-sm text-gray-600 mb-1">{milestone.milestone}</p>
                      <p className="text-sm text-gray-500">by {milestone.contractor}</p>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                        milestone.status === 'Pending Review' 
                          ? 'bg-orange-100 text-orange-800' 
                          : 'bg-green-100 text-green-800'
                      }`}>
                        {milestone.status}
                      </span>
                      <span className="font-bold text-primary">{milestone.amount}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </Card>

          <Card title="Disburse Funds">
            <div className="space-y-6">
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <div className="flex items-start space-x-3">
                  <AlertTriangle className="h-5 w-5 text-blue-600 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-blue-900 mb-1">Smart Contract Integration</h4>
                    <p className="text-sm text-blue-700">
                      Fund disbursements are executed through Polygon smart contracts for complete transparency.
                    </p>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h4 className="font-semibold text-text">Approved Milestones Ready for Disbursement</h4>
                {milestones
                  .filter(m => m.status === 'Approved')
                  .map((milestone) => (
                  <div key={milestone.id} className="border border-green-200 bg-green-50 rounded-lg p-4">
                    <div className="flex items-center justify-between mb-3">
                      <div>
                        <h5 className="font-semibold text-text">{milestone.project}</h5>
                        <p className="text-sm text-gray-600">{milestone.milestone}</p>
                      </div>
                      <span className="font-bold text-primary">{milestone.amount}</span>
                    </div>
                    <button className="w-full bg-accent text-white py-2 px-4 rounded-lg hover:bg-accent/90 transition-colors font-semibold flex items-center justify-center space-x-2">
                      <DollarSign className="h-4 w-4" />
                      <span>Trigger Smart Contract</span>
                    </button>
                  </div>
                ))}
              </div>

              <div className="pt-4 border-t border-gray-200">
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div className="bg-white border border-gray-200 rounded-lg p-3">
                    <div className="text-2xl font-bold text-primary">$250K</div>
                    <div className="text-sm text-gray-600">Pending Review</div>
                  </div>
                  <div className="bg-white border border-gray-200 rounded-lg p-3">
                    <div className="text-2xl font-bold text-accent">$85K</div>
                    <div className="text-sm text-gray-600">Ready to Disburse</div>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>

        {/* Milestone Review Modal */}
        {selectedMilestone && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-xl p-8 max-w-2xl w-full max-h-96 overflow-y-auto">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-bold text-text">Review Milestone</h3>
                <button 
                  onClick={() => setSelectedMilestone(null)}
                  className="text-gray-500 hover:text-gray-700"
                >
                  <XCircle className="h-6 w-6" />
                </button>
              </div>
              
              <div className="space-y-4 mb-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Project</label>
                  <p className="text-text font-semibold">{selectedMilestone.project}</p>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Milestone</label>
                  <p className="text-text">{selectedMilestone.milestone}</p>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
                  <p className="text-gray-600">{selectedMilestone.description}</p>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Contractor</label>
                    <p className="text-text">{selectedMilestone.contractor}</p>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Amount</label>
                    <p className="text-primary font-bold text-lg">{selectedMilestone.amount}</p>
                  </div>
                </div>
              </div>

              {selectedMilestone.status === 'Pending Review' && (
                <div className="flex space-x-4">
                  <button className="flex-1 px-4 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors font-semibold flex items-center justify-center space-x-2">
                    <XCircle className="h-4 w-4" />
                    <span>Reject</span>
                  </button>
                  <button className="flex-1 px-4 py-3 bg-accent text-white rounded-lg hover:bg-accent/90 transition-colors font-semibold flex items-center justify-center space-x-2">
                    <CheckCircle className="h-4 w-4" />
                    <span>Approve</span>
                  </button>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default FundingAgencyDashboard;