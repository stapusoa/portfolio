import { useState } from 'react'

export type ContactFields = {
  name: string
  email: string
  subject?: string
  message: string
}

type Status = 'idle' | 'sending' | 'sent' | 'error'

const ENDPOINT = 'https://api.web3forms.com/submit'

/**
 * Submits the contact form to Web3Forms.
 *
 * Extracted because the site had two contact forms: this logic lived only in
 * `ContactForm`, while the footer's form flipped a local `sent` flag and threw
 * the message away. Both now post to the same place.
 */
export function useContactForm() {
  const [status, setStatus] = useState<Status>('idle')
  const [error, setError] = useState<string | null>(null)

  const accessKey = import.meta.env.VITE_WEB3FORMS_KEY

  async function submit(fields: ContactFields): Promise<boolean> {
    if (!accessKey) {
      // Fail loudly in dev rather than silently pretending the message sent.
      setStatus('error')
      setError('The contact form is not configured (missing VITE_WEB3FORMS_KEY).')
      return false
    }

    setStatus('sending')
    setError(null)

    try {
      const res = await fetch(ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          access_key: accessKey,
          from_name: fields.name,
          ...fields,
        }),
      })
      const result = await res.json()

      if (res.ok && result.success) {
        setStatus('sent')
        return true
      }
      setStatus('error')
      setError(result.message || 'Something went wrong.')
      return false
    } catch {
      setStatus('error')
      setError('Could not reach the server. Please try again later.')
      return false
    }
  }

  return { submit, status, error, isSending: status === 'sending' }
}
