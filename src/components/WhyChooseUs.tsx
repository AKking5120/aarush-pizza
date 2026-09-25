import { whyChooseUsItems } from '../config/whyChooseUs'

export function WhyChooseUs() {
  return (
    <section
      className="py-20 bg-panel border-t border-gray-800"
      aria-labelledby="why-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-2">
          <p className="text-xs font-bold text-orange-400 uppercase tracking-widest">
            Core Values
          </p>
          <h2 id="why-heading" className="text-3xl font-extrabold text-white">
            Why Choose Aarush
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {whyChooseUsItems.map((item) => {
            const Icon = item.icon
            return (
              <article
                key={item.id}
                className="bg-panel-elevated p-6 rounded-xl border border-gray-800 space-y-3"
              >
                <div className="w-10 h-10 rounded-lg bg-orange-500/10 text-orange-400 flex items-center justify-center">
                  <Icon className="w-5 h-5" aria-hidden />
                </div>
                <h3 className="text-base font-bold text-white">{item.title}</h3>
                <p className="text-xs text-gray-400 leading-relaxed">
                  {item.description}
                </p>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
