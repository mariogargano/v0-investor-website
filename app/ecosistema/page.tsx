"use client"

import { PageLayout } from "@/components/page-layout"
import { EcosystemSection } from "@/components/ecosystem-section"
import { DestinationsSection } from "@/components/destinations-section"
import { KeyDifferentiators } from "@/components/key-differentiators"
import { DownloadPitchDeckBanner } from "@/components/download-pitch-deck"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"
import { useLanguage } from "@/lib/i18n"

export default function EcosistemaPage() {
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
              {t("ecosystemBadge")}
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              {t("ecosystemTitle")} <span className="gradient-text">{t("ecosystemTitleHighlight")}</span> {t("ecosystemTitleEnd")}
            </h1>
            <p className="text-muted-foreground text-lg max-w-3xl">
              {t("ecosystemDesc")}
            </p>
          </div>

          <div className="mb-12">
            <DownloadPitchDeckBanner />
          </div>
        </div>
      </div>

      <EcosystemSection />
      <DestinationsSection />
      <KeyDifferentiators />
    </PageLayout>
  )
}
