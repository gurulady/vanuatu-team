export default function Hero() {
  return (
    <section id="about" className="relative overflow-hidden">
      {/* Tropical Background */}
      <div className="relative min-h-[700px] md:min-h-[800px] flex items-center">
        {/* Sky gradient */}
        <div 
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(180deg, #08A6B5 0%, #3E8B50 40%, #123D28 100%)'
          }}
        />
        
        {/* Sun glow */}
        <div 
          className="absolute top-10 right-10 md:top-20 md:right-32 w-32 h-32 md:w-48 md:h-48 rounded-full opacity-60"
          style={{
            background: 'radial-gradient(circle, #E4B83F 0%, transparent 70%)',
            filter: 'blur(20px)'
          }}
        />

        {/* Palm leaf SVG - left */}
        <svg className="absolute bottom-0 left-0 w-64 md:w-96 opacity-80" viewBox="0 0 200 300" fill="none">
          <path d="M0 300 Q50 200 20 100 Q60 150 100 120 Q80 180 120 200 Q100 250 140 280" 
                fill="#0D3322" />
          <path d="M20 100 Q40 50 80 30 Q60 80 100 120" fill="#123D28" />
          <path d="M100 120 Q140 80 180 60 Q150 110 120 200" fill="#0D3322" />
        </svg>

        {/* Palm leaf SVG - right */}
        <svg className="absolute top-20 right-0 w-48 md:w-72 opacity-70" viewBox="0 0 200 250" fill="none">
          <path d="M200 0 Q150 80 180 150 Q140 110 100 140 Q120 90 80 70 Q100 40 60 20" 
                fill="#0D3322" />
        </svg>

        {/* Hibiscus flowers */}
        <div className="absolute top-32 left-10 md:left-20 opacity-80">
          <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
            <circle cx="30" cy="30" r="8" fill="#E4B83F" />
            <ellipse cx="30" cy="12" rx="8" ry="14" fill="#B91F3D" />
            <ellipse cx="30" cy="48" rx="8" ry="14" fill="#B91F3D" />
            <ellipse cx="12" cy="30" rx="14" ry="8" fill="#B91F3D" />
            <ellipse cx="48" cy="30" rx="14" ry="8" fill="#B91F3D" />
            <ellipse cx="18" cy="18" rx="10" ry="6" fill="#B91F3D" transform="rotate(-45 18 18)" />
            <ellipse cx="42" cy="42" rx="10" ry="6" fill="#B91F3D" transform="rotate(-45 42 42)" />
            <ellipse cx="42" cy="18" rx="10" ry="6" fill="#B91F3D" transform="rotate(45 42 18)" />
            <ellipse cx="18" cy="42" rx="10" ry="6" fill="#B91F3D" transform="rotate(45 18 42)" />
          </svg>
        </div>
        
        <div className="absolute bottom-40 right-16 md:right-32 opacity-70">
          <svg width="50" height="50" viewBox="0 0 60 60" fill="none">
            <circle cx="30" cy="30" r="8" fill="#E4B83F" />
            <ellipse cx="30" cy="12" rx="8" ry="14" fill="#B91F3D" />
            <ellipse cx="30" cy="48" rx="8" ry="14" fill="#B91F3D" />
            <ellipse cx="12" cy="30" rx="14" ry="8" fill="#B91F3D" />
            <ellipse cx="48" cy="30" rx="14" ry="8" fill="#B91F3D" />
          </svg>
        </div>

        {/* Fox placeholder area - will be replaced with actual fox image */}
        <div className="absolute right-8 md:right-20 top-1/2 -translate-y-1/2 opacity-90">
          <div 
            className="w-40 h-40 md:w-56 md:h-56 rounded-full flex items-center justify-center border-4 border-savage-green/50"
            style={{ background: 'radial-gradient(circle, #123D28 0%, #0D3322 100%)' }}
          >
            <div className="text-center">
              <div className="text-savage-green text-5xl md:text-7xl mb-2">🦊</div>
              <p className="text-savage-green text-xs md:text-sm font-bold">FOX COMING</p>
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
            <p className="text-lg md:text-xl text-coconut-ivory/90 max-w-xl mb-8 leading-relaxed">
              Discover professional branding, creative possibilities and an opportunity to build something of your own.
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
