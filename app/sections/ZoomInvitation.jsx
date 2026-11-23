export default function ZoomInvitation() {
  return (
    <section className="bg-cream section-desktop">
      <div className="container-content text-center">
        <div className="max-w-3xl mx-auto bg-white rounded-3xl p-10 md:p-16 shadow-xl border border-purple-sunset/10">
          <div className="w-16 h-16 rounded-full bg-turquoise-tropical/20 flex items-center justify-center mx-auto mb-6">
            <svg className="w-8 h-8 text-turquoise-deep" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
            </svg>
          </div>
          <h2 className="heading-serif text-3xl md:text-5xl text-navy mb-4">
            YOU'RE INVITED!
          </h2>
          <p className="text-turquoise-deep font-semibold text-xl mb-6">
            Join Our Online Presentation
          </p>
          <p className="text-lg md:text-xl text-navy/80 max-w-2xl mx-auto mb-10 leading-relaxed">
            Come and discover the professional branding services, learn how the independent promoter opportunity works and ask your questions. No pressure — simply an invitation to explore.
          </p>
          <a href="#register" className="btn-primary inline-block">
            RESERVE MY PLACE ON ZOOM
          </a>
        </div>
      </div>
    </section>
  )
}
