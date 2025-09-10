import { useState } from 'react';
import { Link } from 'react-router-dom';
import CertificateCard from '../components/CertificateCard';
import { mockCertificates } from '../data/mockData';

const Dashboard = () => {
  const [isWalletConnected, setIsWalletConnected] = useState(false);

  const handleConnectWallet = () => {
    setIsWalletConnected(true);
    // In a real app, this would connect to MetaMask or another wallet
  };

  return (
    <div className="px-10 flex flex-1 justify-center py-5">
      <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
        <div className="flex flex-wrap justify-between gap-3 p-4">
          <p className="text-white tracking-light text-[32px] font-bold leading-tight min-w-72">Your Certificates</p>
          {!isWalletConnected && (
            <button
              onClick={handleConnectWallet}
              className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 px-4 bg-[#2a74ea] text-white text-sm font-bold leading-normal tracking-[0.015em] hover:bg-[#1d4ed8]"
            >
              <span className="truncate">Connect Wallet</span>
            </button>
          )}
        </div>
        
        {isWalletConnected ? (
          <div className="space-y-4">
            {mockCertificates.map((certificate) => (
              <div key={certificate.id} className="p-4">
                <CertificateCard certificate={certificate} />
              </div>
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center py-20 px-4">
            <div className="text-center">
              <h3 className="text-[#111418] text-xl font-bold leading-tight mb-4">Connect Your Wallet</h3>
              <p className="text-[#637188] text-base font-normal leading-normal mb-6">
                Connect your wallet to view your blockchain-verified certificates
              </p>
              <button
                onClick={handleConnectWallet}
                className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-12 px-6 bg-[#2a74ea] text-white text-base font-bold leading-normal tracking-[0.015em] hover:bg-[#1d4ed8]"
              >
                <span className="truncate">Connect Wallet</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Dashboard;


