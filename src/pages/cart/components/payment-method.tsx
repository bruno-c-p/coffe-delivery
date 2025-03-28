import { Bank, CreditCard, Money } from '@phosphor-icons/react'
import * as Select from './select'

interface PaymentMethodProps {
  selected: 'credit' | 'debit' | 'cash'
  onSelect: (method: 'credit' | 'debit' | 'cash') => void
}

export function PaymentMethod({
  selected = 'credit',
  onSelect,
}: PaymentMethodProps) {
  return (
    <Select.Root>
      <Select.Option
        icon={CreditCard}
        isSelected={selected === 'credit'}
        onClick={() => onSelect('credit')}
      >
        Cartão de crédito
      </Select.Option>

      <Select.Option
        icon={Bank}
        isSelected={selected === 'debit'}
        onClick={() => onSelect('debit')}
      >
        Cartão de débito
      </Select.Option>

      <Select.Option
        icon={Money}
        isSelected={selected === 'cash'}
        onClick={() => onSelect('cash')}
      >
        Dinheiro
      </Select.Option>
    </Select.Root>
  )
}
