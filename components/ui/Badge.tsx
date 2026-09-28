import React from 'react';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'brand' | 'accent' | 'neutral' | 'outline' | 'teal';
  size?: 'sm' | 'md';
  className?: string;
  icon?: React.ReactNode;
}

export function Badge({
  children,
  variant = 'brand',
  size = 'md',
  className = '',
  icon,
}: BadgeProps) {
  const baseStyles = 'inline-flex items-center font-medium rounded-full';

  const sizeStyles = {
    sm: 'text-[11px] px-2.5 py-0.5 gap-1',
    md: 'text-xs px-3 py-1 gap-1.5',
  };

  const variantStyles = {
    brand: 'bg-[#e8f5ed] text-[#0E6F3B] border border-[#c3e7d1]',
    accent: 'bg-emerald-50 text-emerald-800 border border-emerald-200',
    neutral: 'bg-slate-100 text-slate-700 border border-slate-200',
    outline: 'bg-transparent text-slate-700 border border-slate-300',
    teal: 'bg-[#e6f4f2] text-[#164E48] border border-[#b2dfdb]',
  };

  return (
    <span className={`${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`}>
      {icon}
      <span>{children}</span>
    </span>
  );
}
