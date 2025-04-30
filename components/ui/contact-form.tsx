"use client"

import type React from "react"

import { useState } from "react"

import { Button } from "@/components/ui/button"

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { id, value } = e.target
    setFormData((prev) => ({ ...prev, [id]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real implementation, this would send the form data to a server
    alert("Thank you for your message! We'll get back to you soon.")
    setFormData({ name: "", email: "", service: "", message: "" })
  }

  return (
    <form onSubmit={handleSubmit} className="grid gap-4 rounded-xl border p-6 shadow-sm dark:border-gray-800">
      <div className="grid gap-2">
        <label htmlFor="name" className="text-sm font-medium leading-none">
          Name
        </label>
        <input
          id="name"
          value={formData.name}
          onChange={handleChange}
          className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
          placeholder="Enter your name"
          required
        />
      </div>
      <div className="grid gap-2">
        <label htmlFor="email" className="text-sm font-medium leading-none">
          Email
        </label>
        <input
          id="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
          placeholder="Enter your email"
          required
        />
      </div>
      <div className="grid gap-2">
        <label htmlFor="service" className="text-sm font-medium leading-none">
          Service Interested In
        </label>
        <select
          id="service"
          value={formData.service}
          onChange={handleChange}
          className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
          required
        >
          <option value="">Select a service</option>
          <option value="alarm">Burglar Alarm Systems</option>
          <option value="gates">Automatic Gates</option>
          <option value="fence">Electric Fence</option>
          <option value="doors">Emergency Exit Doors</option>
          <option value="mast">Mast & Tower Installation</option>
          <option value="network">Network Cabling</option>
          <option value="carshades">Car Shades</option>
          <option value="sms">SMS Management Systems</option>
        </select>
      </div>
      <div className="grid gap-2">
        <label htmlFor="message" className="text-sm font-medium leading-none">
          Message
        </label>
        <textarea
          id="message"
          value={formData.message}
          onChange={handleChange}
          className="flex min-h-[120px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
          placeholder="Enter your message"
          required
        />
      </div>
      <Button type="submit" size="sm" className="w-full rounded-full">
        Send Message
      </Button>
    </form>
  )
}
