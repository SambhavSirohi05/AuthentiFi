import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import LiquidEther from '../components/LiquidEther';
import { connectWallet, isMetaMaskInstalled } from '../utils/wallet';

const WalletLogin = () => {
  const [isConnecting, setIsConnecting] = useState(false);
  const [error, setError] = useState('');
  const [isMetaMaskAvailable, setIsMetaMaskAvailable] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setIsMetaMaskAvailable(isMetaMaskInstalled());
  }, []);

  const handleConnectWallet = async () => {
    setIsConnecting(true);
    setError('');
    
    try {
      const walletData = await connectWallet();
      
      // Store wallet connection data
      localStorage.setItem('walletConnected', 'true');
      localStorage.setItem('walletAddress', walletData.address);
      localStorage.setItem('walletNetwork', walletData.network);
      
      // Redirect to dashboard after successful connection
      navigate('/dashboard');
    } catch (err) {
      setError(err.message);
      console.error('Wallet connection failed:', err);
    } finally {
      setIsConnecting(false);
    }
  };

  return (
    <div className="relative min-h-screen">
      {/* LiquidEther Background */}
      <div className="absolute inset-0 z-0">
        <LiquidEther
          colors={['#5227FF', '#FF9FFC', '#B19EEF']}
          mouseForce={50}
          cursorSize={150}
          isViscous={false}
          viscous={30}
          iterationsViscous={32}
          iterationsPoisson={32}
          resolution={0.8}
          isBounce={false}
          autoDemo={false}
          autoSpeed={0.5}
          autoIntensity={2.2}
          takeoverDuration={0.25}
          autoResumeDelay={3000}
          autoRampDuration={0.6}
        />
      </div>
      
      <div className="relative z-10 min-h-screen flex items-center justify-center px-10 py-8">
        <div className="w-full max-w-md">
          <div className="bg-black/20 backdrop-blur-xl border border-white/10 rounded-xl p-8 text-center shadow-2xl hover:bg-black/30 transition-all duration-300 group relative overflow-hidden">
            {/* Liquid glass effect overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            <div className="relative z-10">
              {/* Header */}
              <div className="mb-8">
                <div className="w-16 h-16 mx-auto mb-6 bg-white/10 rounded-full flex items-center justify-center relative z-10">
                  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" viewBox="0 0 256 256" className="text-white">
                    <path d="M160,16A80.07,80.07,0,0,0,83.91,120.78L26.34,178.34A8,8,0,0,0,24,184v40a8,8,0,0,0,8,8H72a8,8,0,0,0,8-8V208H96a8,8,0,0,0,8-8V184h16a8,8,0,0,0,5.66-2.34l9.56-9.57A80,80,0,1,0,160,16Zm0,144a63.7,63.7,0,0,1-23.65-4.51,8,8,0,0,0-8.84,1.68L116.69,168H96a8,8,0,0,0-8,8v16H72a8,8,0,0,0-8,8v16H40V187.31l58.83-58.82a8,8,0,0,0,1.68-8.84A64,64,0,1,1,160,160Zm32-84a12,12,0,1,1-12-12A12,12,0,0,1,192,76Z"></path>
                  </svg>
                </div>
                <h2 className="text-white text-3xl font-bold leading-tight mb-4 relative z-10">
                  Connect Your Wallet
                </h2>
                <p className="text-white/70 text-lg leading-normal relative z-10">
                  Connect your wallet to view your blockchain-verified certificates and manage your credentials
                </p>
              </div>
              
              {/* Connect Button */}
              <div className="mb-8">
                {!isMetaMaskAvailable ? (
                  <div className="text-center">
                    <p className="text-red-400 text-sm mb-4">MetaMask is not installed</p>
                    <a
                      href="https://metamask.io/download/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-3 px-8 py-4 bg-[#2a74ea] text-white text-lg font-bold rounded-xl hover:bg-[#1d4ed8] transition-all duration-300 shadow-lg hover:shadow-xl"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 256 256">
                        <path d="M160,16A80.07,80.07,0,0,0,83.91,120.78L26.34,178.34A8,8,0,0,0,24,184v40a8,8,0,0,0,8,8H72a8,8,0,0,0,8-8V208H96a8,8,0,0,0,8-8V184h16a8,8,0,0,0,5.66-2.34l9.56-9.57A80,80,0,1,0,160,16Zm0,144a63.7,63.7,0,0,1-23.65-4.51,8,8,0,0,0-8.84,1.68L116.69,168H96a8,8,0,0,0-8,8v16H72a8,8,0,0,0-8,8v16H40V187.31l58.83-58.82a8,8,0,0,0,1.68-8.84A64,64,0,1,1,160,160Zm32-84a12,12,0,1,1-12-12A12,12,0,0,1,192,76Z"></path>
                      </svg>
                      Install MetaMask
                    </a>
                  </div>
                ) : (
                  <button
                    onClick={handleConnectWallet}
                    disabled={isConnecting}
                    className="flex items-center justify-center gap-3 px-8 py-4 bg-[#2a74ea] text-white text-lg font-bold rounded-xl hover:bg-[#1d4ed8] disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 shadow-lg hover:shadow-xl w-full relative z-10"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 256 256">
                      <path d="M160,16A80.07,80.07,0,0,0,83.91,120.78L26.34,178.34A8,8,0,0,0,24,184v40a8,8,0,0,0,8,8H72a8,8,0,0,0,8-8V208H96a8,8,0,0,0,8-8V184h16a8,8,0,0,0,5.66-2.34l9.56-9.57A80,80,0,1,0,160,16Zm0,144a63.7,63.7,0,0,1-23.65-4.51,8,8,0,0,0-8.84,1.68L116.69,168H96a8,8,0,0,0-8,8v16H72a8,8,0,0,0-8,8v16H40V187.31l58.83-58.82a8,8,0,0,0,1.68-8.84A64,64,0,1,1,160,160Zm32-84a12,12,0,1,1-12-12A12,12,0,0,1,192,76Z"></path>
                    </svg>
                    {isConnecting ? 'Connecting...' : 'Connect Wallet'}
                  </button>
                )}
              </div>

              {/* Loading State */}
              {isConnecting && (
                <div className="mb-6">
                  <div className="flex items-center justify-center gap-3 text-white/70 relative z-10">
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                    <p className="text-sm font-medium">
                      Please approve the connection in your wallet...
                    </p>
                  </div>
                </div>
              )}

              {/* Error Message */}
              {error && (
                <div className="mb-6">
                  <div className="bg-red-500/20 border border-red-500/30 rounded-lg p-4 relative z-10">
                    <p className="text-red-400 text-sm font-medium">{error}</p>
                  </div>
                </div>
              )}

              {/* Additional Info */}
              <div className="text-center relative z-10">
                <p className="text-white/60 text-sm leading-normal mb-4">
                  By connecting your wallet, you agree to our terms of service and privacy policy.
                </p>
                <div className="flex items-center justify-center gap-2 text-white/50 text-xs">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 256 256">
                    <path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216Zm0-144a56,56,0,0,0-56,56,8,8,0,0,1-16,0,72,72,0,0,1,144,0,8,8,0,0,1-16,0A56,56,0,0,0,128,72Zm0,88a12,12,0,1,1,12-12A12,12,0,0,1,128,160Z"></path>
                  </svg>
                  <span>We'll automatically switch to Sepolia testnet</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WalletLogin;

