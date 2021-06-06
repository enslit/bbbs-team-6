import React from 'react';
import LoaderPart from './LoaderPart';
import { number, string } from 'prop-types';
import './loader.css';

Loader.propTypes = {
  count: number,
  speed: number,
  color: string,
  size: number,
  percent: number,
};

function Loader(props) {
  const {
    count = 15,
    speed = 1000,
    color = '#2E2468',
    size = 140,
    percent,
  } = props;

  const buildParts = () => {
    const rotateStep = 360 / count;
    const delayStep = speed / count;
    const parts = [];

    for (let i = 0, j = speed; i < 360; i += rotateStep, j -= delayStep) {
      parts.push(
        <LoaderPart
          key={i}
          step={i}
          delay={j}
          speed={speed}
          color={color}
          size={size}
          count={count}
        />
      );
    }

    return parts;
  };

  return (
    <div className="loader">
      <div className="loader__wrapper">
        <svg
          className="loader__svg"
          width={`${size}px`}
          height={`${size}px`}
          preserveAspectRatio="xMidYMid"
        >
          {buildParts()}
        </svg>
        {percent && <span className="loader__percent">{percent}%</span>}
      </div>
    </div>
  );
}

export default Loader;
