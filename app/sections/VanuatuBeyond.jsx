export default function VanuatuBeyond() {
  return (
    <section className="bg-navy section-desktop relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 opacity-5">
        <svg viewBox="0 0 200 200" fill="none">
          <circle cx="100" cy="100" r="80" fill="#2dd4bf" />
        </svg>
      </div>
      
      <div className="container-content text-center relative z-10">
        <h2 className="heading-serif text-3xl md:text-5xl text-white mb-8">
          LOCAL CONNECTIONS. <span className="text-gold">GLOBAL POSSIBILITIES.</span>
        </h2>
        <p className="text-lg md:text-xl text-cream/90 max-w-3xl mx-auto leading-relaxed">
          From Vanuatu to Fiji, New Caledonia, Australia, the Philippines and beyond, we're connecting people who believe in creativity, entrepreneurship and new opportunities.
        </p>
        
        {/* Island indicators */}
        <div className="flex flex-wrap justify-center gap-4 mt-10">
          {['Vanuatu', 'Fiji', 'New Caledonia', 'Australia', 'Philippines'].map((place) => (
            <span 
              key={place}
              className="px-4 py-2 rounded-full bg-purple-sunset/30 text-cream text-sm font-medium"
            >
              {place}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
