import { useState } from 'react';
import LiquidEther from '../components/LiquidEther';
import { Cable, Link, BadgeCheck } from 'lucide-react';

const Issuer = () => {
  const [activeTab, setActiveTab] = useState('mint'); // 'mint' or 'send'
  const [mintFormData, setMintFormData] = useState({
    certificateTitle: '',
    description: ''
  });
  const [sendFormData, setSendFormData] = useState({
    studentWallet: '',
    certificateId: ''
  });
  const [showSuccess, setShowSuccess] = useState(false);
  const [isMinting, setIsMinting] = useState(false);
  const [isSending, setIsSending] = useState(false);

  const handleMintInputChange = (e) => {
    const { name, value } = e.target;
    setMintFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSendInputChange = (e) => {
    const { name, value } = e.target;
    setSendFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleMintCertificate = async (e) => {
    e.preventDefault();
    
    if (!mintFormData.certificateTitle || !mintFormData.description) {
      alert('Please fill in all fields');
      return;
    }

    setIsMinting(true);
    
    // Mock minting - in real app, this would interact with smart contract
    setTimeout(() => {
      setShowSuccess(true);
      setIsMinting(false);
      setTimeout(() => setShowSuccess(false), 5000);
      
      // Reset form
      setMintFormData({
        certificateTitle: '',
        description: ''
      });
    }, 2000);
  };

  const handleSendCertificate = async (e) => {
    e.preventDefault();
    
    if (!sendFormData.studentWallet || !sendFormData.certificateId) {
      alert('Please fill in all fields');
      return;
    }

    setIsSending(true);
    
    // Mock sending - in real app, this would interact with smart contract
    setTimeout(() => {
      setShowSuccess(true);
      setIsSending(false);
      setTimeout(() => setShowSuccess(false), 5000);
      
      // Reset form
      setSendFormData({
        studentWallet: '',
        certificateId: ''
      });
    }, 2000);
  };

  return (
    <div className="relative min-h-screen">
      {/* LiquidEther Background */}
      <div className="absolute inset-0 z-0">
        <LiquidEther />
      </div>

      {/* Main Content */}
      <div className="relative z-10 min-h-screen flex flex-col">
        <div className="flex-1 flex items-center justify-center px-10 py-20">
          <div className="max-w-4xl mx-auto w-full">
            {/* Header */}
            <div className="text-center mb-16">
              <h1 className="text-white text-6xl md:text-7xl font-black leading-none tracking-tight mb-6">
                Issuer Dashboard
              </h1>
              <p className="text-white/80 text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed">
                Mint blockchain-verified certificates for students
              </p>
            </div>

            {/* Tab Toggle */}
            <div className="flex justify-center mb-8">
              <div className="bg-black/20 backdrop-blur-xl border border-white/10 rounded-xl p-1">
                <button
                  onClick={() => setActiveTab('mint')}
                  className={`px-6 py-3 rounded-lg font-semibold transition-all ${
                    activeTab === 'mint'
                      ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg'
                      : 'text-white/60 hover:text-white'
                  }`}
                >
                  Mint Certificate
                </button>
                <button
                  onClick={() => setActiveTab('send')}
                  className={`px-6 py-3 rounded-lg font-semibold transition-all ${
                    activeTab === 'send'
                      ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg'
                      : 'text-white/60 hover:text-white'
                  }`}
                >
                  Send Certificate
                </button>
              </div>
            </div>

            {/* Mint Certificate Form */}
            {activeTab === 'mint' && (
              <div className="bg-black/20 backdrop-blur-xl border border-white/10 rounded-2xl p-8 mb-8 shadow-2xl">
                <div className="text-center mb-8">
                  <h2 className="text-white text-3xl font-bold mb-4">Mint New Certificate</h2>
                  <p className="text-white/60 text-lg">
                    Create a new blockchain-verified certificate
                  </p>
                </div>
                
                <form onSubmit={handleMintCertificate} className="space-y-6">
                  <div>
                    <label className="block text-white text-lg font-semibold mb-3">
                      Certificate Title
                    </label>
                    <input
                      type="text"
                      name="certificateTitle"
                      value={mintFormData.certificateTitle}
                      onChange={handleMintInputChange}
                      placeholder="e.g., B.Sc. Computer Science"
                      className="w-full bg-black/40 border border-white/20 rounded-xl px-6 py-4 text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all text-lg"
                    />
                  </div>

                  <div>
                    <label className="block text-white text-lg font-semibold mb-3">
                      Description
                    </label>
                    <textarea
                      name="description"
                      value={mintFormData.description}
                      onChange={handleMintInputChange}
                      placeholder="Certificate details, achievements, and additional information..."
                      rows={4}
                      className="w-full bg-black/40 border border-white/20 rounded-xl px-6 py-4 text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all text-lg resize-none"
                    />
                  </div>

                  <div className="text-center pt-4">
                    <button
                      type="submit"
                      disabled={isMinting || !mintFormData.certificateTitle.trim() || !mintFormData.description.trim()}
                      className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 disabled:from-gray-600 disabled:to-gray-700 disabled:cursor-not-allowed text-white px-12 py-4 rounded-xl font-semibold transition-all flex items-center justify-center gap-3 text-lg shadow-lg hover:shadow-xl transform hover:scale-105 disabled:transform-none mx-auto"
                    >
                      {isMinting ? (
                        <>
                          <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                          Minting Certificate...
                        </>
                      ) : (
                        <>
                          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 256 256">
                            <path d="M224,48H32A16,16,0,0,0,16,64V192a16,16,0,0,0,16,16H224a16,16,0,0,0,16-16V64A16,16,0,0,0,224,48ZM32,64H224V80H32ZM32,192V96H224v96Z"></path>
                          </svg>
                          Mint Certificate
                        </>
                      )}
                    </button>
                  </div>
                </form>
              </div>
            )}

            {/* Send Certificate Form */}
            {activeTab === 'send' && (
              <div className="bg-black/20 backdrop-blur-xl border border-white/10 rounded-2xl p-8 mb-8 shadow-2xl">
                <div className="text-center mb-8">
                  <h2 className="text-white text-3xl font-bold mb-4">Send Certificate</h2>
                  <p className="text-white/60 text-lg">
                    Transfer an existing certificate to a student's wallet
                  </p>
                </div>
                
                <form onSubmit={handleSendCertificate} className="space-y-6">
                  <div>
                    <label className="block text-white text-lg font-semibold mb-3">
                      Student Wallet Address
                    </label>
                    <input
                      type="text"
                      name="studentWallet"
                      value={sendFormData.studentWallet}
                      onChange={handleSendInputChange}
                      placeholder="0x1234567890abcdef1234567890abcdef12345678"
                      className="w-full bg-black/40 border border-white/20 rounded-xl px-6 py-4 text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all text-lg"
                    />
                  </div>

                  <div>
                    <label className="block text-white text-lg font-semibold mb-3">
                      Certificate ID
                    </label>
                    <input
                      type="text"
                      name="certificateId"
                      value={sendFormData.certificateId}
                      onChange={handleSendInputChange}
                      placeholder="e.g., CERT-12345 or Token ID"
                      className="w-full bg-black/40 border border-white/20 rounded-xl px-6 py-4 text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all text-lg"
                    />
                  </div>

                  <div className="text-center pt-4">
                    <button
                      type="submit"
                      disabled={isSending || !sendFormData.studentWallet.trim() || !sendFormData.certificateId.trim()}
                      className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 disabled:from-gray-600 disabled:to-gray-700 disabled:cursor-not-allowed text-white px-12 py-4 rounded-xl font-semibold transition-all flex items-center justify-center gap-3 text-lg shadow-lg hover:shadow-xl transform hover:scale-105 disabled:transform-none mx-auto"
                    >
                      {isSending ? (
                        <>
                          <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                          Sending Certificate...
                        </>
                      ) : (
                        <>
                          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 256 256">
                            <path d="M224,48H32A16,16,0,0,0,16,64V192a16,16,0,0,0,16,16H224a16,16,0,0,0,16-16V64A16,16,0,0,0,224,48ZM32,64H224V80H32ZM32,192V96H224v96Z"></path>
                          </svg>
                          Send Certificate
                        </>
                      )}
                    </button>
                  </div>
                </form>
              </div>
            )}

            {/* Features Section */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="bg-black/20 backdrop-blur-xl border border-white/10 rounded-2xl p-6 text-center hover:border-purple-500/50 transition-all aspect-square flex flex-col justify-center">
                <div className="w-12 h-12 bg-purple-500/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Cable className="w-6 h-6 text-purple-400" />
                </div>
                <h3 className="text-white text-xl font-semibold mb-2">Blockchain Verified</h3>
                <p className="text-white/60 text-sm">Certificates are permanently stored on the blockchain</p>
              </div>

              <div className="bg-black/20 backdrop-blur-xl border border-white/10 rounded-2xl p-6 text-center hover:border-purple-500/50 transition-all aspect-square flex flex-col justify-center">
                <div className="w-12 h-12 bg-purple-500/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Link className="w-6 h-6 text-purple-400" />
                </div>
                <h3 className="text-white text-xl font-semibold mb-2">Tamper Proof</h3>
                <p className="text-white/60 text-sm">Impossible to forge or modify certificates</p>
              </div>

              <div className="bg-black/20 backdrop-blur-xl border border-white/10 rounded-2xl p-6 text-center hover:border-purple-500/50 transition-all aspect-square flex flex-col justify-center">
                <div className="w-12 h-12 bg-purple-500/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <BadgeCheck className="w-6 h-6 text-purple-400" />
                </div>
                <h3 className="text-white text-xl font-semibold mb-2">Instant Verification</h3>
                <p className="text-white/60 text-sm">Employers can verify certificates instantly</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Success Toast */}
      {showSuccess && (
        <div className="fixed top-4 right-4 bg-green-500/20 backdrop-blur-xl border border-green-500/30 text-green-400 px-6 py-4 rounded-xl shadow-2xl z-50">
          <div className="flex items-center">
            <svg className="w-6 h-6 mr-3" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <div>
              <p className="font-semibold">
                {activeTab === 'mint' ? 'Certificate Minted Successfully!' : 'Certificate Sent Successfully!'}
              </p>
              <p className="text-sm text-green-300">
                {activeTab === 'mint' ? 'Demo mode - Certificate has been created' : 'Demo mode - Certificate has been transferred'}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Issuer;

