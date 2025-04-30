import type { Metadata } from "next"
import Image from "next/image"

import { ServiceCTA } from "@/components/ui/service-cta"
import { ServiceDetailHeader } from "@/components/ui/service-detail-header"
import { ServiceFeatures } from "@/components/ui/service-features"
import { images } from "@/lib/images"

export const metadata: Metadata = {
  title: "Network Cabling | Scanelec Technologies",
  description: "Professional network cabling solutions for businesses.",
}

export default function NetworkCablingPage() {
  const features = [
    "Structured cabling systems",
    "Fiber optic installation",
    "Data center cabling",
    "Network infrastructure design",
    "Cable management solutions",
    "Testing and certification",
    "Maintenance and support",
    "Compliance with industry standards",
  ]

  return (
    <>
      <ServiceDetailHeader
        title="Network Cabling"
        description="Our professional network cabling services ensure reliable and efficient data transmission for your business operations."
        icon="🔌"
        imageSrc={images.services.networkCabling}
      />

      <div className="prose prose-lg dark:prose-invert max-w-none">
        <p>
          Scanelec Technologies offers comprehensive network cabling solutions for businesses of all sizes. Our
          structured cabling systems provide the foundation for your organization's voice, data, video, and security
          systems, ensuring reliable connectivity and optimal performance.
        </p>

        <p>
          We use only high-quality cables, connectors, and components that meet or exceed industry standards. Our
          certified technicians follow best practices for cable routing, termination, and testing to ensure a clean,
          organized, and efficient network infrastructure.
        </p>
      </div>

      <ServiceFeatures features={features} />

      <div className="grid gap-8 md:grid-cols-2 my-12">
        <div className="rounded-xl overflow-hidden">
          <Image
            src={images.serviceDetails.networkCabling}
            alt="Network cabling installation"
            width={600}
            height={400}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="space-y-4">
          <h2 className="text-2xl font-bold">The Importance of Quality Cabling</h2>
          <p>
            A well-designed and properly installed cabling system is essential for the reliable operation of your
            network. Poor cabling can lead to data loss, slow performance, and frequent connectivity issues that disrupt
            your business operations.
          </p>
          <p>
            Our structured cabling solutions are designed with future growth in mind, allowing for easy expansion and
            upgrades as your business needs evolve. We also provide detailed documentation of your cabling
            infrastructure for easier troubleshooting and maintenance.
          </p>
        </div>
      </div>

      <ServiceCTA />
    </>
  )
}
