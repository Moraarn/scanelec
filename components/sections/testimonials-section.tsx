import Link from "next/link"
import { ArrowRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import { TestimonialCard } from "@/components/ui/testimonial-card"

const testimonials = [
  {
    quote:
      "Scanelec Technologies provided us with an exceptional security system that perfectly meets our needs. Their team was professional and efficient throughout the entire process.",
    author: "Sarah Johnson",
    position: "Facility Manager, AFCHIX",
    rating: 5,
  },
  {
    quote:
      "The automated gate system installed by Scanelec has significantly improved our facility's security and efficiency. Their attention to detail and quality of work is outstanding.",
    author: "Michael Odhiambo",
    position: "Operations Director, CLYDE",
    rating: 5,
  },
  {
    quote:
      "We've been working with Scanelec for over 3 years now, and their service has been consistently excellent. Their team is responsive, knowledgeable, and always goes the extra mile.",
    author: "Elizabeth Wanjiku",
    position: "Principal, Vera Beauty and Fashion College",
    rating: 4,
  },
]

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="w-full py-12 md:py-24 lg:py-32 bg-slate-50 dark:bg-slate-900/30">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">Testimonials</div>
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">What Our Clients Say</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Don't just take our word for it - hear from some of our satisfied clients.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 mt-12">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} testimonial={testimonial} />
          ))}
        </div>
        <div className="mt-12 flex justify-center">
          <Link href="/testimonials">
            <Button variant="outline" size="sm" className="gap-2 rounded-full">
              Read More Testimonials
              <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
