import { Link } from 'react-router-dom';
import LiquidEther from '../components/LiquidEther';
import { Shield, Zap, Globe, Users, Award, CheckCircle } from 'lucide-react';

const LearnMore = () => {
  return (
    <div className="relative min-h-screen">
      {/* LiquidEther Background */}
      <div className="absolute inset-0 z-0">
        <LiquidEther />
      </div>

      {/* Main Content */}
      <div className="relative z-10 min-h-screen flex flex-col">
        {/* Hero Section */}
        <div className="flex-1 flex items-center justify-center px-10 py-20">
          <div className="max-w-6xl mx-auto text-center">
            {/* Main Heading */}
            <div className="mb-12">
              <h1 className="text-white text-5xl md:text-6xl lg:text-7xl font-black leading-none tracking-tight mb-6">
                Why Choose AuthentiFi?
              </h1>
              <p className="text-white/80 text-xl md:text-2xl max-w-4xl mx-auto leading-relaxed">
                Revolutionizing credential verification with blockchain technology
              </p>
            </div>

            {/* Back Button */}
            <div className="mb-16">
              <Link
                to="/"
                className="inline-flex items-center gap-3 px-6 py-3 bg-white/10 backdrop-blur-xl border border-white/20 text-white rounded-xl hover:bg-white/20 transition-all duration-300 group"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 256 256" className="group-hover:-translate-x-1 transition-transform">
                  <path d="M224,128a8,8,0,0,1-8,8H59.31l58.35,58.34a8,8,0,0,1-11.32,11.32l-72-72a8,8,0,0,1,0-11.32l72-72a8,8,0,0,1,11.32,11.32L59.31,120H216A8,8,0,0,1,224,128Z"></path>
                </svg>
                Back to Home
              </Link>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="px-10 py-20">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-white text-4xl font-bold text-center mb-16">Key Features</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
              {/* Feature 1 */}
              <div className="bg-black/20 backdrop-blur-xl border border-white/10 rounded-2xl p-8 text-center hover:bg-black/30 transition-all duration-300 group">
                <div className="w-16 h-16 mx-auto mb-6 bg-purple-500/20 rounded-full flex items-center justify-center group-hover:bg-purple-500/30 transition-colors">
                  <Shield className="w-8 h-8 text-purple-400" />
                </div>
                <h3 className="text-white text-xl font-semibold mb-4">Blockchain Security</h3>
                <p className="text-white/70 leading-relaxed">
                  Certificates are stored on the immutable blockchain, making them impossible to forge or tamper with.
                </p>
              </div>

              {/* Feature 2 */}
              <div className="bg-black/20 backdrop-blur-xl border border-white/10 rounded-2xl p-8 text-center hover:bg-black/30 transition-all duration-300 group">
                <div className="w-16 h-16 mx-auto mb-6 bg-blue-500/20 rounded-full flex items-center justify-center group-hover:bg-blue-500/30 transition-colors">
                  <Zap className="w-8 h-8 text-blue-400" />
                </div>
                <h3 className="text-white text-xl font-semibold mb-4">Instant Verification</h3>
                <p className="text-white/70 leading-relaxed">
                  Verify any certificate instantly with just a few clicks. No more waiting for manual verification processes.
                </p>
              </div>

              {/* Feature 3 */}
              <div className="bg-black/20 backdrop-blur-xl border border-white/10 rounded-2xl p-8 text-center hover:bg-black/30 transition-all duration-300 group">
                <div className="w-16 h-16 mx-auto mb-6 bg-green-500/20 rounded-full flex items-center justify-center group-hover:bg-green-500/30 transition-colors">
                  <Globe className="w-8 h-8 text-green-400" />
                </div>
                <h3 className="text-white text-xl font-semibold mb-4">Global Access</h3>
                <p className="text-white/70 leading-relaxed">
                  Access your certificates from anywhere in the world, 24/7. No geographical limitations.
                </p>
              </div>

              {/* Feature 4 */}
              <div className="bg-black/20 backdrop-blur-xl border border-white/10 rounded-2xl p-8 text-center hover:bg-black/30 transition-all duration-300 group">
                <div className="w-16 h-16 mx-auto mb-6 bg-pink-500/20 rounded-full flex items-center justify-center group-hover:bg-pink-500/30 transition-colors">
                  <Users className="w-8 h-8 text-pink-400" />
                </div>
                <h3 className="text-white text-xl font-semibold mb-4">Multi-Party System</h3>
                <p className="text-white/70 leading-relaxed">
                  Universities, students, and employers all benefit from a transparent, trustless system.
                </p>
              </div>

              {/* Feature 5 */}
              <div className="bg-black/20 backdrop-blur-xl border border-white/10 rounded-2xl p-8 text-center hover:bg-black/30 transition-all duration-300 group">
                <div className="w-16 h-16 mx-auto mb-6 bg-yellow-500/20 rounded-full flex items-center justify-center group-hover:bg-yellow-500/30 transition-colors">
                  <Award className="w-8 h-8 text-yellow-400" />
                </div>
                <h3 className="text-white text-xl font-semibold mb-4">Digital Credentials</h3>
                <p className="text-white/70 leading-relaxed">
                  Modernize your credentials with digital certificates that are easy to share and verify.
                </p>
              </div>

              {/* Feature 6 */}
              <div className="bg-black/20 backdrop-blur-xl border border-white/10 rounded-2xl p-8 text-center hover:bg-black/30 transition-all duration-300 group">
                <div className="w-16 h-16 mx-auto mb-6 bg-teal-500/20 rounded-full flex items-center justify-center group-hover:bg-teal-500/30 transition-colors">
                  <CheckCircle className="w-8 h-8 text-teal-400" />
                </div>
                <h3 className="text-white text-xl font-semibold mb-4">Verified Authenticity</h3>
                <p className="text-white/70 leading-relaxed">
                  Every certificate is cryptographically verified, ensuring 100% authenticity and trust.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Benefits Section */}
        <div className="px-10 py-20 bg-black/30 backdrop-blur-sm">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-white text-4xl font-bold text-center mb-16">Benefits for Everyone</h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              {/* For Students */}
              <div className="text-center">
                <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                  <Users className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-white text-2xl font-bold mb-6">For Students</h3>
                <ul className="text-white/70 space-y-3 text-left">
                  <li className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                    <span>Secure digital wallet for certificates</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                    <span>Easy sharing with employers</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                    <span>No risk of losing certificates</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                    <span>Instant verification anywhere</span>
                  </li>
                </ul>
              </div>

              {/* For Universities */}
              <div className="text-center">
                <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center">
                  <Award className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-white text-2xl font-bold mb-6">For Universities</h3>
                <ul className="text-white/70 space-y-3 text-left">
                  <li className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                    <span>Streamlined certificate issuance</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                    <span>Reduced administrative costs</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                    <span>Enhanced institutional reputation</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                    <span>Global recognition and trust</span>
                  </li>
                </ul>
              </div>

              {/* For Employers */}
              <div className="text-center">
                <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center">
                  <Shield className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-white text-2xl font-bold mb-6">For Employers</h3>
                <ul className="text-white/70 space-y-3 text-left">
                  <li className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                    <span>Instant credential verification</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                    <span>Eliminate fake certificates</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                    <span>Faster hiring processes</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                    <span>Reduced verification costs</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="px-10 py-20">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-white text-4xl font-bold mb-8">Ready to Get Started?</h2>
            <p className="text-white/80 text-xl mb-12 leading-relaxed">
              Join the future of credential verification and experience the power of blockchain technology.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Link
                to="/dashboard"
                className="flex items-center justify-center px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white text-lg font-bold rounded-xl transition-all min-w-[200px] shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                Get Started
              </Link>
              <Link
                to="/issuer"
                className="flex items-center justify-center px-8 py-4 bg-transparent border-2 border-white text-white text-lg font-bold rounded-xl hover:bg-white hover:text-black transition-all min-w-[200px]"
              >
                For Institutions
              </Link>
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className="px-10 py-10 text-center bg-black/30 backdrop-blur-sm">
          <p className="text-white/60">© 2025 AuthentiFi. All rights reserved.</p>
        </footer>
      </div>
    </div>
  );
};

export default LearnMore;
