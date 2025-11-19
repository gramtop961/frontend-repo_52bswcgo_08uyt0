import { useEffect, useState } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Menu from './components/Menu'
import Cart from './components/Cart'

function App() {
  const [showCart, setShowCart] = useState(false)
  const [cart, setCart] = useState([])

  const addToCart = (product) => {
    setCart((prev) => {
      const existing = prev.find((p) => p.id === product.id)
      if (existing) {
        return prev.map((p) => p.id === product.id ? { ...p, quantity: p.quantity + 1 } : p)
      }
      return [...prev, { ...product, quantity: 1 }]
    })
    setShowCart(true)
  }

  const checkout = async ({ subtotal, tax, total }) => {
    const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
    const orderPayload = {
      customer_name: 'Guest',
      customer_email: 'guest@example.com',
      customer_address: '123 Food St, Flavor Town',
      items: cart.map((c) => ({
        product_id: c.id,
        title: c.title,
        price: c.price,
        quantity: c.quantity,
        image_url: c.image_url
      })),
      subtotal,
      tax,
      total,
      status: 'pending'
    }

    try {
      const res = await fetch(`${baseUrl}/api/orders`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(orderPayload)
      })
      if (!res.ok) throw new Error('Checkout failed')
      const data = await res.json()
      alert(`Order placed! ID: ${data.id}`)
      setCart([])
      setShowCart(false)
    } catch (e) {
      alert(e.message)
    }
  }

  // Auto seed products on first load if none
  useEffect(() => {
    const seed = async () => {
      try {
        const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
        await fetch(`${baseUrl}/api/products/seed`, { method: 'POST' })
      } catch {}
    }
    seed()
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-rose-50 to-white">
      <Header cartCount={cart.reduce((a,c)=>a+c.quantity,0)} onCartClick={() => setShowCart(true)} />
      <Hero />
      <Menu onAdd={addToCart} />
      {showCart && <Cart items={cart} onClose={() => setShowCart(false)} onCheckout={checkout} />}
      <footer className="border-t mt-10">
        <div className="max-w-6xl mx-auto px-4 py-10 text-sm text-slate-500">
          Built with love for great food.
        </div>
      </footer>
    </div>
  )
}

export default App
