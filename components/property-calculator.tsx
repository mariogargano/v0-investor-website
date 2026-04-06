"use client"

import { useState } from "react"
import { Calculator, Home, DollarSign, CheckCircle, XCircle } from "lucide-react"

const paxRanges = [
  { pax: 2, cert1w: 6000, cert2w: 11000, rangeMin: 200000, rangeMax: 240000, type: "Studio/Condo", sqm: "40-60" },
  { pax: 4, cert1w: 8500, cert2w: 15000, rangeMin: 300000, rangeMax: 340000, type: "Condo 2 rec", sqm: "80-100" },
  { pax: 6, cert1w: 12000, cert2w: 22000, rangeMin: 430000, rangeMax: 480000, type: "Villa 3 rec", sqm: "120-150" },
  { pax: 8, cert1w: 16000, cert2w: 30000, rangeMin: 580000, rangeMax: 640000, type: "Villa 4 rec", sqm: "180-220" },
  { pax: 10, cert1w: 20000, cert2w: 35000, rangeMin: 720000, rangeMax: 800000, type: "Mega Villa 5+", sqm: "250+" },
]

export function PropertyCalculator() {
  const [selectedPax, setSelectedPax] = useState(4)
  const [weeks, setWeeks] = useState(1)
  const [ownerPrice, setOwnerPrice] = useState(320000)

  const paxData = paxRanges.find((p) => p.pax === selectedPax)!
  const certPrice = weeks === 1 ? paxData.cert1w : paxData.cert2w
  const numCerts = weeks === 1 ? 48 : 24
  const totalRaised = certPrice * numCerts
  const maxOwnerPrice = totalRaised / 1.25
  const isViable = ownerPrice <= maxOwnerPrice
  const margin = maxOwnerPrice - ownerPrice
  const marginPercent = ((margin / maxOwnerPrice) * 100).toFixed(1)

  // Distribution
  const ownerPayment = totalRaised * 0.8
  const weekChainCommission = totalRaised * 0.1
  const brokerCommission = totalRaised * 0.04
  const notarialFund = totalRaised * 0.06

  return (
    <section className="py-20 lg:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-chart-4/5 to-transparent" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1.5 bg-primary/10 border border-primary/30 rounded-full text-primary text-sm font-medium mb-4">
            Herramienta de Análisis
          </span>
          <h2 className="text-3xl lg:text-5xl font-bold mb-6">
            Calculadora de <span className="gradient-text">Propiedades</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Evalúa la viabilidad de cualquier propiedad en tiempo real basado en el modelo de certificados.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Input Panel */}
          <div className="bg-card border border-border rounded-3xl p-8">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center">
                <Calculator className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-foreground">Configuración</h3>
                <p className="text-sm text-muted-foreground">Ajusta los parámetros de la propiedad</p>
              </div>
            </div>

            {/* PAX Selection */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-foreground mb-3">Capacidad (PAX)</label>
              <div className="grid grid-cols-5 gap-2">
                {paxRanges.map((p) => (
                  <button
                    key={p.pax}
                    onClick={() => setSelectedPax(p.pax)}
                    className={`py-3 rounded-xl font-bold transition-all ${
                      selectedPax === p.pax
                        ? "bg-primary text-primary-foreground"
                        : "bg-secondary text-muted-foreground hover:bg-secondary/80"
                    }`}
                  >
                    {p.pax}
                  </button>
                ))}
              </div>
            </div>

            {/* Weeks Selection */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-foreground mb-3">Duración del Certificado</label>
              <div className="grid grid-cols-2 gap-3">
                <button
                  onClick={() => setWeeks(1)}
                  className={`py-3 rounded-xl font-medium transition-all ${
                    weeks === 1
                      ? "bg-accent text-accent-foreground"
                      : "bg-secondary text-muted-foreground hover:bg-secondary/80"
                  }`}
                >
                  1 Semana
                </button>
                <button
                  onClick={() => setWeeks(2)}
                  className={`py-3 rounded-xl font-medium transition-all ${
                    weeks === 2
                      ? "bg-accent text-accent-foreground"
                      : "bg-secondary text-muted-foreground hover:bg-secondary/80"
                  }`}
                >
                  2 Semanas
                </button>
              </div>
            </div>

            {/* Owner Price Input */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-foreground mb-3">
                Precio Ofrecido por Dueño (15 años)
              </label>
              <div className="relative">
                <DollarSign className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <input
                  type="number"
                  value={ownerPrice}
                  onChange={(e) => setOwnerPrice(Number(e.target.value))}
                  className="w-full pl-12 pr-4 py-4 bg-secondary border border-border rounded-xl text-foreground text-xl font-bold focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
              <p className="text-xs text-muted-foreground mt-2">
                Rango recomendado: ${paxData.rangeMin.toLocaleString()} - ${paxData.rangeMax.toLocaleString()}
              </p>
            </div>

            {/* Property Type Info */}
            <div className="bg-secondary/50 rounded-xl p-4">
              <div className="flex items-center gap-3">
                <Home className="w-5 h-5 text-accent" />
                <div>
                  <p className="font-medium text-foreground">{paxData.type}</p>
                  <p className="text-sm text-muted-foreground">{paxData.sqm} m² recomendados</p>
                </div>
              </div>
            </div>
          </div>

          {/* Results Panel */}
          <div className="bg-card border border-border rounded-3xl p-8">
            <div className="flex items-center gap-3 mb-8">
              <div
                className={`w-12 h-12 rounded-2xl flex items-center justify-center ${isViable ? "bg-chart-4/10" : "bg-destructive/10"}`}
              >
                {isViable ? (
                  <CheckCircle className="w-6 h-6 text-chart-4" />
                ) : (
                  <XCircle className="w-6 h-6 text-destructive" />
                )}
              </div>
              <div>
                <h3 className="text-xl font-bold text-foreground">Resultado</h3>
                <p className={`text-sm font-medium ${isViable ? "text-chart-4" : "text-destructive"}`}>
                  {isViable ? "Propiedad VIABLE" : "Fuera de rango - Negociar"}
                </p>
              </div>
            </div>

            {/* Key Metrics */}
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="bg-secondary/50 rounded-xl p-4">
                <p className="text-sm text-muted-foreground mb-1">Precio Certificado</p>
                <p className="text-2xl font-bold text-foreground">${certPrice.toLocaleString()}</p>
              </div>
              <div className="bg-secondary/50 rounded-xl p-4">
                <p className="text-sm text-muted-foreground mb-1">Certificados a Vender</p>
                <p className="text-2xl font-bold text-foreground">{numCerts}</p>
              </div>
              <div className="bg-secondary/50 rounded-xl p-4">
                <p className="text-sm text-muted-foreground mb-1">Total Recaudación</p>
                <p className="text-2xl font-bold gradient-text-gold">${totalRaised.toLocaleString()}</p>
              </div>
              <div className="bg-secondary/50 rounded-xl p-4">
                <p className="text-sm text-muted-foreground mb-1">Precio Máx. Dueño</p>
                <p className="text-2xl font-bold text-foreground">${maxOwnerPrice.toLocaleString()}</p>
              </div>
            </div>

            {/* Margin */}
            <div
              className={`rounded-xl p-4 mb-6 ${isViable ? "bg-chart-4/10 border border-chart-4/30" : "bg-destructive/10 border border-destructive/30"}`}
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Margen de Seguridad</p>
                  <p className={`text-2xl font-bold ${isViable ? "text-chart-4" : "text-destructive"}`}>
                    ${Math.abs(margin).toLocaleString()}
                  </p>
                </div>
                <div
                  className={`px-3 py-1 rounded-full text-sm font-bold ${isViable ? "bg-chart-4/20 text-chart-4" : "bg-destructive/20 text-destructive"}`}
                >
                  {isViable ? "+" : "-"}
                  {Math.abs(Number(marginPercent))}%
                </div>
              </div>
            </div>

            {/* Distribution */}
            <div className="space-y-3">
              <p className="text-sm font-medium text-foreground">Distribución del Capital</p>
              <div className="space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">Pago al Dueño (80%)</span>
                  <span className="font-medium text-foreground">${ownerPayment.toLocaleString()}</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">WEEK-CHAIN (10%)</span>
                  <span className="font-medium text-primary">${weekChainCommission.toLocaleString()}</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">Brokers (4%)</span>
                  <span className="font-medium text-foreground">${brokerCommission.toLocaleString()}</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">Fondo Notarial (6%)</span>
                  <span className="font-medium text-foreground">${notarialFund.toLocaleString()}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
