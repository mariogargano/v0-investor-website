"use client"

import { Download, Lock } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/lib/i18n"
import { useNDAGatedAction, useNDA } from "@/lib/nda-context"

interface DownloadPitchDeckProps {
  variant?: "default" | "outline" | "ghost"
  size?: "default" | "sm" | "lg"
  className?: string
}

export function DownloadPitchDeck({ variant = "outline", size = "default", className = "" }: DownloadPitchDeckProps) {
  const { t } = useLanguage()
  const { executeWithNDA, isNDASigned } = useNDAGatedAction()
  
  const performDownload = () => {
    const link = document.createElement("a")
    link.href = "/documents/WEEK-CHAIN_Investor_Pitch_Deck_2026.pdf"
    link.download = "WEEK-CHAIN_Investor_Pitch_Deck_2026.pdf"
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  const handleDownload = () => {
    executeWithNDA(performDownload)
  }

  return (
    <Button variant={variant} size={size} onClick={handleDownload} className={className}>
      {!isNDASigned && <Lock className="w-4 h-4 mr-2" />}
      {isNDASigned && <Download className="w-4 h-4 mr-2" />}
      {t("downloadPitchDeck")}
    </Button>
  )
}

export function DownloadPitchDeckBanner() {
  const { isNDASigned } = useNDA()
  
  return (
    <div className="bg-card border border-border rounded-xl p-4 flex flex-col sm:flex-row items-center justify-between gap-4">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
          {isNDASigned ? (
            <Download className="w-5 h-5 text-primary" />
          ) : (
            <Lock className="w-5 h-5 text-primary" />
          )}
        </div>
        <div>
          <p className="font-medium">WEEK-CHAIN Pitch Deck</p>
          <p className="text-sm text-muted-foreground">
            {isNDASigned 
              ? "Complete investor presentation" 
              : "Sign NDA to download confidential documents"
            }
          </p>
        </div>
      </div>
      <DownloadPitchDeck variant="default" />
    </div>
  )
}
