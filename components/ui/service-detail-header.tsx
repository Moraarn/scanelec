"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { images } from "@/lib/images"

interface ServiceDetailHeaderProps {
  title: string
  description: string
  icon: string
  imageSrc: string
}

export function ServiceDetailHeader({ title, description, icon, imageSrc }: ServiceDetailHeaderProps) {
  return (
    <div className="grid gap-8 lg:grid-cols-2 lg:gap-12 items-center mb-16">
      <motion.div
        className="space-y-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="inline-block rounded-lg bg-primary-100 dark:bg-primary-900/30 px-4 py-2 text-primary-800 dark:text-primary-100">
          <div className="flex items-center gap-3">
            <div className="text-4xl">{icon}</div>
            <span className="font-medium">Security Solutions</span>
          </div>
        </div>
        <h1 className="text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl bg-clip-text text-transparent bg-gradient-to-r from-primary-950 to-primary-700 dark:from-primary-100 dark:to-primary-400">
          {title}
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-xl leading-relaxed">{description}</p>
      </motion.div>
      <motion.div
        className="mx-auto w-full max-w-[500px] lg:max-w-none"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-primary-900/10 dark:shadow-primary-500/10">
          <div className="absolute inset-0 bg-gradient-to-tr from-primary-900/20 to-transparent z-10"></div>
          <Image
            src={imageSrc || images.services.automaticGates}
            alt={title}
            width={1280}
            height={720}
            className="w-full h-full object-cover aspect-video"
          />
        </div>
      </motion.div>
    </div>
  )
}
