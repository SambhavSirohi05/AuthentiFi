import { useState } from 'react';
import CertificateCard from '../components/CertificateCard';
import { mockWalletCertificates } from '../data/mockData';

const Verify = () => {
  const [walletAddress, setWalletAddress] = useState('');
  const [certificates, setCertificates] = useState([]);
  const [isVerified, setIsVerified] = useState(false);

  const handleVerify = () => {
    if (!walletAddress.trim()) {
      alert('Please enter a wallet address');
      return;
    }

    // Mock verification - in real app, this would query the blockchain
    const foundCertificates = mockWalletCertificates[walletAddress.toLowerCase()] || [];
    setCertificates(foundCertificates);
    setIsVerified(true);
  };

  return (
    <div className="px-10 flex flex-1 justify-center py-5">
      <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
        <div className="flex flex-wrap justify-between gap-3 p-4">
          <p className="text-white tracking-light text-[32px] font-bold leading-tight min-w-72">Verify Certificate</p>
        </div>
        
        <div className="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
          <label className="flex flex-col min-w-40 flex-1">
            <input
              placeholder="Enter wallet address"
              className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-[#111418] focus:outline-0 focus:ring-0 border border-[#dcdfe5] bg-white focus:border-[#dcdfe5] h-14 placeholder:text-[#637188] p-[15px] text-base font-normal leading-normal"
              value={walletAddress}
              onChange={(e) => setWalletAddress(e.target.value)}
            />
          </label>
        </div>
        
        <div className="flex px-4 py-3 justify-start">
          <button
            onClick={handleVerify}
            className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 px-4 bg-[#2a74ea] text-white text-sm font-bold leading-normal tracking-[0.015em] hover:bg-[#1d4ed8]"
          >
            <span className="truncate">Verify</span>
          </button>
        </div>

        {isVerified && (
          <>
            <h2 className="text-[#111418] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">
              Certificates
            </h2>
            
            {certificates.length > 0 ? (
              <div className="space-y-4">
                {certificates.map((certificate) => (
                  <div key={certificate.id} className="p-4">
                    <CertificateCard certificate={certificate} showStatus={true} />
                  </div>
                ))}
              </div>
            ) : (
              <div className="px-4 py-8 text-center">
                <p className="text-[#637188] text-base font-normal leading-normal">
                  No certificates found for this wallet address.
                </p>
              </div>
            )}
          </>
        )}

        {isVerified && certificates.length === 0 && (
          <div className="px-4 py-8 text-center">
            <p className="text-[#637188] text-base font-normal leading-normal">
              No certificates found for this wallet address.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Verify;


