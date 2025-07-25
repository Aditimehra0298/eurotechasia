import React from "react";

const Header: React.FC = () => {
  return (
    <header className="relative w-full overflow-hidden min-h-[160px] sm:min-h-[200px] md:min-h-[240px] lg:min-h-[280px] rounded-b-lg shadow-lg">
      {/* Layer 1: Deep orange wave */}
      <svg
        className="absolute inset-0 w-full h-full"
        viewBox="0 0 1440 320"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ zIndex: 1 }}
      >
        <path
          fill="url(#gradient1)"
          fillOpacity="1"
          d="M0,160L60,144C120,128,240,96,360,117.3C480,139,600,213,720,229.3C840,245,960,203,1080,181.3C1200,160,1320,160,1380,160L1440,160L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"
        ></path>
        <defs>
          <linearGradient id="gradient1" gradientTransform="rotate(45)">
            <stop offset="0%" stopColor="#f9c00c" />
            <stop offset="100%" stopColor="#f57f17" />
          </linearGradient>
        </defs>
      </svg>
      {/* Layer 2: Lighter orange wave */}
      <svg
        className="absolute inset-0 w-full h-full"
        viewBox="0 0 1440 320"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ zIndex: 2 }}
      >
        <path
          fill="url(#gradient2)"
          fillOpacity="0.7"
          d="M0,96L80,112C160,128,320,160,480,154.7C640,149,800,107,960,101.3C1120,96,1280,128,1360,144L1440,160L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"
        ></path>
        <defs>
          <linearGradient id="gradient2" gradientTransform="rotate(45)">
            <stop offset="0%" stopColor="#ffe082" />
            <stop offset="100%" stopColor="#ffd54f" />
          </linearGradient>
        </defs>
      </svg>
      {/* Layer 3: White translucent wave for highlight */}
      <svg
        className="absolute inset-0 w-full h-full"
        viewBox="0 0 1440 320"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ zIndex: 3 }}
      >
        <path
          fill="#fff"
          fillOpacity="0.3"
          d="M0,64L120,80C240,96,480,128,720,117.3C960,107,1200,53,1320,26.7L1440,0L1440,0L1320,0C1200,0,960,0,720,0C480,0,240,0,120,0L0,0Z"
        ></path>
      </svg>
    </header>
  );
};

export default Header;

