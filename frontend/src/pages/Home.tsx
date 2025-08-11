import React from 'react';
import { Wallet, Users, Shield, Zap } from 'lucide-react';

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <section 
        className="relative h-screen flex items-center justify-center text-white"
        style={{
          backgroundImage: 'linear-gradient(rgba(0, 123, 167, 0.7), rgba(46, 139, 87, 0.7)), url(https://images.unsplash.com/photo-1593854971040-05c9a5fba6ff)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="text-center max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            TupuPlatform
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-100 leading-relaxed">
            Transparent Aid & Climate Project Funding for the Pacific
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-secondary hover:bg-secondary/90 text-text px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-200 hover:scale-105 transform">
              Connect Wallet
            </button>
            <button className="bg-transparent border-2 border-white hover:bg-white hover:text-primary px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-200 hover:scale-105 transform">
              Login / Register
            </button>
          </div>
        </div>
      </section>

      {/* Info Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-text mb-6">
              Built for Trust, Designed for Impact
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
              TupuPlatform tracks every transaction and milestone on-chain, ensuring community-based projects are funded, delivered, and audited transparently.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center group">
              <div className="bg-primary/10 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/20 transition-colors duration-300">
                <Shield className="h-10 w-10 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-text mb-4">Transparent</h3>
              <p className="text-gray-600">All transactions are publicly auditable on the blockchain</p>
            </div>

            <div className="text-center group">
              <div className="bg-accent/10 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6 group-hover:bg-accent/20 transition-colors duration-300">
                <Users className="h-10 w-10 text-accent" />
              </div>
              <h3 className="text-xl font-bold text-text mb-4">Community-Driven</h3>
              <p className="text-gray-600">Empowering local communities with funding visibility</p>
            </div>

            <div className="text-center group">
              <div className="bg-secondary/10 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6 group-hover:bg-secondary/20 transition-colors duration-300">
                <Zap className="h-10 w-10 text-secondary/80" />
              </div>
              <h3 className="text-xl font-bold text-text mb-4">Efficient</h3>
              <p className="text-gray-600">Smart contracts automate fund disbursement</p>
            </div>

            <div className="text-center group">
              <div className="bg-primary/10 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/20 transition-colors duration-300">
                <Wallet className="h-10 w-10 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-text mb-4">Secure</h3>
              <p className="text-gray-600">Polygon blockchain ensures data integrity</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;