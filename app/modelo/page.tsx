"use client"

import { PageLayout } from "@/components/page-layout"
import { ProblemSolution } from "@/components/problem-solution"
import { HowItWorks } from "@/components/how-it-works"
import { PricingTable } from "@/components/pricing-table"
import { CertificateShowcase } from "@/components/certificate-showcase"
import { WeekServices } from "@/components/week-services"
import { DownloadPitchDeckBanner } from "@/components/download-pitch-deck"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"
import { useLanguage } from "@/lib/i18n"

export default function ModeloPage() {
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

          <div className="mb-8">
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              {t("businessModelBadge")}
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              {t("businessModelTitle")} <span className="gradient-text">{t("businessModelTitleHighlight")}</span>
            </h1>
            <p className="text-muted-foreground text-lg max-w-3xl">
              {t("businessModelDesc")}
            </p>
          </div>

          <div className="mb-12">
            <DownloadPitchDeckBanner />
          </div>
        </div>
      </div>

      <ProblemSolution />
      <HowItWorks />
      <PricingTable />
      <WeekServices />
      <CertificateShowcase />
    </PageLayout>
  )
}
