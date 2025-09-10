import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import LandingPage from './pages/LandingPage';
import Dashboard from './pages/Dashboard';
import SearchWallet from './pages/SearchWallet';
import Issuer from './pages/Issuer';
import WalletLogin from './pages/WalletLogin';

function App() {
  return (
    <Router>
      <div className="relative flex size-full min-h-screen flex-col bg-[#111418] group/design-root overflow-x-hidden" style={{fontFamily: 'Manrope, "Noto Sans", sans-serif'}}>
        <div className="layout-container flex h-full grow flex-col">
          <Sidebar />
          <div className="ml-16 flex-1">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/search-wallet" element={<SearchWallet />} />
          <Route path="/issuer" element={<Issuer />} />
          <Route path="/wallet-login" element={<WalletLogin />} />
        </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;