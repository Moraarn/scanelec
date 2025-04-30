"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { Facebook, Menu, Moon, Shield, Sun, Twitter } from "lucide-react"

import { Button } from "@/components/ui/button"
import { useTheme } from "next-themes"

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [scrolled])

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b"
          : "bg-transparent border-transparent"
      }`}
    >
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2 font-bold text-xl">
          <Shield className={`h-6 w-6 ${scrolled ? "text-primary" : "text-white"}`} />
          <span className={scrolled ? "" : "text-white"}>Scanelec Technologies</span>
        </div>
        <nav className="hidden md:flex items-center gap-6">
          <Link
            href="#services"
            className={`text-sm font-medium hover:text-primary transition-colors ${
              scrolled ? "" : "text-white hover:text-white/80"
            }`}
          >
            Services
          </Link>
          <Link
            href="#about"
            className={`text-sm font-medium hover:text-primary transition-colors ${
              scrolled ? "" : "text-white hover:text-white/80"
            }`}
          >
            About Us
          </Link>
          <Link
            href="#clients"
            className={`text-sm font-medium hover:text-primary transition-colors ${
              scrolled ? "" : "text-white hover:text-white/80"
            }`}
          >
            Clients
          </Link>
          <Link
            href="#testimonials"
            className={`text-sm font-medium hover:text-primary transition-colors ${
              scrolled ? "" : "text-white hover:text-white/80"
            }`}
          >
            Testimonials
          </Link>
          <Link
            href="#contact"
            className={`text-sm font-medium hover:text-primary transition-colors ${
              scrolled ? "" : "text-white hover:text-white/80"
            }`}
          >
            Contact
          </Link>
          <div className="flex items-center gap-2">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className={`rounded-full p-1.5 transition-colors ${
                scrolled ? "hover:bg-muted" : "text-white hover:bg-white/20"
              }`}
            >
              <Facebook className="h-4 w-4" />
              <span className="sr-only">Facebook</span>
            </a>
            <a
              href="https://x.com"
              target="_blank"
              rel="noopener noreferrer"
              className={`rounded-full p-1.5 transition-colors ${
                scrolled ? "hover:bg-muted" : "text-white hover:bg-white/20"
              }`}
            >
              <Twitter className="h-4 w-4" />
              <span className="sr-only">X (Twitter)</span>
            </a>
          </div>
          <Button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            variant="ghost"
            size="icon"
            className={`rounded-full ${scrolled ? "" : "text-white hover:text-white hover:bg-white/20"}`}
          >
            <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            <span className="sr-only">Toggle theme</span>
          </Button>
          <Link href="#contact">
            <Button size="sm" className="rounded-full px-4">
              Inquire Now
            </Button>
          </Link>
        </nav>
        <div className="flex items-center gap-2 md:hidden">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className={`rounded-full p-1.5 transition-colors ${
              scrolled ? "hover:bg-muted" : "text-white hover:bg-white/20"
            }`}
          >
            <Facebook className="h-4 w-4" />
            <span className="sr-only">Facebook</span>
          </a>
          <a
            href="https://x.com"
            target="_blank"
            rel="noopener noreferrer"
            className={`rounded-full p-1.5 transition-colors ${
              scrolled ? "hover:bg-muted" : "text-white hover:bg-white/20"
            }`}
          >
            <Twitter className="h-4 w-4" />
            <span className="sr-only">X (Twitter)</span>
          </a>
          <Button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            variant="ghost"
            size="icon"
            className={`rounded-full ${scrolled ? "" : "text-white hover:text-white hover:bg-white/20"}`}
          >
            <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            <span className="sr-only">Toggle theme</span>
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className={`rounded-full ${scrolled ? "" : "text-white hover:text-white hover:bg-white/20"}`}
          >
            <Menu className="h-5 w-5" />
            <span className="sr-only">Toggle menu</span>
          </Button>
        </div>
      </div>
    </header>
  )
}
