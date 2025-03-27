import { Coffee, Package, ShoppingCart, Timer } from '@phosphor-icons/react'
import coffeeData from '../assets/data.json'
import { CoffeeCard } from './home/coffee-card'
import { FeatureItem } from './home/components/feature-item'

export function Home() {
  return (
    <div>
      <section className="relative">
        <div className="absolute inset-0 bg-[length:auto_100%] bg-[url(/hero-bg.png)] bg-center bg-repeat-x" />
        <div className="relative mx-auto max-w-[1440px] px-40">
          <div className="flex items-start justify-between py-24">
            <div className="max-w-[588px]">
              <h1 className="font-display font-extrabold text-5xl text-base-title">
                Encontre o café perfeito para qualquer hora do dia
              </h1>
              <p className="mt-4 text-base-subtitle text-xl">
                Com o Coffee Delivery você recebe seu café onde estiver, a
                qualquer hora
              </p>
              <div className="mt-16 grid grid-cols-2 gap-5">
                <FeatureItem
                  icon={ShoppingCart}
                  text="Compra simples e segura"
                  iconBgColor="bg-yellow-dark"
                />
                <FeatureItem
                  icon={Package}
                  text="Embalagem mantém o café intacto"
                  iconBgColor="bg-base-text"
                />
                <FeatureItem
                  icon={Timer}
                  text="Entrega rápida e rastreada"
                  iconBgColor="bg-yellow-dark"
                />
                <FeatureItem
                  icon={Coffee}
                  text="O café chega fresquinho até você"
                  iconBgColor="bg-purple-dark"
                />
              </div>
            </div>
            <img
              alt="Copo de café do Coffee Delivery com grãos de café e pó de café ao redor"
              className="h-[360px] w-[476px] object-cover"
              src="/hero.png"
            />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1440px] px-40 py-8">
        <h2 className="font-display font-extrabold text-3xl text-base-subtitle">
          Nossos cafés
        </h2>

        <div className="mt-14 grid grid-cols-4 gap-x-8 gap-y-10">
          {coffeeData.coffees.map(coffee => (
            <CoffeeCard key={coffee.id} {...coffee} />
          ))}
        </div>
      </section>
    </div>
  )
}
