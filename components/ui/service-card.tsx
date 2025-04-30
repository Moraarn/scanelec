import Link from "next/link"
import { ArrowRight } from "lucide-react"

import { Button } from "@/components/ui/button"

interface ServiceCardProps {
  service: {
    title: string
    description: string
    icon: string
    link: string
  }
}

export function ServiceCard({ service }: ServiceCardProps) {
  return (
    <div className="flex flex-col items-center space-y-2 rounded-xl border p-6 shadow-sm transition-all hover:shadow-md hover:border-primary/50 dark:border-gray-800 group">
      <div className="text-4xl group-hover:scale-110 transition-transform">{service.icon}</div>
      <h3 className="text-xl font-bold">{service.title}</h3>
      <p className="text-sm text-muted-foreground">{service.description}</p>
      <Link href={service.link} className="mt-auto">
        <Button variant="link" className="rounded-full group-hover:text-primary">
          Learn more
          <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
        </Button>
      </Link>
    </div>
  )
}
