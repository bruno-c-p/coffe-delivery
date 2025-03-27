import type { IconProps } from '@phosphor-icons/react'

interface FormGroupProps {
  children: React.ReactNode
  title: string
  description: string
  icon: React.ComponentType<IconProps>
  iconColor?: string
}

export function FormGroup({
  children,
  title,
  description,
  icon: Icon,
  iconColor = 'text-yellow-dark',
}: FormGroupProps) {
  return (
    <fieldset className="w-full rounded-md border-0 bg-base-card p-10">
      <div className="mb-8 flex gap-2">
        <Icon className={iconColor} size={22} weight="regular" />
        <div>
          <legend className="mb-1">
            <h2 className="font-medium text-base-subtitle">{title}</h2>
          </legend>
          <p className="text-base-text text-sm">{description}</p>
        </div>
      </div>
      {children}
    </fieldset>
  )
}
