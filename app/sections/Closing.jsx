export default function Closing() {
  return (
    <section className="bg-volcanic-black section-desktop relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-savage-green via-island-gold to-lagoon-blue" />
      
      <div className="container-content text-center relative z-10">
        <h2 className="heading-serif text-4xl md:text-6xl text-savage-green mb-6">
          BE NAMBAWAN!
        </h2>
        <p className="text-xl md:text-2xl text-coconut-ivory max-w-2xl mx-auto mb-10">
          Your next chapter could begin with one courageous decision.
        </p>
        <a href="#register" className="btn-primary inline-block">
          REGISTER FOR THE PRESENTATION
        </a>
      </div>
    </section>
  )
}
