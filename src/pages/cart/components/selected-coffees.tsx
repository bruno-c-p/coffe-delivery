import { useFormContext } from 'react-hook-form'
import { useCartContext } from '../../../hooks/useCartContext'
import { CartItem } from './cart-item'

export function SelectedCoffees() {
  const {
    formState: { isValid, isDirty },
  } = useFormContext()
  const { cart, deliveryFee, itemsTotal, total } = useCartContext()

  return (
    <div className="flex flex-col gap-3">
      <h2 className="font-bold font-display text-base-subtitle text-lg">
        Cafés selecionados
      </h2>

      <div className="rounded-md rounded-tl-md rounded-tr-[36px] rounded-br-md rounded-bl-[36px] bg-base-card p-10">
        <div className="flex flex-col gap-6">
          {cart.map(item => (
            <CartItem cartItem={item} key={item.coffee.id} />
          ))}
        </div>

        <div className="mt-6 flex flex-col gap-3">
          <div className="flex items-center justify-between">
            <span className="text-base-text text-sm">Total de itens</span>
            <span className="text-base-text">
              {new Intl.NumberFormat('pt-BR', {
                style: 'currency',
                currency: 'BRL',
              }).format(itemsTotal)}
            </span>
          </div>

          <div className="flex items-center justify-between">
            <span className="text-base-text text-sm">Entrega</span>
            <span className="text-base-text">
              {new Intl.NumberFormat('pt-BR', {
                style: 'currency',
                currency: 'BRL',
              }).format(deliveryFee)}
            </span>
          </div>

          <div className="flex items-center justify-between">
            <strong className="text-base-subtitle text-xl">Total</strong>
            <strong className="text-base-subtitle text-xl">
              {new Intl.NumberFormat('pt-BR', {
                style: 'currency',
                currency: 'BRL',
              }).format(total)}
            </strong>
          </div>
        </div>

        <button
          type="submit"
          form="checkout"
          className="mt-6 w-full rounded-md bg-yellow py-3 font-bold text-sm text-white uppercase transition hover:bg-yellow-dark disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:bg-yellow"
          disabled={!isValid || !isDirty}
        >
          Confirmar pedido
        </button>
      </div>
    </div>
  )
}
