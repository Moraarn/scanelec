import Image from "next/image"
import Link from "next/link"
import { ArrowRight, CheckCircle } from "lucide-react"

import { Button } from "@/components/ui/button"
import { images } from "@/lib/images"

const missionPoints = [
  "Honest and fair in all our dealings",
  "Interested in people and their problems",
  "Treating client's needs with utmost priority",
  "Providing highest quality products",
  "Delivering exceptional customer service",
]

export function AboutSection() {
  return (
    <section
      id="about"
      className="w-full py-12 md:py-24 lg:py-32 bg-slate-50 dark:bg-slate-900/30 relative overflow-hidden"
    >
      <div className="absolute top-0 right-0 w-1/3 h-full bg-primary/5 -skew-x-12 transform origin-top-right"></div>
      <div className="container px-4 md:px-6 relative z-10">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
          <div className="mx-auto w-full max-w-[500px] lg:max-w-none order-2 lg:order-1">
            <div className="aspect-square overflow-hidden rounded-xl bg-gray-200 dark:bg-gray-800 object-cover shadow-lg relative">
              <Image
                src={images.about.team}
                alt="Scanelec team at work"
                width={800}
                height={800}
                className="w-full h-full object-cover"
              />
              <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-primary rounded-full flex items-center justify-center text-white font-bold text-xl">
                15+ Years
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-center space-y-4 order-1 lg:order-2">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">Our Mission</div>
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Protecting What Matters Most</h2>
              <p className="text-muted-foreground md:text-xl/relaxed">
                The fundamental mission of Scanelec Technologies is to protect the life and property of our customers
                and to provide the highest quality product and customer service.
              </p>
            </div>
            <ul className="grid gap-2">
              {missionPoints.map((point, index) => (
                <li key={index} className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
            <div className="flex flex-col gap-2 min-[400px]:flex-row pt-4">
              <Link href="/about">
                <Button size="sm" className="rounded-full">
                  Learn More About Us
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
