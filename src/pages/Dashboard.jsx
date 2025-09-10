import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import CertificateCard from '../components/CertificateCard';
import { mockCertificates } from '../data/mockData';
import { getWalletStatus } from '../utils/wallet';

const Dashboard = () => {
  const [isWalletConnected, setIsWalletConnected] = useState(false);
  const [walletAddress, setWalletAddress] = useState('');
  const [showCertificateDetails, setShowCertificateDetails] = useState(false);
  const [selectedCertificate, setSelectedCertificate] = useState(null);
  const navigate = useNavigate();

  // Check if wallet is connected on component mount
  useEffect(() => {
    const checkWalletStatus = async () => {
      const status = await getWalletStatus();
      if (!status.connected) {
        // Redirect to wallet login page immediately if not connected
        navigate('/wallet-login');
        return;
      }
      setIsWalletConnected(status.connected);
      if (status.connected) {
        setWalletAddress(status.address);
      }
    };
    
    checkWalletStatus();
  }, [navigate]);

  const handleConnectWallet = () => {
    // Redirect to wallet login page
    navigate('/wallet-login');
  };

  const handleViewDetails = (certificate) => {
    setSelectedCertificate(certificate);
    setShowCertificateDetails(true);
  };

  const handleCloseDetails = () => {
    setShowCertificateDetails(false);
    setSelectedCertificate(null);
  };

  return (
    <div className="relative min-h-screen bg-[#111418]">
      {/* Background with subtle gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#111418] via-[#1a1f2e] to-[#111418] opacity-50"></div>
      
      <div className="relative z-10 px-10 flex flex-1 justify-center py-8">
        <div className="layout-content-container flex flex-col max-w-6xl flex-1">
          
          <div className="space-y-6">
            {/* Certificates Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {mockCertificates.map((certificate) => (
                <div key={certificate.id} className="group">
                  <div className="bg-black/20 backdrop-blur-xl border border-white/10 rounded-xl p-6 shadow-2xl hover:bg-black/30 transition-all duration-300 relative overflow-hidden">
                    {/* Liquid glass effect overlay */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    
                    <div className="relative z-10">
                      <CertificateCard certificate={certificate} />
                      <button
                        onClick={() => handleViewDetails(certificate)}
                        className="w-full mt-4 px-4 py-2 bg-[#2a74ea]/20 border border-[#2a74ea]/30 text-[#2a74ea] text-sm font-semibold rounded-lg hover:bg-[#2a74ea]/30 hover:border-[#2a74ea]/50 transition-all duration-300"
                      >
                        View Details
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Certificate Details Modal */}
      {showCertificateDetails && selectedCertificate && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-black/30 backdrop-blur-xl border border-white/20 rounded-2xl p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl">
            <div className="flex justify-between items-start mb-6">
              <h2 className="text-white text-2xl font-bold">Certificate Details</h2>
              <button
                onClick={handleCloseDetails}
                className="text-white/70 hover:text-white transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 256 256">
                  <path d="M205.66,194.34a8,8,0,0,1-11.32,11.32L128,139.31,61.66,205.66a8,8,0,0,1-11.32-11.32L116.69,128,50.34,61.66A8,8,0,0,1,61.66,50.34L128,116.69l66.34-66.35a8,8,0,0,1,11.32,11.32L139.31,128Z"></path>
                </svg>
              </button>
            </div>
            
            <div className="space-y-6">
              {/* Certificate Image */}
              <div className="text-center">
                <img 
                  src={selectedCertificate.image} 
                  alt={selectedCertificate.title}
                  className="w-32 h-32 mx-auto rounded-xl object-cover border border-white/20"
                />
              </div>
              
              {/* Certificate Information */}
              <div className="space-y-4">
                <div>
                  <h3 className="text-white text-xl font-semibold mb-2">Certificate Title</h3>
                  <p className="text-white/80 text-lg">{selectedCertificate.title}</p>
                </div>
                
                <div>
                  <h3 className="text-white text-xl font-semibold mb-2">Issuing Institution</h3>
                  <p className="text-white/80 text-lg">{selectedCertificate.issuer}</p>
                </div>
                
                <div>
                  <h3 className="text-white text-xl font-semibold mb-2">Issue Date</h3>
                  <p className="text-white/80 text-lg">{new Date(selectedCertificate.date).toLocaleDateString('en-US', { 
                    year: 'numeric', 
                    month: 'long', 
                    day: 'numeric' 
                  })}</p>
                </div>
                
                <div>
                  <h3 className="text-white text-xl font-semibold mb-2">Status</h3>
                  <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-semibold ${
                    selectedCertificate.status === 'Active' 
                      ? 'bg-green-500/20 text-green-400 border border-green-500/30' 
                      : 'bg-red-500/20 text-red-400 border border-red-500/30'
                  }`}>
                    {selectedCertificate.status}
                  </span>
                </div>
                
                <div>
                  <h3 className="text-white text-xl font-semibold mb-2">Blockchain Verification</h3>
                  <p className="text-white/80 text-lg">✓ Verified on Ethereum blockchain</p>
                  <p className="text-white/60 text-sm mt-1">Transaction Hash: 0x1234...5678</p>
                </div>
              </div>
              
              {/* Action Buttons */}
              <div className="flex gap-4 pt-6">
                <button className="flex-1 px-6 py-3 bg-[#2a74ea] text-white font-semibold rounded-xl hover:bg-[#1d4ed8] transition-colors">
                  Download PDF
                </button>
                <button className="flex-1 px-6 py-3 bg-transparent border border-white/30 text-white font-semibold rounded-xl hover:bg-white/10 transition-colors">
                  Share Certificate
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Dashboard;


