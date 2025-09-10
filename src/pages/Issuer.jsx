import { useState } from 'react';

const Issuer = () => {
  const [formData, setFormData] = useState({
    studentWallet: '',
    certificateTitle: '',
    description: ''
  });
  const [showSuccess, setShowSuccess] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleMintCertificate = (e) => {
    e.preventDefault();
    
    if (!formData.studentWallet || !formData.certificateTitle || !formData.description) {
      alert('Please fill in all fields');
      return;
    }

    // Mock minting - in real app, this would interact with smart contract
    setShowSuccess(true);
    setTimeout(() => setShowSuccess(false), 5000);
    
    // Reset form
    setFormData({
      studentWallet: '',
      certificateTitle: '',
      description: ''
    });
  };

  return (
    <div className="px-10 flex flex-1 justify-center py-5">
      <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
        <div className="flex flex-wrap justify-between gap-3 p-4">
          <p className="text-white tracking-light text-[32px] font-bold leading-tight min-w-72">Issuer Dashboard</p>
        </div>

        {/* Upload Certificate Image Section */}
        <div className="p-4">
          <div className="flex items-stretch justify-between gap-4 rounded-xl">
            <div className="flex flex-[2_2_0px] flex-col gap-4">
              <div className="flex flex-col gap-1">
                <p className="text-[#111418] text-base font-bold leading-tight">Upload Certificate Image</p>
                <p className="text-[#637188] text-sm font-normal leading-normal">Upload a certificate image to automatically generate an NFT.</p>
              </div>
              <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-8 px-4 flex-row-reverse bg-[#f0f2f4] text-[#111418] text-sm font-medium leading-normal w-fit hover:bg-[#e5e7eb]">
                <span className="truncate">Upload</span>
              </button>
            </div>
            <div
              className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl flex-1"
              style={{
                backgroundImage: `url("https://lh3.googleusercontent.com/aida-public/AB6AXuASm7B8_5ivYG3btv_SrnYIyDxsbJ3qFu2GtGrncDXpfEgyrmbMOXnthVPu_q90gqoKCqCFkoiKgfyMUwN7XbKKQCEMHT5GAmMG2Ty2Yy9b-EqVeEz1fX5fSCavSHum-ny4z49BkY1it--DHgBILD5aF2Jw_cnxpMG_mu5Zb3-j3C6HKKj8l_Zu536geIu-QXwyu1HI1Loj2kREr54RxYVbbW4riTVN0gBWZywJvWFn99u71-7UIYc1qQ--_uO6LFtIc2Z5uwC7NF1S")`
              }}
            ></div>
          </div>
        </div>

        {/* Certificate Form Section */}
        <div className="p-4">
          <div className="bg-white rounded-xl p-6 shadow-[0_0_4px_rgba(0,0,0,0.1)]">
            <h3 className="text-[#111418] text-lg font-bold leading-tight mb-4">Mint New Certificate</h3>
            
            <form onSubmit={handleMintCertificate} className="space-y-4">
              <div>
                <label className="block text-[#111418] text-sm font-medium leading-normal mb-2">
                  Student Wallet Address
                </label>
                <input
                  type="text"
                  name="studentWallet"
                  value={formData.studentWallet}
                  onChange={handleInputChange}
                  placeholder="0x..."
                  className="w-full px-4 py-3 border border-[#dcdfe5] rounded-xl focus:outline-none focus:border-[#2a74ea] text-[#111418]"
                />
              </div>

              <div>
                <label className="block text-[#111418] text-sm font-medium leading-normal mb-2">
                  Certificate Title
                </label>
                <input
                  type="text"
                  name="certificateTitle"
                  value={formData.certificateTitle}
                  onChange={handleInputChange}
                  placeholder="e.g., B.Sc. Computer Science"
                  className="w-full px-4 py-3 border border-[#dcdfe5] rounded-xl focus:outline-none focus:border-[#2a74ea] text-[#111418]"
                />
              </div>

              <div>
                <label className="block text-[#111418] text-sm font-medium leading-normal mb-2">
                  Description
                </label>
                <textarea
                  name="description"
                  value={formData.description}
                  onChange={handleInputChange}
                  placeholder="Certificate details and achievements..."
                  rows={4}
                  className="w-full px-4 py-3 border border-[#dcdfe5] rounded-xl focus:outline-none focus:border-[#2a74ea] text-[#111418] resize-none"
                />
              </div>

              <button
                type="submit"
                className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 px-4 bg-[#2a74ea] text-white text-sm font-bold leading-normal tracking-[0.015em] hover:bg-[#1d4ed8]"
              >
                <span className="truncate">Mint Certificate</span>
              </button>
            </form>
          </div>
        </div>

        {/* Success Toast */}
        {showSuccess && (
          <div className="fixed top-4 right-4 bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded-xl shadow-lg z-50">
            <div className="flex items-center">
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              Certificate minted successfully (demo mode)!
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Issuer;

