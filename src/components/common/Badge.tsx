import React from 'react';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'purple' | 'sage' | 'warm' | 'neutral';
  size?: 'sm' | 'md';
  className?: string;
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = 'purple',
  size = 'sm',
  className = '',
}) => {
  const variants = {
    purple: 'bg-brand-100 text-brand-800 border-brand-200',
    sage: 'bg-sage-100 text-sage-800 border-sage-200',
    warm: 'bg-warm-100 text-warm-700 border-warm-200',
    neutral: 'bg-stone-100 text-stone-700 border-stone-200',
  };

  const sizes = {
    sm: 'text-xs px-2.5 py-1',
    md: 'text-sm px-3 py-1.5',
  };

  return (
    <span
      className={`inline-flex items-center gap-1.5 font-medium rounded-full border ${variants[variant]} ${sizes[size]} ${className}`}
    >
      {children}
    </span>
  );
};
