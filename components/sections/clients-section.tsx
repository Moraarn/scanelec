import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import { images } from "@/lib/images"

const clients = [
  {
    name: "AFCHIX",
    logo: images.clients.afchix,
    description: "Supporting women in technology across Africa",
    link: "https://afchix.org",
  },
  {
    name: "CLYDE",
    logo: images.clients.clyde,
    description: "Industry leader in innovative solutions",
    link: "#",
  },
  {
    name: "Vera Beauty and Fashion College",
    logo: images.clients.vera,
    description: "Premier beauty and fashion education institution",
    link: "#",
  },
  {
    name: "NGAO Credit",
    logo: images.clients.ngao,
    description: "Trusted financial services provider",
    link: "#",
  },
]

export function ClientsSection() {
  return (
    <section id="clients" className="w-full py-12 md:py-24 lg:py-32 bg-background">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">Our Clients</div>
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Trusted by Leading Organizations</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              We're proud to provide security solutions to these respected institutions.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4 mt-12">
          {clients.map((client, index) => (
            <a
              key={index}
              href={client.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center space-y-4 rounded-xl p-6 text-center transition-all hover:bg-muted/50"
            >
              <Image
                src={client.logo || "/placeholder.svg"}
                alt={`${client.name} logo`}
                width={200}
                height={100}
                className="mx-auto h-16 w-auto object-contain"
              />
              <h3 className="text-xl font-bold">{client.name}</h3>
              <p className="text-sm text-muted-foreground">{client.description}</p>
            </a>
          ))}
        </div>
        <div className="mt-12 flex justify-center">
          <Link href="/clients">
            <Button variant="outline" size="sm" className="gap-2 rounded-full">
              View All Clients
              <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
