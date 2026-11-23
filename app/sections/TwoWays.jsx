export default function TwoWays() {
  return (
    <section id="opportunity" className="bg-champagne section-desktop">
      <div className="container-content">
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Card 1 */}
          <div className="bg-white rounded-2xl p-8 md:p-10 shadow-md">
            <h3 className="heading-serif text-2xl md:text-3xl text-ocean-navy mb-4">
              PROFESSIONAL BRANDING
            </h3>
            <p className="text-ocean-navy/80 text-lg leading-relaxed">
              Discover 100% human-created designs to help individuals, entrepreneurs and businesses stand out with confidence.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white rounded-2xl p-8 md:p-10 shadow-md">
            <h3 className="heading-serif text-2xl md:text-3xl text-ocean-navy mb-4">
              THE BUSINESS OPPORTUNITY
            </h3>
            <p className="text-ocean-navy/80 text-lg leading-relaxed">
              Explore the optional opportunity to become an independent promoter, introduce others to professional branding services and potentially earn commissions under the company's terms.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
