// Virtual Data Room (VDR) Data Structure
// WEEK-CHAIN Seed Round 2026

export interface VDRDocument {
  id: string
  name: string
  nameEs: string
  type: "pdf" | "xlsx" | "docx" | "contract" | "certificate" | "policy"
  size?: string
  status: "available" | "pending" | "confidential"
  requiresNDA: boolean
  downloadUrl?: string
}

export interface VDRSubfolder {
  id: string
  name: string
  nameEs: string
  documents: VDRDocument[]
}

export interface VDRFolder {
  id: string
  number: string
  name: string
  nameEs: string
  description: string
  descriptionEs: string
  icon: string
  color: string
  subfolders: VDRSubfolder[]
}

export const vdrFolders: VDRFolder[] = [
  {
    id: "corporate",
    number: "01",
    name: "Corporate, Governance & Intercompany Agreements",
    nameEs: "Corporativo, Gobernanza y Acuerdos Intercompany",
    description: "Foundational legal documentation demonstrating the constitution of the three corporate layers and asset ring-fencing to isolate consumer risks from physical real estate assets.",
    descriptionEs: "Documentación legal fundacional demostrando la constitución de las tres capas corporativas y el blindaje patrimonial (Ring-Fencing) para aislar los riesgos de consumo de los activos inmobiliarios físicos.",
    icon: "Building2",
    color: "primary",
    subfolders: [
      {
        id: "ip-holding",
        name: "1.1 IP & Holding Layer Entities",
        nameEs: "1.1 Entidades Legales de la Capa de IP e Holding",
        documents: [
          { id: "morises-llc-cert", name: "MORISES LLC - Certificate of Organization (Wyoming, USA)", nameEs: "MORISES LLC - Certificado de Organización e Incorporación (Wyoming, USA)", type: "certificate", status: "available", requiresNDA: true },
          { id: "morises-llc-oa", name: "MORISES LLC - Operating Agreement", nameEs: "MORISES LLC - Acuerdo de Operación (Operating Agreement)", type: "contract", status: "available", requiresNDA: true },
          { id: "morises-llc-ein", name: "MORISES LLC - Federal Tax ID (EIN)", nameEs: "MORISES LLC - Registro de Identificación Fiscal Federal (EIN)", type: "certificate", status: "available", requiresNDA: true },
          { id: "morises-llc-ip", name: "MORISES LLC - IP & Patent Registration (SVC Machine)", nameEs: "MORISES LLC - Registro de Patentes y Propiedad Intelectual Core", type: "certificate", status: "pending", requiresNDA: true },
          { id: "morises-asset-cert", name: "MORISES ASSET INC - Certificate of Incorporation (Delaware)", nameEs: "MORISES ASSET INC - Certificado de Incorporación (Delaware)", type: "certificate", status: "pending", requiresNDA: true },
          { id: "morises-asset-bylaws", name: "MORISES ASSET INC - Corporate Bylaws", nameEs: "MORISES ASSET INC - Estatutos Corporativos (Corporate Bylaws)", type: "contract", status: "pending", requiresNDA: true },
          { id: "morises-asset-shares", name: "MORISES ASSET INC - Share Registry & Preferred Equity Titles", nameEs: "MORISES ASSET INC - Registro de Acciones y Títulos de Equity Preferred", type: "certificate", status: "pending", requiresNDA: true },
        ]
      },
      {
        id: "local-entity",
        name: "1.2 Local Operating Entity (Mexico)",
        nameEs: "1.2 Entidad Operativa Local (México)",
        documents: [
          { id: "sapi-acta", name: "WEEK-CHAIN SAPI de CV - Articles of Incorporation", nameEs: "WEEK-CHAIN SAPI de CV - Acta Constitutiva Notariada", type: "contract", status: "available", requiresNDA: true },
          { id: "sapi-rfc", name: "WEEK-CHAIN SAPI de CV - Tax ID (RFC) & SAT Registration", nameEs: "WEEK-CHAIN SAPI de CV - Cédula de Identificación Fiscal (RFC)", type: "certificate", status: "available", requiresNDA: true },
          { id: "sapi-powers", name: "WEEK-CHAIN SAPI de CV - Notarial Powers of Attorney", nameEs: "WEEK-CHAIN SAPI de CV - Poderes Notariales Vigentes", type: "contract", status: "available", requiresNDA: true },
          { id: "sapi-impi", name: "WEEK-CHAIN SAPI de CV - IMPI Trademark Registrations", nameEs: "WEEK-CHAIN SAPI de CV - Registro de Marcas IMPI", type: "certificate", status: "available", requiresNDA: true },
        ]
      },
      {
        id: "intercompany",
        name: "1.3 Intercompany Agreements (Back-to-Back)",
        nameEs: "1.3 Contratos y Acuerdos Intercompany (Back-to-Back)",
        documents: [
          { id: "ip-license", name: "IP & Software Licensing Agreement (8% Royalty)", nameEs: "Contrato de Licenciamiento de Software e IP (8% Regalías)", type: "contract", status: "available", requiresNDA: true },
          { id: "capacity-grant", name: "Capacity Grant Agreement Framework (48+4 Weeks)", nameEs: "Contratos de Cesión de Capacidad (48+4 Semanas)", type: "contract", status: "available", requiresNDA: true },
          { id: "related-party", name: "Related-Party Transfer Pricing Policy (OECD Arm's Length)", nameEs: "Manual de Precios de Transferencia (OCDE Arm's Length)", type: "policy", status: "available", requiresNDA: true },
        ]
      }
    ]
  },
  {
    id: "spv-structure",
    number: "02",
    name: "Legal Structure & Single-Property SPVs",
    nameEs: "Estructura Jurídica y SPVs Monopropiedad",
    description: "Documentation auditing the individual asset isolation structure. Ensures the consolidated holding balance is not contaminated by local contingencies.",
    descriptionEs: "Auditoría de la estructura de aislamiento patrimonial individual por activo. Garantiza que el balance consolidado del holding no se contamine ante contingencias locales.",
    icon: "Shield",
    color: "accent",
    subfolders: [
      {
        id: "spv-constitution",
        name: "2.1 SPV Constitution by Asset",
        nameEs: "2.1 Constitución de SPVs por Activo",
        documents: [
          { id: "spv-mungata", name: "Villa Mungata SPV - Articles of Incorporation (99% Morises / 1% Local Admin)", nameEs: "SPV Villa Mungata - Acta Constitutiva (99% Morises / 1% Admin Local)", type: "contract", status: "available", requiresNDA: true },
          { id: "spv-titles", name: "SPV Property Titles & Tax Payments (ISAI)", nameEs: "Títulos de Propiedad e Impuestos SPVs (ISAI)", type: "certificate", status: "available", requiresNDA: true },
          { id: "spv-powers", name: "SPV Powers of Attorney for Purchase Agreements", nameEs: "Poderes de SPV para Compraventas", type: "contract", status: "available", requiresNDA: true },
        ]
      },
      {
        id: "acquisition-templates",
        name: "2.2 Legal Acquisition Templates",
        nameEs: "2.2 Plantillas Legales de Adquisición",
        documents: [
          { id: "purchase-agreement", name: "Standard Purchase Agreement Template", nameEs: "Modelo de Contrato de Promesa de Compraventa", type: "contract", status: "available", requiresNDA: true },
          { id: "escrow-contract", name: "Escrow/Trust Account Contract Template (65% Gross)", nameEs: "Modelo de Contrato de Fideicomiso/Escrow (65% Gross)", type: "contract", status: "available", requiresNDA: true },
          { id: "master-lease", name: "Master Lease with Binding Purchase Option (Lock-In)", nameEs: "Modelo de Master Lease con Opción de Compra Vinculante", type: "contract", status: "available", requiresNDA: true },
        ]
      }
    ]
  },
  {
    id: "compliance",
    number: "03",
    name: "Legal, Regulatory Compliance & Insurance",
    nameEs: "Legal, Compliance Regulatorio y Seguros",
    description: "Consumer certifications and regulatory shielding protecting SVC certificate operations from consumer protection agencies and financial regulators.",
    descriptionEs: "Certificaciones de consumo y blindaje normativo que amparan la operación de los certificados SVC frente a agencias de protección al consumidor y reguladores financieros.",
    icon: "FileCheck",
    color: "chart-3",
    subfolders: [
      {
        id: "consumer-compliance",
        name: "3.1 Consumer Compliance (B2C)",
        nameEs: "3.1 Compliance de Consumo (B2C)",
        documents: [
          { id: "profeco", name: "PROFECO Adhesion Contract Registration", nameEs: "Registro de Contrato de Adhesión ante PROFECO", type: "certificate", status: "available", requiresNDA: true },
          { id: "nom151", name: "NOM-151-SCFI-2016 Certificates (EasyLex)", nameEs: "Certificados NOM-151-SCFI-2016 (EasyLex)", type: "certificate", status: "available", requiresNDA: true },
          { id: "terms", name: "Terms & Conditions + Privacy Policy (GDPR/LFPDPPP)", nameEs: "Términos y Condiciones + Políticas de Privacidad (GDPR/LFPDPPP)", type: "policy", status: "available", requiresNDA: true },
        ]
      },
      {
        id: "financial-insurance",
        name: "3.2 Financial Shielding & Insurance (Guarantee Center)",
        nameEs: "3.2 Blindaje Financiero y Aseguradoras (Guarantee Center)",
        documents: [
          { id: "ergo-bond", name: "ERGO Assurance Performance Bond Policy (1.5% Annual)", nameEs: "Póliza de Fianza de Cumplimiento ERGO (1.5% Anual)", type: "policy", status: "available", requiresNDA: true },
          { id: "liability-insurance", name: "Civil Liability & Property Damage Insurance", nameEs: "Pólizas de Seguro de Responsabilidad Civil y Daños", type: "policy", status: "available", requiresNDA: true },
        ]
      }
    ]
  },
  {
    id: "financials",
    number: "04",
    name: "Finances, Unit Economics & Official Pricing",
    nameEs: "Finanzas, Unit Economics y Precios Oficiales",
    description: "Financial projections, 25-property network analysis, and official retail pricing matrix for certificates.",
    descriptionEs: "Corridas financieras, proyecciones de la red de 25 propiedades y la matriz de precios retail de los certificados.",
    icon: "Calculator",
    color: "chart-4",
    subfolders: [
      {
        id: "pricing",
        name: "4.1 SVC Certificate Price List",
        nameEs: "4.1 Lista de Precios de Certificados SVC",
        documents: [
          { id: "price-matrix", name: "Official SVC Pricing Matrix by PAX", nameEs: "Matriz de Tarifas Oficiales (SVC) por PAX", type: "xlsx", status: "available", requiresNDA: false },
        ]
      },
      {
        id: "projections",
        name: "4.2 Financial Projections & Intercompany Splits",
        nameEs: "4.2 Proyecciones Financieras e Intercompany Splits",
        documents: [
          { id: "financial-model", name: "25-Property Network Financial Model (Scenario B)", nameEs: "Modelo Financiero Red 25 Propiedades (Escenario B)", type: "xlsx", status: "available", requiresNDA: true },
          { id: "maintenance-model", name: "$0 Annual Fees Sustainability Model", nameEs: "Modelo de Sostenibilidad $0 Cuotas Anuales", type: "xlsx", status: "available", requiresNDA: true },
          { id: "bank-structure", name: "Segregated Banking Structure Evidence", nameEs: "Estructura Bancaria Segregada", type: "pdf", status: "available", requiresNDA: true },
        ]
      }
    ]
  },
  {
    id: "technology",
    number: "05",
    name: "Technology, Software & SVC Machine",
    nameEs: "Tecnología, Software y SVC Machine",
    description: "Technical audit of digital product development after 18 months of investment by founding partners and family investors.",
    descriptionEs: "Auditoría técnica del desarrollo del producto digital tras un año y medio de inversión por parte de socios fundadores y Family Investors.",
    icon: "Cpu",
    color: "primary",
    subfolders: [
      {
        id: "core-product",
        name: "5.1 Core Product Status (90% Ready)",
        nameEs: "5.1 Estado del Producto Core (90% Ready)",
        documents: [
          { id: "tech-docs", name: "WEEK-WORLD Technical Documentation", nameEs: "Documentación Técnica de WEEK-WORLD", type: "pdf", status: "available", requiresNDA: true },
          { id: "svc-machine", name: "SVC Machine System Specification", nameEs: "Especificación Técnica de SVC Machine System", type: "pdf", status: "available", requiresNDA: true },
          { id: "smart-contracts", name: "Source Code & Smart Contracts (Solana Network)", nameEs: "Código Fuente y Smart Contracts (Solana Network)", type: "pdf", status: "confidential", requiresNDA: true },
        ]
      },
      {
        id: "satellites",
        name: "5.2 Digital Satellites & API Integrations",
        nameEs: "5.2 Satélites Digitales y APIs de Integración",
        documents: [
          { id: "week-booking", name: "WEEK-BOOKING B2B Platform Manual", nameEs: "Manual de Plataforma B2B WEEK-BOOKING", type: "pdf", status: "available", requiresNDA: true },
          { id: "week-wedding", name: "WEEK-WEDDING Platform Specifications", nameEs: "Especificaciones Plataforma WEEK-WEDDING", type: "pdf", status: "available", requiresNDA: true },
          { id: "week-agent", name: "WEEK-AGENT QR Wallet Integration", nameEs: "Integración WEEK-AGENT QR Wallet", type: "pdf", status: "available", requiresNDA: true },
        ]
      }
    ]
  },
  {
    id: "onboarding",
    number: "06",
    name: "Property Onboarding (Supply-Gate Flow)",
    nameEs: "Onboarding de Propiedades (Supply-Gate Flow)",
    description: "End-to-end inventory standardization manual that protects the management app from overselling (no-overissuance).",
    descriptionEs: "Manual de estandarización end-to-end de onboarding de inventario que resguarda la app de gestión para evitar sobreventa (no-overissuance).",
    icon: "ClipboardList",
    color: "accent",
    subfolders: [
      {
        id: "onboarding-manual",
        name: "6.1 Onboarding Manual (Stage 0-8)",
        nameEs: "6.1 Manual de Onboarding (Etapa 0-8)",
        documents: [
          { id: "stage-01", name: "Stage 0-1: Origination & Pre-Screen Templates", nameEs: "Etapa 0-1: Plantillas de Origination y Pre-Screen", type: "pdf", status: "available", requiresNDA: true },
          { id: "stage-23", name: "Stage 2-3: LOI & Legal/Technical Due Diligence", nameEs: "Etapa 2-3: LOI y Due Diligence Legal/Técnico", type: "pdf", status: "available", requiresNDA: true },
          { id: "stage-4", name: "Stage 4: Contracts (SPV, ERGO Bond, Capacity Grant)", nameEs: "Etapa 4: Contratos (SPV, Fianza ERGO, Capacity Grant)", type: "pdf", status: "available", requiresNDA: true },
          { id: "stage-567", name: "Stage 5-7: Operational Setup, Inventory & QA", nameEs: "Etapa 5-7: Setup Operativo, Inventario y QA", type: "pdf", status: "available", requiresNDA: true },
        ]
      }
    ]
  },
  {
    id: "esg",
    number: "07",
    name: "Socioeconomic Impact & ESG Model",
    nameEs: "Modelo de Impacto Socioeconómico y ESG",
    description: "Strategic documentation auditing the triple environmental, social, and corporate governance impact thesis.",
    descriptionEs: "Documentación estratégica que audita la tesis de triple impacto ambiental, social y de gobernanza corporativa del ecosistema.",
    icon: "Heart",
    color: "chart-3",
    subfolders: [
      {
        id: "employment",
        name: "7.1 International & Local Job Creation",
        nameEs: "7.1 Creación de Empleos Internacionales y Locales",
        documents: [
          { id: "tech-expansion", name: "Technology Employment Expansion Plan", nameEs: "Plan de Expansión de Empleo Tecnológico", type: "pdf", status: "available", requiresNDA: true },
          { id: "inclusion-policy", name: "WEEK-MANAGEMENT Labor Inclusion Policies", nameEs: "Políticas de Inclusión Laboral WEEK-MANAGEMENT", type: "policy", status: "available", requiresNDA: true },
          { id: "multiplier-effect", name: "Microeconomy Multiplier Effect Evidence", nameEs: "Evidencia de Efecto Multiplicador de Microeconomías", type: "pdf", status: "available", requiresNDA: true },
        ]
      }
    ]
  },
  {
    id: "investment",
    number: "08",
    name: "Investment Round Documentation",
    nameEs: "Documentación de la Ronda de Inversión",
    description: "Complete seed round documentation package for accredited investors.",
    descriptionEs: "Paquete completo de documentación de la ronda semilla para inversionistas acreditados.",
    icon: "TrendingUp",
    color: "chart-4",
    subfolders: [
      {
        id: "round-docs",
        name: "8.1 Seed Round Documents",
        nameEs: "8.1 Documentos de Ronda Semilla",
        documents: [
          { id: "pitch-deck", name: "WEEK-CHAIN Investor Pitch Deck", nameEs: "Pitch Deck para Inversionistas WEEK-CHAIN", type: "pdf", status: "available", requiresNDA: true },
          { id: "executive-summary", name: "Executive Summary", nameEs: "Resumen Ejecutivo", type: "pdf", status: "available", requiresNDA: false },
          { id: "term-sheet", name: "Term Sheet - Preferred Equity", nameEs: "Term Sheet - Equity Preferred", type: "pdf", status: "available", requiresNDA: true },
          { id: "subscription", name: "Subscription Agreement Template", nameEs: "Modelo de Contrato de Suscripción", type: "contract", status: "available", requiresNDA: true },
          { id: "shareholders", name: "Shareholders Agreement", nameEs: "Acuerdo de Accionistas", type: "contract", status: "available", requiresNDA: true },
        ]
      },
      {
        id: "valuation",
        name: "8.2 Valuation & Cap Table",
        nameEs: "8.2 Valuación y Cap Table",
        documents: [
          { id: "valuation-memo", name: "Pre-Money Valuation Memorandum ($3.5M USD)", nameEs: "Memorándum de Valuación Pre-Money ($3.5M USD)", type: "pdf", status: "available", requiresNDA: true },
          { id: "cap-table", name: "Current Cap Table & Equity Distribution", nameEs: "Cap Table Actual y Distribución de Equity", type: "xlsx", status: "available", requiresNDA: true },
          { id: "use-of-funds", name: "Use of Funds - Seed Round", nameEs: "Uso de Fondos - Ronda Semilla", type: "pdf", status: "available", requiresNDA: true },
        ]
      }
    ]
  }
]

// Stats for the VDR
export const vdrStats = {
  totalFolders: 8,
  totalDocuments: 52,
  availableDocuments: 45,
  pendingDocuments: 5,
  confidentialDocuments: 2,
  lastUpdated: "2026-05-24"
}
