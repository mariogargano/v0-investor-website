"use client"

import { 
  Building, 
  Users, 
  Heart, 
  Shield, 
  Compass, 
  Calendar, 
  Globe, 
  Wallet,
  TrendingUp,
  DollarSign,
  Percent,
  ArrowRight
} from "lucide-react"
import { useLanguage } from "@/lib/i18n"

export function EcosystemRevenue() {
  const { language } = useLanguage()
  
  const content = {
    en: {
      badge: "REaaS - Real Estate as a Service",
      title: "The WEEK-WORLD",
      titleHighlight: "Ecosystem",
      subtitle: "Each satellite generates independent revenue streams. As an equity holder, you participate in ALL of them.",
      centralHub: "Central Hub",
      hubDesc: "Platform that connects all services",
      totalRevenue: "Total Platform Revenue",
      investorShare: "Your share per 1%",
      satellites: [
        {
          name: "WEEK-CHAIN",
          icon: Globe,
          color: "text-accent",
          borderColor: "border-accent",
          revenue: "11%",
          revenueDesc: "of certificate sales",
          example: "$44,880 per 4-PAX property",
          description: "Main platform - operation & profit"
        },
        {
          name: "WEEK-MANAGEMENT",
          icon: Building,
          color: "text-foreground",
          borderColor: "border-foreground/50",
          revenue: "15-20%",
          revenueDesc: "management fee",
          example: "$8,000-12,000/year per property",
          description: "Property management, maintenance, cleaning"
        },
        {
          name: "WEEK-AGENT",
          icon: Users,
          color: "text-destructive",
          borderColor: "border-destructive",
          revenue: "4%",
          revenueDesc: "broker commission",
          example: "$20,400 per property sold",
          description: "Agent network, sales commissions"
        },
        {
          name: "WEEK-BOOKING",
          icon: Calendar,
          color: "text-chart-5",
          borderColor: "border-chart-5",
          revenue: "5-8%",
          revenueDesc: "booking fee",
          example: "$500-800 per reservation",
          description: "Reservation system, availability management"
        },
        {
          name: "WEEK-INSURANCE",
          icon: Shield,
          color: "text-primary",
          borderColor: "border-primary",
          revenue: "20-30%",
          revenueDesc: "premium commission",
          example: "$150-300 per policy",
          description: "Travel insurance, property coverage"
        },
        {
          name: "WEEK-VA-FI",
          icon: Wallet,
          color: "text-chart-4",
          borderColor: "border-chart-4",
          revenue: "2-5%",
          revenueDesc: "financing margin",
          example: "Interest on payment plans",
          description: "Financing options, payment plans"
        },
        {
          name: "WEEK-WEDDING",
          icon: Heart,
          color: "text-chart-3",
          borderColor: "border-chart-3",
          revenue: "15-25%",
          revenueDesc: "event margin",
          example: "$5,000-15,000 per event",
          description: "Weddings, honeymoons, special events"
        },
        {
          name: "WEEK-SERVICE",
          icon: Compass,
          color: "text-chart-4",
          borderColor: "border-chart-4",
          revenue: "10-20%",
          revenueDesc: "service margin",
          example: "Tours, transfers, experiences",
          description: "Tourist services, concierge"
        }
      ],
      projection: "5-Year Revenue Projection",
      year: "Year",
      properties: "Properties",
      certificates: "Certificates",
      grossRevenue: "Gross Revenue",
      platformRevenue: "Platform Revenue",
      perPercent: "Per 1% Equity"
    },
    pt: {
      badge: "REaaS - Real Estate as a Service",
      title: "O Ecossistema",
      titleHighlight: "WEEK-WORLD",
      subtitle: "Cada satelite gera fluxos de receita independentes. Como detentor de equity, voce participa de TODOS eles.",
      centralHub: "Hub Central",
      hubDesc: "Plataforma que conecta todos os servicos",
      totalRevenue: "Receita Total da Plataforma",
      investorShare: "Sua participacao por 1%",
      satellites: [
        {
          name: "WEEK-CHAIN",
          icon: Globe,
          color: "text-accent",
          borderColor: "border-accent",
          revenue: "11%",
          revenueDesc: "das vendas de certificados",
          example: "$44,880 por propriedade 4-PAX",
          description: "Plataforma principal - operacao e lucro"
        },
        {
          name: "WEEK-MANAGEMENT",
          icon: Building,
          color: "text-foreground",
          borderColor: "border-foreground/50",
          revenue: "15-20%",
          revenueDesc: "taxa de gestao",
          example: "$8,000-12,000/ano por propriedade",
          description: "Gestao de propriedades, manutencao, limpeza"
        },
        {
          name: "WEEK-AGENT",
          icon: Users,
          color: "text-destructive",
          borderColor: "border-destructive",
          revenue: "4%",
          revenueDesc: "comissao broker",
          example: "$20,400 por propriedade vendida",
          description: "Rede de agentes, comissoes de vendas"
        },
        {
          name: "WEEK-BOOKING",
          icon: Calendar,
          color: "text-chart-5",
          borderColor: "border-chart-5",
          revenue: "5-8%",
          revenueDesc: "taxa de reserva",
          example: "$500-800 por reserva",
          description: "Sistema de reservas, gestao de disponibilidade"
        },
        {
          name: "WEEK-INSURANCE",
          icon: Shield,
          color: "text-primary",
          borderColor: "border-primary",
          revenue: "20-30%",
          revenueDesc: "comissao de premio",
          example: "$150-300 por apolice",
          description: "Seguro viagem, cobertura de propriedade"
        },
        {
          name: "WEEK-VA-FI",
          icon: Wallet,
          color: "text-chart-4",
          borderColor: "border-chart-4",
          revenue: "2-5%",
          revenueDesc: "margem de financiamento",
          example: "Juros em planos de pagamento",
          description: "Opcoes de financiamento, planos de pagamento"
        },
        {
          name: "WEEK-WEDDING",
          icon: Heart,
          color: "text-chart-3",
          borderColor: "border-chart-3",
          revenue: "15-25%",
          revenueDesc: "margem de eventos",
          example: "$5,000-15,000 por evento",
          description: "Casamentos, lua de mel, eventos especiais"
        },
        {
          name: "WEEK-SERVICE",
          icon: Compass,
          color: "text-chart-4",
          borderColor: "border-chart-4",
          revenue: "10-20%",
          revenueDesc: "margem de servico",
          example: "Tours, transfers, experiencias",
          description: "Servicos turisticos, concierge"
        }
      ],
      projection: "Projecao de Receita 5 Anos",
      year: "Ano",
      properties: "Propriedades",
      certificates: "Certificados",
      grossRevenue: "Receita Bruta",
      platformRevenue: "Receita Plataforma",
      perPercent: "Por 1% Equity"
    },
    it: {
      badge: "REaaS - Real Estate as a Service",
      title: "L'Ecosistema",
      titleHighlight: "WEEK-WORLD",
      subtitle: "Ogni satellite genera flussi di entrate indipendenti. Come detentore di equity, partecipi a TUTTI.",
      centralHub: "Hub Centrale",
      hubDesc: "Piattaforma che collega tutti i servizi",
      totalRevenue: "Ricavi Totali Piattaforma",
      investorShare: "La tua quota per 1%",
      satellites: [
        {
          name: "WEEK-CHAIN",
          icon: Globe,
          color: "text-accent",
          borderColor: "border-accent",
          revenue: "11%",
          revenueDesc: "delle vendite certificati",
          example: "$44,880 per proprieta 4-PAX",
          description: "Piattaforma principale - operazione e profitto"
        },
        {
          name: "WEEK-MANAGEMENT",
          icon: Building,
          color: "text-foreground",
          borderColor: "border-foreground/50",
          revenue: "15-20%",
          revenueDesc: "fee di gestione",
          example: "$8,000-12,000/anno per proprieta",
          description: "Gestione proprieta, manutenzione, pulizia"
        },
        {
          name: "WEEK-AGENT",
          icon: Users,
          color: "text-destructive",
          borderColor: "border-destructive",
          revenue: "4%",
          revenueDesc: "commissione broker",
          example: "$20,400 per proprieta venduta",
          description: "Rete agenti, commissioni vendite"
        },
        {
          name: "WEEK-BOOKING",
          icon: Calendar,
          color: "text-chart-5",
          borderColor: "border-chart-5",
          revenue: "5-8%",
          revenueDesc: "fee prenotazione",
          example: "$500-800 per prenotazione",
          description: "Sistema prenotazioni, gestione disponibilita"
        },
        {
          name: "WEEK-INSURANCE",
          icon: Shield,
          color: "text-primary",
          borderColor: "border-primary",
          revenue: "20-30%",
          revenueDesc: "commissione premio",
          example: "$150-300 per polizza",
          description: "Assicurazione viaggio, copertura proprieta"
        },
        {
          name: "WEEK-VA-FI",
          icon: Wallet,
          color: "text-chart-4",
          borderColor: "border-chart-4",
          revenue: "2-5%",
          revenueDesc: "margine finanziamento",
          example: "Interessi su piani di pagamento",
          description: "Opzioni finanziamento, piani di pagamento"
        },
        {
          name: "WEEK-WEDDING",
          icon: Heart,
          color: "text-chart-3",
          borderColor: "border-chart-3",
          revenue: "15-25%",
          revenueDesc: "margine eventi",
          example: "$5,000-15,000 per evento",
          description: "Matrimoni, luna di miele, eventi speciali"
        },
        {
          name: "WEEK-SERVICE",
          icon: Compass,
          color: "text-chart-4",
          borderColor: "border-chart-4",
          revenue: "10-20%",
          revenueDesc: "margine servizio",
          example: "Tour, transfer, esperienze",
          description: "Servizi turistici, concierge"
        }
      ],
      projection: "Proiezione Ricavi 5 Anni",
      year: "Anno",
      properties: "Proprieta",
      certificates: "Certificati",
      grossRevenue: "Ricavi Lordi",
      platformRevenue: "Ricavi Piattaforma",
      perPercent: "Per 1% Equity"
    },
    fr: {
      badge: "REaaS - Real Estate as a Service",
      title: "L'Ecosysteme",
      titleHighlight: "WEEK-WORLD",
      subtitle: "Chaque satellite genere des flux de revenus independants. En tant que detenteur d'equity, vous participez a TOUS.",
      centralHub: "Hub Central",
      hubDesc: "Plateforme qui connecte tous les services",
      totalRevenue: "Revenu Total Plateforme",
      investorShare: "Votre part pour 1%",
      satellites: [
        {
          name: "WEEK-CHAIN",
          icon: Globe,
          color: "text-accent",
          borderColor: "border-accent",
          revenue: "11%",
          revenueDesc: "des ventes de certificats",
          example: "$44,880 par propriete 4-PAX",
          description: "Plateforme principale - operation et profit"
        },
        {
          name: "WEEK-MANAGEMENT",
          icon: Building,
          color: "text-foreground",
          borderColor: "border-foreground/50",
          revenue: "15-20%",
          revenueDesc: "frais de gestion",
          example: "$8,000-12,000/an par propriete",
          description: "Gestion de proprietes, maintenance, nettoyage"
        },
        {
          name: "WEEK-AGENT",
          icon: Users,
          color: "text-destructive",
          borderColor: "border-destructive",
          revenue: "4%",
          revenueDesc: "commission courtier",
          example: "$20,400 par propriete vendue",
          description: "Reseau d'agents, commissions de vente"
        },
        {
          name: "WEEK-BOOKING",
          icon: Calendar,
          color: "text-chart-5",
          borderColor: "border-chart-5",
          revenue: "5-8%",
          revenueDesc: "frais de reservation",
          example: "$500-800 par reservation",
          description: "Systeme de reservation, gestion disponibilite"
        },
        {
          name: "WEEK-INSURANCE",
          icon: Shield,
          color: "text-primary",
          borderColor: "border-primary",
          revenue: "20-30%",
          revenueDesc: "commission prime",
          example: "$150-300 par police",
          description: "Assurance voyage, couverture propriete"
        },
        {
          name: "WEEK-VA-FI",
          icon: Wallet,
          color: "text-chart-4",
          borderColor: "border-chart-4",
          revenue: "2-5%",
          revenueDesc: "marge financement",
          example: "Interets sur plans de paiement",
          description: "Options financement, plans de paiement"
        },
        {
          name: "WEEK-WEDDING",
          icon: Heart,
          color: "text-chart-3",
          borderColor: "border-chart-3",
          revenue: "15-25%",
          revenueDesc: "marge evenements",
          example: "$5,000-15,000 par evenement",
          description: "Mariages, lune de miel, evenements speciaux"
        },
        {
          name: "WEEK-SERVICE",
          icon: Compass,
          color: "text-chart-4",
          borderColor: "border-chart-4",
          revenue: "10-20%",
          revenueDesc: "marge service",
          example: "Tours, transferts, experiences",
          description: "Services touristiques, conciergerie"
        }
      ],
      projection: "Projection Revenus 5 Ans",
      year: "Annee",
      properties: "Proprietes",
      certificates: "Certificats",
      grossRevenue: "Revenus Bruts",
      platformRevenue: "Revenus Plateforme",
      perPercent: "Par 1% Equity"
    }
  }
  
  const t = content[language as keyof typeof content] || content.en
  
  const projectionData = [
    { year: 1, properties: 10, certificates: 480, grossRevenue: 4080000, platformRevenue: 448800 },
    { year: 2, properties: 25, certificates: 1200, grossRevenue: 10200000, platformRevenue: 1122000 },
    { year: 3, properties: 50, certificates: 2400, grossRevenue: 20400000, platformRevenue: 2244000 },
    { year: 4, properties: 100, certificates: 4800, grossRevenue: 40800000, platformRevenue: 4488000 },
    { year: 5, properties: 200, certificates: 9600, grossRevenue: 81600000, platformRevenue: 8976000 },
  ]

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/20">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/30 mb-6">
            <Globe className="w-4 h-4 text-primary" />
            <span className="text-sm font-bold text-primary">{t.badge}</span>
          </div>
          <h2 className="text-3xl lg:text-5xl font-bold mb-4">
            {t.title} <span className="gradient-text">{t.titleHighlight}</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            {t.subtitle}
          </p>
        </div>
        
        {/* Central Hub Visual */}
        <div className="relative mb-16">
          <div className="flex justify-center mb-8">
            <div className="relative">
              <div className="absolute inset-0 bg-accent/20 rounded-full blur-3xl animate-pulse" />
              <div className="relative w-32 h-32 rounded-full bg-gradient-to-br from-primary via-accent to-chart-3 p-[3px]">
                <div className="w-full h-full rounded-full bg-card flex items-center justify-center">
                  <div className="text-center">
                    <Globe className="w-8 h-8 text-accent mx-auto mb-1" />
                    <p className="text-sm font-bold gradient-text">WEEK-WORLD</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <p className="text-center text-muted-foreground">{t.hubDesc}</p>
        </div>
        
        {/* Revenue Satellites Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
          {t.satellites.map((satellite, idx) => {
            const IconComponent = satellite.icon
            return (
              <div 
                key={idx} 
                className={`bg-card border-2 ${satellite.borderColor} rounded-2xl p-5 hover:scale-105 transition-transform`}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className={`w-10 h-10 rounded-xl bg-card border ${satellite.borderColor} flex items-center justify-center`}>
                    <IconComponent className={`w-5 h-5 ${satellite.color}`} />
                  </div>
                  <h4 className={`font-bold ${satellite.color}`}>{satellite.name}</h4>
                </div>
                <p className="text-sm text-muted-foreground mb-4">{satellite.description}</p>
                <div className="bg-secondary/50 rounded-lg p-3">
                  <div className="flex items-baseline gap-2 mb-1">
                    <span className="text-2xl font-bold text-foreground">{satellite.revenue}</span>
                    <span className="text-xs text-muted-foreground">{satellite.revenueDesc}</span>
                  </div>
                  <p className="text-xs text-muted-foreground">{satellite.example}</p>
                </div>
              </div>
            )
          })}
        </div>
        
        {/* 5-Year Projection Table */}
        <div className="bg-card border border-border rounded-2xl overflow-hidden">
          <div className="p-6 border-b border-border">
            <h3 className="text-xl font-semibold flex items-center gap-2">
              <TrendingUp className="w-5 h-5 text-primary" />
              {t.projection}
            </h3>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-muted/30">
                  <th className="text-left px-6 py-4 text-xs font-mono uppercase tracking-wider text-muted-foreground">{t.year}</th>
                  <th className="text-right px-6 py-4 text-xs font-mono uppercase tracking-wider text-muted-foreground">{t.properties}</th>
                  <th className="text-right px-6 py-4 text-xs font-mono uppercase tracking-wider text-muted-foreground">{t.certificates}</th>
                  <th className="text-right px-6 py-4 text-xs font-mono uppercase tracking-wider text-muted-foreground">{t.grossRevenue}</th>
                  <th className="text-right px-6 py-4 text-xs font-mono uppercase tracking-wider text-muted-foreground">{t.platformRevenue}</th>
                  <th className="text-right px-6 py-4 text-xs font-mono uppercase tracking-wider text-primary">{t.perPercent}</th>
                </tr>
              </thead>
              <tbody>
                {projectionData.map((row) => (
                  <tr key={row.year} className="border-t border-border hover:bg-muted/20">
                    <td className="px-6 py-4 font-semibold">{row.year}</td>
                    <td className="px-6 py-4 text-right text-muted-foreground">{row.properties}</td>
                    <td className="px-6 py-4 text-right text-muted-foreground">{row.certificates.toLocaleString()}</td>
                    <td className="px-6 py-4 text-right">${(row.grossRevenue / 1000000).toFixed(1)}M</td>
                    <td className="px-6 py-4 text-right font-semibold">${(row.platformRevenue / 1000).toLocaleString()}K</td>
                    <td className="px-6 py-4 text-right font-bold text-primary">${(row.platformRevenue / 100 / 1000).toFixed(1)}K</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  )
}
