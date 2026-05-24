"use client"

import { useState } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { VDRNavigation, VDRFolderCard, VDRDocumentViewer } from "@/components/vdr-components"
import { vdrFolders, vdrStats, type VDRDocument, type VDRFolder } from "@/lib/vdr-data"
import { NDAStatusIndicator } from "@/components/protected-download"
import { useLanguage } from "@/lib/i18n"
import { 
  Shield, 
  Lock, 
  FileText, 
  CheckCircle2, 
  Clock, 
  AlertCircle,
  FolderOpen,
  Grid3X3,
  List,
  Search,
  Filter,
  ChevronRight
} from "lucide-react"

export default function DataRoomPage() {
  const { language } = useLanguage()
  const [selectedDocument, setSelectedDocument] = useState<VDRDocument | null>(null)
  const [selectedFolder, setSelectedFolder] = useState<VDRFolder | null>(null)
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid")
  const [activeFolder, setActiveFolder] = useState<string | null>(null)
  const [searchQuery, setSearchQuery] = useState("")

  const handleSelectDocument = (doc: VDRDocument, folder: VDRFolder) => {
    setSelectedDocument(doc)
    setSelectedFolder(folder)
  }

  const handleFolderSelect = (folderId: string) => {
    setActiveFolder(folderId)
    setSelectedDocument(null)
    setSelectedFolder(null)
  }

  const activeFolderData = activeFolder ? vdrFolders.find(f => f.id === activeFolder) : null

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-12 md:py-16 px-4 sm:px-6 lg:px-8 border-b border-border">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/30 flex items-center justify-center">
                    <Shield className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-xs font-mono text-primary tracking-wider">WEEK-CHAIN VDR</p>
                    <h1 className="text-2xl md:text-3xl font-bold text-foreground">
                      {language === "es" ? "Virtual Data Room" : "Virtual Data Room"}
                    </h1>
                  </div>
                </div>
                <p className="text-muted-foreground max-w-xl">
                  {language === "es" 
                    ? "Acceso seguro a documentación corporativa, legal, financiera y tecnológica para la auditoría de la Ronda Semilla 2026."
                    : "Secure access to corporate, legal, financial and technology documentation for the 2026 Seed Round audit."
                  }
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <NDAStatusIndicator />
              </div>
            </div>
            
            {/* Stats Bar */}
            <div className="mt-8 grid grid-cols-2 md:grid-cols-5 gap-4">
              <div className="bg-card border border-border rounded-lg p-4 text-center">
                <p className="text-2xl font-bold text-foreground">{vdrStats.totalFolders}</p>
                <p className="text-xs text-muted-foreground">
                  {language === "es" ? "Carpetas" : "Folders"}
                </p>
              </div>
              <div className="bg-card border border-border rounded-lg p-4 text-center">
                <p className="text-2xl font-bold text-foreground">{vdrStats.totalDocuments}</p>
                <p className="text-xs text-muted-foreground">
                  {language === "es" ? "Documentos" : "Documents"}
                </p>
              </div>
              <div className="bg-card border border-border rounded-lg p-4 text-center">
                <div className="flex items-center justify-center gap-1">
                  <CheckCircle2 className="w-5 h-5 text-chart-3" />
                  <p className="text-2xl font-bold text-chart-3">{vdrStats.availableDocuments}</p>
                </div>
                <p className="text-xs text-muted-foreground">
                  {language === "es" ? "Disponibles" : "Available"}
                </p>
              </div>
              <div className="bg-card border border-border rounded-lg p-4 text-center">
                <div className="flex items-center justify-center gap-1">
                  <Clock className="w-5 h-5 text-chart-4" />
                  <p className="text-2xl font-bold text-chart-4">{vdrStats.pendingDocuments}</p>
                </div>
                <p className="text-xs text-muted-foreground">
                  {language === "es" ? "Pendientes" : "Pending"}
                </p>
              </div>
              <div className="bg-card border border-border rounded-lg p-4 text-center col-span-2 md:col-span-1">
                <div className="flex items-center justify-center gap-1">
                  <Lock className="w-5 h-5 text-primary" />
                  <p className="text-2xl font-bold text-primary">{vdrStats.confidentialDocuments}</p>
                </div>
                <p className="text-xs text-muted-foreground">
                  {language === "es" ? "Confidenciales" : "Confidential"}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            {/* Toolbar */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8">
              <div className="flex items-center gap-2">
                {activeFolder && (
                  <>
                    <button
                      onClick={() => setActiveFolder(null)}
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {language === "es" ? "Todas las carpetas" : "All folders"}
                    </button>
                    <ChevronRight className="w-4 h-4 text-muted-foreground" />
                    <span className="text-sm font-medium text-foreground">
                      {activeFolderData && (language === "es" ? activeFolderData.nameEs : activeFolderData.name)}
                    </span>
                  </>
                )}
              </div>
              
              <div className="flex items-center gap-3">
                {/* Search */}
                <div className="relative">
                  <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
                  <input
                    type="text"
                    placeholder={language === "es" ? "Buscar documentos..." : "Search documents..."}
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-9 pr-4 py-2 bg-card border border-border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                  />
                </div>
                
                {/* View Toggle */}
                <div className="flex items-center bg-card border border-border rounded-lg p-1">
                  <button
                    onClick={() => setViewMode("grid")}
                    className={`p-2 rounded transition-colors ${viewMode === "grid" ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:text-foreground"}`}
                  >
                    <Grid3X3 className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => setViewMode("list")}
                    className={`p-2 rounded transition-colors ${viewMode === "list" ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:text-foreground"}`}
                  >
                    <List className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>

            {/* Content */}
            {viewMode === "grid" && !activeFolder ? (
              /* Folder Grid View */
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {vdrFolders.map((folder) => (
                  <VDRFolderCard
                    key={folder.id}
                    folder={folder}
                    onSelect={() => handleFolderSelect(folder.id)}
                  />
                ))}
              </div>
            ) : viewMode === "list" && !activeFolder ? (
              /* Folder List View */
              <div className="bg-card border border-border rounded-xl overflow-hidden divide-y divide-border">
                {vdrFolders.map((folder) => {
                  const totalDocs = folder.subfolders.reduce((acc, sf) => acc + sf.documents.length, 0)
                  const availableDocs = folder.subfolders.reduce((acc, sf) => 
                    acc + sf.documents.filter(d => d.status === "available").length, 0
                  )
                  
                  return (
                    <button
                      key={folder.id}
                      onClick={() => handleFolderSelect(folder.id)}
                      className="w-full px-6 py-4 flex items-center gap-4 hover:bg-muted/50 transition-colors text-left"
                    >
                      <div className="w-10 h-10 rounded-lg bg-primary/10 border border-primary/30 flex items-center justify-center">
                        <FolderOpen className="w-5 h-5 text-primary" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="font-medium text-foreground">
                          {folder.number}. {language === "es" ? folder.nameEs : folder.name}
                        </p>
                        <p className="text-sm text-muted-foreground truncate">
                          {language === "es" ? folder.descriptionEs : folder.description}
                        </p>
                      </div>
                      <div className="flex items-center gap-4">
                        <div className="flex items-center gap-1 text-sm text-chart-3">
                          <CheckCircle2 className="w-4 h-4" />
                          {availableDocs}/{totalDocs}
                        </div>
                        <ChevronRight className="w-5 h-5 text-muted-foreground" />
                      </div>
                    </button>
                  )
                })}
              </div>
            ) : activeFolder ? (
              /* Folder Detail View */
              <div className="grid lg:grid-cols-3 gap-8">
                <div className="lg:col-span-1">
                  <VDRNavigation
                    onSelectDocument={handleSelectDocument}
                    selectedDocumentId={selectedDocument?.id}
                  />
                </div>
                <div className="lg:col-span-2">
                  <VDRDocumentViewer
                    document={selectedDocument}
                    folder={selectedFolder}
                    onClose={() => setSelectedDocument(null)}
                  />
                </div>
              </div>
            ) : null}
          </div>
        </section>

        {/* Security Notice */}
        <section className="py-12 px-4 sm:px-6 lg:px-8 border-t border-border">
          <div className="max-w-4xl mx-auto">
            <div className="bg-card border border-border rounded-xl p-6 flex gap-4">
              <Lock className="w-6 h-6 text-primary flex-shrink-0" />
              <div>
                <h4 className="font-semibold mb-2">
                  {language === "es" ? "Aviso de Seguridad y Confidencialidad" : "Security & Confidentiality Notice"}
                </h4>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {language === "es" 
                    ? "Este Virtual Data Room contiene información altamente confidencial de WEEK-CHAIN y sus entidades relacionadas. El acceso está restringido a inversionistas acreditados que hayan firmado el Acuerdo de No Divulgación (NDA). Cualquier reproducción, distribución o uso no autorizado de estos documentos está estrictamente prohibido y puede resultar en acciones legales."
                    : "This Virtual Data Room contains highly confidential information from WEEK-CHAIN and its related entities. Access is restricted to accredited investors who have signed the Non-Disclosure Agreement (NDA). Any unauthorized reproduction, distribution, or use of these documents is strictly prohibited and may result in legal action."
                  }
                </p>
                <div className="mt-4 flex flex-wrap gap-4 text-xs text-muted-foreground">
                  <span className="flex items-center gap-1">
                    <Shield className="w-3.5 h-3.5" />
                    {language === "es" ? "Clasificación: ALTAMENTE CONFIDENCIAL" : "Classification: HIGHLY CONFIDENTIAL"}
                  </span>
                  <span className="flex items-center gap-1">
                    <FileText className="w-3.5 h-3.5" />
                    {language === "es" ? `Última actualización: ${vdrStats.lastUpdated}` : `Last updated: ${vdrStats.lastUpdated}`}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
