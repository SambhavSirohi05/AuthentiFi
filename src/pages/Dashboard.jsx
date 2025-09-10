import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import CertificateCard from '../components/CertificateCard';
import { mockCertificates } from '../data/mockData';
import { getWalletStatus } from '../utils/wallet';

const Dashboard = () => {
  const [isWalletConnected, setIsWalletConnected] = useState(false);
  const [walletAddress, setWalletAddress] = useState('');
  const [userName, setUserName] = useState('');
  const [isEditingName, setIsEditingName] = useState(false);
  const [tempUserName, setTempUserName] = useState('');
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
        // Load user name from localStorage
        const savedName = localStorage.getItem(`userName_${status.address}`);
        if (savedName) {
          setUserName(savedName);
        } else {
          // Generate a default name if none exists
          const defaultName = `User_${status.address.slice(0, 6)}`;
          setUserName(defaultName);
          localStorage.setItem(`userName_${status.address}`, defaultName);
        }
      }
    };
    
    checkWalletStatus();
  }, [navigate]);

  const handleEditName = () => {
    setTempUserName(userName);
    setIsEditingName(true);
  };

  const handleSaveName = () => {
    if (tempUserName.trim()) {
      setUserName(tempUserName.trim());
      localStorage.setItem(`userName_${walletAddress}`, tempUserName.trim());
      setIsEditingName(false);
      
      // TODO: Update backend with new name
      // This would be an API call to save the user name
      console.log('Saving name to backend:', tempUserName.trim());
    }
  };

  const handleCancelEdit = () => {
    setTempUserName('');
    setIsEditingName(false);
  };

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
      
      <div className="relative z-10 px-10 py-8">
        <div className="max-w-7xl mx-auto">
          {/* Header Section */}
          <div className="mb-8">
            <div className="bg-black/20 backdrop-blur-xl border border-white/10 rounded-2xl p-8 shadow-2xl">
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
                {/* Title and Description */}
                <div className="flex-1">
                  <div className="flex items-center gap-4 mb-4">
                    <h1 className="text-white text-4xl lg:text-5xl font-bold leading-tight">
                      Welcome back, {isEditingName ? (
                        <div className="flex items-center gap-2">
                          <input
                            type="text"
                            value={tempUserName}
                            onChange={(e) => setTempUserName(e.target.value)}
                            className="bg-white/10 border border-white/20 rounded-lg px-3 py-1 text-white text-2xl lg:text-3xl font-bold focus:outline-none focus:border-[#2a74ea]"
                            autoFocus
                            onKeyDown={(e) => {
                              if (e.key === 'Enter') handleSaveName();
                              if (e.key === 'Escape') handleCancelEdit();
                            }}
                          />
                          <button
                            onClick={handleSaveName}
                            className="text-green-400 hover:text-green-300 transition-colors"
                          >
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 256 256">
                              <path d="M229.66,77.66l-128,128a8,8,0,0,1-11.32,0l-56-56a8,8,0,0,1,11.32-11.32L96,188.69,218.34,66.34a8,8,0,0,1,11.32,11.32Z"></path>
                            </svg>
                          </button>
                          <button
                            onClick={handleCancelEdit}
                            className="text-red-400 hover:text-red-300 transition-colors"
                          >
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 256 256">
                              <path d="M205.66,194.34a8,8,0,0,1-11.32,11.32L128,139.31,61.66,205.66a8,8,0,0,1-11.32-11.32L116.69,128,50.34,61.66A8,8,0,0,1,61.66,50.34L128,116.69l66.34-66.35a8,8,0,0,1,11.32,11.32L139.31,128Z"></path>
                            </svg>
                          </button>
                        </div>
                      ) : (
                        <span className="text-[#2a74ea]">{userName}</span>
                      )}
                    </h1>
                    {!isEditingName && (
                      <button
                        onClick={handleEditName}
                        className="text-white/60 hover:text-white transition-colors p-1"
                        title="Edit name"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 256 256">
                          <path d="M227.31,73.37,182.63,28.68a16,16,0,0,0-22.63,0L36.69,152A15.86,15.86,0,0,0,32,163.31V208a16,16,0,0,0,16,16H92.69A15.86,15.86,0,0,0,104,219.31l83.67-83.66,3.48,13.9-14.5,14.49a8,8,0,0,0,0,11.32l8,8a8,8,0,0,0,11.32,0l14.5-14.49,13.9,3.48Zm-48,48L68,196.69,51.31,180,136,95.31ZM192,115.31,172.69,96l24-24L216,91.31Z"></path>
                        </svg>
                      </button>
                    )}
                  </div>
                  <p className="text-white/70 text-lg lg:text-xl leading-relaxed">
                    Manage and view your blockchain-verified credentials
                  </p>
                </div>
                
                {/* Wallet Info */}
                <div className="bg-white/5 backdrop-blur-sm border border-white/20 rounded-xl p-6 min-w-[300px]">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-green-500/20 rounded-full flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 256 256" className="text-green-400">
                        <path d="M160,16A80.07,80.07,0,0,0,83.91,120.78L26.34,178.34A8,8,0,0,0,24,184v40a8,8,0,0,0,8,8H72a8,8,0,0,0,8-8V208H96a8,8,0,0,0,8-8V184h16a8,8,0,0,0,5.66-2.34l9.56-9.57A80,80,0,1,0,160,16Zm0,144a63.7,63.7,0,0,1-23.65-4.51,8,8,0,0,0-8.84,1.68L116.69,168H96a8,8,0,0,0-8,8v16H72a8,8,0,0,0-8,8v16H40V187.31l58.83-58.82a8,8,0,0,0,1.68-8.84A64,64,0,1,1,160,160Zm32-84a12,12,0,1,1-12-12A12,12,0,0,1,192,76Z"></path>
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-white font-semibold text-lg">Wallet Connected</h3>
                      <p className="text-white/60 text-sm">Sepolia Testnet</p>
                    </div>
                  </div>
                  <div className="bg-black/20 rounded-lg p-3">
                    <p className="text-white/80 text-sm font-mono break-all">
                      {walletAddress ? `${walletAddress.slice(0, 6)}...${walletAddress.slice(-4)}` : 'No address'}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-black/20 backdrop-blur-xl border border-white/10 rounded-xl p-6 shadow-2xl hover:bg-black/30 transition-all duration-300 group relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 256 256" className="text-blue-400">
                      <path d="M216,72H56a8,8,0,0,1,0-16H192a8,8,0,0,0,0-16H56A24,24,0,0,0,32,64V192a24,24,0,0,0,24,24H216a16,16,0,0,0,16-16V88A16,16,0,0,0,216,72Zm0,128H56a8,8,0,0,1-8-8V86.63A23.84,23.84,0,0,0,56,88H216Zm-48-60a12,12,0,1,1,12,12A12,12,0,0,1,168,140Z"></path>
                    </svg>
                  </div>
                  <div>
                    <p className="text-white/60 text-sm font-medium">Total Certificates</p>
                    <p className="text-white text-2xl font-bold">{mockCertificates.length}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-black/20 backdrop-blur-xl border border-white/10 rounded-xl p-6 shadow-2xl hover:bg-black/30 transition-all duration-300 group relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-green-500/20 rounded-xl flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 256 256" className="text-green-400">
                      <path d="M216,24H40A16,16,0,0,0,24,40V216a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V40A16,16,0,0,0,216,24Zm0,192H40V40H216V216ZM96,112v64a8,8,0,0,1-16,0V112a8,8,0,0,1,16,0Zm88,28v36a8,8,0,0,1-16,0V140a20,20,0,0,0-40,0v36a8,8,0,0,1-16,0V112a8,8,0,0,1,15.79-1.78A36,36,0,0,1,184,140ZM100,84A12,12,0,1,1,88,72,12,12,0,0,1,100,84Z"></path>
                    </svg>
                  </div>
                  <div>
                    <p className="text-white/60 text-sm font-medium">Active Certificates</p>
                    <p className="text-white text-2xl font-bold">{mockCertificates.filter(c => c.status === 'Active').length}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-black/20 backdrop-blur-xl border border-white/10 rounded-xl p-6 shadow-2xl hover:bg-black/30 transition-all duration-300 group relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-purple-500/20 rounded-xl flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 256 256" className="text-purple-400">
                      <path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216Zm0-144a56,56,0,0,0-56,56,8,8,0,0,1-16,0,72,72,0,0,1,144,0,8,8,0,0,1-16,0A56,56,0,0,0,128,72Zm0,88a12,12,0,1,1,12-12A12,12,0,0,1,128,160Z"></path>
                    </svg>
                  </div>
                  <div>
                    <p className="text-white/60 text-sm font-medium">Blockchain Verified</p>
                    <p className="text-white text-2xl font-bold">100%</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Certificates Section */}
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-white text-2xl font-bold">Your Certificate Collection</h2>
              <div className="flex items-center gap-2 text-white/60 text-sm">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 256 256">
                  <path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216Zm0-144a56,56,0,0,0-56,56,8,8,0,0,1-16,0,72,72,0,0,1,144,0,8,8,0,0,1-16,0A56,56,0,0,0,128,72Zm0,88a12,12,0,1,1,12-12A12,12,0,0,1,128,160Z"></path>
                </svg>
                <span>All certificates are verified on the blockchain</span>
              </div>
            </div>
            
            {/* Certificates Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {mockCertificates.map((certificate) => (
                <div key={certificate.id} className="group">
                  <div className="bg-black/20 backdrop-blur-xl border border-white/10 rounded-xl p-6 shadow-2xl hover:bg-black/30 transition-all duration-300 relative overflow-hidden h-full">
                    {/* Liquid glass effect overlay */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    
                    <div className="relative z-10 flex flex-col h-full">
                      <CertificateCard certificate={certificate} />
                      <div className="mt-auto pt-4">
                        <button
                          onClick={() => handleViewDetails(certificate)}
                          className="w-full px-4 py-3 bg-[#2a74ea]/20 border border-[#2a74ea]/30 text-[#2a74ea] text-sm font-semibold rounded-lg hover:bg-[#2a74ea]/30 hover:border-[#2a74ea]/50 transition-all duration-300"
                        >
                          View Details
                        </button>
                      </div>
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


