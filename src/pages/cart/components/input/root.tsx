import type { HTMLAttributes } from 'react'
import { twMerge } from 'tailwind-merge'

export interface RootProps extends HTMLAttributes<HTMLDivElement> {}

export function Root({ children, className, ...props }: RootProps) {
  return (
    <div
      className={twMerge(
        'flex items-stretch justify-between rounded-[4px] border border-base-button bg-base-input focus-within:border-yellow-dark',
        className
      )}
      {...props}
    >
      {children}
    </div>
  )
}
