"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { Lock, Shield, Smartphone } from "lucide-react"

import { ServiceCTA } from "@/components/ui/service-cta"
import { ServiceDetailHeader } from "@/components/ui/service-detail-header"
import { ServiceFeatures } from "@/components/ui/service-features"
import { images } from "@/lib/images"

export default function AutomaticGatesPage() {
  const features = [
    "Remote control operation",
    "Smartphone app integration",
    "Vehicle detection sensors",
    "Customizable design options",
    "Durable materials for longevity",
    "Battery backup during power outages",
    "Safety sensors to prevent accidents",
    "Regular maintenance services",
  ]

  return (
    <>
      <ServiceDetailHeader
        title="Automatic Gates"
        description="We are a leading installer of automated gates in Kenya, providing secure and convenient access control solutions for residential and commercial properties."
        icon="🚪"
        imageSrc={images.services.automaticGates}
      />

      <motion.div
        className="prose prose-lg dark:prose-invert max-w-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <p className="text-xl leading-relaxed">
          Scanelec Technologies specializes in the installation of high-quality automatic gates that enhance both the
          security and aesthetic appeal of your property. Our gates operate by sliding on a rail installed on the
          ground, ensuring smooth and reliable operation.
        </p>

        <p className="text-lg text-gray-600 dark:text-gray-400">
          We offer a wide range of designs and materials to match your property's style, from elegant wrought iron to
          modern aluminum. Each gate is custom-built to your specifications and installed by our experienced
          professionals.
        </p>
      </motion.div>

      <ServiceFeatures features={features} />

      <div className="grid gap-12 md:grid-cols-2 my-16">
        <motion.div
          className="space-y-6 flex flex-col justify-center order-2 md:order-1"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h2 className="text-3xl font-bold text-primary-900 dark:text-primary-100">Benefits of Automatic Gates</h2>
          <p className="text-lg">
            Automatic gates provide an additional layer of security by controlling who can access your property. They
            also offer convenience, allowing you to open and close the gate without leaving your vehicle.
          </p>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Our gates can be integrated with other security systems, such as intercoms and CCTV cameras, to create a
            comprehensive security solution. We also offer regular maintenance services to ensure your gate continues to
            operate smoothly for years to come.
          </p>

          <div className="grid grid-cols-2 gap-4 mt-4">
            <div className="bg-primary-50 dark:bg-primary-900/30 p-4 rounded-xl flex items-start gap-3">
              <Lock className="h-6 w-6 text-primary-700 dark:text-primary-300 mt-1" />
              <div>
                <h3 className="font-medium">Enhanced Security</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Control who enters your property</p>
              </div>
            </div>
            <div className="bg-primary-50 dark:bg-primary-900/30 p-4 rounded-xl flex items-start gap-3">
              <Smartphone className="h-6 w-6 text-primary-700 dark:text-primary-300 mt-1" />
              <div>
                <h3 className="font-medium">Remote Access</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Control your gate from anywhere</p>
              </div>
            </div>
          </div>
        </motion.div>
        <motion.div
          className="rounded-2xl overflow-hidden shadow-xl order-1 md:order-2"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <Image
            src={images.serviceDetails.automaticGates}
            alt="Automatic gate installation"
            width={800}
            height={600}
            className="w-full h-full object-cover"
          />
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
          <h2 className="text-2xl font-bold">Our Gate Installation Process</h2>
        </div>

        <div className="grid md:grid-cols-4 gap-6">
          <div className="space-y-3 relative">
            <div className="bg-primary-100 dark:bg-primary-900/30 h-10 w-10 rounded-full flex items-center justify-center font-bold text-primary-800 dark:text-primary-200">
              1
            </div>
            <h3 className="font-semibold text-lg">Consultation</h3>
            <p className="text-gray-600 dark:text-gray-400">We assess your property and discuss your requirements.</p>
            <div className="hidden md:block absolute top-5 right-0 w-full h-0.5 bg-primary-100 dark:bg-primary-900/30 -z-10"></div>
          </div>
          <div className="space-y-3 relative">
            <div className="bg-primary-100 dark:bg-primary-900/30 h-10 w-10 rounded-full flex items-center justify-center font-bold text-primary-800 dark:text-primary-200">
              2
            </div>
            <h3 className="font-semibold text-lg">Design</h3>
            <p className="text-gray-600 dark:text-gray-400">
              We create a custom design that matches your property's style.
            </p>
            <div className="hidden md:block absolute top-5 right-0 w-full h-0.5 bg-primary-100 dark:bg-primary-900/30 -z-10"></div>
          </div>
          <div className="space-y-3 relative">
            <div className="bg-primary-100 dark:bg-primary-900/30 h-10 w-10 rounded-full flex items-center justify-center font-bold text-primary-800 dark:text-primary-200">
              3
            </div>
            <h3 className="font-semibold text-lg">Installation</h3>
            <p className="text-gray-600 dark:text-gray-400">
              Our expert team installs your gate with precision and care.
            </p>
            <div className="hidden md:block absolute top-5 right-0 w-full h-0.5 bg-primary-100 dark:bg-primary-900/30 -z-10"></div>
          </div>
          <div className="space-y-3">
            <div className="bg-primary-100 dark:bg-primary-900/30 h-10 w-10 rounded-full flex items-center justify-center font-bold text-primary-800 dark:text-primary-200">
              4
            </div>
            <h3 className="font-semibold text-lg">Support</h3>
            <p className="text-gray-600 dark:text-gray-400">We provide ongoing maintenance and support services.</p>
          </div>
        </div>
      </motion.div>

      <ServiceCTA />
    </>
  )
}
