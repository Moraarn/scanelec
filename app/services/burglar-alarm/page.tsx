"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { AlertTriangle, CheckCircle2, Shield, ShieldCheck } from "lucide-react"

import { ServiceCTA } from "@/components/ui/service-cta"
import { ServiceDetailHeader } from "@/components/ui/service-detail-header"
import { ServiceFeatures } from "@/components/ui/service-features"
import { images } from "@/lib/images"

export default function BurglarAlarmPage() {
  const features = [
    "24/7 monitoring and instant alerts",
    "Motion detection technology",
    "Door and window sensors",
    "Silent alarm options",
    "Remote monitoring via smartphone app",
    "Battery backup during power outages",
    "Integration with other security systems",
    "Professional installation and maintenance",
  ]

  return (
    <>
      <ServiceDetailHeader
        title="Burglar Alarm Systems"
        description="Our advanced burglar alarm systems provide comprehensive protection for your home or business, detecting unauthorized entry and alerting you immediately."
        icon="🔔"
        imageSrc={images.services.burglarAlarm}
      />

      <motion.div
        className="prose prose-lg dark:prose-invert max-w-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <p className="text-xl leading-relaxed">
          Scanelec Technologies offers state-of-the-art burglar alarm systems designed to provide maximum security for
          your property. Our systems use advanced motion detection technology to monitor large areas and alert you
          immediately of any unauthorized movement.
        </p>

        <p className="text-lg text-gray-600 dark:text-gray-400">
          Whether you need protection for your home, office, or commercial property, our expert team will design and
          install a customized security solution that meets your specific needs and budget.
        </p>
      </motion.div>

      <ServiceFeatures features={features} />

      <div className="grid gap-12 md:grid-cols-2 my-16">
        <motion.div
          className="rounded-2xl overflow-hidden shadow-xl"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Image
            src={images.serviceDetails.burglarAlarm}
            alt="Burglar alarm control panel"
            width={800}
            height={600}
            className="w-full h-full object-cover"
          />
        </motion.div>
        <motion.div
          className="space-y-6 flex flex-col justify-center"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <h2 className="text-3xl font-bold text-primary-900 dark:text-primary-100">
            How Our Burglar Alarm Systems Work
          </h2>
          <p className="text-lg">
            Our burglar alarm systems use a combination of sensors, detectors, and control panels to create a
            comprehensive security network around your property. When a sensor is triggered, the system immediately
            sends an alert to both you and our monitoring center.
          </p>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Our professional monitoring team is available 24/7 to respond to alarms and dispatch emergency services if
            necessary. You can also monitor and control your system remotely using our user-friendly mobile app.
          </p>

          <div className="grid grid-cols-2 gap-4 mt-4">
            <div className="bg-primary-50 dark:bg-primary-900/30 p-4 rounded-xl flex items-start gap-3">
              <ShieldCheck className="h-6 w-6 text-primary-700 dark:text-primary-300 mt-1" />
              <div>
                <h3 className="font-medium">Real-time Alerts</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Instant notifications on your smartphone</p>
              </div>
            </div>
            <div className="bg-primary-50 dark:bg-primary-900/30 p-4 rounded-xl flex items-start gap-3">
              <AlertTriangle className="h-6 w-6 text-primary-700 dark:text-primary-300 mt-1" />
              <div>
                <h3 className="font-medium">Tamper Protection</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Alerts if someone tries to disable the system
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      <motion.div
        className="bg-white dark:bg-gray-900 rounded-2xl shadow-xl p-8 my-16 border border-gray-100 dark:border-gray-800"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex items-center gap-4 mb-6">
          <div className="bg-primary-100 dark:bg-primary-900/50 p-3 rounded-xl">
            <Shield className="h-6 w-6 text-primary-800 dark:text-primary-200" />
          </div>
          <h2 className="text-2xl font-bold">Why Choose Our Burglar Alarm Systems</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="space-y-3">
            <CheckCircle2 className="h-6 w-6 text-primary-600 dark:text-primary-400" />
            <h3 className="font-semibold text-lg">Reliability</h3>
            <p className="text-gray-600 dark:text-gray-400">
              Our systems are designed to work even during power outages with battery backup.
            </p>
          </div>
          <div className="space-y-3">
            <CheckCircle2 className="h-6 w-6 text-primary-600 dark:text-primary-400" />
            <h3 className="font-semibold text-lg">Customization</h3>
            <p className="text-gray-600 dark:text-gray-400">
              We design each system based on your property's specific layout and security needs.
            </p>
          </div>
          <div className="space-y-3">
            <CheckCircle2 className="h-6 w-6 text-primary-600 dark:text-primary-400" />
            <h3 className="font-semibold text-lg">Expert Support</h3>
            <p className="text-gray-600 dark:text-gray-400">
              Our technicians provide professional installation and ongoing maintenance.
            </p>
          </div>
        </div>
      </motion.div>

      <ServiceCTA />
    </>
  )
}
