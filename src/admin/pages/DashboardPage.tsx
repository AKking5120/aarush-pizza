import { Link } from 'react-router-dom'
import { isSupabaseConfigured } from '../../lib/supabase'

const cards = [
  { to: '/admin/settings', title: 'Business settings', desc: 'Phone, WhatsApp, hours, maps' },
  { to: '/admin/services', title: 'Services', desc: 'Repair & service cards' },
  { to: '/admin/spare-parts', title: 'Spare parts', desc: 'Parts catalogue' },
  { to: '/admin/gallery', title: 'Gallery', desc: 'Photos & captions' },
  { to: '/admin/enquiries', title: 'Enquiries', desc: 'Customer form submissions' },
]

export function DashboardPage() {
  return (
    <div className="max-w-4xl">
      <h1 className="text-2xl font-bold text-white mb-2">Dashboard</h1>
      <p className="text-sm text-gray-400 mb-8">
        Supabase backend:{' '}
        <span className={isSupabaseConfigured ? 'text-green-400' : 'text-amber-400'}>
          {isSupabaseConfigured ? 'Connected' : 'Not configured'}
        </span>
      </p>
      <div className="grid sm:grid-cols-2 gap-4">
        {cards.map((card) => (
          <Link
            key={card.to}
            to={card.to}
            className="block p-5 rounded-xl border border-gray-800 bg-panel hover:border-orange-500/40 transition-colors"
          >
            <h2 className="font-semibold text-white">{card.title}</h2>
            <p className="text-xs text-gray-500 mt-1">{card.desc}</p>
          </Link>
        ))}
      </div>
    </div>
  )
}
