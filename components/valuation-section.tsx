import { TrendingUp, Building2, Users, Globe, BarChart3 } from "lucide-react"

export function ValuationSection() {
  const valuationMetrics = [
    {
      label: "Valuación Pre-Money",
      value: "$2.5M",
      description: "Basada en modelo DCF y comparables",
      icon: TrendingUp,
      color: "text-chart-4",
    },
    {
      label: "Propiedades Pipeline",
      value: "15+",
      description: "En negociación activa",
      icon: Building2,
      color: "text-primary",
    },
    {
      label: "Clientes Potenciales",
      value: "2,400+",
      description: "Lista de espera pre-lanzamiento",
      icon: Users,
      color: "text-accent",
    },
    {
      label: "Destinos Target",
      value: "8",
      description: "México, Caribe, Europa",
      icon: Globe,
      color: "text-chart-3",
    },
  ]

  const comparables = [
    { company: "Pacaso", valuation: "$1.5B", model: "Co-ownership", multiplier: "15x Revenue" },
    { company: "Arrived", valuation: "$300M", model: "Fractional RE", multiplier: "12x Revenue" },
    { company: "Ember", valuation: "$100M", model: "Vacation homes", multiplier: "10x Revenue" },
  ]

  return (
    <section className="py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1.5 rounded-full bg-chart-4/10 text-chart-4 text-sm font-medium mb-4">
            Valuación Actual
          </span>
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Valuación del <span className="gradient-text-gold">Negocio</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Metodología basada en DCF, comparables de mercado PropTech y potencial de crecimiento regional.
          </p>
        </div>

        {/* Main Valuation Card */}
        <div className="relative rounded-3xl overflow-hidden mb-12">
          <div className="absolute inset-0 bg-gradient-to-br from-chart-4/20 via-primary/10 to-accent/10" />
          <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-chart-4/20 rounded-full blur-[120px]" />

          <div className="relative p-8 lg:p-12">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <p className="text-sm text-chart-4 font-medium mb-2">VALUACIÓN PRE-MONEY 2026</p>
                <h3 className="text-5xl lg:text-7xl font-bold text-foreground mb-4">$2.5M USD</h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Valuación conservadora basada en activos intangibles (plataforma, marca, contratos), pipeline de
                  propiedades y proyección de ingresos a 5 años con descuento del 30%.
                </p>

                <div className="space-y-3">
                  <div className="flex items-center justify-between py-2 border-b border-border/50">
                    <span className="text-muted-foreground">Plataforma Tecnológica</span>
                    <span className="font-semibold text-foreground">$600,000</span>
                  </div>
                  <div className="flex items-center justify-between py-2 border-b border-border/50">
                    <span className="text-muted-foreground">Marca y Propiedad Intelectual</span>
                    <span className="font-semibold text-foreground">$400,000</span>
                  </div>
                  <div className="flex items-center justify-between py-2 border-b border-border/50">
                    <span className="text-muted-foreground">Pipeline de Propiedades (LOI)</span>
                    <span className="font-semibold text-foreground">$750,000</span>
                  </div>
                  <div className="flex items-center justify-between py-2 border-b border-border/50">
                    <span className="text-muted-foreground">Base de Clientes Pre-registro</span>
                    <span className="font-semibold text-foreground">$350,000</span>
                  </div>
                  <div className="flex items-center justify-between py-2">
                    <span className="text-muted-foreground">Goodwill y Equipo</span>
                    <span className="font-semibold text-foreground">$400,000</span>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                {valuationMetrics.map((metric, index) => (
                  <div key={index} className="bg-card/80 backdrop-blur border border-border rounded-2xl p-5">
                    <metric.icon className={`w-8 h-8 ${metric.color} mb-3`} />
                    <p className="text-2xl lg:text-3xl font-bold text-foreground">{metric.value}</p>
                    <p className="text-sm font-medium text-foreground mt-1">{metric.label}</p>
                    <p className="text-xs text-muted-foreground mt-1">{metric.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Comparables */}
        <div className="bg-card border border-border rounded-2xl p-6 lg:p-8">
          <div className="flex items-center gap-3 mb-6">
            <BarChart3 className="w-6 h-6 text-chart-4" />
            <h3 className="text-xl font-bold">Comparables de Mercado PropTech</h3>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="text-left text-sm text-muted-foreground border-b border-border">
                  <th className="pb-3 font-medium">Empresa</th>
                  <th className="pb-3 font-medium">Valuación</th>
                  <th className="pb-3 font-medium">Modelo</th>
                  <th className="pb-3 font-medium">Múltiplo</th>
                </tr>
              </thead>
              <tbody>
                {comparables.map((comp, index) => (
                  <tr key={index} className="border-b border-border/50 last:border-0">
                    <td className="py-4 font-semibold text-foreground">{comp.company}</td>
                    <td className="py-4 text-chart-4 font-medium">{comp.valuation}</td>
                    <td className="py-4 text-muted-foreground">{comp.model}</td>
                    <td className="py-4 text-muted-foreground">{comp.multiplier}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="text-xs text-muted-foreground mt-4">
            * WEEK-CHAIN aplica un múltiplo conservador de 5x revenue proyectado debido a su etapa temprana.
          </p>
        </div>
      </div>
    </section>
  )
}
