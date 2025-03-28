import { CurrencyDollar, MapPin, Timer } from '@phosphor-icons/react'
import { useLocation } from 'react-router-dom'
import type { CheckoutFormData } from '../cart/cart'

const paymentMethod = {
  credit: 'Cartão de crédito',
  debit: 'Cartão de débito',
  cash: 'Dinheiro',
}

export function OrderSuccess() {
  const location = useLocation()

  if (!location.state) {
    return (
      <div className="mx-auto max-w-[1440px] px-40 py-20">
        <h1 className="font-display font-extrabold text-3xl text-red-600">
          Não encontrado.
        </h1>
        <p className="mt-1 text-base-subtitle text-xl">
          O pedido não foi encontrado.
        </p>
      </div>
    )
  }

  const { data: checkoutState } = location.state as {
    data: CheckoutFormData
  }

  return (
    <div className="mx-auto max-w-[1440px] px-40 py-20">
      <div>
        <h1 className="font-display font-extrabold text-3xl text-yellow-dark">
          Uhu! Pedido confirmado
        </h1>
        <p className="mt-1 text-base-subtitle text-xl">
          Agora é só aguardar que logo o café chegará até você
        </p>
      </div>

      <div className="mt-10 flex items-start justify-between">
        <div className="relative rounded-tl-md rounded-tr-[36px] rounded-br-md rounded-bl-[36px] p-[1px]">
          <div className="absolute inset-0 rounded-tl-md rounded-tr-[36px] rounded-br-md rounded-bl-[36px] bg-gradient-to-r from-yellow-dark to-purple-dark" />
          <div className="relative min-w-[526px] rounded-tl-md rounded-tr-[36px] rounded-br-md rounded-bl-[36px] bg-white p-10 text-base-text">
            <div className="flex items-center gap-3">
              <div className="rounded-full bg-purple p-2">
                <MapPin className="text-white" weight="fill" size={16} />
              </div>
              <div>
                <p>
                  Entrega em <strong>{checkoutState.street}</strong>
                </p>
                <p>
                  {checkoutState.neighborhood} - {checkoutState.city},{' '}
                  {checkoutState.uf}
                </p>
              </div>
            </div>

            <div className="mt-8 flex items-center gap-3">
              <div className="rounded-full bg-yellow p-2">
                <Timer className="text-white" weight="fill" size={16} />
              </div>
              <div>
                <p>Previsão de entrega</p>
                <strong>20 min - 30 min</strong>
              </div>
            </div>

            <div className="mt-8 flex items-center gap-3">
              <div className="rounded-full bg-yellow-dark p-2">
                <CurrencyDollar
                  className="text-white"
                  weight="fill"
                  size={16}
                />
              </div>
              <div>
                <p>Pagamento na entrega</p>
                <strong>{paymentMethod[checkoutState.paymentMethod]}</strong>
              </div>
            </div>
          </div>
        </div>
        <img
          src="/order-success.svg"
          alt="Entregador em uma moto roxa"
          className="h-[293px]"
        />
      </div>
    </div>
  )
}
