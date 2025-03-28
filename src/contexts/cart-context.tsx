import { type ReactNode, createContext, useEffect, useReducer } from 'react'
import {
  addItemAction,
  clearCartAction,
  decrementItemQuantityAction,
  incrementItemQuantityAction,
  removeItemAction,
} from '../reducers/cart/actions'
import {
  type CartItem,
  type Coffee,
  cartReducer,
} from '../reducers/cart/reducer'

const CART_STATE_STORAGE_KEY = '@coffee-delivery:cart-state-1.0.0'

interface CartContextType {
  cart: CartItem[]
  incrementItemQuantity: (coffeeId: string) => void
  decrementItemQuantity: (coffeeId: string) => void
  addToCart: (coffee: Coffee, quantity: number) => void
  removeFromCart: (coffeeId: string) => void
  deliveryFee: number
  itemsTotal: number
  total: number
  clearCart: () => void
}

interface CartContextProviderProps {
  children: ReactNode
}

export const CartContext = createContext({} as CartContextType)

export function CartContextProvider({
  children,
}: CartContextProviderProps): ReactNode {
  const [cartState, dispatch] = useReducer(
    cartReducer,
    {
      items: [],
    },
    initialState => {
      const hasStoredState = localStorage.getItem(CART_STATE_STORAGE_KEY)
      if (hasStoredState) {
        const storedState = JSON.parse(hasStoredState)
        return storedState
      }
      return initialState
    }
  )

  const deliveryFee = 3.5
  const itemsTotal = cartState.items.reduce((total, item) => {
    return total + item.coffee.price * item.quantity
  }, 0)
  const total = itemsTotal + deliveryFee

  useEffect(() => {
    const stateJSON = JSON.stringify(cartState)
    localStorage.setItem(CART_STATE_STORAGE_KEY, stateJSON)
  }, [cartState])

  function addToCart(coffee: Coffee, quantity: number) {
    dispatch(addItemAction(coffee, quantity))
  }

  function removeFromCart(coffeeId: string) {
    dispatch(removeItemAction(coffeeId))
  }

  function incrementItemQuantity(coffeeId: string) {
    dispatch(incrementItemQuantityAction(coffeeId))
  }

  function decrementItemQuantity(coffeeId: string) {
    dispatch(decrementItemQuantityAction(coffeeId))
  }

  function clearCart() {
    dispatch(clearCartAction())
  }

  return (
    <CartContext.Provider
      value={{
        cart: cartState.items,
        incrementItemQuantity,
        decrementItemQuantity,
        addToCart,
        removeFromCart,
        deliveryFee,
        itemsTotal,
        total,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
