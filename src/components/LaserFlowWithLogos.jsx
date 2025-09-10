import { useMemo } from 'react';
import LaserFlow from './LaserFlow';

const LaserBackground = () => {
  // Memoize the laser flow props to prevent unnecessary re-renders
  const laserFlowProps = useMemo(() => ({
    horizontalBeamOffset: 0.0,
    verticalBeamOffset: 0.05,
    color: "#8B5CF6",
    wispDensity: 1.0,
    flowSpeed: 0.5,
    fogIntensity: 0.4,
    wispIntensity: 5.0,
    verticalSizing: 1.4,
    horizontalSizing: 0.3
  }), []);

  return (
    <div 
      className="relative w-full h-full overflow-hidden"
      style={{ backgroundColor: '#060010' }}
    >
      {/* LaserFlow Background */}
      <LaserFlow {...laserFlowProps} />
    </div>
  );
};

export default LaserBackground;
