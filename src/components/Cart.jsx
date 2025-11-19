export default function Cart({ items, onClose, onCheckout }) {
  const subtotal = items.reduce((acc, item) => acc + item.price * item.quantity, 0)
  const tax = +(subtotal * 0.08).toFixed(2)
  const total = +(subtotal + tax).toFixed(2)

  return (
    <div className="fixed inset-0 z-30 bg-black/40 flex justify-end">
      <div className="w-full sm:w-[420px] h-full bg-white shadow-xl flex flex-col">
        <div className="p-4 border-b flex items-center justify-between">
          <h3 className="text-lg font-semibold">Your Cart</h3>
          <button onClick={onClose} className="text-slate-600 hover:text-slate-900">Close</button>
        </div>
        <div className="flex-1 overflow-y-auto divide-y">
          {items.length === 0 ? (
            <p className="p-6 text-slate-600">Your cart is empty.</p>
          ) : (
            items.map((item) => (
              <div key={item.id} className="p-4 flex items-center gap-3">
                <img src={item.image_url} alt="" className="w-14 h-14 rounded object-cover" />
                <div className="flex-1">
                  <p className="font-medium">{item.title}</p>
                  <p className="text-sm text-slate-500">${item.price.toFixed(2)} × {item.quantity}</p>
                </div>
                <div className="text-right font-semibold">${(item.price * item.quantity).toFixed(2)}</div>
              </div>
            ))
          )}
        </div>
        <div className="p-4 border-t space-y-2">
          <div className="flex justify-between text-sm text-slate-600">
            <span>Subtotal</span><span>${subtotal.toFixed(2)}</span>
          </div>
          <div className="flex justify-between text-sm text-slate-600">
            <span>Tax (8%)</span><span>${tax.toFixed(2)}</span>
          </div>
          <div className="flex justify-between font-semibold text-slate-900">
            <span>Total</span><span>${total.toFixed(2)}</span>
          </div>
          <button
            disabled={items.length===0}
            onClick={() => onCheckout({ subtotal, tax, total })}
            className="mt-2 w-full rounded-lg bg-slate-900 hover:bg-slate-800 text-white py-2 text-sm font-medium disabled:opacity-50">
            Checkout
          </button>
        </div>
      </div>
    </div>
  )
}
