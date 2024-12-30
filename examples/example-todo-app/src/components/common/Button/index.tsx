'use client'

import { Spinner } from '@nextui-org/react';
// Libs
import { ReactNode } from 'react';

type ButtonProps = {
  children: ReactNode;
  type?: 'button' | 'submit';
  variant?:
    | 'info'
    | 'success'
    | 'danger'
    | 'warning';
  customClass?: string;
  name?: string;
  value?: string;
  ariaLabel?: string;
  disabled?: boolean;
  loading: boolean;
  onClick?: () => void;
}

const ButtonComponent = ({
  children,
  type = 'button',
  variant = 'info',
  customClass = '',
  name,
  value,
  ariaLabel = 'button',
  disabled = false,
  loading,
  onClick
}: ButtonProps) => {
  const variantClasses: Record<string, string> = {
    info: 'bg-info',
    success: 'bg-success',
    danger: 'bg-danger',
    warning: 'bg-warning'
  };

    return (
      <button
        name={name}
        type={type}
        value={value}
        aria-label={ariaLabel}
        disabled={disabled}
        className={`${variantClasses[variant]} ${customClass} text-xxs rounded-default text-accent-secondary px-2.5 py-2`}
        onClick={onClick}
      >
        {loading ? <Spinner /> : children}
      </button>
    )
}

export default ButtonComponent;
