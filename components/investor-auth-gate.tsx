"use client"

import React from "react"
import { useState, useEffect } from "react"
import { Lock, Eye, EyeOff, Users, TrendingUp, Handshake, ArrowRight, Shield } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { NDAProvider } from "@/lib/nda-context"
import { NDAModal } from "@/components/nda-modal"

// Passwords
const VISITOR_PASSWORD = "021117"
const TEAM_PASSWORD = "021117"

// Storage keys
const AUTH_KEY = "wc-auth"
const USER_TYPE_KEY = "wc-user-type"

type UserType = "investor" | "partner" | "team"
type AuthStep = "loading" | "password" | "user-type" | "team-verify" | "complete"

async function notifyAccess(data: { userType: UserType; accessTime: string; userAgent: string }) {
  try {
    await fetch("/api/notify-access", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    })
  } catch (error) {
    console.error("Failed to notify access:", error)
  }
}

export function InvestorAuthGate({ children }: { children: React.ReactNode }) {
  const [authStep, setAuthStep] = useState<AuthStep>("loading")
  const [password, setPassword] = useState("")
  const [teamPassword, setTeamPassword] = useState("")
  const [error, setError] = useState("")
  const [showPassword, setShowPassword] = useState(false)
  const [selectedUserType, setSelectedUserType] = useState<UserType | null>(null)

  useEffect(() => {
    const auth = sessionStorage.getItem(AUTH_KEY)
    const userType = sessionStorage.getItem(USER_TYPE_KEY) as UserType | null

    if (auth === "true" && userType) {
      setSelectedUserType(userType)
      setAuthStep("complete")
    } else {
      setAuthStep("password")
    }
  }, [])

  const handlePasswordSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (password === VISITOR_PASSWORD) {
      setAuthStep("user-type")
      setError("")
    } else {
      setError("Incorrect password")
      setPassword("")
    }
  }

  const handleUserTypeSelect = (type: UserType) => {
    setSelectedUserType(type)
    if (type === "team") {
      setAuthStep("team-verify")
    } else {
      // Grant access immediately for investors/partners
      sessionStorage.setItem(AUTH_KEY, "true")
      sessionStorage.setItem(USER_TYPE_KEY, type)
      
      // Notify access
      notifyAccess({
        userType: type,
        accessTime: new Date().toISOString(),
        userAgent: navigator.userAgent,
      })
      
      setAuthStep("complete")
    }
  }

  const handleTeamVerify = (e: React.FormEvent) => {
    e.preventDefault()
    if (teamPassword === TEAM_PASSWORD) {
      sessionStorage.setItem(AUTH_KEY, "true")
      sessionStorage.setItem(USER_TYPE_KEY, "team")
      
      notifyAccess({
        userType: "team",
        accessTime: new Date().toISOString(),
        userAgent: navigator.userAgent,
      })
      
      setAuthStep("complete")
    } else {
      setError("Incorrect team password")
      setTeamPassword("")
    }
  }

  if (authStep === "loading") {
    return (
      <div className="fixed inset-0 z-[9999] bg-background flex items-center justify-center">
        <div className="w-8 h-8 border-2 border-primary border-t-transparent rounded-full animate-spin" />
      </div>
    )
  }

  if (authStep === "complete") {
    return (
      <NDAProvider>
        {children}
        <NDAModal />
      </NDAProvider>
    )
  }

  return (
    <div className="fixed inset-0 z-[9999] bg-background">
      {/* Subtle background */}
      <div className="absolute inset-0 bg-grid opacity-20" />
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[200px]" />

      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center p-4">
        {/* Logo */}
        <div className="mb-8">
          <img
            src="/images/week-chain-logo.png"
            alt="WEEK-CHAIN"
            className="h-20 w-20 object-contain rounded-full"
          />
        </div>

        <div className="w-full max-w-md">
          {/* Password Step */}
          {authStep === "password" && (
            <div className="bg-card border border-border rounded-2xl p-8">
              <div className="text-center mb-8">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Lock className="w-7 h-7 text-primary" />
                </div>
                <h1 className="text-2xl font-semibold mb-2">WEEK-CHAIN Data Room</h1>
                <p className="text-sm text-muted-foreground">
                  Enter the access code to continue
                </p>
              </div>

              <form onSubmit={handlePasswordSubmit} className="space-y-4">
                <div className="space-y-2">
                  <label htmlFor="password" className="text-sm font-medium">
                    Access Code
                  </label>
                  <div className="relative">
                    <Input
                      id="password"
                      type={showPassword ? "text" : "password"}
                      value={password}
                      onChange={(e) => {
                        setPassword(e.target.value)
                        setError("")
                      }}
                      placeholder="Enter access code"
                      className="h-12 pr-12"
                      autoFocus
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                    >
                      {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                    </button>
                  </div>
                  {error && (
                    <p className="text-sm text-destructive">{error}</p>
                  )}
                </div>
                <Button type="submit" className="w-full h-12">
                  Continue
                </Button>
              </form>

              <p className="text-xs text-muted-foreground text-center mt-6">
                Need access? Contact{" "}
                <a href="mailto:corporativo@morises.com" className="text-primary hover:underline">
                  corporativo@morises.com
                </a>
              </p>
            </div>
          )}

          {/* User Type Selection */}
          {authStep === "user-type" && (
            <div className="bg-card border border-border rounded-2xl p-8">
              <div className="text-center mb-8">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Users className="w-7 h-7 text-primary" />
                </div>
                <h1 className="text-2xl font-semibold mb-2">Welcome</h1>
                <p className="text-sm text-muted-foreground">
                  Please select how you are accessing the Data Room
                </p>
              </div>

              <div className="space-y-3">
                <button
                  onClick={() => handleUserTypeSelect("investor")}
                  className="w-full flex items-center gap-4 p-4 rounded-xl border border-border hover:border-primary/50 hover:bg-primary/5 transition-all group text-left"
                >
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <TrendingUp className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <p className="font-medium group-hover:text-primary transition-colors">Investor</p>
                    <p className="text-sm text-muted-foreground">VC, Angel, Family Office</p>
                  </div>
                  <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
                </button>

                <button
                  onClick={() => handleUserTypeSelect("partner")}
                  className="w-full flex items-center gap-4 p-4 rounded-xl border border-border hover:border-primary/50 hover:bg-primary/5 transition-all group text-left"
                >
                  <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center">
                    <Handshake className="w-6 h-6 text-accent" />
                  </div>
                  <div className="flex-1">
                    <p className="font-medium group-hover:text-primary transition-colors">Partner</p>
                    <p className="text-sm text-muted-foreground">Property Owner, Broker, Affiliate</p>
                  </div>
                  <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
                </button>

                <button
                  onClick={() => handleUserTypeSelect("team")}
                  className="w-full flex items-center gap-4 p-4 rounded-xl border border-border hover:border-primary/50 hover:bg-primary/5 transition-all group text-left"
                >
                  <div className="w-12 h-12 rounded-lg bg-chart-3/10 flex items-center justify-center">
                    <Shield className="w-6 h-6 text-chart-3" />
                  </div>
                  <div className="flex-1">
                    <p className="font-medium group-hover:text-primary transition-colors">Team Member</p>
                    <p className="text-sm text-muted-foreground">WEEK-CHAIN Internal</p>
                  </div>
                  <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
                </button>
              </div>

              <button
                onClick={() => setAuthStep("password")}
                className="w-full text-sm text-muted-foreground hover:text-foreground mt-6 transition-colors"
              >
                Back
              </button>
            </div>
          )}

          {/* Team Verification */}
          {authStep === "team-verify" && (
            <div className="bg-card border border-border rounded-2xl p-8">
              <div className="text-center mb-8">
                <div className="w-14 h-14 rounded-xl bg-chart-3/10 flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-7 h-7 text-chart-3" />
                </div>
                <h1 className="text-2xl font-semibold mb-2">Team Verification</h1>
                <p className="text-sm text-muted-foreground">
                  Enter your team access code
                </p>
              </div>

              <form onSubmit={handleTeamVerify} className="space-y-4">
                <div className="space-y-2">
                  <label htmlFor="team-password" className="text-sm font-medium">
                    Team Access Code
                  </label>
                  <div className="relative">
                    <Input
                      id="team-password"
                      type={showPassword ? "text" : "password"}
                      value={teamPassword}
                      onChange={(e) => {
                        setTeamPassword(e.target.value)
                        setError("")
                      }}
                      placeholder="Enter team code"
                      className="h-12 pr-12"
                      autoFocus
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                    >
                      {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                    </button>
                  </div>
                  {error && (
                    <p className="text-sm text-destructive">{error}</p>
                  )}
                </div>
                <Button type="submit" className="w-full h-12">
                  Access Data Room
                </Button>
              </form>

              <button
                onClick={() => setAuthStep("user-type")}
                className="w-full text-sm text-muted-foreground hover:text-foreground mt-6 transition-colors"
              >
                Back
              </button>
            </div>
          )}
        </div>

        {/* Footer */}
        <p className="text-xs text-muted-foreground/50 mt-8">
          WEEK-CHAIN Data Room | All access is logged
        </p>
      </div>
    </div>
  )
}
