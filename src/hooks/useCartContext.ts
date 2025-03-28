import { useContext } from 'react'
import { CartContext } from '../contexts/cart-context'

export function useCartContext() {
  const context = useContext(CartContext)
  if (!context) {
    throw new Error('useCartContext must be used within a CartContextProvider')
  }
  return context
}
