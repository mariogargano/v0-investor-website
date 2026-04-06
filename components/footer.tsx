"use client"

import Link from "next/link"
import { ExternalLink, Linkedin, Twitter, Mail, MapPin, Shield, Globe } from "lucide-react"
import { useLanguage } from "@/lib/i18n"

export function Footer() {
  const { t } = useLanguage()
  
  return (
    <footer className="border-t border-border bg-card/50">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <img src="/images/week-chain-logo.png" alt="Week-Chain Logo" className="h-12 w-12 rounded-full" />
              <div>
                <h3 className="text-xl font-bold gradient-text">WEEK-CHAIN</h3>
                <p className="text-xs text-muted-foreground">REaaS - Real Estate as a Service</p>
              </div>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed mb-6">
              PropTech platform revolutionizing vacation real estate through Smart Vacational Certificates as a service.
            </p>
            <div className="flex gap-3">
              <a
                href="https://linkedin.com/company/week-chain"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-secondary flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-secondary/80 transition-colors"
              >
                <Linkedin size={16} />
              </a>
              <a
                href="https://twitter.com/weekchain"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-secondary flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-secondary/80 transition-colors"
              >
                <Twitter size={16} />
              </a>
            </div>
          </div>

          {/* Legal Entities */}
          <div>
            <h4 className="font-bold text-foreground mb-4">Legal Entities</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                MORISES LLC (USA)
              </li>
              <li className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-accent rounded-full" />
                WEEK-CHAIN SAPI de CV (Mexico)
              </li>
              <li className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-chart-4 rounded-full" />
                WEEK-WORLD Platform
              </li>
            </ul>
          </div>

          {/* Data Room */}
          <div>
            <h4 className="font-bold text-foreground mb-4">Data Room</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/modelo" className="text-muted-foreground hover:text-foreground transition-colors">
                  {t("navModel")}
                </Link>
              </li>
              <li>
                <Link href="/ecosistema" className="text-muted-foreground hover:text-foreground transition-colors">
                  {t("navEcosystem")}
                </Link>
              </li>
              <li>
                <Link href="/partners" className="text-muted-foreground hover:text-foreground transition-colors">
                  {t("navPartners")}
                </Link>
              </li>
              <li>
                <Link href="/invertir" className="text-primary hover:text-primary/80 transition-colors font-medium">
                  {t("navInvestors")}
                </Link>
              </li>
              <li>
                <a
                  href="https://www.week-chain.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1"
                >
                  {t("viewProduct")} <ExternalLink size={12} />
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-foreground mb-4">{t("footerContact")}</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li className="flex items-center gap-2">
                <Mail size={14} className="text-primary" />
                corporativo@morises.com
              </li>
              <li className="flex items-center gap-2">
                <MapPin size={14} className="text-accent" />
                Mexico City, MX
              </li>
              <li className="flex items-center gap-2">
                <Globe size={14} className="text-chart-3" />
                week-chain.com
              </li>
            </ul>
            <div className="mt-6 p-4 bg-secondary/50 rounded-xl">
              <p className="text-xs text-muted-foreground">
                All Data Room access is logged and monitored.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">© 2026 WEEK-CHAIN | {t("footerRights")}</p>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2 px-3 py-1.5 bg-chart-4/10 border border-chart-4/30 rounded-full">
                <div className="w-2 h-2 bg-chart-4 rounded-full animate-pulse" />
                <span className="text-xs font-medium text-chart-4">CONFIDENTIAL DOCUMENT</span>
              </div>
              <span className="text-xs text-muted-foreground">Accredited Investors Only</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
