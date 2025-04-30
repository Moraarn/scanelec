import type { Metadata } from "next"
import Image from "next/image"

import { ServiceCTA } from "@/components/ui/service-cta"
import { ServiceDetailHeader } from "@/components/ui/service-detail-header"
import { ServiceFeatures } from "@/components/ui/service-features"
import { images } from "@/lib/images"

export const metadata: Metadata = {
  title: "Mast & Tower Installation | Scanelec Technologies",
  description: "Professional mast and tower installation services for various industries.",
}

export default function MastTowerPage() {
  const features = [
    "Custom design and engineering",
    "Structural analysis and certification",
    "Foundation construction",
    "Equipment installation and integration",
    "Lightning protection systems",
    "Regular maintenance and inspections",
    "Compliance with aviation regulations",
    "Comprehensive project management",
  ]

  return (
    <>
      <ServiceDetailHeader
        title="Mast & Tower Installation"
        description="We are a leading supplier of Mast & Tower Services for Aviation, Broadcast, Telecommunications, and more, providing reliable infrastructure for critical communications."
        icon="📡"
        imageSrc={images.services.mastTower}
      />

      <div className="prose prose-lg dark:prose-invert max-w-none">
        <p>
          Scanelec Technologies specializes in the design, fabrication, and installation of communication masts and
          towers for various industries. Our structures are engineered to withstand harsh weather conditions and provide
          stable platforms for antennas, transmitters, and other communication equipment.
        </p>

        <p>
          We handle every aspect of the project, from site surveys and foundation design to tower assembly and equipment
          installation. Our experienced team ensures that all work is performed safely and in compliance with local
          regulations and industry standards.
        </p>
      </div>

      <ServiceFeatures features={features} />

      <div className="grid gap-8 md:grid-cols-2 my-12">
        <div className="rounded-xl overflow-hidden">
          <Image
            src={images.serviceDetails.mastTower}
            alt="Mast tower installation"
            width={600}
            height={400}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="space-y-4">
          <h2 className="text-2xl font-bold">Industries We Serve</h2>
          <p>
            Our mast and tower services cater to a wide range of industries, including telecommunications, broadcasting,
            aviation, weather monitoring, and security. We understand the unique requirements of each sector and provide
            customized solutions accordingly.
          </p>
          <p>
            We also offer ongoing maintenance services to ensure the continued safety and functionality of your mast or
            tower. Our maintenance programs include regular inspections, structural assessments, and preventive
            maintenance to extend the lifespan of your investment.
          </p>
        </div>
      </div>

      <ServiceCTA />
    </>
  )
}
