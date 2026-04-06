"use client"

import {
  Shield,
  Lock,
  FileCheck,
  Database,
  Server,
  Hash,
  Clock,
  CheckCircle2,
  Fingerprint,
  Globe,
} from "lucide-react"

const certificationSteps = [
  {
    step: "01",
    title: "METADATA GEN",
    description: "JSON structure with holder data, property and 15-year validity",
    icon: Database,
  },
  {
    step: "02",
    title: "SHA-256 HASH",
    description: "Unique immutable digital fingerprint linking data to certificate",
    icon: Hash,
  },
  {
    step: "03",
    title: "NOM-151 SEAL",
    description: "Timestamp and conservation certificate via PSC for full legal validity",
    icon: FileCheck,
  },
  {
    step: "04",
    title: "SVC ISSUANCE",
    description: "Final digital certificate with full traceability and redundant storage",
    icon: CheckCircle2,
  },
]

const techStack = [
  { name: "React / Next.js", category: "Frontend" },
  { name: "Tailwind CSS", category: "Styling" },
  { name: "Mobile PWA", category: "Mobile" },
  { name: "Apple/Android Wallet", category: "Integration" },
  { name: "PostgreSQL", category: "Database" },
  { name: "AWS S3 (Immutable)", category: "Storage" },
  { name: "NOM-151 Vault", category: "Compliance" },
  { name: "SHA-256 Hashing", category: "Security" },
]

const securityFeatures = [
  {
    category: "ENCRYPTION",
    items: [
      { title: "Data in Transit", desc: "TLS 1.3 and SSL protocols" },
      { title: "Data at Rest", desc: "AES-256 military-grade encryption" },
      { title: "Redundancy", desc: "Multi-region 99.9% availability" },
    ],
  },
  {
    category: "ACCESS",
    items: [
      { title: "Authentication", desc: "MFA for all admin roles" },
      { title: "Authorization", desc: "RBAC role-based access" },
      { title: "Identity", desc: "OAuth 2.0 / OpenID Connect" },
    ],
  },
  {
    category: "AUDIT",
    items: [
      { title: "Immutable Logs", desc: "SHA-256 chained activity logs" },
      { title: "Traceability", desc: "Full SVC lifecycle history" },
      { title: "Compliance", desc: "International data protection" },
    ],
  },
]

export function TechCompliance() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-chart-2/10 text-chart-2 text-sm font-medium mb-4">
            <Shield className="w-4 h-4" />
            Technical & Compliance
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-balance">
            Trust Based on <span className="gradient-text">Code and Law</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            WEEK-WORLD architecture ensures data integrity, legal compliance (NOM-151), and full auditability
          </p>
        </div>

        {/* SVC Certification Flow */}
        <div className="mb-16">
          <h3 className="text-xl font-bold mb-8 text-center">SVC Certification Flow: End-to-End Integrity</h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {certificationSteps.map((step, index) => {
              const Icon = step.icon
              return (
                <div key={step.step} className="relative">
                  <div className="bg-card border border-border rounded-2xl p-6 h-full">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                        <Icon className="w-5 h-5 text-primary" />
                      </div>
                      <span className="text-2xl font-bold text-primary/30">{step.step}</span>
                    </div>
                    <h4 className="font-bold text-sm mb-2">{step.title}</h4>
                    <p className="text-xs text-muted-foreground">{step.description}</p>
                  </div>
                  {index < certificationSteps.length - 1 && (
                    <div className="hidden md:block absolute top-1/2 -right-2 w-4 text-primary/30">
                      <span className="text-2xl">&rarr;</span>
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        </div>

        {/* NOM-151 Compliance */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          <div className="bg-card border border-border rounded-2xl p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-chart-4/10 flex items-center justify-center">
                <FileCheck className="w-6 h-6 text-chart-4" />
              </div>
              <div>
                <h3 className="font-bold">NOM-151-SCFI-2016</h3>
                <p className="text-xs text-muted-foreground">Legal Compliance Framework</p>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex gap-3">
                <CheckCircle2 className="w-5 h-5 text-chart-2 flex-shrink-0" />
                <div>
                  <p className="text-sm font-medium">Integrity Presumption</p>
                  <p className="text-xs text-muted-foreground">Legal validity in courts, ensuring SVC content unchanged since issuance</p>
                </div>
              </div>
              <div className="flex gap-3">
                <CheckCircle2 className="w-5 h-5 text-chart-2 flex-shrink-0" />
                <div>
                  <p className="text-sm font-medium">Timestamp Authority (TSA)</p>
                  <p className="text-xs text-muted-foreground">Generated by certified PSC accredited by Ministry of Economy</p>
                </div>
              </div>
              <div className="flex gap-3">
                <CheckCircle2 className="w-5 h-5 text-chart-2 flex-shrink-0" />
                <div>
                  <p className="text-sm font-medium">Conservation Certificate</p>
                  <p className="text-xs text-muted-foreground">XML file with document hash and PSC signature</p>
                </div>
              </div>
              <div className="flex gap-3">
                <CheckCircle2 className="w-5 h-5 text-chart-2 flex-shrink-0" />
                <div>
                  <p className="text-sm font-medium">PROFECO Alignment</p>
                  <p className="text-xs text-muted-foreground">Consumer protection compliance for digital adhesion contracts</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-card border border-border rounded-2xl p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                <Fingerprint className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-bold">SHA-256 Immutability</h3>
                <p className="text-xs text-muted-foreground">Cryptographic Data Integrity</p>
              </div>
            </div>
            
            {/* Hash Visualization */}
            <div className="bg-background/50 rounded-xl p-4 mb-4 font-mono text-xs">
              <p className="text-muted-foreground mb-2">{"// SVC METADATA (INPUT)"}</p>
              <pre className="text-primary/80 overflow-x-auto">
{`{
  "id": "WC-15-2025-0003",
  "titular": "Sophie Müller",
  "propiedad": "Puerto Vallarta",
  "semana": 15,
  "vigencia": "15 Años"
}`}
              </pre>
              <div className="flex items-center gap-2 my-3">
                <div className="flex-1 h-px bg-border" />
                <span className="text-chart-2 font-bold">SHA-256</span>
                <div className="flex-1 h-px bg-border" />
              </div>
              <p className="text-muted-foreground mb-2">{"// DIGITAL FINGERPRINT"}</p>
              <p className="text-chart-2 break-all">e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855</p>
            </div>
            
            <div className="grid grid-cols-2 gap-3 text-xs">
              <div className="bg-secondary/30 rounded-lg p-3">
                <p className="font-medium mb-1">Absolute Uniqueness</p>
                <p className="text-muted-foreground">Any change generates completely different hash</p>
              </div>
              <div className="bg-secondary/30 rounded-lg p-3">
                <p className="font-medium mb-1">Audit Verification</p>
                <p className="text-muted-foreground">Auditors can independently recalculate hash</p>
              </div>
            </div>
          </div>
        </div>

        {/* Security Grid */}
        <div className="mb-16">
          <h3 className="text-xl font-bold mb-8 text-center">Security, Compliance & Data Audit</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {securityFeatures.map((section) => (
              <div key={section.category} className="bg-card border border-border rounded-2xl p-6">
                <h4 className="text-sm font-bold text-primary mb-4 flex items-center gap-2">
                  {section.category === "ENCRYPTION" && <Lock className="w-4 h-4" />}
                  {section.category === "ACCESS" && <Shield className="w-4 h-4" />}
                  {section.category === "AUDIT" && <FileCheck className="w-4 h-4" />}
                  {section.category}
                </h4>
                <div className="space-y-3">
                  {section.items.map((item) => (
                    <div key={item.title} className="bg-secondary/30 rounded-lg p-3">
                      <p className="text-sm font-medium">{item.title}</p>
                      <p className="text-xs text-muted-foreground">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Tech Stack */}
        <div className="bg-gradient-to-br from-primary/5 via-transparent to-accent/5 rounded-3xl border border-border p-8">
          <h3 className="text-xl font-bold mb-6 text-center">Technology Stack</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {techStack.map((tech) => (
              <div key={tech.name} className="bg-card/50 border border-border/50 rounded-xl p-4 text-center">
                <p className="font-medium text-sm">{tech.name}</p>
                <p className="text-xs text-muted-foreground">{tech.category}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
