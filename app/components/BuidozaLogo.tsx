import React from 'react';

interface BuidozaLogoProps {
  width?: number;
  height?: number;
  className?: string;
}

export default function BuidozaLogo({ width = 200, height = 60, className = "" }: BuidozaLogoProps) {
  return (
    <div className={`flex flex-col items-center justify-center ${className}`} style={{ width, height }}>
      <div className="text-2xl font-bold text-[var(--accent)] mb-1">BUIDOZA</div>
      <div className="text-xs text-gray-600 dark:text-gray-400">BUILDING THE FUTURE</div>
    </div>
  );
} 