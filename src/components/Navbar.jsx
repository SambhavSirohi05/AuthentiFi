import { Link, useLocation } from 'react-router-dom';
import AuthentiFiLogo from '../assets/AuthentiFiLogo.png';

const Navbar = () => {
  const location = useLocation();

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/dashboard', label: 'Dashboard' },
    { path: '/verify', label: 'Verify' },
    { path: '/issuer', label: 'Issuer' }
  ];

  return (
    <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-b-[#292f38] px-10 py-3">
      <div className="flex items-center gap-2 text-white">
        <div className="size-8">
          <img src={AuthentiFiLogo} alt="AuthentiFi Logo" className="w-full h-full object-contain" />
        </div>
        <Link to="/" className="text-white text-lg font-bold leading-tight tracking-[-0.015em]">
          AuthentiFi
        </Link>
      </div>
      <div className="flex flex-1 justify-end gap-8">
        <div className="flex items-center gap-9">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`text-sm font-medium leading-normal ${
                location.pathname === item.path
                  ? 'text-[#2a74ea]'
                  : 'text-white hover:text-[#2a74ea]'
              }`}
            >
              {item.label}
            </Link>
          ))}
        </div>
        <Link
          to="/wallet-login"
          className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 px-4 bg-[#292f38] text-white text-sm font-bold leading-normal tracking-[0.015em] hover:bg-[#1f2937]"
        >
          <span className="truncate">Sign In</span>
        </Link>
      </div>
    </header>
  );
};

export default Navbar;

