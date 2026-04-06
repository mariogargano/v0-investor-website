"use client"

import { Building, Users, Heart, Shield, Compass, Calendar, Globe, Wallet } from "lucide-react"

export function EcosystemSection() {
  const ecosystemItems = [
    {
      name: "WEEK-MANAGEMENT",
      icon: Building,
      color: "text-foreground",
      bgColor: "bg-foreground/10",
      description: "Gestión integral de propiedades",
    },
    {
      name: "WEEK-FUNDATION",
      icon: Shield,
      color: "text-chart-5",
      bgColor: "bg-chart-5/10",
      description: "Fundación y soporte legal",
    },
    {
      name: "WEEK-AGENT",
      icon: Users,
      color: "text-destructive",
      bgColor: "bg-destructive/10",
      description: "Red de agentes comerciales",
    },
    {
      name: "WEEK-VA-FI",
      icon: Wallet,
      color: "text-foreground",
      bgColor: "bg-foreground/10",
      description: "Servicios financieros",
    },
    {
      name: "WEEK-WEDDING",
      icon: Heart,
      color: "text-chart-3",
      bgColor: "bg-chart-3/10",
      description: "Bodas y eventos especiales",
    },
    {
      name: "WEEK-INSURANCE",
      icon: Shield,
      color: "text-primary",
      bgColor: "bg-primary/10",
      description: "Seguros vacacionales",
    },
    {
      name: "WEEK-SERVICE",
      icon: Compass,
      color: "text-chart-4",
      bgColor: "bg-chart-4/10",
      description: "Servicios turísticos",
    },
    {
      name: "WEEK-BOOKING",
      icon: Calendar,
      color: "text-chart-5",
      bgColor: "bg-chart-5/10",
      description: "Sistema de reservaciones",
    },
  ]

  return (
    <section id="ecosistema" className="py-20 lg:py-32 bg-secondary/20 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-30" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold mb-6">
            Infraestructura <span className="gradient-text">Replicable</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Cada unidad de negocio es una sociedad individual. La plataforma WEEK-CHAIN funciona como pasarela con un
            único objetivo: la venta de certificados.
          </p>
        </div>

        {/* Ecosystem Diagram */}
        <div className="relative max-w-5xl mx-auto">
          {/* Central Hub */}
          <div className="flex justify-center mb-12">
            <div className="relative">
              <div className="absolute inset-0 bg-accent/20 rounded-full blur-3xl animate-pulse-glow" />
              <div className="relative w-40 h-40 lg:w-48 lg:h-48 rounded-full bg-card border-2 border-accent flex items-center justify-center glow-accent">
                <div className="text-center">
                  <Globe className="w-8 h-8 text-accent mx-auto mb-2" />
                  <p className="text-xl lg:text-2xl font-bold text-accent">WEEK</p>
                  <p className="text-xl lg:text-2xl font-bold text-accent">WORLD</p>
                  <p className="text-xs text-muted-foreground mt-1">Hub Central</p>
                </div>
              </div>
            </div>
          </div>

          {/* Surrounding Services */}

          {/* Handwritten Note Reference */}
          <div className="mt-16 bg-card border border-border rounded-3xl p-8 lg:p-12">
            <h4 className="text-2xl font-bold text-foreground mb-8 text-center">
              Arquitectura del <span className="gradient-text">Ecosistema</span>
            </h4>

            {/* Radial Diagram */}
            <div className="relative w-full max-w-3xl mx-auto aspect-square">
              {/* Background Glow Effects */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-64 h-64 bg-accent/10 rounded-full blur-3xl animate-pulse-glow" />
              </div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
              </div>

              {/* Connection Lines SVG */}
              <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 400">
                {/* Outer ring */}
                <circle
                  cx="200"
                  cy="200"
                  r="150"
                  fill="none"
                  stroke="url(#lineGradient)"
                  strokeWidth="1"
                  strokeDasharray="4 4"
                  opacity="0.3"
                />
                <circle
                  cx="200"
                  cy="200"
                  r="100"
                  fill="none"
                  stroke="url(#lineGradient)"
                  strokeWidth="1"
                  strokeDasharray="2 2"
                  opacity="0.2"
                />

                {/* Connection lines from center to each node */}
                <line x1="200" y1="200" x2="200" y2="50" stroke="url(#lineGradient)" strokeWidth="2" opacity="0.5" />
                <line x1="200" y1="200" x2="306" y2="94" stroke="url(#lineGradient)" strokeWidth="2" opacity="0.5" />
                <line x1="200" y1="200" x2="350" y2="200" stroke="url(#gradient3)" strokeWidth="2" opacity="0.5" />
                <line x1="200" y1="200" x2="306" y2="306" stroke="url(#gradient4)" strokeWidth="2" opacity="0.5" />
                <line x1="200" y1="200" x2="200" y2="350" stroke="url(#gradient5)" strokeWidth="2" opacity="0.5" />
                <line x1="200" y1="200" x2="94" y2="306" stroke="url(#gradient6)" strokeWidth="2" opacity="0.5" />
                <line x1="200" y1="200" x2="50" y2="200" stroke="url(#gradient7)" strokeWidth="2" opacity="0.5" />
                <line x1="200" y1="200" x2="94" y2="94" stroke="url(#gradient8)" strokeWidth="2" opacity="0.5" />

                {/* Gradients */}
                <defs>
                  <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="hsl(var(--primary))" />
                    <stop offset="100%" stopColor="hsl(var(--accent))" />
                  </linearGradient>
                  <linearGradient id="gradient3" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="hsl(var(--accent))" />
                    <stop offset="100%" stopColor="hsl(var(--destructive))" />
                  </linearGradient>
                  <linearGradient id="gradient4" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="hsl(var(--accent))" />
                    <stop offset="100%" stopColor="hsl(var(--chart-3))" />
                  </linearGradient>
                  <linearGradient id="gradient5" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="hsl(var(--accent))" />
                    <stop offset="100%" stopColor="hsl(var(--chart-5))" />
                  </linearGradient>
                  <linearGradient id="gradient6" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="hsl(var(--accent))" />
                    <stop offset="100%" stopColor="hsl(var(--primary))" />
                  </linearGradient>
                  <linearGradient id="gradient7" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="hsl(var(--accent))" />
                    <stop offset="100%" stopColor="hsl(var(--chart-4))" />
                  </linearGradient>
                  <linearGradient id="gradient8" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="hsl(var(--accent))" />
                    <stop offset="100%" stopColor="hsl(var(--chart-5))" />
                  </linearGradient>
                </defs>
              </svg>

              {/* Center Hub - WEEK-WORLD */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
                <div className="relative group cursor-pointer">
                  <div className="absolute inset-0 bg-accent/30 rounded-full blur-xl group-hover:bg-accent/50 transition-all" />
                  <div className="relative w-28 h-28 lg:w-32 lg:h-32 rounded-full bg-gradient-to-br from-primary via-accent to-chart-3 p-[2px]">
                    <div className="w-full h-full rounded-full bg-card flex items-center justify-center">
                      <div className="text-center">
                        <Globe className="w-6 h-6 lg:w-8 lg:h-8 text-accent mx-auto mb-1" />
                        <p className="text-sm lg:text-base font-bold gradient-text">WEEK</p>
                        <p className="text-sm lg:text-base font-bold gradient-text">WORLD</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Orbital Nodes */}
              {/* Top - MANAGEMENT */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 translate-y-2">
                <div className="group cursor-pointer">
                  <div className="w-20 h-20 lg:w-24 lg:h-24 rounded-2xl bg-card border-2 border-foreground/30 hover:border-foreground transition-all flex flex-col items-center justify-center hover:scale-110 shadow-lg hover:shadow-foreground/20">
                    <Building className="w-5 h-5 lg:w-6 lg:h-6 text-foreground mb-1" />
                    <p className="text-[10px] lg:text-xs font-bold text-foreground">MANAGEMENT</p>
                  </div>
                </div>
              </div>

              {/* Top Right - AGENT */}
              <div className="absolute top-[12%] right-[12%]">
                <div className="group cursor-pointer">
                  <div className="w-20 h-20 lg:w-24 lg:h-24 rounded-2xl bg-card border-2 border-destructive/30 hover:border-destructive transition-all flex flex-col items-center justify-center hover:scale-110 shadow-lg hover:shadow-destructive/20">
                    <Users className="w-5 h-5 lg:w-6 lg:h-6 text-destructive mb-1" />
                    <p className="text-[10px] lg:text-xs font-bold text-destructive">AGENT</p>
                  </div>
                </div>
              </div>

              {/* Right - WEDDING */}
              <div className="absolute top-1/2 right-0 -translate-y-1/2 -translate-x-2">
                <div className="group cursor-pointer">
                  <div className="w-20 h-20 lg:w-24 lg:h-24 rounded-2xl bg-card border-2 border-chart-3/30 hover:border-chart-3 transition-all flex flex-col items-center justify-center hover:scale-110 shadow-lg hover:shadow-chart-3/20">
                    <Heart className="w-5 h-5 lg:w-6 lg:h-6 text-chart-3 mb-1" />
                    <p className="text-[10px] lg:text-xs font-bold text-chart-3">WEDDING</p>
                  </div>
                </div>
              </div>

              {/* Bottom Right - SERVICE */}
              <div className="absolute bottom-[12%] right-[12%]">
                <div className="group cursor-pointer">
                  <div className="w-20 h-20 lg:w-24 lg:h-24 rounded-2xl bg-card border-2 border-chart-4/30 hover:border-chart-4 transition-all flex flex-col items-center justify-center hover:scale-110 shadow-lg hover:shadow-chart-4/20">
                    <Compass className="w-5 h-5 lg:w-6 lg:h-6 text-chart-4 mb-1" />
                    <p className="text-[10px] lg:text-xs font-bold text-chart-4 text-center leading-tight">SERVICIOS</p>
                    <p className="text-[8px] lg:text-[10px] text-chart-4/70">Turísticos</p>
                  </div>
                </div>
              </div>

              {/* Bottom - BOOKING */}
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 -translate-y-2">
                <div className="group cursor-pointer">
                  <div className="w-20 h-20 lg:w-24 lg:h-24 rounded-2xl bg-card border-2 border-chart-5/30 hover:border-chart-5 transition-all flex flex-col items-center justify-center hover:scale-110 shadow-lg hover:shadow-chart-5/20">
                    <Calendar className="w-5 h-5 lg:w-6 lg:h-6 text-chart-5 mb-1" />
                    <p className="text-[10px] lg:text-xs font-bold text-chart-5">BOOKING</p>
                  </div>
                </div>
              </div>

              {/* Bottom Left - INSURANCE */}
              <div className="absolute bottom-[12%] left-[12%]">
                <div className="group cursor-pointer">
                  <div className="w-20 h-20 lg:w-24 lg:h-24 rounded-2xl bg-card border-2 border-primary/30 hover:border-primary transition-all flex flex-col items-center justify-center hover:scale-110 shadow-lg hover:shadow-primary/20">
                    <Shield className="w-5 h-5 lg:w-6 lg:h-6 text-primary mb-1" />
                    <p className="text-[10px] lg:text-xs font-bold text-primary">INSURANCE</p>
                  </div>
                </div>
              </div>

              {/* Left - VA-FI */}
              <div className="absolute top-1/2 left-0 -translate-y-1/2 translate-x-2">
                <div className="group cursor-pointer">
                  <div className="w-20 h-20 lg:w-24 lg:h-24 rounded-2xl bg-card border-2 border-chart-4/30 hover:border-chart-4 transition-all flex flex-col items-center justify-center hover:scale-110 shadow-lg hover:shadow-chart-4/20">
                    <Wallet className="w-5 h-5 lg:w-6 lg:h-6 text-chart-4 mb-1" />
                    <p className="text-[10px] lg:text-xs font-bold text-chart-4">VA-FI</p>
                  </div>
                </div>
              </div>

              {/* Top Left - FUNDATION */}
              <div className="absolute top-[12%] left-[12%]">
                <div className="group cursor-pointer">
                  <div className="w-20 h-20 lg:w-24 lg:h-24 rounded-2xl bg-card border-2 border-chart-5/30 hover:border-chart-5 transition-all flex flex-col items-center justify-center hover:scale-110 shadow-lg hover:shadow-chart-5/20">
                    <Shield className="w-5 h-5 lg:w-6 lg:h-6 text-chart-5 mb-1" />
                    <p className="text-[10px] lg:text-xs font-bold text-chart-5">FUNDATION</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Description below diagram */}
            <div className="mt-8 text-center max-w-2xl mx-auto">
              <p className="text-muted-foreground leading-relaxed mb-4">
                Cada sociedad opera de forma independiente bajo la sombrilla WEEK-CHAIN. El modelo permite escalabilidad
                infinita: cada nuevo destino replica la misma estructura con sus propias entidades legales locales.
              </p>
              <div className="flex flex-wrap justify-center gap-2">
                <span className="px-4 py-2 bg-primary/10 text-primary text-sm rounded-full border border-primary/20">
                  Replicable
                </span>
                <span className="px-4 py-2 bg-accent/10 text-accent text-sm rounded-full border border-accent/20">
                  Escalable
                </span>
                <span className="px-4 py-2 bg-chart-4/10 text-chart-4 text-sm rounded-full border border-chart-4/20">
                  Global
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
