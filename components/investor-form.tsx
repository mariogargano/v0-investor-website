"use client"

import { useState } from "react"
import { 
  User, 
  Mail, 
  Phone, 
  Building2, 
  DollarSign, 
  Globe, 
  FileText,
  CheckCircle,
  ArrowRight,
  Shield,
  Lock
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/lib/i18n"

type InvestorType = "individual" | "family_office" | "vc_fund" | "corporate" | "other"
type InvestmentRange = "35k" | "70k" | "175k" | "350k" | "custom"

interface FormData {
  // Step 1: Personal Info
  fullName: string
  email: string
  phone: string
  country: string
  // Step 2: Investor Profile
  investorType: InvestorType | ""
  companyName: string
  investmentRange: InvestmentRange | ""
  customAmount: string
  // Step 3: Interest & Timeline
  howHeard: string
  investmentTimeline: string
  questions: string
  acceptNDA: boolean
  acceptTerms: boolean
}

const translations = {
  en: {
    title: "Investor Interest Form",
    subtitle: "Complete this form to receive detailed investment documentation and schedule a call with our team",
    step1: "Personal Information",
    step2: "Investor Profile", 
    step3: "Interest & Timeline",
    fullName: "Full Legal Name",
    email: "Email Address",
    phone: "Phone Number",
    country: "Country of Residence",
    investorType: "Investor Type",
    individual: "Individual / Accredited Investor",
    familyOffice: "Family Office",
    vcFund: "VC Fund / Investment Fund",
    corporate: "Corporate / Strategic Investor",
    other: "Other",
    companyName: "Company / Fund Name",
    companyNameOptional: "(if applicable)",
    investmentRange: "Investment Range",
    range35k: "$35,000 (1% equity)",
    range70k: "$70,000 (2% equity)",
    range175k: "$175,000 (5% equity)",
    range350k: "$350,000 (10% equity)",
    rangeCustom: "Custom amount",
    customAmount: "Specify amount (USD)",
    howHeard: "How did you hear about us?",
    investmentTimeline: "Expected investment timeline",
    timelineImmediate: "Immediate (within 2 weeks)",
    timeline1Month: "Within 1 month",
    timeline3Months: "Within 3 months",
    timelineExploring: "Just exploring",
    questions: "Questions or comments for our team",
    questionsPlaceholder: "Tell us about your investment goals, questions about the model, or any specific information you need...",
    acceptNDA: "I agree to maintain confidentiality of all materials shared",
    acceptTerms: "I confirm I am an accredited investor and understand this is a high-risk investment",
    submit: "Submit Interest",
    submitting: "Submitting...",
    back: "Back",
    next: "Next",
    success: "Thank you for your interest!",
    successMessage: "Our team will contact you within 24-48 business hours with detailed documentation and to schedule a call.",
    contactDirect: "For immediate assistance:",
    securityNote: "Your information is encrypted and protected under our privacy policy",
    required: "Required field",
    selectOption: "Select an option",
    stepOf: "of"
  },
  es: {
    title: "Formulario de Interes de Inversor",
    subtitle: "Complete este formulario para recibir documentacion detallada de inversion y programar una llamada con nuestro equipo",
    step1: "Informacion Personal",
    step2: "Perfil de Inversor",
    step3: "Interes y Plazos",
    fullName: "Nombre Legal Completo",
    email: "Correo Electronico",
    phone: "Numero de Telefono",
    country: "Pais de Residencia",
    investorType: "Tipo de Inversor",
    individual: "Individual / Inversionista Acreditado",
    familyOffice: "Family Office",
    vcFund: "Fondo VC / Fondo de Inversion",
    corporate: "Corporativo / Inversor Estrategico",
    other: "Otro",
    companyName: "Nombre de Empresa / Fondo",
    companyNameOptional: "(si aplica)",
    investmentRange: "Rango de Inversion",
    range35k: "$35,000 USD (1% equity)",
    range70k: "$70,000 USD (2% equity)",
    range175k: "$175,000 USD (5% equity)",
    range350k: "$350,000 USD (10% equity)",
    rangeCustom: "Monto personalizado",
    customAmount: "Especificar monto (USD)",
    howHeard: "Como se entero de nosotros?",
    investmentTimeline: "Plazo esperado de inversion",
    timelineImmediate: "Inmediato (dentro de 2 semanas)",
    timeline1Month: "Dentro de 1 mes",
    timeline3Months: "Dentro de 3 meses",
    timelineExploring: "Solo explorando",
    questions: "Preguntas o comentarios para nuestro equipo",
    questionsPlaceholder: "Cuentenos sobre sus objetivos de inversion, preguntas sobre el modelo, o cualquier informacion especifica que necesite...",
    acceptNDA: "Acepto mantener la confidencialidad de todos los materiales compartidos",
    acceptTerms: "Confirmo que soy un inversor acreditado y entiendo que esta es una inversion de alto riesgo",
    submit: "Enviar Interes",
    submitting: "Enviando...",
    back: "Atras",
    next: "Siguiente",
    success: "Gracias por su interes!",
    successMessage: "Nuestro equipo lo contactara dentro de 24-48 horas habiles con documentacion detallada y para programar una llamada.",
    contactDirect: "Para asistencia inmediata:",
    securityNote: "Su informacion esta encriptada y protegida bajo nuestra politica de privacidad",
    required: "Campo requerido",
    selectOption: "Seleccione una opcion",
    stepOf: "de"
  },
  pt: {
    title: "Formulario de Interesse do Investidor",
    subtitle: "Complete este formulario para receber documentacao detalhada de investimento e agendar uma ligacao com nossa equipe",
    step1: "Informacao Pessoal",
    step2: "Perfil do Investidor",
    step3: "Interesse e Prazos",
    fullName: "Nome Legal Completo",
    email: "Endereco de Email",
    phone: "Numero de Telefone",
    country: "Pais de Residencia",
    investorType: "Tipo de Investidor",
    individual: "Individual / Investidor Acreditado",
    familyOffice: "Family Office",
    vcFund: "Fundo VC / Fundo de Investimento",
    corporate: "Corporativo / Investidor Estrategico",
    other: "Outro",
    companyName: "Nome da Empresa / Fundo",
    companyNameOptional: "(se aplicavel)",
    investmentRange: "Faixa de Investimento",
    range35k: "$35,000 USD (1% equity)",
    range70k: "$70,000 USD (2% equity)",
    range175k: "$175,000 USD (5% equity)",
    range350k: "$350,000 USD (10% equity)",
    rangeCustom: "Valor personalizado",
    customAmount: "Especificar valor (USD)",
    howHeard: "Como soube de nos?",
    investmentTimeline: "Prazo esperado de investimento",
    timelineImmediate: "Imediato (dentro de 2 semanas)",
    timeline1Month: "Dentro de 1 mes",
    timeline3Months: "Dentro de 3 meses",
    timelineExploring: "Apenas explorando",
    questions: "Perguntas ou comentarios para nossa equipe",
    questionsPlaceholder: "Conte-nos sobre seus objetivos de investimento, perguntas sobre o modelo, ou qualquer informacao especifica que precise...",
    acceptNDA: "Concordo em manter a confidencialidade de todos os materiais compartilhados",
    acceptTerms: "Confirmo que sou um investidor acreditado e entendo que este e um investimento de alto risco",
    submit: "Enviar Interesse",
    submitting: "Enviando...",
    back: "Voltar",
    next: "Proximo",
    success: "Obrigado pelo seu interesse!",
    successMessage: "Nossa equipe entrara em contato dentro de 24-48 horas uteis com documentacao detalhada e para agendar uma ligacao.",
    contactDirect: "Para assistencia imediata:",
    securityNote: "Suas informacoes estao criptografadas e protegidas sob nossa politica de privacidade",
    required: "Campo obrigatorio",
    selectOption: "Selecione uma opcao",
    stepOf: "de"
  },
  it: {
    title: "Modulo di Interesse Investitore",
    subtitle: "Compila questo modulo per ricevere documentazione dettagliata sull investimento e programmare una chiamata con il nostro team",
    step1: "Informazioni Personali",
    step2: "Profilo Investitore",
    step3: "Interesse e Tempistiche",
    fullName: "Nome Legale Completo",
    email: "Indirizzo Email",
    phone: "Numero di Telefono",
    country: "Paese di Residenza",
    investorType: "Tipo di Investitore",
    individual: "Individuale / Investitore Accreditato",
    familyOffice: "Family Office",
    vcFund: "Fondo VC / Fondo di Investimento",
    corporate: "Aziendale / Investitore Strategico",
    other: "Altro",
    companyName: "Nome Azienda / Fondo",
    companyNameOptional: "(se applicabile)",
    investmentRange: "Range di Investimento",
    range35k: "$35,000 USD (1% equity)",
    range70k: "$70,000 USD (2% equity)",
    range175k: "$175,000 USD (5% equity)",
    range350k: "$350,000 USD (10% equity)",
    rangeCustom: "Importo personalizzato",
    customAmount: "Specificare importo (USD)",
    howHeard: "Come ha saputo di noi?",
    investmentTimeline: "Tempistica prevista per investimento",
    timelineImmediate: "Immediato (entro 2 settimane)",
    timeline1Month: "Entro 1 mese",
    timeline3Months: "Entro 3 mesi",
    timelineExploring: "Solo esplorando",
    questions: "Domande o commenti per il nostro team",
    questionsPlaceholder: "Raccontaci dei tuoi obiettivi di investimento, domande sul modello, o qualsiasi informazione specifica di cui hai bisogno...",
    acceptNDA: "Accetto di mantenere la riservatezza di tutti i materiali condivisi",
    acceptTerms: "Confermo di essere un investitore accreditato e capisco che questo e un investimento ad alto rischio",
    submit: "Invia Interesse",
    submitting: "Invio in corso...",
    back: "Indietro",
    next: "Avanti",
    success: "Grazie per il tuo interesse!",
    successMessage: "Il nostro team ti contattera entro 24-48 ore lavorative con documentazione dettagliata e per programmare una chiamata.",
    contactDirect: "Per assistenza immediata:",
    securityNote: "Le tue informazioni sono crittografate e protette dalla nostra politica sulla privacy",
    required: "Campo obbligatorio",
    selectOption: "Seleziona un opzione",
    stepOf: "di"
  },
  fr: {
    title: "Formulaire d Interet Investisseur",
    subtitle: "Completez ce formulaire pour recevoir la documentation detaillee d investissement et planifier un appel avec notre equipe",
    step1: "Informations Personnelles",
    step2: "Profil Investisseur",
    step3: "Interet et Delais",
    fullName: "Nom Legal Complet",
    email: "Adresse Email",
    phone: "Numero de Telephone",
    country: "Pays de Residence",
    investorType: "Type d Investisseur",
    individual: "Individuel / Investisseur Accredite",
    familyOffice: "Family Office",
    vcFund: "Fonds VC / Fonds d Investissement",
    corporate: "Entreprise / Investisseur Strategique",
    other: "Autre",
    companyName: "Nom de l Entreprise / Fonds",
    companyNameOptional: "(si applicable)",
    investmentRange: "Fourchette d Investissement",
    range35k: "$35,000 USD (1% equity)",
    range70k: "$70,000 USD (2% equity)",
    range175k: "$175,000 USD (5% equity)",
    range350k: "$350,000 USD (10% equity)",
    rangeCustom: "Montant personnalise",
    customAmount: "Specifier le montant (USD)",
    howHeard: "Comment avez-vous entendu parler de nous?",
    investmentTimeline: "Delai d investissement prevu",
    timelineImmediate: "Immediat (dans 2 semaines)",
    timeline1Month: "Dans 1 mois",
    timeline3Months: "Dans 3 mois",
    timelineExploring: "Juste en exploration",
    questions: "Questions ou commentaires pour notre equipe",
    questionsPlaceholder: "Parlez-nous de vos objectifs d investissement, questions sur le modele, ou toute information specifique dont vous avez besoin...",
    acceptNDA: "J accepte de maintenir la confidentialite de tous les documents partages",
    acceptTerms: "Je confirme etre un investisseur accredite et comprends qu il s agit d un investissement a haut risque",
    submit: "Soumettre l Interet",
    submitting: "Envoi en cours...",
    back: "Retour",
    next: "Suivant",
    success: "Merci pour votre interet!",
    successMessage: "Notre equipe vous contactera dans les 24-48 heures ouvrables avec une documentation detaillee et pour planifier un appel.",
    contactDirect: "Pour une assistance immediate:",
    securityNote: "Vos informations sont cryptees et protegees par notre politique de confidentialite",
    required: "Champ obligatoire",
    selectOption: "Selectionnez une option",
    stepOf: "de"
  }
}

export function InvestorForm() {
  const { language } = useLanguage()
  const t = translations[language] || translations.en
  
  const [step, setStep] = useState(1)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    email: "",
    phone: "",
    country: "",
    investorType: "",
    companyName: "",
    investmentRange: "",
    customAmount: "",
    howHeard: "",
    investmentTimeline: "",
    questions: "",
    acceptNDA: false,
    acceptTerms: false
  })

  const updateField = (field: keyof FormData, value: string | boolean) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  const isStep1Valid = formData.fullName && formData.email && formData.phone && formData.country
  const isStep2Valid = formData.investorType && formData.investmentRange && 
    (formData.investmentRange !== "custom" || formData.customAmount)
  const isStep3Valid = formData.investmentTimeline && formData.acceptNDA && formData.acceptTerms

  const handleSubmit = async () => {
    setIsSubmitting(true)
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000))
    setIsSubmitting(false)
    setIsSubmitted(true)
  }

  if (isSubmitted) {
    return (
      <div className="bg-card border border-border rounded-2xl p-8 text-center max-w-2xl mx-auto">
        <div className="w-16 h-16 rounded-full bg-chart-3/20 flex items-center justify-center mx-auto mb-6">
          <CheckCircle className="w-8 h-8 text-chart-3" />
        </div>
        <h3 className="text-2xl font-bold text-foreground mb-3">{t.success}</h3>
        <p className="text-muted-foreground mb-6">{t.successMessage}</p>
        <div className="bg-muted/50 rounded-xl p-4 mb-6">
          <p className="text-sm text-muted-foreground mb-2">{t.contactDirect}</p>
          <a href="mailto:corporativo@morises.com" className="text-primary font-medium hover:underline">
            corporativo@morises.com
          </a>
          <span className="mx-2 text-muted-foreground">|</span>
          <a href="tel:+16056066067" className="text-primary font-medium hover:underline">
            +1 605 606 6067
          </a>
        </div>
        <Button 
          onClick={() => window.open("/documents/WEEK-CHAIN_Investor_Pitch_Deck_2026.pdf", "_blank")}
          className="bg-primary hover:bg-primary/90"
        >
          <FileText className="w-4 h-4 mr-2" />
          Download Pitch Deck
        </Button>
      </div>
    )
  }

  return (
    <div className="bg-card border border-border rounded-2xl overflow-hidden max-w-3xl mx-auto">
      {/* Header */}
      <div className="bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10 p-6 border-b border-border">
        <h2 className="text-2xl font-bold text-foreground mb-2">{t.title}</h2>
        <p className="text-muted-foreground text-sm">{t.subtitle}</p>
      </div>

      {/* Progress Steps */}
      <div className="px-6 py-4 border-b border-border bg-muted/30">
        <div className="flex items-center justify-between max-w-md mx-auto">
          {[1, 2, 3].map((s) => (
            <div key={s} className="flex items-center">
              <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold transition-colors ${
                step >= s 
                  ? "bg-primary text-primary-foreground" 
                  : "bg-muted text-muted-foreground"
              }`}>
                {step > s ? <CheckCircle className="w-4 h-4" /> : s}
              </div>
              <span className={`ml-2 text-sm hidden sm:block ${step >= s ? "text-foreground" : "text-muted-foreground"}`}>
                {s === 1 ? t.step1 : s === 2 ? t.step2 : t.step3}
              </span>
              {s < 3 && <div className={`w-8 sm:w-16 h-0.5 mx-2 ${step > s ? "bg-primary" : "bg-border"}`} />}
            </div>
          ))}
        </div>
      </div>

      {/* Form Content */}
      <div className="p-6">
        {/* Step 1: Personal Info */}
        {step === 1 && (
          <div className="space-y-5">
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                {t.fullName} <span className="text-destructive">*</span>
              </label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <input
                  type="text"
                  value={formData.fullName}
                  onChange={(e) => updateField("fullName", e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-background border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-colors"
                  placeholder="John Smith"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                {t.email} <span className="text-destructive">*</span>
              </label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => updateField("email", e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-background border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-colors"
                  placeholder="john@example.com"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                {t.phone} <span className="text-destructive">*</span>
              </label>
              <div className="relative">
                <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => updateField("phone", e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-background border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-colors"
                  placeholder="+1 555 123 4567"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                {t.country} <span className="text-destructive">*</span>
              </label>
              <div className="relative">
                <Globe className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <select
                  value={formData.country}
                  onChange={(e) => updateField("country", e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-background border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-colors appearance-none"
                >
                  <option value="">{t.selectOption}</option>
                  <option value="US">United States</option>
                  <option value="MX">Mexico</option>
                  <option value="CA">Canada</option>
                  <option value="ES">Spain</option>
                  <option value="IT">Italy</option>
                  <option value="FR">France</option>
                  <option value="DE">Germany</option>
                  <option value="UK">United Kingdom</option>
                  <option value="BR">Brazil</option>
                  <option value="AR">Argentina</option>
                  <option value="CO">Colombia</option>
                  <option value="CH">Switzerland</option>
                  <option value="OTHER">Other</option>
                </select>
              </div>
            </div>
          </div>
        )}

        {/* Step 2: Investor Profile */}
        {step === 2 && (
          <div className="space-y-5">
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                {t.investorType} <span className="text-destructive">*</span>
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  { value: "individual", label: t.individual },
                  { value: "family_office", label: t.familyOffice },
                  { value: "vc_fund", label: t.vcFund },
                  { value: "corporate", label: t.corporate },
                  { value: "other", label: t.other },
                ].map((option) => (
                  <button
                    key={option.value}
                    type="button"
                    onClick={() => updateField("investorType", option.value)}
                    className={`p-3 rounded-lg border text-left text-sm transition-colors ${
                      formData.investorType === option.value
                        ? "border-primary bg-primary/10 text-primary"
                        : "border-border hover:border-primary/50"
                    }`}
                  >
                    {option.label}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                {t.companyName} <span className="text-muted-foreground text-xs">{t.companyNameOptional}</span>
              </label>
              <div className="relative">
                <Building2 className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <input
                  type="text"
                  value={formData.companyName}
                  onChange={(e) => updateField("companyName", e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-background border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-colors"
                  placeholder="Acme Investments LLC"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                {t.investmentRange} <span className="text-destructive">*</span>
              </label>
              <div className="space-y-2">
                {[
                  { value: "35k", label: t.range35k },
                  { value: "70k", label: t.range70k },
                  { value: "175k", label: t.range175k },
                  { value: "350k", label: t.range350k },
                  { value: "custom", label: t.rangeCustom },
                ].map((option) => (
                  <button
                    key={option.value}
                    type="button"
                    onClick={() => updateField("investmentRange", option.value)}
                    className={`w-full p-3 rounded-lg border text-left flex items-center gap-3 transition-colors ${
                      formData.investmentRange === option.value
                        ? "border-primary bg-primary/10"
                        : "border-border hover:border-primary/50"
                    }`}
                  >
                    <DollarSign className={`w-5 h-5 ${formData.investmentRange === option.value ? "text-primary" : "text-muted-foreground"}`} />
                    <span className={formData.investmentRange === option.value ? "text-primary font-medium" : ""}>{option.label}</span>
                  </button>
                ))}
              </div>
              
              {formData.investmentRange === "custom" && (
                <div className="mt-3">
                  <input
                    type="text"
                    value={formData.customAmount}
                    onChange={(e) => updateField("customAmount", e.target.value)}
                    className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-colors"
                    placeholder={t.customAmount}
                  />
                </div>
              )}
            </div>
          </div>
        )}

        {/* Step 3: Interest & Timeline */}
        {step === 3 && (
          <div className="space-y-5">
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                {t.howHeard}
              </label>
              <select
                value={formData.howHeard}
                onChange={(e) => updateField("howHeard", e.target.value)}
                className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-colors"
              >
                <option value="">{t.selectOption}</option>
                <option value="referral">Referral / Word of mouth</option>
                <option value="linkedin">LinkedIn</option>
                <option value="website">Website / Search</option>
                <option value="event">Event / Conference</option>
                <option value="press">Press / Media</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                {t.investmentTimeline} <span className="text-destructive">*</span>
              </label>
              <div className="grid grid-cols-2 gap-3">
                {[
                  { value: "immediate", label: t.timelineImmediate },
                  { value: "1month", label: t.timeline1Month },
                  { value: "3months", label: t.timeline3Months },
                  { value: "exploring", label: t.timelineExploring },
                ].map((option) => (
                  <button
                    key={option.value}
                    type="button"
                    onClick={() => updateField("investmentTimeline", option.value)}
                    className={`p-3 rounded-lg border text-sm transition-colors ${
                      formData.investmentTimeline === option.value
                        ? "border-primary bg-primary/10 text-primary"
                        : "border-border hover:border-primary/50"
                    }`}
                  >
                    {option.label}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                {t.questions}
              </label>
              <textarea
                value={formData.questions}
                onChange={(e) => updateField("questions", e.target.value)}
                rows={4}
                className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-colors resize-none"
                placeholder={t.questionsPlaceholder}
              />
            </div>

            <div className="space-y-3 pt-4 border-t border-border">
              <label className="flex items-start gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  checked={formData.acceptNDA}
                  onChange={(e) => updateField("acceptNDA", e.target.checked)}
                  className="mt-1 w-4 h-4 rounded border-border text-primary focus:ring-primary"
                />
                <span className="text-sm text-muted-foreground">{t.acceptNDA} <span className="text-destructive">*</span></span>
              </label>

              <label className="flex items-start gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  checked={formData.acceptTerms}
                  onChange={(e) => updateField("acceptTerms", e.target.checked)}
                  className="mt-1 w-4 h-4 rounded border-border text-primary focus:ring-primary"
                />
                <span className="text-sm text-muted-foreground">{t.acceptTerms} <span className="text-destructive">*</span></span>
              </label>
            </div>
          </div>
        )}

        {/* Navigation Buttons */}
        <div className="flex items-center justify-between mt-8 pt-6 border-t border-border">
          {step > 1 ? (
            <Button variant="outline" onClick={() => setStep(step - 1)}>
              {t.back}
            </Button>
          ) : (
            <div />
          )}

          {step < 3 ? (
            <Button
              onClick={() => setStep(step + 1)}
              disabled={step === 1 ? !isStep1Valid : !isStep2Valid}
              className="bg-primary hover:bg-primary/90"
            >
              {t.next}
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          ) : (
            <Button
              onClick={handleSubmit}
              disabled={!isStep3Valid || isSubmitting}
              className="bg-accent hover:bg-accent/90 text-accent-foreground"
            >
              {isSubmitting ? t.submitting : t.submit}
              {!isSubmitting && <ArrowRight className="w-4 h-4 ml-2" />}
            </Button>
          )}
        </div>
      </div>

      {/* Security Footer */}
      <div className="px-6 py-4 bg-muted/30 border-t border-border">
        <div className="flex items-center justify-center gap-2 text-xs text-muted-foreground">
          <Lock className="w-3 h-3" />
          <span>{t.securityNote}</span>
          <Shield className="w-3 h-3 ml-2" />
        </div>
      </div>
    </div>
  )
}
