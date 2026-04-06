"use client"

import { TrendingUp, DollarSign, ArrowUpRight, Building2, Users, Percent } from "lucide-react"

export function FinancialProjections() {
  const projections = [
    { year: "Año 1", properties: "1 Propiedad", users: "100 Usuarios", revenue: "$650K", width: "20%" },
    { year: "Año 2", properties: "3-5 Propiedades", users: "400 Usuarios", revenue: "$2.6M", width: "40%" },
    { year: "Año 3", properties: "2-3 Adquiridas", users: "5-8 Operando", revenue: "$4.2M", width: "60%" },
    { year: "Año 4", properties: "5-7 Propias", users: "1,500+ Usuarios", revenue: "$6.5M", width: "80%" },
    { year: "Año 5", properties: "10-15 Propias", users: "3,000+ Usuarios", revenue: "$12M+", width: "100%" },
  ]

  const revenueBreakdown = [
    { label: "48 Certificados × $6,000 (2 PAX)", amount: 288000 },
    { label: "Ocupaciones (42.5 sem × $2,100)", amount: 89250 },
  ]

  const certComparison = [
    { cert: "2 PAX 1w", price: 6000, certs: 48, raised: 288000, weekchain: 28800, time: "2-4 meses", roi: "Media" },
    {
      cert: "4 PAX 1w",
      price: 8500,
      certs: 48,
      raised: 408000,
      weekchain: 40800,
      time: "3-6 meses",
      roi: "Alta",
      highlight: true,
    },
    {
      cert: "6 PAX 1w",
      price: 12000,
      certs: 48,
      raised: 576000,
      weekchain: 57600,
      time: "4-8 meses",
      roi: "Alta",
      highlight: true,
    },
    { cert: "8 PAX 1w", price: 16000, certs: 48, raised: 768000, weekchain: 76800, time: "6-12 meses", roi: "Media" },
    { cert: "10 PAX 1w", price: 20000, certs: 48, raised: 960000, weekchain: 96000, time: "8-18 meses", roi: "Baja" },
  ]

  return (
    <section id="proyecciones" className="py-20 lg:py-32 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 bg-chart-4/10 border border-chart-4/30 rounded-full text-chart-4 text-sm font-medium mb-4">
            Modelo Financiero
          </span>
          <h2 className="text-3xl lg:text-5xl font-bold mb-6">
            Proyección <span className="gradient-text-gold">5 Años</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Un modelo exponencial donde cada propiedad adquirida financia las siguientes 3-4 adquisiciones.
          </p>
        </div>

        {/* Growth Timeline */}
        <div className="bg-card border border-border rounded-3xl p-8 lg:p-10 mb-12">
          <div className="space-y-6">
            {projections.map((item, index) => (
              <div key={index} className="group">
                <div className="flex items-center gap-4 mb-2">
                  <div className="w-16 lg:w-20 text-sm font-bold text-muted-foreground">{item.year}</div>
                  <div className="flex-1 relative">
                    <div className="h-12 lg:h-14 bg-secondary rounded-xl overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-primary via-accent to-chart-4 rounded-xl flex items-center px-4 transition-all group-hover:brightness-110"
                        style={{ width: item.width }}
                      >
                        <span className="text-primary-foreground font-bold text-sm lg:text-base whitespace-nowrap">
                          {item.revenue}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="hidden sm:block w-40 text-right">
                    <p className="text-sm font-medium text-foreground">{item.properties}</p>
                    <p className="text-xs text-muted-foreground">{item.users}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Rentability Comparison Table */}
        <div className="bg-card border border-border rounded-3xl p-8 mb-12 overflow-x-auto">
          <h3 className="text-xl font-bold text-foreground mb-6">Análisis Comparativo de Rentabilidad</h3>
          <table className="w-full min-w-[700px]">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left py-3 px-2 text-sm font-medium text-muted-foreground">Certificado</th>
                <th className="text-right py-3 px-2 text-sm font-medium text-muted-foreground">Precio</th>
                <th className="text-right py-3 px-2 text-sm font-medium text-muted-foreground">Certs</th>
                <th className="text-right py-3 px-2 text-sm font-medium text-muted-foreground">Recaudación</th>
                <th className="text-right py-3 px-2 text-sm font-medium text-muted-foreground">WEEK-CHAIN</th>
                <th className="text-right py-3 px-2 text-sm font-medium text-muted-foreground">Tiempo</th>
                <th className="text-center py-3 px-2 text-sm font-medium text-muted-foreground">ROI</th>
              </tr>
            </thead>
            <tbody>
              {certComparison.map((row, index) => (
                <tr key={index} className={`border-b border-border/50 ${row.highlight ? "bg-chart-4/5" : ""}`}>
                  <td className="py-3 px-2 font-medium text-foreground">
                    {row.cert}
                    {row.highlight && (
                      <span className="ml-2 px-2 py-0.5 bg-chart-4/20 text-chart-4 text-xs rounded-full">
                        Recomendado
                      </span>
                    )}
                  </td>
                  <td className="text-right py-3 px-2 text-foreground">${row.price.toLocaleString()}</td>
                  <td className="text-right py-3 px-2 text-muted-foreground">{row.certs}</td>
                  <td className="text-right py-3 px-2 font-medium text-foreground">${row.raised.toLocaleString()}</td>
                  <td className="text-right py-3 px-2 font-bold text-primary">${row.weekchain.toLocaleString()}</td>
                  <td className="text-right py-3 px-2 text-muted-foreground">{row.time}</td>
                  <td className="text-center py-3 px-2">
                    <span
                      className={`px-2 py-1 rounded-full text-xs font-medium ${
                        row.roi === "Alta"
                          ? "bg-chart-4/20 text-chart-4"
                          : row.roi === "Media"
                            ? "bg-accent/20 text-accent"
                            : "bg-muted text-muted-foreground"
                      }`}
                    >
                      {row.roi}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Financial Breakdown */}
        <div className="grid lg:grid-cols-3 gap-6">
          <div className="bg-card border border-border rounded-2xl p-6">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-chart-4/10 flex items-center justify-center">
                <TrendingUp className="w-5 h-5 text-chart-4" />
              </div>
              <h4 className="text-lg font-bold text-foreground">Ingresos Post-Adquisición</h4>
            </div>
            <ul className="text-sm space-y-3">
              <li className="flex justify-between">
                <span className="text-muted-foreground">Nuevos certificados (48 × $6,000)</span>
                <span className="font-medium">$288K</span>
              </li>
              <li className="flex justify-between">
                <span className="text-muted-foreground">Ocupaciones (42.5 sem × $2,100)</span>
                <span className="font-medium">$89K</span>
              </li>
              <li className="flex justify-between border-t border-border pt-3 mt-3">
                <span className="font-bold text-chart-4">Total Anual</span>
                <span className="font-bold text-chart-4">$377,250</span>
              </li>
            </ul>
          </div>

          <div className="bg-card border border-border rounded-2xl p-6">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                <DollarSign className="w-5 h-5 text-primary" />
              </div>
              <h4 className="text-lg font-bold text-foreground">Distribución 20%</h4>
            </div>
            <ul className="text-sm space-y-3">
              <li className="flex justify-between">
                <span className="text-muted-foreground">WEEK-CHAIN (10%)</span>
                <span className="font-medium text-primary">$28,800</span>
              </li>
              <li className="flex justify-between">
                <span className="text-muted-foreground">Brokers (4%)</span>
                <span className="font-medium">$11,520</span>
              </li>
              <li className="flex justify-between">
                <span className="text-muted-foreground">Gastos Notariales (6%)</span>
                <span className="font-medium">$17,280</span>
              </li>
              <li className="flex justify-between border-t border-border pt-3 mt-3">
                <span className="font-bold text-primary">Pago Dueño (80%)</span>
                <span className="font-bold text-primary">$230,400</span>
              </li>
            </ul>
          </div>

          <div className="relative overflow-hidden bg-gradient-to-br from-chart-4/20 via-chart-4/10 to-primary/10 border border-chart-4/30 rounded-2xl p-6 glow-gold">
            <div className="absolute top-0 right-0 w-32 h-32 bg-chart-4/20 rounded-full blur-3xl" />
            <div className="relative">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-chart-4/20 flex items-center justify-center">
                  <ArrowUpRight className="w-5 h-5 text-chart-4" />
                </div>
                <h4 className="text-lg font-bold text-foreground">SWEET SPOT</h4>
              </div>
              <p className="text-4xl lg:text-5xl font-bold text-chart-4 mb-2">4-6 PAX</p>
              <p className="text-sm text-muted-foreground mb-4">Mejor balance rentabilidad/velocidad</p>
              <div className="pt-4 border-t border-chart-4/30 space-y-2">
                <div className="flex items-center gap-2 text-sm">
                  <Building2 className="w-4 h-4 text-chart-4" />
                  <span className="text-foreground">Propiedades fáciles de encontrar</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Users className="w-4 h-4 text-chart-4" />
                  <span className="text-foreground">Target market amplio</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Percent className="w-4 h-4 text-chart-4" />
                  <span className="text-foreground">Conversión 60-75%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
