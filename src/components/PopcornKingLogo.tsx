import React from 'react';

interface PopcornKingLogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl' | number;
  showText?: boolean;
  variant?: 'full' | 'icon' | 'badge';
}

export const PopcornKingLogo: React.FC<PopcornKingLogoProps> = ({
  className = '',
  size = 'md',
  showText = true,
  variant = 'full',
}) => {
  const sizeMap: Record<string, { icon: number; textTitle: string; textSub: string }> = {
    sm: { icon: 38, textTitle: 'text-lg', textSub: 'text-xs' },
    md: { icon: 50, textTitle: 'text-xl sm:text-2xl', textSub: 'text-xs sm:text-sm' },
    lg: { icon: 72, textTitle: 'text-2xl sm:text-3xl', textSub: 'text-sm sm:text-base' },
    xl: { icon: 104, textTitle: 'text-3xl sm:text-4xl', textSub: 'text-base sm:text-lg' },
  };

  const currentSize =
    typeof size === 'number'
      ? { icon: size, textTitle: 'text-xl', textSub: 'text-xs' }
      : sizeMap[size] || sizeMap.md;

  const iconDimension = currentSize.icon;

  // The Royal Popcorn King Emblem Vector
  const Emblem = (
    <svg
      width={iconDimension}
      height={iconDimension}
      viewBox="0 0 120 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="shrink-0 transition-transform duration-300 group-hover:scale-105 drop-shadow-md"
    >
      <defs>
        {/* Rich Golden Radial & Linear Gradients */}
        <radialGradient id="pkBadgeBg" cx="50%" cy="40%" r="60%">
          <stop offset="0%" stopColor="#1E1E1E" />
          <stop offset="100%" stopColor="#0B0B0B" />
        </radialGradient>
        
        <linearGradient id="pkGoldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FFDF6D" />
          <stop offset="45%" stopColor="#F5B800" />
          <stop offset="100%" stopColor="#D99B00" />
        </linearGradient>

        <linearGradient id="pkCreamGrad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#FFFFFF" />
          <stop offset="60%" stopColor="#FFFBEB" />
          <stop offset="100%" stopColor="#FEF08A" />
        </linearGradient>

        <filter id="pkGlow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="1" stdDeviation="1.5" floodColor="#F5B800" floodOpacity="0.3" />
        </filter>
      </defs>

      {/* Outer Golden Border & Deep Black Disc */}
      <circle cx="60" cy="60" r="57" fill="url(#pkBadgeBg)" stroke="url(#pkGoldGrad)" strokeWidth="3" />
      <circle cx="60" cy="60" r="52.5" stroke="#F5B800" strokeWidth="0.8" strokeOpacity="0.4" strokeDasharray="2.5 2.5" />

      {/* Decorative Outer Sparkles */}
      {/* Top Left Sparkle */}
      <path
        d="M21 28Q24 28 24 25Q24 28 27 28Q24 28 24 31Q24 28 21 28Z"
        fill="#F5B800"
      />
      {/* Top Right Sparkle */}
      <path
        d="M93 25Q96 25 96 22Q96 25 99 25Q96 25 96 28Q96 25 93 25Z"
        fill="#F5B800"
      />
      {/* Tiny Popcorn Flares */}
      <circle cx="17" cy="46" r="1.5" fill="#F5B800" />
      <circle cx="103" cy="48" r="1.5" fill="#F5B800" />
      <circle cx="21" cy="74" r="1.2" fill="#F5B800" opacity="0.6" />
      <circle cx="99" cy="72" r="1.2" fill="#F5B800" opacity="0.6" />

      {/* Striped Royal Popcorn Cup (Base) */}
      <g filter="url(#pkGlow)">
        {/* Tub Silhouette */}
        <path
          d="M37 60L42 98H78L83 60H37Z"
          fill="#0D0D0D"
          stroke="url(#pkGoldGrad)"
          strokeWidth="2"
          strokeLinejoin="round"
        />

        {/* Popcorn Gold Vertical Stripes */}
        <path d="M42 60L46 98H52L49 60H42Z" fill="url(#pkGoldGrad)" />
        <path d="M57 60L58 98H62L63 60H57Z" fill="url(#pkGoldGrad)" />
        <path d="M71 60L68 98H74L78 60H71Z" fill="url(#pkGoldGrad)" />

        {/* Tub Rim Band */}
        <rect
          x="35"
          y="58"
          width="50"
          height="4.5"
          rx="2"
          fill="url(#pkGoldGrad)"
          stroke="#0D0D0D"
          strokeWidth="0.8"
        />

        {/* Royal Star on Tub */}
        <path
          d="M60 74L61.5 78.5L66 78.5L62.5 81L64 85.5L60 83L56 85.5L57.5 81L54 78.5L58.5 78.5Z"
          fill="#FFFFFF"
          stroke="#0D0D0D"
          strokeWidth="0.6"
        />
      </g>

      {/* Overflowing Gourmet Popcorn Kernels (Buttery & Puffy) */}
      <g>
        {/* Left Puffs */}
        <ellipse cx="43" cy="54" rx="7" ry="6.5" fill="url(#pkCreamGrad)" stroke="#B47B00" strokeWidth="1" />
        <ellipse cx="36" cy="50" rx="5.5" ry="5" fill="#FFFDF5" stroke="#B47B00" strokeWidth="0.8" />
        
        {/* Right Puffs */}
        <ellipse cx="77" cy="54" rx="7" ry="6.5" fill="url(#pkCreamGrad)" stroke="#B47B00" strokeWidth="1" />
        <ellipse cx="84" cy="50" rx="5.5" ry="5" fill="#FFFDF5" stroke="#B47B00" strokeWidth="0.8" />

        {/* Center Base Puffs */}
        <ellipse cx="51" cy="53" rx="7.5" ry="7" fill="url(#pkCreamGrad)" stroke="#B47B00" strokeWidth="1" />
        <ellipse cx="69" cy="53" rx="7.5" ry="7" fill="url(#pkCreamGrad)" stroke="#B47B00" strokeWidth="1" />
        <ellipse cx="60" cy="51" rx="8" ry="7.5" fill="#FFFFFF" stroke="#B47B00" strokeWidth="1.2" />

        {/* Top Puffs nestled into crown base */}
        <ellipse cx="49" cy="43" rx="6.5" ry="6" fill="#FFFDF5" stroke="#B47B00" strokeWidth="0.8" />
        <ellipse cx="71" cy="43" rx="6.5" ry="6" fill="#FFFDF5" stroke="#B47B00" strokeWidth="0.8" />
        <ellipse cx="60" cy="40" rx="7.5" ry="7" fill="url(#pkCreamGrad)" stroke="#B47B00" strokeWidth="1" />

        {/* Butter Glaze Highlights */}
        <path d="M57 40C58 37 62 37 63 40" stroke="#F5B800" strokeWidth="1.8" strokeLinecap="round" />
        <path d="M47 52C49 50 53 50 54 53" stroke="#F5B800" strokeWidth="1.6" strokeLinecap="round" />
        <path d="M66 52C68 50 72 50 73 53" stroke="#F5B800" strokeWidth="1.6" strokeLinecap="round" />
      </g>

      {/* The 5-Point Royal Crown (Majestic King Crown) */}
      <g filter="url(#pkGlow)">
        {/* Crown Body Silhouette */}
        <path
          d="M40 37L34 23L47 31L60 15L73 31L86 23L80 37H40Z"
          fill="url(#pkGoldGrad)"
          stroke="#0D0D0D"
          strokeWidth="1.8"
          strokeLinejoin="round"
        />

        {/* Crown Headband */}
        <path
          d="M39 34H81V38H39V34Z"
          fill="#0D0D0D"
          stroke="url(#pkGoldGrad)"
          strokeWidth="1"
        />

        {/* Headband Jewels */}
        <circle cx="46" cy="36" r="1.5" fill="#FFFFFF" />
        <circle cx="60" cy="36" r="1.8" fill="url(#pkGoldGrad)" stroke="#FFFFFF" strokeWidth="0.6" />
        <circle cx="74" cy="36" r="1.5" fill="#FFFFFF" />

        {/* 5 Crown Tip Spheres (Jewels) */}
        {/* Outer Left */}
        <circle cx="34" cy="23" r="3.2" fill="#FFFFFF" stroke="#0D0D0D" strokeWidth="1.2" />
        <circle cx="34" cy="23" r="1.8" fill="url(#pkGoldGrad)" />

        {/* Inner Left */}
        <circle cx="47" cy="31" r="2.8" fill="#FFFFFF" stroke="#0D0D0D" strokeWidth="1" />
        <circle cx="47" cy="31" r="1.5" fill="url(#pkGoldGrad)" />

        {/* Center Highest Crown Jewel */}
        <circle cx="60" cy="15" r="4.2" fill="#FFFFFF" stroke="#0D0D0D" strokeWidth="1.4" />
        <circle cx="60" cy="15" r="2.4" fill="url(#pkGoldGrad)" />

        {/* Inner Right */}
        <circle cx="73" cy="31" r="2.8" fill="#FFFFFF" stroke="#0D0D0D" strokeWidth="1" />
        <circle cx="73" cy="31" r="1.5" fill="url(#pkGoldGrad)" />

        {/* Outer Right */}
        <circle cx="86" cy="23" r="3.2" fill="#FFFFFF" stroke="#0D0D0D" strokeWidth="1.2" />
        <circle cx="86" cy="23" r="1.8" fill="url(#pkGoldGrad)" />
      </g>
    </svg>
  );

  if (variant === 'icon' || !showText) {
    return (
      <div className={`inline-flex items-center justify-center select-none ${className}`}>
        {Emblem}
      </div>
    );
  }

  return (
    <div className={`inline-flex items-center gap-3 select-none ${className}`}>
      {/* Clean, Scalable Royal Emblem */}
      {Emblem}

      {/* Crisp Typography Lockup matching the physical cart wrap */}
      <div className="flex flex-col justify-center text-left">
        <div className="flex items-center gap-1.5 font-display font-black leading-none tracking-tight">
          <span className={`${currentSize.textTitle} text-[#F5B800] tracking-wider drop-shadow-sm`}>
            POPCORN
          </span>
          <span className={`${currentSize.textTitle} text-white tracking-wider drop-shadow-sm`}>
            KING
          </span>
          <span className="text-[#F5B800] text-xs sm:text-sm font-normal -mt-1" title="Royal Standard">
            👑
          </span>
        </div>
        <span className={`font-script ${currentSize.textSub} font-bold text-neutral-200 tracking-wide leading-tight mt-1`}>
          fresh Popcorn. Big Moments<span className="text-[#F5B800]">!!!</span>
        </span>
      </div>
    </div>
  );
};
