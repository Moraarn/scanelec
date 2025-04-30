import type { Metadata } from "next"
import Image from "next/image"

import { ServiceCTA } from "@/components/ui/service-cta"
import { ServiceDetailHeader } from "@/components/ui/service-detail-header"
import { ServiceFeatures } from "@/components/ui/service-features"
import { images } from "@/lib/images"

export const metadata: Metadata = {
  title: "SMS Management Systems | Scanelec Technologies",
  description: "Integrated SMS management solutions for staff and organization communication.",
}

export default function SmsManagementPage() {
  const features = [
    "Bulk SMS capabilities",
    "Scheduled messaging",
    "Contact management",
    "Message templates",
    "Delivery reports",
    "API integration",
    "User access control",
    "Analytics and reporting",
  ]

  return (
    <>
      <ServiceDetailHeader
        title="SMS Management Systems"
        description="Our SMS management systems provide efficient communication solutions for organizations, enabling effective staff and customer engagement."
        icon="📱"
        imageSrc={images.services.smsManagement}
      />

      <div className="prose prose-lg dark:prose-invert max-w-none">
        <p>
          Scanelec Technologies offers comprehensive SMS management systems designed to streamline communication within
          organizations. Our solutions enable efficient messaging for staff coordination, customer engagement, and
          emergency notifications.
        </p>

        <p>
          We understand that effective communication is essential for organizational success. Our SMS management systems
          are tailored to meet the specific needs of different sectors, including education, healthcare, finance, and
          retail, providing reliable and cost-effective messaging solutions.
        </p>
      </div>

      <ServiceFeatures features={features} />

      <div className="grid gap-8 md:grid-cols-2 my-12">
        <div className="rounded-xl overflow-hidden">
          <Image
            src={images.serviceDetails.smsManagement}
            alt="SMS management system dashboard"
            width={600}
            height={400}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="space-y-4">
          <h2 className="text-2xl font-bold">Applications and Benefits</h2>
          <p>
            Our SMS management systems can be used for various purposes, including staff notifications, appointment
            reminders, marketing campaigns, emergency alerts, and customer service communications. The platform's
            flexibility allows it to adapt to your organization's unique communication requirements.
          </p>
          <p>
            The benefits of our SMS management systems include improved communication efficiency, reduced costs compared
            to traditional communication methods, higher message open rates than email, and the ability to reach people
            instantly regardless of their location or internet connectivity.
          </p>
        </div>
      </div>

      <ServiceCTA />
    </>
  )
}
