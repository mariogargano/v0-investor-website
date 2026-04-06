"use client"

import { PageLayout } from "@/components/page-layout"
import { FinancialProjections } from "@/components/financial-projections"
import { PortfolioStrategy } from "@/components/portfolio-strategy"
import { TimelineSection } from "@/components/timeline-section"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"
import { useLanguage } from "@/lib/i18n"

export default function ProyeccionesPage() {
  const { t } = useLanguage()
  
  return (
    <PageLayout>
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            {t("backToHome")}
          </Link>

          <div className="mb-12">
            <span className="inline-block px-4 py-1.5 rounded-full bg-chart-2/10 text-chart-2 text-sm font-medium mb-4">
              {t("cardProjectionsDesc")}
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Análisis de <span className="gradient-text">Rentabilidad</span>
            </h1>
            <p className="text-muted-foreground text-lg max-w-3xl">
              Proyecciones detalladas a 5 años, estrategia de portfolio y timeline de inversión con hitos clave.
            </p>
          </div>
        </div>
      </div>

      <FinancialProjections />
      <PortfolioStrategy />
      <TimelineSection />
    </PageLayout>
  )
}
