import type { Metadata } from "next"

import { ServiceCard } from "@/components/ui/service-card"

export const metadata: Metadata = {
  title: "Our Services | Scanelec Technologies",
  description: "Comprehensive security and technology solutions for homes and businesses.",
}

const services = [
  {
    title: "Burglar Alarm Systems",
    description: "Motion detectors that monitor large areas and alert you of any unauthorized movement.",
    icon: "🔔",
    link: "/services/burglar-alarm",
  },
  {
    title: "Automatic Gates",
    description:
      "Leading installer of automated gates in Kenya, operating by sliding on a rail installed on the ground.",
    icon: "🚪",
    link: "/services/automatic-gates",
  },
  {
    title: "Electric Fence",
    description: "Safe and reliable electric fences that prevent false alarms and protect your property.",
    icon: "⚡",
    link: "/services/electric-fence",
  },
  {
    title: "Emergency Exit Doors",
    description: "High-quality fire doors that provide a barrier to radiant and conductive heat transfer.",
    icon: "🚪",
    link: "/services/emergency-doors",
  },
  {
    title: "Mast & Tower Installation",
    description: "Leading supplier of Mast & Tower Services for Aviation, Broadcast, Telecommunications, and more.",
    icon: "📡",
    link: "/services/mast-tower",
  },
  {
    title: "Network Cabling",
    description:
      "Professional structured cabling services for your communication needs with hardware ports connection.",
    icon: "🔌",
    link: "/services/network-cabling",
  },
  {
    title: "Car Shades",
    description: "High-quality carports made from porous shade netting with visual effects and versatility.",
    icon: "🚗",
    link: "/services/car-shades",
  },
  {
    title: "SMS Management Systems",
    description: "Staff, institution, and organization management systems integrated with text message services.",
    icon: "📱",
    link: "/services/sms-management",
  },
]

export default function ServicesPage() {
  return (
    <>
      <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold tracking-tighter md:text-4xl">Our Services</h1>
          <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            We provide a wide range of security and technology services to protect your home and business.
          </p>
        </div>
      </div>

      <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {services.map((service, index) => (
          <ServiceCard key={index} service={service} />
        ))}
      </div>
    </>
  )
}
