import { X, Check, ArrowRight, AlertTriangle, Zap } from "lucide-react"

export function ProblemSolution() {
  const traditionalProblems = [
    { text: "Necesita $1M+ capital upfront para comprar propiedad", highlight: "$1M+ capital" },
    { text: "Especula sobre demanda futura sin datos reales", highlight: "Especula" },
    { text: "Compite con Airbnb pagando 10-15% comisiones", highlight: "10-15%" },
    { text: "Sin base de usuarios garantizada al comprar", highlight: "Sin base" },
    { text: "10-15 años para recuperar inversión", highlight: "10-15 años" },
    { text: "Cuotas de mantenimiento que aumentan cada año", highlight: "Cuotas" },
  ]

  const weekChainSolutions = [
    { text: "$0 capital necesario - usuarios financian la compra", highlight: "$0 capital" },
    { text: "Data-driven: conocemos la demanda antes de comprar", highlight: "Data-driven" },
    { text: "100% margen - usuarios pagan una vez por 15 años", highlight: "100% margen" },
    { text: "Base de usuarios pre-vendida antes de adquirir", highlight: "pre-vendida" },
    { text: "3 años timeline de adquisición completa", highlight: "3 años" },
    { text: "$0 cuotas anuales para titulares de certificado", highlight: "$0 cuotas" },
  ]

  return (
    <section id="modelo" className="py-20 lg:py-32 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/50 border border-border mb-6">
            <Zap size={14} className="text-chart-4" />
            <span className="text-sm text-muted-foreground">El Problema que Resolvemos</span>
          </div>
          <h2 className="text-3xl lg:text-5xl font-bold mb-6 text-balance">
            El Modelo Tradicional Está <span className="gradient-text">Roto</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            La inversión inmobiliaria vacacional tradicional requiere capital masivo y años de espera. Week-Chain
            invierte la ecuación.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-6 lg:gap-8">
          {/* Traditional Model */}
          <div className="relative group">
            <div className="absolute inset-0 bg-destructive/5 rounded-3xl blur-xl group-hover:bg-destructive/10 transition-colors" />
            <div className="relative bg-card border border-destructive/20 rounded-3xl p-8 lg:p-10 h-full">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-12 rounded-2xl bg-destructive/10 flex items-center justify-center">
                  <AlertTriangle className="w-6 h-6 text-destructive" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground">Modelo Tradicional</h3>
                  <p className="text-sm text-destructive">Alto riesgo, alto capital</p>
                </div>
              </div>
              <ul className="space-y-4">
                {traditionalProblems.map((problem, index) => (
                  <li key={index} className="flex items-start gap-3 group/item">
                    <div className="w-6 h-6 rounded-full bg-destructive/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <X className="w-3.5 h-3.5 text-destructive" />
                    </div>
                    <span className="text-muted-foreground group-hover/item:text-foreground transition-colors">
                      {problem.text.split(problem.highlight)[0]}
                      <span className="text-destructive font-medium">{problem.highlight}</span>
                      {problem.text.split(problem.highlight)[1]}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Week-Chain Model */}
          <div className="relative group">
            <div className="absolute inset-0 bg-primary/5 rounded-3xl blur-xl group-hover:bg-primary/10 transition-colors" />
            <div className="relative bg-card border border-primary/30 rounded-3xl p-8 lg:p-10 h-full glow-primary">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center">
                  <Zap className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground">Modelo WEEK-CHAIN</h3>
                  <p className="text-sm text-primary">Cero riesgo, cero capital</p>
                </div>
              </div>
              <ul className="space-y-4">
                {weekChainSolutions.map((solution, index) => (
                  <li key={index} className="flex items-start gap-3 group/item">
                    <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-3.5 h-3.5 text-primary" />
                    </div>
                    <span className="text-foreground">
                      {solution.text.split(solution.highlight)[0]}
                      <span className="text-primary font-medium">{solution.highlight}</span>
                      {solution.text.split(solution.highlight)[1]}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 text-center">
          <a
            href="#timeline"
            className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors font-medium"
          >
            Ver cómo funciona el timeline
            <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  )
}
