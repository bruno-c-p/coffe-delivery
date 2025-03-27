import { CreditCard, CurrencyDollar, MapPinLine } from '@phosphor-icons/react'
import { useState } from 'react'
import { FormGroup } from './components/form-group'
import * as FormInput from './components/input'
import { PaymentMethod } from './components/payment-method'
import { SelectedCoffees } from './components/selected-coffees'

export function Cart() {
  const [paymentMethod, setPaymentMethod] = useState<
    'credit' | 'debit' | 'cash'
  >()

  return (
    <div className="mx-auto my-10 grid max-w-[1440px] grid-cols-cart gap-12 px-40">
      <div>
        <h1 className="font-bold font-display text-base-subtitle text-lg">
          Complete seu pedido
        </h1>
        <form id="checkout" className="mt-4 flex flex-col gap-8">
          <FormGroup
            icon={MapPinLine}
            iconColor="text-yellow-dark"
            title="Endereço de entrega"
            description="Informe o endereço onde deseja receber seu pedido"
          >
            <div className="grid grid-cols-6 gap-4">
              <FormInput.Root className="col-span-2">
                <FormInput.Input placeholder="CEP" />
              </FormInput.Root>
              <FormInput.Root className="col-span-6">
                <FormInput.Input placeholder="Rua" />
              </FormInput.Root>
              <FormInput.Root className="col-span-2">
                <FormInput.Input placeholder="Número" />
              </FormInput.Root>
              <FormInput.Root className="col-span-4">
                <FormInput.Input id="complement" placeholder="Complemento" />
                <FormInput.Hint htmlFor="complement">Opcional</FormInput.Hint>
              </FormInput.Root>
              <FormInput.Root className="col-span-2">
                <FormInput.Input placeholder="Bairro" />
              </FormInput.Root>
              <FormInput.Root className="col-span-3">
                <FormInput.Input placeholder="Cidade" />
              </FormInput.Root>
              <FormInput.Root className="col-span-1">
                <FormInput.Input placeholder="UF" />
              </FormInput.Root>
            </div>
          </FormGroup>
          <FormGroup
            icon={CurrencyDollar}
            iconColor="text-purple"
            title="Pagamento"
            description="O pagamento é feito na entrega. Escolha a forma que deseja pagar"
          >
            <PaymentMethod
              selected={paymentMethod}
              onSelect={method => setPaymentMethod(method)}
            />
          </FormGroup>
        </form>
      </div>
      <div>
        <SelectedCoffees
          items={[
            {
              id: '1',
              name: 'Expresso',
              price: 10,
              quantity: 1,
              imageUrl: '/images/coffees/expresso.png',
            },
            {
              id: '1',
              name: 'Expresso',
              price: 10,
              quantity: 1,
              imageUrl: '/images/coffees/expresso.png',
            },
          ]}
          onIncrementItem={() => {}}
          onDecrementItem={() => {}}
          onRemoveItem={() => {}}
        />
      </div>
    </div>
  )
}
