'use client'

import { useState } from 'react'

export default function BlogSubscribe() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [message, setMessage] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')

    try {
      const response = await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      })

      const data = await response.json()

      if (response.ok) {
        setStatus('success')
        setMessage('Thanks for subscribing! Check your email to confirm.')
        setEmail('')
      } else {
        setStatus('error')
        setMessage(data.error || 'Something went wrong. Please try again.')
      }
    } catch (error) {
      setStatus('error')
      setMessage('Something went wrong. Please try again.')
    }
  }

  return (
    <div className="p-8 bg-sage-500/[0.06] rounded-sm border border-sage-500/20">
      <h3 className="text-xl font-medium text-dark mb-2">Get New Posts in Your Inbox</h3>
      <p className="font-sans text-[13px] leading-[1.7] text-gray-500 mb-5">
        Subscribe to receive Emily's latest articles on mental health, parenting, and wellness—delivered straight to your inbox.
      </p>

      {status === 'success' ? (
        <div className="p-4 bg-sage-500/10 rounded-sm">
          <p className="font-sans text-[13px] text-sage-500 font-medium">{message}</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="your@email.com"
            required
            disabled={status === 'loading'}
            className="flex-1 px-4 py-3 rounded-sm border border-cream-300 font-sans text-[14px] focus:outline-none focus:border-sage-500 disabled:opacity-50"
          />
          <button
            type="submit"
            disabled={status === 'loading'}
            className="px-6 py-3 bg-sage-500 text-white font-sans text-[13px] font-medium rounded-sm hover:bg-sage-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {status === 'loading' ? 'Subscribing...' : 'Subscribe'}
          </button>
        </form>
      )}

      {status === 'error' && (
        <p className="font-sans text-[12px] text-red-500 mt-2">{message}</p>
      )}

      <p className="font-sans text-[11px] text-gray-400 mt-3">
        No spam, ever. Unsubscribe anytime.
      </p>
    </div>
  )
}
