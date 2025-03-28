import { produce } from 'immer'
import { CoffeesReducerActionTypes } from './actions'

export type Coffee = {
  id: string
  title: string
  description: string
  tags: string[]
  price: number
  image: string
}

export type CartItem = {
  coffee: Coffee
  quantity: number
}

export type CartState = {
  items: CartItem[]
}

// biome-ignore lint/suspicious/noExplicitAny: <explanation>
export function cartReducer(state: CartState, action: any) {
  switch (action.type) {
    case CoffeesReducerActionTypes.ADD_ITEM:
      return produce(state, draft => {
        const coffeeAlreadyExists = draft.items.findIndex(
          item => item.coffee.id === action.payload.coffee.id
        )
        if (coffeeAlreadyExists >= 0) {
          draft.items[coffeeAlreadyExists].quantity += action.payload.quantity
          return
        }
        draft.items.push(action.payload)
      })
    case CoffeesReducerActionTypes.REMOVE_ITEM:
      return produce(state, draft => {
        const coffeeIndex = draft.items.findIndex(
          item => item.coffee.id === action.payload.coffeeId
        )
        if (coffeeIndex >= 0) {
          draft.items.splice(coffeeIndex, 1)
        }
      })
    case CoffeesReducerActionTypes.INCREMENT_ITEM_QUANTITY:
      return produce(state, draft => {
        const coffeeIndex = draft.items.findIndex(
          item => item.coffee.id === action.payload.coffeeId
        )
        if (coffeeIndex >= 0) {
          draft.items[coffeeIndex].quantity += 1
        }
      })
    case CoffeesReducerActionTypes.DECREMENT_ITEM_QUANTITY:
      return produce(state, draft => {
        const coffeeIndex = draft.items.findIndex(
          item => item.coffee.id === action.payload.coffeeId
        )
        if (coffeeIndex === -1) {
          return
        }
        if (draft.items[coffeeIndex].quantity === 1) {
          return
        }
        draft.items[coffeeIndex].quantity -= 1
      })
    case CoffeesReducerActionTypes.CLEAR_CART:
      return produce(state, draft => {
        draft.items = []
      })
    default:
      return state
  }
}
