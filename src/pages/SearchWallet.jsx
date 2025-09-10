import { useState } from 'react';
import { mockWalletCertificates } from '../data/mockData';

const SearchWallet = () => {
  const [walletAddress, setWalletAddress] = useState('');
  const [searchResults, setSearchResults] = useState(null);
  const [isSearching, setIsSearching] = useState(false);

  const handleSearch = () => {
    if (!walletAddress.trim()) return;
    
    setIsSearching(true);
    
    // Simulate search delay
    setTimeout(() => {
      const results = mockWalletCertificates[walletAddress.toLowerCase()];
      setSearchResults(results || []);
      setIsSearching(false);
    }, 1000);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <div className="relative min-h-screen bg-[#111418]">
      {/* Background with subtle gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#111418] via-[#1a1f2e] to-[#111418] opacity-50"></div>
      
      <div className="relative z-10 px-10 py-8">
        <div className="max-w-4xl mx-auto">
          {/* Header Section */}
          <div className="mb-8">
            <div className="bg-black/20 backdrop-blur-xl border border-white/10 rounded-2xl p-8 shadow-2xl">
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-6 bg-white/10 rounded-full flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" viewBox="0 0 256 256" className="text-white">
                    <path d="M229.66,218.34l-50.07-50.06a88.11,88.11,0,1,0-11.31,11.31l50.06,50.07a8,8,0,0,0,11.32-11.32ZM40,112a72,72,0,1,1,72,72A72.08,72.08,0,0,1,40,112Z"></path>
                  </svg>
                </div>
                <h1 className="text-white text-4xl font-bold leading-tight mb-4">
                  Search Wallet
                </h1>
                <p className="text-white/70 text-lg leading-relaxed">
                  Enter a wallet address to view all certificates associated with it
                </p>
              </div>
            </div>
          </div>

          {/* Search Section */}
          <div className="mb-8">
            <div className="bg-black/20 backdrop-blur-xl border border-white/10 rounded-xl p-6 shadow-2xl">
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="flex-1">
                  <input
                    type="text"
                    value={walletAddress}
                    onChange={(e) => setWalletAddress(e.target.value)}
                    onKeyPress={handleKeyPress}
                    placeholder="Enter wallet address (e.g., 0x1234...)"
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-[#2a74ea] transition-colors"
                  />
                </div>
                <button
                  onClick={handleSearch}
                  disabled={isSearching || !walletAddress.trim()}
                  className="flex items-center gap-3 px-6 py-3 bg-[#2a74ea] text-white font-semibold rounded-lg hover:bg-[#1d4ed8] disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  {isSearching ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                      Searching...
                    </>
                  ) : (
                    <>
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 256 256">
                        <path d="M229.66,218.34l-50.07-50.06a88.11,88.11,0,1,0-11.31,11.31l50.06,50.07a8,8,0,0,0,11.32-11.32ZM40,112a72,72,0,1,1,72,72A72.08,72.08,0,0,1,40,112Z"></path>
                      </svg>
                      Search
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>

          {/* Results Section */}
          {searchResults !== null && (
            <div className="bg-black/20 backdrop-blur-xl border border-white/10 rounded-xl p-6 shadow-2xl">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-blue-500/20 rounded-full flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 256 256" className="text-blue-400">
                    <path d="M216,72H56a8,8,0,0,1,0-16H192a8,8,0,0,0,0-16H56A24,24,0,0,0,32,64V192a24,24,0,0,0,24,24H216a16,16,0,0,0,16-16V88A16,16,0,0,0,216,72Zm0,128H56a8,8,0,0,1-8-8V86.63A23.84,23.84,0,0,0,56,88H216Zm-48-60a12,12,0,1,1,12,12A12,12,0,0,1,168,140Z"></path>
                  </svg>
                </div>
                <div>
                  <h2 className="text-white text-2xl font-bold">Search Results</h2>
                  <p className="text-white/60 text-sm">
                    Wallet: {walletAddress.slice(0, 6)}...{walletAddress.slice(-4)}
                  </p>
                </div>
              </div>

              {searchResults.length > 0 ? (
                <div className="space-y-4">
                  <div className="flex items-center gap-2 text-white/60 text-sm mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 256 256">
                      <path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216Zm0-144a56,56,0,0,0-56,56,8,8,0,0,1-16,0,72,72,0,0,1,144,0,8,8,0,0,1-16,0A56,56,0,0,0,128,72Zm0,88a12,12,0,1,1,12-12A12,12,0,0,1,128,160Z"></path>
                    </svg>
                    <span>Found {searchResults.length} certificate{searchResults.length !== 1 ? 's' : ''}</span>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {searchResults.map((certificate) => (
                      <div key={certificate.id} className="bg-white/5 backdrop-blur-sm border border-white/20 rounded-lg p-4 hover:bg-white/10 transition-all duration-300">
                        <div className="flex items-start gap-4">
                          <img 
                            src={certificate.image} 
                            alt={certificate.title}
                            className="w-16 h-16 rounded-lg object-cover border border-white/20"
                          />
                          <div className="flex-1">
                            <h3 className="text-white font-semibold text-lg mb-1">{certificate.title}</h3>
                            <p className="text-white/70 text-sm mb-2">{certificate.issuer}</p>
                            <div className="flex items-center gap-4 text-xs text-white/60">
                              <span>{new Date(certificate.date).toLocaleDateString()}</span>
                              <span className={`px-2 py-1 rounded-full text-xs font-semibold ${
                                certificate.status === 'Active' 
                                  ? 'bg-green-500/20 text-green-400' 
                                  : 'bg-red-500/20 text-red-400'
                              }`}>
                                {certificate.status}
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ) : (
                <div className="text-center py-12">
                  <div className="w-16 h-16 mx-auto mb-4 bg-white/10 rounded-full flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" viewBox="0 0 256 256" className="text-white/60">
                      <path d="M216,24H40A16,16,0,0,0,24,40V216a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V40A16,16,0,0,0,216,24Zm0,192H40V40H216V216ZM96,112v64a8,8,0,0,1-16,0V112a8,8,0,0,1,16,0Zm88,28v36a8,8,0,0,1-16,0V140a20,20,0,0,0-40,0v36a8,8,0,0,1-16,0V112a8,8,0,0,1,15.79-1.78A36,36,0,0,1,184,140ZM100,84A12,12,0,1,1,88,72,12,12,0,0,1,100,84Z"></path>
                    </svg>
                  </div>
                  <h3 className="text-white text-xl font-semibold mb-2">No Certificates Found</h3>
                  <p className="text-white/60">This wallet address doesn't have any certificates associated with it.</p>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SearchWallet;
