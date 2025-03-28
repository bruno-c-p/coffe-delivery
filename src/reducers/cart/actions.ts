import type { Coffee } from './reducer'

export enum CoffeesReducerActionTypes {
  ADD_ITEM = 'ADD_ITEM',
  REMOVE_ITEM = 'REMOVE_ITEM',
  INCREMENT_ITEM_QUANTITY = 'INCREMENT_ITEM_QUANTITY',
  DECREMENT_ITEM_QUANTITY = 'DECREMENT_ITEM_QUANTITY',
  CLEAR_CART = 'CLEAR_CART',
}

export function addItemAction(coffee: Coffee, quantity: number) {
  return {
    type: CoffeesReducerActionTypes.ADD_ITEM,
    payload: { coffee, quantity },
  }
}

export function removeItemAction(coffeeId: string) {
  return {
    type: CoffeesReducerActionTypes.REMOVE_ITEM,
    payload: { coffeeId },
  }
}

export function incrementItemQuantityAction(coffeeId: string) {
  return {
    type: CoffeesReducerActionTypes.INCREMENT_ITEM_QUANTITY,
    payload: { coffeeId },
  }
}

export function decrementItemQuantityAction(coffeeId: string) {
  return {
    type: CoffeesReducerActionTypes.DECREMENT_ITEM_QUANTITY,
    payload: { coffeeId },
  }
}

export function clearCartAction() {
  return {
    type: CoffeesReducerActionTypes.CLEAR_CART,
  }
}
