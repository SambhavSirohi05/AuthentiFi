import { Link } from 'react-router-dom';
import LiquidEther from '../components/LiquidEther';
import { Shield, Zap, Globe, Users, Award, CheckCircle } from 'lucide-react';

const LandingPage = () => {
  return (
    <div className="relative min-h-screen">
      {/* LiquidEther Background */}
      <div className="absolute inset-0 z-0">
        <LiquidEther />
      </div>
      
      {/* Hero Section - Full Screen */}
      <div className="relative z-10 min-h-screen flex flex-col">
        {/* Main Content */}
        <div className="flex-1 flex items-center justify-center px-10">
          <div className="max-w-4xl mx-auto text-center">
            {/* Main Heading */}
            <div className="mb-6">
              <h1 className="text-white text-6xl md:text-7xl lg:text-8xl font-black leading-none tracking-tight mb-2">
                AuthentiFi
              </h1>
              <h2 className="text-white text-3xl md:text-4xl lg:text-5xl font-bold leading-tight tracking-tight">
                Authentic Credentials, Verified on Blockchain.
              </h2>
            </div>
            
            {/* Subtitle */}
            <p className="text-white/80 text-lg md:text-xl mb-12 max-w-2xl mx-auto">
              No fake degrees. No delays. Just instant trust.
            </p>
            
            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                to="/dashboard"
                className="flex items-center justify-center px-8 py-4 bg-white text-black text-lg font-bold rounded-xl hover:bg-white/90 transition-colors min-w-[200px]"
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
        
        {/* Scroll Indicator - At Bottom */}
        <div className="flex justify-center pb-8">
          <div className="flex flex-col items-center gap-2 animate-bounce">
            <span className="text-white/60 text-sm font-medium">Scroll to know more</span>
            <svg 
              className="w-6 h-6 text-white/60" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M19 14l-7 7m0 0l-7-7m7 7V3" 
              />
            </svg>
          </div>
        </div>
      </div>
      
      {/* Key Features Section - Full Page Scroll */}
      <div className="relative z-10 px-10 py-20">
        <div className="max-w-7xl mx-auto w-full">
          <h2 className="text-white text-4xl font-bold text-center mb-16">Key Features</h2>
          
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature 1 - Blockchain Security */}
            <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-xl p-6 text-center shadow-2xl hover:bg-white/20 transition-all duration-300 group relative overflow-hidden aspect-square flex flex-col justify-center">
              {/* Liquid glass effect overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="w-16 h-16 mx-auto mb-6 bg-white/20 rounded-full flex items-center justify-center group-hover:bg-white/30 transition-colors relative z-10">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-white text-xl font-semibold mb-4 relative z-10">Blockchain Security</h3>
              <p className="text-white/70 text-sm leading-relaxed relative z-10">Certificates are stored on the immutable blockchain, making them impossible to forge or tamper with.</p>
            </div>

            {/* Feature 2 - Instant Verification */}
            <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-xl p-6 text-center shadow-2xl hover:bg-white/20 transition-all duration-300 group relative overflow-hidden aspect-square flex flex-col justify-center">
              {/* Liquid glass effect overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="w-16 h-16 mx-auto mb-6 bg-white/20 rounded-full flex items-center justify-center group-hover:bg-white/30 transition-colors relative z-10">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-white text-xl font-semibold mb-4 relative z-10">Instant Verification</h3>
              <p className="text-white/70 text-sm leading-relaxed relative z-10">Verify any certificate instantly with just a few clicks. No more waiting for manual verification processes.</p>
            </div>

            {/* Feature 3 - Global Access */}
            <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-xl p-6 text-center shadow-2xl hover:bg-white/20 transition-all duration-300 group relative overflow-hidden aspect-square flex flex-col justify-center">
              {/* Liquid glass effect overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="w-16 h-16 mx-auto mb-6 bg-white/20 rounded-full flex items-center justify-center group-hover:bg-white/30 transition-colors relative z-10">
                <Globe className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-white text-xl font-semibold mb-4 relative z-10">Global Access</h3>
              <p className="text-white/70 text-sm leading-relaxed relative z-10">Access your certificates from anywhere in the world, 24/7. No geographical limitations.</p>
            </div>

            {/* Feature 4 - Multi-Party System */}
            <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-xl p-6 text-center shadow-2xl hover:bg-white/20 transition-all duration-300 group relative overflow-hidden aspect-square flex flex-col justify-center">
              {/* Liquid glass effect overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="w-16 h-16 mx-auto mb-6 bg-white/20 rounded-full flex items-center justify-center group-hover:bg-white/30 transition-colors relative z-10">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-white text-xl font-semibold mb-4 relative z-10">Multi-Party System</h3>
              <p className="text-white/70 text-sm leading-relaxed relative z-10">Universities, students, and employers all benefit from a transparent, trustless system.</p>
            </div>

            {/* Feature 5 - Digital Credentials */}
            <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-xl p-6 text-center shadow-2xl hover:bg-white/20 transition-all duration-300 group relative overflow-hidden aspect-square flex flex-col justify-center">
              {/* Liquid glass effect overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="w-16 h-16 mx-auto mb-6 bg-white/20 rounded-full flex items-center justify-center group-hover:bg-white/30 transition-colors relative z-10">
                <Award className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-white text-xl font-semibold mb-4 relative z-10">Digital Credentials</h3>
              <p className="text-white/70 text-sm leading-relaxed relative z-10">Modernize your credentials with digital certificates that are easy to share and verify.</p>
            </div>

            {/* Feature 6 - Verified Authenticity */}
            <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-xl p-6 text-center shadow-2xl hover:bg-white/20 transition-all duration-300 group relative overflow-hidden aspect-square flex flex-col justify-center">
              {/* Liquid glass effect overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="w-16 h-16 mx-auto mb-6 bg-white/20 rounded-full flex items-center justify-center group-hover:bg-white/30 transition-colors relative z-10">
                <CheckCircle className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-white text-xl font-semibold mb-4 relative z-10">Verified Authenticity</h3>
              <p className="text-white/70 text-sm leading-relaxed relative z-10">Every certificate is cryptographically verified, ensuring 100% authenticity and trust.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Benefits for Everyone Section */}
      <div className="relative z-10 px-10 py-16 bg-black/20 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-white text-3xl font-bold text-center mb-12">Benefits for Everyone</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* For Students */}
            <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-xl p-6 text-center shadow-2xl hover:bg-white/20 transition-all duration-300 group relative overflow-hidden">
              {/* Liquid glass effect overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="w-16 h-16 mx-auto mb-4 bg-white/20 rounded-full flex items-center justify-center group-hover:bg-white/30 transition-colors relative z-10">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-white text-xl font-bold mb-4 relative z-10">For Students</h3>
              <ul className="text-white/70 space-y-2 text-left relative z-10">
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-4 h-4 text-white flex-shrink-0" />
                  <span className="text-sm">Secure digital wallet for certificates</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-4 h-4 text-white flex-shrink-0" />
                  <span className="text-sm">Easy sharing with employers</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-4 h-4 text-white flex-shrink-0" />
                  <span className="text-sm">No risk of losing certificates</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-4 h-4 text-white flex-shrink-0" />
                  <span className="text-sm">Instant verification anywhere</span>
                </li>
              </ul>
            </div>

            {/* For Universities */}
            <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-xl p-6 text-center shadow-2xl hover:bg-white/20 transition-all duration-300 group relative overflow-hidden">
              {/* Liquid glass effect overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="w-16 h-16 mx-auto mb-4 bg-white/20 rounded-full flex items-center justify-center group-hover:bg-white/30 transition-colors relative z-10">
                <Award className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-white text-xl font-bold mb-4 relative z-10">For Universities</h3>
              <ul className="text-white/70 space-y-2 text-left relative z-10">
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-4 h-4 text-white flex-shrink-0" />
                  <span className="text-sm">Streamlined certificate issuance</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-4 h-4 text-white flex-shrink-0" />
                  <span className="text-sm">Reduced administrative costs</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-4 h-4 text-white flex-shrink-0" />
                  <span className="text-sm">Enhanced institutional reputation</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-4 h-4 text-white flex-shrink-0" />
                  <span className="text-sm">Global recognition and trust</span>
                </li>
              </ul>
            </div>

            {/* For Employers */}
            <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-xl p-6 text-center shadow-2xl hover:bg-white/20 transition-all duration-300 group relative overflow-hidden">
              {/* Liquid glass effect overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="w-16 h-16 mx-auto mb-4 bg-white/20 rounded-full flex items-center justify-center group-hover:bg-white/30 transition-colors relative z-10">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-white text-xl font-bold mb-4 relative z-10">For Employers</h3>
              <ul className="text-white/70 space-y-2 text-left relative z-10">
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-4 h-4 text-white flex-shrink-0" />
                  <span className="text-sm">Instant credential verification</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-4 h-4 text-white flex-shrink-0" />
                  <span className="text-sm">Eliminate fake certificates</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-4 h-4 text-white flex-shrink-0" />
                  <span className="text-sm">Faster hiring processes</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-4 h-4 text-white flex-shrink-0" />
                  <span className="text-sm">Reduced verification costs</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      
      {/* Footer */}
      <footer className="relative z-10 px-10 py-10 text-center bg-black/30 backdrop-blur-sm">
        <p className="text-white/60">© 2025 AuthentiFi. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default LandingPage;