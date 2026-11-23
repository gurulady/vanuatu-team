export default function Hero() {
  return (
    <section id="about" className="relative overflow-hidden">
      {/* Tropical Hero Background Image */}
      <div className="relative min-h-[700px] md:min-h-[800px] flex items-center">
        {/* Background image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: 'url(/images/tropical-hero.jpg)' }}
        />
        
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-jungle-green/60" />
        
        {/* Gradient overlay for depth */}
        <div 
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(135deg, rgba(18,61,40,0.8) 0%, rgba(18,61,40,0.4) 50%, rgba(18,61,40,0.7) 100%)'
          }}
        />

        {/* Sun glow accent */}
        <div 
          className="absolute top-10 right-10 md:top-20 md:right-32 w-32 h-32 md:w-48 md:h-48 rounded-full opacity-40"
          style={{
            background: 'radial-gradient(circle, #E4B83F 0%, transparent 70%)',
            filter: 'blur(20px)'
          }}
        />

        {/* Hibiscus flower accents */}
        <div className="absolute top-32 left-10 md:left-20 opacity-60">
          <svg width="50" height="50" viewBox="0 0 60 60" fill="none">
            <circle cx="30" cy="30" r="8" fill="#E4B83F" />
            <ellipse cx="30" cy="12" rx="8" ry="14" fill="#B91F3D" />
            <ellipse cx="30" cy="48" rx="8" ry="14" fill="#B91F3D" />
            <ellipse cx="12" cy="30" rx="14" ry="8" fill="#B91F3D" />
            <ellipse cx="48" cy="30" rx="14" ry="8" fill="#B91F3D" />
          </svg>
        </div>
        
        <div className="absolute bottom-40 right-16 md:right-32 opacity-50">
          <svg width="40" height="40" viewBox="0 0 60 60" fill="none">
            <circle cx="30" cy="30" r="8" fill="#E4B83F" />
            <ellipse cx="30" cy="12" rx="8" ry="14" fill="#B91F3D" />
            <ellipse cx="30" cy="48" rx="8" ry="14" fill="#B91F3D" />
            <ellipse cx="12" cy="30" rx="14" ry="8" fill="#B91F3D" />
            <ellipse cx="48" cy="30" rx="14" ry="8" fill="#B91F3D" />
          </svg>
        </div>

        {/* Fox placeholder - waiting for electric green fox image */}
        <div className="absolute right-8 md:right-20 top-1/2 -translate-y-1/2 opacity-90 hidden md:block">
          <div 
            className="w-40 h-40 md:w-48 md:h-48 rounded-full flex items-center justify-center border-4 border-savage-green/50"
            style={{ background: 'radial-gradient(circle, #123D28 0%, #0D3322 100%)' }}
          >
            <div className="text-center">
              <div className="text-savage-green text-5xl md:text-6xl mb-2">🦊</div>
              <p className="text-savage-green text-xs font-bold">FOX COMING</p>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="container-content relative z-10">
          <div className="max-w-2xl">
            <p className="text-island-gold font-semibold tracking-widest uppercase text-sm mb-4">
              A Global Opportunity Arrives in Vanuatu
            </p>
            <h1 className="heading-serif text-4xl md:text-6xl lg:text-7xl text-white leading-tight mb-6">
              Something Exciting is Happening in Vanuatu!
            </h1>
            <p className="text-lg md:text-xl text-coconut-ivory/90 max-w-xl mb-4 leading-relaxed">
              Discover professional branding, creative possibilities and an opportunity to build something of your own.
            </p>
            <p className="text-lg md:text-xl text-coconut-ivory/90 max-w-xl mb-8 leading-relaxed">
              Brought to you by <span className="text-savage-green font-bold">BrandSavage</span>.
            </p>
            <p className="text-2xl md:text-3xl font-bold text-savage-green mb-10 tracking-wide">
              BE SEEN. BE REMEMBERED. BE NAMBAWAN!
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#opportunity" className="btn-primary text-center">
                DISCOVER THE OPPORTUNITY
              </a>
              <a href="#register" className="btn-secondary text-center">
                REGISTER FOR OUR ONLINE PRESENTATION
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
