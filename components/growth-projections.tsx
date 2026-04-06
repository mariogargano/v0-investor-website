"use client"

import { useState } from "react"
import { TrendingUp, Building2, DollarSign, Users, ChevronRight } from "lucide-react"

export function GrowthProjections() {
  const [selectedYear, setSelectedYear] = useState(2027)

  const projections = [
    {
      year: 2026,
      properties: 10,
      certificates: 480,
      revenue: "$480,000",
      weekchainCommission: "$48,000",
      status: "Lanzamiento",
    },
    {
      year: 2027,
      properties: 30,
      certificates: 1440,
      revenue: "$1,440,000",
      weekchainCommission: "$144,000",
      status: "Escalamiento",
    },
    {
      year: 2028,
      properties: 75,
      certificates: 3600,
      revenue: "$3,600,000",
      weekchainCommission: "$360,000",
      status: "Expansión",
    },
    {
      year: 2029,
      properties: 150,
      certificates: 7200,
      revenue: "$7,200,000",
      weekchainCommission: "$720,000",
      status: "Consolidación",
    },
    {
      year: 2030,
      properties: 300,
      certificates: 14400,
      revenue: "$14,400,000",
      weekchainCommission: "$1,440,000",
      status: "Liderazgo Regional",
    },
  ]

  const selectedProjection = projections.find((p) => p.year === selectedYear)

  return (
    <section className="py-16 lg:py-24 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1.5 rounded-full bg-chart-4/10 text-chart-4 text-sm font-medium mb-4">
            Proyecciones
          </span>
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Crecimiento <span className="gradient-text-gold">Proyectado a 5 Años</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Modelo de ingresos basado en comisión del 10% sobre venta de certificados. Los certificados son el SERVICIO
            que vende WEEK-CHAIN, no instrumentos de inversión.
          </p>
        </div>

        {/* Year Selector */}
        <div className="flex justify-center gap-2 mb-8 flex-wrap">
          {projections.map((p) => (
            <button
              key={p.year}
              onClick={() => setSelectedYear(p.year)}
              className={`px-4 py-2 rounded-xl text-sm font-medium transition-all ${
                selectedYear === p.year
                  ? "bg-chart-4 text-primary-foreground glow-gold"
                  : "bg-card border border-border text-muted-foreground hover:text-foreground"
              }`}
            >
              {p.year}
            </button>
          ))}
        </div>

        {/* Selected Year Detail */}
        {selectedProjection && (
          <div className="bg-card border border-chart-4/30 rounded-3xl p-8 lg:p-12 mb-12">
            <div className="flex items-center justify-between mb-8">
              <div>
                <span className="px-3 py-1 rounded-full bg-chart-4/20 text-chart-4 text-sm font-medium">
                  {selectedProjection.status}
                </span>
                <h3 className="text-4xl font-bold text-foreground mt-2">{selectedProjection.year}</h3>
              </div>
              <TrendingUp className="w-12 h-12 text-chart-4" />
            </div>

            <div className="grid md:grid-cols-4 gap-6">
              <div className="bg-secondary/50 rounded-2xl p-6 text-center">
                <Building2 className="w-8 h-8 text-primary mx-auto mb-3" />
                <p className="text-3xl font-bold text-foreground">{selectedProjection.properties}</p>
                <p className="text-sm text-muted-foreground">Propiedades Activas</p>
              </div>
              <div className="bg-secondary/50 rounded-2xl p-6 text-center">
                <Users className="w-8 h-8 text-accent mx-auto mb-3" />
                <p className="text-3xl font-bold text-foreground">{selectedProjection.certificates.toLocaleString()}</p>
                <p className="text-sm text-muted-foreground">Certificados Vendidos</p>
              </div>
              <div className="bg-secondary/50 rounded-2xl p-6 text-center">
                <DollarSign className="w-8 h-8 text-chart-3 mx-auto mb-3" />
                <p className="text-3xl font-bold text-foreground">{selectedProjection.revenue}</p>
                <p className="text-sm text-muted-foreground">Ingresos Totales</p>
              </div>
              <div className="bg-chart-4/10 border border-chart-4/30 rounded-2xl p-6 text-center">
                <DollarSign className="w-8 h-8 text-chart-4 mx-auto mb-3" />
                <p className="text-3xl font-bold text-chart-4">{selectedProjection.weekchainCommission}</p>
                <p className="text-sm text-muted-foreground">Comisión WEEK-CHAIN (10%)</p>
              </div>
            </div>
          </div>
        )}

        {/* Revenue Model Explanation */}
        <div className="bg-card border border-border rounded-2xl p-6 lg:p-8">
          <h3 className="text-xl font-bold mb-6">Modelo de Ingresos</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-3">
                <span className="text-2xl font-bold text-primary">1</span>
              </div>
              <h4 className="font-semibold text-foreground mb-2">Venta de Certificados</h4>
              <p className="text-sm text-muted-foreground">
                WEEK-CHAIN comercializa certificados vacacionales (SVC) a usuarios finales
              </p>
            </div>
            <div className="flex items-center justify-center">
              <ChevronRight className="w-8 h-8 text-muted-foreground" />
            </div>
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-chart-4/20 flex items-center justify-center mx-auto mb-3">
                <span className="text-2xl font-bold text-chart-4">10%</span>
              </div>
              <h4 className="font-semibold text-foreground mb-2">Comisión por Servicio</h4>
              <p className="text-sm text-muted-foreground">
                10% de cada venta es ingreso directo de WEEK-CHAIN por intermediación
              </p>
            </div>
          </div>

          <div className="mt-8 p-4 bg-accent/10 border border-accent/30 rounded-xl">
            <p className="text-sm text-accent text-center">
              <strong>Importante:</strong> El 80% del valor del certificado va al propietario de la vivienda, 4% a
              brokers intermediarios, y 6% a fondo notarial. WEEK-CHAIN genera ingresos únicamente por el servicio de
              intermediación.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
