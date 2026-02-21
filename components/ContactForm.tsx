'use client'

import { useState } from 'react'

export default function ContactForm() {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' })
  const [formSent, setFormSent] = useState(false)

  const handleSubmit = async () => {
    // TODO: Wire to email service (Formspree, Resend, etc.)
    setFormSent(true)
    setTimeout(() => setFormSent(false), 4000)
  }

  if (formSent) {
    return (
      <div className="h-full flex items-center justify-center flex-col gap-4 animate-fade-up">
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#6b8f71" strokeWidth="1.5">
          <path d="M12 2C9 2 7 5 7 8c0 4 5 8 5 8s5-4 5-8c0-3-2-6-5-6z" />
          <circle cx="12" cy="8" r="2" />
        </svg>
        <h3 className="text-2xl font-normal text-sage-500">Message Sent</h3>
        <p className="font-sans text-sm text-gray-400 font-light text-center">
          Thank you for reaching out. I&apos;ll be in touch within 24 hours.
        </p>
      </div>
    )
  }

  return (
    <div className="flex flex-col gap-7">
      <div className="font-serif text-2xl font-normal text-dark mb-2">Send a Message</div>

      <div>
        <label className="font-sans text-[10px] tracking-[2px] uppercase text-gray-400 mb-2 block">Name</label>
        <input
          className="input-field"
          placeholder="Your full name"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        />
      </div>

      <div>
        <label className="font-sans text-[10px] tracking-[2px] uppercase text-gray-400 mb-2 block">Email</label>
        <input
          className="input-field"
          type="email"
          placeholder="your@email.com"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        />
      </div>

      <div>
        <label className="font-sans text-[10px] tracking-[2px] uppercase text-gray-400 mb-2 block">Phone</label>
        <input
          className="input-field"
          placeholder="(208) 555-0000"
          value={formData.phone}
          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
        />
      </div>

      <div>
        <label className="font-sans text-[10px] tracking-[2px] uppercase text-gray-400 mb-2 block">
          How can I help?
        </label>
        <textarea
          className="input-field resize-none font-serif"
          placeholder="Tell me a little about what you're going through..."
          rows={4}
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
        />
      </div>

      <button onClick={handleSubmit} className="cta-btn self-start">
        Send Message
      </button>

      <div className="font-sans text-[11px] text-gray-300 font-light">
        Your information is kept strictly confidential.
      </div>
    </div>
  )
}
