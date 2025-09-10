import { useMemo } from 'react';
import LaserFlow from './LaserFlow';

const LaserBackground = ({ searchResults = null, importedNFTs = [] }) => {
  // Calculate dynamic vertical offset based on content
  const hasResults = searchResults !== null || importedNFTs.length > 0;
  const dynamicVerticalOffset = hasResults ? 0.3 : 0.05; // More significant movement when content appears

  // Debug logging
  console.log('LaserBackground render:', { 
    hasResults, 
    dynamicVerticalOffset, 
    searchResultsLength: searchResults?.length || 0,
    importedNFTsLength: importedNFTs.length 
  });

  // Memoize the laser flow props to prevent unnecessary re-renders
  const laserFlowProps = useMemo(() => ({
    horizontalBeamOffset: 0.0,
    verticalBeamOffset: dynamicVerticalOffset,
    color: "#8B5CF6",
    wispDensity: 1.0,
    flowSpeed: 0.5,
    fogIntensity: 0.4,
    wispIntensity: 5.0,
    verticalSizing: hasResults ? 0.8 : 1.4, // Much shorter laser when results are shown
    horizontalSizing: 0.3
  }), [dynamicVerticalOffset, hasResults]);

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
