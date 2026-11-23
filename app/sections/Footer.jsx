export default function Footer() {
  return (
    <footer className="bg-ivory py-10 px-4 sm:px-6 lg:px-8 border-t border-gray-200">
      <div className="container-content">
        <div className="text-center">
          <p className="text-ocean-navy font-semibold mb-4">
            Vanuatu Team — Independent BrandSavage Promoters
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 text-sm text-ocean-navy/70 mb-6">
            <a href="#" className="hover:text-tropical-teal transition-colors">Privacy Policy</a>
            <span className="text-gray-300">|</span>
            <a href="#" className="hover:text-tropical-teal transition-colors">Terms of Service</a>
          </div>

          <div className="max-w-3xl mx-auto text-xs text-ocean-navy/60 leading-relaxed">
            <p className="mb-2">
              <strong>Earnings Disclaimer:</strong> This is an independent promoter opportunity. Earnings are not guaranteed and depend on individual effort, skill, and market conditions. Past results do not guarantee future performance.
            </p>
            <p className="mb-2">
              <strong>Independence Notice:</strong> Vanuatu Team members are independent promoters and not employees of BrandSavage or any affiliated company. All business activities are conducted at your own risk and discretion.
            </p>
            <p>
              © {new Date().getFullYear()} Vanuatu Team. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
