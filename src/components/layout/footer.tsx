"use client"

import Link from "next/link"
import { Mail, Phone, MapPin, Globe } from "lucide-react"
import { FaInstagram, FaFacebook, FaLinkedin, FaWhatsapp } from "react-icons/fa"

export function Footer() {
  return (
    <footer className="bg-background border-t border-border pt-16 pb-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center mb-6 group">
              <img src="/logo-dark.png?v=4" alt="Prokodex Logo" className="h-11 w-auto hidden dark:block" />
              <img src="/logo-light.png?v=4" alt="Prokodex Logo" className="h-11 w-auto block dark:hidden" />
            </Link>
            <p className="text-muted-foreground mb-6 max-w-sm">
              Building Modern Digital Products That Scale. We help startups and businesses build websites, ERP systems, mobile apps, and custom software solutions.
            </p>
            <div className="flex gap-4 items-center">
              <a href="https://www.instagram.com/prokodex__" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-secondary hover:scale-110 transition-all" aria-label="Instagram">
                <FaInstagram className="h-6 w-6" />
              </a>
              <a href="https://wa.me/917250591448" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-secondary hover:scale-110 transition-all" aria-label="WhatsApp">
                <FaWhatsapp className="h-6 w-6" />
              </a>
              {/* <a href="https://www.facebook.com/people/Prokodex/61590700003321/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-secondary hover:scale-110 transition-all" aria-label="Facebook">
                <FaFacebook className="h-6 w-6" />
              </a> */}
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-6">Services</h4>
            <ul className="space-y-4">
              <li><Link href="/services/ai-chatbot-development" className="text-sm text-muted-foreground hover:text-secondary transition-colors">AI Chatbots</Link></li>
              <li><Link href="/services/custom-admin-dashboards" className="text-sm text-muted-foreground hover:text-secondary transition-colors">Admin Dashboards</Link></li>
              <li><Link href="/services/custom-crm-development" className="text-sm text-muted-foreground hover:text-secondary transition-colors">Industry CRMs</Link></li>
              <li><Link href="/services/mobile-app-development" className="text-sm text-muted-foreground hover:text-secondary transition-colors">App Development</Link></li>
              <li><Link href="/services/web-development-services" className="text-sm text-muted-foreground hover:text-secondary transition-colors">Web Design & Development</Link></li>
              <li><Link href="/services/custom-software-development" className="text-sm text-muted-foreground hover:text-secondary transition-colors">Custom Software</Link></li>
              <li><Link href="/services/video-editing-services" className="text-sm text-muted-foreground hover:text-secondary transition-colors">Video Editing</Link></li>
              <li><Link href="/services/graphic-design-services" className="text-sm text-muted-foreground hover:text-secondary transition-colors">Graphic Design</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-6">Company</h4>
            <ul className="space-y-4">
              <li><Link href="/about" className="text-sm text-muted-foreground hover:text-secondary transition-colors">About Us</Link></li>
              <li><Link href="/blog" className="text-sm text-muted-foreground hover:text-secondary transition-colors">Blog</Link></li>
              {/* <li><Link href="/demos" className="text-sm text-muted-foreground hover:text-secondary transition-colors">Demos</Link></li> */}
              <li><Link href="/careers" className="text-sm text-muted-foreground hover:text-secondary transition-colors">Careers</Link></li>
              <li><Link href="/internship" className="text-sm text-muted-foreground hover:text-secondary transition-colors">Internships</Link></li>
              <li><Link href="/verify" className="text-sm text-muted-foreground hover:text-secondary transition-colors">Verify Certificate</Link></li>
              <li><Link href="/contact" className="text-sm text-muted-foreground hover:text-secondary transition-colors">Contact Us</Link></li>
              <li><Link href="/faq" className="text-sm text-muted-foreground hover:text-secondary transition-colors">FAQ</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-center gap-3 text-sm text-muted-foreground">
                <Mail className="h-5 w-5 text-secondary flex-shrink-0" />
                <a href="mailto:info@prokodex.in" className="hover:text-secondary transition-colors">info@prokodex.in</a>
              </li>
              <li className="flex items-center gap-3 text-sm text-muted-foreground">
                <Phone className="h-5 w-5 text-secondary flex-shrink-0" />
                <a href="tel:+917250591448" className="hover:text-secondary transition-colors">+91 72505 91448</a>
              </li>
              <li className="flex items-center gap-3 text-sm text-muted-foreground">
                <Globe className="h-5 w-5 text-secondary flex-shrink-0" />
                <a href="https://prokodex.in" target="_blank" rel="noopener noreferrer" className="hover:text-secondary transition-colors">www.prokodex.in</a>
              </li>
              {/* <li className="flex items-start gap-3 text-sm text-muted-foreground pt-2">
                <MapPin className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                <span className="leading-relaxed">Pulhatu New Colony, Chaibasa,<br />Jharkhand - 833201, India</span>
              </li> */}

            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Prokodex. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link href="/privacy" className="text-sm text-muted-foreground hover:text-secondary transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="text-sm text-muted-foreground hover:text-secondary transition-colors">Terms of Service</Link>
            <Link href="/refund-policy" className="text-sm text-muted-foreground hover:text-secondary transition-colors">Refund Policy</Link>
            <Link href="/shipping-policy" className="text-sm text-muted-foreground hover:text-secondary transition-colors">Shipping Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
