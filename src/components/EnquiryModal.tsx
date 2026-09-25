import { Check, Copy, Send, X } from 'lucide-react'
import { useState, type FormEvent } from 'react'
import { useEnquiry } from '../context/EnquiryContext'
import { useBusinessConfig } from '../hooks/useBusinessConfig'
import { saveEnquiry } from '../lib/enquiries'
import { getWhatsAppHref } from '../utils/contact'

type FormData = {
  name: string
  phone: string
  area: string
  ovenType: string
  issue: string
}

const initialForm: FormData = {
  name: '',
  phone: '',
  area: '',
  ovenType: 'Gas Deck Oven',
  issue: '',
}

export function EnquiryModal() {
  const business = useBusinessConfig()
  const { isOpen, subject, closeEnquiry } = useEnquiry()
  const [formData, setFormData] = useState<FormData>(initialForm)
  const [submitted, setSubmitted] = useState(false)

  if (!isOpen) return null

  const resetAndClose = () => {
    setSubmitted(false)
    setFormData(initialForm)
    closeEnquiry()
  }

  const buildMessage = () =>
    `Hello Aarush Team,\n\nEnquiry regarding: *${subject.title}*\n\nName: ${formData.name || 'Not specified'}\nPhone: ${formData.phone || 'Not specified'}\nLocation: ${formData.area || 'Not specified'}\nEquipment: ${formData.ovenType}\nIssue/Requirement: ${formData.issue || 'None'}`

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    void saveEnquiry({
      subject_type: subject.type,
      subject_title: subject.title,
      customer_name: formData.name,
      customer_phone: formData.phone,
      area: formData.area,
      oven_type: formData.ovenType,
      issue: formData.issue,
    })
    setSubmitted(true)
  }

  const sendWhatsApp = () => {
    const href = getWhatsAppHref(
      buildMessage(),
      business.whatsapp,
      business.phone,
    )
    if (href) {
      window.open(href, '_blank', 'noopener,noreferrer')
      return
    }
    void navigator.clipboard.writeText(buildMessage())
    window.alert(
      'Enquiry copied to clipboard. Add WhatsApp number in business config to open WhatsApp directly.',
    )
  }

  const copySummary = () => {
    void navigator.clipboard.writeText(buildMessage())
    window.alert('Copied to clipboard!')
  }

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fade-in"
      role="dialog"
      aria-modal="true"
      aria-labelledby="enquiry-modal-title"
    >
      <div className="bg-panel border border-gray-800 rounded-2xl w-full max-w-lg p-6 sm:p-8 relative shadow-2xl space-y-5 max-h-[90vh] overflow-y-auto">
        <button
          type="button"
          onClick={resetAndClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-white p-2 rounded-lg hover:bg-gray-800 min-h-11 min-w-11 flex items-center justify-center"
          aria-label="Close enquiry form"
        >
          <X className="w-5 h-5" />
        </button>

        <div>
          <span className="text-xs font-bold text-orange-400 uppercase tracking-widest">
            Enquiry Form
          </span>
          <h3
            id="enquiry-modal-title"
            className="text-xl font-bold text-white mt-1"
          >
            {subject.title}
          </h3>
          <p className="text-xs text-gray-400 mt-1">
            Fill details below to generate a pre-formatted inquiry for WhatsApp
            or copy.
          </p>
        </div>

        {!submitted ? (
          <form onSubmit={handleSubmit} className="space-y-4 text-sm">
            <div>
              <label className="block text-xs font-semibold text-gray-300 mb-1">
                Your Name / Business Name
              </label>
              <input
                type="text"
                required
                placeholder="e.g. Rahul Sharma / Pizza Corner"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                className="w-full px-3.5 py-2.5 rounded-lg bg-panel-elevated border border-gray-700 text-white focus:outline-none focus:border-orange-500 min-h-11"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-semibold text-gray-300 mb-1">
                  Contact Phone
                </label>
                <input
                  type="tel"
                  required
                  placeholder="Your mobile number"
                  value={formData.phone}
                  onChange={(e) =>
                    setFormData({ ...formData, phone: e.target.value })
                  }
                  className="w-full px-3.5 py-2.5 rounded-lg bg-panel-elevated border border-gray-700 text-white focus:outline-none focus:border-orange-500 min-h-11"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-gray-300 mb-1">
                  Area in New Delhi
                </label>
                <input
                  type="text"
                  placeholder="e.g. Badarpur, Kalkaji"
                  value={formData.area}
                  onChange={(e) =>
                    setFormData({ ...formData, area: e.target.value })
                  }
                  className="w-full px-3.5 py-2.5 rounded-lg bg-panel-elevated border border-gray-700 text-white focus:outline-none focus:border-orange-500 min-h-11"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-gray-300 mb-1">
                Equipment Type
              </label>
              <select
                value={formData.ovenType}
                onChange={(e) =>
                  setFormData({ ...formData, ovenType: e.target.value })
                }
                className="w-full px-3.5 py-2.5 rounded-lg bg-panel-elevated border border-gray-700 text-white focus:outline-none focus:border-orange-500 min-h-11"
              >
                <option value="Gas Deck Oven">Gas Deck Pizza Oven</option>
                <option value="Conveyor Pizza Oven">Conveyor Pizza Oven</option>
                <option value="Commercial Gas Range">Commercial Gas Range</option>
                <option value="Spare Part Requirement">
                  Spare Part Requirement Only
                </option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-semibold text-gray-300 mb-1">
                Describe problem or part requirement
              </label>
              <textarea
                rows={3}
                placeholder="e.g. Flame not igniting, thermostat faulty..."
                value={formData.issue}
                onChange={(e) =>
                  setFormData({ ...formData, issue: e.target.value })
                }
                className="w-full px-3.5 py-2.5 rounded-lg bg-panel-elevated border border-gray-700 text-white focus:outline-none focus:border-orange-500"
              />
            </div>

            <button
              type="submit"
              className="w-full py-3 rounded-xl bg-orange-600 hover:bg-orange-500 text-white font-bold text-sm transition-all shadow-md shadow-orange-600/30 min-h-12"
            >
              Confirm Enquiry Summary
            </button>
          </form>
        ) : (
          <div className="space-y-4 text-center py-4">
            <div className="w-12 h-12 rounded-full bg-green-500/20 text-green-400 flex items-center justify-center mx-auto">
              <Check className="w-6 h-6" aria-hidden />
            </div>
            <h4 className="text-lg font-bold text-white">Summary ready</h4>
            <p className="text-xs text-gray-300">
              Copy the enquiry or send via WhatsApp
              {business.whatsapp ? '' : ' (add shop WhatsApp in admin)'}.
            </p>

            <div className="bg-panel-elevated p-4 rounded-xl text-left text-xs font-mono text-gray-300 border border-gray-800 space-y-1">
              <div>
                <strong>Subject:</strong> {subject.title}
              </div>
              <div>
                <strong>Name:</strong> {formData.name}
              </div>
              <div>
                <strong>Phone:</strong> {formData.phone}
              </div>
              <div>
                <strong>Location:</strong> {formData.area}
              </div>
              <div>
                <strong>Details:</strong> {formData.issue}
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <button
                type="button"
                onClick={sendWhatsApp}
                className="flex-1 py-3 rounded-xl bg-green-600 hover:bg-green-500 text-white font-bold text-xs flex items-center justify-center gap-2 min-h-12"
              >
                <Send className="w-4 h-4" aria-hidden />
                Send via WhatsApp
              </button>
              <button
                type="button"
                onClick={copySummary}
                className="flex-1 py-3 rounded-xl bg-gray-800 border border-gray-700 text-gray-200 font-semibold text-xs flex items-center justify-center gap-2 min-h-12"
              >
                <Copy className="w-4 h-4" aria-hidden />
                Copy Details
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
