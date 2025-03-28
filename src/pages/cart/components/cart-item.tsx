import { Minus, Plus, Trash } from '@phosphor-icons/react'
import { useCartContext } from '../../../hooks/useCartContext'
import type { CartItem as CartItemType } from '../../../reducers/cart/reducer'
interface CartItemProps {
  cartItem: CartItemType
}

export function CartItem({ cartItem }: CartItemProps) {
  const { decrementItemQuantity, incrementItemQuantity, removeFromCart } =
    useCartContext()

  const formattedPrice = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(cartItem.coffee.price * cartItem.quantity)

  return (
    <div className="flex items-start justify-between border-base-button border-b pb-6">
      <div className="flex gap-5">
        <img
          src={cartItem.coffee.image}
          alt={cartItem.coffee.title}
          className="h-16 w-16"
        />

        <div className="flex flex-col gap-2">
          <span className="text-base-subtitle">{cartItem.coffee.title}</span>

          <div className="flex gap-2">
            <div className="flex h-8 items-center gap-2 rounded-md bg-base-button px-2">
              <button
                type="button"
                className="text-purple hover:text-purple-dark"
                onClick={() => decrementItemQuantity(cartItem.coffee.id)}
              >
                <Minus size={14} weight="bold" />
              </button>

              <span className="min-w-8 text-center text-base-title">
                {cartItem.quantity}
              </span>

              <button
                type="button"
                className="text-purple hover:text-purple-dark"
                onClick={() => incrementItemQuantity(cartItem.coffee.id)}
              >
                <Plus size={14} weight="bold" />
              </button>
            </div>

            <button
              type="button"
              className="flex h-8 items-center gap-1 rounded-md bg-base-button px-2 text-base-text text-xs uppercase transition hover:bg-base-hover"
              onClick={() => removeFromCart(cartItem.coffee.id)}
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
