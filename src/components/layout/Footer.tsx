import { Linkedin, Youtube } from 'lucide-react'
import Container from '../ui/Container'
import p2sLogo from '../../assets/presentation/p2s-logo.png'

const productLinks = [
  { label: 'Features', href: '#story' },
  { label: 'How It Works', href: '#how-it-works' },
  { label: 'Use Cases', href: '#use-cases' },
  { label: 'FAQ', href: '#faq' },
]

const resourcesLinks = [
  { label: 'Documentation', href: '#' },
  { label: 'Installation Guide', href: '#' },
  { label: 'Release Notes', href: '#' },
]

const companyLinks = [
  { label: 'About F2G', href: 'http://www.f2gsolutions.com/' },
  { label: 'Contact Us', href: 'http://www.f2gsolutions.com/' },
  { label: 'Support', href: '#' },
]

export default function Footer() {
  return (
    <footer className="bg-[#1A1A1A] dark:bg-black text-gray-400">
      <Container>
        <div className="py-16">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div className="space-y-4">
              <div className="flex items-center gap-2.5">
                <img src={p2sLogo} alt="P2S Logo" className="h-10" />
              </div>
              
              <p className="text-sm leading-relaxed">
                Professional cellular network analysis by F2G-SOLUTIONS.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-white mb-4">Product</h3>
              <ul className="space-y-3">
                {productLinks.map((link) => (
                  <li key={link.label}>
                    <a href={link.href} className="text-sm hover:text-white transition-colors">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-white mb-4">Resources</h3>
              <ul className="space-y-3">
                {resourcesLinks.map((link) => (
                  <li key={link.label}>
                    <a href={link.href} className="text-sm hover:text-white transition-colors">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-white mb-4">Company</h3>
              <ul className="space-y-3">
                {companyLinks.map((link) => (
                  <li key={link.label}>
                    <a href={link.href} className="text-sm hover:text-white transition-colors">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm">
              © 2026 F2G-SOLUTIONS. All rights reserved.
            </p>
            <div className="flex gap-4">
              <a href="#" className="hover:text-white transition-colors" aria-label="LinkedIn">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-white transition-colors" aria-label="Twitter">
                <span className="font-bold text-sm">𝕏</span>
              </a>
              <a href="#" className="hover:text-white transition-colors" aria-label="YouTube">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  )
}
