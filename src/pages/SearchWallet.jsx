import { useState, useMemo, useCallback } from 'react';
import { mockWalletCertificates } from '../data/mockData';
import LaserFlowWithLogos from '../components/LaserFlowWithLogos';
import axios from 'axios';

const SearchWallet = () => {
  const [walletAddress, setWalletAddress] = useState('');
  const [searchResults, setSearchResults] = useState(null);
  const [isSearching, setIsSearching] = useState(false);
  const [importedNFTs, setImportedNFTs] = useState([]);

  // Memoize mock NFT data to prevent recreation on every render
  const mockNFTs = useMemo(() => [
    {
      id: 'nft-1',
      title: 'Blockchain Developer Certificate',
      description: 'Certified blockchain developer with expertise in smart contracts',
      issuer: 'Ethereum Foundation',
      date: '2024-01-15',
      status: 'Active',
      tokenId: '12345',
      contractAddress: '0x1234567890abcdef1234567890abcdef12345678',
      image: null
    },
    {
      id: 'nft-2',
      title: 'Web3 Security Specialist',
      description: 'Advanced certification in Web3 security protocols',
      issuer: 'ConsenSys',
      date: '2024-02-20',
      status: 'Active',
      tokenId: '67890',
      contractAddress: '0x1234567890abcdef1234567890abcdef12345678',
      image: null
    }
  ], []);

  const handleSearch = useCallback(async () => {
    if (!walletAddress.trim()) return;
    
    setIsSearching(true);
    setImportedNFTs([]);
    
    try {
      // First try to fetch NFTs from OpenSea API
      try {
        const response = await axios.get(`https://api.opensea.io/api/v1/assets?owner=${walletAddress}&limit=20`);
        const nfts = response.data.assets?.map((asset, index) => ({
          id: asset.token_id || `nft-${index}`,
          title: asset.name || `NFT #${asset.token_id || index}`,
          description: asset.description || 'Blockchain-verified certificate',
          issuer: asset.collection?.name || 'Unknown Collection',
          date: new Date(asset.last_sale?.event_timestamp || Date.now()).toLocaleDateString(),
          status: 'Active',
          tokenId: asset.token_id || 'N/A',
          contractAddress: asset.asset_contract?.address || 'N/A',
          image: asset.image_url || null
        })) || [];
        
        setImportedNFTs(nfts);
      } catch (apiError) {
        console.log('OpenSea API failed, using mock data:', apiError.message);
        // Fallback to mock data
        setImportedNFTs(mockNFTs);
      }
      
      // Also get mock certificates for this wallet
      const results = mockWalletCertificates[walletAddress.toLowerCase()] || [];
      setSearchResults(results);
    } catch (error) {
      console.error('Search error:', error);
      setSearchResults([]);
    } finally {
      setIsSearching(false);
    }
  }, [walletAddress, mockNFTs]);

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };


  return (
    <div className="relative min-h-screen">
      {/* LaserFlow Background with Company Logos */}
      <div className="absolute inset-0 z-0">
        <LaserFlowWithLogos />
      </div>

      {/* Main Content */}
      <div className="relative z-10 min-h-screen flex flex-col">
        <div className="flex-1 flex items-center justify-center px-10 py-20">
          <div className="max-w-6xl mx-auto w-full">
            {/* Header */}
            <div className="text-center mb-8">
              <h1 className="text-white text-6xl md:text-7xl font-black leading-none tracking-tight mb-6">
                Search Wallet
              </h1>
            </div>

            {/* Search Section */}
            <div className="bg-black/20 backdrop-blur-xl border border-white/10 rounded-2xl p-8 mb-8 shadow-2xl">
              <div className="flex flex-col lg:flex-row gap-4">
                <div className="flex-1">
                  <input
                    type="text"
                    value={walletAddress}
                    onChange={(e) => setWalletAddress(e.target.value)}
                    onKeyPress={handleKeyPress}
                    placeholder="Enter wallet address (e.g., 0x1234...)"
                    className="w-full bg-black/40 border border-white/20 rounded-xl px-6 py-4 text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all text-lg"
                  />
                </div>
                <button
                  onClick={handleSearch}
                  disabled={isSearching || !walletAddress.trim()}
                  className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 disabled:from-gray-600 disabled:to-gray-600 disabled:cursor-not-allowed text-white px-8 py-4 rounded-xl font-semibold transition-all flex items-center justify-center gap-3 text-lg shadow-lg hover:shadow-xl transform hover:scale-105 disabled:transform-none"
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
                      Search Wallet
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Description Text */}
            <div className="text-center mb-12">
              <p className="text-white/80 text-xl md:text-2xl max-w-4xl mx-auto leading-relaxed whitespace-nowrap">
                Browse thousands of wallets to discover verified achievements and certifications.
              </p>
            </div>

            {/* Imported NFTs */}
            {importedNFTs.length > 0 && (
              <div className="mb-12">
                <div className="text-center mb-8">
                  <h2 className="text-white text-3xl font-bold mb-4">
                    Imported NFTs ({importedNFTs.length})
                  </h2>
                  <p className="text-white/60">
                    Wallet: {walletAddress.slice(0, 6)}...{walletAddress.slice(-4)}
                  </p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {importedNFTs.map((nft) => (
                    <div
                      key={nft.id}
                      className="bg-black/20 backdrop-blur-xl border border-white/10 rounded-2xl p-6 hover:border-cyan-500/50 transition-all group shadow-xl hover:shadow-2xl transform hover:scale-105"
                    >
                      {nft.image && (
                        <div className="mb-4">
                          <img
                            src={nft.image}
                            alt={nft.title}
                            className="w-full h-32 object-cover rounded-lg"
                          />
                        </div>
                      )}
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex-1">
                          <h3 className="text-white text-xl font-semibold mb-2 group-hover:text-cyan-400 transition-colors">
                            {nft.title}
                          </h3>
                          <p className="text-white/60 text-sm mb-3">
                            {nft.description}
                          </p>
                        </div>
                        <div className="bg-green-500/20 text-green-400 border border-green-500/30 px-3 py-1 rounded-full text-xs font-medium">
                          {nft.status}
                        </div>
                      </div>
                      
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between">
                          <span className="text-white/50">Collection:</span>
                          <span className="text-white">{nft.issuer}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-white/50">Date:</span>
                          <span className="text-white">{nft.date}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-white/50">Token ID:</span>
                          <span className="text-cyan-400 font-mono text-xs">
                            {nft.tokenId}
                          </span>
                        </div>
                        {nft.contractAddress && (
                          <div className="flex justify-between">
                            <span className="text-white/50">Contract:</span>
                            <span className="text-cyan-400 font-mono text-xs">
                              {nft.contractAddress.slice(0, 6)}...{nft.contractAddress.slice(-4)}
                            </span>
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Search Results */}
            {searchResults !== null && (
              <div>
                {isSearching ? (
                  <div className="text-center py-16">
                    <div className="w-12 h-12 border-4 border-purple-500/30 border-t-purple-500 rounded-full animate-spin mx-auto mb-6"></div>
                    <p className="text-white/60 text-lg">Searching wallet...</p>
                  </div>
                ) : searchResults.length > 0 ? (
                  <>
                    <div className="text-center mb-8">
                      <h2 className="text-white text-3xl font-bold mb-4">
                        Found {searchResults.length} certificate{searchResults.length !== 1 ? 's' : ''}
                      </h2>
                      <p className="text-white/60">
                        Wallet: {walletAddress.slice(0, 6)}...{walletAddress.slice(-4)}
                      </p>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                      {searchResults.map((certificate) => (
                        <div
                          key={certificate.id}
                          className="bg-black/20 backdrop-blur-xl border border-white/10 rounded-2xl p-6 hover:border-purple-500/50 transition-all group shadow-xl hover:shadow-2xl transform hover:scale-105"
                        >
                          <div className="flex items-start justify-between mb-4">
                            <div className="flex-1">
                              <h3 className="text-white text-xl font-semibold mb-2 group-hover:text-purple-400 transition-colors">
                                {certificate.title}
                              </h3>
                              <p className="text-white/60 text-sm mb-3">
                                {certificate.description}
                              </p>
                            </div>
                            <div className={`px-3 py-1 rounded-full text-xs font-medium ${
                              certificate.status === 'Active' 
                                ? 'bg-green-500/20 text-green-400 border border-green-500/30' 
                                : 'bg-red-500/20 text-red-400 border border-red-500/30'
                            }`}>
                              {certificate.status}
                            </div>
                          </div>
                          
                          <div className="space-y-2 text-sm">
                            <div className="flex justify-between">
                              <span className="text-white/50">Issuer:</span>
                              <span className="text-white">{certificate.issuer}</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-white/50">Date:</span>
                              <span className="text-white">{certificate.date}</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-white/50">Wallet:</span>
                              <span className="text-purple-400 font-mono text-xs">
                                {certificate.walletAddress.slice(0, 6)}...{certificate.walletAddress.slice(-4)}
                              </span>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </>
                ) : (
                  <div className="text-center py-16">
                    <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-6">
                      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" viewBox="0 0 256 256" className="text-white/40">
                        <path d="M229.66,218.34l-50.07-50.06a88.11,88.11,0,1,0-11.31,11.31l50.06,50.07a8,8,0,0,0,11.32-11.32ZM40,112a72,72,0,1,1,72,72A72.08,72.08,0,0,1,40,112Z"></path>
                      </svg>
                    </div>
                    <h3 className="text-white text-xl font-semibold mb-2">No certificates found</h3>
                    <p className="text-white/60">
                      No certificates were found for wallet address: {walletAddress.slice(0, 6)}...{walletAddress.slice(-4)}
                    </p>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchWallet;