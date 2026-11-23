export default function Hero() {
  return (
    <section id="about" className="bg-black-volcanic relative overflow-hidden">
      {/* Subtle background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-purple-sunset blur-3xl" />
        <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-turquoise-tropical blur-3xl" />
      </div>

      <div className="container-content section-desktop relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="order-2 md:order-1">
            <p className="text-gold font-semibold tracking-widest uppercase text-sm mb-4">
              A Global Opportunity Arrives in Vanuatu
            </p>
            <h1 className="heading-serif text-4xl md:text-5xl lg:text-6xl text-white leading-tight mb-6">
              Something Exciting is Happening in Vanuatu!
            </h1>
            <p className="text-lg text-cream/90 max-w-xl mb-6 leading-relaxed">
              Professional branding, creative possibilities and an opportunity to build something of your own.
            </p>
            <p className="text-lg text-cream/90 max-w-xl mb-8 leading-relaxed">
              Brought to you by <span className="text-gold font-bold">BrandSavage</span>.
            </p>
            <p className="text-xl md:text-2xl font-bold text-vanuatu-green mb-10 tracking-wide">
              BE SEEN. BE REMEMBERED. BE NAMBAWAN!
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#register" className="btn-primary text-center">
                REGISTER FOR OUR PRESENTATION
              </a>
              <a href="#opportunity" className="btn-secondary text-center">
                DISCOVER MORE
              </a>
            </div>
          </div>

          {/* Square Image - Natural 1:1 aspect ratio */}
          <div className="order-1 md:order-2 flex justify-center">
            <div 
              className="relative"
              style={{ width: '100%', maxWidth: '500px' }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-purple-sunset/30 to-turquoise-tropical/30 rounded-3xl transform rotate-3" />
              <img
                src="/images/vanuatu-square.jpg"
                alt="Vanuatu Sunset Branding Paradise"
                className="relative rounded-3xl shadow-2xl w-full h-auto object-contain"
                style={{ aspectRatio: '1/1' }}
              />
              <div className="absolute -inset-3 border-2 border-gold/30 rounded-3xl pointer-events-none" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
