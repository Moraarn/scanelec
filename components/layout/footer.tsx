import Link from "next/link"
import { Facebook, Shield, Twitter } from "lucide-react"

import { Button } from "@/components/ui/button"

export function Footer() {
  return (
    <footer className="w-full border-t bg-primary-950 text-white py-12">
      <div className="container px-4 md:px-6">
        <div className="grid gap-8 lg:grid-cols-4">
          <div className="space-y-4">
            <div className="flex items-center gap-2 font-bold text-xl">
              <Shield className="h-6 w-6 text-white" />
              <span>Scanelec Technologies</span>
            </div>
            <p className="text-sm text-gray-300">
              Protecting lives and property with advanced technology solutions since [Year].
            </p>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-medium">Services</h3>
            <ul className="grid gap-2 text-sm text-gray-300">
              <li>
                <Link href="/services/burglar-alarm" className="hover:text-white/80">
                  Burglar Alarm Systems
                </Link>
              </li>
              <li>
                <Link href="/services/automatic-gates" className="hover:text-white/80">
                  Automatic Gates
                </Link>
              </li>
              <li>
                <Link href="/services/electric-fence" className="hover:text-white/80">
                  Electric Fence
                </Link>
              </li>
              <li>
                <Link href="/services/emergency-doors" className="hover:text-white/80">
                  Emergency Exit Doors
                </Link>
              </li>
              <li>
                <Link href="/services/mast-tower" className="hover:text-white/80">
                  Mast & Tower Installation
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-medium">Company</h3>
            <ul className="grid gap-2 text-sm text-gray-300">
              <li>
                <Link href="/about" className="hover:text-white/80">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/team" className="hover:text-white/80">
                  Our Team
                </Link>
              </li>
              <li>
                <Link href="/careers" className="hover:text-white/80">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="/testimonials" className="hover:text-white/80">
                  Testimonials
                </Link>
              </li>
              <li>
                <Link href="#contact" className="hover:text-white/80">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-medium">Connect</h3>
            <div className="flex gap-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-white/10 p-2 hover:bg-white/20"
              >
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </a>
              <a
                href="https://x.com"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-white/10 p-2 hover:bg-white/20"
              >
                <Twitter className="h-5 w-5" />
                <span className="sr-only">X (Twitter)</span>
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-white/10 p-2 hover:bg-white/20"
              >
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
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                </svg>
                <span className="sr-only">Instagram</span>
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-white/10 p-2 hover:bg-white/20"
              >
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
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                  <rect width="4" height="12" x="2" y="9" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
                <span className="sr-only">LinkedIn</span>
              </a>
            </div>
            <div className="space-y-2">
              <p className="text-sm text-gray-300">Subscribe to our newsletter</p>
              <form className="flex gap-2">
                <input
                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  placeholder="Enter your email"
                />
                <Button
                  variant="outline"
                  className="bg-primary-600 text-white border-primary-600 hover:bg-primary-700 rounded-full"
                >
                  Subscribe
                </Button>
              </form>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-800 pt-8 text-center text-sm text-gray-300">
          © {new Date().getFullYear()} Scanelec Technologies. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
