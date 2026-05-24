"use client"

import { Search, Star, CheckCircle, BadgeCheck } from "lucide-react"
import { useLanguage } from "@/lib/i18n"

const content = {
  en: {
    badge: "Quality Assurance",
    title: "Property",
    titleHighlight: "Verification Systems",
    subtitle: "Ensuring quality and transparency across our destination network",
    weekTrack: {
      name: "WEEK-TRACK",
      tagline: "Property Intelligence System",
      description: "Our proprietary data analysis system that evaluates properties before they join the WEEK-CHAIN network. We analyze historical performance, occupancy rates, and market positioning.",
      features: [
        { title: "Occupancy Analysis", desc: "Minimum 60% historical occupancy required" },
        { title: "Revenue Verification", desc: "Market rate analysis and ADR benchmarking" },
        { title: "Location Score", desc: "Accessibility, amenities, and demand evaluation" },
      ],
      highlight: "Data-driven decisions:",
      highlightText: "Only properties meeting our criteria are considered for the network.",
    },
    weekReview: {
      name: "WEEK-REVIEW",
      tagline: "Guest Experience Platform",
      description: "Continuous quality monitoring through verified guest reviews. Certificate holders provide feedback after each stay, ensuring properties maintain high standards.",
      features: [
        { title: "Verified Reviews", desc: "Only actual certificate holders can review" },
        { title: "Quality Threshold", desc: "Minimum 4.0 rating required to stay in network" },
        { title: "Improvement Tracking", desc: "Property owners receive actionable feedback" },
      ],
      highlight: "Quality guarantee:",
      highlightText: "Properties below standards are flagged and may be removed from the network.",
    },
    flowTitle: "How Certificate Holders Request Stays",
    flowSteps: [
      { step: "REQUEST", desc: "Submit preferences: dates, destination type, group size" },
      { step: "OFFER", desc: "Receive matched property offer based on availability" },
      { step: "CONFIRM", desc: "Accept the offer within 48 hours to secure your stay" },
      { step: "TRAVEL", desc: "Enjoy your vacation and leave a WEEK-REVIEW" },
    ],
  },
  es: {
    badge: "Garantía de Calidad",
    title: "Sistemas de",
    titleHighlight: "Verificación de Propiedades",
    subtitle: "Asegurando calidad y transparencia en nuestra red de destinos",
    weekTrack: {
      name: "WEEK-TRACK",
      tagline: "Sistema de Inteligencia de Propiedades",
      description: "Nuestro sistema propietario de análisis de datos que evalúa propiedades antes de unirse a la red WEEK-CHAIN. Analizamos rendimiento histórico, tasas de ocupación y posicionamiento de mercado.",
      features: [
        { title: "Análisis de Ocupación", desc: "Mínimo 60% de ocupación histórica requerida" },
        { title: "Verificación de Ingresos", desc: "Análisis de tarifas de mercado y benchmarking ADR" },
        { title: "Puntuación de Ubicación", desc: "Evaluación de accesibilidad, amenidades y demanda" },
      ],
      highlight: "Decisiones basadas en datos:",
      highlightText: "Solo propiedades que cumplen nuestros criterios son consideradas para la red.",
    },
    weekReview: {
      name: "WEEK-REVIEW",
      tagline: "Plataforma de Experiencia del Huésped",
      description: "Monitoreo continuo de calidad a través de reseñas verificadas de huéspedes. Los titulares de certificados proporcionan retroalimentación después de cada estancia, asegurando que las propiedades mantengan altos estándares.",
      features: [
        { title: "Reseñas Verificadas", desc: "Solo titulares reales de certificados pueden reseñar" },
        { title: "Umbral de Calidad", desc: "Calificación mínima de 4.0 requerida para permanecer en la red" },
        { title: "Seguimiento de Mejoras", desc: "Los propietarios reciben retroalimentación accionable" },
      ],
      highlight: "Garantía de calidad:",
      highlightText: "Las propiedades por debajo de los estándares son marcadas y pueden ser removidas de la red.",
    },
    flowTitle: "Cómo los Titulares de Certificados Solicitan Estancias",
    flowSteps: [
      { step: "SOLICITAR", desc: "Envía preferencias: fechas, tipo de destino, tamaño del grupo" },
      { step: "OFERTA", desc: "Recibe oferta de propiedad según disponibilidad" },
      { step: "CONFIRMAR", desc: "Acepta la oferta en 48 horas para asegurar tu estancia" },
      { step: "VIAJAR", desc: "Disfruta tus vacaciones y deja una WEEK-REVIEW" },
    ],
  },
  pt: {
    badge: "Garantia de Qualidade",
    title: "Sistemas de",
    titleHighlight: "Verificação de Propriedades",
    subtitle: "Garantindo qualidade e transparência em nossa rede de destinos",
    weekTrack: {
      name: "WEEK-TRACK",
      tagline: "Sistema de Inteligência de Propriedades",
      description: "Nosso sistema proprietário de análise de dados que avalia propriedades antes de se juntarem à rede WEEK-CHAIN. Analisamos desempenho histórico, taxas de ocupação e posicionamento de mercado.",
      features: [
        { title: "Análise de Ocupação", desc: "Mínimo de 60% de ocupação histórica necessária" },
        { title: "Verificação de Receita", desc: "Análise de tarifas de mercado e benchmarking ADR" },
        { title: "Pontuação de Localização", desc: "Avaliação de acessibilidade, amenidades e demanda" },
      ],
      highlight: "Decisões baseadas em dados:",
      highlightText: "Apenas propriedades que atendem aos nossos critérios são consideradas para a rede.",
    },
    weekReview: {
      name: "WEEK-REVIEW",
      tagline: "Plataforma de Experiência do Hóspede",
      description: "Monitoramento contínuo de qualidade através de avaliações verificadas de hóspedes. Os titulares de certificados fornecem feedback após cada estadia, garantindo que as propriedades mantenham altos padrões.",
      features: [
        { title: "Avaliações Verificadas", desc: "Apenas titulares reais de certificados podem avaliar" },
        { title: "Limite de Qualidade", desc: "Classificação mínima de 4.0 necessária para permanecer na rede" },
        { title: "Acompanhamento de Melhorias", desc: "Os proprietários recebem feedback acionável" },
      ],
      highlight: "Garantia de qualidade:",
      highlightText: "Propriedades abaixo dos padrões são sinalizadas e podem ser removidas da rede.",
    },
    flowTitle: "Como os Titulares de Certificados Solicitam Estadias",
    flowSteps: [
      { step: "SOLICITAR", desc: "Envie preferências: datas, tipo de destino, tamanho do grupo" },
      { step: "OFERTA", desc: "Receba oferta de propriedade baseada na disponibilidade" },
      { step: "CONFIRMAR", desc: "Aceite a oferta em 48 horas para garantir sua estadia" },
      { step: "VIAJAR", desc: "Aproveite suas férias e deixe uma WEEK-REVIEW" },
    ],
  },
  it: {
    badge: "Garanzia di Qualità",
    title: "Sistemi di",
    titleHighlight: "Verifica Proprietà",
    subtitle: "Garantendo qualità e trasparenza nella nostra rete di destinazioni",
    weekTrack: {
      name: "WEEK-TRACK",
      tagline: "Sistema di Intelligence Proprietà",
      description: "Il nostro sistema proprietario di analisi dati che valuta le proprietà prima che entrino nella rete WEEK-CHAIN. Analizziamo performance storica, tassi di occupazione e posizionamento di mercato.",
      features: [
        { title: "Analisi Occupazione", desc: "Minimo 60% di occupazione storica richiesta" },
        { title: "Verifica Ricavi", desc: "Analisi tariffe di mercato e benchmarking ADR" },
        { title: "Punteggio Posizione", desc: "Valutazione accessibilità, servizi e domanda" },
      ],
      highlight: "Decisioni basate sui dati:",
      highlightText: "Solo proprietà che soddisfano i nostri criteri sono considerate per la rete.",
    },
    weekReview: {
      name: "WEEK-REVIEW",
      tagline: "Piattaforma Esperienza Ospite",
      description: "Monitoraggio continuo della qualità attraverso recensioni verificate degli ospiti. I titolari dei certificati forniscono feedback dopo ogni soggiorno, garantendo che le proprietà mantengano standard elevati.",
      features: [
        { title: "Recensioni Verificate", desc: "Solo titolari reali di certificati possono recensire" },
        { title: "Soglia di Qualità", desc: "Valutazione minima di 4.0 richiesta per rimanere nella rete" },
        { title: "Tracciamento Miglioramenti", desc: "I proprietari ricevono feedback azionabile" },
      ],
      highlight: "Garanzia di qualità:",
      highlightText: "Le proprietà sotto gli standard vengono segnalate e possono essere rimosse dalla rete.",
    },
    flowTitle: "Come i Titolari di Certificati Richiedono Soggiorni",
    flowSteps: [
      { step: "RICHIEDI", desc: "Invia preferenze: date, tipo di destinazione, dimensione del gruppo" },
      { step: "OFFERTA", desc: "Ricevi offerta di proprietà basata sulla disponibilità" },
      { step: "CONFERMA", desc: "Accetta l'offerta entro 48 ore per assicurare il tuo soggiorno" },
      { step: "VIAGGIA", desc: "Goditi la tua vacanza e lascia una WEEK-REVIEW" },
    ],
  },
  fr: {
    badge: "Assurance Qualité",
    title: "Systèmes de",
    titleHighlight: "Vérification des Propriétés",
    subtitle: "Garantissant qualité et transparence dans notre réseau de destinations",
    weekTrack: {
      name: "WEEK-TRACK",
      tagline: "Système d'Intelligence Propriété",
      description: "Notre système propriétaire d'analyse de données qui évalue les propriétés avant qu'elles rejoignent le réseau WEEK-CHAIN. Nous analysons la performance historique, les taux d'occupation et le positionnement de marché.",
      features: [
        { title: "Analyse d'Occupation", desc: "Minimum 60% d'occupation historique requis" },
        { title: "Vérification des Revenus", desc: "Analyse des tarifs de marché et benchmarking ADR" },
        { title: "Score de Localisation", desc: "Évaluation de l'accessibilité, des commodités et de la demande" },
      ],
      highlight: "Décisions basées sur les données:",
      highlightText: "Seules les propriétés répondant à nos critères sont considérées pour le réseau.",
    },
    weekReview: {
      name: "WEEK-REVIEW",
      tagline: "Plateforme Expérience Client",
      description: "Surveillance continue de la qualité à travers des avis vérifiés des clients. Les titulaires de certificats fournissent des retours après chaque séjour, garantissant que les propriétés maintiennent des standards élevés.",
      features: [
        { title: "Avis Vérifiés", desc: "Seuls les titulaires réels de certificats peuvent donner un avis" },
        { title: "Seuil de Qualité", desc: "Note minimale de 4.0 requise pour rester dans le réseau" },
        { title: "Suivi des Améliorations", desc: "Les propriétaires reçoivent des retours actionnables" },
      ],
      highlight: "Garantie de qualité:",
      highlightText: "Les propriétés en dessous des standards sont signalées et peuvent être retirées du réseau.",
    },
    flowTitle: "Comment les Titulaires de Certificats Demandent des Séjours",
    flowSteps: [
      { step: "DEMANDER", desc: "Soumettez vos préférences: dates, type de destination, taille du groupe" },
      { step: "OFFRE", desc: "Recevez une offre de propriété basée sur la disponibilité" },
      { step: "CONFIRMER", desc: "Acceptez l'offre dans les 48 heures pour sécuriser votre séjour" },
      { step: "VOYAGER", desc: "Profitez de vos vacances et laissez une WEEK-REVIEW" },
    ],
  },
}

export function WeekServices() {
  const { language } = useLanguage()
  const t = content[language as keyof typeof content] || content.en

  return (
    <section className="py-20 lg:py-32 bg-secondary/20 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-30" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/30 mb-6">
            <BadgeCheck size={14} className="text-primary" />
            <span className="text-sm text-primary font-medium">{t.badge}</span>
          </div>
          <h2 className="text-3xl lg:text-5xl font-bold mb-6">
            {t.title} <span className="gradient-text">{t.titleHighlight}</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t.subtitle}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* WEEK-TRACK */}
          <div className="bg-card border border-border rounded-3xl p-8 hover:border-primary/50 transition-all">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center">
                <Search className="w-7 h-7 text-primary" />
              </div>
              <div>
                <h3 className="text-2xl font-bold">{t.weekTrack.name}</h3>
                <p className="text-sm text-muted-foreground">{t.weekTrack.tagline}</p>
              </div>
            </div>

            <p className="text-muted-foreground mb-6 leading-relaxed">
              {t.weekTrack.description}
            </p>

            <div className="space-y-4 mb-6">
              {t.weekTrack.features.map((feature, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium">{feature.title}</p>
                    <p className="text-sm text-muted-foreground">{feature.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-secondary/50 rounded-xl p-4">
              <p className="text-sm">
                <span className="font-semibold text-primary">{t.weekTrack.highlight}</span>{" "}
                {t.weekTrack.highlightText}
              </p>
            </div>
          </div>

          {/* WEEK-REVIEW */}
          <div className="bg-card border border-border rounded-3xl p-8 hover:border-accent/50 transition-all">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 rounded-2xl bg-accent/10 flex items-center justify-center">
                <Star className="w-7 h-7 text-accent" />
              </div>
              <div>
                <h3 className="text-2xl font-bold">{t.weekReview.name}</h3>
                <p className="text-sm text-muted-foreground">{t.weekReview.tagline}</p>
              </div>
            </div>

            <p className="text-muted-foreground mb-6 leading-relaxed">
              {t.weekReview.description}
            </p>

            <div className="space-y-4 mb-6">
              {t.weekReview.features.map((feature, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium">{feature.title}</p>
                    <p className="text-sm text-muted-foreground">{feature.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-secondary/50 rounded-xl p-4">
              <p className="text-sm">
                <span className="font-semibold text-accent">{t.weekReview.highlight}</span>{" "}
                {t.weekReview.highlightText}
              </p>
            </div>
          </div>
        </div>

        {/* Request Flow */}
        <div className="mt-12 bg-card border border-border rounded-3xl p-8">
          <h3 className="text-xl font-bold mb-6 text-center">{t.flowTitle}</h3>
          <div className="grid md:grid-cols-4 gap-6">
            {t.flowSteps.map((step, idx) => (
              <div key={idx} className="text-center">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4 text-lg font-bold text-primary">
                  {idx + 1}
                </div>
                <p className="font-semibold mb-1">{step.step}</p>
                <p className="text-sm text-muted-foreground">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
