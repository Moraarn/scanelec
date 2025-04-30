import { Star } from "lucide-react"

interface TestimonialCardProps {
  testimonial: {
    quote: string
    author: string
    position: string
    rating: number
  }
}

export function TestimonialCard({ testimonial }: TestimonialCardProps) {
  return (
    <div className="flex flex-col justify-between space-y-4 rounded-xl bg-background p-6 shadow-sm dark:border dark:border-gray-800 hover:shadow-md transition-all">
      <div className="space-y-4">
        <div className="flex">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star
              key={i}
              className={`h-5 w-5 ${
                i < testimonial.rating ? "fill-primary text-primary" : "fill-muted text-muted-foreground"
              }`}
            />
          ))}
        </div>
        <p className="text-muted-foreground italic">"{testimonial.quote}"</p>
      </div>
      <div>
        <p className="font-semibold">{testimonial.author}</p>
        <p className="text-sm text-muted-foreground">{testimonial.position}</p>
      </div>
    </div>
  )
}
