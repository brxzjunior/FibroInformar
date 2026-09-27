import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  className = '',
  children,
  ...props
}) => {
  const baseStyles = 'inline-flex items-center justify-center font-semibold rounded-xl transition-all duration-200 active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed disabled:active:scale-100 min-h-[48px] select-none';

  const variants = {
    primary: 'bg-brand-700 text-white hover:bg-brand-800 shadow-sm shadow-brand-700/20 active:bg-brand-900',
    secondary: 'bg-sage-600 text-white hover:bg-sage-700 shadow-sm shadow-sage-600/20 active:bg-sage-800',
    outline: 'border-2 border-brand-700 text-brand-700 bg-white hover:bg-brand-50 active:bg-brand-100',
    ghost: 'text-calm-text hover:bg-black/5 active:bg-black/10'
  };

  const sizes = {
    sm: 'text-sm px-4 py-2 min-h-[44px]',
    md: 'text-base px-5 py-3 min-h-[48px]',
    lg: 'text-lg px-6 py-3.5 min-h-[52px]'
  };

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${fullWidth ? 'w-full' : ''} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};
