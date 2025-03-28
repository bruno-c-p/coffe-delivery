import { zodResolver } from '@hookform/resolvers/zod'
import { FormProvider, useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { z } from 'zod'
import { useCartContext } from '../../hooks/useCartContext'
import CheckoutForm from './components/checkout-form'
import { SelectedCoffees } from './components/selected-coffees'

export const checkoutFormSchema = z.object({
  cep: z.string().min(1),
  street: z.string().min(1),
  number: z.string().min(1),
  complement: z.string().optional(),
  neighborhood: z.string().min(1),
  city: z.string().min(1),
  uf: z.string().min(1),
  paymentMethod: z.enum(['credit', 'debit', 'cash']),
})

export type CheckoutFormData = z.infer<typeof checkoutFormSchema>

export function Cart() {
  const navigate = useNavigate()
  const { clearCart } = useCartContext()
  const checkoutForm = useForm<CheckoutFormData>({
    resolver: zodResolver(checkoutFormSchema),
    defaultValues: {
      cep: '',
      street: '',
      number: '',
      complement: '',
      neighborhood: '',
      city: '',
      uf: '',
      paymentMethod: 'credit',
    },
  })
  const { handleSubmit, reset } = checkoutForm

  function handleCheckout(data: CheckoutFormData) {
    navigate('/order-success', { state: { data } })
    reset()
    clearCart()
  }

  return (
    <div className="mx-auto my-10 grid max-w-[1440px] grid-cols-cart gap-12 px-40">
      <FormProvider {...checkoutForm}>
        <div>
          <h1 className="font-bold font-display text-base-subtitle text-lg">
            Complete seu pedido
          </h1>
          <form
            id="checkout"
            onSubmit={handleSubmit(handleCheckout)}
            className="mt-4 flex flex-col gap-8"
          >
            <CheckoutForm />
          </form>
        </div>
        <SelectedCoffees />
      </FormProvider>
    </div>
  )
}
