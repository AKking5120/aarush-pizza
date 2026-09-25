import {
  Flame,
  Image,
  LayoutDashboard,
  LogOut,
  MessageSquare,
  Package,
  Settings,
  Wrench,
} from 'lucide-react'
import { NavLink, Outlet, useNavigate } from 'react-router-dom'
import { getSupabase } from '../lib/supabase'

const links = [
  { to: '/admin/dashboard', label: 'Dashboard', icon: LayoutDashboard },
  { to: '/admin/settings', label: 'Business', icon: Settings },
  { to: '/admin/services', label: 'Services', icon: Wrench },
  { to: '/admin/spare-parts', label: 'Spare Parts', icon: Package },
  { to: '/admin/gallery', label: 'Gallery', icon: Image },
  { to: '/admin/enquiries', label: 'Enquiries', icon: MessageSquare },
]

export function AdminLayout() {
  const navigate = useNavigate()

  const signOut = async () => {
    const supabase = getSupabase()
    if (supabase) await supabase.auth.signOut()
    navigate('/admin/login')
  }

  return (
    <div className="min-h-screen bg-ink text-gray-100 flex">
      <aside className="w-64 shrink-0 border-r border-gray-800 bg-panel hidden md:flex flex-col">
        <div className="p-5 border-b border-gray-800 flex items-center gap-2">
          <div className="w-9 h-9 rounded-lg bg-orange-600 flex items-center justify-center">
            <Flame className="w-5 h-5" aria-hidden />
          </div>
          <div>
            <p className="font-bold text-sm">AARUSH Admin</p>
            <p className="text-[10px] text-gray-500 uppercase">CMS Panel</p>
          </div>
        </div>
        <nav className="flex-1 p-3 space-y-1">
          {links.map(({ to, label, icon: Icon }) => (
            <NavLink
              key={to}
              to={to}
              className={({ isActive }) =>
                `flex items-center gap-2 px-3 py-2.5 rounded-lg text-sm font-medium min-h-11 ${
                  isActive
                    ? 'bg-orange-600/20 text-orange-400'
                    : 'text-gray-400 hover:bg-gray-800 hover:text-white'
                }`
              }
            >
              <Icon className="w-4 h-4" aria-hidden />
              {label}
            </NavLink>
          ))}
        </nav>
        <div className="p-3 border-t border-gray-800">
          <a
            href="/"
            className="block text-xs text-gray-500 hover:text-orange-400 mb-2 px-3"
          >
            ← View website
          </a>
          <button
            type="button"
            onClick={() => void signOut()}
            className="w-full flex items-center gap-2 px-3 py-2.5 rounded-lg text-sm text-gray-300 hover:bg-gray-800 min-h-11"
          >
            <LogOut className="w-4 h-4" aria-hidden />
            Sign out
          </button>
        </div>
      </aside>

      <div className="flex-1 flex flex-col min-w-0">
        <header className="md:hidden border-b border-gray-800 bg-panel p-4 flex items-center justify-between">
          <span className="font-bold">AARUSH Admin</span>
          <button
            type="button"
            onClick={() => void signOut()}
            className="text-xs text-orange-400"
          >
            Sign out
          </button>
        </header>
        <div className="md:hidden overflow-x-auto border-b border-gray-800 bg-panel px-2 py-2 flex gap-1">
          {links.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              className={({ isActive }) =>
                `px-3 py-2 rounded-lg text-xs whitespace-nowrap ${
                  isActive ? 'bg-orange-600 text-white' : 'text-gray-400'
                }`
              }
            >
              {label}
            </NavLink>
          ))}
        </div>
        <main className="flex-1 p-4 md:p-8 overflow-auto">
          <Outlet />
        </main>
      </div>
    </div>
  )
}
