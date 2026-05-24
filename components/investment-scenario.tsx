"use client"

import { TrendingUp, Building2, Coins, Target, ArrowRight, Shield, Calculator } from "lucide-react"
import { useLanguage } from "@/lib/i18n"

const scenarioContent = {
  en: {
    badge: "Investment Scenario",
    title: "ROI Analysis",
    titleHighlight: "& Valuation",
    subtitle: "Unlike traditional tech startups (where investors only profit on exit or IPO), WEEK-CHAIN offers a Dual Upside System with real estate backing.",
    
    initialInvestment: "Initial Investment",
    participation: "Participation Acquired",
    participationDesc: "Preferred Equity (non-voting, liquidation preference) in HoldCo",
    impliedValuation: "Implied Pre-money Valuation",
    
    rule1Title: "RULE 1: Equity Multiplier",
    rule1Subtitle: "Company Value Growth",
    rule1Desc: "Your investor owns 1% of all intellectual property (Layer 1: Morises LLC), the operating SAPI in Mexico (Layer 2), and consolidated network returns.",
    
    scenarioLabel: "Commercial Scenario B",
    scenarioDesc: "Consolidated portfolio of 25 premium properties under management in tourist destinations",
    
    grossRevenue: "Annual Gross Revenue",
    grossRevenueDesc: "From SVC certificate lot placements",
    ebitda: "Estimated Ecosystem EBITDA",
    ebitdaDesc: "Operating margins + Royalties",
    valuation: "WEEK-CHAIN Valuation",
    valuationDesc: "Conservative 5x EBITDA multiple",
    
    impactTitle: "Impact on $35,000 Investment",
    impactFrom: "From",
    impactTo: "To",
    multiplier: "Multiplier",
    appreciation: "Appreciation",
    
    rule2Title: "RULE 2: Patrimonial Upside",
    rule2Subtitle: "Real Estate Backing",
    rule2Desc: "Every time WEEK-CHAIN executes a Lock-In contract and absorbs a property through a single-property SPV (using 75% of Delaware custody), HoldCo investors acquire indirect patrimonial backing on those physical assets.",
    
    pilotProperty: "Pilot Property: Villa Mungata",
    pilotCapacity: "8 PAX Luxury Villa",
    svcSale: "24 SVC Sale (2 weeks each)",
    spvCap: "SPV Cap (75%)",
    spvCapDesc: "Available for property acquisition",
    propertyValue: "Est. Property Value Absorbed",
    
    summaryTitle: "Investment Summary",
    summaryItems: [
      "Preferred equity with liquidation preference",
      "Dual income: equity appreciation + real estate backing",
      "Conservative 5x EBITDA valuation methodology",
      "Asset-light model with physical collateral",
      "Pro-rata participation in IP royalties (8%)",
      "Exit: secondary sales, strategic buyback, or IPO/M&A"
    ],
    
    disclaimer: "Past performance does not guarantee future results. Projections are based on Commercial Scenario B assumptions. Investment available only to accredited investors."
  },
  es: {
    badge: "Escenario de Inversion",
    title: "Analisis de ROI",
    titleHighlight: "y Valoracion",
    subtitle: "A diferencia de startups tecnologicas tradicionales (donde el inversionista solo gana si la empresa se vende o sale a bolsa), WEEK-CHAIN ofrece un Sistema de Doble Upside con respaldo inmobiliario.",
    
    initialInvestment: "Inversion Inicial",
    participation: "Participacion Adquirida",
    participationDesc: "Acciones Preferentes (sin voto, con preferencia de liquidacion) en HoldCo",
    impliedValuation: "Valoracion Pre-money Implicita",
    
    rule1Title: "REGLA 1: Multiplicador del Equity",
    rule1Subtitle: "Crecimiento del Valor de la Empresa",
    rule1Desc: "Tu inversionista es dueno del 1% de toda la propiedad intelectual (Capa 1: Morises LLC), de la SAPI operativa en Mexico (Capa 2) y de los rendimientos consolidados de la red.",
    
    scenarioLabel: "Escenario Comercial B",
    scenarioDesc: "Portafolio consolidado de 25 propiedades premium bajo gestion en destinos turisticos",
    
    grossRevenue: "Gross Anual Consolidado",
    grossRevenueDesc: "Por colocacion de lotes de certificados SVC",
    ebitda: "EBITDA Estimado del Ecosistema",
    ebitdaDesc: "Margenes de operacion + Regalias",
    valuation: "Valoracion WEEK-CHAIN",
    valuationDesc: "Multiplo conservador de 5x EBITDA",
    
    impactTitle: "Impacto en Inversion de $35,000",
    impactFrom: "De",
    impactTo: "A",
    multiplier: "Multiplicador",
    appreciation: "Valorizacion",
    
    rule2Title: "REGLA 2: Upside Patrimonial",
    rule2Subtitle: "Respaldo en Ladrillos",
    rule2Desc: "Cada vez que WEEK-CHAIN ejecuta un contrato Lock-In y absorbe una propiedad a traves de una SPV monopropiedad (usando el 75% de la custodia de Delaware), el inversionista de la HoldCo adquiere un respaldo patrimonial indirecto sobre esos inmuebles fisicos.",
    
    pilotProperty: "Propiedad Piloto: Villa Mungata",
    pilotCapacity: "Villa de Lujo 8 PAX",
    svcSale: "Venta de 24 SVC (2 semanas c/u)",
    spvCap: "Tope SPV (75%)",
    spvCapDesc: "Disponible para adquisicion de propiedad",
    propertyValue: "Valor Est. Propiedad Absorbida",
    
    summaryTitle: "Resumen de Inversion",
    summaryItems: [
      "Equity preferente con preferencia de liquidacion",
      "Doble ingreso: apreciacion de equity + respaldo inmobiliario",
      "Metodologia conservadora de valoracion 5x EBITDA",
      "Modelo asset-light con colateral fisico",
      "Participacion pro-rata en royalties de PI (8%)",
      "Salida: ventas secundarias, recompra estrategica, o IPO/M&A"
    ],
    
    disclaimer: "Rendimientos pasados no garantizan resultados futuros. Las proyecciones estan basadas en supuestos del Escenario Comercial B. Inversion disponible solo para inversionistas acreditados."
  },
  pt: {
    badge: "Cenario de Investimento",
    title: "Analise de ROI",
    titleHighlight: "e Avaliacao",
    subtitle: "Diferente de startups de tecnologia tradicionais (onde o investidor so lucra na saida ou IPO), WEEK-CHAIN oferece um Sistema de Duplo Upside com lastro imobiliario.",
    
    initialInvestment: "Investimento Inicial",
    participation: "Participacao Adquirida",
    participationDesc: "Acoes Preferenciais (sem voto, com preferencia de liquidacao) na HoldCo",
    impliedValuation: "Avaliacao Pre-money Implicita",
    
    rule1Title: "REGRA 1: Multiplicador do Equity",
    rule1Subtitle: "Crescimento do Valor da Empresa",
    rule1Desc: "Seu investidor e dono de 1% de toda a propriedade intelectual (Camada 1: Morises LLC), da SAPI operacional no Mexico (Camada 2) e dos retornos consolidados da rede.",
    
    scenarioLabel: "Cenario Comercial B",
    scenarioDesc: "Portfolio consolidado de 25 propriedades premium sob gestao em destinos turisticos",
    
    grossRevenue: "Receita Bruta Anual",
    grossRevenueDesc: "Da colocacao de lotes de certificados SVC",
    ebitda: "EBITDA Estimado do Ecossistema",
    ebitdaDesc: "Margens operacionais + Royalties",
    valuation: "Avaliacao WEEK-CHAIN",
    valuationDesc: "Multiplo conservador de 5x EBITDA",
    
    impactTitle: "Impacto no Investimento de $35,000",
    impactFrom: "De",
    impactTo: "Para",
    multiplier: "Multiplicador",
    appreciation: "Valorizacao",
    
    rule2Title: "REGRA 2: Upside Patrimonial",
    rule2Subtitle: "Lastro Imobiliario",
    rule2Desc: "Cada vez que WEEK-CHAIN executa um contrato Lock-In e absorve uma propriedade atraves de uma SPV mono-propriedade (usando 75% da custodia de Delaware), o investidor da HoldCo adquire lastro patrimonial indireto sobre esses imoveis fisicos.",
    
    pilotProperty: "Propriedade Piloto: Villa Mungata",
    pilotCapacity: "Villa de Luxo 8 PAX",
    svcSale: "Venda de 24 SVC (2 semanas cada)",
    spvCap: "Teto SPV (75%)",
    spvCapDesc: "Disponivel para aquisicao de propriedade",
    propertyValue: "Valor Est. Propriedade Absorvida",
    
    summaryTitle: "Resumo do Investimento",
    summaryItems: [
      "Equity preferencial com preferencia de liquidacao",
      "Dupla renda: valorizacao de equity + lastro imobiliario",
      "Metodologia conservadora de avaliacao 5x EBITDA",
      "Modelo asset-light com colateral fisico",
      "Participacao pro-rata em royalties de PI (8%)",
      "Saida: vendas secundarias, recompra estrategica, ou IPO/M&A"
    ],
    
    disclaimer: "Retornos passados nao garantem resultados futuros. Projecoes baseadas em premissas do Cenario Comercial B. Investimento disponivel apenas para investidores credenciados."
  },
  it: {
    badge: "Scenario di Investimento",
    title: "Analisi ROI",
    titleHighlight: "e Valutazione",
    subtitle: "A differenza delle startup tecnologiche tradizionali (dove l'investitore guadagna solo all'exit o IPO), WEEK-CHAIN offre un Sistema di Doppio Upside con garanzia immobiliare.",
    
    initialInvestment: "Investimento Iniziale",
    participation: "Partecipazione Acquisita",
    participationDesc: "Azioni Privilegiate (senza voto, con preferenza di liquidazione) nella HoldCo",
    impliedValuation: "Valutazione Pre-money Implicita",
    
    rule1Title: "REGOLA 1: Moltiplicatore dell'Equity",
    rule1Subtitle: "Crescita del Valore Aziendale",
    rule1Desc: "Il tuo investitore possiede l'1% di tutta la proprieta intellettuale (Livello 1: Morises LLC), della SAPI operativa in Messico (Livello 2) e dei rendimenti consolidati della rete.",
    
    scenarioLabel: "Scenario Commerciale B",
    scenarioDesc: "Portfolio consolidato di 25 proprieta premium in gestione in destinazioni turistiche",
    
    grossRevenue: "Ricavo Lordo Annuale",
    grossRevenueDesc: "Dal collocamento di lotti di certificati SVC",
    ebitda: "EBITDA Stimato dell'Ecosistema",
    ebitdaDesc: "Margini operativi + Royalties",
    valuation: "Valutazione WEEK-CHAIN",
    valuationDesc: "Multiplo conservativo di 5x EBITDA",
    
    impactTitle: "Impatto sull'Investimento di $35,000",
    impactFrom: "Da",
    impactTo: "A",
    multiplier: "Moltiplicatore",
    appreciation: "Apprezzamento",
    
    rule2Title: "REGOLA 2: Upside Patrimoniale",
    rule2Subtitle: "Garanzia Immobiliare",
    rule2Desc: "Ogni volta che WEEK-CHAIN esegue un contratto Lock-In e assorbe una proprieta attraverso una SPV mono-proprieta (usando il 75% della custodia Delaware), l'investitore della HoldCo acquisisce garanzia patrimoniale indiretta su quegli immobili fisici.",
    
    pilotProperty: "Proprieta Pilota: Villa Mungata",
    pilotCapacity: "Villa di Lusso 8 PAX",
    svcSale: "Vendita 24 SVC (2 settimane ciascuno)",
    spvCap: "Tetto SPV (75%)",
    spvCapDesc: "Disponibile per acquisizione proprieta",
    propertyValue: "Valore Est. Proprieta Assorbita",
    
    summaryTitle: "Riepilogo Investimento",
    summaryItems: [
      "Equity privilegiato con preferenza di liquidazione",
      "Doppio reddito: apprezzamento equity + garanzia immobiliare",
      "Metodologia conservativa di valutazione 5x EBITDA",
      "Modello asset-light con collaterale fisico",
      "Partecipazione pro-rata in royalties PI (8%)",
      "Exit: vendite secondarie, buyback strategico, o IPO/M&A"
    ],
    
    disclaimer: "I rendimenti passati non garantiscono risultati futuri. Proiezioni basate su ipotesi dello Scenario Commerciale B. Investimento disponibile solo per investitori accreditati."
  },
  fr: {
    badge: "Scenario d'Investissement",
    title: "Analyse ROI",
    titleHighlight: "et Valorisation",
    subtitle: "Contrairement aux startups tech traditionnelles (ou l'investisseur ne gagne qu'a la sortie ou IPO), WEEK-CHAIN offre un Systeme de Double Upside avec garantie immobiliere.",
    
    initialInvestment: "Investissement Initial",
    participation: "Participation Acquise",
    participationDesc: "Actions Privilegiees (sans vote, avec preference de liquidation) dans HoldCo",
    impliedValuation: "Valorisation Pre-money Implicite",
    
    rule1Title: "REGLE 1: Multiplicateur d'Equity",
    rule1Subtitle: "Croissance de la Valeur de l'Entreprise",
    rule1Desc: "Votre investisseur detient 1% de toute la propriete intellectuelle (Couche 1: Morises LLC), de la SAPI operationnelle au Mexique (Couche 2) et des rendements consolides du reseau.",
    
    scenarioLabel: "Scenario Commercial B",
    scenarioDesc: "Portefeuille consolide de 25 proprietes premium sous gestion dans des destinations touristiques",
    
    grossRevenue: "Chiffre d'Affaires Annuel Brut",
    grossRevenueDesc: "Du placement de lots de certificats SVC",
    ebitda: "EBITDA Estime de l'Ecosysteme",
    ebitdaDesc: "Marges operationnelles + Royalties",
    valuation: "Valorisation WEEK-CHAIN",
    valuationDesc: "Multiple conservateur de 5x EBITDA",
    
    impactTitle: "Impact sur l'Investissement de $35,000",
    impactFrom: "De",
    impactTo: "A",
    multiplier: "Multiplicateur",
    appreciation: "Appreciation",
    
    rule2Title: "REGLE 2: Upside Patrimonial",
    rule2Subtitle: "Garantie Immobiliere",
    rule2Desc: "Chaque fois que WEEK-CHAIN execute un contrat Lock-In et absorbe une propriete via une SPV mono-propriete (utilisant 75% de la garde Delaware), l'investisseur HoldCo acquiert une garantie patrimoniale indirecte sur ces biens immobiliers physiques.",
    
    pilotProperty: "Propriete Pilote: Villa Mungata",
    pilotCapacity: "Villa de Luxe 8 PAX",
    svcSale: "Vente 24 SVC (2 semaines chacun)",
    spvCap: "Plafond SPV (75%)",
    spvCapDesc: "Disponible pour acquisition de propriete",
    propertyValue: "Valeur Est. Propriete Absorbee",
    
    summaryTitle: "Resume de l'Investissement",
    summaryItems: [
      "Equity privilegie avec preference de liquidation",
      "Double revenu: appreciation equity + garantie immobiliere",
      "Methodologie conservative de valorisation 5x EBITDA",
      "Modele asset-light avec collateral physique",
      "Participation pro-rata aux royalties PI (8%)",
      "Sortie: ventes secondaires, rachat strategique, ou IPO/M&A"
    ],
    
    disclaimer: "Les performances passees ne garantissent pas les resultats futurs. Projections basees sur les hypotheses du Scenario Commercial B. Investissement disponible uniquement pour les investisseurs accredites."
  }
}

export function InvestmentScenario() {
  const { language } = useLanguage()
  const t = scenarioContent[language] || scenarioContent.en

  return (
    <section className="py-20 lg:py-28 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-accent/10 border border-accent/30 rounded-full text-accent text-sm font-medium mb-4">
            <Calculator className="w-4 h-4" />
            {t.badge}
          </span>
          <h2 className="text-3xl lg:text-5xl font-bold mb-6">
            {t.title} <span className="gradient-text">{t.titleHighlight}</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            {t.subtitle}
          </p>
        </div>

        {/* Investment Parameters */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          <div className="bg-card border border-border rounded-2xl p-6 text-center">
            <Coins className="w-8 h-8 text-primary mx-auto mb-4" />
            <p className="text-sm text-muted-foreground mb-2">{t.initialInvestment}</p>
            <p className="text-4xl font-bold text-primary">$35,000</p>
            <p className="text-xs text-muted-foreground mt-1">USD</p>
          </div>
          <div className="bg-card border border-border rounded-2xl p-6 text-center">
            <Target className="w-8 h-8 text-accent mx-auto mb-4" />
            <p className="text-sm text-muted-foreground mb-2">{t.participation}</p>
            <p className="text-4xl font-bold text-accent">1%</p>
            <p className="text-xs text-muted-foreground mt-1">{t.participationDesc}</p>
          </div>
          <div className="bg-card border border-border rounded-2xl p-6 text-center">
            <Shield className="w-8 h-8 text-chart-3 mx-auto mb-4" />
            <p className="text-sm text-muted-foreground mb-2">{t.impliedValuation}</p>
            <p className="text-4xl font-bold text-chart-3">$3.5M</p>
            <p className="text-xs text-muted-foreground mt-1">USD</p>
          </div>
        </div>

        {/* Dual Upside System */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {/* Rule 1: Equity Multiplier */}
          <div className="bg-card border border-primary/30 rounded-3xl p-8 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-3xl" />
            
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                <TrendingUp className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-primary">{t.rule1Title}</h3>
                <p className="text-sm text-muted-foreground">{t.rule1Subtitle}</p>
              </div>
            </div>

            <p className="text-sm text-muted-foreground mb-6 leading-relaxed">
              {t.rule1Desc}
            </p>

            {/* Scenario B */}
            <div className="bg-background/50 rounded-xl p-4 mb-6">
              <div className="flex items-center gap-2 mb-3">
                <span className="px-2 py-0.5 bg-primary/20 text-primary text-xs font-medium rounded">
                  {t.scenarioLabel}
                </span>
              </div>
              <p className="text-sm text-muted-foreground">{t.scenarioDesc}</p>
            </div>

            {/* Metrics */}
            <div className="space-y-4 mb-6">
              <div className="flex justify-between items-center py-3 border-b border-border">
                <div>
                  <p className="font-medium">{t.grossRevenue}</p>
                  <p className="text-xs text-muted-foreground">{t.grossRevenueDesc}</p>
                </div>
                <p className="text-xl font-bold text-foreground">$18.72M</p>
              </div>
              <div className="flex justify-between items-center py-3 border-b border-border">
                <div>
                  <p className="font-medium">{t.ebitda}</p>
                  <p className="text-xs text-muted-foreground">{t.ebitdaDesc}</p>
                </div>
                <p className="text-xl font-bold text-foreground">$2.8M</p>
              </div>
              <div className="flex justify-between items-center py-3 border-b border-border">
                <div>
                  <p className="font-medium">{t.valuation}</p>
                  <p className="text-xs text-muted-foreground">{t.valuationDesc}</p>
                </div>
                <p className="text-xl font-bold text-primary">$14M</p>
              </div>
            </div>

            {/* Impact Box */}
            <div className="bg-primary/10 border border-primary/30 rounded-xl p-5">
              <p className="text-sm font-medium text-primary mb-4">{t.impactTitle}</p>
              <div className="flex items-center justify-between">
                <div className="text-center">
                  <p className="text-xs text-muted-foreground">{t.impactFrom}</p>
                  <p className="text-2xl font-bold">$35K</p>
                </div>
                <ArrowRight className="w-6 h-6 text-primary" />
                <div className="text-center">
                  <p className="text-xs text-muted-foreground">{t.impactTo}</p>
                  <p className="text-2xl font-bold text-primary">$140K</p>
                </div>
                <div className="text-center pl-4 border-l border-primary/30">
                  <p className="text-xs text-muted-foreground">{t.multiplier}</p>
                  <p className="text-2xl font-bold text-chart-3">4x</p>
                </div>
                <div className="text-center pl-4 border-l border-primary/30">
                  <p className="text-xs text-muted-foreground">{t.appreciation}</p>
                  <p className="text-2xl font-bold text-chart-3">+300%</p>
                </div>
              </div>
            </div>
          </div>

          {/* Rule 2: Patrimonial Upside */}
          <div className="bg-card border border-accent/30 rounded-3xl p-8 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-accent/5 rounded-full blur-3xl" />
            
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center">
                <Building2 className="w-6 h-6 text-accent" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-accent">{t.rule2Title}</h3>
                <p className="text-sm text-muted-foreground">{t.rule2Subtitle}</p>
              </div>
            </div>

            <p className="text-sm text-muted-foreground mb-6 leading-relaxed">
              {t.rule2Desc}
            </p>

            {/* Pilot Property */}
            <div className="bg-background/50 rounded-xl p-4 mb-6">
              <div className="flex items-center gap-2 mb-3">
                <span className="px-2 py-0.5 bg-accent/20 text-accent text-xs font-medium rounded">
                  {t.pilotProperty}
                </span>
              </div>
              <p className="text-sm text-muted-foreground">{t.pilotCapacity}</p>
            </div>

            {/* Metrics */}
            <div className="space-y-4 mb-6">
              <div className="flex justify-between items-center py-3 border-b border-border">
                <div>
                  <p className="font-medium">{t.svcSale}</p>
                  <p className="text-xs text-muted-foreground">$32,000 x 24 = Gross</p>
                </div>
                <p className="text-xl font-bold text-foreground">$768K</p>
              </div>
              <div className="flex justify-between items-center py-3 border-b border-border">
                <div>
                  <p className="font-medium">{t.spvCap}</p>
                  <p className="text-xs text-muted-foreground">{t.spvCapDesc}</p>
                </div>
                <p className="text-xl font-bold text-foreground">$576K</p>
              </div>
              <div className="flex justify-between items-center py-3 border-b border-border">
                <div>
                  <p className="font-medium">{t.propertyValue}</p>
                  <p className="text-xs text-muted-foreground">Lock-In Contract execution</p>
                </div>
                <p className="text-xl font-bold text-accent">$500K+</p>
              </div>
            </div>

            {/* Visual representation */}
            <div className="bg-accent/10 border border-accent/30 rounded-xl p-5">
              <div className="flex items-center justify-between text-center">
                <div>
                  <p className="text-xs text-muted-foreground mb-1">SVC Sales</p>
                  <div className="w-16 h-16 rounded-full bg-accent/20 flex items-center justify-center mx-auto">
                    <Coins className="w-6 h-6 text-accent" />
                  </div>
                </div>
                <ArrowRight className="w-5 h-5 text-accent" />
                <div>
                  <p className="text-xs text-muted-foreground mb-1">SPV Cap 75%</p>
                  <div className="w-16 h-16 rounded-full bg-accent/20 flex items-center justify-center mx-auto">
                    <Shield className="w-6 h-6 text-accent" />
                  </div>
                </div>
                <ArrowRight className="w-5 h-5 text-accent" />
                <div>
                  <p className="text-xs text-muted-foreground mb-1">Property</p>
                  <div className="w-16 h-16 rounded-full bg-accent/20 flex items-center justify-center mx-auto">
                    <Building2 className="w-6 h-6 text-accent" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Summary */}
        <div className="bg-card border border-border rounded-3xl p-8">
          <h3 className="text-xl font-bold mb-6 text-center">{t.summaryTitle}</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {t.summaryItems.map((item, index) => (
              <div key={index} className="flex items-start gap-3 p-3 rounded-lg bg-background/50">
                <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-xs font-bold text-primary">{index + 1}</span>
                </div>
                <p className="text-sm text-muted-foreground">{item}</p>
              </div>
            ))}
          </div>
          
          <p className="text-xs text-muted-foreground text-center mt-6 pt-6 border-t border-border">
            {t.disclaimer}
          </p>
        </div>
      </div>
    </section>
  )
}
