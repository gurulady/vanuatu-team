export default function Footer() {
  return (
    <footer className="bg-navy py-10 px-4 sm:px-6 lg:px-8">
      <div className="container-content">
        <div className="text-center">
          <p className="text-gold font-semibold mb-2 text-lg">
            Vanuatu Brandsavage Team
          </p>
          <p className="text-cream/70 text-sm mb-4">
            Independent <span className="text-gold font-bold">BrandSavage</span> Promoters
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 text-sm text-cream/60 mb-6">
            <a href="#" className="hover:text-gold transition-colors">Privacy Policy</a>
            <span className="text-cream/30">|</span>
            <a href="#" className="hover:text-gold transition-colors">Terms of Service</a>
          </div>

          <div className="max-w-3xl mx-auto text-xs text-cream/50 leading-relaxed">
            <p className="mb-2">
              <strong className="text-cream/70">Earnings Disclaimer:</strong> This is an independent promoter opportunity. Earnings are not guaranteed and depend on individual effort, skill, and market conditions. Past results do not guarantee future performance.
            </p>
            <p className="mb-2">
              <strong className="text-cream/70">Independence Notice:</strong> Vanuatu Brandsavage Team members are independent promoters and not employees of <span className="text-gold font-bold">BrandSavage</span> or any affiliated company. All business activities are conducted at your own risk and discretion.
            </p>
            <p className="text-cream/40">
              © {new Date().getFullYear()} Vanuatu Brandsavage Team. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
