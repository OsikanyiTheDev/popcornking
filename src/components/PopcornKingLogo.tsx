import React from 'react';

interface PopcornKingLogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl' | number;
  showText?: boolean;
}

export const PopcornKingLogo: React.FC<PopcornKingLogoProps> = ({
  className = '',
  size = 'md',
  showText = true,
}) => {
  const sizeDimensions: Record<string, { w: number; h: number }> = {
    sm: { w: 38, h: 38 },
    md: { w: 52, h: 52 },
    lg: { w: 84, h: 84 },
    xl: { w: 140, h: 140 },
  };

  const { w, h } =
    typeof size === 'number'
      ? { w: size, h: size }
      : sizeDimensions[size] || sizeDimensions.md;

  return (
    <div className={`inline-flex items-center gap-2.5 select-none ${className}`}>
      {/* Crisp Vector Graphic matching user's uploaded official emblem */}
      <svg
        width={w}
        height={h}
        viewBox="0 0 240 240"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="shrink-0 drop-shadow-md"
      >
        {/* Red Star atop Crown */}
        <path
          d="M120 16L123.5 25.5L133.5 25.5L125.5 31.5L128.5 41L120 35L111.5 41L114.5 31.5L106.5 25.5L116.5 25.5Z"
          fill="#FF4B3E"
          stroke="#0A192F"
          strokeWidth="1.5"
        />

        {/* Small Burst Popcorn Flares */}
        <circle cx="88" cy="85" r="4" fill="#FFC800" />
        <circle cx="152" cy="85" r="4" fill="#FFC800" />
        <path d="M78 92Q74 96 79 100Q83 95 78 92Z" fill="#FFC800" />
        <path d="M162 92Q166 96 161 100Q157 95 162 92Z" fill="#FFC800" />

        {/* Outer Shield Border (Double gold ring with navy fill) */}
        <path
          d="M62 86C62 86 62 165 120 206C178 165 178 86 178 86C178 86 142 80 120 80C98 80 62 86 62 86Z"
          fill="#0A192F"
          stroke="#FFC800"
          strokeWidth="7"
          strokeLinejoin="round"
        />
        <path
          d="M69 92C69 92 69 160 120 198C171 160 171 92 171 92C171 92 139 87 120 87C101 87 69 92 69 92Z"
          stroke="#FFC800"
          strokeWidth="2"
          strokeOpacity="0.4"
          fill="none"
        />

        {/* Royal Gold Crown */}
        <path
          d="M82 108L72 58L98 82L120 42L142 82L168 58L158 108Z"
          fill="#FFC800"
          stroke="#0A192F"
          strokeWidth="6"
          strokeLinejoin="round"
        />
        {/* Crown Jewel Spheres */}
        <circle cx="72" cy="58" r="6" fill="#FFC800" stroke="#0A192F" strokeWidth="4" />
        <circle cx="120" cy="42" r="7" fill="#FFC800" stroke="#0A192F" strokeWidth="4" />
        <circle cx="168" cy="58" r="6" fill="#FFC800" stroke="#0A192F" strokeWidth="4" />
        <circle cx="98" cy="82" r="5" fill="#FFD700" stroke="#0A192F" strokeWidth="3" />
        <circle cx="142" cy="82" r="5" fill="#FFD700" stroke="#0A192F" strokeWidth="3" />

        {/* Bursting Hot Popcorn Clouds from Crown */}
        {/* Rear Popcorn Puff */}
        <ellipse cx="146" cy="50" rx="14" ry="12" fill="#FDF3B8" stroke="#0A192F" strokeWidth="3.5" />
        <ellipse cx="152" cy="44" rx="9" ry="8" fill="#FFFBEA" />

        {/* Main Central Exploding Kernels */}
        <path
          d="M102 108C95 102 96 90 106 85C104 76 114 68 123 72C130 66 142 70 144 78C152 78 158 87 154 96C160 104 154 116 144 116C138 122 124 123 118 117C110 121 100 116 102 108Z"
          fill="#FDE68A"
          stroke="#0A192F"
          strokeWidth="6"
          strokeLinejoin="round"
        />
        {/* Fluffy Kernel Highlights & Swirls */}
        <path
          d="M110 92C114 86 122 86 126 90C128 84 136 84 140 88"
          stroke="#D97706"
          strokeWidth="3.5"
          strokeLinecap="round"
          fill="none"
        />
        <path
          d="M116 106C122 112 134 110 138 102"
          stroke="#D97706"
          strokeWidth="3.5"
          strokeLinecap="round"
          fill="none"
        />
        <ellipse cx="126" cy="98" rx="8" ry="6" fill="#FFFDF0" />

        {/* Middle Banner Base */}
        <rect
          x="36"
          y="114"
          width="168"
          height="52"
          rx="12"
          fill="#0A192F"
          stroke="#FFC800"
          strokeWidth="4.5"
        />

        {/* "POPCORN" text in Royalty Gold */}
        <text
          x="120"
          y="136"
          textAnchor="middle"
          fill="#FFC800"
          fontSize="21"
          fontWeight="900"
          fontFamily="'Syne', 'Arial Black', sans-serif"
          letterSpacing="1.5"
        >
          POPCORN
        </text>

        {/* "KING" text in Crisp White */}
        <text
          x="120"
          y="157"
          textAnchor="middle"
          fill="#FFFFFF"
          fontSize="22"
          fontWeight="900"
          fontFamily="'Syne', 'Arial Black', sans-serif"
          letterSpacing="3"
        >
          KING
        </text>
      </svg>

      {/* Optional Side Typography */}
      {showText && (
        <div className="flex flex-col">
          <div className="flex items-center gap-1 font-display font-black leading-none tracking-tight">
            <span className="text-white text-xl sm:text-2xl">POPCORN</span>
            <span className="text-[#FFC800] text-xl sm:text-2xl">KING</span>
          </div>
          <span className="text-[10px] font-bold tracking-widest text-[#FF4B3E] uppercase mt-0.5">
            Accra, Ghana
          </span>
        </div>
      )}
    </div>
  );
};
