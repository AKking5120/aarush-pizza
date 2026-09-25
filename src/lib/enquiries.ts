import { getSupabase } from './supabase'

export type EnquiryPayload = {
  subject_type: string
  subject_title: string
  customer_name: string
  customer_phone: string
  area: string
  oven_type: string
  issue: string
}

export async function saveEnquiry(payload: EnquiryPayload): Promise<void> {
  const supabase = getSupabase()
  if (!supabase) return

  const { error } = await supabase.from('enquiries').insert(payload)
  if (error) {
    console.warn('Could not save enquiry to Supabase:', error.message)
  }
}
