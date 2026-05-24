"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { InvestmentOffer } from "@/components/investment-offer"
import { EcosystemRevenue } from "@/components/ecosystem-revenue"
import { BusinessFlow } from "@/components/business-flow"
import { CorporateStructure } from "@/components/corporate-structure"
import { DownloadPitchDeck } from "@/components/download-pitch-deck"
import { NDAStatusIndicator } from "@/components/protected-download"
import Link from "next/link"
import { useLanguage } from "@/lib/i18n"
import { 
  ArrowRight, 
  Shield, 
  FileText,
  Handshake,
  Globe,
  TrendingUp,
} from "lucide-react"
import { Button } from "@/components/ui/button"

export default function InvestorPortal() {
  const { t } = useLanguage()
  return (
    <div className="min-h-screen bg-background text-foreground relative">
      {/* Subtle background */}
      <div className="fixed inset-0 bg-grid pointer-events-none opacity-30" />
      <div className="fixed top-0 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[200px] pointer-events-none" />

      <Header />
      <main className="relative pt-24">
        {/* Hero Section - Clean & Elegant */}
        <section className="py-16 md:py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/30 mb-6">
                <span className="text-xs font-mono text-primary">SEED ROUND 2026</span>
                <span className="w-1.5 h-1.5 rounded-full bg-chart-3 animate-pulse" />
                <span className="text-xs text-chart-3 font-medium">Q2 PRE-LAUNCH</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight text-balance">
                {t("heroTitle")} <br className="hidden md:block" />
                <span className="gradient-text">{t("heroTitleHighlight")}</span>
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                {t("heroSubtitle")}
                <span className="text-primary font-semibold"> {t("heroSubtitleHighlight")}</span>
                {t("heroSubtitleEnd")}
              </p>
            </div>

            {/* Key Investment Metrics */}
            <div className="bg-card border border-border rounded-2xl p-8 max-w-4xl mx-auto mb-12">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                <div>
                  <p className="text-3xl md:text-4xl font-bold text-primary">$35K</p>
                  <p className="text-sm text-muted-foreground mt-1">per 1% equity</p>
                </div>
                <div className="border-l border-border pl-6">
                  <p className="text-3xl md:text-4xl font-bold">$3.5M</p>
                  <p className="text-sm text-muted-foreground mt-1">pre-money valuation</p>
                </div>
                <div className="border-l border-border pl-6">
                  <p className="text-3xl md:text-4xl font-bold text-accent">9</p>
                  <p className="text-sm text-muted-foreground mt-1">revenue streams</p>
                </div>
                <div className="border-l border-border pl-6">
                  <p className="text-3xl md:text-4xl font-bold text-chart-3">8%</p>
                  <p className="text-sm text-muted-foreground mt-1">IP royalty</p>
                </div>
              </div>
              <div className="mt-6 pt-6 border-t border-border text-center">
                <p className="text-xs text-muted-foreground">
                  <span className="font-semibold text-foreground">REaaS Model</span> — Real Estate as a Service | Asset-Light | 15-Year Certificates | 48+4 Weeks/Property
                </p>
              </div>
            </div>

            {/* Download Pitch Deck */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-4">
              <DownloadPitchDeck size="lg" variant="default" />
              <Button size="lg" variant="outline" asChild>
                <Link href="/invertir" className="gap-2">
                  <TrendingUp className="w-4 h-4" />
                  {t("ctaButton")}
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>
            </div>
            
            {/* NDA Status */}
            <div className="flex justify-center">
              <NDAStatusIndicator />
            </div>
          </div>
        </section>

        {/* Navigation Cards */}
        <section className="py-12 px-4 sm:px-6 lg:px-8 border-y border-border">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-4 gap-4">
              <Link 
                href="/modelo" 
                className="bg-card border border-border rounded-xl p-5 hover:border-primary/50 transition-all group"
              >
                <FileText className="w-6 h-6 text-primary mb-3" />
                <h3 className="font-semibold mb-1 group-hover:text-primary transition-colors">{t("cardModel")}</h3>
                <p className="text-sm text-muted-foreground">{t("cardModelDesc")}</p>
                <div className="flex items-center gap-1 text-xs text-primary mt-3 opacity-0 group-hover:opacity-100 transition-opacity">
                  View details <ArrowRight className="w-3 h-3" />
                </div>
              </Link>
              
              <Link 
                href="/ecosistema" 
                className="bg-card border border-border rounded-xl p-5 hover:border-primary/50 transition-all group"
              >
                <Globe className="w-6 h-6 text-primary mb-3" />
                <h3 className="font-semibold mb-1 group-hover:text-primary transition-colors">{t("cardEcosystem")}</h3>
                <p className="text-sm text-muted-foreground">{t("cardEcosystemDesc")}</p>
                <div className="flex items-center gap-1 text-xs text-primary mt-3 opacity-0 group-hover:opacity-100 transition-opacity">
                  View details <ArrowRight className="w-3 h-3" />
                </div>
              </Link>
              
              <Link 
                href="/partners" 
                className="bg-card border border-border rounded-xl p-5 hover:border-primary/50 transition-all group"
              >
                <Handshake className="w-6 h-6 text-primary mb-3" />
                <h3 className="font-semibold mb-1 group-hover:text-primary transition-colors">{t("navPartners")}</h3>
                <p className="text-sm text-muted-foreground">Service provider opportunities</p>
                <div className="flex items-center gap-1 text-xs text-primary mt-3 opacity-0 group-hover:opacity-100 transition-opacity">
                  View details <ArrowRight className="w-3 h-3" />
                </div>
              </Link>
              
              <Link 
                href="/invertir" 
                className="bg-primary/10 border border-primary/30 rounded-xl p-5 hover:bg-primary/20 transition-all group"
              >
                <TrendingUp className="w-6 h-6 text-primary mb-3" />
                <h3 className="font-semibold mb-1 text-primary">Invest Now</h3>
                <p className="text-sm text-muted-foreground">Complete the investment process</p>
                <div className="flex items-center gap-1 text-xs text-primary mt-3">
                  Get started <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            </div>
          </div>
        </section>

        {/* Investment Details Anchor */}
        <div id="investment-details" />

        {/* Investment Offer Section */}
        <InvestmentOffer />

        {/* Corporate Structure */}
        <CorporateStructure />

        {/* Ecosystem Revenue */}
        <EcosystemRevenue />

        {/* Business Flow */}
        <BusinessFlow />

        {/* Legal Disclaimer */}
        <section className="py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="bg-card border border-border rounded-xl p-6 flex gap-4">
              <Shield className="w-6 h-6 text-muted-foreground flex-shrink-0" />
              <div>
                <h4 className="font-semibold mb-2">Compliance de No-Inversión (SEC/CNBV)</h4>
                <p className="text-sm text-muted-foreground leading-relaxed mb-3">
                  Los Smart Vacational Certificates (SVCs) son productos de <strong>consumo vacacional prepagado</strong>, 
                  NO instrumentos de inversión, valores, ni fracciones inmobiliarias. El usuario adquiere un derecho 
                  de hospedaje flotante sin expectativa de ganancias, dividendos o rendimientos financieros.
                </p>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  La oportunidad de inversión presentada en este Data Room es exclusivamente en <strong>equity de MORISES LLC</strong> (HoldCo, Wyoming) 
                  como entidad corporativa. Todas las inversiones están sujetas a los términos del acuerdo de accionistas 
                  y las regulaciones de valores aplicables. Solo para inversionistas acreditados.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Ready to Join WEEK-CHAIN?</h2>
            <p className="text-muted-foreground mb-8">
              Complete the investment process with digital signature via EASYLAW.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link href="/invertir" className="gap-2">
                  Start Investment Process
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href="mailto:corporativo@morises.com">Contact Us</a>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
