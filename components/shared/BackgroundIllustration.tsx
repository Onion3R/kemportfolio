import React from 'react'

type BackgroundIllustrationProps = {
  className?: string;
  height?: number;
  width?: number;
};

function BackgroundIllustration({ className, height = 700, width = 1000 }: BackgroundIllustrationProps) {
  // Scale factors based on default design (1000x700)
  const w = width;
  const h = height;

  // Coordinates expressed as fractions of width/height
  const pathData = `
    M${0.98 * w} ${0.03 * h} 
    L${0.58 * w} ${0.03 * h} 
    L${0.02 * w} ${0.41 * h} 
    L${0.02 * w} ${0.97 * h} 
    L${0.38 * w} ${0.97 * h} 
    L${0.98 * w} ${0.57 * h} Z
  `;

  return (
    <div className={`absolute z-0 ${className || ''}`}>
      <svg
        width={w}
        height={h}
        viewBox={`0 0 ${w} ${h}`}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Base faint stroke */}
        <path
          d={pathData}
          stroke="blue"
          strokeOpacity="0.2"
          strokeWidth="3"
          fill="none"
        />

        {/* Circling highlight */}
        <path
          d={pathData}
          stroke="blue"
          strokeWidth="3"
          fill="none"
          strokeDasharray="2000"
          strokeDashoffset="2000"
        >
          <animate
            attributeName="stroke-dashoffset"
            from="2000"
            to="0"
            dur="5s"
            repeatCount="indefinite"
          />
        </path>
      </svg>
    </div>
  );
}

export default BackgroundIllustration;
