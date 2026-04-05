import React from 'react';

interface LogoProps {
  className?: string;
  variant?: 'full' | 'mark';
  color?: 'white' | 'black' | 'gold';
}

export const Logo: React.FC<LogoProps> = ({ 
  className = "w-12 h-12", 
  variant = 'mark',
  color = 'gold'
}) => {
  const fill = color === 'gold' ? '#C9952A' : color === 'white' ? '#FFFFFF' : '#000000';
  
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <svg 
        viewBox="0 0 120 80" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
        className="h-full w-auto"
      >
        {/* Blackstride Horse Mark - Accurate Geometric Recreation */}
        <g fill={fill}>
          {/* Head & Neck */}
          <path d="M95 35 L105 30 L110 35 L105 50 L95 45 Z" />
          <path d="M105 30 L108 25 L112 28 L110 35 Z" /> {/* Ear */}
          <path d="M85 30 L95 35 L95 45 L80 40 Z" /> {/* Neck base */}
          
          {/* Mane with Gold Streak */}
          <path d="M70 25 L85 30 L80 40 L65 35 Z" />
          <path d="M60 28 L75 22 L70 25 L55 30 Z" />
          <path d="M75 22 L82 18 L88 22 L85 30 Z" fill="#C9952A" /> {/* Gold Streak */}
          
          {/* Body */}
          <path d="M40 45 L65 35 L80 40 L70 55 L45 50 Z" />
          <path d="M25 40 L40 45 L45 50 L30 55 Z" />
          
          {/* Tail */}
          <path d="M25 40 L10 35 L15 45 L25 42 Z" />
          
          {/* Front Legs (Striding) */}
          <path d="M70 55 L85 65 L90 62 L75 52 Z" /> {/* Front right raised */}
          <path d="M85 65 L95 75 L100 72 L90 62 Z" />
          
          <path d="M60 52 L65 65 L70 62 L65 50 Z" /> {/* Front left extended */}
          
          {/* Back Legs */}
          <path d="M45 50 L50 65 L55 62 L50 48 Z" />
          <path d="M30 55 L35 70 L40 67 L35 52 Z" />
        </g>
      </svg>
      
      {variant === 'full' && (
        <div className="flex flex-col leading-none">
          <span className={`font-display font-bold text-xl tracking-[0.2em] ${color === 'white' ? 'text-white' : 'text-foreground'}`}>BLACKSTRIDE</span>
          <span className="font-display text-[9px] tracking-[0.5em] text-agency-accent mt-1">DIGITAL</span>
        </div>
      )}
    </div>
  );
};
