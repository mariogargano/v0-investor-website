"use client"

import { useState, useEffect } from "react"
import { Menu, X, Lock, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { LanguageSelector } from "@/components/language-selector"
import { useLanguage } from "@/lib/i18n"

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()
  const { t } = useLanguage()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems = [
    { label: t("navDataRoom"), href: "/data-room", highlight: true },
    { label: t("navModel"), href: "/modelo" },
    { label: t("navEcosystem"), href: "/ecosistema" },
    { label: t("navPartners"), href: "/partners" },
    { label: t("navInvest"), href: "/invertir" },
  ]

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "glass border-b border-border/50" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <img src="/images/week-chain-logo.png" alt="Week-Chain Logo" className="h-10 w-10 lg:h-11 lg:w-11 rounded-full" />
            <div>
              <h1 className="text-lg font-semibold text-foreground">WEEK-CHAIN</h1>
              <p className="text-[10px] text-muted-foreground hidden sm:block tracking-wide">
                Data Room
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-6">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`text-sm transition-colors relative group ${
                  item.highlight 
                    ? "px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 font-medium"
                    : pathname === item.href 
                      ? "text-primary font-medium" 
                      : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {item.label}
                {!item.highlight && (
                  <span
                    className={`absolute -bottom-1 left-0 h-px bg-primary transition-all ${
                      pathname === item.href ? "w-full" : "w-0 group-hover:w-full"
                    }`}
                  />
                )}
              </Link>
            ))}
          </nav>

          {/* CTA & Mobile Menu */}
          <div className="flex items-center gap-3">
            <div className="hidden md:flex items-center gap-2 px-3 py-1.5 rounded-full bg-chart-4/10 border border-chart-4/30">
              <Lock size={12} className="text-chart-4" />
              <span className="text-[11px] font-medium text-chart-4">{t("confidential")}</span>
            </div>
            <a
              href="https://www.week-chain.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden lg:flex items-center gap-1.5 text-xs text-muted-foreground hover:text-foreground transition-colors"
            >
              <ExternalLink size={12} />
              {t("viewProduct")}
            </a>
            <div className="hidden md:block">
              <LanguageSelector />
            </div>
            <button className="lg:hidden text-foreground p-2" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden glass border-t border-border/50">
          <nav className="flex flex-col p-4 gap-1">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`py-3 px-4 rounded-lg transition-colors ${
                  pathname === item.href ? "bg-primary/10 text-primary" : "text-foreground hover:bg-secondary/50"
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <div className="pt-4 mt-2 border-t border-border">
              <Button className="w-full bg-primary text-primary-foreground">Solicitar Acceso</Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}
