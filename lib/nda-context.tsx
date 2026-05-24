"use client"

import React, { createContext, useContext, useState, useEffect, useCallback } from "react"

interface NDAData {
  fullName: string
  email: string
  company: string
  title: string
  signedAt: string
}

interface NDAContextType {
  isNDASigned: boolean
  ndaData: NDAData | null
  showNDAModal: boolean
  openNDAModal: () => void
  closeNDAModal: () => void
  completeNDA: (data: NDAData) => Promise<void>
  pendingAction: (() => void) | null
  setPendingAction: (action: (() => void) | null) => void
}

const NDAContext = createContext<NDAContextType | undefined>(undefined)

const NDA_STORAGE_KEY = "wc-nda-data"

export function NDAProvider({ children }: { children: React.ReactNode }) {
  const [isNDASigned, setIsNDASigned] = useState(false)
  const [ndaData, setNdaData] = useState<NDAData | null>(null)
  const [showNDAModal, setShowNDAModal] = useState(false)
  const [pendingAction, setPendingAction] = useState<(() => void) | null>(null)

  useEffect(() => {
    // Check if NDA was already signed in this session
    const stored = sessionStorage.getItem(NDA_STORAGE_KEY)
    if (stored) {
      try {
        const data = JSON.parse(stored) as NDAData
        setNdaData(data)
        setIsNDASigned(true)
      } catch {
        sessionStorage.removeItem(NDA_STORAGE_KEY)
      }
    }
  }, [])

  const openNDAModal = useCallback(() => {
    setShowNDAModal(true)
  }, [])

  const closeNDAModal = useCallback(() => {
    setShowNDAModal(false)
    setPendingAction(null)
  }, [])

  const completeNDA = useCallback(async (data: NDAData) => {
    // Save to session storage
    sessionStorage.setItem(NDA_STORAGE_KEY, JSON.stringify(data))
    sessionStorage.setItem("wc-nda-complete", "true")
    
    setNdaData(data)
    setIsNDASigned(true)
    setShowNDAModal(false)

    // Notify backend about the new NDA signature
    try {
      await fetch("/api/notify-nda", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...data,
          userAgent: navigator.userAgent,
          timestamp: new Date().toISOString(),
        }),
      })
    } catch (error) {
      console.error("Failed to notify NDA signature:", error)
    }

    // Execute pending action if any
    if (pendingAction) {
      pendingAction()
      setPendingAction(null)
    }
  }, [pendingAction])

  return (
    <NDAContext.Provider
      value={{
        isNDASigned,
        ndaData,
        showNDAModal,
        openNDAModal,
        closeNDAModal,
        completeNDA,
        pendingAction,
        setPendingAction,
      }}
    >
      {children}
    </NDAContext.Provider>
  )
}

export function useNDA() {
  const context = useContext(NDAContext)
  if (context === undefined) {
    throw new Error("useNDA must be used within a NDAProvider")
  }
  return context
}

// Helper hook for gated actions
export function useNDAGatedAction() {
  const { isNDASigned, openNDAModal, setPendingAction } = useNDA()

  const executeWithNDA = useCallback(
    (action: () => void) => {
      if (isNDASigned) {
        action()
      } else {
        setPendingAction(() => action)
        openNDAModal()
      }
    },
    [isNDASigned, openNDAModal, setPendingAction]
  )

  return { executeWithNDA, isNDASigned }
}
