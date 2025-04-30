"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, ArrowRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import { images } from "@/lib/images"

const heroSlides = [
  {
    title: "Protecting Lives & Property with Advanced Technology",
    description:
      "Scanelec Technologies provides high-quality security solutions and technology services to keep your home and business safe.",
    image: images.hero.securityMonitoring,
    alt: "Security system monitoring",
  },
  {
    title: "State-of-the-Art Security Systems",
    description:
      "Our cutting-edge technology ensures maximum protection for your property with minimal intrusion to your daily life.",
    image: images.hero.securityInstallation,
    alt: "Modern security installation",
  },
  {
    title: "Professional Installation & Support",
    description:
      "Our team of experts ensures flawless installation and provides ongoing support for all your security needs.",
    image: images.hero.securityProfessional,
    alt: "Security professional at work",
  },
]

export function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === heroSlides.length - 1 ? 0 : prev + 1))
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === heroSlides.length - 1 ? 0 : prev + 1))
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? heroSlides.length - 1 : prev - 1))
  }

  return (
    <section className="w-full pt-24 pb-6 md:pt-32 md:pb-12 lg:pt-40 lg:pb-16 bg-gradient-to-r from-primary-950 to-primary-800 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-dot-pattern opacity-10"></div>
      <div className="absolute inset-0 bg-black/30 z-10"></div>
      <div className="container px-4 md:px-6 relative z-20">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              {heroSlides.map((slide, index) => (
                <div
                  key={index}
                  className={`transition-opacity duration-500 ${
                    currentSlide === index ? "opacity-100" : "opacity-0 absolute"
                  }`}
                >
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">{slide.title}</h1>
                  <p className="max-w-[600px] text-gray-300 md:text-xl mt-4">{slide.description}</p>
                </div>
              ))}
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Link href="#services">
                <Button size="sm" className="px-6 rounded-full bg-white text-primary-900 hover:bg-white/90 border-0">
                  Our Services
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link href="#contact">
                <Button
                  size="sm"
                  variant="outline"
                  className="bg-transparent text-white border-white hover:bg-white hover:text-primary-900 rounded-full"
                >
                  Contact Us
                </Button>
              </Link>
            </div>
            <div className="flex items-center gap-2 mt-4">
              {heroSlides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-2.5 h-2.5 rounded-full transition-colors ${
                    currentSlide === index ? "bg-white" : "bg-white/30"
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
          <div className="mx-auto w-full max-w-[500px] lg:max-w-none relative">
            <div className="aspect-video overflow-hidden rounded-xl bg-gray-100/20 object-cover relative">
              {heroSlides.map((slide, index) => (
                <Image
                  key={index}
                  src={slide.image || "/placeholder.svg"}
                  alt={slide.alt}
                  width={1280}
                  height={720}
                  className={`w-full h-full object-cover absolute top-0 left-0 transition-opacity duration-500 ${
                    currentSlide === index ? "opacity-100" : "opacity-0"
                  }`}
                />
              ))}
              <div className="absolute inset-0 flex items-center justify-between px-4">
                <Button
                  onClick={prevSlide}
                  variant="ghost"
                  size="icon"
                  className="rounded-full bg-black/30 text-white hover:bg-black/50"
                >
                  <ArrowLeft className="h-5 w-5" />
                  <span className="sr-only">Previous slide</span>
                </Button>
                <Button
                  onClick={nextSlide}
                  variant="ghost"
                  size="icon"
                  className="rounded-full bg-black/30 text-white hover:bg-black/50"
                >
                  <ArrowRight className="h-5 w-5" />
                  <span className="sr-only">Next slide</span>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-primary-900 to-transparent"></div>
    </section>
  )
}
