"use client"

import { PieChart, TrendingUp, Target, Zap, DollarSign, CheckCircle } from "lucide-react"

export function PortfolioStrategy() {
  const portfolioComposition = [
    { pax: 4, quantity: 5, percent: 50, reason: "Sweet spot, alta demanda, conversión rápida", color: "bg-primary" },
    { pax: 6, quantity: 3, percent: 30, reason: "Premium, buena rentabilidad, mercado sólido", color: "bg-accent" },
    { pax: 2, quantity: 1, percent: 10, reason: "Entry level, diversificación", color: "bg-chart-4" },
    { pax: 8, quantity: 1, percent: 10, reason: "Premium alto, grupos grandes", color: "bg-chart-3" },
  ]

  const financialProjection = {
    composition: [
      { label: "5 × 4 PAX (1w)", amount: 204000 },
      { label: "3 × 6 PAX (1w)", amount: 172800 },
      { label: "1 × 2 PAX (1w)", amount: 31200 },
      { label: "1 × 8 PAX (1w)", amount: 76800 },
    ],
    totalCommission: 484800,
    totalBrokers: 193920,
    totalNotarial: 290880,
    totalRaised: 4848000,
    totalOwners: 3878400,
  }

  return (
    <section className="py-20 lg:py-32 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1.5 bg-accent/10 border border-accent/30 rounded-full text-accent text-sm font-medium mb-4">
            Estrategia Recomendada
          </span>
          <h2 className="text-3xl lg:text-5xl font-bold mb-6">
            Portfolio <span className="gradient-text">Óptimo</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Composición ideal de 10 propiedades para el Año 1 basada en análisis de rentabilidad y velocidad de venta.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {/* Portfolio Composition */}
          <div className="bg-card border border-border rounded-3xl p-8">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 rounded-2xl bg-accent/10 flex items-center justify-center">
                <PieChart className="w-6 h-6 text-accent" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-foreground">Composición del Portfolio</h3>
                <p className="text-sm text-muted-foreground">10 propiedades balanceadas</p>
              </div>
            </div>

            <div className="space-y-4">
              {portfolioComposition.map((item, index) => (
                <div key={index} className="flex items-center gap-4">
                  <div
                    className={`w-16 h-16 rounded-2xl ${item.color} flex items-center justify-center text-primary-foreground`}
                  >
                    <span className="text-2xl font-bold">{item.quantity}</span>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-1">
                      <span className="font-bold text-foreground">{item.pax} PAX</span>
                      <span className="text-sm font-medium text-muted-foreground">{item.percent}%</span>
                    </div>
                    <p className="text-sm text-muted-foreground">{item.reason}</p>
                    <div className="h-1.5 bg-secondary rounded-full mt-2 overflow-hidden">
                      <div className={`h-full ${item.color} rounded-full`} style={{ width: `${item.percent}%` }} />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Financial Projection */}
          <div className="bg-card border border-border rounded-3xl p-8">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 rounded-2xl bg-chart-4/10 flex items-center justify-center">
                <DollarSign className="w-6 h-6 text-chart-4" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-foreground">Proyección Financiera</h3>
                <p className="text-sm text-muted-foreground">Portfolio completo Año 1</p>
              </div>
            </div>

            <div className="space-y-3 mb-6">
              {financialProjection.composition.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between py-2 border-b border-border last:border-0"
                >
                  <span className="text-muted-foreground">{item.label}</span>
                  <span className="font-medium text-foreground">${item.amount.toLocaleString()}</span>
                </div>
              ))}
            </div>

            <div className="bg-chart-4/10 border border-chart-4/30 rounded-2xl p-4 mb-4">
              <div className="flex items-center justify-between mb-2">
                <span className="font-bold text-chart-4">Total Comisión WEEK-CHAIN</span>
                <span className="text-2xl font-bold text-chart-4">
                  ${financialProjection.totalCommission.toLocaleString()}
                </span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3 text-sm">
              <div className="bg-secondary/50 rounded-xl p-3">
                <p className="text-muted-foreground">Total Brokers</p>
                <p className="font-bold text-foreground">${financialProjection.totalBrokers.toLocaleString()}</p>
              </div>
              <div className="bg-secondary/50 rounded-xl p-3">
                <p className="text-muted-foreground">Total Notariales</p>
                <p className="font-bold text-foreground">${financialProjection.totalNotarial.toLocaleString()}</p>
              </div>
              <div className="bg-secondary/50 rounded-xl p-3">
                <p className="text-muted-foreground">Recaudación Total</p>
                <p className="font-bold text-foreground">${financialProjection.totalRaised.toLocaleString()}</p>
              </div>
              <div className="bg-secondary/50 rounded-xl p-3">
                <p className="text-muted-foreground">Pago a Dueños</p>
                <p className="font-bold text-foreground">${financialProjection.totalOwners.toLocaleString()}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Priority Matrix */}
        <div className="bg-card border border-border rounded-3xl p-8">
          <h3 className="text-xl font-bold text-foreground mb-6 text-center">Criterios de Búsqueda por Prioridad</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="relative overflow-hidden bg-chart-4/10 border border-chart-4/30 rounded-2xl p-6">
              <div className="absolute top-0 right-0 w-20 h-20 bg-chart-4/20 rounded-full blur-2xl" />
              <div className="relative">
                <div className="flex items-center gap-2 mb-4">
                  <Zap className="w-5 h-5 text-chart-4" />
                  <span className="font-bold text-chart-4">ALTA PRIORIDAD</span>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-chart-4" />
                    <span className="text-foreground">4 PAX: $300k-$340k</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-chart-4" />
                    <span className="text-foreground">6 PAX: $430k-$480k</span>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground mt-4">Buscar activamente estas propiedades</p>
              </div>
            </div>

            <div className="bg-accent/10 border border-accent/30 rounded-2xl p-6">
              <div className="flex items-center gap-2 mb-4">
                <Target className="w-5 h-5 text-accent" />
                <span className="font-bold text-accent">MEDIA PRIORIDAD</span>
              </div>
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-accent" />
                  <span className="text-foreground">2 PAX: $200k-$240k</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-accent" />
                  <span className="text-foreground">8 PAX: $580k-$640k</span>
                </div>
              </div>
              <p className="text-sm text-muted-foreground mt-4">Oportunidades cuando aparezcan</p>
            </div>

            <div className="bg-muted/50 border border-border rounded-2xl p-6">
              <div className="flex items-center gap-2 mb-4">
                <TrendingUp className="w-5 h-5 text-muted-foreground" />
                <span className="font-bold text-muted-foreground">BAJA PRIORIDAD</span>
              </div>
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-muted-foreground" />
                  <span className="text-muted-foreground">10 PAX: $720k-$800k</span>
                </div>
              </div>
              <p className="text-sm text-muted-foreground mt-4">Solo si es un excelente deal</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
