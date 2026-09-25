import { useEffect, useState, type ReactNode } from 'react'
import { Navigate, useLocation } from 'react-router-dom'
import { getSupabase, isSupabaseConfigured } from '../lib/supabase'

export function RequireAdmin({ children }: { children: ReactNode }) {
  const location = useLocation()
  const [state, setState] = useState<'loading' | 'ok' | 'denied'>('loading')

  useEffect(() => {
    const supabase = getSupabase()
    if (!supabase || !isSupabaseConfigured) {
      setState('denied')
      return
    }

    void (async () => {
      const {
        data: { session },
      } = await supabase.auth.getSession()
      if (!session) {
        setState('denied')
        return
      }

      const { data, error } = await supabase
        .from('admin_users')
        .select('user_id')
        .eq('user_id', session.user.id)
        .maybeSingle()

      if (error || !data) {
        setState('denied')
        return
      }
      setState('ok')
    })()
  }, [location.pathname])

  if (!isSupabaseConfigured) {
    return (
      <div className="min-h-screen bg-ink text-gray-200 flex items-center justify-center p-6">
        <p className="max-w-md text-center text-sm">
          Supabase is not configured. Add{' '}
          <code className="text-orange-400">VITE_SUPABASE_URL</code> and{' '}
          <code className="text-orange-400">VITE_SUPABASE_ANON_KEY</code> to{' '}
          <code className="text-orange-400">.env</code>.
        </p>
      </div>
    )
  }

  if (state === 'loading') {
    return (
      <div className="min-h-screen bg-ink text-gray-400 flex items-center justify-center">
        Checking admin access…
      </div>
    )
  }

  if (state === 'denied') {
    return <Navigate to="/admin/login" replace state={{ from: location }} />
  }

  return children
}
