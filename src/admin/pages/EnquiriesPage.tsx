import { useEffect, useState } from 'react'
import { getSupabase } from '../../lib/supabase'
import type { DbEnquiry } from '../../types/cms'

export function EnquiriesPage() {
  const [rows, setRows] = useState<DbEnquiry[]>([])

  useEffect(() => {
    void getSupabase()!
      .from('enquiries')
      .select('*')
      .order('created_at', { ascending: false })
      .then(({ data }) => setRows((data as DbEnquiry[]) ?? []))
  }, [])

  return (
    <div className="max-w-4xl space-y-6">
      <h1 className="text-2xl font-bold text-white">Enquiries</h1>
      <p className="text-sm text-gray-400">
        Submissions from the website enquiry form (when Supabase is connected).
      </p>

      {rows.length === 0 ? (
        <p className="text-gray-500 text-sm">No enquiries yet.</p>
      ) : (
        <ul className="space-y-3">
          {rows.map((row) => (
            <li
              key={row.id}
              className="p-4 rounded-xl border border-gray-800 bg-panel text-sm"
            >
              <div className="flex justify-between gap-2 text-xs text-gray-500 mb-2">
                <span>{row.subject_title}</span>
                <time dateTime={row.created_at}>
                  {new Date(row.created_at).toLocaleString()}
                </time>
              </div>
              <p className="text-white font-medium">{row.customer_name}</p>
              <p className="text-gray-400">{row.customer_phone}</p>
              <p className="text-gray-400 text-xs mt-2">
                {row.area} · {row.oven_type}
              </p>
              <p className="text-gray-300 mt-2">{row.issue}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
