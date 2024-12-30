'use client';

import { extendVariants, Button as ButtonNextUI } from '@nextui-org/react';

export const Button = extendVariants(ButtonNextUI, {
  variants: {
    color: {
      danger: 'bg-danger text-white',
      warning: 'bg-warning text-white',
      success: 'bg-success text-red',
      info: 'bg-info text-dark',
    },
    radius: {
      xs: 'rounded',
    },
    size: {
      default: 'text-xxs text-accent-secondary px-2.5 py-2',
    },
  },
  defaultVariants: {
    color: 'info',
    radius: 'xs',
    size: 'default',
  },  
});

export default Button;
