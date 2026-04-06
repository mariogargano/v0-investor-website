"use client"

import React from "react"
import { useState } from "react"
import { Shield, CheckCircle, User, Mail, Building, FileText, Calendar, Clock, Hash, ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Checkbox } from "@/components/ui/checkbox"

interface NDAgreementProps {
  userType: "investor" | "partner"
  onComplete: (data: { fullName: string; email: string; company: string; title: string }) => void
}

export function NDAgreement({ userType, onComplete }: NDAgreementProps) {
  const [step, setStep] = useState<"info" | "review" | "sign">("info")
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    company: "",
    title: "",
  })
  const [agreed, setAgreed] = useState(false)
  const [signature, setSignature] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [signatureTimestamp, setSignatureTimestamp] = useState<Date | null>(null)

  // Generate timestamp when entering sign step
  const getFormattedDate = () => {
    const date = signatureTimestamp || new Date()
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    })
  }

  const getFormattedTime = () => {
    const date = signatureTimestamp || new Date()
    return date.toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      timeZoneName: "short",
    })
  }

  const currentDate = getFormattedDate()
  const currentTime = getFormattedTime()

  const handleInfoSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (formData.fullName && formData.email) {
      setStep("review")
    }
  }

  // Normalize strings for comparison (trim whitespace, case insensitive)
  const normalizeForComparison = (str: string) => str.trim().toLowerCase()
  const isSignatureValid = normalizeForComparison(signature) === normalizeForComparison(formData.fullName) && signature.trim().length > 0

  const handleSign = async () => {
    if (!agreed || !isSignatureValid) return
    setIsSubmitting(true)
    
    // Simulate processing
    await new Promise((resolve) => setTimeout(resolve, 1000))
    
    setIsSubmitting(false)
    onComplete(formData)
  }

  const userTypeLabel = userType === "investor" ? "Investor" : "Partner"

  return (
    <div className="fixed inset-0 z-[9999] bg-background">
      <div className="absolute inset-0 bg-grid opacity-20" />
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[200px]" />

      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center p-4">
        {/* Logo */}
        <div className="mb-6">
          <img src="/images/week-chain-logo.png" alt="WEEK-CHAIN" className="h-16 w-16 object-contain rounded-full" />
        </div>

        <div className="w-full max-w-xl">
          {/* Progress */}
          <div className="flex items-center justify-center gap-3 mb-6">
            {["Information", "Review", "Sign"].map((label, idx) => {
              const stepIdx = step === "info" ? 0 : step === "review" ? 1 : 2
              const isCompleted = idx < stepIdx
              const isCurrent = idx === stepIdx
              return (
                <div key={label} className="flex items-center gap-2">
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
                      isCompleted
                        ? "bg-chart-3 text-background"
                        : isCurrent
                          ? "bg-primary text-primary-foreground"
                          : "bg-secondary text-muted-foreground"
                    }`}
                  >
                    {isCompleted ? <CheckCircle className="w-4 h-4" /> : idx + 1}
                  </div>
                  <span className="text-sm text-muted-foreground hidden sm:inline">{label}</span>
                  {idx < 2 && <div className="w-6 h-px bg-border hidden sm:block" />}
                </div>
              )
            })}
          </div>

          <div className="bg-card border border-border rounded-2xl overflow-hidden">
            {/* Header */}
            <div className="bg-secondary/30 px-6 py-4 border-b border-border">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Shield className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h2 className="font-semibold">Non-Disclosure Agreement</h2>
                  <p className="text-xs text-muted-foreground">
                    Required for {userTypeLabel} access to Data Room
                  </p>
                </div>
              </div>
            </div>

            <div className="p-6">
              {/* Step 1: Information */}
              {step === "info" && (
                <form onSubmit={handleInfoSubmit} className="space-y-4">
                  <p className="text-sm text-muted-foreground mb-4">
                    Please provide your information to proceed with the NDA.
                  </p>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-sm font-medium flex items-center gap-2">
                        <User className="w-4 h-4 text-muted-foreground" />
                        Full Legal Name *
                      </label>
                      <Input
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        placeholder="John Smith"
                        required
                        className="h-11"
                      />
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-sm font-medium flex items-center gap-2">
                        <Mail className="w-4 h-4 text-muted-foreground" />
                        Email *
                      </label>
                      <Input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="john@company.com"
                        required
                        className="h-11"
                      />
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-sm font-medium flex items-center gap-2">
                        <Building className="w-4 h-4 text-muted-foreground" />
                        Company
                      </label>
                      <Input
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        placeholder="Acme Ventures"
                        className="h-11"
                      />
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-sm font-medium flex items-center gap-2">
                        <FileText className="w-4 h-4 text-muted-foreground" />
                        Title / Role
                      </label>
                      <Input
                        value={formData.title}
                        onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                        placeholder="Managing Partner"
                        className="h-11"
                      />
                    </div>
                  </div>

                  <Button type="submit" className="w-full h-11 mt-2">
                    Continue to Review NDA
                  </Button>
                </form>
              )}

              {/* Step 2: Review NDA */}
              {step === "review" && (
                <div className="space-y-4">
                  <div className="bg-secondary/30 rounded-xl p-4 max-h-64 overflow-y-auto text-sm text-muted-foreground leading-relaxed">
                    <h3 className="font-semibold text-foreground mb-3">
                      CONFIDENTIALITY AND NON-DISCLOSURE AGREEMENT
                    </h3>

                    <p className="mb-3">
                      This Non-Disclosure Agreement ("Agreement") is entered into as of{" "}
                      <strong>{currentDate}</strong> by and between:
                    </p>

                    <p className="mb-3">
                      <strong>Disclosing Party:</strong> MORISES LLC and WEEK-CHAIN SAPI de CV,
                      collectively referred to as "WEEK-CHAIN"
                    </p>

                    <p className="mb-3">
                      <strong>Receiving Party:</strong> {formData.fullName}
                      {formData.company && `, representing ${formData.company}`}
                    </p>

                    <p className="font-semibold text-foreground mt-4 mb-2">1. DEFINITION OF CONFIDENTIAL INFORMATION</p>
                    <p className="mb-3">
                      "Confidential Information" means any and all information disclosed by WEEK-CHAIN,
                      including but not limited to: business plans, financial projections, valuation data,
                      investment terms, proprietary technology, trade secrets, and partnership agreements.
                    </p>

                    <p className="font-semibold text-foreground mt-4 mb-2">2. OBLIGATIONS</p>
                    <p className="mb-3">
                      The Receiving Party agrees to: (a) hold the Confidential Information in strict confidence;
                      (b) not disclose to third parties without prior written consent; (c) use solely for
                      evaluating a potential investment or business relationship with WEEK-CHAIN.
                    </p>

                    <p className="font-semibold text-foreground mt-4 mb-2">3. TERM</p>
                    <p className="mb-3">
                      This Agreement shall remain in effect for two (2) years from execution.
                    </p>

                    <p className="font-semibold text-foreground mt-4 mb-2">4. GOVERNING LAW</p>
                    <p>
                      This Agreement shall be governed by the laws of the State of Delaware, USA.
                    </p>
                  </div>

                  <div className="flex gap-3">
                    <Button variant="outline" onClick={() => setStep("info")} className="flex-1 h-11">
                      <ArrowLeft className="w-4 h-4 mr-2" />
                      Back
                    </Button>
                    <Button onClick={() => {
                      setSignatureTimestamp(new Date())
                      setStep("sign")
                    }} className="flex-1 h-11">
                      Proceed to Sign
                    </Button>
                  </div>
                </div>
              )}

              {/* Step 3: Sign */}
              {step === "sign" && (
                <div className="space-y-4">
                  <div className="bg-secondary/30 rounded-xl p-4">
                    <div className="grid grid-cols-2 gap-3 text-sm">
                      <div>
                        <p className="text-muted-foreground text-xs">Signatory</p>
                        <p className="font-medium">{formData.fullName}</p>
                      </div>
                      <div>
                        <p className="text-muted-foreground text-xs">Email</p>
                        <p className="font-medium">{formData.email}</p>
                      </div>
                      <div>
                        <p className="text-muted-foreground text-xs flex items-center gap-1">
                          <Calendar className="w-3 h-3" /> Date
                        </p>
                        <p className="font-medium">{currentDate}</p>
                      </div>
                      <div>
                        <p className="text-muted-foreground text-xs flex items-center gap-1">
                          <Clock className="w-3 h-3" /> Time
                        </p>
                        <p className="font-medium">{currentTime}</p>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium">
                      Type your full name to sign electronically
                    </label>
                    <Input
                      value={signature}
                      onChange={(e) => setSignature(e.target.value)}
                      placeholder={formData.fullName}
                      className="h-12 text-center font-serif text-lg italic"
                    />
                    {signature && !isSignatureValid && (
                      <p className="text-xs text-destructive">
                        Must match your name: "{formData.fullName}"
                      </p>
                    )}
                    {signature && isSignatureValid && (
                      <p className="text-xs text-chart-3 flex items-center gap-1">
                        <CheckCircle className="w-3 h-3" /> Signature valid
                      </p>
                    )}
                  </div>

                  <div className="flex items-start gap-3 p-3 bg-secondary/30 rounded-xl">
                    <Checkbox
                      id="agree"
                      checked={agreed}
                      onCheckedChange={(checked) => setAgreed(checked as boolean)}
                    />
                    <label htmlFor="agree" className="text-sm text-muted-foreground leading-relaxed cursor-pointer">
                      I confirm my electronic signature is legally binding and I agree to all terms of this NDA.
                    </label>
                  </div>

                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <Hash className="w-3 h-3" />
                    <span>Signature timestamped and recorded for legal validity.</span>
                  </div>

                  <div className="flex gap-3">
                    <Button variant="outline" onClick={() => setStep("review")} className="flex-1 h-11">
                      <ArrowLeft className="w-4 h-4 mr-2" />
                      Back
                    </Button>
                    <Button
                      onClick={handleSign}
                      disabled={!agreed || !isSignatureValid || isSubmitting}
                      className="flex-1 h-11"
                    >
                      {isSubmitting ? (
                        <span className="flex items-center gap-2">
                          <div className="w-4 h-4 border-2 border-primary-foreground border-t-transparent rounded-full animate-spin" />
                          Processing...
                        </span>
                      ) : (
                        "Sign & Enter Data Room"
                      )}
                    </Button>
                  </div>
                </div>
              )}
            </div>
          </div>

          <p className="text-xs text-muted-foreground text-center mt-4">
            Questions? Contact{" "}
            <a href="mailto:corporativo@morises.com" className="text-primary hover:underline">
              corporativo@morises.com
            </a>
          </p>
        </div>
      </div>
    </div>
  )
}

export function checkNDASigned(): boolean {
  if (typeof window === "undefined") return false
  return !!sessionStorage.getItem("wc-nda-complete")
}
