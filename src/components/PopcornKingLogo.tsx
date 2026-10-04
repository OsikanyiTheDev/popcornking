import React from 'react';

interface PopcornKingLogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl' | number;
  showText?: boolean;
  lightText?: boolean;
}

export const PopcornKingLogo: React.FC<PopcornKingLogoProps> = ({
  className = '',
  size = 'md',
  showText = true,
}) => {
  const sizeDimensions: Record<string, { w: number; h: number }> = {
    sm: { w: 40, h: 40 },
    md: { w: 56, h: 56 },
    lg: { w: 88, h: 88 },
    xl: { w: 140, h: 140 },
  };

  const { w, h } =
    typeof size === 'number'
      ? { w: size, h: size }
      : sizeDimensions[size] || sizeDimensions.md;

  return (
    <div className={`inline-flex items-center gap-3 select-none ${className}`}>
      {/* Official Emblem Vector matching physical cart wrap & WhatsApp branding */}
      <svg
        width={w}
        height={h}
        viewBox="0 0 240 240"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="shrink-0 drop-shadow-md"
      >
        {/* Deep Black Circular Disc with Popcorn Gold Outer Ring */}
        <circle cx="120" cy="120" r="114" fill="#0D0D0D" stroke="#F5B800" strokeWidth="6" />
        <circle cx="120" cy="120" r="106" stroke="#F5B800" strokeWidth="1.5" strokeOpacity="0.3" strokeDasharray="3 3" />

        {/* Hand-Drawn Doodle Stars (Gold) */}
        {/* Left Star */}
        <path
          d="M48 140L51 148L60 148L53 154L55 162L48 157L41 162L43 154L36 148L45 148Z"
          stroke="#F5B800"
          strokeWidth="1.75"
          fill="none"
        />
        {/* Tiny Star */}
        <path
          d="M62 130L63.5 134L68 134L64.5 137L65.5 141L62 138.5L58.5 141L59.5 137L56 134L60.5 134Z"
          stroke="#F5B800"
          strokeWidth="1.25"
          fill="none"
        />
        {/* Right Star */}
        <path
          d="M192 142L194 148L200 148L195 152L197 158L192 154L187 158L189 152L184 148L190 148Z"
          stroke="#F5B800"
          strokeWidth="1.5"
          fill="none"
        />

        {/* Left: Striped Gold Popcorn Cup with Popped Kernels */}
        <g transform="translate(24, 98) scale(0.65)">
          {/* Tub Base */}
          <path d="M12 40L22 92H56L66 40H12Z" fill="#F5B800" stroke="#0D0D0D" strokeWidth="3" />
          {/* Black Stripes */}
          <path d="M22 40L29 92H35L29 40H22Z" fill="#0D0D0D" />
          <path d="M43 40L43 92H49L51 40H43Z" fill="#0D0D0D" />
          {/* Kernels Overflowing */}
          <circle cx="24" cy="34" r="8" fill="#FFFDF0" stroke="#F5B800" strokeWidth="2" />
          <circle cx="38" cy="28" r="9" fill="#F5B800" stroke="#0D0D0D" strokeWidth="1.5" />
          <circle cx="52" cy="34" r="8" fill="#FFFDF0" stroke="#F5B800" strokeWidth="2" />
          <circle cx="32" cy="38" r="7" fill="#F5B800" />
          <circle cx="44" cy="38" r="7" fill="#FFFDF0" />
          <circle cx="39" cy="20" r="7" fill="#FFFDF0" stroke="#F5B800" strokeWidth="1.5" />
        </g>

        {/* Center Top: 5-Point Popcorn Crown */}
        <g transform="translate(94, 62) scale(0.9)">
          <path
            d="M8 44L14 18L26 32L38 12L50 32L62 18L68 44Z"
            fill="none"
            stroke="#F5B800"
            strokeWidth="4"
            strokeLinejoin="round"
            strokeLinecap="round"
          />
          {/* Crown Jewels (Spheres) */}
          <circle cx="14" cy="18" r="3.5" fill="#FFFFFF" stroke="#F5B800" strokeWidth="2" />
          <circle cx="38" cy="12" r="4.5" fill="#F5B800" stroke="#FFFFFF" strokeWidth="1.5" />
          <circle cx="62" cy="18" r="3.5" fill="#FFFFFF" stroke="#F5B800" strokeWidth="2" />
        </g>

        {/* 3D POPCORN KING Wordmark */}
        {/* 3D Extrusion Shadow (Dark Amber / Gold) */}
        <text
          x="126"
          y="126"
          textAnchor="middle"
          fill="#B47B00"
          fontSize="24"
          fontWeight="900"
          fontFamily="'Syne', 'Poppins', sans-serif"
          letterSpacing="0.5"
        >
          POPCORN KING
        </text>
        {/* Main Golden Wordmark */}
        <text
          x="124"
          y="124"
          textAnchor="middle"
          fill="#F5B800"
          fontSize="24"
          fontWeight="900"
          fontFamily="'Syne', 'Poppins', sans-serif"
          letterSpacing="0.5"
        >
          POPCORN KING
        </text>
        {/* Top Crisp White Bevel Face */}
        <text
          x="123"
          y="123"
          textAnchor="middle"
          fill="#FFFFFF"
          fontSize="23.5"
          fontWeight="900"
          fontFamily="'Syne', 'Poppins', sans-serif"
          letterSpacing="0.5"
          fillOpacity="0.9"
        >
          POPCORN KING
        </text>

        {/* Tagline: "fresh Popcorn. Big Moments!!!" in Crisp White Script */}
        <text
          x="122"
          y="146"
          textAnchor="middle"
          fill="#FFFFFF"
          fontSize="14"
          fontWeight="700"
          fontFamily="'Caveat', cursive, sans-serif"
          letterSpacing="0.5"
        >
          fresh Popcorn. Big Moments!!!
        </text>

        {/* Right Arrow Doodle (Gold) */}
        <path
          d="M176 166C168 168 158 171 148 172M148 172L156 167M148 172L158 176"
          stroke="#F5B800"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />

        {/* Bottom Left Hand-Drawn Smiley Face (Gold) */}
        <g transform="translate(42, 168)">
          <path d="M4 4L4 8M12 4L12 8" stroke="#F5B800" strokeWidth="2.5" strokeLinecap="round" />
          <path d="M3 13C5 18 13 18 15 13" stroke="#F5B800" strokeWidth="2.5" strokeLinecap="round" fill="none" />
        </g>
      </svg>

      {/* Brand Text Lockup for Navigation & Footers */}
      {showText && (
        <div className="flex flex-col">
          <div className="flex items-center gap-1.5 font-display font-black leading-none tracking-tight">
            <span className="text-xl sm:text-2xl text-[#F5B800] tracking-wide">POPCORN</span>
            <span className="text-xl sm:text-2xl text-white tracking-wide">KING</span>
          </div>
          <span className="font-script text-xs sm:text-sm font-bold text-white tracking-normal leading-tight mt-0.5">
            fresh Popcorn. Big Moments!!!
          </span>
        </div>
      )}
    </div>
  );
};
