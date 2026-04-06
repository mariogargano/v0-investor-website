"use client"

import { useState } from "react"
import { PageLayout } from "@/components/page-layout"
import { useLanguage } from "@/lib/i18n"
import {
  ArrowLeft,
  ArrowRight,
  Building2,
  FileText,
  Users,
  Check,
  PieChart,
  TrendingUp,
  Calculator,
} from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

const CERTIFICATE_PRICES = {
  "2-1": { price: 6500, certs: 48 },
  "2-2": { price: 11000, certs: 24 },
  "4-1": { price: 8500, certs: 48 },
  "4-2": { price: 15000, certs: 24 },
  "6-1": { price: 12000, certs: 48 },
  "6-2": { price: 22000, certs: 24 },
  "8-1": { price: 16000, certs: 48 },
  "8-2": { price: 30000, certs: 24 },
  "10-1": { price: 20000, certs: 48 },
  "10-2": { price: 35000, certs: 24 },
}

const PROPERTY_RANGES = {
  "2": { min: 200000, max: 240000, type: "Studio/Condo", rooms: 1, baths: 1 },
  "4": { min: 300000, max: 340000, type: "Condo 2 rec", rooms: 2, baths: 2 },
  "6": { min: 430000, max: 480000, type: "Villa 3 rec", rooms: 3, baths: 3 },
  "8": { min: 580000, max: 640000, type: "Villa 4 rec", rooms: 4, baths: 4 },
  "10": { min: 720000, max: 800000, type: "Mega Villa 5+", rooms: 5, baths: 4 },
}

export default function SimuladorPage() {
  const [step, setStep] = useState(1)
  const [pax, setPax] = useState<string>("4")
  const [weeks, setWeeks] = useState<string>("1")
  const [propertyPrice, setPropertyPrice] = useState<number>(320000)
  const [propertyLocation, setPropertyLocation] = useState("Playa del Carmen")
  const [salesProgress, setSalesProgress] = useState(100)
  const { t } = useLanguage()

  const certKey = `${pax}-${weeks}` as keyof typeof CERTIFICATE_PRICES
  const certData = CERTIFICATE_PRICES[certKey]
  const propRange = PROPERTY_RANGES[pax as keyof typeof PROPERTY_RANGES]

  const totalRecaudacion = certData.price * certData.certs * (salesProgress / 100)
  const pagoAlDueno = totalRecaudacion * 0.8
  const comisionWeekChain = totalRecaudacion * 0.1
  const comisionBrokers = totalRecaudacion * 0.04
  const fondoNotarial = totalRecaudacion * 0.06

  const maxOwnerPrice = (certData.price * certData.certs) / 1.25
  const isViable = propertyPrice <= maxOwnerPrice
  const margin = maxOwnerPrice - propertyPrice

  const steps = [
    { num: 1, title: "Selección de Propiedad", icon: Building2 },
    { num: 2, title: "Configuración de Certificados", icon: FileText },
    { num: 3, title: "Simulación de Venta", icon: TrendingUp },
    { num: 4, title: "Distribución de Ganancias", icon: PieChart },
  ]

  return (
    <PageLayout>
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            {t("backToHome")}
          </Link>

          <div className="mb-12">
            <span className="inline-block px-4 py-1.5 rounded-full bg-chart-1/10 text-chart-1 text-sm font-medium mb-4">
              Simulador Interactivo
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Flujo Completo de <span className="gradient-text">Inversión</span>
            </h1>
            <p className="text-muted-foreground text-lg max-w-3xl">
              Experimenta paso a paso todo el proceso: desde la adquisición Rent-to-Buy hasta la distribución de
              ganancias entre stakeholders.
            </p>
          </div>

          {/* Progress Steps */}
          <div className="flex items-center justify-between mb-12 overflow-x-auto pb-4">
            {steps.map((s, i) => {
              const Icon = s.icon
              return (
                <div key={s.num} className="flex items-center">
                  <button
                    onClick={() => setStep(s.num)}
                    className={`flex flex-col items-center gap-2 min-w-[120px] ${
                      step === s.num ? "text-primary" : step > s.num ? "text-chart-1" : "text-muted-foreground"
                    }`}
                  >
                    <div
                      className={`w-12 h-12 rounded-full flex items-center justify-center border-2 transition-all ${
                        step === s.num
                          ? "border-primary bg-primary/10"
                          : step > s.num
                            ? "border-chart-1 bg-chart-1/10"
                            : "border-border bg-card"
                      }`}
                    >
                      {step > s.num ? <Check className="w-5 h-5" /> : <Icon className="w-5 h-5" />}
                    </div>
                    <span className="text-xs font-medium text-center">{s.title}</span>
                  </button>
                  {i < steps.length - 1 && (
                    <div className={`w-16 lg:w-24 h-0.5 mx-2 ${step > s.num ? "bg-chart-1" : "bg-border"}`} />
                  )}
                </div>
              )
            })}
          </div>

          {/* Step Content */}
          <div className="bg-card border border-border rounded-3xl p-6 md:p-8 lg:p-10">
            {/* Step 1: Property Selection */}
            {step === 1 && (
              <div className="space-y-8">
                <div>
                  <h2 className="text-2xl font-bold mb-2">Paso 1: Selección de Propiedad</h2>
                  <p className="text-muted-foreground">
                    Define las características de la propiedad que deseas adquirir bajo el modelo Rent-to-Buy
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-6">
                    <div>
                      <label className="block text-sm font-medium mb-3">Capacidad de Huéspedes (PAX)</label>
                      <div className="grid grid-cols-5 gap-2">
                        {["2", "4", "6", "8", "10"].map((p) => (
                          <button
                            key={p}
                            onClick={() => {
                              setPax(p)
                              const range = PROPERTY_RANGES[p as keyof typeof PROPERTY_RANGES]
                              setPropertyPrice(Math.round((range.min + range.max) / 2))
                            }}
                            className={`py-3 px-4 rounded-xl border-2 font-semibold transition-all ${
                              pax === p
                                ? "border-primary bg-primary/10 text-primary"
                                : "border-border hover:border-primary/50"
                            }`}
                          >
                            {p} PAX
                          </button>
                        ))}
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-3">Ubicación</label>
                      <select
                        value={propertyLocation}
                        onChange={(e) => setPropertyLocation(e.target.value)}
                        className="w-full px-4 py-3 rounded-xl bg-secondary border border-border focus:border-primary outline-none"
                      >
                        <option>Playa del Carmen</option>
                        <option>Cancún</option>
                        <option>Tulum</option>
                        <option>Puerto Vallarta</option>
                        <option>Los Cabos</option>
                        <option>Riviera Nayarit</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-3">
                        Precio de la Propiedad (15 años): ${propertyPrice.toLocaleString()} USD
                      </label>
                      <input
                        type="range"
                        min={propRange.min - 50000}
                        max={propRange.max + 50000}
                        step={5000}
                        value={propertyPrice}
                        onChange={(e) => setPropertyPrice(Number(e.target.value))}
                        className="w-full accent-primary"
                      />
                      <div className="flex justify-between text-xs text-muted-foreground mt-2">
                        <span>${(propRange.min - 50000).toLocaleString()}</span>
                        <span className="text-chart-1">
                          Rango óptimo: ${propRange.min.toLocaleString()} - ${propRange.max.toLocaleString()}
                        </span>
                        <span>${(propRange.max + 50000).toLocaleString()}</span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-secondary/50 rounded-2xl p-6 space-y-4">
                    <h3 className="font-semibold text-lg">Características Recomendadas</h3>
                    <div className="space-y-3">
                      <div className="flex justify-between py-2 border-b border-border">
                        <span className="text-muted-foreground">Tipo de Propiedad</span>
                        <span className="font-medium">{propRange.type}</span>
                      </div>
                      <div className="flex justify-between py-2 border-b border-border">
                        <span className="text-muted-foreground">Recámaras</span>
                        <span className="font-medium">{propRange.rooms}+</span>
                      </div>
                      <div className="flex justify-between py-2 border-b border-border">
                        <span className="text-muted-foreground">Baños</span>
                        <span className="font-medium">{propRange.baths}+</span>
                      </div>
                      <div className="flex justify-between py-2 border-b border-border">
                        <span className="text-muted-foreground">Rango de Precio</span>
                        <span className="font-medium text-chart-1">
                          ${propRange.min.toLocaleString()} - ${propRange.max.toLocaleString()}
                        </span>
                      </div>
                      <div
                        className={`flex justify-between py-2 rounded-lg px-3 ${
                          propertyPrice >= propRange.min && propertyPrice <= propRange.max
                            ? "bg-chart-1/10 text-chart-1"
                            : propertyPrice < propRange.min
                              ? "bg-chart-4/10 text-chart-4"
                              : "bg-destructive/10 text-destructive"
                        }`}
                      >
                        <span>Tu precio</span>
                        <span className="font-bold">${propertyPrice.toLocaleString()}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Step 2: Certificate Configuration */}
            {step === 2 && (
              <div className="space-y-8">
                <div>
                  <h2 className="text-2xl font-bold mb-2">Paso 2: Configuración de Certificados</h2>
                  <p className="text-muted-foreground">
                    Selecciona la duración del certificado y valida la viabilidad financiera
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-6">
                    <div>
                      <label className="block text-sm font-medium mb-3">Duración del Certificado</label>
                      <div className="grid grid-cols-2 gap-4">
                        <button
                          onClick={() => setWeeks("1")}
                          className={`py-4 px-6 rounded-xl border-2 transition-all ${
                            weeks === "1" ? "border-primary bg-primary/10" : "border-border hover:border-primary/50"
                          }`}
                        >
                          <div className="text-2xl font-bold">1 Semana</div>
                          <div className="text-sm text-muted-foreground">48 certificados</div>
                          <div className="text-lg font-semibold text-primary mt-2">
                            ${CERTIFICATE_PRICES[`${pax}-1` as keyof typeof CERTIFICATE_PRICES].price.toLocaleString()}{" "}
                            USD
                          </div>
                        </button>
                        <button
                          onClick={() => setWeeks("2")}
                          className={`py-4 px-6 rounded-xl border-2 transition-all ${
                            weeks === "2" ? "border-primary bg-primary/10" : "border-border hover:border-primary/50"
                          }`}
                        >
                          <div className="text-2xl font-bold">2 Semanas</div>
                          <div className="text-sm text-muted-foreground">24 certificados</div>
                          <div className="text-lg font-semibold text-primary mt-2">
                            ${CERTIFICATE_PRICES[`${pax}-2` as keyof typeof CERTIFICATE_PRICES].price.toLocaleString()}{" "}
                            USD
                          </div>
                        </button>
                      </div>
                    </div>

                    <div className="bg-secondary/50 rounded-2xl p-6">
                      <h3 className="font-semibold mb-4">Resumen del Certificado</h3>
                      <div className="space-y-3 text-sm">
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Tipo</span>
                          <span className="font-medium">
                            {pax} PAX / {weeks} semana(s)
                          </span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Precio por certificado</span>
                          <span className="font-medium">${certData.price.toLocaleString()} USD</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Total certificados</span>
                          <span className="font-medium">{certData.certs}</span>
                        </div>
                        <div className="flex justify-between pt-3 border-t border-border">
                          <span className="font-medium">Recaudación Total</span>
                          <span className="font-bold text-lg text-primary">
                            ${(certData.price * certData.certs).toLocaleString()} USD
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-6">
                    <div
                      className={`rounded-2xl p-6 border-2 ${isViable ? "border-chart-1 bg-chart-1/5" : "border-destructive bg-destructive/5"}`}
                    >
                      <div className="flex items-center gap-3 mb-4">
                        {isViable ? (
                          <div className="w-10 h-10 rounded-full bg-chart-1/20 flex items-center justify-center">
                            <Check className="w-5 h-5 text-chart-1" />
                          </div>
                        ) : (
                          <div className="w-10 h-10 rounded-full bg-destructive/20 flex items-center justify-center">
                            <span className="text-destructive font-bold">!</span>
                          </div>
                        )}
                        <div>
                          <h3 className={`font-bold ${isViable ? "text-chart-1" : "text-destructive"}`}>
                            {isViable ? "Propiedad VIABLE" : "Propiedad NO VIABLE"}
                          </h3>
                          <p className="text-sm text-muted-foreground">
                            {isViable
                              ? "El precio está dentro del rango aceptable"
                              : "El precio excede el máximo permitido"}
                          </p>
                        </div>
                      </div>

                      <div className="space-y-3 text-sm">
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Recaudación total</span>
                          <span>${(certData.price * certData.certs).toLocaleString()}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">÷ 1.25 (25% margen)</span>
                          <span>=</span>
                        </div>
                        <div className="flex justify-between font-medium">
                          <span>Precio máximo dueño</span>
                          <span className="text-chart-1">${maxOwnerPrice.toLocaleString()}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Tu oferta</span>
                          <span>${propertyPrice.toLocaleString()}</span>
                        </div>
                        <div
                          className={`flex justify-between pt-3 border-t border-border font-bold ${margin >= 0 ? "text-chart-1" : "text-destructive"}`}
                        >
                          <span>Margen</span>
                          <span>
                            {margin >= 0 ? "+" : ""}${margin.toLocaleString()} (
                            {((margin / maxOwnerPrice) * 100).toFixed(1)}%)
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="bg-primary/5 border border-primary/20 rounded-2xl p-6">
                      <h3 className="font-semibold mb-3 flex items-center gap-2">
                        <Calculator className="w-4 h-4 text-primary" />
                        Fórmula de Viabilidad
                      </h3>
                      <div className="font-mono text-sm bg-secondary/50 rounded-lg p-4">
                        <div className="text-muted-foreground">PRECIO_CERT × TOTAL_CERTS = RECAUDACIÓN</div>
                        <div className="text-primary mt-2">
                          ${certData.price.toLocaleString()} × {certData.certs} = $
                          {(certData.price * certData.certs).toLocaleString()}
                        </div>
                        <div className="text-muted-foreground mt-4">RECAUDACIÓN / 1.25 = PRECIO_MAX_DUEÑO</div>
                        <div className="text-chart-1 mt-2">
                          ${(certData.price * certData.certs).toLocaleString()} / 1.25 = $
                          {maxOwnerPrice.toLocaleString()}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Step 3: Sales Simulation */}
            {step === 3 && (
              <div className="space-y-8">
                <div>
                  <h2 className="text-2xl font-bold mb-2">Paso 3: Simulación de Venta de Certificados</h2>
                  <p className="text-muted-foreground">
                    Simula el proceso de presale y observa cómo avanza la recaudación
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-6">
                    <div>
                      <label className="block text-sm font-medium mb-3">Progreso de Ventas: {salesProgress}%</label>
                      <input
                        type="range"
                        min={0}
                        max={100}
                        step={5}
                        value={salesProgress}
                        onChange={(e) => setSalesProgress(Number(e.target.value))}
                        className="w-full accent-primary"
                      />
                      <div className="flex justify-between text-xs text-muted-foreground mt-2">
                        <span>0%</span>
                        <span>50%</span>
                        <span>100%</span>
                      </div>
                    </div>

                    <div className="bg-secondary/50 rounded-2xl p-6">
                      <h3 className="font-semibold mb-4">Detalle de Ventas</h3>
                      <div className="space-y-4">
                        <div>
                          <div className="flex justify-between text-sm mb-2">
                            <span className="text-muted-foreground">Certificados vendidos</span>
                            <span className="font-medium">
                              {Math.round((certData.certs * salesProgress) / 100)} de {certData.certs}
                            </span>
                          </div>
                          <div className="w-full h-3 bg-secondary rounded-full overflow-hidden">
                            <div
                              className="h-full bg-gradient-to-r from-primary to-chart-1 transition-all duration-500"
                              style={{ width: `${salesProgress}%` }}
                            />
                          </div>
                        </div>

                        <div className="pt-4 border-t border-border space-y-3">
                          <div className="flex justify-between">
                            <span className="text-muted-foreground">Recaudación actual</span>
                            <span className="font-bold text-xl text-primary">${totalRecaudacion.toLocaleString()}</span>
                          </div>
                          <div className="flex justify-between text-sm">
                            <span className="text-muted-foreground">Meta total</span>
                            <span>${(certData.price * certData.certs).toLocaleString()}</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-chart-1/10 rounded-xl p-4 text-center">
                        <div className="text-3xl font-bold text-chart-1">
                          {Math.round((certData.certs * salesProgress) / 100)}
                        </div>
                        <div className="text-xs text-muted-foreground">Certs Vendidos</div>
                      </div>
                      <div className="bg-primary/10 rounded-xl p-4 text-center">
                        <div className="text-3xl font-bold text-primary">
                          {certData.certs - Math.round((certData.certs * salesProgress) / 100)}
                        </div>
                        <div className="text-xs text-muted-foreground">Disponibles</div>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-6">
                    <div className="bg-card border border-border rounded-2xl overflow-hidden">
                      <div className="bg-secondary/50 px-6 py-4 border-b border-border">
                        <h3 className="font-semibold">Vista Previa del Certificado</h3>
                      </div>
                      <div className="p-6">
                        <div className="aspect-[4/3] rounded-xl bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 p-6 relative overflow-hidden">
                          <div className="absolute top-0 right-0 w-32 h-32 bg-primary/20 rounded-full blur-3xl" />
                          <div className="absolute bottom-0 left-0 w-24 h-24 bg-chart-1/20 rounded-full blur-2xl" />

                          <div className="relative h-full flex flex-col">
                            <div className="flex justify-between items-start">
                              <div>
                                <div className="text-xs text-muted-foreground uppercase tracking-wider">SEMANA</div>
                                <div className="text-4xl font-bold text-white">15</div>
                              </div>
                              <div className="w-8 h-5 bg-gradient-to-r from-yellow-500 via-red-500 to-yellow-500 rounded-sm" />
                            </div>

                            <div className="flex-1 flex items-center">
                              <div>
                                <div className="text-xl font-bold text-white">{propertyLocation}</div>
                                <div className="text-sm text-muted-foreground">{propRange.type}</div>
                              </div>
                            </div>

                            <div className="flex justify-between items-end">
                              <div>
                                <div className="text-xs text-muted-foreground">VIGENCIA</div>
                                <div className="text-primary font-bold">15 Años</div>
                              </div>
                              <div className="text-right">
                                <div className="text-xs text-muted-foreground">CERTIFICADO</div>
                                <div className="text-sm font-mono text-white">WC-{pax}-2025-001</div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="bg-accent/5 border border-accent/20 rounded-2xl p-6">
                      <h3 className="font-semibold mb-3">Tiempo Estimado de Presale</h3>
                      <div className="flex items-center gap-4">
                        <div className="text-4xl font-bold text-accent">
                          {pax === "2"
                            ? "2-4"
                            : pax === "4"
                              ? "3-6"
                              : pax === "6"
                                ? "4-8"
                                : pax === "8"
                                  ? "6-12"
                                  : "8-18"}
                        </div>
                        <div className="text-muted-foreground">
                          meses para vender
                          <br />
                          <span className="text-foreground font-medium">{certData.certs} certificados</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Step 4: Distribution */}
            {step === 4 && (
              <div className="space-y-8">
                <div>
                  <h2 className="text-2xl font-bold mb-2">Paso 4: Distribución de Ganancias</h2>
                  <p className="text-muted-foreground">
                    Visualiza cómo se distribuye el capital recaudado entre los diferentes stakeholders
                  </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-8">
                  {/* Pie Chart Visualization */}
                  <div className="bg-secondary/30 rounded-2xl p-6">
                    <h3 className="font-semibold mb-6 text-center">Distribución del 100%</h3>
                    <div className="relative w-64 h-64 mx-auto">
                      <svg viewBox="0 0 100 100" className="transform -rotate-90 w-full h-full">
                        {/* Dueño 80% */}
                        <circle
                          cx="50"
                          cy="50"
                          r="40"
                          fill="none"
                          stroke="hsl(var(--chart-1))"
                          strokeWidth="20"
                          strokeDasharray="201.06 251.33"
                          strokeDashoffset="0"
                          className="drop-shadow-lg"
                        />
                        {/* WEEK-CHAIN 10% */}
                        <circle
                          cx="50"
                          cy="50"
                          r="40"
                          fill="none"
                          stroke="hsl(var(--primary))"
                          strokeWidth="20"
                          strokeDasharray="25.13 251.33"
                          strokeDashoffset="-201.06"
                        />
                        {/* Brokers 4% */}
                        <circle
                          cx="50"
                          cy="50"
                          r="40"
                          fill="none"
                          stroke="hsl(var(--chart-4))"
                          strokeWidth="20"
                          strokeDasharray="10.05 251.33"
                          strokeDashoffset="-226.19"
                        />
                        {/* Notariales 6% */}
                        <circle
                          cx="50"
                          cy="50"
                          r="40"
                          fill="none"
                          stroke="hsl(var(--accent))"
                          strokeWidth="20"
                          strokeDasharray="15.08 251.33"
                          strokeDashoffset="-238.76"
                        />
                      </svg>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="text-center">
                          <div className="text-2xl font-bold">${(totalRecaudacion / 1000).toFixed(0)}K</div>
                          <div className="text-xs text-muted-foreground">Total Recaudado</div>
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-3 mt-6">
                      <div className="flex items-center gap-2">
                        <div className="w-3 h-3 rounded-full bg-chart-1" />
                        <span className="text-sm">Dueño (80%)</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-3 h-3 rounded-full bg-primary" />
                        <span className="text-sm">WEEK-CHAIN (10%)</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-3 h-3 rounded-full bg-chart-4" />
                        <span className="text-sm">Brokers (4%)</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-3 h-3 rounded-full bg-accent" />
                        <span className="text-sm">Notariales (6%)</span>
                      </div>
                    </div>
                  </div>

                  {/* Detailed Breakdown */}
                  <div className="space-y-4">
                    <div className="bg-chart-1/10 border border-chart-1/30 rounded-2xl p-5">
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-xl bg-chart-1/20 flex items-center justify-center">
                            <Building2 className="w-5 h-5 text-chart-1" />
                          </div>
                          <div>
                            <div className="font-semibold">Pago al Dueño</div>
                            <div className="text-xs text-muted-foreground">80% de la recaudación</div>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="text-2xl font-bold text-chart-1">${pagoAlDueno.toLocaleString()}</div>
                          <div className="text-xs text-muted-foreground">USD</div>
                        </div>
                      </div>
                      
                    </div>

                    <div className="bg-primary/10 border border-primary/30 rounded-2xl p-5">
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-xl bg-primary/20 flex items-center justify-center">
                            <TrendingUp className="w-5 h-5 text-primary" />
                          </div>
                          <div>
                            <div className="font-semibold">Comisión WEEK-CHAIN</div>
                            <div className="text-xs text-muted-foreground">10% operación plataforma</div>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="text-2xl font-bold text-primary">${comisionWeekChain.toLocaleString()}</div>
                          <div className="text-xs text-muted-foreground">USD</div>
                        </div>
                      </div>
                      
                    </div>

                    <div className="bg-chart-4/10 border border-chart-4/30 rounded-2xl p-5">
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-xl bg-chart-4/20 flex items-center justify-center">
                            <Users className="w-5 h-5 text-chart-4" />
                          </div>
                          <div>
                            <div className="font-semibold">Comisión Brokers</div>
                            <div className="text-xs text-muted-foreground">4% intermediarios</div>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="text-2xl font-bold text-chart-4">${comisionBrokers.toLocaleString()}</div>
                          <div className="text-xs text-muted-foreground">USD</div>
                        </div>
                      </div>
                      <div className="text-sm text-muted-foreground">Red de ventas y agentes inmobiliarios</div>
                    </div>

                    <div className="bg-accent/10 border border-accent/30 rounded-2xl p-5">
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-xl bg-accent/20 flex items-center justify-center">
                            <FileText className="w-5 h-5 text-accent" />
                          </div>
                          <div>
                            <div className="font-semibold">Fondo Notarial</div>
                            <div className="text-xs text-muted-foreground">6% gastos notariales</div>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="text-2xl font-bold text-accent">${fondoNotarial.toLocaleString()}</div>
                          <div className="text-xs text-muted-foreground">USD</div>
                        </div>
                      </div>
                      
                    </div>
                  </div>
                </div>

                {/* Summary Card */}
                <div className="bg-gradient-to-r from-primary/10 via-chart-1/10 to-accent/10 rounded-2xl p-6 border border-primary/20">
                  <h3 className="font-bold text-lg mb-4">Resumen de la Operación</h3>
                  <div className="grid md:grid-cols-4 gap-6">
                    <div>
                      <div className="text-sm text-muted-foreground mb-1">Propiedad</div>
                      <div className="font-semibold">{propRange.type}</div>
                      <div className="text-sm text-primary">{propertyLocation}</div>
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground mb-1">Certificado</div>
                      <div className="font-semibold">
                        {pax} PAX / {weeks} sem
                      </div>
                      <div className="text-sm text-primary">${certData.price.toLocaleString()} c/u</div>
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground mb-1">Ventas ({salesProgress}%)</div>
                      <div className="font-semibold">{Math.round((certData.certs * salesProgress) / 100)} certs</div>
                      <div className="text-sm text-primary">${totalRecaudacion.toLocaleString()}</div>
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground mb-1">Margen</div>
                      <div className={`font-semibold ${isViable ? "text-chart-1" : "text-destructive"}`}>
                        {isViable ? "VIABLE" : "NO VIABLE"}
                      </div>
                      <div className="text-sm">
                        {margin >= 0 ? "+" : ""}${margin.toLocaleString()}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Navigation */}
            <div className="flex justify-between mt-10 pt-6 border-t border-border">
              <Button
                variant="outline"
                onClick={() => setStep(Math.max(1, step - 1))}
                disabled={step === 1}
                className="gap-2"
              >
                <ArrowLeft className="w-4 h-4" />
                Anterior
              </Button>
              <Button
                onClick={() => setStep(Math.min(4, step + 1))}
                disabled={step === 4}
                className="gap-2 bg-primary text-primary-foreground"
              >
                Siguiente
                <ArrowRight className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  )
}
