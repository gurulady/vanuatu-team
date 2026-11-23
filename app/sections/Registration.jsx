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
    console.log('Form data (demo only):', formData)
    setSubmitted(true)
  }

  return (
    <section id="register" className="bg-tropical-leaf/10 section-desktop">
      <div className="container-content">
        <div className="max-w-2xl mx-auto">
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-tropical-leaf/10">
            <div className="text-center mb-8">
              <div className="w-16 h-16 rounded-full bg-savage-green/20 flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-jungle-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                </svg>
              </div>
              <h2 className="heading-serif text-3xl md:text-4xl text-jungle-green">
                REGISTER YOUR INTEREST
              </h2>
            </div>

            {submitted ? (
              <div className="text-center py-8">
                <div className="w-20 h-20 rounded-full bg-savage-green/20 flex items-center justify-center mx-auto mb-4">
                  <svg className="w-10 h-10 text-jungle-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="heading-serif text-2xl text-jungle-green mb-2">Thank You!</h3>
                <p className="text-jungle-green/80">
                  Your interest has been recorded. We'll be in touch soon with details about the presentation.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* First Name */}
                <div>
                  <label htmlFor="firstName" className="block text-jungle-green font-semibold mb-2">
                    First Name <span className="text-hibiscus-red">*</span>
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    required
                    value={formData.firstName}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-tropical-leaf/30 rounded-xl focus:outline-none focus:ring-2 focus:ring-lagoon-blue focus:border-transparent bg-coconut-ivory/50"
                    placeholder="Your first name"
                  />
                </div>

                {/* Last Name */}
                <div>
                  <label htmlFor="lastName" className="block text-jungle-green font-semibold mb-2">
                    Last Name
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-tropical-leaf/30 rounded-xl focus:outline-none focus:ring-2 focus:ring-lagoon-blue focus:border-transparent bg-coconut-ivory/50"
                    placeholder="Your last name"
                  />
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-jungle-green font-semibold mb-2">
                    Email <span className="text-hibiscus-red">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-tropical-leaf/30 rounded-xl focus:outline-none focus:ring-2 focus:ring-lagoon-blue focus:border-transparent bg-coconut-ivory/50"
                    placeholder="your@email.com"
                  />
                </div>

                {/* Country */}
                <div>
                  <label htmlFor="country" className="block text-jungle-green font-semibold mb-2">
                    Country <span className="text-hibiscus-red">*</span>
                  </label>
                  <input
                    type="text"
                    id="country"
                    name="country"
                    required
                    value={formData.country}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-tropical-leaf/30 rounded-xl focus:outline-none focus:ring-2 focus:ring-lagoon-blue focus:border-transparent bg-coconut-ivory/50"
                    placeholder="Your country"
                  />
                </div>

                {/* WhatsApp */}
                <div>
                  <label htmlFor="whatsapp" className="block text-jungle-green font-semibold mb-2">
                    WhatsApp
                  </label>
                  <input
                    type="tel"
                    id="whatsapp"
                    name="whatsapp"
                    value={formData.whatsapp}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-tropical-leaf/30 rounded-xl focus:outline-none focus:ring-2 focus:ring-lagoon-blue focus:border-transparent bg-coconut-ivory/50"
                    placeholder="+678 ..."
                  />
                </div>

                {/* Interest */}
                <div>
                  <label className="block text-jungle-green font-semibold mb-3">
                    I'm interested in:
                  </label>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <label className="flex items-center gap-2 cursor-pointer p-3 rounded-xl border border-tropical-leaf/20 hover:bg-tropical-leaf/5 transition-colors">
                      <input
                        type="radio"
                        name="interest"
                        value="branding"
                        checked={formData.interest === 'branding'}
                        onChange={handleChange}
                        className="w-5 h-5 text-lagoon-blue"
                      />
                      <span className="text-jungle-green">Branding Services</span>
                    </label>
                    <label className="flex items-center gap-2 cursor-pointer p-3 rounded-xl border border-tropical-leaf/20 hover:bg-tropical-leaf/5 transition-colors">
                      <input
                        type="radio"
                        name="interest"
                        value="business"
                        checked={formData.interest === 'business'}
                        onChange={handleChange}
                        className="w-5 h-5 text-lagoon-blue"
                      />
                      <span className="text-jungle-green">Business Opportunity</span>
                    </label>
                    <label className="flex items-center gap-2 cursor-pointer p-3 rounded-xl border border-tropical-leaf/20 hover:bg-tropical-leaf/5 transition-colors">
                      <input
                        type="radio"
                        name="interest"
                        value="both"
                        checked={formData.interest === 'both'}
                        onChange={handleChange}
                        className="w-5 h-5 text-lagoon-blue"
                      />
                      <span className="text-jungle-green">Both</span>
                    </label>
                  </div>
                </div>

                {/* Consent */}
                <div className="pt-4 border-t border-tropical-leaf/20">
                  <label className="flex items-start gap-3 cursor-pointer">
                    <input
                      type="checkbox"
                      name="consent"
                      required
                      checked={formData.consent}
                      onChange={handleChange}
                      className="w-5 h-5 mt-0.5 text-lagoon-blue rounded"
                    />
                    <span className="text-sm text-jungle-green/80">
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

                <p className="text-xs text-jungle-green/60 text-center mt-4">
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
