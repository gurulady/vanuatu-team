'use client'

import Image from 'next/image'

export default function Hero() {
  return (
    <section id="about">
      {/* Facebook Cover Banner */}
      <div className="w-full">
        <Image
          src="/images/hero-banner.jpg"
          alt="Vanuatu Team Global Opportunity"
          width={1200}
          height={400}
          className="w-full h-auto object-cover"
          priority
        />
      </div>

      {/* Hero Content */}
      <div className="bg-ivory section-desktop">
        <div className="container-content text-center">
          <p className="text-tropical-teal font-semibold tracking-widest uppercase text-sm mb-4">
            Global Opportunity
          </p>
          <h1 className="heading-serif text-4xl md:text-6xl lg:text-7xl text-ocean-navy leading-tight mb-6">
            BE SEEN.<br />
            BE REMEMBERED.<br />
            <span className="text-ruby-red">BE NAMBAWAN!</span>
          </h1>
          <p className="text-xl md:text-2xl text-ocean-navy font-medium mb-4">
            Professional Branding & Design and Relationship Marketing
          </p>
          <p className="text-lg text-ocean-navy/80 max-w-2xl mx-auto mb-10">
            Discover a global opportunity that brings together beautiful, human-created branding and the chance to build connections across Vanuatu, the Pacific and beyond.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a href="#register" className="btn-primary">
              REGISTER FOR OUR ONLINE PRESENTATION
            </a>
            <a href="#opportunity" className="text-tropical-teal font-semibold hover:underline">
              Discover More
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
