"use client"

import { 
  Percent, 
  DollarSign, 
  TrendingUp, 
  Building2, 
  Globe, 
  Shield,
  CheckCircle,
  ArrowRight,
  Sparkles
} from "lucide-react"
import { useLanguage } from "@/lib/i18n"

export function InvestmentOffer() {
  const { language } = useLanguage()
  
  const content = {
    en: {
      badge: "Seed Round 2026",
      title: "Acquire",
      titleHighlight: "1% Equity",
      subtitle: "Join WEEK-CHAIN as a strategic partner in the PropTech revolution. Asset-light model with 9 integrated revenue streams.",
      priceLabel: "Price per 1%",
      price: "$35,000 USD",
      valuationLabel: "Pre-money Valuation",
      valuation: "$3.5M USD",
      minInvestment: "Minimum Investment",
      minAmount: "1% ($35,000)",
      maxInvestment: "Available Equity",
      maxAmount: "Up to 15%",
      roundStatus: "Seed Round Status",
      roundPhase: "Q2 2026 - Pre-Launch",
      whatYouGet: "What You Get",
      benefits: [
        "Direct equity participation in HoldCo (MORISES LLC, Wyoming)",
        "Pro-rata share of 8% IP royalties on all SAPI sales",
        "Participation in 9 satellite revenue streams (WEEK-WORLD)",
        "Quarterly financial reports and investor updates",
        "Priority access to Series A and future funding rounds",
        "Exit: secondary sales, strategic buyback, or IPO/M&A"
      ],
      investorProfile: "Ideal Investor Profile",
      profiles: [
        { label: "Angel Investors", desc: "Individual accredited investors seeking PropTech/travel tech exposure" },
        { label: "Family Offices", desc: "Long-term capital seeking real estate-backed recurring revenues" },
        { label: "Venture Capital", desc: "Early-stage funds with travel, hospitality, or PropTech thesis" },
        { label: "Strategic Partners", desc: "Real estate developers, hotel chains, OTAs, travel platforms" }
      ],
      disclaimer: "This investment opportunity is available only to accredited investors as defined by SEC regulations. WEEK-CHAIN SVCs are consumer products, NOT investment instruments. Equity investment is in the corporate entity only."
    },
    es: {
      badge: "Ronda Semilla 2026",
      title: "Adquiere",
      titleHighlight: "1% de Equity",
      subtitle: "Únete a WEEK-CHAIN como socio estratégico en la revolución PropTech. Modelo asset-light con 9 flujos de ingresos integrados.",
      priceLabel: "Precio por 1%",
      price: "$35,000 USD",
      valuationLabel: "Valuación Pre-money",
      valuation: "$3.5M USD",
      minInvestment: "Inversión Mínima",
      minAmount: "1% ($35,000)",
      maxInvestment: "Equity Disponible",
      maxAmount: "Hasta 15%",
      roundStatus: "Estatus de Ronda Semilla",
      roundPhase: "Q2 2026 - Pre-Lanzamiento",
      whatYouGet: "Lo Que Obtienes",
      benefits: [
        "Participación directa en equity del HoldCo (MORISES LLC, Wyoming)",
        "Participación pro-rata del 8% de royalties de PI sobre ventas SAPI",
        "Participación en 9 flujos de ingresos satélite (WEEK-WORLD)",
        "Reportes financieros trimestrales y actualizaciones para inversionistas",
        "Acceso prioritario a Serie A y futuras rondas",
        "Salida: ventas secundarias, recompra estratégica, o IPO/M&A"
      ],
      investorProfile: "Perfil del Inversionista Ideal",
      profiles: [
        { label: "Inversionistas Ángel", desc: "Inversionistas acreditados buscando exposición PropTech/travel tech" },
        { label: "Family Offices", desc: "Capital a largo plazo buscando ingresos recurrentes respaldados por bienes raíces" },
        { label: "Venture Capital", desc: "Fondos early-stage con tesis en viajes, hospitalidad o PropTech" },
        { label: "Socios Estratégicos", desc: "Desarrolladores inmobiliarios, cadenas hoteleras, OTAs, plataformas de viaje" }
      ],
      disclaimer: "Esta oportunidad de inversión está disponible solo para inversionistas acreditados según las regulaciones de la SEC. Los SVCs de WEEK-CHAIN son productos de consumo, NO instrumentos de inversión. La inversión en equity es solo en la entidad corporativa."
    },
    pt: {
      badge: "Rodada Semente 2026",
      title: "Adquira",
      titleHighlight: "1% de Equity",
      subtitle: "Junte-se a WEEK-CHAIN como parceiro estratégico na revolução PropTech. Modelo asset-light com 9 fluxos de receita integrados.",
      priceLabel: "Preço por 1%",
      price: "$35,000 USD",
      valuationLabel: "Avaliação Pre-money",
      valuation: "$3.5M USD",
      minInvestment: "Investimento Mínimo",
      minAmount: "1% ($35,000)",
      maxInvestment: "Equity Disponível",
      maxAmount: "Até 15%",
      roundStatus: "Status da Rodada Semente",
      roundPhase: "Q2 2026 - Pré-Lançamento",
      whatYouGet: "O Que Você Recebe",
      benefits: [
        "Participação direta em equity na HoldCo (MORISES LLC, Wyoming)",
        "Participação pro-rata de 8% de royalties de PI sobre vendas SAPI",
        "Participação em 9 fluxos de receita satélite (WEEK-WORLD)",
        "Relatórios financeiros trimestrais e atualizações para investidores",
        "Acesso prioritário à Série A e futuras rodadas",
        "Saída: vendas secundárias, recompra estratégica, ou IPO/M&A"
      ],
      investorProfile: "Perfil do Investidor Ideal",
      profiles: [
        { label: "Investidores Anjo", desc: "Investidores credenciados buscando exposição PropTech/travel tech" },
        { label: "Family Offices", desc: "Capital de longo prazo buscando receitas recorrentes lastreadas em imóveis" },
        { label: "Venture Capital", desc: "Fundos early-stage com tese em viagens, hospitalidade ou PropTech" },
        { label: "Parceiros Estratégicos", desc: "Desenvolvedores imobiliários, redes hoteleiras, OTAs, plataformas de viagem" }
      ],
      disclaimer: "Esta oportunidade de investimento está disponível apenas para investidores credenciados conforme regulamentações da SEC. Os SVCs da WEEK-CHAIN são produtos de consumo, NÃO instrumentos de investimento."
    },
    it: {
      badge: "Round Seed 2026",
      title: "Acquisisci",
      titleHighlight: "1% di Equity",
      subtitle: "Unisciti a WEEK-CHAIN come partner strategico nella rivoluzione PropTech. Modello asset-light con 9 flussi di ricavi integrati.",
      priceLabel: "Prezzo per 1%",
      price: "$35,000 USD",
      valuationLabel: "Valutazione Pre-money",
      valuation: "$3.5M USD",
      minInvestment: "Investimento Minimo",
      minAmount: "1% ($35,000)",
      maxInvestment: "Equity Disponibile",
      maxAmount: "Fino al 15%",
      roundStatus: "Status Round Seed",
      roundPhase: "Q2 2026 - Pre-Lancio",
      whatYouGet: "Cosa Ottieni",
      benefits: [
        "Partecipazione diretta in equity nella HoldCo (MORISES LLC, Wyoming)",
        "Quota pro-rata dell'8% di royalties IP sulle vendite SAPI",
        "Partecipazione a 9 flussi di ricavi satellite (WEEK-WORLD)",
        "Report finanziari trimestrali e aggiornamenti per investitori",
        "Accesso prioritario alla Serie A e future round",
        "Exit: vendite secondarie, buyback strategico, o IPO/M&A"
      ],
      investorProfile: "Profilo Investitore Ideale",
      profiles: [
        { label: "Angel Investors", desc: "Investitori accreditati che cercano esposizione PropTech/travel tech" },
        { label: "Family Offices", desc: "Capitale a lungo termine che cerca ricavi ricorrenti garantiti da immobili" },
        { label: "Venture Capital", desc: "Fondi early-stage con tesi travel, hospitality o PropTech" },
        { label: "Partner Strategici", desc: "Sviluppatori immobiliari, catene alberghiere, OTA, piattaforme viaggio" }
      ],
      disclaimer: "Questa opportunità di investimento è disponibile solo per investitori accreditati secondo le normative SEC. Gli SVC di WEEK-CHAIN sono prodotti di consumo, NON strumenti di investimento."
    },
    fr: {
      badge: "Round Seed 2026",
      title: "Acquérir",
      titleHighlight: "1% d'Equity",
      subtitle: "Rejoignez WEEK-CHAIN en tant que partenaire stratégique dans la révolution PropTech. Modèle asset-light avec 9 flux de revenus intégrés.",
      priceLabel: "Prix pour 1%",
      price: "$35,000 USD",
      valuationLabel: "Valorisation Pre-money",
      valuation: "$3.5M USD",
      minInvestment: "Investissement Minimum",
      minAmount: "1% ($35,000)",
      maxInvestment: "Equity Disponible",
      maxAmount: "Jusqu'à 15%",
      roundStatus: "Statut Round Seed",
      roundPhase: "Q2 2026 - Pré-Lancement",
      whatYouGet: "Ce Que Vous Obtenez",
      benefits: [
        "Participation directe en equity dans HoldCo (MORISES LLC, Wyoming)",
        "Part pro-rata de 8% de royalties PI sur les ventes SAPI",
        "Participation à 9 flux de revenus satellite (WEEK-WORLD)",
        "Rapports financiers trimestriels et mises à jour investisseurs",
        "Accès prioritaire à la Série A et futures rondes",
        "Sortie: ventes secondaires, rachat stratégique, ou IPO/M&A"
      ],
      investorProfile: "Profil Investisseur Idéal",
      profiles: [
        { label: "Business Angels", desc: "Investisseurs accrédités cherchant une exposition PropTech/travel tech" },
        { label: "Family Offices", desc: "Capital long terme cherchant des revenus récurrents garantis par l'immobilier" },
        { label: "Venture Capital", desc: "Fonds early-stage avec thèse voyage, hospitalité ou PropTech" },
        { label: "Partenaires Stratégiques", desc: "Promoteurs immobiliers, chaînes hôtelières, OTA, plateformes voyage" }
      ],
      disclaimer: "Cette opportunité d'investissement n'est disponible que pour les investisseurs accrédités selon les réglementations SEC. Les SVC de WEEK-CHAIN sont des produits de consommation, PAS des instruments d'investissement."
    }
  }
  
  const t = content[language as keyof typeof content] || content.en

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background to-secondary/20">
      <div className="max-w-6xl mx-auto">
        {/* Main Offer Card */}
        <div className="relative overflow-hidden rounded-3xl bg-card border border-border p-8 lg:p-12 mb-12">
          {/* Background Decoration */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
          
          <div className="relative z-10">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/30 mb-8">
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">{t.badge}</span>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left: Main Offer */}
              <div>
                <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
                  {t.title} <span className="gradient-text">{t.titleHighlight}</span>
                </h2>
                <p className="text-lg text-muted-foreground mb-8">
                  {t.subtitle}
                </p>
                
                {/* Price Highlight */}
                <div className="bg-gradient-to-r from-primary/20 via-accent/20 to-chart-3/20 rounded-2xl p-6 border border-primary/30">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-14 h-14 rounded-xl bg-primary/20 flex items-center justify-center">
                      <Percent className="w-7 h-7 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">{t.priceLabel}</p>
                      <p className="text-3xl font-bold text-foreground">{t.price}</p>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4 pt-4 border-t border-border/50">
                    <div>
                      <p className="text-xs text-muted-foreground mb-1">{t.valuationLabel}</p>
                      <p className="text-lg font-semibold text-foreground">{t.valuation}</p>
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground mb-1">{t.maxInvestment}</p>
                      <p className="text-lg font-semibold text-foreground">{t.maxAmount}</p>
                    </div>
                  </div>
                  <div className="pt-4 border-t border-border/50 mt-4">
                    <p className="text-xs text-muted-foreground mb-1">{t.roundStatus}</p>
                    <p className="text-sm font-semibold text-primary">{t.roundPhase}</p>
                  </div>
                </div>
              </div>
              
              {/* Right: Benefits */}
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-6 flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-primary" />
                  {t.whatYouGet}
                </h3>
                <ul className="space-y-4">
                  {t.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <ArrowRight className="w-3 h-3 text-primary" />
                      </div>
                      <span className="text-muted-foreground">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
        
        {/* Investor Profiles */}
        <div className="mb-12">
          <h3 className="text-2xl font-semibold text-foreground mb-8 text-center">{t.investorProfile}</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {t.profiles.map((profile, idx) => (
              <div key={idx} className="bg-card border border-border rounded-xl p-5 hover:border-primary/50 transition-colors">
                <h4 className="font-semibold text-foreground mb-2">{profile.label}</h4>
                <p className="text-sm text-muted-foreground">{profile.desc}</p>
              </div>
            ))}
          </div>
        </div>
        
        {/* Disclaimer */}
        <p className="text-xs text-muted-foreground text-center max-w-3xl mx-auto">
          {t.disclaimer}
        </p>
      </div>
    </section>
  )
}
