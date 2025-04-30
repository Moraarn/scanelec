import type { Metadata } from "next"
import Image from "next/image"

import { ServiceCTA } from "@/components/ui/service-cta"
import { ServiceDetailHeader } from "@/components/ui/service-detail-header"
import { ServiceFeatures } from "@/components/ui/service-features"
import { images } from "@/lib/images"

export const metadata: Metadata = {
  title: "Car Shades | Scanelec Technologies",
  description: "High-quality carports and shade structures for vehicle protection.",
}

export default function CarShadesPage() {
  const features = [
    "Custom design and fabrication",
    "Durable materials and construction",
    "UV protection for vehicles",
    "Weather-resistant structures",
    "Easy installation process",
    "Low maintenance requirements",
    "Aesthetic design options",
    "Professional installation service",
  ]

  return (
    <>
      <ServiceDetailHeader
        title="Car Shades"
        description="Protect your vehicles from harsh weather conditions with our high-quality car shade solutions."
        icon="🚗"
        imageSrc={images.services.carShades}
      />

      <div className="prose prose-lg dark:prose-invert max-w-none">
        <p>
          Scanelec Technologies offers premium car shade solutions designed to protect your vehicles from the harsh
          African sun and unpredictable weather conditions. Our carports are constructed using high-quality shade
          netting that blocks harmful UV rays while allowing air circulation to prevent heat buildup.
        </p>

        <p>
          We design and install custom car shades for residential homes, commercial properties, and institutional
          facilities. Our structures are built with durability in mind, featuring strong steel frameworks that can
          withstand wind and rain while maintaining their aesthetic appeal.
        </p>
      </div>

      <ServiceFeatures features={features} />

      <div className="grid gap-8 md:grid-cols-2 my-12">
        <div className="rounded-xl overflow-hidden">
          <Image
            src={images.serviceDetails.carShades}
            alt="Car shade installation"
            width={600}
            height={400}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="space-y-4">
          <h2 className="text-2xl font-bold">Benefits of Car Shades</h2>
          <p>
            Car shades provide essential protection for your vehicles, extending their lifespan by preventing paint
            fading, dashboard cracking, and interior damage caused by prolonged sun exposure. They also keep your car
            cooler, making it more comfortable to enter after parking in the sun.
          </p>
          <p>
            Beyond vehicle protection, our car shades can enhance the aesthetic appeal of your property with their
            modern design and customizable options. They also create additional usable outdoor space that can serve
            multiple purposes beyond just parking.
          </p>
        </div>
      </div>

      <ServiceCTA />
    </>
  )
}
