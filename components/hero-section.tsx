"use client"

import { ArrowRight, Play, ChevronDown, Shield, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 lg:pt-0 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute top-1/4 right-10 w-72 h-72 bg-primary/20 rounded-full blur-[100px] animate-pulse-glow" />
      <div
        className="absolute bottom-1/4 left-10 w-96 h-96 bg-accent/15 rounded-full blur-[120px] animate-pulse-glow"
        style={{ animationDelay: "1.5s" }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card border border-primary/30 mb-8">
              <Sparkles size={14} className="text-primary" />
              <span className="text-sm text-primary font-medium">Ronda Pre-Lanzamiento Abierta</span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-[1.1] mb-6 text-balance">
              De Ventas de Certificados a <span className="gradient-text">Imperio Inmobiliario</span>
            </h1>

            {/* Subheadline */}
            <p className="text-lg lg:text-xl text-muted-foreground max-w-xl mx-auto lg:mx-0 mb-8 text-pretty leading-relaxed">
              El primer modelo PropTech que adquiere propiedades vacacionales{" "}
              <span className="text-foreground font-medium">sin capital inicial</span>, financiado 100% por la demanda
              del mercado.
            </p>

            {/* Key Points */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-4 mb-10">
              <div className="flex items-center gap-2 text-sm">
                <div className="w-2 h-2 bg-primary rounded-full" />
                <span className="text-muted-foreground">$0 Inversión Inicial</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <div className="w-2 h-2 bg-accent rounded-full" />
                <span className="text-muted-foreground">3 Años hasta Propiedad</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <div className="w-2 h-2 bg-chart-4 rounded-full" />
                <span className="text-muted-foreground">100%+ ROI Año 4</span>
              </div>
            </div>

            {/* CTA Buttons */}
            

            {/* Trust Badge */}
            <div className="flex items-center gap-3 justify-center lg:justify-start mt-8 pt-8 border-t border-border/50">
              <Shield size={16} className="text-chart-4" />
              <span className="text-xs text-muted-foreground">
                Certificados conformes a <span className="text-foreground font-medium">NOM-151</span> • Fideicomiso
                bancario • Fiadora de respaldo
              </span>
            </div>
          </div>

          {/* Right Content - Visual */}
          <div className="relative hidden lg:block">
            <div className="relative">
              {/* Main Card */}
              <div className="gradient-border rounded-2xl p-8 animate-float">
                <div className="space-y-6">
                  {/* Mini Dashboard */}
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-xs text-muted-foreground uppercase tracking-wider">Valor Portfolio</p>
                      <p className="text-3xl font-bold text-foreground">$5.2M</p>
                    </div>
                    <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center">
                      <span className="text-2xl font-bold text-primary">+</span>
                    </div>
                  </div>

                  {/* Progress */}
                  <div>
                    <div className="flex justify-between text-sm mb-2">
                      <span className="text-muted-foreground">Progreso Año 3</span>
                      <span className="text-primary font-medium">68%</span>
                    </div>
                    <div className="h-2 bg-secondary rounded-full overflow-hidden">
                      <div className="h-full w-[68%] bg-gradient-to-r from-primary to-accent rounded-full" />
                    </div>
                  </div>

                  {/* Stats Grid */}
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-secondary/50 rounded-xl p-4">
                      <p className="text-xs text-muted-foreground">Propiedades</p>
                      <p className="text-xl font-bold text-foreground">7</p>
                      <p className="text-xs text-primary">+2 este trimestre</p>
                    </div>
                    <div className="bg-secondary/50 rounded-xl p-4">
                      <p className="text-xs text-muted-foreground">Usuarios</p>
                      <p className="text-xl font-bold text-foreground">1,247</p>
                      <p className="text-xs text-chart-4">85% ocupación</p>
                    </div>
                  </div>

                  {/* Certificate Preview */}
                  <div className="flex items-center gap-4 p-4 bg-secondary/30 rounded-xl border border-border/50">
                    <img
                      src="/images/captura-20de-20pantalla-202026-01-17-20a-20las-204.png"
                      alt="SVC Certificate"
                      className="w-20 h-14 object-cover rounded-lg"
                    />
                    <div className="flex-1">
                      <p className="text-sm font-medium text-foreground">Smart Vacational Certificate</p>
                      <p className="text-xs text-muted-foreground">Puerto Vallarta • 15 años</p>
                    </div>
                    <div className="px-2 py-1 bg-primary/20 rounded text-xs text-primary font-medium">ACTIVO</div>
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 bg-chart-4 text-chart-4-foreground px-4 py-2 rounded-full text-sm font-bold shadow-lg">
                ROI 100%+
              </div>
              <div className="absolute -bottom-4 -left-4 glass-card px-4 py-2 rounded-full text-sm border border-border/50">
                <span className="text-muted-foreground">Timeline:</span>
                <span className="text-foreground font-medium ml-1">3 Años</span>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-scroll">
          <span className="text-xs text-muted-foreground">Explorar</span>
          <ChevronDown size={20} className="text-muted-foreground" />
        </div>
      </div>
    </section>
  )
}
