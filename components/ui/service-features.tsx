"use client"

import { CheckCircle } from "lucide-react"
import { motion } from "framer-motion"

interface ServiceFeaturesProps {
  features: string[]
}

export function ServiceFeatures({ features }: ServiceFeaturesProps) {
  return (
    <div className="my-16 bg-white dark:bg-gray-900 rounded-2xl shadow-xl p-8 border border-gray-100 dark:border-gray-800">
      <h2 className="text-2xl font-bold mb-8 flex items-center">
        <span className="bg-primary-100 dark:bg-primary-900/50 text-primary-800 dark:text-primary-100 p-2 rounded-lg mr-3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-5 w-5"
          >
            <path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z" />
          </svg>
        </span>
        Key Features & Benefits
      </h2>
      <ul className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {features.map((feature, index) => (
          <motion.li
            key={index}
            className="flex items-start gap-3 bg-gray-50 dark:bg-gray-800/50 p-4 rounded-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
          >
            <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
            <span className="text-gray-700 dark:text-gray-300">{feature}</span>
          </motion.li>
        ))}
      </ul>
    </div>
  )
}
