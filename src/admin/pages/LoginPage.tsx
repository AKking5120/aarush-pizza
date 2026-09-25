import { Flame } from 'lucide-react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { getSupabase, isSupabaseConfigured } from '../../lib/supabase'

export function LoginPage() {
  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  if (!isSupabaseConfigured) {
    return (
      <div className="min-h-screen bg-ink flex items-center justify-center p-6 text-gray-300 text-sm text-center">
        Configure Supabase in <code className="text-orange-400">.env</code> first.
      </div>
    )
  }

  const onSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault()
    setError('')
    setLoading(true)
    const supabase = getSupabase()!
    const { error: signError } = await supabase.auth.signInWithPassword({
      email,
      password,
    })
    setLoading(false)
    if (signError) {
      setError(signError.message)
      return
    }
    navigate('/admin/dashboard')
  }

  return (
    <div className="min-h-screen bg-ink flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-panel border border-gray-800 rounded-2xl p-8 shadow-xl">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-11 h-11 rounded-xl bg-orange-600 flex items-center justify-center">
            <Flame className="w-6 h-6" aria-hidden />
          </div>
          <div>
            <h1 className="text-xl font-bold text-white">Admin login</h1>
            <p className="text-xs text-gray-500">Aarush CMS</p>
          </div>
        </div>

        <form onSubmit={(e) => void onSubmit(e)} className="space-y-4">
          <div>
            <label className="text-xs font-semibold text-gray-400">Email</label>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1 w-full rounded-lg bg-panel-elevated border border-gray-700 px-3 py-2.5 text-white min-h-11"
            />
          </div>
          <div>
            <label className="text-xs font-semibold text-gray-400">
              Password
            </label>
            <input
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-1 w-full rounded-lg bg-panel-elevated border border-gray-700 px-3 py-2.5 text-white min-h-11"
            />
          </div>
          {error && <p className="text-sm text-red-400">{error}</p>}
          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 rounded-xl bg-orange-600 hover:bg-orange-500 text-white font-bold min-h-12 disabled:opacity-60"
          >
            {loading ? 'Signing in…' : 'Sign in'}
          </button>
        </form>
        <p className="mt-6 text-[11px] text-gray-500 leading-relaxed">
          First time? Create a user in Supabase Auth, run the SQL migration, then
          add your user id to <code>admin_users</code> (see README).
        </p>
        <a href="/" className="mt-4 inline-block text-xs text-orange-400">
          ← Back to website
        </a>
      </div>
    </div>
  )
}
