import type { ButtonHTMLAttributes } from 'react'
import { twMerge } from 'tailwind-merge'

export interface OptionProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  icon: React.ComponentType<{ className?: string; size?: number }>
  isSelected?: boolean
}

export function Option({
  children,
  className,
  icon: Icon,
  isSelected,
  ...props
}: OptionProps) {
  return (
    <button
      type="button"
      className={twMerge(
        'flex flex-1 cursor-pointer items-center gap-3 rounded-md border bg-base-button p-4 text-base-text text-xs uppercase transition hover:bg-base-hover',
        isSelected &&
          'border border-purple bg-purple-light hover:bg-purple-light',
        className
      )}
      {...props}
    >
      <Icon className="text-purple" size={16} />
      {children}
    </button>
  )
}
