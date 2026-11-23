import { NextResponse } from 'next/server'

const GCC_API_KEY = process.env.GCC_API_KEY || ''
const GCC_BASE_URL = 'https://api.globalcontrol.io/api/ai'
const TAG_ID = '6b04198940f3f181304ca168' // VanuatuSavages

export async function POST(request) {
  try {
    const body = await request.json()
    const { firstName, lastName, email, country, whatsapp, interest, consent, whatsappConsent } = body

    // Validate required fields
    if (!firstName || !lastName || !email || !country || !whatsapp) {
      return NextResponse.json(
        { success: false, error: 'Missing required fields' },
        { status: 400 }
      )
    }

    if (!consent) {
      return NextResponse.json(
        { success: false, error: 'Consent required' },
        { status: 400 }
      )
    }

    // 1. Create or update contact in GCC
    const contactPayload = {
      email,
      firstName,
      lastName,
      phone: whatsapp,
      country,
      customFields: {
        interest: interest || 'both',
        whatsappConsent: whatsappConsent ? 'yes' : 'no',
        source: 'vanuatu-team-landing-page'
      }
    }

    const contactRes = await fetch(`${GCC_BASE_URL}/contacts`, {
      method: 'POST',
      headers: {
        'X-API-KEY': GCC_API_KEY,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(contactPayload)
    })

    const contactData = await contactRes.json()

    if (contactData.type === 'error') {
      console.error('GCC Contact Error:', contactData.error)
      // Continue to try firing tag anyway (contact might already exist)
    }

    // 2. Fire the VanuatuSavages tag
    const tagRes = await fetch(`${GCC_BASE_URL}/tags/fire-tag/${TAG_ID}`, {
      method: 'POST',
      headers: {
        'X-API-KEY': GCC_API_KEY,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email, firstName, lastName })
    })

    const tagData = await tagRes.json()

    if (tagData.type === 'error') {
      console.error('GCC Tag Error:', tagData.error)
      return NextResponse.json(
        { success: false, error: 'Failed to apply tag' },
        { status: 500 }
      )
    }

    return NextResponse.json({
      success: true,
      message: 'Registration successful',
      contactId: tagData.data?.contactId || null
    })

  } catch (error) {
    console.error('Registration API Error:', error)
    return NextResponse.json(
      { success: false, error: 'Internal server error' },
      { status: 500 }
    )
  }
}
