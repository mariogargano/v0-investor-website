import { Calendar, FileText, Mail, Phone, Shield } from "lucide-react"
import { Button } from "@/components/ui/button"

export function InvestorCTA() {
  const nextSteps = [
    "Firma de NDA y acceso a data room",
    "Llamada introductoria con fundadores",
    "Due diligence y revisión de documentos",
    "Negociación de términos",
    "Cierre y transferencia",
  ]

  return (
    <section className="py-16 lg:py-24 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-chart-4/30 via-primary/20 to-accent/20" />
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-chart-4/30 rounded-full blur-[150px]" />

          <div className="relative p-8 lg:p-16">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <span className="inline-block px-4 py-1.5 rounded-full bg-chart-4/20 text-chart-4 text-sm font-medium mb-4">
                  Ronda Seed Abierta
                </span>
                <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-4">
                  Únete a la <span className="gradient-text-gold">Revolución PropTech</span>
                </h2>
                <p className="text-muted-foreground text-lg mb-6">
                  Estamos buscando inversionistas visionarios que compartan nuestra misión de democratizar el acceso a
                  propiedades vacacionales de lujo.
                </p>

                <div className="grid grid-cols-2 gap-4 mb-8">
                  <div className="bg-card/80 backdrop-blur border border-border rounded-xl p-4">
                    <p className="text-sm text-muted-foreground">Ticket Mínimo</p>
                    <p className="text-2xl font-bold text-foreground">$50,000</p>
                  </div>
                  <div className="bg-card/80 backdrop-blur border border-border rounded-xl p-4">
                    <p className="text-sm text-muted-foreground">Disponible</p>
                    <p className="text-2xl font-bold text-chart-4">$350,000</p>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Button
                    size="lg"
                    className="bg-chart-4 text-primary-foreground hover:bg-chart-4/90 gap-2 h-14 px-8 glow-gold"
                  >
                    <Calendar className="w-5 h-5" />
                    Agendar Llamada
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-foreground/20 bg-card/50 backdrop-blur gap-2 h-14 px-8"
                  >
                    <FileText className="w-5 h-5" />
                    Solicitar Deck
                  </Button>
                </div>
              </div>

              <div className="bg-card/90 backdrop-blur border border-border rounded-2xl p-6 lg:p-8">
                <h3 className="text-xl font-bold text-foreground mb-6">Proceso de Inversión</h3>
                <div className="space-y-4">
                  {nextSteps.map((step, index) => (
                    <div key={index} className="flex items-center gap-4">
                      <div className="w-8 h-8 rounded-full bg-chart-4/20 flex items-center justify-center flex-shrink-0">
                        <span className="text-sm font-bold text-chart-4">{index + 1}</span>
                      </div>
                      <p className="text-sm text-muted-foreground">{step}</p>
                    </div>
                  ))}
                </div>

                <div className="mt-8 pt-6 border-t border-border">
                  <h4 className="font-semibold text-foreground mb-4">Contacto Directo</h4>
                  <div className="space-y-3">
                    <a
                      href="mailto:investors@week-chain.com"
                      className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors"
                    >
                      <Mail className="w-4 h-4" />
                      investors@week-chain.com
                    </a>
                    <a
                      href="tel:+525512345678"
                      className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors"
                    >
                      <Phone className="w-4 h-4" />
                      +52 55 1234 5678
                    </a>
                  </div>
                </div>

                <div className="mt-6 flex items-center gap-2 text-xs text-muted-foreground">
                  <Shield className="w-4 h-4" />
                  Información sujeta a NDA y términos de confidencialidad
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
