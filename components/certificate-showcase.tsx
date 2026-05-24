"use client"

import { MapPin, Shield, Calendar, QrCode, FileCheck, Clock } from "lucide-react"
import { useLanguage } from "@/lib/i18n"

const content = {
  en: {
    title: "Smart Vacational",
    titleHighlight: "Certificate",
    subtitle: "The digital certificate that grants personal and temporary vacation use rights for 15 years, in compliance with Mexican NOM-151 regulations.",
    features: [
      {
        title: "15-Year Validity",
        description: "Temporary right to request annual stays, subject to system availability.",
      },
      {
        title: "Destination Network",
        description: "Access to participating destinations in Mexico. Does not assign specific properties.",
      },
      {
        title: "Surety Backup",
        description: "Insurance that guarantees operational capacity throughout the certificate's validity.",
      },
      {
        title: "NOM-151",
        description: "Mexican legal certification for digital documents with validity and traceability.",
      },
      {
        title: "Instant Verification",
        description: "Scan the QR code to verify authenticity and validity in real time.",
      },
      {
        title: "$0 Annual Fees",
        description: "One-time payment without maintenance. Retained capacity covers all operating expenses.",
      },
    ],
    badge15: "15 Years",
    legalTitle: "Important Legal Notice",
    legalText: "The Smart Vacational Certificate (SVC) grants a personal, temporary, and revocable right to request vacation use for up to 15 years, subject to availability.",
    legalHighlight: "It is NOT real estate property, NOT traditional timeshare, NOT a financial investment, does NOT guarantee specific destinations.",
    legalModel: "REQUEST → OFFER → CONFIRM model.",
  },
  es: {
    title: "Certificado Vacacional",
    titleHighlight: "Inteligente",
    subtitle: "El certificado digital que otorga derechos personales y temporales de uso vacacional por 15 años, conforme a la normativa mexicana NOM-151.",
    features: [
      {
        title: "15 Años de Vigencia",
        description: "Derecho temporal de solicitar estancias anuales, sujeto a disponibilidad del sistema.",
      },
      {
        title: "Red de Destinos",
        description: "Acceso a destinos participantes en México. No asigna propiedades específicas.",
      },
      {
        title: "Respaldo Fiadora",
        description: "Seguro que garantiza la capacidad operativa durante toda la vigencia del certificado.",
      },
      {
        title: "NOM-151",
        description: "Certificación legal mexicana para documentos digitales con validez y trazabilidad.",
      },
      {
        title: "Verificable al Instante",
        description: "Escanea el código QR para verificar autenticidad y vigencia en tiempo real.",
      },
      {
        title: "$0 Cuotas Anuales",
        description: "Pago único sin mantenimientos. La capacidad retenida cubre todos los gastos operativos.",
      },
    ],
    badge15: "15 Años",
    legalTitle: "Aviso Legal Importante",
    legalText: "El Smart Vacational Certificate (SVC) otorga un derecho personal, temporal y revocable de solicitar uso vacacional por hasta 15 años, sujeto a disponibilidad.",
    legalHighlight: "NO es propiedad inmobiliaria, NO es tiempo compartido tradicional, NO es inversión financiera, NO garantiza destinos específicos.",
    legalModel: "Modelo REQUEST → OFFER → CONFIRM.",
  },
  pt: {
    title: "Certificado de Férias",
    titleHighlight: "Inteligente",
    subtitle: "O certificado digital que concede direitos pessoais e temporários de uso de férias por 15 anos, em conformidade com a regulamentação mexicana NOM-151.",
    features: [
      {
        title: "15 Anos de Validade",
        description: "Direito temporário de solicitar estadias anuais, sujeito à disponibilidade do sistema.",
      },
      {
        title: "Rede de Destinos",
        description: "Acesso a destinos participantes no México. Não atribui propriedades específicas.",
      },
      {
        title: "Garantia de Seguro",
        description: "Seguro que garante a capacidade operacional durante toda a validade do certificado.",
      },
      {
        title: "NOM-151",
        description: "Certificação legal mexicana para documentos digitais com validade e rastreabilidade.",
      },
      {
        title: "Verificável Instantaneamente",
        description: "Escaneie o código QR para verificar autenticidade e validade em tempo real.",
      },
      {
        title: "$0 Taxas Anuais",
        description: "Pagamento único sem manutenção. A capacidade retida cobre todas as despesas operacionais.",
      },
    ],
    badge15: "15 Anos",
    legalTitle: "Aviso Legal Importante",
    legalText: "O Smart Vacational Certificate (SVC) concede um direito pessoal, temporário e revogável de solicitar uso de férias por até 15 anos, sujeito à disponibilidade.",
    legalHighlight: "NÃO é propriedade imobiliária, NÃO é timeshare tradicional, NÃO é investimento financeiro, NÃO garante destinos específicos.",
    legalModel: "Modelo REQUEST → OFFER → CONFIRM.",
  },
  it: {
    title: "Certificato Vacanze",
    titleHighlight: "Intelligente",
    subtitle: "Il certificato digitale che concede diritti personali e temporanei di uso vacanze per 15 anni, in conformità con la normativa messicana NOM-151.",
    features: [
      {
        title: "15 Anni di Validità",
        description: "Diritto temporaneo di richiedere soggiorni annuali, soggetto alla disponibilità del sistema.",
      },
      {
        title: "Rete di Destinazioni",
        description: "Accesso alle destinazioni partecipanti in Messico. Non assegna proprietà specifiche.",
      },
      {
        title: "Garanzia Assicurativa",
        description: "Assicurazione che garantisce la capacità operativa per tutta la validità del certificato.",
      },
      {
        title: "NOM-151",
        description: "Certificazione legale messicana per documenti digitali con validità e tracciabilità.",
      },
      {
        title: "Verifica Istantanea",
        description: "Scansiona il codice QR per verificare autenticità e validità in tempo reale.",
      },
      {
        title: "$0 Quote Annuali",
        description: "Pagamento unico senza manutenzione. La capacità trattenuta copre tutte le spese operative.",
      },
    ],
    badge15: "15 Anni",
    legalTitle: "Avviso Legale Importante",
    legalText: "Lo Smart Vacational Certificate (SVC) concede un diritto personale, temporaneo e revocabile di richiedere l'uso vacanze per un massimo di 15 anni, soggetto a disponibilità.",
    legalHighlight: "NON è proprietà immobiliare, NON è multiproprietà tradizionale, NON è un investimento finanziario, NON garantisce destinazioni specifiche.",
    legalModel: "Modello REQUEST → OFFER → CONFIRM.",
  },
  fr: {
    title: "Certificat de Vacances",
    titleHighlight: "Intelligent",
    subtitle: "Le certificat numérique qui accorde des droits personnels et temporaires d'utilisation de vacances pendant 15 ans, conforme à la réglementation mexicaine NOM-151.",
    features: [
      {
        title: "15 Ans de Validité",
        description: "Droit temporaire de demander des séjours annuels, sous réserve de disponibilité du système.",
      },
      {
        title: "Réseau de Destinations",
        description: "Accès aux destinations participantes au Mexique. N'attribue pas de propriétés spécifiques.",
      },
      {
        title: "Garantie d'Assurance",
        description: "Assurance qui garantit la capacité opérationnelle pendant toute la validité du certificat.",
      },
      {
        title: "NOM-151",
        description: "Certification légale mexicaine pour documents numériques avec validité et traçabilité.",
      },
      {
        title: "Vérification Instantanée",
        description: "Scannez le code QR pour vérifier l'authenticité et la validité en temps réel.",
      },
      {
        title: "$0 Frais Annuels",
        description: "Paiement unique sans maintenance. La capacité retenue couvre toutes les dépenses opérationnelles.",
      },
    ],
    badge15: "15 Ans",
    legalTitle: "Avis Juridique Important",
    legalText: "Le Smart Vacational Certificate (SVC) accorde un droit personnel, temporaire et révocable de demander l'utilisation de vacances pendant un maximum de 15 ans, sous réserve de disponibilité.",
    legalHighlight: "Ce N'EST PAS une propriété immobilière, ce N'EST PAS un timeshare traditionnel, ce N'EST PAS un investissement financier, ne garantit PAS des destinations spécifiques.",
    legalModel: "Modèle REQUEST → OFFER → CONFIRM.",
  },
}

const featureIcons = [Calendar, MapPin, Shield, FileCheck, QrCode, Clock]
const featureColors = ["text-primary", "text-accent", "text-chart-4", "text-chart-3", "text-chart-5", "text-primary"]

export function CertificateShowcase() {
  const { language } = useLanguage()
  const t = content[language as keyof typeof content] || content.en

  return (
    <section className="py-20 lg:py-32 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold mb-6">
            {t.title} <span className="gradient-text">{t.titleHighlight}</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t.subtitle}
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
                {t.badge15}
              </div>
              <div className="absolute -bottom-3 -left-3 bg-card border border-border px-3 py-1.5 rounded-full text-sm shadow-lg">
                <span className="text-primary font-medium">NOM-151</span>
              </div>
            </div>
          </div>

          {/* Features Grid */}
          <div className="grid sm:grid-cols-2 gap-4">
            {t.features.map((feature, index) => {
              const Icon = featureIcons[index]
              const color = featureColors[index]
              return (
                <div
                  key={index}
                  className="bg-card border border-border rounded-2xl p-5 hover:border-primary/30 transition-all group"
                >
                  <Icon className={`w-8 h-8 ${color} mb-3 group-hover:scale-110 transition-transform`} />
                  <h4 className="font-bold text-foreground mb-2">{feature.title}</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
                </div>
              )
            })}
          </div>
        </div>

        {/* Legal Notice */}
        <div className="mt-12 bg-chart-5/10 border border-chart-5/30 rounded-2xl p-6 max-w-4xl mx-auto">
          <div className="flex items-start gap-4">
            <Shield className="w-6 h-6 text-chart-5 flex-shrink-0 mt-0.5" />
            <div>
              <h5 className="font-bold text-chart-5 mb-2">{t.legalTitle}</h5>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {t.legalText}{" "}
                <span className="text-foreground font-medium">
                  {t.legalHighlight}
                </span>{" "}
                {t.legalModel}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
