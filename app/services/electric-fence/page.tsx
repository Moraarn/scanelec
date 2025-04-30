import type { Metadata } from "next"
import Image from "next/image"

import { ServiceCTA } from "@/components/ui/service-cta"
import { ServiceDetailHeader } from "@/components/ui/service-detail-header"
import { ServiceFeatures } from "@/components/ui/service-features"
import { images } from "@/lib/images"

export const metadata: Metadata = {
  title: "Electric Fence | Scanelec Technologies",
  description: "High-quality electric fence systems for property protection.",
}

export default function ElectricFencePage() {
  const features = [
    "High-voltage deterrent system",
    "Tamper-proof design",
    "Weather-resistant components",
    "Zoned monitoring capabilities",
    "Integration with alarm systems",
    "Low maintenance requirements",
    "Compliance with safety regulations",
    "Professional installation and certification",
  ]

  return (
    <>
      <ServiceDetailHeader
        title="Electric Fence"
        description="Our electric fence systems provide a powerful deterrent against intruders while ensuring the safety of your family, employees, and legitimate visitors."
        icon="⚡"
        imageSrc={images.services.electricFence}
      />

      <div className="prose prose-lg dark:prose-invert max-w-none">
        <p>
          Scanelec Technologies offers safe and reliable electric fence systems that prevent false alarms while
          providing maximum protection for your property. Our systems deliver a non-lethal but highly effective shock
          that deters intruders without causing permanent harm.
        </p>

        <p>
          Each electric fence is custom-designed to suit your property's layout and security requirements. We use only
          high-quality components that can withstand harsh weather conditions and provide years of reliable service.
        </p>
      </div>

      <ServiceFeatures features={features} />

      <div className="grid gap-8 md:grid-cols-2 my-12">
        <div className="rounded-xl overflow-hidden">
          <Image
            src={images.serviceDetails.electricFence}
            alt="Electric fence installation"
            width={600}
            height={400}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="space-y-4">
          <h2 className="text-2xl font-bold">Safety and Compliance</h2>
          <p>
            All our electric fence installations comply with local safety regulations and international standards. We
            install clear warning signs around the perimeter to alert people to the presence of the electric fence.
          </p>
          <p>
            Our systems include multiple safety features, such as automatic shut-off in case of a power surge and
            battery backup during power outages. We also provide comprehensive training on how to safely operate and
            maintain your electric fence.
          </p>
        </div>
      </div>

      <ServiceCTA />
    </>
  )
}
