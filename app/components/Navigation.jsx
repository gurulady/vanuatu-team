'use client'

import { useState } from 'react'

export default function Navigation() {
  const [mobileOpen, setMobileOpen] = useState(false)

  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Branding', href: '#branding' },
    { label: 'Opportunity', href: '#opportunity' },
    { label: 'Register', href: '#register' },
  ]

  return (
    <header className="bg-coconut-ivory/95 backdrop-blur-sm sticky top-0 z-50 shadow-sm">
      <div className="container-content">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="#" className="heading-serif text-xl md:text-2xl text-jungle-green tracking-wide">
            VANUATU BRANDSAVAGE TEAM
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-jungle-green font-medium hover:text-lagoon-blue transition-colors"
              >
                {link.label}
              </a>
            ))}
            {/* Team Emblem - 70-80px circular stamp */}
            <div 
              className="rounded-full border-2 border-island-gold shadow-lg overflow-hidden flex-shrink-0"
              style={{ width: '75px', height: '75px' }}
            >
              <img
                src="/images/team-emblem.jpg"
                alt="Vanuatu Team"
                width={75}
                height={75}
                className="w-full h-full object-cover"
                style={{ objectFit: 'cover' }}
              />
            </div>
          </nav>

          {/* Mobile: Emblem + Hamburger */}
          <div className="flex items-center gap-3 md:hidden">
            <div 
              className="rounded-full border-2 border-island-gold shadow-md overflow-hidden flex-shrink-0"
              style={{ width: '50px', height: '50px' }}
            >
              <img
                src="/images/team-emblem.jpg"
                alt="Vanuatu Team"
                width={50}
                height={50}
                className="w-full h-full object-cover"
                style={{ objectFit: 'cover' }}
              />
            </div>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="text-jungle-green p-2"
              aria-label="Toggle menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {mobileOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileOpen && (
          <div className="md:hidden pb-4 border-t border-tropical-leaf/20">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="block py-3 text-jungle-green font-medium hover:text-lagoon-blue transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>
        )}
      </div>
    </header>
  )
}
