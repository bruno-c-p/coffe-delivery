import type { HTMLAttributes } from 'react'
import { twMerge } from 'tailwind-merge'

export interface RootProps extends HTMLAttributes<HTMLDivElement> {
  error?: boolean
}

export function Root({ children, className, error, ...props }: RootProps) {
  return (
    <div className={twMerge('flex gap-3', className)} {...props}>
      {children}
    </div>
  )
}
