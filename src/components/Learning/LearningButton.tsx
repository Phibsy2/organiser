import React from 'react';
import { ArrowRightIcon } from '@heroicons/react/24/outline';

type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost';
type ButtonSize = 'small' | 'medium' | 'large';

interface LearningButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
  fullWidth?: boolean;
  children: React.ReactNode;
}

const variantStyles: Record<ButtonVariant, string> = {
  primary: 'bg-indigo-600 text-white hover:bg-indigo-700 focus:ring-indigo-500',
  secondary: 'bg-gray-100 text-gray-700 hover:bg-gray-200 focus:ring-gray-500',
  outline: 'border border-gray-300 text-gray-700 hover:bg-gray-50 focus:ring-gray-500',
  ghost: 'text-gray-600 hover:text-gray-900 hover:bg-gray-100 focus:ring-gray-500'
};

const sizeStyles: Record<ButtonSize, string> = {
  small: 'px-4 py-2 text-sm',
  medium: 'px-4 py-2 text-base',
  large: 'px-6 py-3 text-lg'
};

export const LearningButton: React.FC<LearningButtonProps> = ({
  variant = 'primary',
  size = 'medium',
  icon,
  iconPosition = 'right',
  fullWidth = false,
  children,
  className = '',
  ...props
}) => {
  const baseStyles = 'inline-flex items-center justify-center rounded-lg font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed';
  
  const widthStyles = fullWidth ? 'w-full' : '';
  
  const combinedStyles = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${widthStyles} ${className}`.trim();
  
  const iconElement = icon || (variant === 'primary' && <ArrowRightIcon className="w-4 h-4" />);
  
  return (
    <button className={combinedStyles} {...props}>
      {iconPosition === 'left' && iconElement && (
        <span className="mr-2">{iconElement}</span>
      )}
      {children}
      {iconPosition === 'right' && iconElement && (
        <span className="ml-2">{iconElement}</span>
      )}
    </button>
  );
};

interface LearningCardButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  title: string;
  description?: string;
  icon?: React.ReactNode;
  badge?: React.ReactNode;
  fullWidth?: boolean;
  variant?: 'default' | 'success' | 'warning' | 'danger';
}

const cardVariantStyles: Record<string, string> = {
  default: 'border-gray-200 hover:border-indigo-300 hover:shadow-md',
  success: 'border-green-200 bg-green-50 hover:bg-green-100',
  warning: 'border-yellow-200 bg-yellow-50 hover:bg-yellow-100',
  danger: 'border-red-200 bg-red-50 hover:bg-red-100'
};

export const LearningCardButton: React.FC<LearningCardButtonProps> = ({
  title,
  description,
  icon,
  badge,
  fullWidth = true,
  variant = 'default',
  className = '',
  ...props
}) => {
  const baseStyles = 'p-4 border rounded-lg transition-all duration-200 text-left group focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500';
  const widthStyles = fullWidth ? 'w-full' : '';
  
  const combinedStyles = `${baseStyles} ${cardVariantStyles[variant]} ${widthStyles} ${className}`.trim();
  
  return (
    <button className={combinedStyles} {...props}>
      <div className="flex items-center justify-between">
        <div className="flex-1">
          <h3 className="font-medium text-gray-900 group-hover:text-indigo-600 transition-colors">
            {title}
          </h3>
          {description && (
            <p className="text-sm text-gray-500 mt-1">{description}</p>
          )}
        </div>
        <div className="flex items-center gap-2 ml-4">
          {badge}
          {icon || <ArrowRightIcon className="w-5 h-5 text-gray-400 group-hover:text-indigo-600 transition-colors" />}
        </div>
      </div>
    </button>
  );
};