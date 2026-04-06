"use client"

import { Search, Star, CheckCircle, ArrowRight, ClipboardCheck, BadgeCheck } from "lucide-react"

export function WeekServices() {
  return (
    <section className="py-20 lg:py-32 bg-secondary/20 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-30" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/30 mb-6">
            <BadgeCheck size={14} className="text-primary" />
            <span className="text-sm text-primary font-medium">Quality Assurance</span>
          </div>
          <h2 className="text-3xl lg:text-5xl font-bold mb-6">
            Property <span className="gradient-text">Verification Systems</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Ensuring quality and transparency across our destination network
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* WEEK-TRACK */}
          <div className="bg-card border border-border rounded-3xl p-8 hover:border-primary/50 transition-all">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center">
                <Search className="w-7 h-7 text-primary" />
              </div>
              <div>
                <h3 className="text-2xl font-bold">WEEK-TRACK</h3>
                <p className="text-sm text-muted-foreground">Property Intelligence System</p>
              </div>
            </div>

            <p className="text-muted-foreground mb-6 leading-relaxed">
              Our proprietary data analysis system that evaluates properties before they join the WEEK-CHAIN network. 
              We analyze historical performance, occupancy rates, and market positioning.
            </p>

            <div className="space-y-4 mb-6">
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-medium">Occupancy Analysis</p>
                  <p className="text-sm text-muted-foreground">Minimum 60% historical occupancy required</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-medium">Revenue Verification</p>
                  <p className="text-sm text-muted-foreground">Market rate analysis and ADR benchmarking</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-medium">Location Score</p>
                  <p className="text-sm text-muted-foreground">Accessibility, amenities, and demand evaluation</p>
                </div>
              </div>
            </div>

            <div className="bg-secondary/50 rounded-xl p-4">
              <p className="text-sm">
                <span className="font-semibold text-primary">Data-driven decisions:</span>{" "}
                Only properties meeting our criteria are considered for the network.
              </p>
            </div>
          </div>

          {/* WEEK-REVIEW */}
          <div className="bg-card border border-border rounded-3xl p-8 hover:border-accent/50 transition-all">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 rounded-2xl bg-accent/10 flex items-center justify-center">
                <Star className="w-7 h-7 text-accent" />
              </div>
              <div>
                <h3 className="text-2xl font-bold">WEEK-REVIEW</h3>
                <p className="text-sm text-muted-foreground">Guest Experience Platform</p>
              </div>
            </div>

            <p className="text-muted-foreground mb-6 leading-relaxed">
              Continuous quality monitoring through verified guest reviews. Certificate holders 
              provide feedback after each stay, ensuring properties maintain high standards.
            </p>

            <div className="space-y-4 mb-6">
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-medium">Verified Reviews</p>
                  <p className="text-sm text-muted-foreground">Only actual certificate holders can review</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-medium">Quality Threshold</p>
                  <p className="text-sm text-muted-foreground">Minimum 4.0 rating required to stay in network</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-medium">Improvement Tracking</p>
                  <p className="text-sm text-muted-foreground">Property owners receive actionable feedback</p>
                </div>
              </div>
            </div>

            <div className="bg-secondary/50 rounded-xl p-4">
              <p className="text-sm">
                <span className="font-semibold text-accent">Quality guarantee:</span>{" "}
                Properties below standards are flagged and may be removed from the network.
              </p>
            </div>
          </div>
        </div>

        {/* Request Flow */}
        <div className="mt-12 bg-card border border-border rounded-3xl p-8">
          <h3 className="text-xl font-bold mb-6 text-center">How Certificate Holders Request Stays</h3>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4 text-lg font-bold text-primary">
                1
              </div>
              <p className="font-semibold mb-1">REQUEST</p>
              <p className="text-sm text-muted-foreground">Submit preferences: dates, destination type, group size</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4 text-lg font-bold text-primary">
                2
              </div>
              <p className="font-semibold mb-1">OFFER</p>
              <p className="text-sm text-muted-foreground">Receive matched property offer based on availability</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4 text-lg font-bold text-primary">
                3
              </div>
              <p className="font-semibold mb-1">CONFIRM</p>
              <p className="text-sm text-muted-foreground">Accept the offer within 48 hours to secure your stay</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4 text-lg font-bold text-primary">
                4
              </div>
              <p className="font-semibold mb-1">TRAVEL</p>
              <p className="text-sm text-muted-foreground">Enjoy your vacation and leave a WEEK-REVIEW</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
