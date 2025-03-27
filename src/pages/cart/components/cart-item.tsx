import { Minus, Plus, Trash } from '@phosphor-icons/react'

interface CartItemProps {
  imageUrl: string
  name: string
  price: number
  quantity: number
  onIncrement: () => void
  onDecrement: () => void
  onRemove: () => void
}

export function CartItem({
  imageUrl,
  name,
  price,
  quantity,
  onIncrement,
  onDecrement,
  onRemove,
}: CartItemProps) {
  const formattedPrice = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(price)

  return (
    <div className="flex items-start justify-between border-base-button border-b pb-6">
      <div className="flex gap-5">
        <img src={imageUrl} alt={name} className="h-16 w-16" />

        <div className="flex flex-col gap-2">
          <span className="text-base-subtitle">{name}</span>

          <div className="flex gap-2">
            <div className="flex h-8 items-center gap-2 rounded-md bg-base-button px-2">
              <button
                type="button"
                onClick={onDecrement}
                className="text-purple hover:text-purple-dark"
              >
                <Minus size={14} weight="bold" />
              </button>

              <span className="min-w-8 text-center text-base-title">
                {quantity}
              </span>

              <button
                type="button"
                onClick={onIncrement}
                className="text-purple hover:text-purple-dark"
              >
                <Plus size={14} weight="bold" />
              </button>
            </div>

            <button
              type="button"
              onClick={onRemove}
              className="flex h-8 items-center gap-1 rounded-md bg-base-button px-2 text-base-text text-xs uppercase transition hover:bg-base-hover"
            >
              <Trash size={16} className="text-purple" />
              Remover
            </button>
          </div>
        </div>
      </div>

      <strong className="text-base-text">{formattedPrice}</strong>
    </div>
  )
}
