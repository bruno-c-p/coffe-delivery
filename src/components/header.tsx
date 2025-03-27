import { MapPin, ShoppingCart } from '@phosphor-icons/react'
import { Link } from 'react-router-dom'
import { Logo } from './logo'

export function Header() {
  return (
    <header className="mx-auto flex max-w-[1440px] items-center justify-between px-40 py-8">
      <div>
        <Link to="/" className="transition-opacity hover:opacity-70">
          <Logo />
        </Link>
      </div>

      <nav>
        <ul className="flex items-center gap-3">
          <li className="rounded-lg bg-purple-light">
            <Link
              to="#"
              className="flex items-center gap-1 rounded-lg p-2 text-purple-dark text-sm/snug transition-opacity hover:opacity-70"
            >
              <MapPin weight="fill" size={20} className="fill-purple" />
              Porto Alegre, RS
            </Link>
          </li>
          <li className="rounded-lg bg-yellow-light">
            <Link
              to="/cart"
              className="flex items-center gap-1 rounded-lg p-2 transition-opacity hover:opacity-70"
            >
              <ShoppingCart
                size={20}
                weight="fill"
                className="fill-yellow-dark"
              />
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}
