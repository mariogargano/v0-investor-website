import { Send, Gift, CheckCircle, Building } from "lucide-react"

export function HowItWorks() {
  const steps = [
    {
      icon: Send,
      number: "01",
      title: "REQUEST",
      subtitle: "Usuario Solicita",
      description:
        "El titular del certificado envía solicitud de uso vacacional indicando preferencias de destino y fechas.",
      color: "primary",
    },
    {
      icon: Gift,
      number: "02",
      title: "OFFER",
      subtitle: "Sistema Ofrece",
      description:
        "Nuestro equipo revisa disponibilidad en la red de destinos y envía una oferta con opciones disponibles.",
      color: "accent",
    },
    {
      icon: CheckCircle,
      number: "03",
      title: "CONFIRM",
      subtitle: "Usuario Confirma",
      description: "El usuario acepta la oferta en 48 horas, recibe confirmación y prepara su viaje.",
      color: "chart-4",
    },
    {
      icon: Building,
      number: "04",
      title: "ACQUIRE",
      subtitle: "Week-Chain Adquiere",
      description:
        "Después de 3 años de ventas exitosas, Week-Chain ejerce opción de compra y se convierte en propietario.",
      color: "chart-3",
    },
  ]

  return (
    <section className="py-20 lg:py-32 bg-secondary/20 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid opacity-50" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold mb-6">
            Modelo <span className="gradient-text">REQUEST → OFFER → CONFIRM</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Un sistema transparente donde el certificado otorga derechos de solicitud, no asignaciones garantizadas.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <div key={index} className="relative group">
              {/* Connector Line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-12 left-full w-full h-px bg-gradient-to-r from-border to-transparent z-0" />
              )}

              <div className="relative bg-card border border-border rounded-2xl p-6 h-full hover:border-primary/50 transition-all hover:-translate-y-1">
                {/* Step Number */}
                <div className="absolute -top-3 -right-3 w-10 h-10 rounded-full bg-secondary border border-border flex items-center justify-center">
                  <span className="text-xs font-bold text-muted-foreground">{step.number}</span>
                </div>

                {/* Icon */}
                <div className={`w-14 h-14 rounded-2xl bg-${step.color}/10 flex items-center justify-center mb-4`}>
                  <step.icon className={`w-7 h-7 text-${step.color}`} />
                </div>

                {/* Content */}
                <h3 className={`text-lg font-bold text-${step.color} mb-1`}>{step.title}</h3>
                <p className="text-sm text-foreground font-medium mb-3">{step.subtitle}</p>
                <p className="text-sm text-muted-foreground leading-relaxed">{step.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Important Note */}
        <div className="mt-12 bg-chart-5/10 border border-chart-5/30 rounded-2xl p-6 max-w-3xl mx-auto">
          <p className="text-sm text-muted-foreground text-center">
            <span className="text-chart-5 font-semibold">Importante:</span> El SVC otorga derecho de{" "}
            <span className="text-foreground">solicitar</span> uso vacacional, no de reservar directamente. Todas las
            solicitudes están sujetas a disponibilidad y aprobación del sistema.
          </p>
        </div>
      </div>
    </section>
  )
}
