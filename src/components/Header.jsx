import { ShoppingCart, Utensils } from 'lucide-react'

export default function Header({ cartCount, onCartClick }) {
  return (
    <header className="sticky top-0 z-20 bg-white/80 backdrop-blur border-b border-slate-200">
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-xl bg-gradient-to-br from-orange-500 to-rose-500 text-white shadow">
            <Utensils className="w-6 h-6" />
          </div>
          <div>
            <h1 className="text-xl font-bold text-slate-900 leading-tight">TasteCart</h1>
            <p className="text-xs text-slate-500 -mt-0.5">Delicious food, delivered fast</p>
          </div>
        </div>
        <button onClick={onCartClick} className="relative inline-flex items-center gap-2 rounded-full bg-slate-900 text-white px-4 py-2 hover:bg-slate-800 transition-colors">
          <ShoppingCart className="w-5 h-5" />
          <span className="text-sm font-medium">Cart</span>
          {cartCount > 0 && (
            <span className="absolute -top-2 -right-2 min-w-[22px] h-5 px-1 rounded-full bg-orange-500 text-white text-xs flex items-center justify-center">
              {cartCount}
            </span>
          )}
        </button>
      </div>
    </header>
  )
}
