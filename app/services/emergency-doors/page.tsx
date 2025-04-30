import type { Metadata } from "next"
import Image from "next/image"

import { ServiceCTA } from "@/components/ui/service-cta"
import { ServiceDetailHeader } from "@/components/ui/service-detail-header"
import { ServiceFeatures } from "@/components/ui/service-features"
import { images } from "@/lib/images"

export const metadata: Metadata = {
  title: "Emergency Doors | Scanelec Technologies",
  description: "High-quality emergency exit doors for safety and compliance.",
}

export default function EmergencyDoorsPage() {
  const features = [
    "Fire-rated doors",
    "Emergency exit hardware",
    "Self-closing mechanisms",
    "Intumescent seals",
    "Compliance with safety standards",
    "Professional installation",
    "Regular maintenance services",
    "Emergency lighting integration",
  ]

  return (
    <>
      <ServiceDetailHeader
        title="Emergency Doors"
        description="Our emergency doors provide safe and compliant exit solutions for buildings, ensuring quick evacuation during emergencies."
        icon="🚪"
        imageSrc={images.services.emergencyDoors}
      />

      <div className="prose prose-lg dark:prose-invert max-w-none">
        <p>
          Scanelec Technologies provides high-quality emergency exit doors designed to provide safe evacuation routes in
          case of fire or other emergencies. Our doors are constructed with fire-resistant materials and equipped with
          panic hardware for quick and easy exit.
        </p>

        <p>
          We understand the importance of compliance with local building codes and safety regulations. Our team works
          closely with architects, contractors, and building managers to ensure that all emergency exit doors meet or
          exceed the required standards.
        </p>
      </div>

      <ServiceFeatures features={features} />

      <div className="grid gap-8 md:grid-cols-2 my-12">
        <div className="rounded-xl overflow-hidden">
          <Image
            src={images.serviceDetails.emergencyDoors}
            alt="Emergency exit door installation"
            width={600}
            height={400}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="space-y-4">
          <h2 className="text-2xl font-bold">Life Safety and Building Protection</h2>
          <p>
            Emergency exit doors are a critical component of any building's life safety system. They provide a means of
            escape during emergencies and help contain fire and smoke to limit property damage.
          </p>
          <p>
            Our doors are designed to remain operational during fire conditions, with self-closing mechanisms and
            intumescent seals that expand when exposed to heat, sealing gaps around the door to prevent the spread of
            smoke and flames.
          </p>
        </div>
      </div>

      <ServiceCTA />
    </>
  )
}
