import type { ReactNode } from "react"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Footer } from "@/components/layout/footer"
import { Navbar } from "@/components/layout/navbar"

export default function ServicesLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="bg-gradient-to-r from-primary-950 to-primary-800 text-white py-20 md:py-28 relative overflow-hidden">
        <div className="absolute inset-0 bg-dot-pattern opacity-10"></div>
        <div className="absolute -bottom-8 left-0 right-0 h-16 bg-gradient-to-t from-background to-transparent"></div>
        <div className="container relative z-10">
          <Link href="/#services">
            <Button variant="ghost" className="text-white hover:bg-white/20 mb-4 -ml-2 group">
              <ArrowLeft className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1" />
              Back to Services
            </Button>
          </Link>
        </div>
      </div>
      <main className="flex-1 py-12 md:py-20 bg-gradient-to-b from-background to-gray-50 dark:from-background dark:to-gray-950/20">
        <div className="container">{children}</div>
      </main>
      <Footer />
    </div>
  )
}
