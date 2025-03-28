import { CurrencyDollar, MapPinLine } from '@phosphor-icons/react'
import { Controller, useFormContext } from 'react-hook-form'
import { useHookFormMask } from 'use-mask-input'
import { FormGroup } from './form-group'
import * as FormInput from './input'
import { PaymentMethod } from './payment-method'

const CheckoutForm = () => {
  const { register, control } = useFormContext()
  const registerWithMask = useHookFormMask(register)

  return (
    <>
      <FormGroup
        icon={MapPinLine}
        iconColor="text-yellow-dark"
        title="Endereço de entrega"
        description="Informe o endereço onde deseja receber seu pedido"
      >
        <div className="grid grid-cols-6 gap-4">
          <FormInput.Root className="col-span-2">
            <FormInput.Input
              placeholder="CEP"
              {...registerWithMask('cep', ['99999-999'])}
            />
          </FormInput.Root>
          <FormInput.Root className="col-span-6">
            <FormInput.Input placeholder="Rua" {...register('street')} />
          </FormInput.Root>
          <FormInput.Root className="col-span-2">
            <FormInput.Input
              placeholder="Número"
              {...registerWithMask('number', ['99 9999-9999'])}
            />
          </FormInput.Root>
          <FormInput.Root className="col-span-4">
            <FormInput.Input
              id="complement"
              placeholder="Complemento"
              {...register('complement')}
            />
            <FormInput.Hint htmlFor="complement">Opcional</FormInput.Hint>
          </FormInput.Root>
          <FormInput.Root className="col-span-2">
            <FormInput.Input
              placeholder="Bairro"
              {...register('neighborhood')}
            />
          </FormInput.Root>
          <FormInput.Root className="col-span-3">
            <FormInput.Input placeholder="Cidade" {...register('city')} />
          </FormInput.Root>
          <FormInput.Root className="col-span-1">
            <FormInput.Input placeholder="UF" {...register('uf')} />
          </FormInput.Root>
        </div>
      </FormGroup>
      <FormGroup
        icon={CurrencyDollar}
        iconColor="text-purple"
        title="Pagamento"
        description="O pagamento é feito na entrega. Escolha a forma que deseja pagar"
      >
        <Controller
          control={control}
          name="paymentMethod"
          render={({ field }) => (
            <PaymentMethod
              selected={field.value}
              onSelect={method => field.onChange(method)}
            />
          )}
        />
      </FormGroup>
    </>
  )
}

export default CheckoutForm
