import { Outlet } from 'react-router-dom'
import { Header } from '../components/header'

export function DefaultLayout() {
  return (
    <div className="min-h-dvh bg-background">
      <Header />
      <main>
        <Outlet />
      </main>
    </div>
  )
}
