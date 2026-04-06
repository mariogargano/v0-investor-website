import { DollarSign, Target, TrendingUp, Globe, Sparkles, Users, BarChart3 } from "lucide-react"

export function KeyDifferentiators() {
  const differentiators = [
    {
      icon: DollarSign,
      title: "Zero Capital Required",
      description:
        "Users finance property acquisition through SVC sales. WEEK-CHAIN generates profits from operations while accumulating capital for purchase.",
      stat: "$0",
      statLabel: "Initial Investment",
      color: "primary",
    },
    {
      icon: Target,
      title: "Data-Driven Acquisition",
      description: "Know demand before buying. Only acquire properties with 60%+ occupancy and 4.0★+ ratings on Airbnb.",
      stat: "60%+",
      statLabel: "Min. Occupancy",
      color: "chart-4",
    },
    {
      icon: TrendingUp,
      title: "Accelerated Timeline",
      description:
        "3 years vs 10-15 years of traditional financing. Scale portfolio 3-5x faster than competitors.",
      stat: "3 Years",
      statLabel: "to Ownership",
      color: "chart-3",
    },
    {
      icon: Users,
      title: "Captive User Base",
      description:
        "Certificate holders commit for 15 years. No competition from Airbnb/Booking. Predictable occupancy.",
      stat: "15 Years",
      statLabel: "User Commitment",
      color: "accent",
    },
    {
      icon: Globe,
      title: "Global Destination Network",
      description:
        "Expanding across Mexico, Europe and beyond. Riviera Maya, Los Cabos, Puerto Vallarta, and growing.",
      stat: "5+",
      statLabel: "Target Countries",
      color: "chart-5",
    },
    {
      icon: BarChart3,
      title: "Sustainable Margin",
      description:
        "25% margin on each SVC sale (11% WEEK-CHAIN + 10% notarial reserve + 4% WEEK-AGENT). Recurring revenue from satellites.",
      stat: "25%",
      statLabel: "Per SVC Margin",
      color: "chart-4",
    },
  ]

  return (
    <section className="py-20 lg:py-32 bg-secondary/20 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-30" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/30 mb-6">
            <Sparkles size={14} className="text-primary" />
            <span className="text-sm text-primary font-medium">Competitive Advantages</span>
          </div>
          <h2 className="text-3xl lg:text-5xl font-bold mb-6">
            Why This Model <span className="gradient-text">Wins</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Structural advantages that make WEEK-CHAIN a unique opportunity in vacation real estate.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {differentiators.map((item, index) => {
            const Icon = item.icon
            return (
              <div
                key={index}
                className={`group bg-card border border-border rounded-2xl p-6 transition-all hover:border-${item.color}/50 hover:-translate-y-1`}
              >
                <div className="flex items-start justify-between mb-4">
                  <div
                    className={`w-12 h-12 rounded-xl bg-${item.color}/10 flex items-center justify-center group-hover:scale-110 transition-transform`}
                  >
                    <Icon className={`w-6 h-6 text-${item.color}`} />
                  </div>
                  <div className="text-right">
                    <p className={`text-2xl font-bold text-${item.color}`}>{item.stat}</p>
                    <p className="text-xs text-muted-foreground">{item.statLabel}</p>
                  </div>
                </div>
                <h4 className="font-bold text-lg text-foreground mb-2">{item.title}</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
