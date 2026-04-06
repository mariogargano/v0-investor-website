"use client"

import { useState } from "react"
import { PageLayout } from "@/components/page-layout"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useLanguage } from "@/lib/i18n"
import { 
  ArrowLeft, 
  ArrowRight, 
  Check, 
  Building2, 
  User, 
  CreditCard, 
  FileSignature,
  Shield,
  Lock,
  Globe,
  Percent,
  DollarSign,
  Building,
  Mail,
  Phone,
  MapPin,
  FileText,
  AlertCircle,
  CheckCircle2,
  Loader2,
  ExternalLink,
  Download
} from "lucide-react"
import Link from "next/link"
import { DownloadPitchDeck } from "@/components/download-pitch-deck"

const PRICE_PER_PERCENT = 35000
const MIN_PERCENT = 1
const MAX_PERCENT = 10

type Step = 1 | 2 | 3 | 4 | 5

interface InvestorData {
  // Step 1 - Investment
  percentage: number
  
  // Step 2 - Personal/Company Info
  investorType: "individual" | "company"
  fullName: string
  email: string
  phone: string
  country: string
  address: string
  
  // Company specific
  companyName: string
  companyRegistration: string
  companyCountry: string
  
  // Step 3 - Accreditation
  isAccredited: boolean
  accreditationType: string
  
  // Step 4 - Agreement
  acceptedTerms: boolean
  acceptedRisks: boolean
  acceptedPrivacy: boolean
}

const initialData: InvestorData = {
  percentage: 1,
  investorType: "individual",
  fullName: "",
  email: "",
  phone: "",
  country: "",
  address: "",
  companyName: "",
  companyRegistration: "",
  companyCountry: "",
  isAccredited: false,
  accreditationType: "",
  acceptedTerms: false,
  acceptedRisks: false,
  acceptedPrivacy: false,
}

export default function InvertirPage() {
  const [step, setStep] = useState<Step>(1)
  const [data, setData] = useState<InvestorData>(initialData)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isComplete, setIsComplete] = useState(false)
  const { t } = useLanguage()

  const totalInvestment = data.percentage * PRICE_PER_PERCENT

  const updateData = (updates: Partial<InvestorData>) => {
    setData(prev => ({ ...prev, ...updates }))
  }

  const canProceed = () => {
    switch (step) {
      case 1:
        return data.percentage >= MIN_PERCENT && data.percentage <= MAX_PERCENT
      case 2:
        if (data.investorType === "individual") {
          return data.fullName && data.email && data.phone && data.country
        }
        return data.companyName && data.companyRegistration && data.fullName && data.email
      case 3:
        return data.isAccredited && data.accreditationType
      case 4:
        return data.acceptedTerms && data.acceptedRisks && data.acceptedPrivacy
      default:
        return true
    }
  }

  const handleSubmit = async () => {
    setIsSubmitting(true)
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000))
    setIsSubmitting(false)
    setIsComplete(true)
  }

  const steps = [
    { num: 1, label: "Investment", icon: Percent },
    { num: 2, label: "Information", icon: User },
    { num: 3, label: "Accreditation", icon: Shield },
    { num: 4, label: "Agreement", icon: FileText },
    { num: 5, label: "Payment & Sign", icon: FileSignature },
  ]

  if (isComplete) {
    return (
      <PageLayout>
        <div className="min-h-[80vh] flex items-center justify-center px-4">
          <div className="max-w-2xl w-full text-center">
            <div className="w-24 h-24 rounded-full bg-chart-2/20 border-2 border-chart-2 flex items-center justify-center mx-auto mb-8">
              <CheckCircle2 className="w-12 h-12 text-chart-2" />
            </div>
            <h1 className="text-4xl font-bold mb-4">Investment Commitment Received</h1>
            <p className="text-muted-foreground text-lg mb-8">
              Thank you for your commitment to invest <span className="text-primary font-bold">{data.percentage}%</span> (${totalInvestment.toLocaleString()} USD) in WEEK-CHAIN.
            </p>
            
            <div className="bg-card border border-border rounded-2xl p-6 mb-8 text-left">
              <h3 className="font-semibold mb-4 flex items-center gap-2">
                <FileSignature className="w-5 h-5 text-primary" />
                Next Steps
              </h3>
              <ol className="space-y-3 text-sm text-muted-foreground">
                <li className="flex gap-3">
                  <span className="w-6 h-6 rounded-full bg-primary/20 text-primary text-xs flex items-center justify-center flex-shrink-0">1</span>
                  <span>You will receive an email with the Shareholders Agreement via <strong>EASYLAW</strong> for digital signature.</span>
                </li>
                <li className="flex gap-3">
                  <span className="w-6 h-6 rounded-full bg-primary/20 text-primary text-xs flex items-center justify-center flex-shrink-0">2</span>
                  <span>Complete the wire transfer to the escrow account within 5 business days.</span>
                </li>
                <li className="flex gap-3">
                  <span className="w-6 h-6 rounded-full bg-primary/20 text-primary text-xs flex items-center justify-center flex-shrink-0">3</span>
                  <span>Once payment is confirmed, your equity will be registered and you{"'"}ll receive your certificate.</span>
                </li>
              </ol>
            </div>

            <div className="bg-chart-4/10 border border-chart-4/30 rounded-xl p-4 mb-8">
              <p className="text-sm text-chart-4">
                <strong>Reference Number:</strong> WC-INV-{Date.now().toString(36).toUpperCase()}
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/inversionistas">
                <Button variant="outline" className="bg-transparent">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Back to Investor Portal
                </Button>
              </Link>
              <a href="mailto:corporativo@morises.com">
                <Button>
                  <Mail className="w-4 h-4 mr-2" />
                  Contact Investor Relations
                </Button>
              </a>
            </div>
          </div>
        </div>
      </PageLayout>
    )
  }

  return (
    <PageLayout>
      <div className="px-4 sm:px-6 lg:px-8 py-8">
        <div className="max-w-4xl mx-auto">
          {/* Back Link */}
          <Link
            href="/inversionistas"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            {t("backToHome")}
          </Link>

          {/* Header */}
          <div className="mb-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/30 mb-4">
              <Globe className="w-4 h-4 text-primary" />
              <span className="text-sm font-bold text-primary">REaaS</span>
              <span className="text-xs text-muted-foreground">Real Estate as a Service</span>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold mb-2">Invest in WEEK-CHAIN</h1>
            <p className="text-muted-foreground">Complete the form below to commit your investment</p>
          </div>

          {/* Progress Steps */}
          <div className="mb-12">
            <div className="flex items-center justify-between relative">
              {/* Progress Line */}
              <div className="absolute top-5 left-0 right-0 h-0.5 bg-border" />
              <div 
                className="absolute top-5 left-0 h-0.5 bg-primary transition-all duration-500"
                style={{ width: `${((step - 1) / (steps.length - 1)) * 100}%` }}
              />
              
              {steps.map((s) => (
                <div key={s.num} className="relative z-10 flex flex-col items-center">
                  <div 
                    className={`w-10 h-10 rounded-full flex items-center justify-center transition-all ${
                      step >= s.num 
                        ? "bg-primary text-primary-foreground" 
                        : "bg-card border-2 border-border text-muted-foreground"
                    }`}
                  >
                    {step > s.num ? (
                      <Check className="w-5 h-5" />
                    ) : (
                      <s.icon className="w-5 h-5" />
                    )}
                  </div>
                  <span className={`text-xs mt-2 hidden sm:block ${step >= s.num ? "text-foreground" : "text-muted-foreground"}`}>
                    {s.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Form Card */}
          <div className="bg-card border border-border rounded-3xl p-6 md:p-8">
            {/* Step 1: Investment Amount */}
            {step === 1 && (
              <div className="space-y-8">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                  <div>
                    <h2 className="text-2xl font-bold mb-2">Select Your Investment</h2>
                    <p className="text-muted-foreground">Choose the percentage of equity you want to acquire</p>
                  </div>
                  <DownloadPitchDeck />
                </div>

                {/* Valuation Info */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="bg-secondary/30 rounded-xl p-4 text-center">
                    <p className="text-xs text-muted-foreground mb-1">Pre-Money Valuation</p>
                    <p className="text-lg font-bold text-primary">$3.5M</p>
                  </div>
                  <div className="bg-secondary/30 rounded-xl p-4 text-center">
                    <p className="text-xs text-muted-foreground mb-1">Price per 1%</p>
                    <p className="text-lg font-bold">$35,000</p>
                  </div>
                  <div className="bg-secondary/30 rounded-xl p-4 text-center">
                    <p className="text-xs text-muted-foreground mb-1">Min. Investment</p>
                    <p className="text-lg font-bold">1%</p>
                  </div>
                  <div className="bg-secondary/30 rounded-xl p-4 text-center">
                    <p className="text-xs text-muted-foreground mb-1">Max. Available</p>
                    <p className="text-lg font-bold">10%</p>
                  </div>
                </div>

                {/* Percentage Selector */}
                <div>
                  <label className="block text-sm font-medium mb-3">Select Percentage</label>
                  <div className="grid grid-cols-5 gap-3 mb-4">
                    {[1, 2, 3, 5, 10].map((p) => (
                      <button
                        key={p}
                        onClick={() => updateData({ percentage: p })}
                        className={`p-4 rounded-xl border-2 transition-all ${
                          data.percentage === p
                            ? "border-primary bg-primary/10"
                            : "border-border hover:border-primary/50"
                        }`}
                      >
                        <span className="text-2xl font-bold">{p}%</span>
                        <p className="text-xs text-muted-foreground mt-1">${(p * PRICE_PER_PERCENT).toLocaleString()}</p>
                      </button>
                    ))}
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <span className="text-sm text-muted-foreground">Or enter custom:</span>
                    <div className="relative w-32">
                      <Input
                        type="number"
                        min={MIN_PERCENT}
                        max={MAX_PERCENT}
                        value={data.percentage}
                        onChange={(e) => updateData({ percentage: Math.min(MAX_PERCENT, Math.max(MIN_PERCENT, Number(e.target.value))) })}
                        className="pr-8"
                      />
                      <span className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground">%</span>
                    </div>
                  </div>
                </div>

                {/* Total */}
                <div className="bg-primary/10 border border-primary/30 rounded-2xl p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">Total Investment</p>
                      <p className="text-4xl font-bold text-primary">${totalInvestment.toLocaleString()} <span className="text-lg">USD</span></p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm text-muted-foreground mb-1">Equity Acquired</p>
                      <p className="text-4xl font-bold">{data.percentage}%</p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Step 2: Personal/Company Information */}
            {step === 2 && (
              <div className="space-y-8">
                <div>
                  <h2 className="text-2xl font-bold mb-2">Investor Information</h2>
                  <p className="text-muted-foreground">Tell us about yourself or your company</p>
                </div>

                {/* Investor Type Toggle */}
                <div className="flex gap-4">
                  <button
                    onClick={() => updateData({ investorType: "individual" })}
                    className={`flex-1 p-4 rounded-xl border-2 transition-all flex items-center gap-3 ${
                      data.investorType === "individual"
                        ? "border-primary bg-primary/10"
                        : "border-border hover:border-primary/50"
                    }`}
                  >
                    <User className="w-6 h-6" />
                    <div className="text-left">
                      <p className="font-semibold">Individual</p>
                      <p className="text-xs text-muted-foreground">Personal investment</p>
                    </div>
                  </button>
                  <button
                    onClick={() => updateData({ investorType: "company" })}
                    className={`flex-1 p-4 rounded-xl border-2 transition-all flex items-center gap-3 ${
                      data.investorType === "company"
                        ? "border-primary bg-primary/10"
                        : "border-border hover:border-primary/50"
                    }`}
                  >
                    <Building2 className="w-6 h-6" />
                    <div className="text-left">
                      <p className="font-semibold">Company</p>
                      <p className="text-xs text-muted-foreground">Corporate investment</p>
                    </div>
                  </button>
                </div>

                {/* Company Fields */}
                {data.investorType === "company" && (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 bg-secondary/30 rounded-xl">
                    <div>
                      <label className="block text-sm font-medium mb-2">
                        <Building className="w-4 h-4 inline mr-2" />
                        Company Name *
                      </label>
                      <Input
                        value={data.companyName}
                        onChange={(e) => updateData({ companyName: e.target.value })}
                        placeholder="Company legal name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">
                        <FileText className="w-4 h-4 inline mr-2" />
                        Registration Number *
                      </label>
                      <Input
                        value={data.companyRegistration}
                        onChange={(e) => updateData({ companyRegistration: e.target.value })}
                        placeholder="Company registration ID"
                      />
                    </div>
                    <div className="md:col-span-2">
                      <label className="block text-sm font-medium mb-2">
                        <Globe className="w-4 h-4 inline mr-2" />
                        Country of Incorporation
                      </label>
                      <Input
                        value={data.companyCountry}
                        onChange={(e) => updateData({ companyCountry: e.target.value })}
                        placeholder="e.g., United States"
                      />
                    </div>
                  </div>
                )}

                {/* Contact Person Fields */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium mb-2">
                      <User className="w-4 h-4 inline mr-2" />
                      {data.investorType === "company" ? "Authorized Representative" : "Full Legal Name"} *
                    </label>
                    <Input
                      value={data.fullName}
                      onChange={(e) => updateData({ fullName: e.target.value })}
                      placeholder="As it appears on official documents"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      <Mail className="w-4 h-4 inline mr-2" />
                      Email Address *
                    </label>
                    <Input
                      type="email"
                      value={data.email}
                      onChange={(e) => updateData({ email: e.target.value })}
                      placeholder="investor@email.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      <Phone className="w-4 h-4 inline mr-2" />
                      Phone Number *
                    </label>
                    <Input
                      type="tel"
                      value={data.phone}
                      onChange={(e) => updateData({ phone: e.target.value })}
                      placeholder="+1 (555) 000-0000"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      <Globe className="w-4 h-4 inline mr-2" />
                      Country of Residence *
                    </label>
                    <Input
                      value={data.country}
                      onChange={(e) => updateData({ country: e.target.value })}
                      placeholder="e.g., United States"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      <MapPin className="w-4 h-4 inline mr-2" />
                      Address
                    </label>
                    <Input
                      value={data.address}
                      onChange={(e) => updateData({ address: e.target.value })}
                      placeholder="Street, City, State, ZIP"
                    />
                  </div>
                </div>
              </div>
            )}

            {/* Step 3: Accreditation */}
            {step === 3 && (
              <div className="space-y-8">
                <div>
                  <h2 className="text-2xl font-bold mb-2">Investor Accreditation</h2>
                  <p className="text-muted-foreground">Verify your status as an accredited investor</p>
                </div>

                <div className="bg-chart-4/10 border border-chart-4/30 rounded-xl p-4 flex gap-3">
                  <AlertCircle className="w-5 h-5 text-chart-4 flex-shrink-0 mt-0.5" />
                  <p className="text-sm text-muted-foreground">
                    This investment opportunity is only available to accredited investors as defined by applicable securities regulations.
                  </p>
                </div>

                {/* Accreditation Question */}
                <div className="space-y-4">
                  <p className="font-medium">Do you qualify as an accredited investor?</p>
                  <div className="flex gap-4">
                    <button
                      onClick={() => updateData({ isAccredited: true })}
                      className={`flex-1 p-4 rounded-xl border-2 transition-all ${
                        data.isAccredited
                          ? "border-chart-2 bg-chart-2/10"
                          : "border-border hover:border-chart-2/50"
                      }`}
                    >
                      <Check className={`w-6 h-6 mx-auto mb-2 ${data.isAccredited ? "text-chart-2" : "text-muted-foreground"}`} />
                      <p className="font-semibold">Yes, I qualify</p>
                    </button>
                    <button
                      onClick={() => updateData({ isAccredited: false, accreditationType: "" })}
                      className={`flex-1 p-4 rounded-xl border-2 transition-all ${
                        !data.isAccredited
                          ? "border-destructive bg-destructive/10"
                          : "border-border hover:border-destructive/50"
                      }`}
                    >
                      <AlertCircle className={`w-6 h-6 mx-auto mb-2 ${!data.isAccredited ? "text-destructive" : "text-muted-foreground"}`} />
                      <p className="font-semibold">No</p>
                    </button>
                  </div>
                </div>

                {/* Accreditation Type */}
                {data.isAccredited && (
                  <div className="space-y-4">
                    <p className="font-medium">Select your accreditation basis:</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {[
                        { id: "income", label: "Income Test", desc: "Annual income over $200K (or $300K joint)" },
                        { id: "networth", label: "Net Worth Test", desc: "Net worth over $1M excluding primary residence" },
                        { id: "entity", label: "Entity", desc: "Entity with assets over $5M" },
                        { id: "professional", label: "Professional", desc: "Licensed broker, investment advisor, etc." },
                      ].map((type) => (
                        <button
                          key={type.id}
                          onClick={() => updateData({ accreditationType: type.id })}
                          className={`p-4 rounded-xl border-2 text-left transition-all ${
                            data.accreditationType === type.id
                              ? "border-primary bg-primary/10"
                              : "border-border hover:border-primary/50"
                          }`}
                        >
                          <p className="font-semibold">{type.label}</p>
                          <p className="text-xs text-muted-foreground mt-1">{type.desc}</p>
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {!data.isAccredited && (
                  <div className="bg-destructive/10 border border-destructive/30 rounded-xl p-6 text-center">
                    <AlertCircle className="w-12 h-12 text-destructive mx-auto mb-4" />
                    <h3 className="font-semibold mb-2">Investment Not Available</h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      Unfortunately, this investment opportunity is only available to accredited investors.
                    </p>
                    <a href="mailto:corporativo@morises.com" className="text-primary hover:underline text-sm">
                      Contact us for more information
                    </a>
                  </div>
                )}
              </div>
            )}

            {/* Step 4: Agreement */}
            {step === 4 && (
              <div className="space-y-8">
                <div>
                  <h2 className="text-2xl font-bold mb-2">Investment Agreement</h2>
                  <p className="text-muted-foreground">Review and accept the terms of investment</p>
                </div>

                {/* Investment Summary */}
                <div className="bg-secondary/30 rounded-xl p-6">
                  <h3 className="font-semibold mb-4">Investment Summary</h3>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <p className="text-muted-foreground">Investor</p>
                      <p className="font-medium">{data.investorType === "company" ? data.companyName : data.fullName}</p>
                    </div>
                    <div>
                      <p className="text-muted-foreground">Email</p>
                      <p className="font-medium">{data.email}</p>
                    </div>
                    <div>
                      <p className="text-muted-foreground">Equity</p>
                      <p className="font-medium text-primary">{data.percentage}%</p>
                    </div>
                    <div>
                      <p className="text-muted-foreground">Investment Amount</p>
                      <p className="font-medium">${totalInvestment.toLocaleString()} USD</p>
                    </div>
                  </div>
                </div>

                {/* Agreements */}
                <div className="space-y-4">
                  <label className="flex items-start gap-3 p-4 rounded-xl border border-border hover:border-primary/50 cursor-pointer transition-all">
                    <input
                      type="checkbox"
                      checked={data.acceptedTerms}
                      onChange={(e) => updateData({ acceptedTerms: e.target.checked })}
                      className="mt-1 w-5 h-5 rounded border-border"
                    />
                    <div>
                      <p className="font-medium">Terms & Conditions *</p>
                      <p className="text-sm text-muted-foreground">
                        I have read and agree to the <a href="#" className="text-primary hover:underline">Shareholders Agreement</a> and <a href="#" className="text-primary hover:underline">Investment Terms</a>.
                      </p>
                    </div>
                  </label>

                  <label className="flex items-start gap-3 p-4 rounded-xl border border-border hover:border-primary/50 cursor-pointer transition-all">
                    <input
                      type="checkbox"
                      checked={data.acceptedRisks}
                      onChange={(e) => updateData({ acceptedRisks: e.target.checked })}
                      className="mt-1 w-5 h-5 rounded border-border"
                    />
                    <div>
                      <p className="font-medium">Risk Acknowledgment *</p>
                      <p className="text-sm text-muted-foreground">
                        I understand that investing in startups involves significant risk, including the potential loss of my entire investment. Past performance is not indicative of future results.
                      </p>
                    </div>
                  </label>

                  <label className="flex items-start gap-3 p-4 rounded-xl border border-border hover:border-primary/50 cursor-pointer transition-all">
                    <input
                      type="checkbox"
                      checked={data.acceptedPrivacy}
                      onChange={(e) => updateData({ acceptedPrivacy: e.target.checked })}
                      className="mt-1 w-5 h-5 rounded border-border"
                    />
                    <div>
                      <p className="font-medium">Privacy Policy *</p>
                      <p className="text-sm text-muted-foreground">
                        I consent to WEEK-CHAIN processing my personal data as described in the <a href="#" className="text-primary hover:underline">Privacy Policy</a>.
                      </p>
                    </div>
                  </label>
                </div>
              </div>
            )}

            {/* Step 5: Payment & Signature */}
            {step === 5 && (
              <div className="space-y-8">
                <div>
                  <h2 className="text-2xl font-bold mb-2">Payment & Signature</h2>
                  <p className="text-muted-foreground">Complete your investment commitment</p>
                </div>

                {/* Wire Transfer Instructions */}
                <div className="bg-card border border-border rounded-2xl overflow-hidden">
                  <div className="bg-primary/10 px-6 py-4 border-b border-border">
                    <h3 className="font-semibold flex items-center gap-2">
                      <CreditCard className="w-5 h-5 text-primary" />
                      Wire Transfer Instructions
                    </h3>
                  </div>
                  <div className="p-6 space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                      <div>
                        <p className="text-muted-foreground mb-1">Bank Name</p>
                        <p className="font-mono bg-secondary/50 px-3 py-2 rounded">BBVA Mexico</p>
                      </div>
                      <div>
                        <p className="text-muted-foreground mb-1">Account Name</p>
                        <p className="font-mono bg-secondary/50 px-3 py-2 rounded">WEEK-CHAIN SAPI DE CV</p>
                      </div>
                      <div>
                        <p className="text-muted-foreground mb-1">Account Number</p>
                        <p className="font-mono bg-secondary/50 px-3 py-2 rounded">0123456789</p>
                      </div>
                      <div>
                        <p className="text-muted-foreground mb-1">SWIFT/BIC</p>
                        <p className="font-mono bg-secondary/50 px-3 py-2 rounded">BCMRMXMM</p>
                      </div>
                      <div>
                        <p className="text-muted-foreground mb-1">CLABE</p>
                        <p className="font-mono bg-secondary/50 px-3 py-2 rounded">012180001234567890</p>
                      </div>
                      <div>
                        <p className="text-muted-foreground mb-1">Reference</p>
                        <p className="font-mono bg-secondary/50 px-3 py-2 rounded">INV-{data.fullName.split(" ")[0]?.toUpperCase() || "INVESTOR"}-{data.percentage}PCT</p>
                      </div>
                    </div>
                    
                    <div className="bg-chart-4/10 border border-chart-4/30 rounded-xl p-4 mt-4">
                      <p className="text-sm text-muted-foreground">
                        <strong className="text-chart-4">Important:</strong> Transfer exactly <strong>${totalInvestment.toLocaleString()} USD</strong> within 5 business days of signing. Include the reference number in your transfer.
                      </p>
                    </div>
                  </div>
                </div>

                {/* EASYLAW Signature */}
                <div className="bg-card border border-border rounded-2xl overflow-hidden">
                  <div className="bg-chart-2/10 px-6 py-4 border-b border-border">
                    <h3 className="font-semibold flex items-center gap-2">
                      <FileSignature className="w-5 h-5 text-chart-2" />
                      Digital Signature via EASYLAW
                    </h3>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-16 h-16 rounded-xl bg-secondary/50 flex items-center justify-center">
                        <span className="text-2xl font-bold text-chart-2">EL</span>
                      </div>
                      <div>
                        <p className="font-semibold">EASYLAW Digital Signature</p>
                        <p className="text-sm text-muted-foreground">Legally binding electronic signature platform</p>
                      </div>
                    </div>
                    
                    <p className="text-sm text-muted-foreground mb-6">
                      Upon submission, you will receive an email from EASYLAW with the Shareholders Agreement. 
                      The document will include your investment details and requires your digital signature to complete the commitment.
                    </p>

                    <div className="flex items-center gap-3 p-4 bg-secondary/30 rounded-xl">
                      <Lock className="w-5 h-5 text-muted-foreground" />
                      <p className="text-sm text-muted-foreground">
                        Your signature will be verified and legally binding under Mexican and international digital signature laws.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Final Amount */}
                <div className="bg-primary/10 border-2 border-primary/30 rounded-2xl p-6 text-center">
                  <p className="text-sm text-muted-foreground mb-2">You are committing to invest</p>
                  <p className="text-5xl font-bold text-primary mb-2">${totalInvestment.toLocaleString()}</p>
                  <p className="text-lg">for <span className="font-bold">{data.percentage}%</span> equity in WEEK-CHAIN</p>
                </div>
              </div>
            )}

            {/* Navigation Buttons */}
            <div className="flex justify-between mt-8 pt-6 border-t border-border">
              <Button
                variant="outline"
                onClick={() => setStep((s) => Math.max(1, s - 1) as Step)}
                disabled={step === 1}
                className="bg-transparent"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back
              </Button>
              
              {step < 5 ? (
                <Button
                  onClick={() => setStep((s) => Math.min(5, s + 1) as Step)}
                  disabled={!canProceed()}
                >
                  Continue
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              ) : (
                <Button
                  onClick={handleSubmit}
                  disabled={isSubmitting}
                  className="bg-chart-2 hover:bg-chart-2/90"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                      Processing...
                    </>
                  ) : (
                    <>
                      <FileSignature className="w-4 h-4 mr-2" />
                      Submit & Request Signature
                    </>
                  )}
                </Button>
              )}
            </div>
          </div>

          {/* Security Note */}
          <div className="mt-8 flex items-center justify-center gap-2 text-muted-foreground/60">
            <Lock className="w-4 h-4" />
            <span className="text-xs">Secured with 256-bit encryption</span>
            <span className="text-xs">|</span>
            <span className="text-xs">WEEK-CHAIN Investor Relations</span>
          </div>
        </div>
      </div>
    </PageLayout>
  )
}
