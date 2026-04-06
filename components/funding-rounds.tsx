import { CheckCircle, Clock, ArrowRight, Rocket } from "lucide-react"

export function FundingRounds() {
  const rounds = [
    {
      name: "Pre-Seed",
      status: "completed",
      amount: "$150,000",
      equity: "15%",
      valuation: "$1M",
      date: "Q4 2025",
      purpose: "Desarrollo de plataforma MVP y validación de mercado",
      investors: "Founders + Friends & Family",
      milestones: ["Plataforma web operativa", "Marca y legal constituido", "Primer pipeline de 5 propiedades"],
    },
    {
      name: "Seed",
      status: "current",
      amount: "$500,000",
      equity: "20%",
      valuation: "$2.5M",
      date: "Q1-Q2 2026",
      purpose: "Primeras adquisiciones y lanzamiento comercial",
      investors: "Angels + Family Offices",
      milestones: ["10 propiedades en portfolio", "480 certificados vendidos", "Break-even operativo"],
    },
    {
      name: "Series A",
      status: "planned",
      amount: "$2-3M",
      equity: "15-20%",
      valuation: "$12-15M",
      date: "Q1 2027",
      purpose: "Expansión regional y escalamiento",
      investors: "VCs + Strategic Partners",
      milestones: ["30 propiedades activas", "1,440+ certificados vendidos", "$1.5M+ revenue anual"],
    },
  ]

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "completed":
        return <CheckCircle className="w-5 h-5 text-primary" />
      case "current":
        return <Rocket className="w-5 h-5 text-chart-4" />
      default:
        return <Clock className="w-5 h-5 text-muted-foreground" />
    }
  }

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "completed":
        return <span className="px-3 py-1 rounded-full bg-primary/20 text-primary text-xs font-medium">Completada</span>
      case "current":
        return (
          <span className="px-3 py-1 rounded-full bg-chart-4/20 text-chart-4 text-xs font-medium animate-pulse">
            RONDA ABIERTA
          </span>
        )
      default:
        return (
          <span className="px-3 py-1 rounded-full bg-muted text-muted-foreground text-xs font-medium">Planeada</span>
        )
    }
  }

  return (
    <section className="py-16 lg:py-24 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Rondas de Inversión
          </span>
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Estructura de <span className="gradient-text">Financiamiento</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Plan de captación escalonado con hitos claros y uso de fondos definido para cada etapa.
          </p>
        </div>

        {/* Timeline */}
        <div className="space-y-6">
          {rounds.map((round, index) => (
            <div
              key={index}
              className={`relative bg-card border rounded-2xl p-6 lg:p-8 transition-all ${
                round.status === "current" ? "border-chart-4/50 glow-gold" : "border-border"
              }`}
            >
              <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                {/* Left - Round Info */}
                <div className="lg:w-1/4">
                  <div className="flex items-center gap-3 mb-3">
                    {getStatusIcon(round.status)}
                    <h3 className="text-xl font-bold text-foreground">{round.name}</h3>
                  </div>
                  {getStatusBadge(round.status)}
                  <p className="text-sm text-muted-foreground mt-3">{round.date}</p>
                </div>

                {/* Center - Details */}
                <div className="lg:w-2/4 lg:border-x lg:border-border lg:px-8">
                  <div className="grid grid-cols-3 gap-4 mb-4">
                    <div>
                      <p className="text-xs text-muted-foreground">Levantamiento</p>
                      <p className="text-xl font-bold text-chart-4">{round.amount}</p>
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground">Equity</p>
                      <p className="text-xl font-bold text-foreground">{round.equity}</p>
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground">Valuación</p>
                      <p className="text-xl font-bold text-foreground">{round.valuation}</p>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground mb-2">
                    <strong className="text-foreground">Propósito:</strong> {round.purpose}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    <strong className="text-foreground">Inversionistas:</strong> {round.investors}
                  </p>
                </div>

                {/* Right - Milestones */}
                <div className="lg:w-1/4">
                  <p className="text-xs text-muted-foreground mb-2">Hitos a Lograr</p>
                  <ul className="space-y-2">
                    {round.milestones.map((milestone, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm">
                        <ArrowRight
                          className={`w-4 h-4 mt-0.5 flex-shrink-0 ${
                            round.status === "current" ? "text-chart-4" : "text-primary"
                          }`}
                        />
                        <span className="text-muted-foreground">{milestone}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Current Round CTA */}
              {round.status === "current" && (
                <div className="mt-6 pt-6 border-t border-border">
                  <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                    <div>
                      <p className="text-sm text-chart-4 font-medium">Ronda Seed Abierta</p>
                      <p className="text-muted-foreground text-sm">Ticket mínimo: $50,000 USD</p>
                    </div>
                    <button className="px-6 py-3 bg-chart-4 text-primary-foreground rounded-xl font-semibold hover:bg-chart-4/90 transition-colors glow-gold">
                      Participar en Esta Ronda
                    </button>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Cap Table Preview */}
        <div className="mt-12 bg-card border border-border rounded-2xl p-6 lg:p-8">
          <h3 className="text-xl font-bold mb-6">Cap Table Post-Seed (Proyectado)</h3>
          <div className="space-y-3">
            {[
              { holder: "Fundadores", percentage: 65, color: "bg-primary" },
              { holder: "Pre-Seed Investors", percentage: 15, color: "bg-accent" },
              { holder: "Seed Round", percentage: 20, color: "bg-chart-4" },
            ].map((row, index) => (
              <div key={index} className="flex items-center gap-4">
                <div className="w-32 text-sm text-muted-foreground">{row.holder}</div>
                <div className="flex-1 h-8 bg-secondary rounded-full overflow-hidden">
                  <div
                    className={`h-full ${row.color} rounded-full transition-all duration-1000`}
                    style={{ width: `${row.percentage}%` }}
                  />
                </div>
                <div className="w-16 text-right font-semibold text-foreground">{row.percentage}%</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
