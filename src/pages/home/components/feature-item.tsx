import type { ElementType } from 'react'
import { twMerge } from 'tailwind-merge'

interface FeatureItemProps {
  icon: ElementType
  text: string
  iconBgColor: string
}

export function FeatureItem({
  icon: Icon,
  text,
  iconBgColor,
}: FeatureItemProps) {
  return (
    <div className="flex items-center gap-3">
      <div className={twMerge('rounded-full p-2', iconBgColor)}>
        <Icon className="fill-white" size={16} weight="fill" />
      </div>
      <span className="text-base-text text-sm">{text}</span>
    </div>
  )
}
