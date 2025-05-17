"use client"

import { useState } from "react"
import { Menu } from "lucide-react"
import { Button } from "@/components/ui/button"

export function MobileNav() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  const closeMenu = () => {
    setIsOpen(false)
  }

  return (
    <div className="md:hidden">
      <Button variant="outline" size="icon" className="relative z-50" onClick={toggleMenu} aria-label="Toggle Menu">
        <Menu className="h-5 w-5" />
      </Button>
      <div className={`fixed inset-0 top-16 z-40 h-96 flex-col bg-white p-6 ${isOpen ? "flex" : "hidden"}`}>
        <nav className="flex flex-col gap-6">
          <a href="#home" className="text-lg font-medium hover:text-emerald-600 transition-colors" onClick={closeMenu}>
            Home
          </a>
          <a href="#about" className="text-lg font-medium hover:text-emerald-600 transition-colors" onClick={closeMenu}>
            About Us
          </a>
          <a
            href="#services"
            className="text-lg font-medium hover:text-emerald-600 transition-colors"
            onClick={closeMenu}
          >
            Services
          </a>
          <a
            href="#how-it-works"
            className="text-lg font-medium hover:text-emerald-600 transition-colors"
            onClick={closeMenu}
          >
            How It Works
          </a>
          <a
            href="#testimonials"
            className="text-lg font-medium hover:text-emerald-600 transition-colors"
            onClick={closeMenu}
          >
            Testimonials
          </a>
          <a href="#team" className="text-lg font-medium hover:text-emerald-600 transition-colors" onClick={closeMenu}>
            Our Team
          </a>
          <a
            href="#contact"
            className="text-lg font-medium hover:text-emerald-600 transition-colors"
            onClick={closeMenu}
          >
            Contact Us
          </a>
        </nav>
      </div>
    </div>
  )
}
