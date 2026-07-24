import { createContext, useContext, useState } from 'react'

const EnquireModalContext = createContext(null)

export function EnquireModalProvider({ children }) {
  const [isOpen, setIsOpen] = useState(false)
  const value = { isOpen, open: () => setIsOpen(true), close: () => setIsOpen(false) }
  return <EnquireModalContext.Provider value={value}>{children}</EnquireModalContext.Provider>
}

export function useEnquireModal() {
  const ctx = useContext(EnquireModalContext)
  if (!ctx) throw new Error('useEnquireModal must be used within EnquireModalProvider')
  return ctx
}
