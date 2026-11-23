'use client'

import { useState } from 'react'

export default function Registration() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    country: '',
    whatsapp: '',
    interest: 'both',
    consent: false,
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Form submission disabled until GCC integration is approved
    console.log('Form data (demo only):', formData)
    setSubmitted(true)
  }

  return (
    <section id="register" className="bg-champagne section-desktop">
      <div className="container-content">
        <div className="max-w-2xl mx-auto">
          <div className="bg-white rounded-2xl p-8 md:p-12 shadow-lg">
            <h2 className="heading-serif text-3xl md:text-4xl text-ocean-navy mb-8 text-center">
              REGISTER YOUR INTEREST
            </h2>

            {submitted ? (
              <div className="text-center py-8">
                <div className="text-5xl mb-4">✓</div>
                <h3 className="heading-serif text-2xl text-ocean-navy mb-2">Thank You!</h3>
                <p className="text-ocean-navy/80">
                  Your interest has been recorded. We'll be in touch soon with details about the presentation.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* First Name */}
                <div>
                  <label htmlFor="firstName" className="block text-ocean-navy font-semibold mb-2">
                    First Name <span className="text-ruby-red">*</span>
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    required
                    value={formData.firstName}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-tropical-teal focus:border-transparent"
                    placeholder="Your first name"
                  />
                </div>

                {/* Last Name */}
                <div>
                  <label htmlFor="lastName" className="block text-ocean-navy font-semibold mb-2">
                    Last Name
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-tropical-teal focus:border-transparent"
                    placeholder="Your last name"
                  />
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-ocean-navy font-semibold mb-2">
                    Email <span className="text-ruby-red">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-tropical-teal focus:border-transparent"
                    placeholder="your@email.com"
                  />
                </div>

                {/* Country */}
                <div>
                  <label htmlFor="country" className="block text-ocean-navy font-semibold mb-2">
                    Country <span className="text-ruby-red">*</span>
                  </label>
                  <input
                    type="text"
                    id="country"
                    name="country"
                    required
                    value={formData.country}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-tropical-teal focus:border-transparent"
                    placeholder="Your country"
                  />
                </div>

                {/* WhatsApp */}
                <div>
                  <label htmlFor="whatsapp" className="block text-ocean-navy font-semibold mb-2">
                    WhatsApp
                  </label>
                  <input
                    type="tel"
                    id="whatsapp"
                    name="whatsapp"
                    value={formData.whatsapp}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-tropical-teal focus:border-transparent"
                    placeholder="+678 ..."
                  />
                </div>

                {/* Interest */}
                <div>
                  <label className="block text-ocean-navy font-semibold mb-3">
                    I'm interested in:
                  </label>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="radio"
                        name="interest"
                        value="branding"
                        checked={formData.interest === 'branding'}
                        onChange={handleChange}
                        className="w-5 h-5 text-ruby-red"
                      />
                      <span className="text-ocean-navy">Branding Services</span>
                    </label>
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="radio"
                        name="interest"
                        value="business"
                        checked={formData.interest === 'business'}
                        onChange={handleChange}
                        className="w-5 h-5 text-ruby-red"
                      />
                      <span className="text-ocean-navy">Business Opportunity</span>
                    </label>
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="radio"
                        name="interest"
                        value="both"
                        checked={formData.interest === 'both'}
                        onChange={handleChange}
                        className="w-5 h-5 text-ruby-red"
                      />
                      <span className="text-ocean-navy">Both</span>
                    </label>
                  </div>
                </div>

                {/* Consent */}
                <div className="pt-4 border-t border-gray-200">
                  <label className="flex items-start gap-3 cursor-pointer">
                    <input
                      type="checkbox"
                      name="consent"
                      required
                      checked={formData.consent}
                      onChange={handleChange}
                      className="w-5 h-5 mt-0.5 text-ruby-red"
                    />
                    <span className="text-sm text-ocean-navy/80">
                      I consent to being contacted about this opportunity. I understand my information will be handled in accordance with the privacy policy.
                    </span>
                  </label>
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  className="w-full btn-primary mt-4"
                >
                  REGISTER FOR THE PRESENTATION
                </button>

                <p className="text-xs text-ocean-navy/60 text-center mt-4">
                  This form is currently in preview mode. Live submissions will be enabled after approval.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
