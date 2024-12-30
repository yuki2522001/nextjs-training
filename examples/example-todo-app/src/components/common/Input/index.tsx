'use client'

import { extendVariants, Input as NextUIInput } from '@nextui-org/react'

const Input = extendVariants(NextUIInput, {
  variants: {
    color: {
      default: {
        inputWrapper: 'border-default',
        errorMessage: 'text-sm'
      }
    },
    size: {
      sm: {
        inputWrapper: 'px-2.5 py-2 text-small'
      },
    },
    radius: {
      default: {
        inputWrapper: 'rounded-default'
      }
    },
    border: {
      default: {
        inputWrapper: 'border'
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
