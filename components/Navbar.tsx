'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { siteConfig } from '@/lib/config'

const NAV_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Blog', href: '#blog' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 px-6 md:px-[60px] py-6 flex justify-between items-center transition-all duration-400 ${
          scrolled
            ? 'bg-cream-50/95 backdrop-blur-xl border-b border-cream-400/50'
            : 'bg-transparent border-b border-transparent'
        }`}
      >
        <a href="#home" className="flex items-center gap-3.5">
          <Image
            src="/images/logo.png"
            alt="IDAhope"
            width={59}
            height={100}
            className="h-[100px] w-auto"
            priority
          />
        </a>

        {/* Desktop nav */}
        <div className="hidden md:flex gap-8 items-center">
          {NAV_LINKS.map((link) => (
            <a key={link.label} href={link.href} className="nav-link">
              {link.label}
            </a>
          ))}
          <a
            href={siteConfig.bookingUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="cta-btn !py-2.5 !px-7 !text-[11px]"
          >
            Book a Call
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden bg-transparent border-none cursor-pointer p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <div className="w-6 flex flex-col gap-[5px]">
            <span
              className={`h-[1.5px] bg-dark rounded-sm transition-all duration-300 block ${
                menuOpen ? 'rotate-45 translate-y-[6.5px]' : ''
              }`}
            />
            <span
              className={`h-[1.5px] bg-dark rounded-sm transition-all duration-300 block ${
                menuOpen ? 'opacity-0' : 'opacity-100'
              }`}
            />
            <span
              className={`h-[1.5px] bg-dark rounded-sm transition-all duration-300 block ${
                menuOpen ? '-rotate-45 -translate-y-[6.5px]' : ''
              }`}
            />
          </div>
        </button>
      </nav>

      {/* Mobile menu overlay */}
      {menuOpen && (
        <div className="fixed inset-0 z-40 bg-cream-50/[0.98] backdrop-blur-xl flex flex-col items-center justify-center gap-8 animate-fade-in md:hidden">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="no-underline text-dark font-serif text-3xl font-light tracking-widest"
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </>
  )
}
