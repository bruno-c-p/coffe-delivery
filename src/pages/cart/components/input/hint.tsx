import type { LabelHTMLAttributes } from 'react'
import { twMerge } from 'tailwind-merge'

export interface HintProps extends LabelHTMLAttributes<HTMLLabelElement> {
  htmlFor: string
}

export function Hint({ className, children, htmlFor, ...props }: HintProps) {
  return (
    <label
      htmlFor={htmlFor}
      className={twMerge(
        'flex cursor-pointer items-center justify-end p-3 text-base-label text-xs italic',
        className
      )}
      {...props}
    >
      {children}
    </label>
  )
}
