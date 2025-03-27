import { CurrencyDollar, MapPin, Timer } from '@phosphor-icons/react'

interface OrderSuccessInfo {
  street: string
  district: string
  city: string
  state: string
  paymentMethod: string
  estimatedTime: string
}

export function OrderSuccess() {
  const orderInfo: OrderSuccessInfo = {
    street: 'Rua João Daniel Martinelli, 102',
    district: 'Farrapos',
    city: 'Porto Alegre',
    state: 'RS',
    paymentMethod: 'Cartão de Crédito',
    estimatedTime: '20 min - 30 min',
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
          <div className="relative rounded-tl-md rounded-tr-[36px] rounded-br-md rounded-bl-[36px] bg-white p-10 text-base-text">
            <div className="flex items-center gap-3">
              <div className="rounded-full bg-purple p-2">
                <MapPin className="text-white" weight="fill" size={16} />
              </div>
              <div>
                <p>
                  Entrega em <strong>{orderInfo.street}</strong>
                </p>
                <p>
                  {orderInfo.district} - {orderInfo.city}, {orderInfo.state}
                </p>
              </div>
            </div>

            <div className="mt-8 flex items-center gap-3">
              <div className="rounded-full bg-yellow p-2">
                <Timer className="text-white" weight="fill" size={16} />
              </div>
              <div>
                <p>Previsão de entrega</p>
                <strong>{orderInfo.estimatedTime}</strong>
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
                <strong>{orderInfo.paymentMethod}</strong>
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
