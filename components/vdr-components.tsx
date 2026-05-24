"use client"

import { useState } from "react"
import { 
  Building2, 
  Shield, 
  FileCheck, 
  Calculator, 
  Cpu, 
  ClipboardList, 
  Heart, 
  TrendingUp,
  ChevronRight,
  ChevronDown,
  Folder,
  FolderOpen,
  FileText,
  Lock,
  Clock,
  CheckCircle2,
  AlertCircle,
  Download
} from "lucide-react"
import { vdrFolders, type VDRFolder, type VDRSubfolder, type VDRDocument } from "@/lib/vdr-data"
import { useLanguage } from "@/lib/i18n"
import { useNDAGatedAction, useNDA } from "@/lib/nda-context"
import { cn } from "@/lib/utils"

const iconMap: Record<string, React.ElementType> = {
  Building2,
  Shield,
  FileCheck,
  Calculator,
  Cpu,
  ClipboardList,
  Heart,
  TrendingUp,
}

const colorMap: Record<string, string> = {
  primary: "bg-primary/10 text-primary border-primary/30",
  accent: "bg-accent/10 text-accent border-accent/30",
  "chart-3": "bg-chart-3/10 text-chart-3 border-chart-3/30",
  "chart-4": "bg-chart-4/10 text-chart-4 border-chart-4/30",
}

const statusConfig = {
  available: { icon: CheckCircle2, color: "text-chart-3", label: "Available", labelEs: "Disponible" },
  pending: { icon: Clock, color: "text-chart-4", label: "Pending", labelEs: "Pendiente" },
  confidential: { icon: AlertCircle, color: "text-destructive", label: "Confidential", labelEs: "Confidencial" },
}

interface VDRNavigationProps {
  onSelectDocument?: (doc: VDRDocument, folder: VDRFolder) => void
  selectedDocumentId?: string
}

export function VDRNavigation({ onSelectDocument, selectedDocumentId }: VDRNavigationProps) {
  const [expandedFolders, setExpandedFolders] = useState<string[]>(["corporate"])
  const [expandedSubfolders, setExpandedSubfolders] = useState<string[]>([])
  const { language } = useLanguage()

  const toggleFolder = (folderId: string) => {
    setExpandedFolders(prev => 
      prev.includes(folderId) 
        ? prev.filter(id => id !== folderId)
        : [...prev, folderId]
    )
  }

  const toggleSubfolder = (subfolderId: string) => {
    setExpandedSubfolders(prev => 
      prev.includes(subfolderId) 
        ? prev.filter(id => id !== subfolderId)
        : [...prev, subfolderId]
    )
  }

  return (
    <div className="bg-card border border-border rounded-xl overflow-hidden">
      <div className="p-4 border-b border-border bg-muted/30">
        <h3 className="font-semibold text-foreground flex items-center gap-2">
          <Folder className="w-4 h-4 text-primary" />
          {language === "es" ? "Índice del Data Room" : "Data Room Index"}
        </h3>
        <p className="text-xs text-muted-foreground mt-1">
          {language === "es" ? "8 carpetas • 52 documentos" : "8 folders • 52 documents"}
        </p>
      </div>
      
      <div className="divide-y divide-border">
        {vdrFolders.map((folder) => {
          const IconComponent = iconMap[folder.icon] || Folder
          const isExpanded = expandedFolders.includes(folder.id)
          
          return (
            <div key={folder.id}>
              <button
                onClick={() => toggleFolder(folder.id)}
                className="w-full px-4 py-3 flex items-center gap-3 hover:bg-muted/50 transition-colors text-left"
              >
                <div className={cn("w-8 h-8 rounded-lg flex items-center justify-center border", colorMap[folder.color])}>
                  <IconComponent className="w-4 h-4" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-medium text-sm text-foreground truncate">
                    {folder.number}. {language === "es" ? folder.nameEs : folder.name}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    {folder.subfolders.reduce((acc, sf) => acc + sf.documents.length, 0)} {language === "es" ? "documentos" : "documents"}
                  </p>
                </div>
                {isExpanded ? (
                  <ChevronDown className="w-4 h-4 text-muted-foreground" />
                ) : (
                  <ChevronRight className="w-4 h-4 text-muted-foreground" />
                )}
              </button>
              
              {isExpanded && (
                <div className="bg-muted/20 border-t border-border">
                  {folder.subfolders.map((subfolder) => {
                    const isSubExpanded = expandedSubfolders.includes(subfolder.id)
                    
                    return (
                      <div key={subfolder.id}>
                        <button
                          onClick={() => toggleSubfolder(subfolder.id)}
                          className="w-full pl-14 pr-4 py-2 flex items-center gap-2 hover:bg-muted/50 transition-colors text-left"
                        >
                          {isSubExpanded ? (
                            <FolderOpen className="w-4 h-4 text-primary" />
                          ) : (
                            <Folder className="w-4 h-4 text-muted-foreground" />
                          )}
                          <span className="flex-1 text-sm text-foreground/80 truncate">
                            {language === "es" ? subfolder.nameEs : subfolder.name}
                          </span>
                          <span className="text-xs text-muted-foreground">
                            {subfolder.documents.length}
                          </span>
                        </button>
                        
                        {isSubExpanded && (
                          <div className="pl-20 pr-4 py-1 space-y-1">
                            {subfolder.documents.map((doc) => {
                              const StatusIcon = statusConfig[doc.status].icon
                              
                              return (
                                <button
                                  key={doc.id}
                                  onClick={() => onSelectDocument?.(doc, folder)}
                                  className={cn(
                                    "w-full flex items-center gap-2 px-3 py-2 rounded-lg text-left transition-colors",
                                    selectedDocumentId === doc.id
                                      ? "bg-primary/10 border border-primary/30"
                                      : "hover:bg-muted/50"
                                  )}
                                >
                                  <FileText className="w-3.5 h-3.5 text-muted-foreground flex-shrink-0" />
                                  <span className="flex-1 text-xs text-foreground/70 truncate">
                                    {language === "es" ? doc.nameEs : doc.name}
                                  </span>
                                  <StatusIcon className={cn("w-3.5 h-3.5 flex-shrink-0", statusConfig[doc.status].color)} />
                                </button>
                              )
                            })}
                          </div>
                        )}
                      </div>
                    )
                  })}
                </div>
              )}
            </div>
          )
        })}
      </div>
    </div>
  )
}

interface VDRFolderCardProps {
  folder: VDRFolder
  onSelect: () => void
}

export function VDRFolderCard({ folder, onSelect }: VDRFolderCardProps) {
  const { language } = useLanguage()
  const IconComponent = iconMap[folder.icon] || Folder
  const totalDocs = folder.subfolders.reduce((acc, sf) => acc + sf.documents.length, 0)
  const availableDocs = folder.subfolders.reduce((acc, sf) => 
    acc + sf.documents.filter(d => d.status === "available").length, 0
  )

  return (
    <button
      onClick={onSelect}
      className="bg-card border border-border rounded-xl p-6 text-left transition-all hover:border-primary/50 hover:shadow-lg hover:-translate-y-1 group"
    >
      <div className={cn("w-12 h-12 rounded-xl flex items-center justify-center border mb-4", colorMap[folder.color])}>
        <IconComponent className="w-6 h-6" />
      </div>
      
      <div className="flex items-start justify-between gap-2 mb-2">
        <span className="text-xs font-mono text-muted-foreground">{folder.number}</span>
        <div className="flex items-center gap-1 text-xs text-chart-3">
          <CheckCircle2 className="w-3 h-3" />
          {availableDocs}/{totalDocs}
        </div>
      </div>
      
      <h3 className="font-semibold text-foreground mb-2 line-clamp-2 group-hover:text-primary transition-colors">
        {language === "es" ? folder.nameEs : folder.name}
      </h3>
      
      <p className="text-sm text-muted-foreground line-clamp-3">
        {language === "es" ? folder.descriptionEs : folder.description}
      </p>
      
      <div className="mt-4 pt-4 border-t border-border flex items-center justify-between">
        <span className="text-xs text-muted-foreground">
          {folder.subfolders.length} {language === "es" ? "subcarpetas" : "subfolders"}
        </span>
        <ChevronRight className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
      </div>
    </button>
  )
}

interface VDRDocumentViewerProps {
  document: VDRDocument | null
  folder: VDRFolder | null
  onClose: () => void
}

export function VDRDocumentViewer({ document, folder, onClose }: VDRDocumentViewerProps) {
  const { language } = useLanguage()
  const { executeWithNDA, isNDASigned } = useNDAGatedAction()
  
  if (!document || !folder) {
    return (
      <div className="bg-card border border-border rounded-xl p-12 flex flex-col items-center justify-center text-center min-h-[400px]">
        <FileText className="w-12 h-12 text-muted-foreground/30 mb-4" />
        <h3 className="font-semibold text-foreground mb-2">
          {language === "es" ? "Selecciona un documento" : "Select a document"}
        </h3>
        <p className="text-sm text-muted-foreground max-w-xs">
          {language === "es" 
            ? "Navega por las carpetas del Data Room y selecciona un documento para ver sus detalles"
            : "Browse the Data Room folders and select a document to view its details"
          }
        </p>
      </div>
    )
  }

  const StatusIcon = statusConfig[document.status].icon
  const IconComponent = iconMap[folder.icon] || Folder

  const handleDownload = () => {
    if (document.requiresNDA) {
      executeWithNDA(() => {
        // Simulate download
        alert(language === "es" 
          ? `Descargando: ${document.nameEs}` 
          : `Downloading: ${document.name}`
        )
      })
    } else {
      alert(language === "es" 
        ? `Descargando: ${document.nameEs}` 
        : `Downloading: ${document.name}`
      )
    }
  }

  return (
    <div className="bg-card border border-border rounded-xl overflow-hidden">
      {/* Header */}
      <div className="p-6 border-b border-border bg-muted/30">
        <div className="flex items-start gap-4">
          <div className={cn("w-12 h-12 rounded-xl flex items-center justify-center border flex-shrink-0", colorMap[folder.color])}>
            <IconComponent className="w-6 h-6" />
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-xs text-muted-foreground mb-1">
              {folder.number}. {language === "es" ? folder.nameEs : folder.name}
            </p>
            <h2 className="font-semibold text-foreground text-lg">
              {language === "es" ? document.nameEs : document.name}
            </h2>
          </div>
        </div>
      </div>
      
      {/* Document Info */}
      <div className="p-6 space-y-6">
        {/* Status */}
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <StatusIcon className={cn("w-5 h-5", statusConfig[document.status].color)} />
            <span className="font-medium">
              {language === "es" ? statusConfig[document.status].labelEs : statusConfig[document.status].label}
            </span>
          </div>
          
          {document.requiresNDA && (
            <div className="flex items-center gap-2 text-muted-foreground">
              <Lock className="w-4 h-4" />
              <span className="text-sm">
                {language === "es" ? "Requiere NDA" : "Requires NDA"}
              </span>
            </div>
          )}
        </div>
        
        {/* Document Type */}
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-muted/30 rounded-lg p-4">
            <p className="text-xs text-muted-foreground mb-1">
              {language === "es" ? "Tipo de documento" : "Document type"}
            </p>
            <p className="font-medium text-foreground uppercase">{document.type}</p>
          </div>
          <div className="bg-muted/30 rounded-lg p-4">
            <p className="text-xs text-muted-foreground mb-1">
              {language === "es" ? "Clasificación" : "Classification"}
            </p>
            <p className="font-medium text-foreground">
              {document.requiresNDA 
                ? (language === "es" ? "Confidencial" : "Confidential")
                : (language === "es" ? "Público" : "Public")
              }
            </p>
          </div>
        </div>
        
        {/* NDA Warning */}
        {document.requiresNDA && !isNDASigned && (
          <div className="bg-chart-4/10 border border-chart-4/30 rounded-lg p-4 flex items-start gap-3">
            <Lock className="w-5 h-5 text-chart-4 flex-shrink-0 mt-0.5" />
            <div>
              <p className="font-medium text-foreground text-sm">
                {language === "es" ? "Firma de NDA requerida" : "NDA signature required"}
              </p>
              <p className="text-sm text-muted-foreground mt-1">
                {language === "es" 
                  ? "Este documento es confidencial. Debes firmar el Acuerdo de No Divulgación para acceder."
                  : "This document is confidential. You must sign the Non-Disclosure Agreement to access."
                }
              </p>
            </div>
          </div>
        )}
        
        {/* Download Button */}
        <button
          onClick={handleDownload}
          disabled={document.status === "pending"}
          className={cn(
            "w-full flex items-center justify-center gap-2 px-6 py-3 rounded-lg font-semibold transition-all",
            document.status === "pending"
              ? "bg-muted text-muted-foreground cursor-not-allowed"
              : document.requiresNDA && !isNDASigned
                ? "bg-chart-4 text-chart-4-foreground hover:bg-chart-4/90"
                : "bg-primary text-primary-foreground hover:bg-primary/90"
          )}
        >
          {document.status === "pending" ? (
            <>
              <Clock className="w-5 h-5" />
              {language === "es" ? "Documento pendiente" : "Document pending"}
            </>
          ) : document.requiresNDA && !isNDASigned ? (
            <>
              <Lock className="w-5 h-5" />
              {language === "es" ? "Firmar NDA y descargar" : "Sign NDA & Download"}
            </>
          ) : (
            <>
              <Download className="w-5 h-5" />
              {language === "es" ? "Descargar documento" : "Download document"}
            </>
          )}
        </button>
      </div>
    </div>
  )
}
