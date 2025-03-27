import { Route, Routes } from 'react-router-dom'
import { DefaultLayout } from './layouts/default-layout'
import { Cart } from './pages/cart/cart'
import { Home } from './pages/home/home'
import { OrderSuccess } from './pages/order-success/order-success'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/order-success" element={<OrderSuccess />} />
      </Route>
    </Routes>
  )
}
