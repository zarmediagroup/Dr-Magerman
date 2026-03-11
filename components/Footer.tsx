import Link from "next/link";
import { MapPin, Phone, Mail, Clock, Facebook, Instagram, Linkedin } from "lucide-react";

const quickLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Dr Magerman" },
  { href: "/services", label: "Our Services" },
  { href: "/faq", label: "FAQ" },
  { href: "/contact", label: "Contact Us" },
  { href: "/appointments", label: "Book Appointment" },
];

const services = [
  "General Consultations",
  "Chronic Disease Management",
  "Child & Infant Healthcare",
  "Women's Health",
  "Preventive Care & Vaccinations",
  "Mental Health Support",
  "Minor Procedures",
  "Occupational Health",
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-navy text-white" role="contentinfo">
      {/* Main footer grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Column 1: Practice Info */}
          <div>
            <div className="flex items-center gap-2 mb-5">
              <div className="w-9 h-9 rounded-full bg-gold flex items-center justify-center flex-shrink-0">
                <span className="text-white font-heading font-bold text-sm">M</span>
              </div>
              <div>
                <span className="font-heading font-bold text-base tracking-wide leading-tight block text-white">
                  DR. MAGERMAN
                </span>
                <span className="text-[10px] text-gold-light tracking-widest uppercase leading-tight block font-body">
                  General Practice
                </span>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-5 font-body">
              Providing trusted, compassionate primary healthcare to families
              across Athlone and Cape Town's Southern Suburbs.
            </p>
            <p className="text-gold text-xs font-body">
              HPCSA Reg. No: [Registration Number]
            </p>
            <div className="flex items-center gap-3 mt-5">
              <a
                href="https://facebook.com"
                aria-label="Dr Magerman on Facebook"
                className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-gold transition-colors duration-200"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Facebook size={15} />
              </a>
              <a
                href="https://instagram.com"
                aria-label="Dr Magerman on Instagram"
                className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-gold transition-colors duration-200"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Instagram size={15} />
              </a>
              <a
                href="https://linkedin.com"
                aria-label="Dr Magerman on LinkedIn"
                className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-gold transition-colors duration-200"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin size={15} />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="font-heading text-base font-semibold mb-5 text-white gold-underline">
              Quick Links
            </h3>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-400 text-sm hover:text-gold transition-colors duration-200 font-body flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-gold opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Services */}
          <div>
            <h3 className="font-heading text-base font-semibold mb-5 text-white gold-underline">
              Our Services
            </h3>
            <ul className="space-y-2.5">
              {services.map((service) => (
                <li key={service}>
                  <Link
                    href="/services"
                    className="text-gray-400 text-sm hover:text-gold transition-colors duration-200 font-body flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-gold opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0" />
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Hours & Contact */}
          <div>
            <h3 className="font-heading text-base font-semibold mb-5 text-white gold-underline">
              Contact & Hours
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={16} className="text-gold mt-0.5 flex-shrink-0" />
                <span className="text-gray-400 text-sm font-body leading-relaxed">
                  [Practice Address]<br />
                  Athlone, Cape Town, 7764
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={16} className="text-gold flex-shrink-0" />
                <a
                  href="tel:+27XXXXXXXXX"
                  className="text-gray-400 text-sm hover:text-gold transition-colors font-body"
                >
                  +27 XX XXX XXXX
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={16} className="text-gold flex-shrink-0" />
                <a
                  href="mailto:info@drmagerman.co.za"
                  className="text-gray-400 text-sm hover:text-gold transition-colors font-body"
                >
                  info@drmagerman.co.za
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Clock size={16} className="text-gold mt-0.5 flex-shrink-0" />
                <div className="text-gray-400 text-sm font-body leading-relaxed">
                  <p>Mon–Fri: 08:00 – 17:00</p>
                  <p>Saturday: 08:00 – 12:00</p>
                  <p>Sunday: Closed</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-xs font-body text-center md:text-left">
            © {year} Dr Magerman General Practice. All rights reserved.
          </p>
          <p className="text-gray-600 text-xs font-body text-center max-w-md">
            This website is for informational purposes only and does not
            constitute medical advice. Always consult a qualified healthcare
            professional.
          </p>
        </div>
      </div>
    </footer>
  );
}
