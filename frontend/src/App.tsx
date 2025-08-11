import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import AdminDashboard from './pages/AdminDashboard';
import ContractorDashboard from './pages/ContractorDashboard';
import FundingAgencyDashboard from './pages/FundingAgencyDashboard';
import PublicView from './pages/PublicView';

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-background">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/admin" element={<AdminDashboard />} />
            <Route path="/contractor" element={<ContractorDashboard />} />
            <Route path="/funding-agency" element={<FundingAgencyDashboard />} />
            <Route path="/public" element={<PublicView />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;