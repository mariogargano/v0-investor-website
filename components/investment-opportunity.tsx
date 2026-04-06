import {
  ArrowRight,
  Calendar,
  TrendingUp,
  DollarSign,
  Mail,
  Phone,
  FileText,
  Sparkles,
  CheckCircle,
} from "lucide-react"
import { Button } from "@/components/ui/button"

export function InvestmentOpportunity() {
  const investmentTiers = [
    {
      name: "Seed",
      amount: "$50K - $100K",
      equity: "0.5% - 1%",
      benefits: ["Acceso a reportes trimestrales", "Invitación a eventos"],
    },
    {
      name: "Series A",
      amount: "$100K - $500K",
      equity: "1% - 5%",
      benefits: ["Todo lo anterior", "Asiento en advisory board", "Uso de propiedades VIP"],
      featured: true,
    },
    {
      name: "Strategic",
      amount: "$500K+",
      equity: "5%+",
      benefits: ["Todo lo anterior", "Asiento en board", "Co-inversión en adquisiciones"],
    },
  ]

  return (
    <section id="inversion" className="py-20 lg:py-32 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main CTA Card */}
        <div className="relative rounded-[2rem] overflow-hidden mb-16">
          {/* Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-accent/10 to-chart-4/20" />
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[150px]" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-accent/20 rounded-full blur-[150px]" />

          <div className="relative p-8 lg:p-16">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-chart-4/20 border border-chart-4/30 mb-6">
                <Sparkles size={14} className="text-chart-4" />
                <span className="text-sm text-chart-4 font-medium">Ronda Pre-Lanzamiento Abierta</span>
              </div>
              <h2 className="text-3xl lg:text-5xl xl:text-6xl font-bold mb-6 text-balance">
                Oportunidad de <span className="gradient-text-gold">Inversión</span>
              </h2>
              <p className="text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto">
                Inversionistas tempranos participan en ronda de equity pre-lanzamiento. Financian operaciones, marketing
                y primeras adquisiciones.
              </p>
            </div>

            {/* Investment Metrics */}
            <div className="grid md:grid-cols-3 gap-6 mb-12 max-w-4xl mx-auto">
              <div className="bg-card/80 backdrop-blur border border-border rounded-2xl p-6 text-center">
                <DollarSign className="w-10 h-10 text-primary mx-auto mb-3" />
                <p className="text-sm text-muted-foreground mb-1">Ticket Mínimo</p>
                <p className="text-3xl lg:text-4xl font-bold text-foreground">$50K</p>
              </div>
              <div className="bg-card/80 backdrop-blur border border-border rounded-2xl p-6 text-center">
                <TrendingUp className="w-10 h-10 text-chart-4 mx-auto mb-3" />
                <p className="text-sm text-muted-foreground mb-1">IRR Esperado</p>
                <p className="text-3xl lg:text-4xl font-bold text-foreground">25-35%</p>
              </div>
              <div className="bg-card/80 backdrop-blur border border-border rounded-2xl p-6 text-center">
                <Calendar className="w-10 h-10 text-accent mx-auto mb-3" />
                <p className="text-sm text-muted-foreground mb-1">Horizonte</p>
                <p className="text-3xl lg:text-4xl font-bold text-foreground">3-5 Años</p>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-chart-4 text-primary-foreground hover:bg-chart-4/90 gap-2 h-14 px-8 text-base font-semibold glow-gold"
              >
                Agendar Llamada de Inversión
                <ArrowRight size={18} />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-foreground/20 hover:bg-foreground/5 bg-card/50 backdrop-blur gap-2 h-14 px-8 text-base"
              >
                <FileText size={18} />
                Descargar Deck Completo
              </Button>
            </div>
          </div>
        </div>

        {/* Investment Tiers */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-center mb-8">Tiers de Inversión</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {investmentTiers.map((tier, index) => (
              <div
                key={index}
                className={`relative bg-card border rounded-2xl p-6 ${
                  tier.featured ? "border-chart-4/50 glow-gold" : "border-border"
                }`}
              >
                {tier.featured && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-chart-4 text-primary-foreground text-xs font-bold rounded-full">
                    RECOMENDADO
                  </div>
                )}
                <div className="text-center mb-6">
                  <p className="text-sm text-muted-foreground mb-1">{tier.name}</p>
                  <p className="text-2xl font-bold text-foreground mb-1">{tier.amount}</p>
                  <p className="text-sm text-primary">{tier.equity} equity</p>
                </div>
                <ul className="space-y-3">
                  {tier.benefits.map((benefit, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <CheckCircle size={14} className={tier.featured ? "text-chart-4" : "text-primary"} />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Contact Info */}
        <div className="bg-card border border-border rounded-2xl p-8 max-w-2xl mx-auto text-center">
          <h4 className="font-bold text-foreground mb-4">Contacto Directo para Inversionistas</h4>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a
              href="mailto:investors@week-chain.com"
              className="flex items-center justify-center gap-2 text-muted-foreground hover:text-primary transition-colors"
            >
              <Mail size={18} />
              investors@week-chain.com
            </a>
            <a
              href="tel:+525512345678"
              className="flex items-center justify-center gap-2 text-muted-foreground hover:text-primary transition-colors"
            >
              <Phone size={18} />
              +52 55 1234 5678
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
