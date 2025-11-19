export default function ProductCard({ product, onAdd }) {
  return (
    <div className="bg-white border rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
      <img src={product.image_url} alt={product.title} className="w-full h-40 object-cover" />
      <div className="p-4">
        <div className="flex items-start justify-between gap-3">
          <div>
            <h4 className="text-slate-900 font-semibold">{product.title}</h4>
            <p className="text-sm text-slate-500 line-clamp-2">{product.description}</p>
          </div>
          <div className="text-right">
            <p className="text-slate-900 font-bold">${product.price.toFixed(2)}</p>
            <p className="text-xs text-amber-600">⭐ {product.rating || 4.5}</p>
          </div>
        </div>
        <button onClick={() => onAdd(product)} className="mt-4 w-full rounded-lg bg-orange-500 hover:bg-orange-600 text-white py-2 text-sm font-medium transition-colors">
          Add to Cart
        </button>
      </div>
    </div>
  )
}
