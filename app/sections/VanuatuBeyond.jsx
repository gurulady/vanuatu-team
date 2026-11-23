export default function VanuatuBeyond() {
  return (
    <section className="bg-jungle-green section-desktop relative overflow-hidden">
      {/* Tropical accent shapes */}
      <div className="absolute top-0 right-0 w-64 h-64 opacity-10">
        <svg viewBox="0 0 200 200" fill="none">
          <circle cx="100" cy="100" r="80" fill="#79FF36" />
        </svg>
      </div>
      
      <div className="container-content text-center relative z-10">
        <h2 className="heading-serif text-3xl md:text-5xl text-white mb-8">
          LOCAL CONNECTIONS. <span className="text-island-gold">GLOBAL POSSIBILITIES.</span>
        </h2>
        <p className="text-lg md:text-xl text-coconut-ivory/90 max-w-3xl mx-auto leading-relaxed">
          From Vanuatu to Fiji, New Caledonia, Australia, the Philippines and beyond, we're connecting people who believe in creativity, entrepreneurship and new opportunities.
        </p>
        
        {/* Island indicators */}
        <div className="flex flex-wrap justify-center gap-4 mt-10">
          {['Vanuatu', 'Fiji', 'New Caledonia', 'Australia', 'Philippines'].map((place) => (
            <span 
              key={place}
              className="px-4 py-2 rounded-full bg-tropical-leaf/30 text-coconut-ivory text-sm font-medium"
            >
              {place}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
