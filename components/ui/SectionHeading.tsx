import React from 'react';

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: 'left' | 'center';
  dark?: boolean;
  className?: string;
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'center',
  dark = false,
  className = '',
}: SectionHeadingProps) {
  const isCenter = align === 'center';

  return (
    <div
      className={`max-w-3xl ${
        isCenter ? 'mx-auto text-center' : 'text-left'
      } mb-12 lg:mb-16 ${className}`}
    >
      {eyebrow && (
        <div
          className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider mb-4 ${
            dark
              ? 'bg-[#1F7A72]/40 text-emerald-200 border border-[#1F7A72]/60'
              : 'bg-[#e8f5ed] text-[#0E6F3B] border border-[#c3e7d1]'
          }`}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-current" />
          {eyebrow}
        </div>
      )}
      <h2
        className={`text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight ${
          dark ? 'text-white' : 'text-slate-900'
        }`}
      >
        {title}
      </h2>
      {description && (
        <p
          className={`mt-4 text-base sm:text-lg leading-relaxed ${
            dark ? 'text-slate-300' : 'text-slate-600'
          }`}
        >
          {description}
        </p>
      )}
    </div>
  );
}
