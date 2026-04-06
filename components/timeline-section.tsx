"use client"

import type React from "react"
import { useState } from "react"
import { ChevronDown, ChevronUp, Target, Rocket, TrendingUp, Building2, CheckCircle } from "lucide-react"

interface TimelineYear {
  id: string
  year: string
  title: string
  subtitle: string
  icon: React.ElementType
  color: string
  bgColor: string
  content: React.ReactNode
}

export function TimelineSection() {
  const [expandedYear, setExpandedYear] = useState<string>("year1")

  const timelineData: TimelineYear[] = [
    {
      id: "year0",
      year: "AÑO 0",
      title: "PREPARACIÓN",
      subtitle: "Meses 1-6: Infraestructura y firmas",
      icon: Target,
      color: "text-chart-3",
      bgColor: "bg-chart-3",
      content: (
        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <h5 className="font-bold text-chart-3 flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-chart-3" />
              Setup Inicial
            </h5>
            <ul className="text-sm text-muted-foreground space-y-3">
              <li className="flex items-start gap-2">
                <CheckCircle size={14} className="text-chart-3 mt-0.5 flex-shrink-0" />
                Crear WEEK-CHAIN SPV (México)
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle size={14} className="text-chart-3 mt-0.5 flex-shrink-0" />
                Setup plataforma MUNDO-WEEK
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle size={14} className="text-chart-3 mt-0.5 flex-shrink-0" />
                Establecer fideicomiso bancario
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle size={14} className="text-chart-3 mt-0.5 flex-shrink-0" />
                Firmar fiadora (seguro)
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h5 className="font-bold text-chart-3 flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-chart-3" />
              Firmar Propietarios
            </h5>
            <ul className="text-sm text-muted-foreground space-y-3">
              <li className="flex items-start gap-2">
                <CheckCircle size={14} className="text-chart-3 mt-0.5 flex-shrink-0" />
                Target: 2-3 resorts (Cancún, Playa del Carmen)
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle size={14} className="text-chart-3 mt-0.5 flex-shrink-0" />
                Términos: $300/noche comisión + opción compra Año 3
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle size={14} className="text-chart-3 mt-0.5 flex-shrink-0" />
                Contratos notarizados (legalmente vinculantes)
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle size={14} className="text-chart-3 mt-0.5 flex-shrink-0" />
                Derechos exclusivos de marketing
              </li>
            </ul>
          </div>
        </div>
      ),
    },
    {
      id: "year1",
      year: "AÑO 1",
      title: "VENDER & OPERAR",
      subtitle: "Generar ingresos, comenzar acumulación",
      icon: Rocket,
      color: "text-primary",
      bgColor: "bg-primary",
      content: (
        <div className="space-y-8">
          <div className="bg-secondary/50 rounded-2xl p-6 border border-border">
            <h5 className="font-bold text-primary mb-6 text-lg">Desglose Financiero (1 Propiedad)</h5>
            <div className="space-y-4">
              <div className="flex justify-between items-center py-3 border-b border-border">
                <span className="text-muted-foreground">Certificados Vendidos</span>
                <div className="text-right">
                  <span className="text-foreground font-medium">100 usuarios × $6,500</span>
                  <span className="text-primary font-bold ml-3">$650,000</span>
                </div>
              </div>

              <div className="pt-2">
                <p className="text-sm text-muted-foreground mb-4">Distribución de Ingresos:</p>
                <div className="space-y-3">
                  {[
                    { label: "Fideicomiso (Acumulación)", value: "$195,000", percent: "30%", color: "bg-primary" },
                    { label: "WEEK-CHAIN Operaciones", value: "$162,500", percent: "25%", color: "bg-chart-4" },
                    { label: "Fondo de Seguro Fiadora", value: "$130,000", percent: "20%", color: "bg-chart-5" },
                    { label: "Regalía MORISES", value: "$19,500", percent: "3%", color: "bg-chart-3" },
                    { label: "Propietario (Comisión)", value: "$143,000", percent: "22%", color: "bg-accent" },
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-4">
                      <div className={`w-3 h-3 rounded-full ${item.color}`} />
                      <span className="text-muted-foreground flex-1">{item.label}</span>
                      <span className="text-xs text-muted-foreground">{item.percent}</span>
                      <span className="font-medium text-foreground w-24 text-right">{item.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: "year2",
      year: "AÑO 2",
      title: "ESCALAR",
      subtitle: "Agregar propiedades, 50%+ capital",
      icon: TrendingUp,
      color: "text-accent",
      bgColor: "bg-accent",
      content: (
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-secondary/50 rounded-2xl p-6 border border-border">
            <h5 className="font-bold text-accent mb-6">Métricas de Crecimiento</h5>
            <div className="space-y-6">
              <div>
                <p className="text-xs text-muted-foreground mb-2">Crecimiento Base de Usuarios</p>
                <p className="text-3xl font-bold text-accent">250</p>
                <p className="text-sm text-muted-foreground">Usuarios Totales (+150 nuevos)</p>
              </div>
              <div>
                <p className="text-xs text-muted-foreground mb-2">Tasa de Ocupación</p>
                <div className="flex items-end gap-2">
                  <p className="text-3xl font-bold text-accent">80%</p>
                  <p className="text-sm text-muted-foreground mb-1">40 semanas ocupadas</p>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-secondary/50 rounded-2xl p-6 border border-border">
            <h5 className="font-bold text-accent mb-6">Acumulación Fideicomiso</h5>
            <ul className="text-sm space-y-3">
              <li className="flex justify-between">
                <span className="text-muted-foreground">Balance Año 1</span>
                <span className="font-medium">$195,000</span>
              </li>
              <li className="flex justify-between">
                <span className="text-muted-foreground">Certificados Año 2 (30%)</span>
                <span className="font-medium">$292,500</span>
              </li>
              <li className="flex justify-between">
                <span className="text-muted-foreground">Ocupaciones Año 2 (30%)</span>
                <span className="font-medium">$25,200</span>
              </li>
              <li className="flex justify-between border-t border-border pt-3 mt-3">
                <span className="text-accent font-bold">TOTAL ACUMULADO</span>
                <span className="text-accent font-bold">$512,700</span>
              </li>
              <li className="text-xs text-muted-foreground text-right">35% del precio de propiedad ($1.5M)</li>
            </ul>
          </div>
        </div>
      ),
    },
    {
      id: "year3",
      year: "AÑO 3",
      title: "ADQUIRIR",
      subtitle: "Ejercer opción de compra",
      icon: Building2,
      color: "text-chart-4",
      bgColor: "bg-chart-4",
      content: (
        <div className="space-y-8">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-secondary/50 rounded-2xl p-6 border border-border">
              <h5 className="font-bold text-chart-4 mb-6">Cálculo Precio Final</h5>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Precio acordado original</span>
                  <span className="font-medium">$1,500,000</span>
                </div>
                <div className="flex justify-between text-chart-4">
                  <span>Ajuste por 85% ocupación</span>
                  <span>-$75,000</span>
                </div>
                <div className="flex justify-between text-chart-4">
                  <span>Ajuste por rating 4.8★</span>
                  <span>-$45,000</span>
                </div>
                <div className="border-t border-border pt-3 mt-3 flex justify-between font-bold text-lg">
                  <span>Precio Final</span>
                  <span className="text-chart-4">$1,380,000</span>
                </div>
              </div>
            </div>
            <div className="bg-secondary/50 rounded-2xl p-6 border border-border">
              <h5 className="font-bold text-chart-4 mb-6">Fuentes de Financiamiento</h5>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Fideicomiso acumulado</span>
                  <span className="text-primary font-bold">$948,375 (68%)</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Inyección WEEK-CHAIN</span>
                  <span className="text-chart-4 font-bold">$200,000 (15%)</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Financiamiento bancario</span>
                  <span className="text-chart-5 font-bold">$231,625 (17%)</span>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-chart-4/10 border border-chart-4/30 rounded-2xl p-6 text-center glow-gold">
            <div className="flex items-center justify-center gap-3 mb-2">
              <CheckCircle className="w-6 h-6 text-chart-4" />
              <p className="font-bold text-chart-4 text-xl">PROPIEDAD ADQUIRIDA</p>
            </div>
            <p className="text-sm text-muted-foreground">
              WEEK-CHAIN es ahora 100% propietario. Todos los ingresos futuros fluyen directamente a la compañía.
            </p>
          </div>
        </div>
      ),
    },
  ]

  return (
    <section id="timeline" className="py-20 lg:py-32 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold mb-6">
            Timeline de <span className="gradient-text">3 Años</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Un modelo probado para adquirir propiedades sin capital inicial, utilizando la demanda del mercado.
          </p>
        </div>

        <div className="space-y-4 max-w-4xl mx-auto">
          {timelineData.map((year) => (
            <div
              key={year.id}
              className={`bg-card border rounded-2xl overflow-hidden transition-all ${
                expandedYear === year.id ? `border-${year.color.replace("text-", "")}/50` : "border-border"
              }`}
            >
              <button
                onClick={() => setExpandedYear(expandedYear === year.id ? "" : year.id)}
                className="w-full px-6 py-5 flex justify-between items-center hover:bg-secondary/30 transition-colors"
              >
                <div className="flex items-center gap-4">
                  <div className={`w-12 h-12 rounded-xl ${year.bgColor}/10 flex items-center justify-center`}>
                    <year.icon className={`w-6 h-6 ${year.color}`} />
                  </div>
                  <div className="text-left">
                    <div className="flex items-center gap-3 mb-1">
                      <span className={`text-xs font-bold px-2.5 py-1 ${year.bgColor}/20 ${year.color} rounded-md`}>
                        {year.year}
                      </span>
                      <h4 className="text-lg font-bold text-foreground">{year.title}</h4>
                    </div>
                    <p className="text-sm text-muted-foreground">{year.subtitle}</p>
                  </div>
                </div>
                <div className={`w-8 h-8 rounded-full bg-secondary flex items-center justify-center`}>
                  {expandedYear === year.id ? (
                    <ChevronUp className="text-muted-foreground" size={18} />
                  ) : (
                    <ChevronDown className="text-muted-foreground" size={18} />
                  )}
                </div>
              </button>
              {expandedYear === year.id && (
                <div className="px-6 pb-6 pt-2 border-t border-border/50">{year.content}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
