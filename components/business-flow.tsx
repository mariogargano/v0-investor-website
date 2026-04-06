"use client"

import { 
  Home, 
  FileText, 
  Users, 
  DollarSign, 
  PieChart,
  ArrowDown,
  CheckCircle,
  Building2,
  Percent
} from "lucide-react"
import { useLanguage } from "@/lib/i18n"

export function BusinessFlow() {
  const { language } = useLanguage()
  
  const content = {
    en: {
      badge: "Business Model",
      title: "How",
      titleHighlight: "Money Flows",
      subtitle: "Complete visualization of the WEEK-CHAIN revenue cycle from property acquisition to profit distribution",
      steps: [
        {
          step: 1,
          title: "Property Acquisition",
          icon: Home,
          color: "bg-primary",
          details: [
            "Owner offers property for 15-year Rent-to-Buy",
            "WEEK-CHAIN evaluates viability (PAX capacity)",
            "Agreement signed with future purchase option"
          ],
          example: {
            label: "Example: 4-PAX Villa",
            value: "$326,400 (owner price)"
          }
        },
        {
          step: 2,
          title: "Certificate Creation",
          icon: FileText,
          color: "bg-accent",
          details: [
            "48 certificates created (1 week each)",
            "Price set based on PAX capacity",
            "15-year validity with usage rights"
          ],
          example: {
            label: "48 certs x $8,500",
            value: "$408,000 total"
          }
        },
        {
          step: 3,
          title: "Pre-Sale Campaign",
          icon: Users,
          color: "bg-chart-3",
          details: [
            "Certificates sold to vacationers",
            "Marketing through WEEK-AGENT network",
            "Escrow until target reached"
          ],
          example: {
            label: "3-6 months timeline",
            value: "48 holders secured"
          }
        },
        {
          step: 4,
          title: "Revenue Collection",
          icon: DollarSign,
          color: "bg-chart-4",
          details: [
            "Full amount collected at pre-sale close",
            "Property secured for 15 years",
            "Operations begin immediately"
          ],
          example: {
            label: "Total Collected",
            value: "$408,000"
          }
        },
        {
          step: 5,
          title: "Profit Distribution",
          icon: PieChart,
          color: "bg-chart-5",
          details: [
            "Automatic distribution per smart contract",
            "All parties paid simultaneously",
            "Transparent, auditable records"
          ],
          example: {
            label: "Distribution",
            value: "See breakdown below"
          }
        }
      ],
      distribution: {
        title: "Revenue Distribution Breakdown",
        subtitle: "Owner Price (80%) + 25% Margin = Total SVC Price. Distribution of the 25% margin:",
        items: [
          { recipient: "Property Owner", percentage: 80, amount: 326400, color: "bg-foreground/70", desc: "Base property value" },
          { recipient: "Notarial Reserve", percentage: 10, amount: 40800, color: "bg-chart-5", desc: "Future acquisition fund" },
          { recipient: "WEEK-CHAIN", percentage: 11, amount: 44880, color: "bg-primary", desc: "Platform operation & profit" },
          { recipient: "WEEK-AGENT", percentage: 4, amount: 16320, color: "bg-chart-3", desc: "Sales commission" }
        ],
        total: "Total: $408,000 (Owner 80% + Margin 25%)"
      },
      investorReturn: {
        title: "Your Return as 1% Equity Holder",
        subtitle: "From this single 4-PAX property sale:",
        platformShare: "Platform Revenue (11%)",
        platformAmount: "$44,880",
        yourShare: "Your 1% Share",
        yourAmount: "$448.80"
      },
      scale: {
        title: "At Scale",
        items: [
          { properties: "10 properties/year", revenue: "$408K platform revenue", yourShare: "$4,080/year" },
          { properties: "50 properties/year", revenue: "$2.04M platform revenue", yourShare: "$20,400/year" },
          { properties: "200 properties/year", revenue: "$8.16M platform revenue", yourShare: "$81,600/year" }
        ],
        note: "Plus recurring revenue from management, booking, insurance, and services"
      }
    },
    pt: {
      badge: "Modelo de Negocio",
      title: "Como o",
      titleHighlight: "Dinheiro Flui",
      subtitle: "Visualizacao completa do ciclo de receita WEEK-CHAIN desde a aquisicao de propriedade ate a distribuicao de lucros",
      steps: [
        {
          step: 1,
          title: "Aquisicao de Propriedade",
          icon: Home,
          color: "bg-primary",
          details: [
            "Proprietario oferece propriedade para Rent-to-Buy de 15 anos",
            "WEEK-CHAIN avalia viabilidade (capacidade PAX)",
            "Acordo assinado com opcao de compra futura"
          ],
          example: {
            label: "Exemplo: Villa 4-PAX",
            value: "$326,400 (preco proprietario)"
          }
        },
        {
          step: 2,
          title: "Criacao de Certificados",
          icon: FileText,
          color: "bg-accent",
          details: [
            "48 certificados criados (1 semana cada)",
            "Preco definido baseado na capacidade PAX",
            "Validade de 15 anos com direitos de uso"
          ],
          example: {
            label: "48 certs x $8,500",
            value: "$408,000 total"
          }
        },
        {
          step: 3,
          title: "Campanha de Pre-Venda",
          icon: Users,
          color: "bg-chart-3",
          details: [
            "Certificados vendidos para viajantes",
            "Marketing atraves da rede WEEK-AGENT",
            "Deposito ate atingir meta"
          ],
          example: {
            label: "3-6 meses de prazo",
            value: "48 titulares garantidos"
          }
        },
        {
          step: 4,
          title: "Coleta de Receita",
          icon: DollarSign,
          color: "bg-chart-4",
          details: [
            "Valor total coletado no fechamento da pre-venda",
            "Propriedade garantida por 15 anos",
            "Operacoes comecam imediatamente"
          ],
          example: {
            label: "Total Coletado",
            value: "$408,000"
          }
        },
        {
          step: 5,
          title: "Distribuicao de Lucros",
          icon: PieChart,
          color: "bg-chart-5",
          details: [
            "Distribuicao automatica por contrato inteligente",
            "Todas as partes pagas simultaneamente",
            "Registros transparentes e auditaveis"
          ],
          example: {
            label: "Distribuicao",
            value: "Veja detalhamento abaixo"
          }
        }
      ],
      distribution: {
        title: "Detalhamento da Distribuicao de Receita",
        subtitle: "Preco Proprietario (80%) + Margem 25% = Preco Total SVC. Distribuicao da margem de 25%:",
        items: [
          { recipient: "Proprietario", percentage: 80, amount: 326400, color: "bg-foreground/70", desc: "Valor base da propriedade" },
          { recipient: "Reserva Notarial", percentage: 10, amount: 40800, color: "bg-chart-5", desc: "Fundo aquisicao futura" },
          { recipient: "WEEK-CHAIN", percentage: 11, amount: 44880, color: "bg-primary", desc: "Operacao e lucro plataforma" },
          { recipient: "WEEK-AGENT", percentage: 4, amount: 16320, color: "bg-chart-3", desc: "Comissao de vendas" }
        ],
        total: "Total: $408,000 (Proprietario 80% + Margem 25%)"
      },
      investorReturn: {
        title: "Seu Retorno como Detentor de 1% de Equity",
        subtitle: "Desta unica venda de propriedade 4-PAX:",
        platformShare: "Receita Plataforma (11%)",
        platformAmount: "$44,880",
        yourShare: "Sua Participacao de 1%",
        yourAmount: "$448.80"
      },
      scale: {
        title: "Em Escala",
        items: [
          { properties: "10 propriedades/ano", revenue: "$408K receita plataforma", yourShare: "$4,080/ano" },
          { properties: "50 propriedades/ano", revenue: "$2.04M receita plataforma", yourShare: "$20,400/ano" },
          { properties: "200 propriedades/ano", revenue: "$8.16M receita plataforma", yourShare: "$81,600/ano" }
        ],
        note: "Mais receita recorrente de gestao, reservas, seguro e servicos"
      }
    },
    it: {
      badge: "Modello di Business",
      title: "Come",
      titleHighlight: "Fluisce il Denaro",
      subtitle: "Visualizzazione completa del ciclo di ricavi WEEK-CHAIN dall'acquisizione della proprieta alla distribuzione dei profitti",
      steps: [
        {
          step: 1,
          title: "Acquisizione Proprieta",
          icon: Home,
          color: "bg-primary",
          details: [
            "Proprietario offre proprieta per Rent-to-Buy di 15 anni",
            "WEEK-CHAIN valuta viabilita (capacita PAX)",
            "Accordo firmato con opzione di acquisto futuro"
          ],
          example: {
            label: "Esempio: Villa 4-PAX",
            value: "$326,400 (prezzo proprietario)"
          }
        },
        {
          step: 2,
          title: "Creazione Certificati",
          icon: FileText,
          color: "bg-accent",
          details: [
            "48 certificati creati (1 settimana ciascuno)",
            "Prezzo definito in base alla capacita PAX",
            "Validita 15 anni con diritti d'uso"
          ],
          example: {
            label: "48 cert x $8,500",
            value: "$408,000 totale"
          }
        },
        {
          step: 3,
          title: "Campagna Pre-Vendita",
          icon: Users,
          color: "bg-chart-3",
          details: [
            "Certificati venduti ai vacanzieri",
            "Marketing attraverso rete WEEK-AGENT",
            "Escrow fino al raggiungimento obiettivo"
          ],
          example: {
            label: "3-6 mesi timeline",
            value: "48 titolari assicurati"
          }
        },
        {
          step: 4,
          title: "Raccolta Ricavi",
          icon: DollarSign,
          color: "bg-chart-4",
          details: [
            "Importo totale raccolto alla chiusura pre-vendita",
            "Proprieta assicurata per 15 anni",
            "Operazioni iniziano immediatamente"
          ],
          example: {
            label: "Totale Raccolto",
            value: "$408,000"
          }
        },
        {
          step: 5,
          title: "Distribuzione Profitti",
          icon: PieChart,
          color: "bg-chart-5",
          details: [
            "Distribuzione automatica via smart contract",
            "Tutte le parti pagate simultaneamente",
            "Registri trasparenti e verificabili"
          ],
          example: {
            label: "Distribuzione",
            value: "Vedi dettagli sotto"
          }
        }
      ],
      distribution: {
        title: "Dettaglio Distribuzione Ricavi",
        subtitle: "Prezzo Proprietario (80%) + Margine 25% = Prezzo Totale SVC. Distribuzione del margine 25%:",
        items: [
          { recipient: "Proprietario", percentage: 80, amount: 326400, color: "bg-foreground/70", desc: "Valore base proprieta" },
          { recipient: "Riserva Notarile", percentage: 10, amount: 40800, color: "bg-chart-5", desc: "Fondo acquisizione futura" },
          { recipient: "WEEK-CHAIN", percentage: 11, amount: 44880, color: "bg-primary", desc: "Operazione e profitto piattaforma" },
          { recipient: "WEEK-AGENT", percentage: 4, amount: 16320, color: "bg-chart-3", desc: "Commissioni vendita" }
        ],
        total: "Totale: $408,000 (Proprietario 80% + Margine 25%)"
      },
      investorReturn: {
        title: "Il Tuo Ritorno come Detentore di 1% Equity",
        subtitle: "Da questa singola vendita proprieta 4-PAX:",
        platformShare: "Ricavi Piattaforma (11%)",
        platformAmount: "$44,880",
        yourShare: "La Tua Quota 1%",
        yourAmount: "$448.80"
      },
      scale: {
        title: "In Scala",
        items: [
          { properties: "10 proprieta/anno", revenue: "$408K ricavi piattaforma", yourShare: "$4,080/anno" },
          { properties: "50 proprieta/anno", revenue: "$2.04M ricavi piattaforma", yourShare: "$20,400/anno" },
          { properties: "200 proprieta/anno", revenue: "$8.16M ricavi piattaforma", yourShare: "$81,600/anno" }
        ],
        note: "Piu ricavi ricorrenti da gestione, prenotazioni, assicurazione e servizi"
      }
    },
    fr: {
      badge: "Modele d'Affaires",
      title: "Comment",
      titleHighlight: "l'Argent Circule",
      subtitle: "Visualisation complete du cycle de revenus WEEK-CHAIN de l'acquisition de propriete a la distribution des profits",
      steps: [
        {
          step: 1,
          title: "Acquisition de Propriete",
          icon: Home,
          color: "bg-primary",
          details: [
            "Proprietaire offre propriete pour Rent-to-Buy de 15 ans",
            "WEEK-CHAIN evalue la viabilite (capacite PAX)",
            "Accord signe avec option d'achat future"
          ],
          example: {
            label: "Exemple: Villa 4-PAX",
            value: "$326,400 (prix proprietaire)"
          }
        },
        {
          step: 2,
          title: "Creation de Certificats",
          icon: FileText,
          color: "bg-accent",
          details: [
            "48 certificats crees (1 semaine chacun)",
            "Prix defini selon capacite PAX",
            "Validite 15 ans avec droits d'usage"
          ],
          example: {
            label: "48 certs x $8,500",
            value: "$408,000 total"
          }
        },
        {
          step: 3,
          title: "Campagne de Pre-Vente",
          icon: Users,
          color: "bg-chart-3",
          details: [
            "Certificats vendus aux vacanciers",
            "Marketing via reseau WEEK-AGENT",
            "Escrow jusqu'a objectif atteint"
          ],
          example: {
            label: "3-6 mois delai",
            value: "48 detenteurs assures"
          }
        },
        {
          step: 4,
          title: "Collecte des Revenus",
          icon: DollarSign,
          color: "bg-chart-4",
          details: [
            "Montant total collecte a la cloture pre-vente",
            "Propriete securisee pour 15 ans",
            "Operations demarrent immediatement"
          ],
          example: {
            label: "Total Collecte",
            value: "$408,000"
          }
        },
        {
          step: 5,
          title: "Distribution des Profits",
          icon: PieChart,
          color: "bg-chart-5",
          details: [
            "Distribution automatique via smart contract",
            "Toutes les parties payees simultanement",
            "Registres transparents et verifiables"
          ],
          example: {
            label: "Distribution",
            value: "Voir detail ci-dessous"
          }
        }
      ],
      distribution: {
        title: "Detail de la Distribution des Revenus",
        subtitle: "Prix Proprietaire (80%) + Marge 25% = Prix Total SVC. Distribution de la marge 25%:",
        items: [
          { recipient: "Proprietaire", percentage: 80, amount: 326400, color: "bg-foreground/70", desc: "Valeur base propriete" },
          { recipient: "Reserve Notariale", percentage: 10, amount: 40800, color: "bg-chart-5", desc: "Fonds acquisition future" },
          { recipient: "WEEK-CHAIN", percentage: 11, amount: 44880, color: "bg-primary", desc: "Operation et profit plateforme" },
          { recipient: "WEEK-AGENT", percentage: 4, amount: 16320, color: "bg-chart-3", desc: "Commission ventes" }
        ],
        total: "Total: $408,000 (Proprietaire 80% + Marge 25%)"
      },
      investorReturn: {
        title: "Votre Retour en tant que Detenteur de 1% d'Equity",
        subtitle: "De cette seule vente de propriete 4-PAX:",
        platformShare: "Revenus Plateforme (11%)",
        platformAmount: "$44,880",
        yourShare: "Votre Part de 1%",
        yourAmount: "$448.80"
      },
      scale: {
        title: "A l'Echelle",
        items: [
          { properties: "10 proprietes/an", revenue: "$408K revenus plateforme", yourShare: "$4,080/an" },
          { properties: "50 proprietes/an", revenue: "$2.04M revenus plateforme", yourShare: "$20,400/an" },
          { properties: "200 proprietes/an", revenue: "$8.16M revenus plateforme", yourShare: "$81,600/an" }
        ],
        note: "Plus revenus recurrents de gestion, reservations, assurance et services"
      }
    }
  }
  
  const t = content[language as keyof typeof content] || content.en

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-accent text-sm font-medium mb-4">
            {t.badge}
          </span>
          <h2 className="text-3xl lg:text-5xl font-bold mb-4">
            {t.title} <span className="gradient-text">{t.titleHighlight}</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            {t.subtitle}
          </p>
        </div>
        
        {/* Flow Steps */}
        <div className="space-y-6 mb-16">
          {t.steps.map((step, idx) => {
            const IconComponent = step.icon
            return (
              <div key={idx}>
                <div className="bg-card border border-border rounded-2xl p-6 hover:border-primary/50 transition-colors">
                  <div className="flex flex-col lg:flex-row lg:items-center gap-6">
                    {/* Step Number & Icon */}
                    <div className="flex items-center gap-4">
                      <div className={`w-14 h-14 rounded-xl ${step.color} flex items-center justify-center flex-shrink-0`}>
                        <IconComponent className="w-7 h-7 text-white" />
                      </div>
                      <div className="lg:hidden">
                        <span className="text-xs text-muted-foreground">Step {step.step}</span>
                        <h3 className="text-xl font-semibold">{step.title}</h3>
                      </div>
                    </div>
                    
                    {/* Content */}
                    <div className="flex-1">
                      <div className="hidden lg:block mb-2">
                        <span className="text-xs text-muted-foreground">Step {step.step}</span>
                        <h3 className="text-xl font-semibold">{step.title}</h3>
                      </div>
                      <ul className="space-y-1">
                        {step.details.map((detail, didx) => (
                          <li key={didx} className="text-muted-foreground flex items-start gap-2">
                            <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                            <span>{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    {/* Example */}
                    <div className="bg-secondary/50 rounded-xl p-4 lg:w-48 flex-shrink-0">
                      <p className="text-xs text-muted-foreground mb-1">{step.example.label}</p>
                      <p className="text-lg font-bold text-foreground">{step.example.value}</p>
                    </div>
                  </div>
                </div>
                
                {idx < t.steps.length - 1 && (
                  <div className="flex justify-center py-2">
                    <ArrowDown className="w-6 h-6 text-muted-foreground/50" />
                  </div>
                )}
              </div>
            )
          })}
        </div>
        
        {/* Distribution Breakdown */}
        <div className="bg-card border border-border rounded-2xl p-8 mb-12">
          <h3 className="text-2xl font-bold mb-2">{t.distribution.title}</h3>
          <p className="text-muted-foreground mb-8">{t.distribution.subtitle}</p>
          
          <div className="space-y-4 mb-8">
            {t.distribution.items.map((item, idx) => (
              <div key={idx} className="flex items-center gap-4">
                <div className="w-24 text-right">
                  <span className="text-2xl font-bold">{item.percentage}%</span>
                </div>
                <div className="flex-1">
                  <div className="h-10 bg-secondary/50 rounded-lg overflow-hidden">
                    <div 
                      className={`h-full ${item.color} flex items-center px-4`}
                      style={{ width: `${item.percentage}%` }}
                    >
                      <span className="text-sm font-medium text-white truncate">{item.recipient}</span>
                    </div>
                  </div>
                </div>
                <div className="w-32 text-right">
                  <p className="font-semibold">${item.amount.toLocaleString()}</p>
                  <p className="text-xs text-muted-foreground">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
          
          <p className="text-center text-muted-foreground font-medium">{t.distribution.total}</p>
        </div>
        
        {/* Investor Return Calculation */}
        <div className="grid lg:grid-cols-2 gap-6">
          {/* Single Property */}
          <div className="bg-gradient-to-br from-primary/10 to-accent/10 border border-primary/30 rounded-2xl p-6">
            <h4 className="text-xl font-semibold mb-2">{t.investorReturn.title}</h4>
            <p className="text-sm text-muted-foreground mb-6">{t.investorReturn.subtitle}</p>
            
            <div className="space-y-4">
              <div className="flex justify-between items-center pb-4 border-b border-border/50">
                <span className="text-muted-foreground">{t.investorReturn.platformShare}</span>
                <span className="text-xl font-semibold">{t.investorReturn.platformAmount}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-primary font-medium">{t.investorReturn.yourShare}</span>
                <span className="text-3xl font-bold text-primary">{t.investorReturn.yourAmount}</span>
              </div>
            </div>
          </div>
          
          {/* At Scale */}
          <div className="bg-card border border-border rounded-2xl p-6">
            <h4 className="text-xl font-semibold mb-6">{t.scale.title}</h4>
            
            <div className="space-y-4">
              {t.scale.items.map((item, idx) => (
                <div key={idx} className="flex justify-between items-center py-3 border-b border-border/50 last:border-0">
                  <div>
                    <p className="font-medium">{item.properties}</p>
                    <p className="text-sm text-muted-foreground">{item.revenue}</p>
                  </div>
                  <span className="text-xl font-bold text-primary">{item.yourShare}</span>
                </div>
              ))}
            </div>
            
            <p className="text-xs text-muted-foreground mt-4 text-center">
              {t.scale.note}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
