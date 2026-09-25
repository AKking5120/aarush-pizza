import { processSteps } from '../config/process'

export function ProcessTimeline() {
  return (
    <section
      id="process"
      className="py-20 bg-ink border-t border-gray-800"
      aria-labelledby="process-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-2">
          <p className="text-xs font-bold text-orange-400 uppercase tracking-widest">
            Step-By-Step
          </p>
          <h2
            id="process-heading"
            className="text-3xl font-extrabold text-white"
          >
            How We Handle Your Repair
          </h2>
        </div>

        <ol className="grid grid-cols-1 md:grid-cols-5 gap-4">
          {processSteps.map((step) => (
            <li
              key={step.step}
              className="bg-panel border border-gray-800 p-6 rounded-xl space-y-3 list-none"
            >
              <div
                className="w-10 h-10 rounded-full bg-gradient-to-br from-orange-500 to-amber-600 text-white font-black text-sm flex items-center justify-center shadow-md shadow-orange-500/20"
                aria-hidden
              >
                {step.step}
              </div>
              <h3 className="font-bold text-white text-base">{step.title}</h3>
              <p className="text-xs text-gray-400 leading-relaxed">
                {step.description}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
