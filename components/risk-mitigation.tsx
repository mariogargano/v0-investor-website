import { Shield, Building2, Lock, FileCheck, Umbrella, Scale, CheckCircle } from "lucide-react"

export function RiskMitigation() {
  const userProtection = [
    { icon: Lock, text: "30% de ingresos bloqueados en fideicomiso bancario" },
    { icon: Umbrella, text: "Seguro fiadora garantiza disponibilidad 15 años" },
    { icon: FileCheck, text: "Propiedad debe alcanzar 60% ocupación o renovar contrato" },
    { icon: Building2, text: "Portafolio diversificado (10+ propiedades para Año 5)" },
    { icon: Scale, text: "Contratos notarizados en cada jurisdicción" },
  ]

  const businessProtection = [
    { icon: Shield, text: "Propietario no puede competir (derechos exclusivos)" },
    { icon: FileCheck, text: "Opción de compra es irrevocable (venta forzada Año 3)" },
    { icon: CheckCircle, text: "Garantía de ocupación mínima protege ROI" },
    { icon: Building2, text: "Múltiples flujos de ingreso (certificados + ocupaciones)" },
    { icon: Lock, text: "Deuda pagada en 10 años, propiedad libre de gravámenes" },
  ]

  return (
    <section className="py-20 lg:py-32 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold mb-6">
            Mitigación de <span className="gradient-text">Riesgos</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Estructura legal y financiera robusta diseñada para proteger tanto a usuarios como al negocio en todos los
            escenarios.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* User Protection */}
          <div className="relative group">
            <div className="absolute inset-0 bg-primary/5 rounded-3xl blur-xl group-hover:bg-primary/10 transition-colors" />
            <div className="relative bg-card border border-primary/30 rounded-3xl p-8 h-full">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center">
                  <Shield className="w-7 h-7 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground">Protección al Usuario</h3>
                  <p className="text-sm text-primary">Titular de Certificado SVC</p>
                </div>
              </div>
              <ul className="space-y-4">
                {userProtection.map((item, index) => (
                  <li key={index} className="flex items-start gap-4 group/item">
                    <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-4 h-4 text-primary" />
                    </div>
                    <span className="text-muted-foreground group-hover/item:text-foreground transition-colors pt-1">
                      {item.text}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Business Protection */}
          <div className="relative group">
            <div className="absolute inset-0 bg-chart-4/5 rounded-3xl blur-xl group-hover:bg-chart-4/10 transition-colors" />
            <div className="relative bg-card border border-chart-4/30 rounded-3xl p-8 h-full">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-14 h-14 rounded-2xl bg-chart-4/10 flex items-center justify-center">
                  <Building2 className="w-7 h-7 text-chart-4" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground">Protección al Negocio</h3>
                  <p className="text-sm text-chart-4">WEEK-CHAIN & Inversionistas</p>
                </div>
              </div>
              <ul className="space-y-4">
                {businessProtection.map((item, index) => (
                  <li key={index} className="flex items-start gap-4 group/item">
                    <div className="w-8 h-8 rounded-lg bg-chart-4/10 flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-4 h-4 text-chart-4" />
                    </div>
                    <span className="text-muted-foreground group-hover/item:text-foreground transition-colors pt-1">
                      {item.text}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Legal Entities */}
        <div className="mt-12 bg-card border border-border rounded-2xl p-8">
          <h4 className="font-bold text-foreground mb-6 text-center">Estructura Legal</h4>
          <div className="grid sm:grid-cols-3 gap-6">
            <div className="text-center p-4 bg-secondary/50 rounded-xl">
              <p className="text-sm text-muted-foreground mb-1">Holding USA</p>
              <p className="font-bold text-foreground">MORISES LLC</p>
              <p className="text-xs text-primary mt-1">Propiedad Intelectual</p>
            </div>
            <div className="text-center p-4 bg-secondary/50 rounded-xl">
              <p className="text-sm text-muted-foreground mb-1">Operadora México</p>
              <p className="font-bold text-foreground">WEEK-CHAIN SAPI de CV</p>
              <p className="text-xs text-accent mt-1">Ventas & Operaciones</p>
            </div>
            <div className="text-center p-4 bg-secondary/50 rounded-xl">
              <p className="text-sm text-muted-foreground mb-1">Plataforma Digital</p>
              <p className="font-bold text-foreground">MUNDO-WEEK</p>
              <p className="text-xs text-chart-4 mt-1">Sistema de Reservas</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
