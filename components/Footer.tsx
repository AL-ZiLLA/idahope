import Image from 'next/image'
import { siteConfig } from '@/lib/config'

const NAV_LINKS = ['Home', 'About', 'Services', 'Blog', 'Contact']
const SERVICES = ['Virtual Therapy', 'Teen Therapy', 'Anxiety Support', 'Eating Disorders', 'Depression']

export default function Footer() {
  return (
    <footer className="px-6 md:px-[60px] pt-[60px] pb-10 bg-dark text-gray-500">
      <div className="max-w-[1200px] mx-auto">
        <div className="flex justify-between items-start flex-wrap gap-10 mb-10">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <Image src="/images/logo-footer.png" alt="IDAhope" width={19} height={32} className="h-8 w-auto" />
              <div className="font-serif text-xl font-medium text-white">
                IDA<span className="text-sage-500">hope</span>
              </div>
            </div>
            <div className="font-sans text-xs text-gray-600 font-light leading-relaxed">
              Therapy & Wellness
              <br />
              {siteConfig.location}
              <br />
              {siteConfig.phone}
            </div>
          </div>

          <div className="flex gap-12">
            <div>
              <div className="font-sans text-[10px] tracking-[2px] uppercase text-gray-600 mb-4">Navigate</div>
              {NAV_LINKS.map((link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  className="block text-gray-500 no-underline font-sans text-[13px] mb-2 font-light hover:text-sage-500 transition-colors"
                >
                  {link}
                </a>
              ))}
            </div>
            <div>
              <div className="font-sans text-[10px] tracking-[2px] uppercase text-gray-600 mb-4">Services</div>
              {SERVICES.map((s) => (
                <div key={s} className="font-sans text-[13px] text-gray-500 mb-2 font-light">
                  {s}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="h-px bg-gray-700 mb-6" />

        <div className="flex justify-between items-center flex-wrap gap-3">
          <div className="font-sans text-[11px] text-gray-600 font-light">
            © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
          </div>
          <div className="font-sans text-[11px] text-gray-600 font-light">
            Part of{' '}
            <a href={siteConfig.links.eagleCollective} className="text-sage-500 no-underline hover:underline">
              Eagle Therapist Collective
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
