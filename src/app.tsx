import { BrowserRouter } from 'react-router-dom'
import { CartContextProvider } from './contexts/cart-context'
import { Router } from './router'

export function App() {
  return (
    <>
      <BrowserRouter>
        <CartContextProvider>
          <Router />
        </CartContextProvider>
      </BrowserRouter>
    </>
  )
}
