import { useEffect, useState } from 'react'
import { businessConfig as defaults } from '../../config/business'
import { getSupabase } from '../../lib/supabase'
import type { BusinessSettingsPatch } from '../../types/cms'

export function SettingsPage() {
  const [form, setForm] = useState<BusinessSettingsPatch>({
    phone: defaults.phone,
    whatsapp: defaults.whatsapp,
    openingHours: defaults.openingHours,
    googleMapsUrl: defaults.googleMapsUrl,
    googleMapsEmbedUrl: defaults.googleMapsEmbedUrl,
  })
  const [status, setStatus] = useState('')
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const supabase = getSupabase()
    if (!supabase) {
      setLoading(false)
      return
    }
    void supabase
      .from('business_settings')
      .select('data')
      .eq('id', 1)
      .maybeSingle()
      .then(({ data }) => {
        const patch = (data?.data ?? {}) as BusinessSettingsPatch
        setForm((f) => ({ ...f, ...patch }))
        setLoading(false)
      })
  }, [])

  const save = async () => {
    setStatus('')
    const supabase = getSupabase()
    if (!supabase) return
    const { error } = await supabase.from('business_settings').upsert({
      id: 1,
      data: form,
      updated_at: new Date().toISOString(),
    })
    setStatus(error ? `Error: ${error.message}` : 'Saved. Refresh the public site to see changes.')
  }

  if (loading) return <p className="text-gray-400">Loading…</p>

  return (
    <div className="max-w-xl space-y-6">
      <h1 className="text-2xl font-bold text-white">Business settings</h1>
      <p className="text-sm text-gray-400">
        Overrides static defaults on the live website (name & address remain in code).
      </p>

      {(
        [
          ['phone', 'Phone (display / tel)'],
          ['whatsapp', 'WhatsApp (digits only, e.g. 9198…)'],
          ['openingHours', 'Opening hours'],
          ['googleMapsUrl', 'Google Maps URL'],
          ['googleMapsEmbedUrl', 'Google Maps embed URL'],
        ] as const
      ).map(([key, label]) => (
        <div key={key}>
          <label className="text-xs font-semibold text-gray-400">{label}</label>
          <input
            value={form[key] ?? ''}
            onChange={(e) => setForm({ ...form, [key]: e.target.value })}
            className="mt-1 w-full rounded-lg bg-panel-elevated border border-gray-700 px-3 py-2.5 text-white text-sm min-h-11"
          />
        </div>
      ))}

      <button
        type="button"
        onClick={() => void save()}
        className="px-6 py-3 rounded-xl bg-orange-600 text-white font-semibold min-h-12"
      >
        Save settings
      </button>
      {status && <p className="text-sm text-gray-300">{status}</p>}
    </div>
  )
}
