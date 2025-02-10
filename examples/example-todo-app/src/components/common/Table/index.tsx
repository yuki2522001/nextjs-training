'use client'

// Libs
import { extendVariants, Table as NextUITable } from '@nextui-org/react'

const Table = extendVariants(NextUITable, {
  variants: {
    styles: {
      default: {
        thead: 'border-b border-lineBg background-none',
        th: 'text-small pl-0 text-left text-accent-primary',
        td: 'px-4 py-4 pl-0'
      }
    }
  },
  defaultVariants: {
    styles: 'default',
    removeWrapper: 'true'
  }
})

export default Table;
