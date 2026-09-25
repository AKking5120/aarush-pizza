import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from 'react'

export type EnquiryType = 'general' | 'booking' | 'service' | 'part'

type EnquirySubject = {
  type: EnquiryType
  title: string
}

type EnquiryContextValue = {
  isOpen: boolean
  subject: EnquirySubject
  openEnquiry: (type?: EnquiryType, title?: string) => void
  closeEnquiry: () => void
}

const EnquiryContext = createContext<EnquiryContextValue | null>(null)

export function EnquiryProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false)
  const [subject, setSubject] = useState<EnquirySubject>({
    type: 'general',
    title: 'General Service Enquiry',
  })

  const openEnquiry = useCallback(
    (type: EnquiryType = 'general', title = 'General Service Enquiry') => {
      setSubject({ type, title })
      setIsOpen(true)
    },
    [],
  )

  const closeEnquiry = useCallback(() => setIsOpen(false), [])

  const value = useMemo(
    () => ({ isOpen, subject, openEnquiry, closeEnquiry }),
    [isOpen, subject, openEnquiry, closeEnquiry],
  )

  return (
    <EnquiryContext.Provider value={value}>{children}</EnquiryContext.Provider>
  )
}

export function useEnquiry() {
  const ctx = useContext(EnquiryContext)
  if (!ctx) {
    throw new Error('useEnquiry must be used within EnquiryProvider')
  }
  return ctx
}
