import { Link, useLocation } from 'react-router-dom';
import AuthentiFiLogo from '../assets/AuthentiFiLogo.png';
import { LayoutDashboard, House, ShieldCheck, Landmark, LogIn } from 'lucide-react';

const Sidebar = () => {
  const location = useLocation();

  const navItems = [
    { path: '/', label: 'Home', icon: House },
    { path: '/dashboard', label: 'Dashboard', icon: LayoutDashboard },
    { path: '/verify', label: 'Verify', icon: ShieldCheck },
    { path: '/issuer', label: 'Issuer', icon: Landmark }
  ];

  return (
    <div className="fixed left-0 top-0 h-full w-16 hover:w-64 transition-all duration-500 ease-in-out z-50 group">
      {/* Sidebar Content */}
      <div className="h-full bg-black/20 backdrop-blur-xl border-r border-white/10 flex flex-col shadow-2xl">
        {/* Logo Section */}
        <div className="flex items-center gap-3 px-4 py-6 border-b border-white/10">
          <div className="size-8 flex-shrink-0">
            <img src={AuthentiFiLogo} alt="AuthentiFi Logo" className="w-full h-full object-contain" />
          </div>
          <div className="opacity-0 group-hover:opacity-100 transition-all duration-500 whitespace-nowrap transform translate-x-[-10px] group-hover:translate-x-0">
            <Link to="/" className="text-white text-lg font-bold leading-tight tracking-[-0.015em] hover:text-[#2a74ea] transition-colors duration-300">
              AuthentiFi
            </Link>
          </div>
        </div>

        {/* Navigation Items */}
        <nav className="flex-1 px-3 py-6">
          <ul className="space-y-2">
            {navItems.map((item) => {
              const IconComponent = item.icon;
              return (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    className={`flex items-center gap-4 px-3 py-3 rounded-xl transition-all duration-300 group/item relative overflow-hidden ${
                      location.pathname === item.path
                        ? 'bg-[#2a74ea]/30 text-white shadow-lg backdrop-blur-sm border border-white/20'
                        : 'text-white/70 hover:text-white hover:bg-white/10 hover:backdrop-blur-sm hover:border hover:border-white/20'
                    }`}
                  >
                    {/* Liquid glass effect overlay */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 group-hover/item:opacity-100 transition-opacity duration-500"></div>
                    
                    <div className="flex items-center justify-center w-full group-hover:w-auto group-hover:justify-start">
                      <IconComponent 
                        size={20} 
                        className="flex-shrink-0 relative z-10" 
                      />
                    </div>
                    <span className="opacity-0 group-hover:opacity-100 transition-all duration-500 whitespace-nowrap font-medium relative z-10 transform translate-x-[-10px] group-hover:translate-x-0">
                      {item.label}
                    </span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Sign In Button */}
        <div className="px-3 pb-6">
          <Link
            to="/wallet-login"
            className="flex items-center gap-4 px-3 py-3 rounded-xl bg-[#292f38]/50 backdrop-blur-sm text-white hover:bg-[#1f2937]/70 hover:backdrop-blur-md transition-all duration-300 group/button relative overflow-hidden border border-white/10"
          >
            {/* Liquid glass effect overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 group-hover/button:opacity-100 transition-opacity duration-500"></div>
            
            <div className="flex items-center justify-center w-full group-hover:w-auto group-hover:justify-start">
              <LogIn 
                size={20} 
                className="flex-shrink-0 relative z-10" 
              />
            </div>
            <span className="opacity-0 group-hover:opacity-100 transition-all duration-500 whitespace-nowrap font-bold relative z-10 transform translate-x-[-10px] group-hover:translate-x-0">
              Sign In
            </span>
          </Link>
        </div>
      </div>

      {/* Hover Trigger Area - invisible but extends the hover zone */}
      <div className="absolute left-0 top-0 w-4 h-full bg-transparent"></div>
    </div>
  );
};

export default Sidebar;
