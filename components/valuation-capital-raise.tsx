"use client"

import {
  Building2,
  Code2,
  TrendingUp,
  Globe2,
  ShieldCheck,
  Landmark,
  Users,
  Server,
  Scale,
  AlertCircle,
} from "lucide-react"

const valuationRationale = [
  {
    icon: Code2,
    title: "Producto",
    items: [
      "Plataforma SaaS propietaria",
      "Sistema completo: certificates, capacity engine, reservation engine, admin control room",
      "Arquitectura lista para escalar multi-país",
    ],
  },
  {
    icon: Server,
    title: "Tecnología",
    items: [
      "IP desarrollada internamente (no white-label)",
      "Backend + dashboards + compliance logic",
      "Coste de reemplazo tecnológico elevado",
    ],
  },
  {
    icon: TrendingUp,
    title: "Modelo",
    items: [
      "Access-as-a-Service",
      "Certificados digitales como derecho de acceso (no real estate, no investment product)",
      "Revenue upfront + recurring operational upside",
    ],
  },
  {
    icon: Globe2,
    title: "Mercado",
    items: [
      "Turismo experiencial + anti-timeshare trend",
      "Alta demanda, baja innovación real",
      "Modelo replicable geográficamente",
    ],
  },
  {
    icon: ShieldCheck,
    title: "Ventaja Estratégica",
    items: ["Compliance-first (PROFECO, NOM-151)", "Supply-control + demand throttling", "No over-selling risk"],
  },
]

const tranches = [
  {
    id: 1,
    amount: "USD 150K – 200K",
    use: "Audit, legal, certification, governance",
  },
  {
    id: 2,
    amount: "USD 150K",
    use: "Team expansion (tech + ops)",
  },
  {
    id: 3,
    amount: "USD 150K – 200K",
    use: "Marketing validation + EU expansion prep",
  },
]

const useOfFundsData = [
  { label: "Legal, audit, certifications, compliance", percentage: 30 },
  { label: "Team (engineering, ops, support)", percentage: 25 },
  { label: "Marketing validation (not mass advertising)", percentage: 20 },
  { label: "Infrastructure & scalability", percentage: 15 },
  { label: "Contingency & reserves", percentage: 10 },
]

const scalabilityPoints = [
  "Modelo replicable por país",
  "México como primer mercado operativo",
  "Europa como siguiente fase (España, Italia, Portugal)",
  "Infraestructura preparada para multi-jurisdiction, multi-language, multi-supply networks",
]

export function ValuationCapitalRaise() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="mb-16 border-b border-border pb-8">
          <span className="text-xs font-mono tracking-widest text-muted-foreground uppercase mb-4 block">
            Investor Materials
          </span>
          <h2 className="text-3xl md:text-4xl font-semibold text-foreground tracking-tight">
            Valuation & Capital Raise
          </h2>
        </div>

        {/* Block 1: Current Valuation */}
        <div className="mb-16">
          <h3 className="text-xl font-semibold text-foreground mb-6 flex items-center gap-3">
            <Landmark className="w-5 h-5 text-muted-foreground" />
            Current Valuation
          </h3>

          <div className="bg-card border border-border rounded-xl p-6 mb-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="space-y-1">
                <p className="text-xs font-mono uppercase tracking-wider text-muted-foreground">Pre-money Valuation</p>
                <p className="text-2xl font-semibold text-foreground">USD 2.0M – 2.5M</p>
              </div>
              <div className="space-y-1">
                <p className="text-xs font-mono uppercase tracking-wider text-muted-foreground">Stage</p>
                <p className="text-lg font-medium text-foreground">Pre-Seed / Seed (early)</p>
              </div>
              <div className="space-y-1">
                <p className="text-xs font-mono uppercase tracking-wider text-muted-foreground">Jurisdiction Holding</p>
                <p className="text-lg font-medium text-foreground">Morises LLC (Wyoming, USA)</p>
              </div>
              <div className="space-y-1">
                <p className="text-xs font-mono uppercase tracking-wider text-muted-foreground">IP Ownership</p>
                <p className="text-lg font-medium text-foreground">100% Morises LLC</p>
              </div>
              <div className="space-y-1">
                <p className="text-xs font-mono uppercase tracking-wider text-muted-foreground">Operating Entity</p>
                <p className="text-lg font-medium text-foreground">WEEK-CHAIN SAPI de CV (México)</p>
              </div>
            </div>
          </div>

          <p className="text-muted-foreground text-sm leading-relaxed max-w-3xl">
            La valuación actual refleja el estado del producto completamente desarrollado, infraestructura técnica
            operativa, propiedad intelectual consolidada y un modelo escalable con capacidad de expansión internacional.
          </p>
        </div>

        {/* Block 2: Valuation Rationale */}
        <div className="mb-16">
          <h3 className="text-xl font-semibold text-foreground mb-6 flex items-center gap-3">
            <Scale className="w-5 h-5 text-muted-foreground" />
            Valuation Rationale
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            {valuationRationale.map((item) => (
              <div key={item.title} className="bg-card border border-border rounded-xl p-5">
                <div className="flex items-center gap-3 mb-3">
                  <item.icon className="w-4 h-4 text-muted-foreground" />
                  <h4 className="font-medium text-foreground">{item.title}</h4>
                </div>
                <ul className="space-y-2">
                  {item.items.map((point, idx) => (
                    <li key={idx} className="text-sm text-muted-foreground flex items-start gap-2">
                      <span className="w-1 h-1 rounded-full bg-muted-foreground mt-2 flex-shrink-0" />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <p className="text-muted-foreground text-sm leading-relaxed max-w-3xl border-l-2 border-border pl-4">
            La valuación no se basa en proyecciones agresivas, sino en el valor real de la infraestructura, el IP y la
            capacidad de ejecución.
          </p>
        </div>

        {/* Block 3: Capital Raise Structure */}
        <div className="mb-16">
          <h3 className="text-xl font-semibold text-foreground mb-6 flex items-center gap-3">
            <Building2 className="w-5 h-5 text-muted-foreground" />
            Capital Raise Structure
          </h3>

          <div className="bg-card border border-border rounded-xl p-6 mb-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              <div className="space-y-1">
                <p className="text-xs font-mono uppercase tracking-wider text-muted-foreground">Target Raise Total</p>
                <p className="text-xl font-semibold text-foreground">USD 500,000</p>
              </div>
              <div className="space-y-1">
                <p className="text-xs font-mono uppercase tracking-wider text-muted-foreground">Structure</p>
                <p className="text-lg font-medium text-foreground">Multiple tranches</p>
              </div>
              <div className="space-y-1">
                <p className="text-xs font-mono uppercase tracking-wider text-muted-foreground">Instrument</p>
                <p className="text-lg font-medium text-foreground">Equity / SAFE / Convertible</p>
              </div>
              <div className="space-y-1">
                <p className="text-xs font-mono uppercase tracking-wider text-muted-foreground">Holding Control</p>
                <p className="text-lg font-medium text-foreground">Morises LLC retains IP</p>
              </div>
            </div>

            {/* Tranches Table */}
            <div className="border border-border rounded-lg overflow-hidden">
              <table className="w-full">
                <thead>
                  <tr className="bg-muted/30">
                    <th className="text-left px-4 py-3 text-xs font-mono uppercase tracking-wider text-muted-foreground">
                      Tranche
                    </th>
                    <th className="text-left px-4 py-3 text-xs font-mono uppercase tracking-wider text-muted-foreground">
                      Amount
                    </th>
                    <th className="text-left px-4 py-3 text-xs font-mono uppercase tracking-wider text-muted-foreground">
                      Use
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {tranches.map((tranche) => (
                    <tr key={tranche.id} className="border-t border-border">
                      <td className="px-4 py-3 text-sm font-medium text-foreground">Tranche {tranche.id}</td>
                      <td className="px-4 py-3 text-sm text-foreground">{tranche.amount}</td>
                      <td className="px-4 py-3 text-sm text-muted-foreground">{tranche.use}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Block 4: Use of Funds */}
        <div className="mb-16">
          <h3 className="text-xl font-semibold text-foreground mb-6 flex items-center gap-3">
            <Users className="w-5 h-5 text-muted-foreground" />
            Use of Funds
          </h3>

          <div className="bg-card border border-border rounded-xl p-6 mb-6">
            <div className="space-y-4">
              {useOfFundsData.map((item) => (
                <div key={item.label}>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm text-foreground">{item.label}</span>
                    <span className="text-sm font-mono text-muted-foreground">{item.percentage}%</span>
                  </div>
                  <div className="h-2 bg-muted rounded-full overflow-hidden">
                    <div className="h-full bg-foreground/60 rounded-full" style={{ width: `${item.percentage}%` }} />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <p className="text-muted-foreground text-sm leading-relaxed max-w-3xl border-l-2 border-border pl-4">
            El enfoque no es crecimiento artificial, sino consolidación sólida y expansión controlada.
          </p>
        </div>

        {/* Block 5: Scalability */}
        <div className="mb-16">
          <h3 className="text-xl font-semibold text-foreground mb-6 flex items-center gap-3">
            <Globe2 className="w-5 h-5 text-muted-foreground" />
            Scalability & Expansion
          </h3>

          <div className="bg-card border border-border rounded-xl p-6 mb-6">
            <ul className="space-y-3">
              {scalabilityPoints.map((point, idx) => (
                <li key={idx} className="text-sm text-foreground flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-foreground/40 mt-1.5 flex-shrink-0" />
                  {point}
                </li>
              ))}
            </ul>
          </div>

          <p className="text-muted-foreground text-sm leading-relaxed max-w-3xl border-l-2 border-border pl-4">
            El core tecnológico no cambia por país; solo se adapta el layer legal y operativo.
          </p>
        </div>

        {/* Block 6: Disclaimer */}
        <div className="bg-muted/30 border border-border rounded-xl p-6">
          <div className="flex items-start gap-3">
            <AlertCircle className="w-4 h-4 text-muted-foreground mt-0.5 flex-shrink-0" />
            <p className="text-xs text-muted-foreground leading-relaxed">
              This material is provided for informational purposes only and does not constitute an offer to sell or a
              solicitation to buy securities. Any investment discussion is subject to formal agreements and applicable
              regulations.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
