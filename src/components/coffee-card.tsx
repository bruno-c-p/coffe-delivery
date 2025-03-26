import { Minus, Plus, ShoppingCart } from '@phosphor-icons/react'

interface CoffeeCardProps {
  title: string
  description: string
  price: number
  tags: string[]
  image: string
}

export function CoffeeCard({
  title,
  description,
  price,
  tags,
  image,
}: CoffeeCardProps) {
  return (
    <div className="flex flex-col rounded-tl-md rounded-tr-[36px] rounded-br-md rounded-bl-[36px] bg-zinc-100 p-5">
      <div className="-mt-10 flex flex-col items-center">
        <img alt={title} className="h-[120px] w-[120px]" src={image} />

        <div className="mt-3 flex gap-1">
          {tags.map(tag => (
            <span
              key={tag}
              className="rounded-full bg-amber-100 px-2 py-1 font-bold text-[10px] text-yellow-600 uppercase"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      <div className="mt-4 text-center">
        <strong className="font-display text-xl text-zinc-800">{title}</strong>
        <p className="mt-2 text-sm text-zinc-500">{description}</p>
      </div>

      <div className="mt-8 flex items-center justify-between">
        <div className="flex items-baseline gap-1">
          <span className="text-sm text-zinc-700">R$</span>
          <strong className="font-display text-2xl text-zinc-700">
            {new Intl.NumberFormat('pt-BR', {
              minimumFractionDigits: 2,
              maximumFractionDigits: 2,
            }).format(price)}
          </strong>
        </div>

        <div className="flex items-stretch gap-2">
          <div className="flex items-stretch gap-1 rounded-md bg-zinc-200">
            <button
              type="button"
              className="cursor-pointer rounded-md bg-zinc-200 p-2 text-violet-500 hover:text-violet-700"
            >
              <Minus weight="bold" size={14} />
            </button>
            <span className="min-w-4 self-center text-center">1</span>
            <button
              type="button"
              className="cursor-pointer rounded-md bg-zinc-200 p-2 text-violet-500 hover:text-violet-700"
            >
              <Plus weight="bold" size={14} />
            </button>
          </div>

          <button
            type="button"
            className="cursor-pointer rounded-md bg-violet-700 p-2 text-white hover:bg-violet-800"
          >
            <ShoppingCart weight="fill" size={20} />
          </button>
        </div>
      </div>
    </div>
  )
}
