import { Link } from 'react-router-dom';
import LiquidEther from '../components/LiquidEther';

const LandingPage = () => {
  return (
    <div className="relative min-h-screen flex flex-col">
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
      
      {/* Content */}
      <div className="relative z-10 flex flex-1 flex-col items-center justify-center px-10 py-20">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main Heading */}
          <div className="mb-6">
            <h1 className="text-white text-6xl md:text-7xl lg:text-8xl font-black leading-none tracking-tight mb-2">
              AuthentiFi
            </h1>
            <h2 className="text-white text-3xl md:text-4xl lg:text-5xl font-bold leading-tight tracking-tight">
              Authentic Credentials, Verified on Blockchain.
            </h2>
          </div>
          
          {/* Subtitle */}
          <p className="text-white/80 text-lg md:text-xl mb-12 max-w-2xl mx-auto">
            No fake degrees. No delays. Just instant trust.
          </p>
          
          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              to="/dashboard"
              className="flex items-center justify-center px-8 py-4 bg-white text-black text-lg font-bold rounded-xl hover:bg-white/90 transition-colors min-w-[200px]"
            >
              Get Started
            </Link>
            <Link
              to="/verify"
              className="flex items-center justify-center px-8 py-4 bg-transparent border-2 border-white text-white text-lg font-bold rounded-xl hover:bg-white hover:text-black transition-colors min-w-[200px]"
            >
              Learn More
            </Link>
          </div>
        </div>
      </div>
      
      {/* How it Works Section */}
      <div className="relative z-10 px-10 py-20 bg-black/30 backdrop-blur-sm">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-white text-3xl font-bold text-center mb-16">How it Works</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Step 1 */}
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-6 bg-white/10 rounded-full flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" viewBox="0 0 256 256" className="text-white">
                  <path d="M226.53,56.41l-96-32a8,8,0,0,0-5.06,0l-96,32A8,8,0,0,0,24,64v80a8,8,0,0,0,16,0V75.1L73.59,86.29a64,64,0,0,0,20.65,88.05c-18,7.06-33.56,19.83-44.94,37.29a8,8,0,1,0,13.4,8.74C77.77,197.25,101.57,184,128,184s50.23,13.25,65.3,36.37a8,8,0,0,0,13.4-8.74c-11.38-17.46-27-30.23-44.94-37.29a64,64,0,0,0,20.65-88l44.12-14.7a8,8,0,0,0,0-15.18ZM176,120A48,48,0,1,1,89.35,91.55l36.12,12a8,8,0,0,0,5.06,0l36.12-12A47.89,47.89,0,0,1,176,120ZM128,87.57,57.3,64,128,40.43,198.7,64Z"></path>
                </svg>
              </div>
              <h3 className="text-white text-xl font-semibold mb-3">University Issues Certificate</h3>
              <p className="text-white/70">Universities mint certificates as NFTs on the blockchain</p>
            </div>
            
            {/* Step 2 */}
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-6 bg-white/10 rounded-full flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" viewBox="0 0 256 256" className="text-white">
                  <path d="M216,72H56a8,8,0,0,1,0-16H192a8,8,0,0,0,0-16H56A24,24,0,0,0,32,64V192a24,24,0,0,0,24,24H216a16,16,0,0,0,16-16V88A16,16,0,0,0,216,72Zm0,128H56a8,8,0,0,1-8-8V86.63A23.84,23.84,0,0,0,56,88H216Zm-48-60a12,12,0,1,1,12,12A12,12,0,0,1,168,140Z"></path>
                </svg>
              </div>
              <h3 className="text-white text-xl font-semibold mb-3">Student Stores in Wallet</h3>
              <p className="text-white/70">Students receive and store certificates in their digital wallet</p>
            </div>
            
            {/* Step 3 */}
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-6 bg-white/10 rounded-full flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" viewBox="0 0 256 256" className="text-white">
                  <path d="M216,24H40A16,16,0,0,0,24,40V216a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V40A16,16,0,0,0,216,24Zm0,192H40V40H216V216ZM96,112v64a8,8,0,0,1-16,0V112a8,8,0,0,1,16,0Zm88,28v36a8,8,0,0,1-16,0V140a20,20,0,0,0-40,0v36a8,8,0,0,1-16,0V112a8,8,0,0,1,15.79-1.78A36,36,0,0,1,184,140ZM100,84A12,12,0,1,1,88,72,12,12,0,0,1,100,84Z"></path>
                </svg>
              </div>
              <h3 className="text-white text-xl font-semibold mb-3">Employer Verifies Instantly</h3>
              <p className="text-white/70">Employers verify credentials instantly on the blockchain</p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Footer */}
      <footer className="relative z-10 px-10 py-10 text-center bg-black/30 backdrop-blur-sm">
        <p className="text-white/60">© 2024 AuthentiFi. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default LandingPage;