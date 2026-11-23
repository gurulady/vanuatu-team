'use client'

import { useState, useRef } from 'react'

const countryCodes = [
  { code: '+678', country: 'Vanuatu' },
  { code: '+61', country: 'Australia' },
  { code: '+679', country: 'Fiji' },
  { code: '+687', country: 'New Caledonia' },
  { code: '+63', country: 'Philippines' },
  { code: '+64', country: 'New Zealand' },
  { code: '+1', country: 'USA/Canada' },
  { code: '+44', country: 'UK' },
  { code: '+27', country: 'South Africa' },
  { code: '+91', country: 'India' },
  { code: '+86', country: 'China' },
  { code: '+81', country: 'Japan' },
  { code: '+82', country: 'South Korea' },
  { code: '+65', country: 'Singapore' },
  { code: '+66', country: 'Thailand' },
  { code: '+62', country: 'Indonesia' },
  { code: '+60', country: 'Malaysia' },
  { code: '+84', country: 'Vietnam' },
  { code: '+852', country: 'Hong Kong' },
  { code: '+886', country: 'Taiwan' },
  { code: '+673', country: 'Brunei' },
  { code: '+856', country: 'Laos' },
  { code: '+95', country: 'Myanmar' },
  { code: '+855', country: 'Cambodia' },
  { code: '+880', country: 'Bangladesh' },
  { code: '+94', country: 'Sri Lanka' },
  { code: '+960', country: 'Maldives' },
  { code: '+977', country: 'Nepal' },
  { code: '+92', country: 'Pakistan' },
  { code: '+968', country: 'Oman' },
  { code: '+971', country: 'UAE' },
  { code: '+974', country: 'Qatar' },
  { code: '+965', country: 'Kuwait' },
  { code: '+973', country: 'Bahrain' },
  { code: '+966', country: 'Saudi Arabia' },
  { code: '+964', country: 'Iraq' },
  { code: '+962', country: 'Jordan' },
  { code: '+961', country: 'Lebanon' },
  { code: '+963', country: 'Syria' },
  { code: '+970', country: 'Palestine' },
  { code: '+972', country: 'Israel' },
  { code: '+90', country: 'Turkey' },
  { code: '+30', country: 'Greece' },
  { code: '+39', country: 'Italy' },
  { code: '+34', country: 'Spain' },
  { code: '+33', country: 'France' },
  { code: '+49', country: 'Germany' },
  { code: '+31', country: 'Netherlands' },
  { code: '+32', country: 'Belgium' },
  { code: '+41', country: 'Switzerland' },
  { code: '+43', country: 'Austria' },
  { code: '+45', country: 'Denmark' },
  { code: '+46', country: 'Sweden' },
  { code: '+47', country: 'Norway' },
  { code: '+358', country: 'Finland' },
  { code: '+48', country: 'Poland' },
  { code: '+420', country: 'Czech Republic' },
  { code: '+421', country: 'Slovakia' },
  { code: '+36', country: 'Hungary' },
  { code: '+40', country: 'Romania' },
  { code: '+359', country: 'Bulgaria' },
  { code: '+38', country: 'Ukraine' },
  { code: '+7', country: 'Russia' },
  { code: '+375', country: 'Belarus' },
  { code: '+370', country: 'Lithuania' },
  { code: '+371', country: 'Latvia' },
  { code: '+372', country: 'Estonia' },
  { code: '+354', country: 'Iceland' },
  { code: '+353', country: 'Ireland' },
  { code: '+44', country: 'UK' },
  { code: '+352', country: 'Luxembourg' },
  { code: '+351', country: 'Portugal' },
  { code: '+386', country: 'Slovenia' },
  { code: '+385', country: 'Croatia' },
  { code: '+387', country: 'Bosnia' },
  { code: '+389', country: 'Macedonia' },
  { code: '+381', country: 'Serbia' },
  { code: '+382', country: 'Montenegro' },
  { code: '+355', country: 'Albania' },
  { code: '+30', country: 'Greece' },
  { code: '+357', country: 'Cyprus' },
  { code: '+356', country: 'Malta' },
  { code: '+20', country: 'Egypt' },
  { code: '+212', country: 'Morocco' },
  { code: '+213', country: 'Algeria' },
  { code: '+216', country: 'Tunisia' },
  { code: '+218', country: 'Libya' },
  { code: '+233', country: 'Ghana' },
  { code: '+234', country: 'Nigeria' },
  { code: '+254', country: 'Kenya' },
  { code: '+255', country: 'Tanzania' },
  { code: '+256', country: 'Uganda' },
  { code: '+250', country: 'Rwanda' },
  { code: '+257', country: 'Burundi' },
  { code: '+258', country: 'Mozambique' },
  { code: '+260', country: 'Zambia' },
  { code: '+263', country: 'Zimbabwe' },
  { code: '+267', country: 'Botswana' },
  { code: '+268', country: 'Eswatini' },
  { code: '+269', country: 'Comoros' },
  { code: '+27', country: 'South Africa' },
  { code: '+291', country: 'Eritrea' },
  { code: '+252', country: 'Somalia' },
  { code: '+253', country: 'Djibouti' },
  { code: '+251', country: 'Ethiopia' },
  { code: '+249', country: 'Sudan' },
  { code: '+211', country: 'South Sudan' },
  { code: '+240', country: 'Equatorial Guinea' },
  { code: '+241', country: 'Gabon' },
  { code: '+242', country: 'Congo' },
  { code: '+243', country: 'DR Congo' },
  { code: '+244', country: 'Angola' },
  { code: '+245', country: 'Guinea-Bissau' },
  { code: '+246', country: 'Diego Garcia' },
  { code: '+247', country: 'Ascension' },
  { code: '+248', country: 'Seychelles' },
  { code: '+290', country: 'St Helena' },
  { code: '+297', country: 'Aruba' },
  { code: '+298', country: 'Faroe Islands' },
  { code: '+299', country: 'Greenland' },
  { code: '+350', country: 'Gibraltar' },
  { code: '+500', country: 'Falkland Islands' },
  { code: '+501', country: 'Belize' },
  { code: '+502', country: 'Guatemala' },
  { code: '+503', country: 'El Salvador' },
  { code: '+504', country: 'Honduras' },
  { code: '+505', country: 'Nicaragua' },
  { code: '+506', country: 'Costa Rica' },
  { code: '+507', country: 'Panama' },
  { code: '+508', country: 'St Pierre' },
  { code: '+509', country: 'Haiti' },
  { code: '+590', country: 'Guadeloupe' },
  { code: '+591', country: 'Bolivia' },
  { code: '+592', country: 'Guyana' },
  { code: '+593', country: 'Ecuador' },
  { code: '+594', country: 'French Guiana' },
  { code: '+595', country: 'Paraguay' },
  { code: '+596', country: 'Martinique' },
  { code: '+597', country: 'Suriname' },
  { code: '+598', country: 'Uruguay' },
  { code: '+599', country: 'Curacao' },
  { code: '+670', country: 'Timor-Leste' },
  { code: '+672', country: 'Norfolk Island' },
  { code: '+673', country: 'Brunei' },
  { code: '+674', country: 'Nauru' },
  { code: '+675', country: 'Papua New Guinea' },
  { code: '+676', country: 'Tonga' },
  { code: '+677', country: 'Solomon Islands' },
  { code: '+678', country: 'Vanuatu' },
  { code: '+680', country: 'Palau' },
  { code: '+681', country: 'Wallis & Futuna' },
  { code: '+682', country: 'Cook Islands' },
  { code: '+683', country: 'Niue' },
  { code: '+684', country: 'American Samoa' },
  { code: '+685', country: 'Samoa' },
  { code: '+686', country: 'Kiribati' },
  { code: '+687', country: 'New Caledonia' },
  { code: '+688', country: 'Tuvalu' },
  { code: '+689', country: 'French Polynesia' },
  { code: '+690', country: 'Tokelau' },
  { code: '+691', country: 'Micronesia' },
  { code: '+692', country: 'Marshall Islands' },
  { code: '+850', country: 'North Korea' },
  { code: '+852', country: 'Hong Kong' },
  { code: '+853', country: 'Macau' },
  { code: '+855', country: 'Cambodia' },
  { code: '+856', country: 'Laos' },
  { code: '+880', country: 'Bangladesh' },
  { code: '+886', country: 'Taiwan' },
  { code: '+960', country: 'Maldives' },
  { code: '+961', country: 'Lebanon' },
  { code: '+962', country: 'Jordan' },
  { code: '+963', country: 'Syria' },
  { code: '+964', country: 'Iraq' },
  { code: '+965', country: 'Kuwait' },
  { code: '+966', country: 'Saudi Arabia' },
  { code: '+967', country: 'Yemen' },
  { code: '+968', country: 'Oman' },
  { code: '+970', country: 'Palestine' },
  { code: '+971', country: 'UAE' },
  { code: '+972', country: 'Israel' },
  { code: '+973', country: 'Bahrain' },
  { code: '+974', country: 'Qatar' },
  { code: '+975', country: 'Bhutan' },
  { code: '+976', country: 'Mongolia' },
  { code: '+977', country: 'Nepal' },
  { code: '+992', country: 'Tajikistan' },
  { code: '+993', country: 'Turkmenistan' },
  { code: '+994', country: 'Azerbaijan' },
  { code: '+995', country: 'Georgia' },
  { code: '+996', country: 'Kyrgyzstan' },
  { code: '+998', country: 'Uzbekistan' },
]

export default function Registration() {
  const [submitted, setSubmitted] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const [submitError, setSubmitError] = useState('')
  const formRef = useRef(null)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setSubmitError('')
    
    const form = formRef.current
    const formData = new FormData(form)
    
    const firstName = formData.get('firstName')?.trim()
    const lastName = formData.get('lastName')?.trim()
    const email = formData.get('email')?.trim()
    const country = formData.get('country')?.trim()
    const countryCode = formData.get('countryCode')
    const whatsapp = formData.get('whatsapp')?.trim()
    const interest = formData.get('interest')
    const consent = formData.get('consent') === 'on'
    const whatsappConsent = formData.get('whatsappConsent') === 'on'
    
    // Validation
    if (!firstName) {
      setSubmitError('First name is required')
      return
    }
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setSubmitError('Please enter a valid email address')
      return
    }
    if (!country) {
      setSubmitError('Country is required')
      return
    }
    if (!whatsapp || whatsapp.replace(/\D/g, '').length < 5) {
      setSubmitError('Please enter a valid WhatsApp number (minimum 5 digits)')
      return
    }
    if (!consent) {
      setSubmitError('You must consent to being contacted')
      return
    }
    
    setSubmitting(true)
    
    try {
      const response = await fetch('/api/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          firstName,
          lastName,
          email,
          country,
          whatsapp: `${countryCode}${whatsapp.replace(/\D/g, '')}`,
          interest,
          consent,
          whatsappConsent,
        }),
      })
      
      const data = await response.json()
      
      if (data.success) {
        setSubmitted(true)
      } else {
        setSubmitError(data.error || 'Something went wrong. Please try again.')
      }
    } catch (error) {
      console.error('Submission error:', error)
      setSubmitError('Network error. Please try again.')
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <section id="register" className="bg-purple-sunset/5 section-desktop">
      <div className="container-content">
        <div className="max-w-2xl mx-auto">
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-purple-sunset/10">
            <div className="text-center mb-8">
              <div className="w-16 h-16 rounded-full bg-gold/20 flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-navy" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                </svg>
              </div>
              <h2 className="heading-serif text-3xl md:text-4xl text-navy">
                REGISTER YOUR INTEREST
              </h2>
            </div>

            {submitted ? (
              <div className="text-center py-8">
                <div className="w-20 h-20 rounded-full bg-gold/20 flex items-center justify-center mx-auto mb-4">
                  <svg className="w-10 h-10 text-navy" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="heading-serif text-2xl text-navy mb-2">Thank You!</h3>
                <p className="text-navy/80">
                  Your interest has been recorded. We'll be in touch soon with details about the presentation.
                </p>
              </div>
            ) : (
              <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                {/* First Name */}
                <div>
                  <label htmlFor="firstName" className="block text-navy font-semibold mb-2">
                    First Name <span className="text-red-hibiscus">*</span>
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    required
                    className="w-full px-4 py-3 border border-purple-sunset/20 rounded-xl focus:outline-none focus:ring-2 focus:ring-turquoise-tropical focus:border-transparent bg-cream/50"
                    placeholder="Your first name"
                  />
                </div>

                {/* Last Name */}
                <div>
                  <label htmlFor="lastName" className="block text-navy font-semibold mb-2">
                    Last Name
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    className="w-full px-4 py-3 border border-purple-sunset/20 rounded-xl focus:outline-none focus:ring-2 focus:ring-turquoise-tropical focus:border-transparent bg-cream/50"
                    placeholder="Your last name"
                  />
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-navy font-semibold mb-2">
                    Email <span className="text-red-hibiscus">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 border border-purple-sunset/20 rounded-xl focus:outline-none focus:ring-2 focus:ring-turquoise-tropical focus:border-transparent bg-cream/50"
                    placeholder="your@email.com"
                  />
                </div>

                {/* Country */}
                <div>
                  <label htmlFor="country" className="block text-navy font-semibold mb-2">
                    Country <span className="text-red-hibiscus">*</span>
                  </label>
                  <input
                    type="text"
                    id="country"
                    name="country"
                    required
                    className="w-full px-4 py-3 border border-purple-sunset/20 rounded-xl focus:outline-none focus:ring-2 focus:ring-turquoise-tropical focus:border-transparent bg-cream/50"
                    placeholder="Your country"
                  />
                </div>

                {/* WhatsApp Number */}
                <div>
                  <label htmlFor="whatsapp" className="block text-navy font-semibold mb-2">
                    WhatsApp Number <span className="text-red-hibiscus">*</span>
                  </label>
                  <div className="flex gap-2">
                    <select
                      name="countryCode"
                      defaultValue="+678"
                      className="px-3 py-3 border border-purple-sunset/20 rounded-xl focus:outline-none focus:ring-2 focus:ring-turquoise-tropical focus:border-transparent bg-cream/50 text-sm"
                      style={{ minWidth: '120px' }}
                    >
                      {countryCodes.map(({ code, country }) => (
                        <option key={code} value={code}>
                          {code} {country}
                        </option>
                      ))}
                    </select>
                    <input
                      type="tel"
                      id="whatsapp"
                      name="whatsapp"
                      required
                      className="flex-1 px-4 py-3 border border-purple-sunset/20 rounded-xl focus:outline-none focus:ring-2 focus:ring-turquoise-tropical focus:border-transparent bg-cream/50"
                      placeholder="Phone number"
                    />
                  </div>
                </div>

                {/* Interest */}
                <div>
                  <label className="block text-navy font-semibold mb-3">
                    I'm interested in:
                  </label>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <label className="flex items-center gap-2 cursor-pointer p-3 rounded-xl border border-purple-sunset/20 hover:bg-purple-sunset/5 transition-colors">
                      <input
                        type="radio"
                        name="interest"
                        value="branding"
                        className="w-5 h-5 text-turquoise-deep"
                      />
                      <span className="text-navy">Branding Services</span>
                    </label>
                    <label className="flex items-center gap-2 cursor-pointer p-3 rounded-xl border border-purple-sunset/20 hover:bg-purple-sunset/5 transition-colors">
                      <input
                        type="radio"
                        name="interest"
                        value="business"
                        className="w-5 h-5 text-turquoise-deep"
                      />
                      <span className="text-navy">Business Opportunity</span>
                    </label>
                    <label className="flex items-center gap-2 cursor-pointer p-3 rounded-xl border border-purple-sunset/20 hover:bg-purple-sunset/5 transition-colors">
                      <input
                        type="radio"
                        name="interest"
                        value="both"
                        defaultChecked
                        className="w-5 h-5 text-turquoise-deep"
                      />
                      <span className="text-navy">Both</span>
                    </label>
                  </div>
                </div>

                {/* Main Consent */}
                <div className="pt-4 border-t border-purple-sunset/20">
                  <label className="flex items-start gap-3 cursor-pointer">
                    <input
                      type="checkbox"
                      name="consent"
                      required
                      className="w-5 h-5 mt-0.5 rounded text-turquoise-deep"
                    />
                    <span className="text-sm text-navy/80">
                      I consent to being contacted about this opportunity. I understand my information will be handled in accordance with the privacy policy.
                    </span>
                  </label>
                </div>

                {/* WhatsApp Consent - Optional, Unchecked */}
                <div>
                  <label className="flex items-start gap-3 cursor-pointer">
                    <input
                      type="checkbox"
                      name="whatsappConsent"
                      className="w-5 h-5 mt-0.5 text-turquoise-deep rounded"
                    />
                    <span className="text-sm text-navy/80">
                      I agree to be contacted on WhatsApp about my enquiry and the online presentation.
                    </span>
                  </label>
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full btn-primary mt-4 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {submitting ? 'REGISTERING...' : 'REGISTER FOR THE PRESENTATION'}
                </button>
                
                {submitError && (
                  <p className="text-red-hibiscus text-sm text-center mt-2">{submitError}</p>
                )}
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
