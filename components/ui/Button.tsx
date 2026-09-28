import React from 'react';
import Link from 'next/link';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'white';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  isExternal?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  fullWidth?: boolean;
}

export function Button({
  children,
  variant = 'primary',
  size = 'md',
  href,
  isExternal,
  leftIcon,
  rightIcon,
  fullWidth = false,
  className = '',
  disabled,
  ...props
}: ButtonProps) {
  const baseStyles =
    'inline-flex items-center justify-center font-medium rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 active:scale-[0.98] disabled:opacity-60 disabled:cursor-not-allowed select-none';

  const sizeStyles = {
    sm: 'text-xs px-3.5 py-1.5 gap-1.5',
    md: 'text-sm px-5 py-2.5 gap-2',
    lg: 'text-base px-6 py-3.5 gap-2.5 font-semibold',
  };

  const variantStyles = {
    primary:
      'bg-[#0E6F3B] text-white hover:bg-[#0b582f] focus:ring-[#0E6F3B] shadow-sm hover:shadow',
    secondary:
      'bg-[#164E48] text-white hover:bg-[#123e39] focus:ring-[#164E48] shadow-sm',
    outline:
      'border border-slate-300 text-slate-700 bg-white hover:bg-slate-50 hover:border-slate-400 focus:ring-[#0E6F3B]',
    ghost:
      'text-slate-700 hover:text-[#0E6F3B] hover:bg-slate-100 focus:ring-slate-300',
    white:
      'bg-white text-[#164E48] hover:bg-slate-100 focus:ring-white shadow-sm font-semibold',
  };

  const widthStyle = fullWidth ? 'w-full' : '';
  const combinedClasses = `${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${widthStyle} ${className}`;

  if (href) {
    if (isExternal) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={combinedClasses}
        >
          {leftIcon}
          <span>{children}</span>
          {rightIcon}
        </a>
      );
    }
    return (
      <Link href={href} className={combinedClasses}>
        {leftIcon}
        <span>{children}</span>
        {rightIcon}
      </Link>
    );
  }

  return (
    <button className={combinedClasses} disabled={disabled} {...props}>
      {leftIcon}
      <span>{children}</span>
      {rightIcon}
    </button>
  );
}
