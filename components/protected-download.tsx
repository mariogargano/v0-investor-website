"use client"

import { Download, Lock, FileText, File } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useNDAGatedAction, useNDA } from "@/lib/nda-context"

interface ProtectedDownloadProps {
  fileName: string
  filePath: string
  label?: string
  description?: string
  variant?: "default" | "outline" | "ghost" | "link"
  size?: "default" | "sm" | "lg"
  className?: string
  showIcon?: boolean
}

export function ProtectedDownload({
  fileName,
  filePath,
  label,
  description,
  variant = "outline",
  size = "default",
  className = "",
  showIcon = true,
}: ProtectedDownloadProps) {
  const { executeWithNDA, isNDASigned } = useNDAGatedAction()

  const performDownload = () => {
    const link = document.createElement("a")
    link.href = filePath
    link.download = fileName
    link.click()
  }

  const handleDownload = () => {
    executeWithNDA(performDownload)
  }

  return (
    <Button variant={variant} size={size} onClick={handleDownload} className={className}>
      {showIcon && (
        <>
          {!isNDASigned && <Lock className="w-4 h-4 mr-2" />}
          {isNDASigned && <Download className="w-4 h-4 mr-2" />}
        </>
      )}
      {label || fileName}
    </Button>
  )
}

// Card version for document listings
interface ProtectedDocumentCardProps {
  fileName: string
  filePath: string
  title: string
  description?: string
  icon?: "file" | "pdf" | "doc"
}

export function ProtectedDocumentCard({
  fileName,
  filePath,
  title,
  description,
  icon = "file",
}: ProtectedDocumentCardProps) {
  const { executeWithNDA, isNDASigned } = useNDAGatedAction()

  const performDownload = () => {
    const link = document.createElement("a")
    link.href = filePath
    link.download = fileName
    link.click()
  }

  const handleDownload = () => {
    executeWithNDA(performDownload)
  }

  const IconComponent = icon === "pdf" ? FileText : File

  return (
    <button
      onClick={handleDownload}
      className="w-full flex items-center gap-4 p-4 rounded-xl border border-border hover:border-primary/50 hover:bg-primary/5 transition-all group text-left"
    >
      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
        <IconComponent className="w-6 h-6 text-primary" />
      </div>
      <div className="flex-1 min-w-0">
        <p className="font-medium group-hover:text-primary transition-colors truncate">{title}</p>
        {description && (
          <p className="text-sm text-muted-foreground truncate">{description}</p>
        )}
      </div>
      <div className="flex-shrink-0">
        {isNDASigned ? (
          <Download className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
        ) : (
          <Lock className="w-5 h-5 text-muted-foreground" />
        )}
      </div>
    </button>
  )
}

// Status indicator component
export function NDAStatusIndicator() {
  const { isNDASigned, openNDAModal } = useNDA()

  if (isNDASigned) {
    return (
      <div className="flex items-center gap-2 text-sm text-chart-3">
        <Download className="w-4 h-4" />
        <span>NDA signed - Downloads enabled</span>
      </div>
    )
  }

  return (
    <button
      onClick={openNDAModal}
      className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
    >
      <Lock className="w-4 h-4" />
      <span>Sign NDA to enable downloads</span>
    </button>
  )
}
