'use client';

import { extendVariants, Button as ButtonNextUI } from '@nextui-org/react';

export const Button = extendVariants(ButtonNextUI, {
  variants: {
    color: {
      danger: 'bg-danger',
      warning: 'bg-warning',
      success: 'bg-success',
      info: 'bg-info',
    },
    radius: {
      default: 'rounded-default',
    },
    size: {
      default: 'text-small px-2.5 py-2 text-accent-secondary',
    },
  },
  defaultVariants: {
    color: 'info',
    radius: 'default',
    size: 'default',
  },  
});

export default Button;
