"use client"

import { Download } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/lib/i18n"

interface DownloadPitchDeckProps {
  variant?: "default" | "outline" | "ghost"
  size?: "default" | "sm" | "lg"
  className?: string
}

export function DownloadPitchDeck({ variant = "outline", size = "default", className = "" }: DownloadPitchDeckProps) {
  const { t } = useLanguage()
  
  const handleDownload = () => {
    // In production, this would link to the actual pitch deck file
    // For now, we'll show an alert indicating the download
    const link = document.createElement("a")
    link.href = "/documents/WEEK-CHAIN-Pitch-Deck.pdf"
    link.download = "WEEK-CHAIN-Pitch-Deck.pdf"
    
    // If file doesn't exist, show message
    alert("Pitch Deck download will be available soon. Contact corporativo@morises.com for immediate access.")
  }

  return (
    <Button variant={variant} size={size} onClick={handleDownload} className={className}>
      <Download className="w-4 h-4 mr-2" />
      {t("downloadPitchDeck")}
    </Button>
  )
}

export function DownloadPitchDeckBanner() {
  return (
    <div className="bg-card border border-border rounded-xl p-4 flex flex-col sm:flex-row items-center justify-between gap-4">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
          <Download className="w-5 h-5 text-primary" />
        </div>
        <div>
          <p className="font-medium">WEEK-CHAIN Pitch Deck</p>
          <p className="text-sm text-muted-foreground">Complete investor presentation</p>
        </div>
      </div>
      <DownloadPitchDeck variant="default" />
    </div>
  )
}
