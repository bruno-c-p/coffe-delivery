import type { InputHTMLAttributes } from 'react'
import { twMerge } from 'tailwind-merge'

export type InputProps = InputHTMLAttributes<HTMLInputElement>

export function Input({ className, ...props }: InputProps) {
  return (
    <input
      type="text"
      className={twMerge(
        'w-full bg-transparent p-3 text-base-text text-sm placeholder:text-base-label focus:outline-none',
        className
      )}
      {...props}
    />
  )
}
