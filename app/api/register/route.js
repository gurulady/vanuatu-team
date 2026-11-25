import { NextResponse } from 'next/server'

const GCC_API_KEY = process.env.GCC_API_KEY || ''
const GCC_BASE_URL = 'https://api.globalcontrol.io/api/ai'
const TAG_ID = '6b04198940f3f181304ca168' // VanuatuSavages

const MAX_RETRIES = 3
const RETRY_DELAY_MS = 1000

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms))
}

async function upsertContact(email, firstName, lastName, phone, country) {
  const payload = { email: email.toLowerCase().trim(), firstName: firstName.trim() }
  if (lastName?.trim()) payload.lastName = lastName.trim()
  if (phone?.trim()) payload.phone = phone.trim()
  if (country?.trim()) payload.country = country.trim()

  const res = await fetch(`${GCC_BASE_URL}/contacts`, {
    method: 'POST',
    headers: {
      'X-API-KEY': GCC_API_KEY,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(payload)
  })

  if (!res.ok && res.status !== 409) {
    throw new Error(`GCC contact upsert failed: ${res.status}`)
  }

  const data = await res.json()
  return data.data?.contact?._id || data.data?.contact?.id
}

export async function POST(request) {
  let retryCount = 0

  while (retryCount < MAX_RETRIES) {
    try {
      const body = await request.json()
      const { firstName, lastName, email, country, whatsapp, interest, consent, whatsappConsent } = body

      // Validate required fields
      if (!firstName?.trim() || !lastName?.trim() || !email?.trim() || !country?.trim() || !whatsapp?.trim()) {
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

      const trimmedEmail = email.trim().toLowerCase()

      // Step 1: Create / upsert contact
      const contactId = await upsertContact(trimmedEmail, firstName, lastName, whatsapp, country)
      if (!contactId) {
        throw new Error('Failed to create or update contact')
      }

      // Step 2: Fire the VanuatuSavages tag
      try {
        await fetch(`${GCC_BASE_URL}/tags/fire-tag/${TAG_ID}`, {
          method: 'POST',
          headers: {
            'X-API-KEY': GCC_API_KEY,
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ email: trimmedEmail, firstName, lastName })
        })
      } catch (tagErr) {
        console.error(`Tag fire failed for contact ${contactId}`)
      }

      // Step 3: Restore contact fields after tag workflow wipes them
      try {
        await upsertContact(trimmedEmail, firstName, lastName, whatsapp, country)
      } catch {
        // Best effort restore
      }

      // Secure log: no PII, only metadata
      console.log(`[VANUATU-REGISTER] success | contact:${contactId} | source:vanuatu-team | interest:${interest || 'both'} | consent:${consent} | whatsappConsent:${!!whatsappConsent}`)

      return NextResponse.json({
        success: true,
        message: 'Registration successful',
        contactId
      })

    } catch (error) {
      retryCount++
      console.error(`Vanuatu register attempt ${retryCount} failed: ${error.message}`)

      if (retryCount >= MAX_RETRIES) {
        return NextResponse.json(
          { success: false, error: 'Unable to process registration. Please try again.' },
          { status: 500 }
        )
      }

      await sleep(RETRY_DELAY_MS * retryCount)
    }
  }

  return NextResponse.json(
    { success: false, error: 'Unable to process registration. Please try again.' },
    { status: 500 }
  )
}
