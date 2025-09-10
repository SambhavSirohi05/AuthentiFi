import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Suspense, lazy } from 'react';
import Sidebar from './components/Sidebar';

// Lazy load all page components for code splitting
const LandingPage = lazy(() => import('./pages/LandingPage'));
const Dashboard = lazy(() => import('./pages/Dashboard'));
const SearchWallet = lazy(() => import('./pages/SearchWallet'));
const Issuer = lazy(() => import('./pages/Issuer'));
const WalletLogin = lazy(() => import('./pages/WalletLogin'));

// Loading component
const LoadingSpinner = () => (
  <div className="flex items-center justify-center min-h-screen bg-[#111418]">
    <div className="flex flex-col items-center gap-4">
      <div className="w-8 h-8 border-2 border-purple-500/30 border-t-purple-500 rounded-full animate-spin"></div>
      <p className="text-white/60 text-sm">Loading...</p>
    </div>
  </div>
);

function App() {
  return (
    <Router>
      <div className="relative flex size-full min-h-screen flex-col bg-[#111418] group/design-root overflow-x-hidden" style={{fontFamily: 'Manrope, "Noto Sans", sans-serif'}}>
        <div className="layout-container flex h-full grow flex-col">
          <Sidebar />
          <div className="ml-16 flex-1">
            <Suspense fallback={<LoadingSpinner />}>
              <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/search-wallet" element={<SearchWallet />} />
                <Route path="/issuer" element={<Issuer />} />
                <Route path="/wallet-login" element={<WalletLogin />} />
              </Routes>
            </Suspense>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;