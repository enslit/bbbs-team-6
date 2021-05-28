import React from 'react';
import { number, string } from 'prop-types';

LoaderPart.propTypes = {
  step: number.isRequired,
  speed: number.isRequired,
  delay: number.isRequired,
  color: string.isRequired,
  size: number.isRequired,
  count: number.isRequired,
};

function LoaderPart({ step, speed, delay, color, size, count }) {
  const halfSize = size / 2;
  const partSize = 360 / count;

  return (
    <g transform={`rotate(${step} ${halfSize} ${halfSize})`}>
      <rect
        x={halfSize - partSize / 2}
        y="0"
        rx="50"
        ry="50"
        width={partSize}
        height={partSize}
        fill={color}
      >
        <animate
          attributeName="x"
          values={`${halfSize - partSize / 2};${halfSize}`}
          keyTimes="0;1"
          dur={`${speed}ms`}
          begin={`-${delay}ms`}
          repeatCount="indefinite"
        />
        <animate
          attributeName="y"
          values={`0;${partSize / 2}`}
          keyTimes="0;1"
          dur={`${speed}ms`}
          begin={`-${delay}ms`}
          repeatCount="indefinite"
        />
        <animate
          attributeName="width"
          values={`${partSize} ; 0 ; 0`}
          keyTimes="0 ; 0.75 ; 1"
          dur={`${speed}ms`}
          begin={`-${delay}ms`}
          repeatCount="indefinite"
        />
        <animate
          attributeName="height"
          values={`${partSize} ; 0 ; 0`}
          keyTimes="0 ; 0.75 ; 1"
          dur={`${speed}ms`}
          begin={`-${delay}ms`}
          repeatCount="indefinite"
        />
      </rect>
    </g>
  );
}

export default LoaderPart;
