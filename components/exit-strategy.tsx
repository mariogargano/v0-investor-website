import { Target, Building, Globe, Handshake, TrendingUp } from "lucide-react"

export function ExitStrategy() {
  const exitOptions = [
    {
      name: "Adquisición Estratégica",
      probability: "Alta",
      timeline: "3-5 años",
      description: "Adquisición por player inmobiliario o turístico (Airbnb, Marriott, plataformas de timeshare)",
      multiplier: "8-12x Revenue",
      icon: Building,
    },
    {
      name: "Private Equity Buyout",
      probability: "Media-Alta",
      timeline: "4-6 años",
      description: "Venta a fondo de PE especializado en PropTech o hospitality",
      multiplier: "6-10x Revenue",
      icon: Handshake,
    },
    {
      name: "IPO Regional",
      probability: "Media",
      timeline: "6-8 años",
      description: "Oferta pública en mercado latinoamericano (BMV) tras escala regional",
      multiplier: "10-15x Revenue",
      icon: TrendingUp,
    },
    {
      name: "Expansión y Dividendos",
      probability: "Alta",
      timeline: "Continuo",
      description: "Crecimiento sostenido con distribución de dividendos a partir de año 3",
      multiplier: "20-30% ROI anual",
      icon: Globe,
    },
  ]

  return (
    <section className="py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Estrategia de Salida
          </span>
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Opciones de <span className="gradient-text">Liquidez</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Múltiples caminos hacia retorno para inversionistas, con horizonte de 3-8 años según estrategia elegida.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {exitOptions.map((option, index) => (
            <div
              key={index}
              className="bg-card border border-border rounded-2xl p-6 hover:border-primary/30 transition-all group"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-colors">
                  <option.icon className="w-6 h-6 text-primary" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-semibold text-foreground">{option.name}</h4>
                    <span
                      className={`px-2 py-1 rounded-full text-xs font-medium ${
                        option.probability === "Alta"
                          ? "bg-primary/20 text-primary"
                          : option.probability === "Media-Alta"
                            ? "bg-chart-4/20 text-chart-4"
                            : "bg-muted text-muted-foreground"
                      }`}
                    >
                      {option.probability}
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground mb-3">{option.description}</p>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">
                      Timeline: <strong className="text-foreground">{option.timeline}</strong>
                    </span>
                    <span className="text-chart-4 font-semibold">{option.multiplier}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Target Return */}
        <div className="mt-12 bg-gradient-to-br from-chart-4/20 via-primary/10 to-accent/10 rounded-3xl p-8 lg:p-12 text-center">
          <Target className="w-12 h-12 text-chart-4 mx-auto mb-4" />
          <h3 className="text-2xl font-bold text-foreground mb-2">Retorno Objetivo para Inversionistas Seed</h3>
          <p className="text-5xl lg:text-6xl font-bold text-chart-4 mb-4">5-10x</p>
          <p className="text-muted-foreground max-w-xl mx-auto">
            En horizonte de 5 años, basado en crecimiento proyectado y múltiplos de salida conservadores del sector
            PropTech.
          </p>
        </div>
      </div>
    </section>
  )
}
