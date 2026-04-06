import { MapPin, Shield, Calendar, QrCode, FileCheck, Clock } from "lucide-react"

export function CertificateShowcase() {
  const features = [
    {
      icon: Calendar,
      title: "15 Años de Vigencia",
      description: "Derecho temporal de solicitar estancias anuales, sujeto a disponibilidad del sistema.",
      color: "text-primary",
    },
    {
      icon: MapPin,
      title: "Red de Destinos",
      description: "Acceso a destinos participantes en México. No asigna propiedades específicas.",
      color: "text-accent",
    },
    {
      icon: Shield,
      title: "Respaldo Fiadora",
      description: "Seguro que garantiza la capacidad operativa durante toda la vigencia del certificado.",
      color: "text-chart-4",
    },
    {
      icon: FileCheck,
      title: "NOM-151",
      description: "Certificación legal mexicana para documentos digitales con validez y trazabilidad.",
      color: "text-chart-3",
    },
    {
      icon: QrCode,
      title: "Verificable al Instante",
      description: "Escanea el código QR para verificar autenticidad y vigencia en tiempo real.",
      color: "text-chart-5",
    },
    {
      icon: Clock,
      title: "$0 Cuotas Anuales",
      description: "Pago único sin mantenimientos. La capacidad retenida cubre todos los gastos operativos.",
      color: "text-primary",
    },
  ]

  return (
    <section className="py-20 lg:py-32 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold mb-6">
            Smart Vacational <span className="gradient-text">Certificate</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            El certificado digital que otorga derechos personales y temporales de uso vacacional por 15 años, conforme a
            la normativa mexicana NOM-151.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Certificate Card */}
          <div className="relative flex justify-center">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10 rounded-3xl blur-3xl" />
            <div className="relative animate-float">
              <img
                src="/images/svc-certificate-mockup.webp"
                alt="Smart Vacational Certificate - Puerto Vallarta Luxury"
                className="rounded-3xl shadow-2xl max-w-sm w-full border border-border/50"
              />
              {/* Floating badges */}
              <div className="absolute -top-3 -right-3 bg-chart-4 text-primary-foreground px-3 py-1.5 rounded-full text-sm font-bold shadow-lg">
                15 Años
              </div>
              <div className="absolute -bottom-3 -left-3 bg-card border border-border px-3 py-1.5 rounded-full text-sm shadow-lg">
                <span className="text-primary font-medium">NOM-151</span>
              </div>
            </div>
          </div>

          {/* Features Grid */}
          <div className="grid sm:grid-cols-2 gap-4">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-card border border-border rounded-2xl p-5 hover:border-primary/30 transition-all group"
              >
                <feature.icon className={`w-8 h-8 ${feature.color} mb-3 group-hover:scale-110 transition-transform`} />
                <h4 className="font-bold text-foreground mb-2">{feature.title}</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Legal Notice */}
        <div className="mt-12 bg-chart-5/10 border border-chart-5/30 rounded-2xl p-6 max-w-4xl mx-auto">
          <div className="flex items-start gap-4">
            <Shield className="w-6 h-6 text-chart-5 flex-shrink-0 mt-0.5" />
            <div>
              <h5 className="font-bold text-chart-5 mb-2">Aviso Legal Importante</h5>
              <p className="text-sm text-muted-foreground leading-relaxed">
                El Smart Vacational Certificate (SVC) otorga un derecho personal, temporal y revocable de solicitar uso
                vacacional por hasta 15 años, sujeto a disponibilidad.{" "}
                <span className="text-foreground font-medium">
                  NO es propiedad inmobiliaria, NO es tiempo compartido tradicional, NO es inversión financiera, NO
                  garantiza destinos específicos.
                </span>{" "}
                Modelo REQUEST → OFFER → CONFIRM.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
