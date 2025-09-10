import { useState, useRef } from 'react';
import LaserFlow from './LaserFlow';

const companyLogos = [
  {
    src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Meta_Platforms_Inc._logo.svg/1200px-Meta_Platforms_Inc._logo.svg.png',
    alt: 'Meta',
    position: { x: '10%', y: '20%' }
  },
  {
    src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Apple_logo_black.svg/1200px-Apple_logo_black.svg.png',
    alt: 'Apple',
    position: { x: '85%', y: '15%' }
  },
  {
    src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/1200px-Google_2015_logo.svg.png',
    alt: 'Google',
    position: { x: '15%', y: '70%' }
  },
  {
    src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Microsoft_logo.svg/1200px-Microsoft_logo.svg.png',
    alt: 'Microsoft',
    position: { x: '80%', y: '75%' }
  },
  {
    src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/Spotify_logo_without_text.svg/1200px-Spotify_logo_without_text.svg.png',
    alt: 'Spotify',
    position: { x: '50%', y: '10%' }
  },
  {
    src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Amazon_Web_Services_Logo.svg/1200px-Amazon_Web_Services_Logo.svg.png',
    alt: 'AWS',
    position: { x: '25%', y: '45%' }
  },
  {
    src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Samsung_Logo.svg/1200px-Samsung_Logo.svg.png',
    alt: 'Samsung',
    position: { x: '70%', y: '50%' }
  },
  {
    src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/LinkedIn_Logo.svg/1200px-LinkedIn_Logo.svg.png',
    alt: 'LinkedIn',
    position: { x: '5%', y: '50%' }
  },
  {
    src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Facebook_Logo_%282019%29.png/1200px-Facebook_Logo_%282019%29.png',
    alt: 'Facebook',
    position: { x: '90%', y: '40%' }
  },
  {
    src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/Notion-logo.svg/1200px-Notion-logo.svg.png',
    alt: 'Notion',
    position: { x: '45%', y: '85%' }
  }
];

const LaserFlowWithLogos = () => {
  const [hoveredLogo, setHoveredLogo] = useState(null);
  const containerRef = useRef(null);

  return (
    <div 
      ref={containerRef}
      className="relative w-full h-full overflow-hidden"
      style={{ backgroundColor: '#060010' }}
      onMouseMove={(e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        // Check if mouse is near any logo
        let nearestLogo = null;
        let minDistance = Infinity;
        
        companyLogos.forEach((logo, index) => {
          const logoX = (parseFloat(logo.position.x) / 100) * rect.width;
          const logoY = (parseFloat(logo.position.y) / 100) * rect.height;
          const distance = Math.sqrt((x - logoX) ** 2 + (y - logoY) ** 2);
          
          if (distance < 100 && distance < minDistance) {
            minDistance = distance;
            nearestLogo = index;
          }
        });
        
        setHoveredLogo(nearestLogo);
      }}
      onMouseLeave={() => setHoveredLogo(null)}
    >
      {/* LaserFlow Background */}
      <LaserFlow
        horizontalBeamOffset={0.0}
        verticalBeamOffset={0.05}
        color="#8B5CF6"
        wispDensity={1.0}
        flowSpeed={0.5}
        fogIntensity={0.4}
        wispIntensity={5.0}
        verticalSizing={1.4}
        horizontalSizing={0.3}
      />
      
      {/* Company Logos - Hidden by default, revealed on hover */}
      {companyLogos.map((logo, index) => (
        <div
          key={index}
          className="absolute transition-all duration-500 ease-out"
          style={{
            left: logo.position.x,
            top: logo.position.y,
            transform: 'translate(-50%, -50%)',
            opacity: hoveredLogo === index ? 1 : 0,
            scale: hoveredLogo === index ? 1 : 0.8,
            zIndex: 10,
            pointerEvents: 'none'
          }}
        >
          <div 
            className="w-16 h-16 rounded-lg overflow-hidden shadow-2xl bg-white/10 backdrop-blur-sm border border-pink-500/30"
            style={{
              transform: hoveredLogo === index ? 'scale(1.1)' : 'scale(1)',
              transition: 'transform 300ms ease-out'
            }}
          >
            <img
              src={logo.src}
              alt={logo.alt}
              className="w-full h-full object-contain p-2"
              style={{
                filter: hoveredLogo === index ? 'none' : 'grayscale(1)',
                transition: 'filter 300ms ease-out'
              }}
            />
          </div>
        </div>
      ))}
      
      {/* Subtle glow effect for hovered logo */}
      {hoveredLogo !== null && (
        <div
          className="absolute pointer-events-none"
          style={{
            left: companyLogos[hoveredLogo].position.x,
            top: companyLogos[hoveredLogo].position.y,
            transform: 'translate(-50%, -50%)',
            zIndex: 5
          }}
        >
          <div 
            className="w-24 h-24 rounded-full opacity-30 animate-pulse"
            style={{
              background: 'radial-gradient(circle, rgba(255, 121, 198, 0.4) 0%, transparent 70%)',
              animation: 'pulse 2s infinite'
            }}
          />
        </div>
      )}
    </div>
  );
};

export default LaserFlowWithLogos;
