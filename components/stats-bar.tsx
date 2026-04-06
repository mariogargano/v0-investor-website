"use client"

import { Building2, Users, Globe2, TrendingUp, BadgeCheck, Calendar } from "lucide-react"

export function StatsBar() {
  const stats = [
    { icon: Building2, value: "70+", label: "Destinos Referencia", color: "text-primary" },
    { icon: Users, value: "21", label: "Intermediarios", color: "text-accent" },
    { icon: Globe2, value: "9", label: "Empresas Integradas", color: "text-chart-3" },
    { icon: TrendingUp, value: "15", label: "Años Vigencia SVC", color: "text-chart-4" },
    { icon: BadgeCheck, value: "NOM-151", label: "Certificación", color: "text-chart-5" },
    { icon: Calendar, value: "$0", label: "Cuotas Anuales", color: "text-primary" },
  ]

  return (
    null
  )
}
