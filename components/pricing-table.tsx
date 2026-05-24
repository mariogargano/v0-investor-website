"use client"

import { useState } from "react"
import { Users, Calendar, Check, Home, Building2, Castle, Crown } from "lucide-react"
import { useLanguage } from "@/lib/i18n"

// Official SVC Pricing from WEEK-CHAIN documentation
// Certificate term: 15 years, $0 annual maintenance fees
// Property categories by PAX capacity

interface PropertyType {
  id: string
  nameKey: string
  pax: number
  icon: React.ElementType
  price1Week: number
  price2Weeks: number
  savings: number
  grossRevenue: number
  spvCap: number
  color: string
}

const propertyTypes: PropertyType[] = [
  {
    id: "studio",
    nameKey: "studioPremium",
    pax: 2,
    icon: Home,
    price1Week: 6500,
    price2Weeks: 12000,
    savings: 1000,
    grossRevenue: 288000,
    spvCap: 216000,
    color: "from-primary to-primary/70",
  },
  {
    id: "executive",
    nameKey: "executiveCondo",
    pax: 4,
    icon: Building2,
    price1Week: 9000,
    price2Weeks: 16000,
    savings: 2000,
    grossRevenue: 384000,
    spvCap: 288000,
    color: "from-accent to-accent/70",
  },
  {
    id: "villa",
    nameKey: "familyVilla",
    pax: 6,
    icon: Castle,
    price1Week: 13500,
    price2Weeks: 24000,
    savings: 3000,
    grossRevenue: 576000,
    spvCap: 432000,
    color: "from-chart-4 to-chart-4/70",
  },
  {
    id: "luxury",
    nameKey: "luxuryResidence",
    pax: 8,
    icon: Crown,
    price1Week: 18000,
    price2Weeks: 32000,
    savings: 4000,
    grossRevenue: 768000,
    spvCap: 576000,
    color: "from-chart-3 to-chart-3/70",
  },
]

const propertyNames = {
  en: {
    studioPremium: "Premium Studio",
    executiveCondo: "Executive Condo",
    familyVilla: "Family Villa",
    luxuryResidence: "Luxury Residence",
    premiumTier: "Premium Tier",
  },
  es: {
    studioPremium: "Estudio Premium",
    executiveCondo: "Condominio Ejecutivo",
    familyVilla: "Villa Familiar",
    luxuryResidence: "Residencia de Lujo",
    premiumTier: "Tier Premium",
  },
  pt: {
    studioPremium: "Estúdio Premium",
    executiveCondo: "Condomínio Executivo",
    familyVilla: "Villa Familiar",
    luxuryResidence: "Residência de Luxo",
    premiumTier: "Tier Premium",
  },
  it: {
    studioPremium: "Studio Premium",
    executiveCondo: "Condominio Executive",
    familyVilla: "Villa Familiare",
    luxuryResidence: "Residenza di Lusso",
    premiumTier: "Tier Premium",
  },
  fr: {
    studioPremium: "Studio Premium",
    executiveCondo: "Condo Exécutif",
    familyVilla: "Villa Familiale",
    luxuryResidence: "Résidence de Luxe",
    premiumTier: "Tier Premium",
  },
}

export function PricingTable() {
  const [selectedType, setSelectedType] = useState<string>("executive")
  const { t, language } = useLanguage()
  
  const names = propertyNames[language] || propertyNames.en
  const selectedProperty = propertyTypes.find(p => p.id === selectedType) || propertyTypes[1]
  const IconComponent = selectedProperty.icon

  return (
    <section id="certificados" className="py-20 lg:py-32 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1.5 bg-primary/10 border border-primary/30 rounded-full text-primary text-sm font-medium mb-4">
            {t("pricingBadge")}
          </span>
          <h2 className="text-3xl lg:text-5xl font-bold mb-6">
            {t("pricingTitle")} <span className="gradient-text">{t("pricingTitleHighlight")}</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t("pricingDesc")}
          </p>
        </div>

        {/* Property Type Selector */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {propertyTypes.map((property) => {
            const PropIcon = property.icon
            return (
              <button
                key={property.id}
                onClick={() => setSelectedType(property.id)}
                className={`px-5 py-3 rounded-xl text-sm font-semibold transition-all ${
                  selectedType === property.id
                    ? "bg-primary text-primary-foreground shadow-lg"
                    : "bg-card border border-border text-muted-foreground hover:border-primary/50 hover:text-foreground"
                }`}
              >
                <span className="flex items-center gap-2">
                  <PropIcon className="w-4 h-4" />
                  {names[property.nameKey as keyof typeof names]}
                  <span className="text-xs opacity-70">({property.pax} PAX)</span>
                </span>
              </button>
            )
          })}
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* 1 Week Card */}
          <div className="bg-card border border-border rounded-2xl p-8 transition-all hover:border-primary/30 hover:shadow-lg">
            <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${selectedProperty.color} flex items-center justify-center mb-6`}>
              <IconComponent className="w-8 h-8 text-primary-foreground" />
            </div>
            
            <div className="flex items-center gap-2 text-muted-foreground mb-3">
              <Calendar className="w-4 h-4" />
              <span className="font-medium">1 {t("pricingWeek")} / {t("pricingYear")}</span>
            </div>
            
            <div className="text-5xl font-bold gradient-text mb-2">
              ${selectedProperty.price1Week.toLocaleString()}
            </div>
            <p className="text-sm text-muted-foreground mb-6">{t("pricingOneTime")} • 15 {t("pricingYear")}s</p>
            
            <ul className="space-y-3 mb-6">
              <li className="flex items-center gap-3 text-sm text-muted-foreground">
                <Check className="w-4 h-4 text-primary flex-shrink-0" />
                7 {language === "es" ? "noches por año" : language === "pt" ? "noites por ano" : language === "it" ? "notti all'anno" : language === "fr" ? "nuits par an" : "nights per year"}
              </li>
              <li className="flex items-center gap-3 text-sm text-muted-foreground">
                <Check className="w-4 h-4 text-primary flex-shrink-0" />
                {language === "es" ? "Vigencia 15 años" : language === "pt" ? "Validade 15 anos" : language === "it" ? "Validità 15 anni" : language === "fr" ? "Validité 15 ans" : "15-year validity"}
              </li>
              <li className="flex items-center gap-3 text-sm text-muted-foreground">
                <Check className="w-4 h-4 text-primary flex-shrink-0" />
                $0 {language === "es" ? "cuotas anuales" : language === "pt" ? "taxas anuais" : language === "it" ? "quote annuali" : language === "fr" ? "frais annuels" : "annual fees"}
              </li>
              <li className="flex items-center gap-3 text-sm text-muted-foreground">
                <Check className="w-4 h-4 text-primary flex-shrink-0" />
                {language === "es" ? "Destinos premium" : language === "pt" ? "Destinos premium" : language === "it" ? "Destinazioni premium" : language === "fr" ? "Destinations premium" : "Premium destinations"}
              </li>
            </ul>
            
            <div className="pt-4 border-t border-border flex items-center justify-between">
              <span className="text-sm text-muted-foreground flex items-center gap-2">
                <Users className="w-4 h-4" />
                {selectedProperty.pax} {t("pricingGuestCapacity")}
              </span>
            </div>
          </div>

          {/* 2 Weeks Card - Bundle */}
          <div className="relative bg-card border-2 border-primary rounded-2xl p-8 transition-all hover:shadow-xl ring-2 ring-primary/20">
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground px-4 py-1 rounded-full text-xs font-bold">
              {t("pricingMostPopular")} - {language === "es" ? "AHORRA" : language === "pt" ? "ECONOMIZE" : language === "it" ? "RISPARMIA" : language === "fr" ? "ÉCONOMISEZ" : "SAVE"} ${selectedProperty.savings.toLocaleString()}
            </div>
            
            <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${selectedProperty.color} flex items-center justify-center mb-6`}>
              <IconComponent className="w-8 h-8 text-primary-foreground" />
            </div>
            
            <div className="flex items-center gap-2 text-muted-foreground mb-3">
              <Calendar className="w-4 h-4" />
              <span className="font-medium">2 {t("pricingWeeks")} / {t("pricingYear")}</span>
            </div>
            
            <div className="text-5xl font-bold gradient-text mb-2">
              ${selectedProperty.price2Weeks.toLocaleString()}
            </div>
            <p className="text-sm text-muted-foreground mb-6">{t("pricingOneTime")} • 15 {t("pricingYear")}s</p>
            
            <ul className="space-y-3 mb-6">
              <li className="flex items-center gap-3 text-sm text-muted-foreground">
                <Check className="w-4 h-4 text-primary flex-shrink-0" />
                14 {language === "es" ? "noches por año" : language === "pt" ? "noites por ano" : language === "it" ? "notti all'anno" : language === "fr" ? "nuits par an" : "nights per year"}
              </li>
              <li className="flex items-center gap-3 text-sm text-muted-foreground">
                <Check className="w-4 h-4 text-primary flex-shrink-0" />
                {language === "es" ? "Vigencia 15 años" : language === "pt" ? "Validade 15 anos" : language === "it" ? "Validità 15 anni" : language === "fr" ? "Validité 15 ans" : "15-year validity"}
              </li>
              <li className="flex items-center gap-3 text-sm text-muted-foreground">
                <Check className="w-4 h-4 text-primary flex-shrink-0" />
                $0 {language === "es" ? "cuotas anuales" : language === "pt" ? "taxas anuais" : language === "it" ? "quote annuali" : language === "fr" ? "frais annuels" : "annual fees"}
              </li>
              <li className="flex items-center gap-3 text-sm text-muted-foreground">
                <Check className="w-4 h-4 text-primary flex-shrink-0" />
                {language === "es" ? "Fechas flexibles" : language === "pt" ? "Datas flexíveis" : language === "it" ? "Date flessibili" : language === "fr" ? "Dates flexibles" : "Flexible dates"}
              </li>
              <li className="flex items-center gap-3 text-sm text-chart-3 font-medium">
                <Check className="w-4 h-4 text-chart-3 flex-shrink-0" />
                {language === "es" ? "Descuento de paquete incluido" : language === "pt" ? "Desconto de pacote incluído" : language === "it" ? "Sconto pacchetto incluso" : language === "fr" ? "Remise forfait incluse" : "Bundle discount included"}
              </li>
            </ul>
            
            <div className="pt-4 border-t border-border flex items-center justify-between">
              <span className="text-sm text-muted-foreground flex items-center gap-2">
                <Users className="w-4 h-4" />
                {selectedProperty.pax} {t("pricingGuestCapacity")}
              </span>
              <span className="text-xs text-chart-3 font-semibold">
                -{Math.round((selectedProperty.savings / (selectedProperty.price1Week * 2)) * 100)}% vs 2x single
              </span>
            </div>
          </div>
        </div>

        {/* Revenue Model for Investors */}
        <div className="mt-16 bg-card border border-border rounded-3xl p-8">
          <h3 className="text-xl font-bold text-foreground mb-2 text-center">
            {language === "es" ? "Modelo de Recaudación por Propiedad" : language === "pt" ? "Modelo de Arrecadação por Propriedade" : language === "it" ? "Modello di Raccolta per Proprietà" : language === "fr" ? "Modèle de Collecte par Propriété" : "Revenue Model per Property"}
          </h3>
          <p className="text-sm text-muted-foreground text-center mb-8">
            {language === "es" ? "Capacidad comercial basada en 24 certificados de 2 semanas (48 semanas SVC + 4 semanas B2B)" : 
             language === "pt" ? "Capacidade comercial baseada em 24 certificados de 2 semanas (48 semanas SVC + 4 semanas B2B)" :
             language === "it" ? "Capacità commerciale basata su 24 certificati da 2 settimane (48 settimane SVC + 4 settimane B2B)" :
             language === "fr" ? "Capacité commerciale basée sur 24 certificats de 2 semaines (48 semaines SVC + 4 semaines B2B)" :
             "Commercial capacity based on 24 certificates of 2 weeks (48 SVC weeks + 4 B2B weeks)"}
          </p>
          
          <div className="grid md:grid-cols-4 gap-6">
            {propertyTypes.map((property) => {
              const PropIcon = property.icon
              return (
                <div key={property.id} className={`text-center p-4 rounded-xl border ${selectedType === property.id ? 'border-primary bg-primary/5' : 'border-border'}`}>
                  <PropIcon className={`w-8 h-8 mx-auto mb-3 ${selectedType === property.id ? 'text-primary' : 'text-muted-foreground'}`} />
                  <p className="font-bold text-foreground mb-1">{names[property.nameKey as keyof typeof names]}</p>
                  <p className="text-xs text-muted-foreground mb-3">{property.pax} PAX</p>
                  <div className="space-y-2 text-sm">
                    <div>
                      <p className="text-muted-foreground">{language === "es" ? "Recaudación Bruta" : "Gross Revenue"}</p>
                      <p className="font-bold text-chart-3">${property.grossRevenue.toLocaleString()}</p>
                    </div>
                    <div>
                      <p className="text-muted-foreground">{language === "es" ? "Tope SPV (75%)" : "SPV Cap (75%)"}</p>
                      <p className="font-semibold text-foreground">${property.spvCap.toLocaleString()}</p>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* Distribution Breakdown */}
        <div className="mt-8 bg-card border border-border rounded-3xl p-8">
          <h3 className="text-xl font-bold text-foreground mb-2 text-center">
            {t("distributionTitle")}
          </h3>
          <p className="text-sm text-muted-foreground text-center mb-6">{t("distributionSubtitle")}</p>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 rounded-2xl bg-chart-4/10 flex items-center justify-center mx-auto mb-3">
                <span className="text-2xl font-bold text-chart-4">75%</span>
              </div>
              <p className="font-bold text-foreground">{t("distributionOwner")}</p>
              <p className="text-sm text-muted-foreground">{language === "es" ? "Tope máximo de compra SPV" : "Maximum SPV purchase cap"}</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 rounded-2xl bg-chart-3/10 flex items-center justify-center mx-auto mb-3">
                <span className="text-2xl font-bold text-chart-3">10%</span>
              </div>
              <p className="font-bold text-foreground">{t("distributionNotarial")}</p>
              <p className="text-sm text-muted-foreground">{t("distributionNotarialDesc")}</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-3">
                <span className="text-2xl font-bold text-primary">11%</span>
              </div>
              <p className="font-bold text-foreground">{t("distributionChain")}</p>
              <p className="text-sm text-muted-foreground">{t("distributionChainDesc")}</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 rounded-2xl bg-accent/10 flex items-center justify-center mx-auto mb-3">
                <span className="text-2xl font-bold text-accent">4%</span>
              </div>
              <p className="font-bold text-foreground">{t("distributionAgent")}</p>
              <p className="text-sm text-muted-foreground">{t("distributionAgentDesc")}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
