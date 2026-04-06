import { Building2, Code, Megaphone, Scale, Cog } from "lucide-react"

export function UseOfFunds() {
  const fundAllocation = [
    {
      category: "Adquisición de Propiedades",
      percentage: 40,
      amount: "$200,000",
      icon: Building2,
      color: "bg-primary",
      description: "Depósitos y garantías para primeras 10 propiedades rent-to-buy",
    },
    {
      category: "Desarrollo Tecnológico",
      percentage: 20,
      amount: "$100,000",
      icon: Code,
      color: "bg-accent",
      description: "Plataforma de reservas, app móvil, integraciones",
    },
    {
      category: "Marketing y Ventas",
      percentage: 20,
      amount: "$100,000",
      icon: Megaphone,
      color: "bg-chart-4",
      description: "Campañas digitales, eventos, red de brokers",
    },
    {
      category: "Operaciones",
      percentage: 10,
      amount: "$50,000",
      icon: Cog,
      color: "bg-chart-3",
      description: "Equipo operativo, gestión de propiedades",
    },
    {
      category: "Legal y Compliance",
      percentage: 10,
      amount: "$50,000",
      icon: Scale,
      color: "bg-chart-5",
      description: "Contratos, regulaciones, protección IP",
    },
  ]

  return (
    <section className="py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-accent text-sm font-medium mb-4">
            Uso de Fondos
          </span>
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Asignación de la <span className="gradient-text">Ronda Seed</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Distribución estratégica de los $500,000 USD para maximizar crecimiento y alcanzar break-even en 12 meses.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 items-center">
          {/* Visual Chart */}
          <div className="relative">
            <div className="aspect-square max-w-md mx-auto">
              {/* Donut Chart Visualization */}
              <svg viewBox="0 0 100 100" className="w-full h-full transform -rotate-90">
                {(() => {
                  let cumulativePercentage = 0
                  return fundAllocation.map((item, index) => {
                    const strokeDasharray = `${item.percentage} ${100 - item.percentage}`
                    const strokeDashoffset = -cumulativePercentage
                    cumulativePercentage += item.percentage
                    const colors = ["#6ee7b7", "#f9a8d4", "#fcd34d", "#93c5fd", "#c4b5fd"]

                    return (
                      <circle
                        key={index}
                        cx="50"
                        cy="50"
                        r="40"
                        fill="none"
                        stroke={colors[index]}
                        strokeWidth="12"
                        strokeDasharray={strokeDasharray}
                        strokeDashoffset={strokeDashoffset}
                        className="transition-all duration-500"
                      />
                    )
                  })
                })()}
              </svg>

              {/* Center Text */}
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <p className="text-sm text-muted-foreground">Total Ronda</p>
                <p className="text-3xl lg:text-4xl font-bold text-foreground">$500K</p>
                <p className="text-xs text-muted-foreground">USD</p>
              </div>
            </div>
          </div>

          {/* Breakdown List */}
          <div className="space-y-4">
            {fundAllocation.map((item, index) => (
              <div
                key={index}
                className="bg-card border border-border rounded-xl p-4 hover:border-primary/30 transition-colors"
              >
                <div className="flex items-start gap-4">
                  <div className={`p-3 rounded-xl ${item.color}/20`}>
                    <item.icon className={`w-5 h-5 ${item.color.replace("bg-", "text-")}`} />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-1">
                      <h4 className="font-semibold text-foreground">{item.category}</h4>
                      <span className="text-chart-4 font-bold">{item.amount}</span>
                    </div>
                    <p className="text-sm text-muted-foreground mb-2">{item.description}</p>
                    <div className="h-2 bg-secondary rounded-full overflow-hidden">
                      <div className={`h-full ${item.color} rounded-full`} style={{ width: `${item.percentage}%` }} />
                    </div>
                    <p className="text-xs text-muted-foreground mt-1">{item.percentage}% del total</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
