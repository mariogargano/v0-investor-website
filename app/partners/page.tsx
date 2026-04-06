"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Link from "next/link"
import { 
  ArrowLeft, 
  Download, 
  Building2, 
  Briefcase, 
  Handshake,
  CheckCircle,
  ArrowRight,
  Globe,
  Shield
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/lib/i18n"

const partnerTypes = [
  {
    title: "WEEK-AGENT (Brokers)",
    description: "Join our global sales network and earn commissions on every certificate sale",
    icon: Briefcase,
    benefits: [
      "4% commission on all SVC sales",
      "Digital agent card in Apple/Google Wallet",
      "Access to WEEK-CHAIN CRM platform",
      "Training and certification provided",
      "Marketing materials and support included",
    ],
    cta: "Apply as WEEK-AGENT",
  },
  {
    title: "Insurance Partners",
    description: "Provide travel and property insurance products to our certificate holders",
    icon: Shield,
    benefits: [
      "Access to qualified vacation travelers",
      "Integration with booking platform",
      "Co-branded insurance products",
      "15-year customer relationship",
      "Recurring premium opportunities",
    ],
    cta: "Insurance Partnership",
  },
  {
    title: "Travel Services",
    description: "Offer complementary travel services to WEEK-CHAIN certificate holders",
    icon: Globe,
    benefits: [
      "Car rentals and transportation",
      "Tours and experiences",
      "Concierge services",
      "Airport transfers",
      "Preferred partner status",
    ],
    cta: "Become Travel Partner",
  },
  {
    title: "Legal & Financial Services",
    description: "Provide legal, notarial, and financial services for our operations",
    icon: Building2,
    benefits: [
      "Notarial services partnership",
      "Contract management",
      "Escrow services",
      "Payment processing",
      "Multi-jurisdiction support",
    ],
    cta: "Professional Services Inquiry",
  },
]

const partnershipProcess = [
  {
    step: "01",
    title: "Initial Contact",
    description: "Submit your partnership inquiry through our form or email",
  },
  {
    step: "02",
    title: "Evaluation",
    description: "Our team reviews your profile and partnership potential",
  },
  {
    step: "03",
    title: "Proposal",
    description: "We present a customized partnership structure",
  },
  {
    step: "04",
    title: "Agreement",
    description: "Finalize terms and sign partnership agreement",
  },
  {
    step: "05",
    title: "Onboarding",
    description: "Complete training and system integration",
  },
]

export default function PartnersPage() {
  const { t } = useLanguage()
  
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main className="relative pt-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Back Link */}
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            {t("backToHome")}
          </Link>

          {/* Header */}
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <Handshake className="w-8 h-8 text-primary" />
              <h1 className="text-3xl md:text-4xl font-bold">{t("partnersBadge")}</h1>
            </div>
            <p className="text-muted-foreground text-lg max-w-2xl">
              {t("partnersDesc")}
            </p>
          </div>
          <p className="text-muted-foreground text-lg max-w-2xl">
            Join the WEEK-CHAIN ecosystem as a service provider. We partner with brokers, insurance companies, 
            travel services, and professional service firms to deliver the best experience to our certificate holders.
          </p>
        </div>

        {/* Download Pitch Deck */}
        <div className="bg-card border border-border rounded-xl p-6 mb-12 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
              <Download className="w-6 h-6 text-primary" />
            </div>
            <div>
              <h3 className="font-semibold">WEEK-CHAIN Pitch Deck</h3>
              <p className="text-sm text-muted-foreground">Complete investor & partner presentation</p>
            </div>
          </div>
          <Button className="gap-2" onClick={() => alert("Pitch Deck download will be available soon. Contact corporativo@morises.com for immediate access.")}>
            <Download className="w-4 h-4" />
            Download Pitch Deck
          </Button>
        </div>

        {/* Partner Types */}
        <div className="grid md:grid-cols-2 gap-6 mb-16">
          {partnerTypes.map((partner, index) => {
            const Icon = partner.icon
            return (
              <div key={index} className="bg-card border border-border rounded-xl p-6 hover:border-primary/30 transition-colors">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center flex-shrink-0">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">{partner.title}</h3>
                    <p className="text-sm text-muted-foreground">{partner.description}</p>
                  </div>
                </div>
                
                <ul className="space-y-2 mb-6">
                  {partner.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm">
                      <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">{benefit}</span>
                    </li>
                  ))}
                </ul>

                <Button variant="outline" className="w-full gap-2 bg-transparent">
                  {partner.cta}
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </div>
            )
          })}
        </div>

        {/* Partnership Process */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-8 text-center">Partnership Process</h2>
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            {partnershipProcess.map((item, index) => (
              <div key={index} className="flex-1 text-center">
                <div className="w-12 h-12 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center mx-auto mb-3">
                  <span className="text-sm font-bold text-primary">{item.step}</span>
                </div>
                <h4 className="font-medium mb-1">{item.title}</h4>
                <p className="text-xs text-muted-foreground">{item.description}</p>
                {index < partnershipProcess.length - 1 && (
                  <div className="hidden md:block absolute top-6 right-0 w-full h-px bg-border -z-10" />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Global Reach */}
        <div className="bg-card border border-border rounded-xl p-8 mb-12">
          <div className="flex items-center gap-3 mb-6">
            <Globe className="w-6 h-6 text-primary" />
            <h2 className="text-xl font-bold">Global Expansion</h2>
          </div>
          <p className="text-muted-foreground mb-6">
            WEEK-CHAIN is actively expanding to key vacation destinations. We are seeking strategic partners in:
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {["Mexico (Active)", "Caribbean", "Spain", "Portugal", "Italy", "Greece", "Thailand", "Bali"].map((location, idx) => (
              <div key={idx} className={`px-4 py-3 rounded-lg text-center text-sm ${idx === 0 ? "bg-primary/10 text-primary border border-primary/30" : "bg-secondary text-muted-foreground"}`}>
                {location}
              </div>
            ))}
          </div>
        </div>

        {/* Legal Notice */}
        <div className="bg-secondary/30 border border-border rounded-xl p-6 flex gap-4">
          <Shield className="w-5 h-5 text-muted-foreground flex-shrink-0 mt-0.5" />
          <div>
            <h4 className="font-medium mb-1">Partnership Due Diligence</h4>
            <p className="text-sm text-muted-foreground">
              All partnership applications are subject to verification and due diligence. 
              WEEK-CHAIN reserves the right to accept or decline partnership requests based on 
              alignment with our values and business objectives.
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <h3 className="text-xl font-bold mb-4">Ready to Partner with Us?</h3>
          <p className="text-muted-foreground mb-6">
            Contact our partnership team to discuss opportunities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="gap-2">
              Schedule a Call
              <ArrowRight className="w-4 h-4" />
            </Button>
            <Button size="lg" variant="outline" href="mailto:corporativo@morises.com">
              corporativo@morises.com
            </Button>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
