import type React from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export function PageLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-background text-foreground relative">
      {/* Background effects */}
      <div className="fixed inset-0 bg-grid pointer-events-none" />
      <div className="fixed top-0 left-1/4 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[150px] pointer-events-none" />
      <div className="fixed bottom-0 right-1/4 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[150px] pointer-events-none" />

      <Header />
      <main className="relative pt-24 pb-16">{children}</main>
      <Footer />
    </div>
  )
}
