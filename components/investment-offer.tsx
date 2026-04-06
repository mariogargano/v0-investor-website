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
      badge: "Investment Opportunity",
      title: "Acquire",
      titleHighlight: "1% Equity",
      subtitle: "Join WEEK-CHAIN as a strategic partner in the PropTech revolution",
      priceLabel: "Price per 1%",
      price: "$35,000 USD",
      valuationLabel: "Pre-money Valuation",
      valuation: "$3.5M USD",
      minInvestment: "Minimum Investment",
      minAmount: "1% ($35,000)",
      maxInvestment: "Available Equity",
      maxAmount: "Up to 15%",
      whatYouGet: "What You Get",
      benefits: [
        "Direct equity participation in Morises LLC (Wyoming, USA)",
        "Share of recurring revenues from all WEEK-WORLD subsidiaries",
        "Voting rights proportional to your stake",
        "Quarterly financial reports and investor updates",
        "Priority access to future funding rounds",
        "Exit opportunities: secondary sales, buyback, or IPO"
      ],
      investorProfile: "Ideal Investor Profile",
      profiles: [
        { label: "Angel Investors", desc: "Individual accredited investors seeking PropTech exposure" },
        { label: "Family Offices", desc: "Long-term capital seeking real estate-backed returns" },
        { label: "Venture Capital", desc: "Early-stage funds with travel/hospitality thesis" },
        { label: "Strategic Partners", desc: "Real estate developers, hotel chains, travel platforms" }
      ],
      disclaimer: "This investment opportunity is available only to accredited investors as defined by applicable securities regulations. Past performance does not guarantee future results."
    },
    pt: {
      badge: "Oportunidade de Investimento",
      title: "Adquira",
      titleHighlight: "1% de Equity",
      subtitle: "Junte-se a WEEK-CHAIN como parceiro estrategico na revolucao PropTech",
      priceLabel: "Preco por 1%",
      price: "$35,000 USD",
      valuationLabel: "Avaliacao Pre-money",
      valuation: "$3.5M USD",
      minInvestment: "Investimento Minimo",
      minAmount: "1% ($35,000)",
      maxInvestment: "Equity Disponivel",
      maxAmount: "Ate 15%",
      whatYouGet: "O Que Voce Recebe",
      benefits: [
        "Participacao direta em equity na Morises LLC (Wyoming, EUA)",
        "Participacao nas receitas recorrentes de todas as subsidiarias WEEK-WORLD",
        "Direitos de voto proporcionais a sua participacao",
        "Relatorios financeiros trimestrais e atualizacoes para investidores",
        "Acesso prioritario a futuras rodadas de financiamento",
        "Oportunidades de saida: vendas secundarias, recompra ou IPO"
      ],
      investorProfile: "Perfil do Investidor Ideal",
      profiles: [
        { label: "Investidores Anjo", desc: "Investidores credenciados buscando exposicao PropTech" },
        { label: "Family Offices", desc: "Capital de longo prazo buscando retornos imobiliarios" },
        { label: "Venture Capital", desc: "Fundos early-stage com tese em viagens/hospitalidade" },
        { label: "Parceiros Estrategicos", desc: "Desenvolvedores imobiliarios, redes hoteleiras" }
      ],
      disclaimer: "Esta oportunidade de investimento esta disponivel apenas para investidores credenciados conforme definido pelas regulamentacoes de valores mobiliarios aplicaveis."
    },
    it: {
      badge: "Opportunita di Investimento",
      title: "Acquisisci",
      titleHighlight: "1% di Equity",
      subtitle: "Unisciti a WEEK-CHAIN come partner strategico nella rivoluzione PropTech",
      priceLabel: "Prezzo per 1%",
      price: "$35,000 USD",
      valuationLabel: "Valutazione Pre-money",
      valuation: "$3.5M USD",
      minInvestment: "Investimento Minimo",
      minAmount: "1% ($35,000)",
      maxInvestment: "Equity Disponibile",
      maxAmount: "Fino al 15%",
      whatYouGet: "Cosa Ottieni",
      benefits: [
        "Partecipazione diretta in equity in Morises LLC (Wyoming, USA)",
        "Quota dei ricavi ricorrenti da tutte le sussidiarie WEEK-WORLD",
        "Diritti di voto proporzionali alla tua partecipazione",
        "Report finanziari trimestrali e aggiornamenti per investitori",
        "Accesso prioritario ai futuri round di finanziamento",
        "Opportunita di exit: vendite secondarie, buyback o IPO"
      ],
      investorProfile: "Profilo Investitore Ideale",
      profiles: [
        { label: "Angel Investors", desc: "Investitori accreditati che cercano esposizione PropTech" },
        { label: "Family Offices", desc: "Capitale a lungo termine che cerca rendimenti immobiliari" },
        { label: "Venture Capital", desc: "Fondi early-stage con tesi travel/hospitality" },
        { label: "Partner Strategici", desc: "Sviluppatori immobiliari, catene alberghiere" }
      ],
      disclaimer: "Questa opportunita di investimento e disponibile solo per investitori accreditati come definito dalle normative sui titoli applicabili."
    },
    fr: {
      badge: "Opportunite d'Investissement",
      title: "Acquerir",
      titleHighlight: "1% d'Equity",
      subtitle: "Rejoignez WEEK-CHAIN en tant que partenaire strategique dans la revolution PropTech",
      priceLabel: "Prix pour 1%",
      price: "$35,000 USD",
      valuationLabel: "Valorisation Pre-money",
      valuation: "$3.5M USD",
      minInvestment: "Investissement Minimum",
      minAmount: "1% ($35,000)",
      maxInvestment: "Equity Disponible",
      maxAmount: "Jusqu'a 15%",
      whatYouGet: "Ce Que Vous Obtenez",
      benefits: [
        "Participation directe en equity dans Morises LLC (Wyoming, USA)",
        "Part des revenus recurrents de toutes les filiales WEEK-WORLD",
        "Droits de vote proportionnels a votre participation",
        "Rapports financiers trimestriels et mises a jour investisseurs",
        "Acces prioritaire aux futurs tours de financement",
        "Opportunites de sortie: ventes secondaires, rachat ou IPO"
      ],
      investorProfile: "Profil Investisseur Ideal",
      profiles: [
        { label: "Business Angels", desc: "Investisseurs accredites cherchant une exposition PropTech" },
        { label: "Family Offices", desc: "Capital long terme cherchant des rendements immobiliers" },
        { label: "Venture Capital", desc: "Fonds early-stage avec these voyage/hospitalite" },
        { label: "Partenaires Strategiques", desc: "Promoteurs immobiliers, chaines hotelieres" }
      ],
      disclaimer: "Cette opportunite d'investissement n'est disponible que pour les investisseurs accredites tels que definis par les reglementations applicables."
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
