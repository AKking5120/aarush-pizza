import { useEffect, useState } from 'react'
import { getSupabase } from '../../lib/supabase'
import type { DbSparePart } from '../../types/cms'

export function SparePartsAdminPage() {
  const [rows, setRows] = useState<DbSparePart[]>([])
  const [msg, setMsg] = useState('')

  const load = async () => {
    const { data } = await getSupabase()!
      .from('spare_parts')
      .select('*')
      .order('sort_order')
    setRows((data as DbSparePart[]) ?? [])
  }

  useEffect(() => {
    void load()
  }, [])

  const saveRow = async (row: DbSparePart) => {
    const { error } = await getSupabase()!.from('spare_parts').upsert(row)
    setMsg(error ? error.message : 'Saved')
    void load()
  }

  const addRow = () => {
    setRows([
      ...rows,
      {
        id: `part-${Date.now()}`,
        name: 'New part',
        category: 'Burners',
        description: '',
        compatible: '',
        image_src: '',
        image_alt: '',
        sort_order: rows.length + 1,
      },
    ])
  }

  const field = (
    row: DbSparePart,
    key: keyof DbSparePart,
    label: string,
    multiline = false,
  ) => (
    <div key={String(key)}>
      <label className="text-[10px] uppercase text-gray-500">{label}</label>
      {multiline ? (
        <textarea
          value={String(row[key])}
          onChange={(e) =>
            setRows((r) =>
              r.map((x) =>
                x.id === row.id ? { ...x, [key]: e.target.value } : x,
              ),
            )
          }
          rows={2}
          className="mt-0.5 w-full rounded-lg bg-panel-elevated border border-gray-700 px-3 py-2 text-white text-sm"
        />
      ) : (
        <input
          value={String(row[key])}
          onChange={(e) =>
            setRows((r) =>
              r.map((x) =>
                x.id === row.id ? { ...x, [key]: e.target.value } : x,
              ),
            )
          }
          className="mt-0.5 w-full rounded-lg bg-panel-elevated border border-gray-700 px-3 py-2 text-white text-sm min-h-10"
        />
      )}
    </div>
  )

  return (
    <div className="space-y-6 max-w-4xl">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-white">Spare parts</h1>
        <button
          type="button"
          onClick={addRow}
          className="px-4 py-2 rounded-lg bg-orange-600 text-white text-sm font-semibold"
        >
          Add part
        </button>
      </div>
      {msg && <p className="text-sm text-gray-400">{msg}</p>}

      {rows.map((row) => (
        <div
          key={row.id}
          className="p-4 rounded-xl border border-gray-800 bg-panel grid gap-3 sm:grid-cols-2"
        >
          {field(row, 'name', 'Name')}
          {field(row, 'category', 'Category')}
          {field(row, 'description', 'Description', true)}
          {field(row, 'compatible', 'Compatible with')}
          {field(row, 'image_src', 'Image URL')}
          {field(row, 'image_alt', 'Image alt')}
          <div className="sm:col-span-2 flex justify-end">
            <button
              type="button"
              onClick={() => void saveRow(row)}
              className="px-4 py-2 rounded-lg bg-gray-800 text-orange-400 text-xs font-semibold"
            >
              Save part
            </button>
          </div>
        </div>
      ))}
    </div>
  )
}
