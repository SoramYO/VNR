"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X, Home, BookOpen, Shield, Clock, Trophy, Bot } from "lucide-react"

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems = [
    { label: "Trang chủ", href: "#hero", icon: Home },
    { label: "Lý thuyết", href: "#theory", icon: BookOpen },
    { label: "Đường lối", href: "#leadership", icon: Shield },
    { label: "Thời gian", href: "#timeline", icon: Clock },
    { label: "Thắng lợi", href: "#victory", icon: Trophy },
    { label: "AI Usage", href: "/ai-usage", icon: Bot, isExternal: true },
  ]

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/95 backdrop-blur-sm shadow-lg border-b border-accent/20" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="relative">
              <div className="w-10 h-10 bg-gradient-to-br from-primary to-primary/80 rounded-full flex items-center justify-center shadow-lg ring-2 ring-accent/30">
                <span className="text-primary-foreground font-bold text-lg">★</span>
              </div>
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-accent rounded-full animate-pulse shadow-sm"></div>
            </div>
            <span className="font-bold text-lg hidden sm:inline bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Lịch sử Đảng
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-2">
            {navItems.map((item) => {
              const Icon = item.icon
              return (
                <a
                  key={item.href}
                  href={item.href}
                  className="flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-lg hover:bg-secondary/20 hover:text-primary transition-all duration-200 group"
                >
                  <Icon className="w-4 h-4 group-hover:scale-110 transition-transform" />
                  <span>{item.label}</span>
                </a>
              )
            })}
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden hover:bg-secondary/20"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X /> : <Menu />}
          </Button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-1 bg-secondary/10 backdrop-blur-sm rounded-lg p-2 border border-accent/20">
            {navItems.map((item) => {
              const Icon = item.icon
              return (
                <a
                  key={item.href}
                  href={item.href}
                  className="flex items-center gap-3 px-4 py-3 text-sm font-medium rounded-lg hover:bg-secondary/20 hover:text-primary transition-all duration-200"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <Icon className="w-5 h-5" />
                  <span>{item.label}</span>
                </a>
              )
            })}
          </div>
        )}
      </div>
    </nav>
  )
}
