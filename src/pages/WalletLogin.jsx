import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const WalletLogin = () => {
  const [isConnecting, setIsConnecting] = useState(false);
  const navigate = useNavigate();

  const handleConnectWallet = async () => {
    setIsConnecting(true);
    
    // Mock wallet connection - in real app, this would connect to MetaMask
    setTimeout(() => {
      setIsConnecting(false);
      // Redirect to dashboard after successful connection
      navigate('/dashboard');
    }, 2000);
  };

  return (
    <div className="px-40 flex flex-1 justify-center py-5">
      <div className="layout-content-container flex flex-col w-[512px] max-w-[512px] py-5 max-w-[960px] flex-1">
        <h2 className="text-[#111418] tracking-light text-[28px] font-bold leading-tight px-4 text-center pb-3 pt-5">
          Dashboard Login
        </h2>
        
        <div className="flex px-4 py-3 justify-center">
          <button
            onClick={handleConnectWallet}
            disabled={isConnecting}
            className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 px-4 bg-[#2a74ea] text-white gap-2 pl-4 text-sm font-bold leading-normal tracking-[0.015em] hover:bg-[#1d4ed8] disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <div className="text-white" data-icon="Key" data-size="20px" data-weight="regular">
              <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" fill="currentColor" viewBox="0 0 256 256">
                <path d="M160,16A80.07,80.07,0,0,0,83.91,120.78L26.34,178.34A8,8,0,0,0,24,184v40a8,8,0,0,0,8,8H72a8,8,0,0,0,8-8V208H96a8,8,0,0,0,8-8V184h16a8,8,0,0,0,5.66-2.34l9.56-9.57A80,80,0,1,0,160,16Zm0,144a63.7,63.7,0,0,1-23.65-4.51,8,8,0,0,0-8.84,1.68L116.69,168H96a8,8,0,0,0-8,8v16H72a8,8,0,0,0-8,8v16H40V187.31l58.83-58.82a8,8,0,0,0,1.68-8.84A64,64,0,1,1,160,160Zm32-84a12,12,0,1,1-12-12A12,12,0,0,1,192,76Z"></path>
              </svg>
            </div>
            <span className="truncate">
              {isConnecting ? 'Connecting...' : 'Connect Wallet'}
            </span>
          </button>
        </div>

        {isConnecting && (
          <div className="px-4 py-3 text-center">
            <p className="text-[#637188] text-sm font-normal leading-normal">
              Please approve the connection in your wallet...
            </p>
          </div>
        )}

        <div className="px-4 py-8 text-center">
          <p className="text-[#637188] text-sm font-normal leading-normal">
            Connect your wallet to access your certificates and manage your blockchain credentials.
          </p>
        </div>
      </div>
    </div>
  );
};

export default WalletLogin;

