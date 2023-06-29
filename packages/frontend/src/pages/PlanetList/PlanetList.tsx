import React, { Suspense } from 'react';
import { Link } from 'react-router-dom';
import useMeasure from 'react-use-measure';
import { ResizeObserver } from '@juggle/resize-observer';

import mapConfigs from '../../data/maps';

const PlanetList = () => {
  const [ref, bounds] = useMeasure({ polyfill: ResizeObserver });
  const PlanetSpheres = React.lazy(() => import('./PlanetSpheres'));

  return (
    <div className="planetSelectionPage">
      <div className="planetSelectionWrapper">
        <div ref={ref} className="planetSelection2DCanvas">
          {mapConfigs
            .filter(({ raster, travelMapConfig }) => raster && travelMapConfig)
            .map(({ id, displayName, travelMapConfig }) => {
              if (!travelMapConfig) return null;

              const scaleFactor = bounds.height / 1024;
              const actualRadius = travelMapConfig.radius * scaleFactor - 1;
              const top = travelMapConfig.y * scaleFactor - actualRadius;
              const left = travelMapConfig.x * scaleFactor - actualRadius;

              return (
                <Link
                  key={id}
                  className="planetSelectionRim"
                  style={{
                    top,
                    left,
                    width: actualRadius * 2,
                    height: actualRadius * 2,
                  }}
                  to={`/planets/${id}`}
                >
                  <div className={`planetSelectionName  planetSelectionName--${travelMapConfig.labelPosition}`}>
                    {displayName}
                  </div>
                </Link>
              );
            })}
        </div>
        <Suspense fallback={null}>
          <PlanetSpheres />
        </Suspense>
      </div>
    </div>
  );
};

export default PlanetList;
