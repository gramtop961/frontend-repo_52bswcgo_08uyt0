export default function Hero() {
  return (
    <section className="bg-gradient-to-br from-orange-50 via-rose-50 to-white border-b">
      <div className="max-w-6xl mx-auto px-4 py-12 grid md:grid-cols-2 gap-8 items-center">
        <div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
            Crave it. Click it. We deliver it.
          </h2>
          <p className="mt-4 text-slate-600 text-lg">
            Explore a curated menu of pizzas, burgers, salads and drinks. Freshly made, lightning fast.
          </p>
          <div className="mt-6 flex gap-3">
            <a href="#menu" className="inline-flex items-center justify-center rounded-full bg-slate-900 text-white px-5 py-3 text-sm font-medium hover:bg-slate-800 transition-colors">
              Browse Menu
            </a>
            <a href="/test" className="inline-flex items-center justify-center rounded-full bg-white border px-5 py-3 text-sm font-medium text-slate-700 hover:bg-slate-50 transition-colors">
              Check Backend
            </a>
          </div>
        </div>
        <div className="relative">
          <div className="absolute -inset-4 bg-gradient-to-r from-orange-200/60 to-rose-200/60 blur-2xl rounded-3xl"></div>
          <img src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxGb29kfGVufDB8MHx8fDE3NjM1NDgwNjZ8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80" alt="Food" className="relative rounded-2xl shadow-xl border" />
        </div>
      </div>
    </section>
  )
}
