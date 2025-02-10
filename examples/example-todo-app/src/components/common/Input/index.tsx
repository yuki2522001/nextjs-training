'use client'

import { extendVariants, Input as NextUIInput } from '@nextui-org/react'

const Input = extendVariants(NextUIInput, {
  variants: {
    color: {
      default: {
        input: 'border-default',
        danger: 'text-danger'
      }
    },
    size: {
      sm: {
        input: 'px-2.5 py-2 text-small'
      },
    },
    radius: {
      default: {
        input: 'rounded-default'
      }
    },
    border: {
      default: {
        input: 'border'
      }
    }
  },
  defaultVariants: {
    color: 'default',
    size: 'sm',
    radius: 'default',
    border: 'default',
  }
})

export default Input;
