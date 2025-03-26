import { MapPin, ShoppingCart } from '@phosphor-icons/react'
import { Link } from 'react-router-dom'
import { Logo } from './logo'

export function Header() {
  return (
    <header className="mx-auto flex max-w-[1440px] items-center justify-between px-40 py-8">
      <div>
        <Link to="/">
          <Logo />
        </Link>
      </div>

      <nav>
        <ul className="flex items-center gap-3">
          <li className="rounded-lg bg-violet-200 hover:opacity-70">
            <Link
              to="#"
              className="flex items-center gap-1 rounded-lg p-2 text-sm/snug text-violet-900"
            >
              <MapPin weight="fill" size={20} className="fill-violet-500" />
              Porto Alegre, RS
            </Link>
          </li>
          <li className="rounded-lg bg-amber-100 hover:opacity-70">
            <Link to="/cart" className="flex items-center gap-1 rounded-lg p-2">
              <ShoppingCart
                size={20}
                weight="fill"
                className="fill-yellow-600"
              />
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}
