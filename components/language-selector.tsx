"use client"

import { useState, useRef, useEffect } from "react"
import { Globe, ChevronDown } from "lucide-react"
import { useLanguage, languages } from "@/lib/i18n"

export function LanguageSelector() {
  const { language, setLanguage } = useLanguage()
  const [isOpen, setIsOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  const currentLang = languages.find(l => l.code === language)

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-3 py-2 rounded-lg bg-secondary/50 border border-border/50 hover:border-primary/50 transition-colors"
      >
        <Globe className="w-4 h-4 text-muted-foreground" />
        <span className="text-sm font-medium">{currentLang?.flag}</span>
        <ChevronDown className={`w-3 h-3 text-muted-foreground transition-transform ${isOpen ? "rotate-180" : ""}`} />
      </button>

      {isOpen && (
        <div className="absolute top-full right-0 mt-2 w-44 bg-card border border-border rounded-xl shadow-xl overflow-hidden z-50">
          {languages.map((lang) => (
            <button
              key={lang.code}
              onClick={() => {
                setLanguage(lang.code)
                setIsOpen(false)
              }}
              className={`w-full flex items-center gap-3 px-4 py-3 text-sm hover:bg-secondary/50 transition-colors ${
                language === lang.code ? "bg-primary/10 text-primary" : "text-foreground"
              }`}
            >
              <span className="text-lg">{lang.flag}</span>
              <span className="font-medium">{lang.label}</span>
              {language === lang.code && (
                <span className="ml-auto w-2 h-2 rounded-full bg-primary" />
              )}
            </button>
          ))}
        </div>
      )}
    </div>
  )
}
