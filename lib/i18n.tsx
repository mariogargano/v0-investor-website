"use client"

import React, { createContext, useContext, useState, useEffect } from "react"

export type Language = "en" | "es" | "pt" | "it" | "fr"

export const languages: { code: Language; label: string; flag: string }[] = [
  { code: "en", label: "English", flag: "🇺🇸" },
  { code: "es", label: "Español", flag: "🇪🇸" },
  { code: "pt", label: "Português", flag: "🇧🇷" },
  { code: "it", label: "Italiano", flag: "🇮🇹" },
  { code: "fr", label: "Français", flag: "🇫🇷" },
]

export const translations = {
  en: {
    // Auth Gate
    authTitle: "Restricted Access",
    authSubtitle: "This portal is exclusive for",
    authVC: "Venture Capital",
    authAngel: "Angel Investors",
    authFamilyOffice: "Family Office",
    authPasswordLabel: "Enter access password",
    authPasswordPlaceholder: "Password",
    authSubmit: "Access Portal",
    authContact: "If you are a qualified investor without access, contact",
    authDisclaimer: "The information contained in this portal is confidential and intended only for accredited investors. Reproduction or distribution is prohibited.",
    authWrongPassword: "Incorrect password",
    
    // Header
    navModel: "Business Model",
    navSimulator: "Simulator",
    navProjections: "Projections",
    navEcosystem: "Ecosystem",
    navInvestors: "Investors",
    confidential: "CONFIDENTIAL",
    viewProduct: "View Product",
    
    // Hero
    heroBadge: "Pre-Launch Round Open",
    heroTitle: "From Certificate Sales to",
    heroTitleHighlight: "Real Estate Empire",
    heroSubtitle: "The first REaaS (Real Estate as a Service) PropTech model that acquires vacation properties",
    heroSubtitleHighlight: "with zero initial capital",
    heroSubtitleEnd: ", 100% financed by market demand.",
    heroStat1: "$0 Initial Investment",
    heroStat2: "3 Years to Ownership",
    heroStat3: "100%+ ROI Year 4",
    heroTrust: "NOM-151 compliant certificates • Bank trust • Backup surety",
    
    // Stats Bar
    statsProperties: "Vacation Properties",
    statsTarget: "Target",
    statsRevenue: "Projected Revenue",
    statsYear3: "Year 3",
    statsROI: "Projected ROI",
    statsCashflow: "cashflow year",
    
    // Home Cards
    homeExplore: "Investor Portal",
    homeTitle: "Explore Our",
    homeTitleHighlight: "Value Proposition",
    homeSubtitle: "Navigate each section to learn about the business model, projections, and equity investment opportunities in WEEK-CHAIN",
    
    cardModel: "Business Model",
    cardModelDesc: "Discover the Rent-to-Buy model and the vacation certificate (SVC) system as a service",
    cardModelStats: "10 certificate types",
    
    cardSimulator: "Flow Simulator",
    cardSimulatorDesc: "Simulate the complete flow: rent-to-buy acquisition, certificate sales, and distribution",
    cardSimulatorStats: "Real-time interactive",
    
    cardProjections: "Financial Projections",
    cardProjectionsDesc: "Analyze 5-year business projections and growth potential",
    cardProjectionsStats: "5 years projected",
    
    cardEcosystem: "WEEK Ecosystem",
    cardEcosystemDesc: "Explore the 8 subsidiaries that make up the Week-Chain ecosystem",
    cardEcosystemStats: "8 business units",
    
    cardInvestors: "Equity Investment",
    cardInvestorsDesc: "Valuation, funding rounds, use of funds, and exit strategy",
    cardInvestorsStats: "Seed Round $500K",
    
    ctaBadge: "SEED ROUND OPEN",
    ctaTitle: "Invest in the Future of PropTech",
    ctaSubtitle: "Join as an equity investor in WEEK-CHAIN. Certificates are our commercial service, investment is in the operating company.",
    ctaButton: "View Opportunity",
    
    // REaaS Definition
    reaasTitle: "REaaS",
    reaasSubtitle: "Real Estate as a Service",
    reaasDesc: "A revolutionary model that democratizes access to vacation real estate through service-based certificates",
    
    // Footer
    footerTagline: "The future of vacation real estate through blockchain technology and smart certificates.",
    footerInvestors: "Investors",
    footerLegal: "Legal",
    footerContact: "Contact",
    footerRights: "All rights reserved",
    footerDisclaimer: "Confidential information for qualified investors only",
    
    // Navigation
    navPartners: "Partners",
    backToHome: "Back to Home",
    
    // Business Model Page
    businessModelBadge: "Business Model",
    businessModelTitle: "Smart Vacational",
    businessModelTitleHighlight: "Certificate System",
    businessModelDesc: "Discover how our innovative Smart Vacational Certificate system provides vacation access with fixed pricing, transparent distribution, and zero annual fees.",
    
    // Ecosystem Page
    ecosystemBadge: "WEEK-WORLD Ecosystem",
    ecosystemTitle: "A",
    ecosystemTitleHighlight: "Replicable",
    ecosystemTitleEnd: "Infrastructure",
    ecosystemDesc: "9 specialized business units working in synergy to create the most complete vacation ecosystem.",
    
    // Partners Page
    partnersBadge: "Service Provider Partners",
    partnersTitle: "Partner",
    partnersTitleHighlight: "Network",
    partnersDesc: "Join the WEEK-CHAIN ecosystem as a service provider. We partner with brokers, insurance companies, travel services, and professional service firms.",
    
    // Pricing Table
    pricingBadge: "Certificate Pricing",
    pricingTitle: "Smart Vacational",
    pricingTitleHighlight: "Certificates",
    pricingDesc: "Fixed pricing for 15 years of vacation rights. Select your group size to see available options.",
    pricingWeek: "week",
    pricingWeeks: "weeks",
    pricingYear: "year",
    pricingOneTime: "one-time payment",
    pricingMostPopular: "Most Popular",
    pricingGuestCapacity: "guests capacity",
    
    // Distribution
    distributionTitle: "Price Structure: Owner Price + 25% Margin",
    distributionSubtitle: "OWNER PRICE (80%) + OPERATIONAL MARGIN (25%) = TOTAL SVC PRICE",
    distributionOwner: "Property Owner",
    distributionOwnerDesc: "Base price payment",
    distributionNotarial: "Notarial Reserve",
    distributionNotarialDesc: "Future acquisition fund",
    distributionChain: "WEEK-CHAIN",
    distributionChainDesc: "Platform operation & profit",
    distributionAgent: "WEEK-AGENT",
    distributionAgentDesc: "Sales commission",
    
    // Common
    downloadPitchDeck: "Download Pitch Deck",
    learnMore: "Learn More",
    getStarted: "Get Started",
    contactUs: "Contact Us",
  },
  es: {
    // Auth Gate
    authTitle: "Acceso Restringido",
    authSubtitle: "Este portal es exclusivo para",
    authVC: "Venture Capital",
    authAngel: "Angel Investors",
    authFamilyOffice: "Family Office",
    authPasswordLabel: "Ingresa la contraseña de acceso",
    authPasswordPlaceholder: "Contraseña",
    authSubmit: "Acceder al Portal",
    authContact: "Si eres un inversor calificado y no tienes acceso, contacta a",
    authDisclaimer: "La información contenida en este portal es confidencial y está destinada únicamente para inversores acreditados. Está prohibida su reproducción o distribución.",
    authWrongPassword: "Contraseña incorrecta",
    
    // Header
    navModel: "Modelo",
    navSimulator: "Simulador",
    navProjections: "Proyecciones",
    navEcosystem: "Ecosistema",
    navInvestors: "Inversionistas",
    confidential: "CONFIDENCIAL",
    viewProduct: "Ver Producto",
    
    // Hero
    heroBadge: "Ronda Pre-Lanzamiento Abierta",
    heroTitle: "De Ventas de Certificados a",
    heroTitleHighlight: "Imperio Inmobiliario",
    heroSubtitle: "El primer modelo PropTech REaaS (Real Estate as a Service) que adquiere propiedades vacacionales",
    heroSubtitleHighlight: "sin capital inicial",
    heroSubtitleEnd: ", financiado 100% por la demanda del mercado.",
    heroStat1: "$0 Inversión Inicial",
    heroStat2: "3 Años hasta Propiedad",
    heroStat3: "100%+ ROI Año 4",
    heroTrust: "Certificados conformes a NOM-151 • Fideicomiso bancario • Fiadora de respaldo",
    
    // Stats Bar
    statsProperties: "Propiedades Vacacionales",
    statsTarget: "Objetivo",
    statsRevenue: "Ingresos Proyectados",
    statsYear3: "Año 3",
    statsROI: "ROI Proyectado",
    statsCashflow: "año cashflow",
    
    // Home Cards
    homeExplore: "Portal de Inversionistas",
    homeTitle: "Explora Nuestra",
    homeTitleHighlight: "Propuesta de Valor",
    homeSubtitle: "Navega por cada sección para conocer el modelo de negocio, proyecciones y oportunidades de inversión en equity de WEEK-CHAIN",
    
    cardModel: "Modelo de Negocio",
    cardModelDesc: "Descubre el modelo Rent-to-Buy y el sistema de certificados vacacionales (SVC) como servicio",
    cardModelStats: "10 tipos de certificados",
    
    cardSimulator: "Simulador de Flujo",
    cardSimulatorDesc: "Simula el flujo completo: adquisición rent-to-buy, venta de certificados y distribución",
    cardSimulatorStats: "Interactivo en tiempo real",
    
    cardProjections: "Proyecciones Financieras",
    cardProjectionsDesc: "Analiza las proyecciones a 5 años del negocio y potencial de crecimiento",
    cardProjectionsStats: "5 años proyectados",
    
    cardEcosystem: "Ecosistema WEEK",
    cardEcosystemDesc: "Explora las 8 subsidiarias que conforman el ecosistema Week-Chain",
    cardEcosystemStats: "8 unidades de negocio",
    
    cardInvestors: "Inversión en Equity",
    cardInvestorsDesc: "Valuación, rondas de financiamiento, uso de fondos y estrategia de salida",
    cardInvestorsStats: "Ronda Seed $500K",
    
    ctaBadge: "RONDA SEED ABIERTA",
    ctaTitle: "Invierte en el Futuro de PropTech",
    ctaSubtitle: "Únete como inversionista de equity en WEEK-CHAIN. Los certificados son nuestro servicio comercial, la inversión es en la empresa operadora.",
    ctaButton: "Ver Oportunidad",
    
    // REaaS Definition
    reaasTitle: "REaaS",
    reaasSubtitle: "Real Estate as a Service",
    reaasDesc: "Un modelo revolucionario que democratiza el acceso al sector inmobiliario vacacional mediante certificados basados en servicios",
    
    // Footer
    footerTagline: "El futuro del sector inmobiliario vacacional a través de tecnología blockchain y certificados inteligentes.",
    footerInvestors: "Inversionistas",
    footerLegal: "Legal",
    footerContact: "Contacto",
    footerRights: "Todos los derechos reservados",
    footerDisclaimer: "Información confidencial solo para inversores calificados",
    
    // Navigation
    navPartners: "Partners",
    backToHome: "Volver al inicio",
    
    // Business Model Page
    businessModelBadge: "Modelo de Negocio",
    businessModelTitle: "Sistema de Certificados",
    businessModelTitleHighlight: "Vacacionales Inteligentes",
    businessModelDesc: "Descubre cómo nuestro innovador sistema de Certificados Vacacionales Inteligentes proporciona acceso vacacional con precios fijos, distribución transparente y cero cuotas anuales.",
    
    // Ecosystem Page
    ecosystemBadge: "Ecosistema WEEK-WORLD",
    ecosystemTitle: "Una Infraestructura",
    ecosystemTitleHighlight: "Replicable",
    ecosystemTitleEnd: "",
    ecosystemDesc: "9 unidades de negocio especializadas trabajando en sinergia para crear el ecosistema vacacional más completo.",
    
    // Partners Page
    partnersBadge: "Proveedores de Servicios",
    partnersTitle: "Red de",
    partnersTitleHighlight: "Partners",
    partnersDesc: "Únete al ecosistema WEEK-CHAIN como proveedor de servicios. Trabajamos con brokers, aseguradoras, servicios de viaje y firmas de servicios profesionales.",
    
    // Pricing Table
    pricingBadge: "Precios de Certificados",
    pricingTitle: "Certificados Vacacionales",
    pricingTitleHighlight: "Inteligentes",
    pricingDesc: "Precios fijos por 15 años de derechos vacacionales. Selecciona el tamaño de tu grupo para ver las opciones disponibles.",
    pricingWeek: "semana",
    pricingWeeks: "semanas",
    pricingYear: "año",
    pricingOneTime: "pago único",
    pricingMostPopular: "Más Popular",
    pricingGuestCapacity: "capacidad de huéspedes",
    
    // Distribution
    distributionTitle: "Estructura de Precio: Precio Dueño + 25% Margen",
    distributionSubtitle: "PRECIO DUEÑO (80%) + MARGEN OPERATIVO (25%) = PRECIO TOTAL SVC",
    distributionOwner: "Propietario",
    distributionOwnerDesc: "Pago precio base",
    distributionNotarial: "Reserva Notarial",
    distributionNotarialDesc: "Fondo adquisición futura",
    distributionChain: "WEEK-CHAIN",
    distributionChainDesc: "Operación y utilidad plataforma",
    distributionAgent: "WEEK-AGENT",
    distributionAgentDesc: "Comisión de ventas",
    
    // Common
    downloadPitchDeck: "Descargar Pitch Deck",
    learnMore: "Más Información",
    getStarted: "Comenzar",
    contactUs: "Contáctanos",
  },
  pt: {
    // Auth Gate
    authTitle: "Acesso Restrito",
    authSubtitle: "Este portal é exclusivo para",
    authVC: "Venture Capital",
    authAngel: "Angel Investors",
    authFamilyOffice: "Family Office",
    authPasswordLabel: "Digite a senha de acesso",
    authPasswordPlaceholder: "Senha",
    authSubmit: "Acessar Portal",
    authContact: "Se você é um investidor qualificado sem acesso, entre em contato com",
    authDisclaimer: "As informações contidas neste portal são confidenciais e destinadas apenas a investidores credenciados. A reprodução ou distribuição é proibida.",
    authWrongPassword: "Senha incorreta",
    
    // Header
    navModel: "Modelo",
    navSimulator: "Simulador",
    navProjections: "Projeções",
    navEcosystem: "Ecossistema",
    navInvestors: "Investidores",
    confidential: "CONFIDENCIAL",
    viewProduct: "Ver Produto",
    
    // Hero
    heroBadge: "Rodada Pré-Lançamento Aberta",
    heroTitle: "De Vendas de Certificados a",
    heroTitleHighlight: "Império Imobiliário",
    heroSubtitle: "O primeiro modelo PropTech REaaS (Real Estate as a Service) que adquire propriedades de férias",
    heroSubtitleHighlight: "sem capital inicial",
    heroSubtitleEnd: ", 100% financiado pela demanda do mercado.",
    heroStat1: "$0 Investimento Inicial",
    heroStat2: "3 Anos até Propriedade",
    heroStat3: "100%+ ROI Ano 4",
    heroTrust: "Certificados conforme NOM-151 • Fideicomisso bancário • Fiança de apoio",
    
    // Stats Bar
    statsProperties: "Propriedades de Férias",
    statsTarget: "Meta",
    statsRevenue: "Receita Projetada",
    statsYear3: "Ano 3",
    statsROI: "ROI Projetado",
    statsCashflow: "ano cashflow",
    
    // Home Cards
    homeExplore: "Portal do Investidor",
    homeTitle: "Explore Nossa",
    homeTitleHighlight: "Proposta de Valor",
    homeSubtitle: "Navegue por cada seção para conhecer o modelo de negócios, projeções e oportunidades de investimento em equity da WEEK-CHAIN",
    
    cardModel: "Modelo de Negócio",
    cardModelDesc: "Descubra o modelo Rent-to-Buy e o sistema de certificados de férias (SVC) como serviço",
    cardModelStats: "10 tipos de certificados",
    
    cardSimulator: "Simulador de Fluxo",
    cardSimulatorDesc: "Simule o fluxo completo: aquisição rent-to-buy, venda de certificados e distribuição",
    cardSimulatorStats: "Interativo em tempo real",
    
    cardProjections: "Projeções Financeiras",
    cardProjectionsDesc: "Analise as projeções de 5 anos do negócio e potencial de crescimento",
    cardProjectionsStats: "5 anos projetados",
    
    cardEcosystem: "Ecossistema WEEK",
    cardEcosystemDesc: "Explore as 8 subsidiárias que compõem o ecossistema Week-Chain",
    cardEcosystemStats: "8 unidades de negócio",
    
    cardInvestors: "Investimento em Equity",
    cardInvestorsDesc: "Avaliação, rodadas de financiamento, uso de fundos e estratégia de saída",
    cardInvestorsStats: "Rodada Seed $500K",
    
    ctaBadge: "RODADA SEED ABERTA",
    ctaTitle: "Invista no Futuro do PropTech",
    ctaSubtitle: "Junte-se como investidor de equity na WEEK-CHAIN. Os certificados são nosso serviço comercial, o investimento é na empresa operadora.",
    ctaButton: "Ver Oportunidade",
    
    // REaaS Definition
    reaasTitle: "REaaS",
    reaasSubtitle: "Real Estate as a Service",
    reaasDesc: "Um modelo revolucionário que democratiza o acesso ao setor imobiliário de férias através de certificados baseados em serviços",
    
    // Footer
    footerTagline: "O futuro do setor imobiliário de férias através de tecnologia blockchain e certificados inteligentes.",
    footerInvestors: "Investidores",
    footerLegal: "Legal",
    footerContact: "Contato",
    footerRights: "Todos os direitos reservados",
    footerDisclaimer: "Informação confidencial apenas para investidores qualificados",
    
    // Navigation
    navPartners: "Partners",
    backToHome: "Voltar ao início",
    
    // Business Model Page
    businessModelBadge: "Modelo de Negócio",
    businessModelTitle: "Sistema de Certificados",
    businessModelTitleHighlight: "Vacacionales Inteligentes",
    businessModelDesc: "Descubra como nosso inovador sistema de Certificados de Férias Inteligentes oferece acesso a férias com preços fixos, distribuição transparente e zero taxas anuais.",
    
    // Ecosystem Page
    ecosystemBadge: "Ecossistema WEEK-WORLD",
    ecosystemTitle: "Uma Infraestrutura",
    ecosystemTitleHighlight: "Replicável",
    ecosystemTitleEnd: "",
    ecosystemDesc: "9 unidades de negócio especializadas trabalhando em sinergia para criar o ecossistema de férias mais completo.",
    
    // Partners Page
    partnersBadge: "Fornecedores de Serviços",
    partnersTitle: "Rede de",
    partnersTitleHighlight: "Partners",
    partnersDesc: "Junte-se ao ecossistema WEEK-CHAIN como fornecedor de serviços. Trabalhamos com brokers, seguradoras, serviços de viagem e empresas de serviços profissionais.",
    
    // Pricing Table
    pricingBadge: "Preços de Certificados",
    pricingTitle: "Certificados de Férias",
    pricingTitleHighlight: "Inteligentes",
    pricingDesc: "Preços fixos por 15 anos de direitos de férias. Selecione o tamanho do seu grupo para ver as opções disponíveis.",
    pricingWeek: "semana",
    pricingWeeks: "semanas",
    pricingYear: "ano",
    pricingOneTime: "pagamento único",
    pricingMostPopular: "Mais Popular",
    pricingGuestCapacity: "capacidade de hóspedes",
    
    // Distribution
    distributionTitle: "Estrutura de Preço: Preço Proprietário + 25% Margem",
    distributionSubtitle: "PREÇO PROPRIETÁRIO (80%) + MARGEM OPERACIONAL (25%) = PREÇO TOTAL SVC",
    distributionOwner: "Proprietário",
    distributionOwnerDesc: "Pagamento preço base",
    distributionNotarial: "Reserva Notarial",
    distributionNotarialDesc: "Fundo aquisição futura",
    distributionChain: "WEEK-CHAIN",
    distributionChainDesc: "Operação e lucro plataforma",
    distributionAgent: "WEEK-AGENT",
    distributionAgentDesc: "Comissão de vendas",
    
    // Common
    downloadPitchDeck: "Baixar Pitch Deck",
    learnMore: "Saiba Mais",
    getStarted: "Começar",
    contactUs: "Contate-nos",
  },
  it: {
    // Auth Gate
    authTitle: "Accesso Riservato",
    authSubtitle: "Questo portale è esclusivo per",
    authVC: "Venture Capital",
    authAngel: "Angel Investors",
    authFamilyOffice: "Family Office",
    authPasswordLabel: "Inserisci la password di accesso",
    authPasswordPlaceholder: "Password",
    authSubmit: "Accedi al Portale",
    authContact: "Se sei un investitore qualificato senza accesso, contatta",
    authDisclaimer: "Le informazioni contenute in questo portale sono riservate e destinate esclusivamente a investitori accreditati. La riproduzione o distribuzione è vietata.",
    authWrongPassword: "Password errata",
    
    // Header
    navModel: "Modello",
    navSimulator: "Simulatore",
    navProjections: "Proiezioni",
    navEcosystem: "Ecosistema",
    navInvestors: "Investitori",
    confidential: "RISERVATO",
    viewProduct: "Vedi Prodotto",
    
    // Hero
    heroBadge: "Round Pre-Lancio Aperto",
    heroTitle: "Dalla Vendita di Certificati a",
    heroTitleHighlight: "Impero Immobiliare",
    heroSubtitle: "Il primo modello PropTech REaaS (Real Estate as a Service) che acquisisce proprietà vacanziere",
    heroSubtitleHighlight: "senza capitale iniziale",
    heroSubtitleEnd: ", finanziato al 100% dalla domanda del mercato.",
    heroStat1: "$0 Investimento Iniziale",
    heroStat2: "3 Anni alla Proprietà",
    heroStat3: "100%+ ROI Anno 4",
    heroTrust: "Certificati conformi NOM-151 • Trust bancario • Fideiussione di supporto",
    
    // Stats Bar
    statsProperties: "Proprietà Vacanziere",
    statsTarget: "Obiettivo",
    statsRevenue: "Ricavi Previsti",
    statsYear3: "Anno 3",
    statsROI: "ROI Previsto",
    statsCashflow: "anno cashflow",
    
    // Home Cards
    homeExplore: "Portale Investitori",
    homeTitle: "Esplora la Nostra",
    homeTitleHighlight: "Proposta di Valore",
    homeSubtitle: "Naviga in ogni sezione per conoscere il modello di business, le proiezioni e le opportunità di investimento in equity di WEEK-CHAIN",
    
    cardModel: "Modello di Business",
    cardModelDesc: "Scopri il modello Rent-to-Buy e il sistema di certificati vacanzieri (SVC) come servizio",
    cardModelStats: "10 tipi di certificati",
    
    cardSimulator: "Simulatore di Flusso",
    cardSimulatorDesc: "Simula il flusso completo: acquisizione rent-to-buy, vendita certificati e distribuzione",
    cardSimulatorStats: "Interattivo in tempo reale",
    
    cardProjections: "Proiezioni Finanziarie",
    cardProjectionsDesc: "Analizza le proiezioni a 5 anni del business e il potenziale di crescita",
    cardProjectionsStats: "5 anni proiettati",
    
    cardEcosystem: "Ecosistema WEEK",
    cardEcosystemDesc: "Esplora le 8 sussidiarie che compongono l'ecosistema Week-Chain",
    cardEcosystemStats: "8 unità di business",
    
    cardInvestors: "Investimento in Equity",
    cardInvestorsDesc: "Valutazione, round di finanziamento, uso dei fondi e strategia di uscita",
    cardInvestorsStats: "Round Seed $500K",
    
    ctaBadge: "ROUND SEED APERTO",
    ctaTitle: "Investi nel Futuro del PropTech",
    ctaSubtitle: "Unisciti come investitore di equity in WEEK-CHAIN. I certificati sono il nostro servizio commerciale, l'investimento è nella società operativa.",
    ctaButton: "Vedi Opportunità",
    
    // REaaS Definition
    reaasTitle: "REaaS",
    reaasSubtitle: "Real Estate as a Service",
    reaasDesc: "Un modello rivoluzionario che democratizza l'accesso al settore immobiliare vacanziero attraverso certificati basati su servizi",
    
    // Footer
    footerTagline: "Il futuro del settore immobiliare vacanziero attraverso tecnologia blockchain e certificati intelligenti.",
    footerInvestors: "Investitori",
    footerLegal: "Legale",
    footerContact: "Contatto",
    footerRights: "Tutti i diritti riservati",
    footerDisclaimer: "Informazioni riservate solo per investitori qualificati",
    
    // Navigation
    navPartners: "Partners",
    backToHome: "Torna alla home",
    
    // Business Model Page
    businessModelBadge: "Modello di Business",
    businessModelTitle: "Sistema di Certificati",
    businessModelTitleHighlight: "Vacanzieri Intelligenti",
    businessModelDesc: "Scopri come il nostro innovativo sistema di Certificati Vacanzieri Intelligenti offre accesso alle vacanze con prezzi fissi, distribuzione trasparente e zero costi annuali.",
    
    // Ecosystem Page
    ecosystemBadge: "Ecosistema WEEK-WORLD",
    ecosystemTitle: "Un'Infrastruttura",
    ecosystemTitleHighlight: "Replicabile",
    ecosystemTitleEnd: "",
    ecosystemDesc: "9 unità di business specializzate che lavorano in sinergia per creare l'ecosistema vacanziero più completo.",
    
    // Partners Page
    partnersBadge: "Fornitori di Servizi",
    partnersTitle: "Rete di",
    partnersTitleHighlight: "Partners",
    partnersDesc: "Unisciti all'ecosistema WEEK-CHAIN come fornitore di servizi. Collaboriamo con broker, assicurazioni, servizi di viaggio e studi professionali.",
    
    // Pricing Table
    pricingBadge: "Prezzi Certificati",
    pricingTitle: "Certificati Vacanzieri",
    pricingTitleHighlight: "Intelligenti",
    pricingDesc: "Prezzi fissi per 15 anni di diritti vacanzieri. Seleziona la dimensione del tuo gruppo per vedere le opzioni disponibili.",
    pricingWeek: "settimana",
    pricingWeeks: "settimane",
    pricingYear: "anno",
    pricingOneTime: "pagamento unico",
    pricingMostPopular: "Più Popolare",
    pricingGuestCapacity: "capacità ospiti",
    
    // Distribution
    distributionTitle: "Struttura Prezzo: Prezzo Proprietario + 25% Margine",
    distributionSubtitle: "PREZZO PROPRIETARIO (80%) + MARGINE OPERATIVO (25%) = PREZZO TOTALE SVC",
    distributionOwner: "Proprietario",
    distributionOwnerDesc: "Pagamento prezzo base",
    distributionNotarial: "Riserva Notarile",
    distributionNotarialDesc: "Fondo acquisizione futura",
    distributionChain: "WEEK-CHAIN",
    distributionChainDesc: "Operazione e profitto piattaforma",
    distributionAgent: "WEEK-AGENT",
    distributionAgentDesc: "Commissione vendite",
    
    // Common
    downloadPitchDeck: "Scarica Pitch Deck",
    learnMore: "Scopri di Più",
    getStarted: "Inizia",
    contactUs: "Contattaci",
  },
  fr: {
    // Auth Gate
    authTitle: "Accès Restreint",
    authSubtitle: "Ce portail est exclusif pour",
    authVC: "Venture Capital",
    authAngel: "Angel Investors",
    authFamilyOffice: "Family Office",
    authPasswordLabel: "Entrez le mot de passe d'accès",
    authPasswordPlaceholder: "Mot de passe",
    authSubmit: "Accéder au Portail",
    authContact: "Si vous êtes un investisseur qualifié sans accès, contactez",
    authDisclaimer: "Les informations contenues dans ce portail sont confidentielles et destinées uniquement aux investisseurs accrédités. La reproduction ou la distribution est interdite.",
    authWrongPassword: "Mot de passe incorrect",
    
    // Header
    navModel: "Modèle",
    navSimulator: "Simulateur",
    navProjections: "Projections",
    navEcosystem: "Écosystème",
    navInvestors: "Investisseurs",
    confidential: "CONFIDENTIEL",
    viewProduct: "Voir Produit",
    
    // Hero
    heroBadge: "Tour Pré-Lancement Ouvert",
    heroTitle: "Des Ventes de Certificats à",
    heroTitleHighlight: "Empire Immobilier",
    heroSubtitle: "Le premier modèle PropTech REaaS (Real Estate as a Service) qui acquiert des propriétés de vacances",
    heroSubtitleHighlight: "sans capital initial",
    heroSubtitleEnd: ", financé à 100% par la demande du marché.",
    heroStat1: "$0 Investissement Initial",
    heroStat2: "3 Ans jusqu'à la Propriété",
    heroStat3: "100%+ ROI Année 4",
    heroTrust: "Certificats conformes NOM-151 • Fiducie bancaire • Caution de soutien",
    
    // Stats Bar
    statsProperties: "Propriétés de Vacances",
    statsTarget: "Objectif",
    statsRevenue: "Revenus Projetés",
    statsYear3: "Année 3",
    statsROI: "ROI Projeté",
    statsCashflow: "année cashflow",
    
    // Home Cards
    homeExplore: "Portail Investisseurs",
    homeTitle: "Explorez Notre",
    homeTitleHighlight: "Proposition de Valeur",
    homeSubtitle: "Parcourez chaque section pour découvrir le modèle commercial, les projections et les opportunités d'investissement en equity de WEEK-CHAIN",
    
    cardModel: "Modèle Commercial",
    cardModelDesc: "Découvrez le modèle Rent-to-Buy et le système de certificats de vacances (SVC) comme service",
    cardModelStats: "10 types de certificats",
    
    cardSimulator: "Simulateur de Flux",
    cardSimulatorDesc: "Simulez le flux complet: acquisition rent-to-buy, vente de certificats et distribution",
    cardSimulatorStats: "Interactif en temps réel",
    
    cardProjections: "Projections Financières",
    cardProjectionsDesc: "Analysez les projections à 5 ans de l'entreprise et le potentiel de croissance",
    cardProjectionsStats: "5 ans projetés",
    
    cardEcosystem: "Écosystème WEEK",
    cardEcosystemDesc: "Explorez les 8 filiales qui composent l'écosystème Week-Chain",
    cardEcosystemStats: "8 unités commerciales",
    
    cardInvestors: "Investissement en Equity",
    cardInvestorsDesc: "Valorisation, tours de financement, utilisation des fonds et stratégie de sortie",
    cardInvestorsStats: "Tour Seed $500K",
    
    ctaBadge: "TOUR SEED OUVERT",
    ctaTitle: "Investissez dans l'Avenir du PropTech",
    ctaSubtitle: "Rejoignez en tant qu'investisseur en equity dans WEEK-CHAIN. Les certificats sont notre service commercial, l'investissement est dans la société opératrice.",
    ctaButton: "Voir Opportunité",
    
    // REaaS Definition
    reaasTitle: "REaaS",
    reaasSubtitle: "Real Estate as a Service",
    reaasDesc: "Un modèle révolutionnaire qui démocratise l'accès à l'immobilier de vacances grâce à des certificats basés sur des services",
    
    // Footer
    footerTagline: "L'avenir de l'immobilier de vacances grâce à la technologie blockchain et aux certificats intelligents.",
    footerInvestors: "Investisseurs",
    footerLegal: "Légal",
    footerContact: "Contact",
    footerRights: "Tous droits réservés",
    footerDisclaimer: "Informations confidentielles réservées aux investisseurs qualifiés",
    
    // Navigation
    navPartners: "Partners",
    backToHome: "Retour à l'accueil",
    
    // Business Model Page
    businessModelBadge: "Modèle Commercial",
    businessModelTitle: "Système de Certificats",
    businessModelTitleHighlight: "Vacanciers Intelligents",
    businessModelDesc: "Découvrez comment notre système innovant de Certificats de Vacances Intelligents offre un accès aux vacances avec des prix fixes, une distribution transparente et zéro frais annuels.",
    
    // Ecosystem Page
    ecosystemBadge: "Écosystème WEEK-WORLD",
    ecosystemTitle: "Une Infrastructure",
    ecosystemTitleHighlight: "Réplicable",
    ecosystemTitleEnd: "",
    ecosystemDesc: "9 unités commerciales spécialisées travaillant en synergie pour créer l'écosystème de vacances le plus complet.",
    
    // Partners Page
    partnersBadge: "Fournisseurs de Services",
    partnersTitle: "Réseau de",
    partnersTitleHighlight: "Partners",
    partnersDesc: "Rejoignez l'écosystème WEEK-CHAIN en tant que fournisseur de services. Nous travaillons avec des courtiers, des assureurs, des services de voyage et des cabinets de services professionnels.",
    
    // Pricing Table
    pricingBadge: "Prix des Certificats",
    pricingTitle: "Certificats de Vacances",
    pricingTitleHighlight: "Intelligents",
    pricingDesc: "Prix fixes pour 15 ans de droits de vacances. Sélectionnez la taille de votre groupe pour voir les options disponibles.",
    pricingWeek: "semaine",
    pricingWeeks: "semaines",
    pricingYear: "an",
    pricingOneTime: "paiement unique",
    pricingMostPopular: "Plus Populaire",
    pricingGuestCapacity: "capacité invités",
    
    // Distribution
    distributionTitle: "Structure de Prix: Prix Propriétaire + 25% Marge",
    distributionSubtitle: "PRIX PROPRIÉTAIRE (80%) + MARGE OPÉRATIONNELLE (25%) = PRIX TOTAL SVC",
    distributionOwner: "Propriétaire",
    distributionOwnerDesc: "Paiement prix de base",
    distributionNotarial: "Réserve Notariale",
    distributionNotarialDesc: "Fonds acquisition future",
    distributionChain: "WEEK-CHAIN",
    distributionChainDesc: "Opération et profit plateforme",
    distributionAgent: "WEEK-AGENT",
    distributionAgentDesc: "Commission ventes",
    
    // Common
    downloadPitchDeck: "Télécharger Pitch Deck",
    learnMore: "En Savoir Plus",
    getStarted: "Commencer",
    contactUs: "Contactez-nous",
  },
}

type TranslationKey = keyof typeof translations.en

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: TranslationKey) => string
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>("en")

  useEffect(() => {
    const stored = localStorage.getItem("wc-language") as Language
    if (stored && languages.some(l => l.code === stored)) {
      setLanguage(stored)
    }
  }, [])

  const handleSetLanguage = (lang: Language) => {
    setLanguage(lang)
    localStorage.setItem("wc-language", lang)
  }

  const t = (key: TranslationKey): string => {
    return translations[language][key] || translations.en[key] || key
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage: handleSetLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}
