"use client"

import { useState } from "react"
import { Users, Calendar, Check } from "lucide-react"
import { useLanguage } from "@/lib/i18n"

// Prices from official documentation - base prices for 1 week per PAX
// Multiple weeks have proportional pricing with slight discount
const certificatesByPax: Record<number, { weeks: number; price: number; target: string; features: string[] }[]> = {
  2: [
    { weeks: 1, price: 3500, target: "Couples & Honeymoons", features: ["7 nights per year", "15-year validity", "$0 annual fees", "Premium destinations"] },
    { weeks: 2, price: 6500, target: "Extended Getaways", features: ["14 nights per year", "15-year validity", "$0 annual fees", "Flexible dates"] },
    { weeks: 3, price: 9500, target: "Frequent Travelers", features: ["21 nights per year", "15-year validity", "$0 annual fees", "Priority booking"] },
    { weeks: 4, price: 12500, target: "Maximum Flexibility", features: ["28 nights per year", "15-year validity", "$0 annual fees", "VIP benefits"] },
  ],
  4: [
    { weeks: 1, price: 5500, target: "Small Families", features: ["7 nights per year", "15-year validity", "$0 annual fees", "Family-friendly properties"] },
    { weeks: 2, price: 10500, target: "Family Vacations", features: ["14 nights per year", "15-year validity", "$0 annual fees", "Kid amenities"] },
    { weeks: 3, price: 15000, target: "Extended Stays", features: ["21 nights per year", "15-year validity", "$0 annual fees", "Multi-destination"] },
    { weeks: 4, price: 19500, target: "Full Access", features: ["28 nights per year", "15-year validity", "$0 annual fees", "Premium support"] },
  ],
  6: [
    { weeks: 1, price: 8500, target: "Large Families", features: ["7 nights per year", "15-year validity", "$0 annual fees", "Spacious accommodations"] },
    { weeks: 2, price: 16000, target: "Family Gatherings", features: ["14 nights per year", "15-year validity", "$0 annual fees", "Group spaces"] },
    { weeks: 3, price: 23500, target: "Multi-Gen Travel", features: ["21 nights per year", "15-year validity", "$0 annual fees", "Private villas"] },
    { weeks: 4, price: 30500, target: "Ultimate Family", features: ["28 nights per year", "15-year validity", "$0 annual fees", "Concierge service"] },
  ],
  8: [
    { weeks: 1, price: 12000, target: "Friend Groups", features: ["7 nights per year", "15-year validity", "$0 annual fees", "Group-ready spaces"] },
    { weeks: 2, price: 22500, target: "Group Getaways", features: ["14 nights per year", "15-year validity", "$0 annual fees", "Event spaces"] },
    { weeks: 3, price: 33000, target: "Extended Groups", features: ["21 nights per year", "15-year validity", "$0 annual fees", "Multiple units"] },
    { weeks: 4, price: 43000, target: "Corporate Retreats", features: ["28 nights per year", "15-year validity", "$0 annual fees", "Business amenities"] },
  ],
  10: [
    { weeks: 1, price: 16000, target: "Large Groups", features: ["7 nights per year", "15-year validity", "$0 annual fees", "Villa access"] },
    { weeks: 2, price: 30000, target: "Events & Weddings", features: ["14 nights per year", "15-year validity", "$0 annual fees", "Event planning"] },
    { weeks: 3, price: 44000, target: "Corporate Events", features: ["21 nights per year", "15-year validity", "$0 annual fees", "Full-service"] },
    { weeks: 4, price: 57000, target: "Ultra Premium", features: ["28 nights per year", "15-year validity", "$0 annual fees", "White glove service"] },
  ],
}

const paxColors: Record<number, string> = {
  2: "from-primary to-primary/70",
  4: "from-accent to-accent/70",
  6: "from-chart-4 to-chart-4/70",
  8: "from-chart-3 to-chart-3/70",
  10: "from-chart-5 to-chart-5/70",
}

export function PricingTable() {
  const [selectedPax, setSelectedPax] = useState<number>(4)
  const { t, language } = useLanguage()

  const selectedCertificates = certificatesByPax[selectedPax]
  const color = paxColors[selectedPax]

  const getWeekText = (weeks: number) => {
    if (weeks === 1) return `1 ${t("pricingWeek")}/${t("pricingYear")}`
    return `${weeks} ${t("pricingWeeks")}/${t("pricingYear")}`
  }

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

        {/* PAX Selector Tabs */}
        <div className="flex justify-center gap-2 mb-10">
          {[2, 4, 6, 8, 10].map((pax) => (
            <button
              key={pax}
              onClick={() => setSelectedPax(pax)}
              className={`px-6 py-3 rounded-xl text-sm font-semibold transition-all ${
                selectedPax === pax
                  ? "bg-primary text-primary-foreground shadow-lg"
                  : "bg-card border border-border text-muted-foreground hover:border-primary/50 hover:text-foreground"
              }`}
            >
              <span className="flex items-center gap-2">
                <Users className="w-4 h-4" />
                {pax} PAX
              </span>
            </button>
          ))}
        </div>

        {/* Certificates Grid for Selected PAX */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {selectedCertificates.map((cert, index) => (
            <div
              key={index}
              className={`relative bg-card border rounded-2xl p-6 transition-all duration-300 hover:border-primary/50 hover:shadow-lg hover:-translate-y-1 ${
                index === 1 ? "border-primary ring-2 ring-primary/20" : "border-border"
              }`}
            >
              {index === 1 && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-bold">
                  {t("pricingMostPopular")}
                </div>
              )}

              <div
                className={`w-14 h-14 rounded-xl bg-gradient-to-br ${color} flex items-center justify-center mb-4`}
              >
                <Users className="w-7 h-7 text-primary-foreground" />
              </div>

              <div className="flex items-center gap-2 text-muted-foreground mb-2">
                <Calendar className="w-4 h-4" />
                <span className="font-medium">{getWeekText(cert.weeks)}</span>
              </div>

              <div className="text-4xl font-bold gradient-text mb-1">${cert.price.toLocaleString()}</div>
              <p className="text-sm text-muted-foreground mb-4">{t("pricingOneTime")}</p>

              <p className="text-sm font-medium text-foreground mb-4">{cert.target}</p>

              <ul className="space-y-2 mb-6">
                {cert.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Check className="w-4 h-4 text-primary flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>

              <div className="pt-4 border-t border-border">
                <p className="text-xs text-muted-foreground text-center">
                  {selectedPax} {t("pricingGuestCapacity")}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Distribution Breakdown */}
        <div className="mt-16 bg-card border border-border rounded-3xl p-8">
          <h3 className="text-xl font-bold text-foreground mb-2 text-center">
            {t("distributionTitle")}
          </h3>
          <p className="text-sm text-muted-foreground text-center mb-6">{t("distributionSubtitle")}</p>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 rounded-2xl bg-chart-4/10 flex items-center justify-center mx-auto mb-3">
                <span className="text-2xl font-bold text-chart-4">80%</span>
              </div>
              <p className="font-bold text-foreground">{t("distributionOwner")}</p>
              <p className="text-sm text-muted-foreground">{t("distributionOwnerDesc")}</p>
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
