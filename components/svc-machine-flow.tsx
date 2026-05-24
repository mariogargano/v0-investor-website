"use client"

import { useState } from "react"
import { 
  Send, 
  Sparkles, 
  CheckCircle2, 
  Calendar, 
  Users, 
  MapPin,
  Clock,
  Shield,
  FileCheck,
  Zap,
  ArrowRight,
  Database,
  Lock,
  Bell
} from "lucide-react"
import { useLanguage } from "@/lib/i18n"

const content = {
  en: {
    badge: "Core Technology",
    title: "The SVC Machine",
    titleHighlight: "Booking Engine",
    subtitle: "Our proprietary algorithm that matches holder demand with real-time property inventory across the global SPV network",
    steps: [
      {
        number: "01",
        name: "REQUEST",
        title: "The Guest Request",
        description: "The process begins when the Holder (or an allied agency through WEEK-BOOKING) decides to use their contracted usage weeks.",
        action: "Through the WEEK-CHAIN app, the user opens a request indicating their ideal travel parameters.",
        details: [
          { icon: MapPin, label: "Destination", value: "Desired location (e.g., Playa del Carmen)" },
          { icon: Calendar, label: "Dates", value: "Tentative date range for the stay" },
          { icon: Users, label: "PAX", value: "Number of travelers (max per certificate)" },
        ],
        validation: [
          "SVC certificate is active and valid",
          "Available weeks in user balance",
          "No pending penalties or holds"
        ],
        color: "primary",
        gradient: "from-primary to-primary/70"
      },
      {
        number: "02",
        name: "OFFER",
        title: "SVC Machine Offer Generation",
        description: "Once the request is received, the central algorithm of the ecosystem takes action to match demand with real available inventory in the global SPV network.",
        action: "The SVC Machine reviews the Capacity Ledger of properties matching the location and PAX requested.",
        details: [
          { icon: Database, label: "Data Cross", value: "Real-time inventory check across all SPVs" },
          { icon: Sparkles, label: "Floating Availability", value: "48 commercial weeks per property" },
          { icon: Clock, label: "Expiration", value: "24-48 hour offer validity timer" },
        ],
        example: "Confirmed availability at Villa Mungata from October 10-17 for 8 PAX",
        color: "accent",
        gradient: "from-accent to-accent/70"
      },
      {
        number: "03",
        name: "CONFIRM",
        title: "Immutable Booking Anchor",
        description: "This is the legal and technological closing phase where the transaction becomes definitive.",
        action: "The user selects their preferred offer and clicks 'Confirm' to lock in the reservation.",
        details: [
          { icon: FileCheck, label: "E-Signature", value: "NOM-151 compliant digital signature" },
          { icon: Lock, label: "Blockchain", value: "Immutable record on distributed ledger" },
          { icon: Bell, label: "Notifications", value: "Instant alerts to all stakeholders" },
        ],
        outputs: [
          "Unique confirmation number generated",
          "Property manager notified automatically",
          "Maintenance team scheduled",
          "Check-in instructions sent to holder"
        ],
        color: "chart-3",
        gradient: "from-chart-3 to-chart-3/70"
      }
    ],
    capacityTitle: "Capacity Ledger Architecture",
    capacityDesc: "Each property in the network maintains a real-time capacity ledger tracking 48 commercial SVC weeks + 4 B2B/maintenance weeks",
    weekTypes: [
      { label: "SVC Commercial", weeks: 48, color: "bg-primary", desc: "Available to certificate holders" },
      { label: "B2B / Partners", weeks: 2, color: "bg-accent", desc: "Reserved for WEEK-BOOKING partners" },
      { label: "Maintenance", weeks: 2, color: "bg-muted", desc: "Property upkeep and quality control" }
    ],
    benefitsTitle: "Why This Matters for Investors",
    benefits: [
      {
        title: "Zero Overbooking Risk",
        desc: "Real-time inventory prevents double-booking and ensures 100% fulfillment rate"
      },
      {
        title: "Maximized Asset Utilization",
        desc: "48+4 week model extracts maximum value from each property in the network"
      },
      {
        title: "Automated Operations",
        desc: "Reduces human error and operational costs through algorithmic matching"
      },
      {
        title: "Transparent Audit Trail",
        desc: "Every transaction is recorded with NOM-151 compliance and blockchain backup"
      }
    ]
  },
  es: {
    badge: "Tecnologia Core",
    title: "La SVC Machine",
    titleHighlight: "Motor de Reservas",
    subtitle: "Nuestro algoritmo propietario que empareja la demanda de holders con el inventario de propiedades en tiempo real a traves de la red global de SPVs",
    steps: [
      {
        number: "01",
        name: "REQUEST",
        title: "La Solicitud del Huesped",
        description: "El proceso inicia cuando el Holder (o una agencia aliada a traves de WEEK-BOOKING) decide utilizar sus semanas de derecho de uso contratadas.",
        action: "A traves de la app de WEEK-CHAIN, el usuario abre una solicitud indicando sus parametros de viaje ideales.",
        details: [
          { icon: MapPin, label: "Destino", value: "Ubicacion deseada (ej. Playa del Carmen)" },
          { icon: Calendar, label: "Fechas", value: "Rango de fechas tentativas para la estancia" },
          { icon: Users, label: "PAX", value: "Numero de viajeros (maximo por certificado)" },
        ],
        validation: [
          "Certificado SVC activo y valido",
          "Semanas disponibles en saldo del usuario",
          "Sin penalizaciones o retenciones pendientes"
        ],
        color: "primary",
        gradient: "from-primary to-primary/70"
      },
      {
        number: "02",
        name: "OFFER",
        title: "Generacion de Ofertas SVC Machine",
        description: "Una vez recibida la solicitud, el algoritmo central del ecosistema entra en accion para emparejar la demanda con el inventario real disponible en la red global de SPVs.",
        action: "La SVC Machine revisa el Capacity Ledger de las propiedades que coinciden con la ubicacion y los PAX solicitados.",
        details: [
          { icon: Database, label: "Cruce de Datos", value: "Verificacion de inventario en tiempo real en todos los SPVs" },
          { icon: Sparkles, label: "Disponibilidad Flotante", value: "48 semanas comerciales por propiedad" },
          { icon: Clock, label: "Expiracion", value: "Temporizador de validez de oferta 24-48 horas" },
        ],
        example: "Disponibilidad confirmada en Villa Mungata del 10 al 17 de Octubre para 8 PAX",
        color: "accent",
        gradient: "from-accent to-accent/70"
      },
      {
        number: "03",
        name: "CONFIRM",
        title: "Anclaje Inmutable de Reserva",
        description: "Esta es la fase de cierre legal y tecnologico donde la transaccion se vuelve definitiva.",
        action: "El usuario selecciona su oferta preferida y hace clic en 'Confirmar' para anclar la reserva.",
        details: [
          { icon: FileCheck, label: "Firma Electronica", value: "Firma digital compatible con NOM-151" },
          { icon: Lock, label: "Blockchain", value: "Registro inmutable en ledger distribuido" },
          { icon: Bell, label: "Notificaciones", value: "Alertas instantaneas a todos los involucrados" },
        ],
        outputs: [
          "Numero de confirmacion unico generado",
          "Administrador de propiedad notificado automaticamente",
          "Equipo de mantenimiento programado",
          "Instrucciones de check-in enviadas al holder"
        ],
        color: "chart-3",
        gradient: "from-chart-3 to-chart-3/70"
      }
    ],
    capacityTitle: "Arquitectura del Capacity Ledger",
    capacityDesc: "Cada propiedad en la red mantiene un libro de capacidad en tiempo real que rastrea 48 semanas comerciales SVC + 4 semanas B2B/mantenimiento",
    weekTypes: [
      { label: "SVC Comercial", weeks: 48, color: "bg-primary", desc: "Disponible para titulares de certificados" },
      { label: "B2B / Partners", weeks: 2, color: "bg-accent", desc: "Reservado para socios de WEEK-BOOKING" },
      { label: "Mantenimiento", weeks: 2, color: "bg-muted", desc: "Mantenimiento de propiedad y control de calidad" }
    ],
    benefitsTitle: "Por Que Esto Importa a los Inversionistas",
    benefits: [
      {
        title: "Cero Riesgo de Sobreventa",
        desc: "Inventario en tiempo real previene doble reserva y asegura 100% de cumplimiento"
      },
      {
        title: "Utilizacion Maxima de Activos",
        desc: "Modelo 48+4 semanas extrae maximo valor de cada propiedad en la red"
      },
      {
        title: "Operaciones Automatizadas",
        desc: "Reduce error humano y costos operativos mediante emparejamiento algoritmico"
      },
      {
        title: "Auditoria Transparente",
        desc: "Cada transaccion se registra con cumplimiento NOM-151 y respaldo blockchain"
      }
    ]
  },
  pt: {
    badge: "Tecnologia Core",
    title: "A SVC Machine",
    titleHighlight: "Motor de Reservas",
    subtitle: "Nosso algoritmo proprietario que combina a demanda dos holders com o inventario de propriedades em tempo real atraves da rede global de SPVs",
    steps: [
      {
        number: "01",
        name: "REQUEST",
        title: "A Solicitacao do Hospede",
        description: "O processo comeca quando o Holder (ou uma agencia aliada atraves do WEEK-BOOKING) decide usar suas semanas de direito de uso contratadas.",
        action: "Atraves do app WEEK-CHAIN, o usuario abre uma solicitacao indicando seus parametros de viagem ideais.",
        details: [
          { icon: MapPin, label: "Destino", value: "Local desejado (ex. Playa del Carmen)" },
          { icon: Calendar, label: "Datas", value: "Faixa de datas tentativas para a estadia" },
          { icon: Users, label: "PAX", value: "Numero de viajantes (maximo por certificado)" },
        ],
        validation: [
          "Certificado SVC ativo e valido",
          "Semanas disponiveis no saldo do usuario",
          "Sem penalidades ou retencoes pendentes"
        ],
        color: "primary",
        gradient: "from-primary to-primary/70"
      },
      {
        number: "02",
        name: "OFFER",
        title: "Geracao de Ofertas SVC Machine",
        description: "Uma vez recebida a solicitacao, o algoritmo central do ecossistema entra em acao para combinar a demanda com o inventario real disponivel na rede global de SPVs.",
        action: "A SVC Machine revisa o Capacity Ledger das propriedades que correspondem a localizacao e PAX solicitados.",
        details: [
          { icon: Database, label: "Cruzamento de Dados", value: "Verificacao de inventario em tempo real em todos os SPVs" },
          { icon: Sparkles, label: "Disponibilidade Flutuante", value: "48 semanas comerciais por propriedade" },
          { icon: Clock, label: "Expiracao", value: "Timer de validade de oferta 24-48 horas" },
        ],
        example: "Disponibilidade confirmada na Villa Mungata de 10 a 17 de Outubro para 8 PAX",
        color: "accent",
        gradient: "from-accent to-accent/70"
      },
      {
        number: "03",
        name: "CONFIRM",
        title: "Ancoragem Imutavel de Reserva",
        description: "Esta e a fase de fechamento legal e tecnologico onde a transacao se torna definitiva.",
        action: "O usuario seleciona sua oferta preferida e clica em 'Confirmar' para ancorar a reserva.",
        details: [
          { icon: FileCheck, label: "Assinatura Eletronica", value: "Assinatura digital compativel com NOM-151" },
          { icon: Lock, label: "Blockchain", value: "Registro imutavel em ledger distribuido" },
          { icon: Bell, label: "Notificacoes", value: "Alertas instantaneos para todos os envolvidos" },
        ],
        outputs: [
          "Numero de confirmacao unico gerado",
          "Administrador de propriedade notificado automaticamente",
          "Equipe de manutencao agendada",
          "Instrucoes de check-in enviadas ao holder"
        ],
        color: "chart-3",
        gradient: "from-chart-3 to-chart-3/70"
      }
    ],
    capacityTitle: "Arquitetura do Capacity Ledger",
    capacityDesc: "Cada propriedade na rede mantem um livro de capacidade em tempo real rastreando 48 semanas comerciais SVC + 4 semanas B2B/manutencao",
    weekTypes: [
      { label: "SVC Comercial", weeks: 48, color: "bg-primary", desc: "Disponivel para titulares de certificados" },
      { label: "B2B / Partners", weeks: 2, color: "bg-accent", desc: "Reservado para parceiros WEEK-BOOKING" },
      { label: "Manutencao", weeks: 2, color: "bg-muted", desc: "Manutencao de propriedade e controle de qualidade" }
    ],
    benefitsTitle: "Por Que Isso Importa para Investidores",
    benefits: [
      {
        title: "Zero Risco de Sobrevenda",
        desc: "Inventario em tempo real previne reserva dupla e garante 100% de cumprimento"
      },
      {
        title: "Utilizacao Maxima de Ativos",
        desc: "Modelo 48+4 semanas extrai valor maximo de cada propriedade na rede"
      },
      {
        title: "Operacoes Automatizadas",
        desc: "Reduz erro humano e custos operacionais atraves de combinacao algoritmica"
      },
      {
        title: "Auditoria Transparente",
        desc: "Cada transacao e registrada com conformidade NOM-151 e backup blockchain"
      }
    ]
  },
  it: {
    badge: "Tecnologia Core",
    title: "La SVC Machine",
    titleHighlight: "Motore di Prenotazione",
    subtitle: "Il nostro algoritmo proprietario che abbina la domanda degli holder con l'inventario delle proprieta in tempo reale attraverso la rete globale di SPV",
    steps: [
      {
        number: "01",
        name: "REQUEST",
        title: "La Richiesta dell'Ospite",
        description: "Il processo inizia quando l'Holder (o un'agenzia alleata tramite WEEK-BOOKING) decide di utilizzare le sue settimane di diritto d'uso contrattate.",
        action: "Attraverso l'app WEEK-CHAIN, l'utente apre una richiesta indicando i suoi parametri di viaggio ideali.",
        details: [
          { icon: MapPin, label: "Destinazione", value: "Luogo desiderato (es. Playa del Carmen)" },
          { icon: Calendar, label: "Date", value: "Range di date tentative per il soggiorno" },
          { icon: Users, label: "PAX", value: "Numero di viaggiatori (max per certificato)" },
        ],
        validation: [
          "Certificato SVC attivo e valido",
          "Settimane disponibili nel saldo utente",
          "Nessuna penalita o trattenuta pendente"
        ],
        color: "primary",
        gradient: "from-primary to-primary/70"
      },
      {
        number: "02",
        name: "OFFER",
        title: "Generazione Offerte SVC Machine",
        description: "Una volta ricevuta la richiesta, l'algoritmo centrale dell'ecosistema entra in azione per abbinare la domanda con l'inventario reale disponibile nella rete globale di SPV.",
        action: "La SVC Machine rivede il Capacity Ledger delle proprieta che corrispondono alla posizione e ai PAX richiesti.",
        details: [
          { icon: Database, label: "Incrocio Dati", value: "Verifica inventario in tempo reale su tutti gli SPV" },
          { icon: Sparkles, label: "Disponibilita Flottante", value: "48 settimane commerciali per proprieta" },
          { icon: Clock, label: "Scadenza", value: "Timer di validita offerta 24-48 ore" },
        ],
        example: "Disponibilita confermata a Villa Mungata dal 10 al 17 Ottobre per 8 PAX",
        color: "accent",
        gradient: "from-accent to-accent/70"
      },
      {
        number: "03",
        name: "CONFIRM",
        title: "Ancoraggio Immutabile della Prenotazione",
        description: "Questa e la fase di chiusura legale e tecnologica dove la transazione diventa definitiva.",
        action: "L'utente seleziona l'offerta preferita e clicca 'Conferma' per ancorare la prenotazione.",
        details: [
          { icon: FileCheck, label: "Firma Elettronica", value: "Firma digitale conforme NOM-151" },
          { icon: Lock, label: "Blockchain", value: "Registro immutabile su ledger distribuito" },
          { icon: Bell, label: "Notifiche", value: "Avvisi istantanei a tutti gli interessati" },
        ],
        outputs: [
          "Numero di conferma unico generato",
          "Property manager notificato automaticamente",
          "Team di manutenzione programmato",
          "Istruzioni check-in inviate all'holder"
        ],
        color: "chart-3",
        gradient: "from-chart-3 to-chart-3/70"
      }
    ],
    capacityTitle: "Architettura del Capacity Ledger",
    capacityDesc: "Ogni proprieta nella rete mantiene un libro di capacita in tempo reale che traccia 48 settimane commerciali SVC + 4 settimane B2B/manutenzione",
    weekTypes: [
      { label: "SVC Commerciale", weeks: 48, color: "bg-primary", desc: "Disponibile per titolari di certificati" },
      { label: "B2B / Partners", weeks: 2, color: "bg-accent", desc: "Riservato per partner WEEK-BOOKING" },
      { label: "Manutenzione", weeks: 2, color: "bg-muted", desc: "Manutenzione proprieta e controllo qualita" }
    ],
    benefitsTitle: "Perche Questo Importa agli Investitori",
    benefits: [
      {
        title: "Zero Rischio Overbooking",
        desc: "Inventario in tempo reale previene doppia prenotazione e assicura 100% di adempimento"
      },
      {
        title: "Utilizzo Massimo degli Asset",
        desc: "Modello 48+4 settimane estrae valore massimo da ogni proprieta nella rete"
      },
      {
        title: "Operazioni Automatizzate",
        desc: "Riduce errore umano e costi operativi tramite abbinamento algoritmico"
      },
      {
        title: "Audit Trasparente",
        desc: "Ogni transazione e registrata con conformita NOM-151 e backup blockchain"
      }
    ]
  },
  fr: {
    badge: "Technologie Core",
    title: "La SVC Machine",
    titleHighlight: "Moteur de Reservation",
    subtitle: "Notre algorithme proprietaire qui associe la demande des holders avec l'inventaire des proprietes en temps reel a travers le reseau global de SPV",
    steps: [
      {
        number: "01",
        name: "REQUEST",
        title: "La Demande du Client",
        description: "Le processus commence quand le Holder (ou une agence alliee via WEEK-BOOKING) decide d'utiliser ses semaines de droit d'usage contractees.",
        action: "Via l'app WEEK-CHAIN, l'utilisateur ouvre une demande indiquant ses parametres de voyage ideaux.",
        details: [
          { icon: MapPin, label: "Destination", value: "Lieu souhaite (ex. Playa del Carmen)" },
          { icon: Calendar, label: "Dates", value: "Plage de dates tentatives pour le sejour" },
          { icon: Users, label: "PAX", value: "Nombre de voyageurs (max par certificat)" },
        ],
        validation: [
          "Certificat SVC actif et valide",
          "Semaines disponibles dans le solde utilisateur",
          "Aucune penalite ou retenue en cours"
        ],
        color: "primary",
        gradient: "from-primary to-primary/70"
      },
      {
        number: "02",
        name: "OFFER",
        title: "Generation d'Offres SVC Machine",
        description: "Une fois la demande recue, l'algorithme central de l'ecosysteme entre en action pour associer la demande avec l'inventaire reel disponible dans le reseau global de SPV.",
        action: "La SVC Machine examine le Capacity Ledger des proprietes correspondant a l'emplacement et aux PAX demandes.",
        details: [
          { icon: Database, label: "Croisement Donnees", value: "Verification inventaire temps reel sur tous les SPV" },
          { icon: Sparkles, label: "Disponibilite Flottante", value: "48 semaines commerciales par propriete" },
          { icon: Clock, label: "Expiration", value: "Timer de validite offre 24-48 heures" },
        ],
        example: "Disponibilite confirmee a Villa Mungata du 10 au 17 Octobre pour 8 PAX",
        color: "accent",
        gradient: "from-accent to-accent/70"
      },
      {
        number: "03",
        name: "CONFIRM",
        title: "Ancrage Immutable de Reservation",
        description: "C'est la phase de cloture legale et technologique ou la transaction devient definitive.",
        action: "L'utilisateur selectionne son offre preferee et clique 'Confirmer' pour ancrer la reservation.",
        details: [
          { icon: FileCheck, label: "Signature Electronique", value: "Signature numerique conforme NOM-151" },
          { icon: Lock, label: "Blockchain", value: "Enregistrement immutable sur ledger distribue" },
          { icon: Bell, label: "Notifications", value: "Alertes instantanees a toutes les parties" },
        ],
        outputs: [
          "Numero de confirmation unique genere",
          "Gestionnaire de propriete notifie automatiquement",
          "Equipe de maintenance programmee",
          "Instructions check-in envoyees au holder"
        ],
        color: "chart-3",
        gradient: "from-chart-3 to-chart-3/70"
      }
    ],
    capacityTitle: "Architecture du Capacity Ledger",
    capacityDesc: "Chaque propriete du reseau maintient un livre de capacite en temps reel tracant 48 semaines commerciales SVC + 4 semaines B2B/maintenance",
    weekTypes: [
      { label: "SVC Commercial", weeks: 48, color: "bg-primary", desc: "Disponible pour titulaires de certificats" },
      { label: "B2B / Partners", weeks: 2, color: "bg-accent", desc: "Reserve pour partenaires WEEK-BOOKING" },
      { label: "Maintenance", weeks: 2, color: "bg-muted", desc: "Entretien propriete et controle qualite" }
    ],
    benefitsTitle: "Pourquoi C'est Important pour les Investisseurs",
    benefits: [
      {
        title: "Zero Risque de Surreservation",
        desc: "Inventaire temps reel empeche double reservation et assure 100% de realisation"
      },
      {
        title: "Utilisation Maximale des Actifs",
        desc: "Modele 48+4 semaines extrait valeur maximale de chaque propriete du reseau"
      },
      {
        title: "Operations Automatisees",
        desc: "Reduit erreur humaine et couts operationnels via appariement algorithmique"
      },
      {
        title: "Audit Transparent",
        desc: "Chaque transaction est enregistree avec conformite NOM-151 et backup blockchain"
      }
    ]
  }
}

export function SVCMachineFlow() {
  const { language } = useLanguage()
  const t = content[language] || content.en
  const [activeStep, setActiveStep] = useState(0)

  const stepIcons = [Send, Sparkles, CheckCircle2]

  return (
    <section className="py-20 lg:py-28 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 bg-primary/10 border border-primary/30 rounded-full text-primary text-sm font-medium mb-4">
            {t.badge}
          </span>
          <h2 className="text-3xl lg:text-5xl font-bold mb-6">
            {t.title} <span className="gradient-text">{t.titleHighlight}</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            {t.subtitle}
          </p>
        </div>

        {/* Step Selector */}
        <div className="flex justify-center gap-4 mb-12">
          {t.steps.map((step, index) => {
            const Icon = stepIcons[index]
            return (
              <button
                key={index}
                onClick={() => setActiveStep(index)}
                className={`flex items-center gap-3 px-6 py-4 rounded-xl transition-all ${
                  activeStep === index
                    ? `bg-${step.color}/10 border-2 border-${step.color} shadow-lg`
                    : "bg-card border border-border hover:border-primary/30"
                }`}
              >
                <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${step.gradient} flex items-center justify-center`}>
                  <Icon className="w-5 h-5 text-primary-foreground" />
                </div>
                <div className="text-left">
                  <p className="text-xs text-muted-foreground">{step.number}</p>
                  <p className={`font-bold ${activeStep === index ? 'text-foreground' : 'text-muted-foreground'}`}>
                    {step.name}
                  </p>
                </div>
              </button>
            )
          })}
        </div>

        {/* Active Step Detail */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {/* Left: Description */}
          <div className="bg-card border border-border rounded-2xl p-8">
            <div className="flex items-center gap-4 mb-6">
              <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${t.steps[activeStep].gradient} flex items-center justify-center`}>
                {(() => {
                  const Icon = stepIcons[activeStep]
                  return <Icon className="w-7 h-7 text-primary-foreground" />
                })()}
              </div>
              <div>
                <p className="text-sm text-muted-foreground">{t.steps[activeStep].number}</p>
                <h3 className="text-2xl font-bold">{t.steps[activeStep].title}</h3>
              </div>
            </div>
            
            <p className="text-muted-foreground mb-6 leading-relaxed">
              {t.steps[activeStep].description}
            </p>
            
            <div className="bg-primary/5 border border-primary/20 rounded-xl p-4 mb-6">
              <div className="flex items-start gap-3">
                <Zap className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <p className="text-sm text-foreground">
                  <span className="font-semibold">Action: </span>
                  {t.steps[activeStep].action}
                </p>
              </div>
            </div>

            {t.steps[activeStep].example && (
              <div className="bg-accent/10 border border-accent/30 rounded-xl p-4">
                <p className="text-sm text-accent font-medium">
                  Example: "{t.steps[activeStep].example}"
                </p>
              </div>
            )}
          </div>

          {/* Right: Details */}
          <div className="space-y-4">
            {/* Parameters/Details */}
            <div className="bg-card border border-border rounded-2xl p-6">
              <h4 className="font-semibold mb-4 text-foreground">Parameters</h4>
              <div className="space-y-4">
                {t.steps[activeStep].details.map((detail, index) => {
                  const Icon = detail.icon
                  return (
                    <div key={index} className="flex items-start gap-4 p-3 bg-muted/50 rounded-lg">
                      <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${t.steps[activeStep].gradient} flex items-center justify-center flex-shrink-0`}>
                        <Icon className="w-5 h-5 text-primary-foreground" />
                      </div>
                      <div>
                        <p className="font-medium text-foreground">{detail.label}</p>
                        <p className="text-sm text-muted-foreground">{detail.value}</p>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>

            {/* Validation or Outputs */}
            {t.steps[activeStep].validation && (
              <div className="bg-card border border-border rounded-2xl p-6">
                <h4 className="font-semibold mb-4 text-foreground flex items-center gap-2">
                  <Shield className="w-5 h-5 text-primary" />
                  Security Validation
                </h4>
                <ul className="space-y-2">
                  {t.steps[activeStep].validation.map((item, index) => (
                    <li key={index} className="flex items-center gap-3 text-sm text-muted-foreground">
                      <CheckCircle2 className="w-4 h-4 text-chart-3 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {t.steps[activeStep].outputs && (
              <div className="bg-card border border-border rounded-2xl p-6">
                <h4 className="font-semibold mb-4 text-foreground flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-chart-3" />
                  System Outputs
                </h4>
                <ul className="space-y-2">
                  {t.steps[activeStep].outputs.map((item, index) => (
                    <li key={index} className="flex items-center gap-3 text-sm text-muted-foreground">
                      <ArrowRight className="w-4 h-4 text-chart-3 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>

        {/* Flow Visual */}
        <div className="bg-card border border-border rounded-2xl p-8 mb-16">
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8">
            {t.steps.map((step, index) => {
              const Icon = stepIcons[index]
              return (
                <div key={index} className="flex items-center gap-4">
                  <div 
                    className={`flex flex-col items-center gap-2 p-4 rounded-xl transition-all cursor-pointer ${
                      activeStep === index ? 'bg-primary/10 ring-2 ring-primary' : 'hover:bg-muted/50'
                    }`}
                    onClick={() => setActiveStep(index)}
                  >
                    <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${step.gradient} flex items-center justify-center`}>
                      <Icon className="w-8 h-8 text-primary-foreground" />
                    </div>
                    <span className="font-bold text-sm">{step.name}</span>
                  </div>
                  {index < t.steps.length - 1 && (
                    <ArrowRight className="w-6 h-6 text-muted-foreground hidden md:block" />
                  )}
                </div>
              )
            })}
          </div>
        </div>

        {/* Capacity Ledger */}
        <div className="bg-card border border-border rounded-2xl p-8 mb-16">
          <h3 className="text-xl font-bold text-center mb-2">{t.capacityTitle}</h3>
          <p className="text-sm text-muted-foreground text-center mb-8">{t.capacityDesc}</p>
          
          <div className="max-w-2xl mx-auto">
            {/* Visual Bar */}
            <div className="h-8 rounded-full overflow-hidden flex mb-4">
              <div className="bg-primary h-full" style={{ width: '92.3%' }} />
              <div className="bg-accent h-full" style={{ width: '3.85%' }} />
              <div className="bg-muted h-full" style={{ width: '3.85%' }} />
            </div>
            
            {/* Legend */}
            <div className="grid md:grid-cols-3 gap-4">
              {t.weekTypes.map((type, index) => (
                <div key={index} className="flex items-center gap-3 p-3 bg-muted/30 rounded-lg">
                  <div className={`w-4 h-4 rounded ${type.color}`} />
                  <div>
                    <p className="font-semibold text-sm">{type.label}</p>
                    <p className="text-xs text-muted-foreground">{type.weeks} weeks - {type.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Benefits Grid */}
        <div>
          <h3 className="text-xl font-bold text-center mb-8">{t.benefitsTitle}</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {t.benefits.map((benefit, index) => (
              <div key={index} className="bg-card border border-border rounded-xl p-6 hover:border-primary/30 transition-all">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <CheckCircle2 className="w-6 h-6 text-primary" />
                </div>
                <h4 className="font-bold mb-2">{benefit.title}</h4>
                <p className="text-sm text-muted-foreground">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
