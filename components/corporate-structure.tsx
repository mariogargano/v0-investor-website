"use client"

import { 
  Building2, 
  Globe, 
  Shield,
  ArrowDown,
  FileText,
  DollarSign,
  Percent,
  CheckCircle
} from "lucide-react"
import { useLanguage } from "@/lib/i18n"

export function CorporateStructure() {
  const { language } = useLanguage()
  
  const content = {
    en: {
      badge: "Corporate Architecture",
      title: "Three-Tier",
      titleHighlight: "Legal Structure",
      subtitle: "Optimized for regulatory compliance, asset protection, and tax efficiency across jurisdictions",
      tiers: [
        {
          tier: 1,
          name: "MORISES LLC",
          jurisdiction: "Wyoming, USA",
          type: "Intellectual Property Holding",
          icon: Globe,
          color: "from-primary to-primary/70",
          borderColor: "border-primary",
          description: "Owner of all IP, trademarks, core software, reservation algorithms, and operational protocols",
          keyPoints: [
            "8% royalty on all SAPI sales",
            "No direct consumer relationship",
            "No physical property ownership",
            "Global brand licensing"
          ],
          flow: "Licenses core software to SAPI"
        },
        {
          tier: 2,
          name: "MORISES ASSET INC.",
          jurisdiction: "Delaware, USA",
          type: "Asset Holding & SPVs",
          icon: Building2,
          color: "from-accent to-accent/70",
          borderColor: "border-accent",
          description: "Patrimonial holding that structures single-property SPVs for each acquired asset",
          keyPoints: [
            "99% Morises / 1% Local Admin per SPV",
            "Signs purchase agreements",
            "Title holder of properties",
            "Q2 2026 incorporation"
          ],
          flow: "Capacity Assignment Contract (48+4)"
        },
        {
          tier: 3,
          name: "WEEK-CHAIN SAPI de CV",
          jurisdiction: "Playa del Carmen, Mexico",
          type: "Commercial Operations",
          icon: FileText,
          color: "from-chart-3 to-chart-3/70",
          borderColor: "border-chart-3",
          description: "Commercial operator that issues and sells SVCs, manages collections, and handles local compliance",
          keyPoints: [
            "Issues 48 certificates per property",
            "LATAM payment collection",
            "PROFECO & NOM-151 compliance",
            "Agent commission management"
          ],
          flow: "Consumer-facing operations"
        }
      ],
      intercompanyTitle: "Intercompany Flow Engineering",
      intercompanySubtitle: "OECD transfer pricing compliance to prevent Permanent Establishment (PE) risk",
      flows: [
        { concept: "IP Royalty", percentage: "8%", recipient: "MORISES LLC", description: "Trademark & software licensing" },
        { concept: "Capacity Assignment", percentage: "Variable", recipient: "SPV → SAPI", description: "48+4 weeks per property" },
        { concept: "Management Fee", percentage: "15-20%", recipient: "WEEK-MANAGEMENT", description: "Property operations" },
        { concept: "Platform Margin", percentage: "11%", recipient: "WEEK-CHAIN", description: "Net operational profit" }
      ],
      complianceTitle: "Regulatory Compliance",
      complianceBadges: [
        "SEC/CNBV Non-Security Classification",
        "Consumer Product Only (No Investment)",
        "No Profit Expectation for Users",
        "Controlled Secondary Market"
      ]
    },
    es: {
      badge: "Arquitectura Corporativa",
      title: "Estructura Legal",
      titleHighlight: "de Tres Capas",
      subtitle: "Optimizada para cumplimiento regulatorio, protección de activos y eficiencia fiscal entre jurisdicciones",
      tiers: [
        {
          tier: 1,
          name: "MORISES LLC",
          jurisdiction: "Wyoming, USA",
          type: "Holding de Propiedad Intelectual",
          icon: Globe,
          color: "from-primary to-primary/70",
          borderColor: "border-primary",
          description: "Titular de toda la PI, marcas, software core, algoritmos de reserva y protocolos operativos",
          keyPoints: [
            "8% royalty sobre ventas SAPI",
            "Sin relación directa con consumidores",
            "Sin propiedad física de inmuebles",
            "Licenciamiento global de marca"
          ],
          flow: "Licencia software core a la SAPI"
        },
        {
          tier: 2,
          name: "MORISES ASSET INC.",
          jurisdiction: "Delaware, USA",
          type: "Holding Patrimonial & SPVs",
          icon: Building2,
          color: "from-accent to-accent/70",
          borderColor: "border-accent",
          description: "Holding patrimonial que estructura SPVs monopropiedad para cada activo adquirido",
          keyPoints: [
            "99% Morises / 1% Admin Local por SPV",
            "Firma contratos de compraventa",
            "Titular de escrituras",
            "Incorporación Q2 2026"
          ],
          flow: "Contrato de Cesión de Capacidad (48+4)"
        },
        {
          tier: 3,
          name: "WEEK-CHAIN SAPI de CV",
          jurisdiction: "Playa del Carmen, México",
          type: "Operación Comercial",
          icon: FileText,
          color: "from-chart-3 to-chart-3/70",
          borderColor: "border-chart-3",
          description: "Operadora comercial que emite y vende SVCs, gestiona cobranza y cumplimiento local",
          keyPoints: [
            "Emite 48 certificados por propiedad",
            "Cobranza LATAM",
            "Cumplimiento PROFECO & NOM-151",
            "Gestión comisiones agentes"
          ],
          flow: "Operaciones cara al consumidor"
        }
      ],
      intercompanyTitle: "Ingeniería de Flujos Intercompany",
      intercompanySubtitle: "Cumplimiento de precios de transferencia OCDE para prevenir riesgo de Establecimiento Permanente",
      flows: [
        { concept: "Royalty de PI", percentage: "8%", recipient: "MORISES LLC", description: "Licenciamiento de marcas y software" },
        { concept: "Cesión de Capacidad", percentage: "Variable", recipient: "SPV → SAPI", description: "48+4 semanas por propiedad" },
        { concept: "Fee de Gestión", percentage: "15-20%", recipient: "WEEK-MANAGEMENT", description: "Operación de propiedades" },
        { concept: "Margen Plataforma", percentage: "11%", recipient: "WEEK-CHAIN", description: "Utilidad operativa neta" }
      ],
      complianceTitle: "Cumplimiento Regulatorio",
      complianceBadges: [
        "Clasificación No-Security SEC/CNBV",
        "Solo Producto de Consumo (No Inversión)",
        "Sin Expectativa de Ganancias para Usuarios",
        "Mercado Secundario Controlado"
      ]
    }
  }
  
  const t = content[language as keyof typeof content] || content.en

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/20">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            {t.badge}
          </span>
          <h2 className="text-3xl lg:text-5xl font-bold mb-4">
            {t.title} <span className="gradient-text">{t.titleHighlight}</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            {t.subtitle}
          </p>
        </div>
        
        {/* Three-Tier Structure */}
        <div className="space-y-4 mb-16">
          {t.tiers.map((tier, idx) => {
            const IconComponent = tier.icon
            return (
              <div key={idx}>
                <div className={`relative bg-card border-2 ${tier.borderColor} rounded-2xl p-6 lg:p-8 overflow-hidden`}>
                  {/* Background gradient */}
                  <div className={`absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl ${tier.color} opacity-5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2`} />
                  
                  <div className="relative z-10">
                    <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                      {/* Tier Badge & Icon */}
                      <div className="flex items-center gap-4">
                        <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${tier.color} flex items-center justify-center flex-shrink-0`}>
                          <IconComponent className="w-8 h-8 text-white" />
                        </div>
                        <div className="lg:hidden">
                          <span className="text-xs font-mono text-muted-foreground">TIER {tier.tier}</span>
                          <h3 className="text-xl font-bold">{tier.name}</h3>
                          <p className="text-sm text-muted-foreground">{tier.jurisdiction}</p>
                        </div>
                      </div>
                      
                      {/* Content */}
                      <div className="flex-1">
                        <div className="hidden lg:block mb-3">
                          <div className="flex items-center gap-3 mb-1">
                            <span className="text-xs font-mono px-2 py-0.5 bg-muted rounded text-muted-foreground">TIER {tier.tier}</span>
                            <span className="text-xs text-muted-foreground">{tier.jurisdiction}</span>
                          </div>
                          <h3 className="text-2xl font-bold">{tier.name}</h3>
                          <p className="text-sm text-primary font-medium">{tier.type}</p>
                        </div>
                        <p className="text-muted-foreground mb-4">{tier.description}</p>
                        <div className="grid sm:grid-cols-2 gap-2">
                          {tier.keyPoints.map((point, pidx) => (
                            <div key={pidx} className="flex items-center gap-2 text-sm">
                              <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                              <span className="text-muted-foreground">{point}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                {idx < t.tiers.length - 1 && (
                  <div className="flex justify-center py-2">
                    <div className="flex flex-col items-center">
                      <ArrowDown className="w-5 h-5 text-primary" />
                      <span className="text-xs text-muted-foreground mt-1 text-center max-w-[200px]">{tier.flow}</span>
                    </div>
                  </div>
                )}
              </div>
            )
          })}
        </div>
        
        {/* Intercompany Flows */}
        <div className="bg-card border border-border rounded-2xl p-6 lg:p-8 mb-8">
          <h3 className="text-xl font-semibold mb-2 flex items-center gap-2">
            <DollarSign className="w-5 h-5 text-primary" />
            {t.intercompanyTitle}
          </h3>
          <p className="text-sm text-muted-foreground mb-6">{t.intercompanySubtitle}</p>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {t.flows.map((flow, idx) => (
              <div key={idx} className="bg-secondary/50 rounded-xl p-4">
                <div className="flex items-baseline gap-2 mb-2">
                  <span className="text-2xl font-bold text-primary">{flow.percentage}</span>
                </div>
                <h4 className="font-semibold text-sm mb-1">{flow.concept}</h4>
                <p className="text-xs text-muted-foreground mb-2">{flow.description}</p>
                <p className="text-xs font-mono text-primary">{flow.recipient}</p>
              </div>
            ))}
          </div>
        </div>
        
        {/* Compliance Badges */}
        <div className="text-center">
          <h4 className="text-sm font-semibold text-muted-foreground mb-4 flex items-center justify-center gap-2">
            <Shield className="w-4 h-4" />
            {t.complianceTitle}
          </h4>
          <div className="flex flex-wrap justify-center gap-3">
            {t.complianceBadges.map((badge, idx) => (
              <span key={idx} className="px-4 py-2 bg-chart-3/10 border border-chart-3/30 rounded-full text-sm text-chart-3 font-medium">
                {badge}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
