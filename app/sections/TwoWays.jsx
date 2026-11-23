export default function TwoWays() {
  return (
    <section id="opportunity" className="bg-purple-sunset/5 section-desktop">
      <div className="container-content">
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Card 1 */}
          <div className="card-modern">
            <div className="w-14 h-14 rounded-full bg-turquoise-tropical/20 flex items-center justify-center mb-6">
              <svg className="w-7 h-7 text-turquoise-deep" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
              </svg>
            </div>
            <h3 className="heading-serif text-2xl md:text-3xl text-navy mb-4">
              PROFESSIONAL BRANDING
            </h3>
            <p className="text-navy/80 text-lg leading-relaxed">
              Discover 100% human-created designs to help individuals, entrepreneurs and businesses stand out with confidence.
            </p>
          </div>

          {/* Card 2 */}
          <div className="card-modern">
            <div className="w-14 h-14 rounded-full bg-gold/20 flex items-center justify-center mb-6">
              <svg className="w-7 h-7 text-navy" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
              </svg>
            </div>
            <h3 className="heading-serif text-2xl md:text-3xl text-navy mb-4">
              THE BUSINESS OPPORTUNITY
            </h3>
            <p className="text-navy/80 text-lg leading-relaxed">
              Explore the optional opportunity to become an independent promoter, introduce others to professional branding services and potentially earn commissions under the company's terms.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
