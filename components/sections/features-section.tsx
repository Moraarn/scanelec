import { Shield } from "lucide-react"

const features = [
  {
    title: "Expert Installation",
    description: "Our professional staff ensures perfect installation of all security systems.",
  },
  {
    title: "Quality Products",
    description: "We use only the highest quality products and materials for all our installations.",
  },
  {
    title: "Reliable Support",
    description: "Our team is always available to provide support and maintenance for all our systems.",
  },
]

export function FeaturesSection() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-primary/20 to-primary/10 dark:from-primary/10 dark:to-primary/5">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Why Choose Scanelec Technologies?</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              We are committed to providing the best security solutions for your specific needs.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-3 mt-12">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex flex-col items-center space-y-2 rounded-xl bg-background p-6 shadow-sm hover:shadow-md transition-all"
            >
              <div className="rounded-full bg-primary/10 p-3">
                <Shield className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold">{feature.title}</h3>
              <p className="text-sm text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
