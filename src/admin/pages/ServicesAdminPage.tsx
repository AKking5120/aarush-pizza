import { useEffect, useState } from 'react'
import { serviceIconOptions } from '../../lib/serviceIcons'
import { getSupabase } from '../../lib/supabase'
import type { DbService } from '../../types/cms'

export function ServicesAdminPage() {
  const [rows, setRows] = useState<DbService[]>([])
  const [msg, setMsg] = useState('')

  const load = async () => {
    const supabase = getSupabase()
    if (!supabase) return
    const { data } = await supabase
      .from('services')
      .select('*')
      .order('sort_order')
    setRows((data as DbService[]) ?? [])
  }

  useEffect(() => {
    void load()
  }, [])

  const saveRow = async (row: DbService) => {
    const supabase = getSupabase()!
    const { error } = await supabase.from('services').upsert(row)
    setMsg(error ? error.message : 'Saved')
    void load()
  }

  const addRow = () => {
    const id = `service-${Date.now()}`
    setRows([
      ...rows,
      {
        id,
        title: 'New service',
        description: '',
        icon: 'Wrench',
        popular: false,
        sort_order: rows.length + 1,
      },
    ])
  }

  return (
    <div className="space-y-6 max-w-4xl">
      <div className="flex items-center justify-between gap-4">
        <h1 className="text-2xl font-bold text-white">Services</h1>
        <button
          type="button"
          onClick={addRow}
          className="px-4 py-2 rounded-lg bg-orange-600 text-white text-sm font-semibold"
        >
          Add service
        </button>
      </div>
      {msg && <p className="text-sm text-gray-400">{msg}</p>}

      <div className="space-y-4">
        {rows.map((row) => (
          <div
            key={row.id}
            className="p-4 rounded-xl border border-gray-800 bg-panel space-y-3"
          >
            <input
              value={row.title}
              onChange={(e) =>
                setRows((r) =>
                  r.map((x) =>
                    x.id === row.id ? { ...x, title: e.target.value } : x,
                  ),
                )
              }
              className="w-full rounded-lg bg-panel-elevated border border-gray-700 px-3 py-2 text-white font-semibold"
            />
            <textarea
              value={row.description}
              onChange={(e) =>
                setRows((r) =>
                  r.map((x) =>
                    x.id === row.id ? { ...x, description: e.target.value } : x,
                  ),
                )
              }
              rows={2}
              className="w-full rounded-lg bg-panel-elevated border border-gray-700 px-3 py-2 text-white text-sm"
            />
            <div className="flex flex-wrap gap-3 items-center">
              <select
                value={row.icon}
                onChange={(e) =>
                  setRows((r) =>
                    r.map((x) =>
                      x.id === row.id ? { ...x, icon: e.target.value } : x,
                    ),
                  )
                }
                className="rounded-lg bg-panel-elevated border border-gray-700 px-2 py-2 text-sm text-white"
              >
                {serviceIconOptions.map((name) => (
                  <option key={name} value={name}>{name}</option>
                ))}
              </select>
              <label className="text-xs text-gray-400 flex items-center gap-2">
                <input
                  type="checkbox"
                  checked={row.popular}
                  onChange={(e) =>
                    setRows((r) =>
                      r.map((x) =>
                        x.id === row.id
                          ? { ...x, popular: e.target.checked }
                          : x,
                      ),
                    )
                  }
                />
                Frequent request
              </label>
              <input
                type="number"
                value={row.sort_order}
                onChange={(e) =>
                  setRows((r) =>
                    r.map((x) =>
                      x.id === row.id
                        ? { ...x, sort_order: Number(e.target.value) }
                        : x,
                    ),
                  )
                }
                className="w-20 rounded-lg bg-panel-elevated border border-gray-700 px-2 py-2 text-sm text-white"
                title="Sort order"
              />
              <button
                type="button"
                onClick={() => void saveRow(row)}
                className="px-3 py-2 rounded-lg bg-gray-800 text-orange-400 text-xs font-semibold"
              >
                Save
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
