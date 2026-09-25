import { useEffect, useState } from 'react'
import { getSupabase } from '../../lib/supabase'
import type { DbGalleryItem } from '../../types/cms'

export function GalleryAdminPage() {
  const [rows, setRows] = useState<DbGalleryItem[]>([])
  const [msg, setMsg] = useState('')

  const load = async () => {
    const { data } = await getSupabase()!
      .from('gallery_items')
      .select('*')
      .order('sort_order')
    setRows((data as DbGalleryItem[]) ?? [])
  }

  useEffect(() => {
    void load()
  }, [])

  const saveRow = async (row: DbGalleryItem) => {
    const { id, ...rest } = row
    const payload = id > 0 ? row : rest
    const { error } = await getSupabase()!
      .from('gallery_items')
      .upsert(payload)
    setMsg(error ? error.message : 'Saved')
    void load()
  }

  const addRow = () => {
    setRows([
      ...rows,
      {
        id: 0,
        title: 'New image',
        category: 'Workshop',
        src: '',
        caption: '',
        alt: '',
        sort_order: rows.length + 1,
      },
    ])
  }

  return (
    <div className="space-y-6 max-w-4xl">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-white">Gallery</h1>
        <button
          type="button"
          onClick={addRow}
          className="px-4 py-2 rounded-lg bg-orange-600 text-white text-sm font-semibold"
        >
          Add image
        </button>
      </div>
      {msg && <p className="text-sm text-gray-400">{msg}</p>}

      {rows.map((row) => (
        <div
          key={row.id || `new-${row.title}`}
          className="p-4 rounded-xl border border-gray-800 bg-panel space-y-2"
        >
          {(['title', 'category', 'src', 'caption', 'alt'] as const).map(
            (key) => (
              <div key={key}>
                <label className="text-[10px] uppercase text-gray-500">
                  {key}
                </label>
                <input
                  value={row[key]}
                  onChange={(e) =>
                    setRows((r) =>
                      r.map((x) =>
                        x === row ? { ...x, [key]: e.target.value } : x,
                      ),
                    )
                  }
                  className="mt-0.5 w-full rounded-lg bg-panel-elevated border border-gray-700 px-3 py-2 text-white text-sm"
                />
              </div>
            ),
          )}
          <button
            type="button"
            onClick={() => void saveRow(row)}
            className="px-4 py-2 rounded-lg bg-gray-800 text-orange-400 text-xs font-semibold"
          >
            Save
          </button>
        </div>
      ))}
    </div>
  )
}
