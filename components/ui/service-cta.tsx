"use client"

import Link from "next/link"
import { ArrowRight, MessageSquare, Phone } from "lucide-react"
import { motion } from "framer-motion"
import Image from "next/image"

import { Button } from "@/components/ui/button"
import { images } from "@/lib/images"

export function ServiceCTA() {
  return (
    <motion.div
      className="rounded-3xl overflow-hidden my-20 relative"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-primary-800 to-primary-950 z-0"></div>
      <div className="absolute inset-0 opacity-10 mix-blend-overlay z-0">
        <Image
          src={images.cta.background}
          alt=""
          fill
          className="object-cover"
          priority
        />
      </div>
      <div className="absolute inset-0 bg-dot-pattern opacity-10 z-0"></div>

      <div className="relative z-10 p-8 md:p-12 text-white">
        <div className="grid gap-8 lg:grid-cols-2 items-center">
          <div className="space-y-6">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-white/20 text-sm font-medium backdrop-blur-sm">
              <span className="animate-pulse-slow mr-2">●</span>
              Ready to get started?
            </div>
            <h2 className="text-3xl md:text-4xl font-bold">Secure your property with expert solutions</h2>
            <p className="text-white/80 text-lg max-w-md">
              Our team of security professionals is ready to help you design and implement the perfect security system
              for your specific needs.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-end">
            <Link href="/#contact">
              <Button
                size="lg"
                className="rounded-full w-full sm:w-auto bg-white text-primary-900 hover:bg-white/90 border-0"
              >
                <MessageSquare className="mr-2 h-5 w-5" />
                Contact Us
              </Button>
            </Link>
            <Link href="tel:+254000000000">
              <Button
                variant="outline"
                size="lg"
                className="rounded-full w-full sm:w-auto border-white text-white hover:bg-white/20"
              >
                <Phone className="mr-2 h-5 w-5" />
                Call Now
              </Button>
            </Link>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/20 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-white/70">Looking for other security solutions?</p>
          <Link href="/#services">
            <Button variant="ghost" size="lg" className="rounded-full text-white hover:bg-white/20 group">
              Explore All Services
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>
      </div>
    </motion.div>
  )
}
