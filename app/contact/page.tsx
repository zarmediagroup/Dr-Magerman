import type { Metadata } from "next";
import Link from "next/link";
import { MapPin, Phone, Mail, Clock, Home, ChevronRight } from "lucide-react";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact Us | Dr Magerman GP Practice — Athlone, Cape Town",
  description:
    "Get in touch with Dr Magerman's practice in Athlone, Cape Town. Contact us to book appointments, ask questions, or submit enquiries. We respond within 24 hours.",
};

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-navy pt-32 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav aria-label="Breadcrumb" className="mb-6">
            <ol className="flex items-center gap-2 text-sm font-body">
              <li>
                <Link
                  href="/"
                  className="text-gray-400 hover:text-gold transition-colors flex items-center gap-1"
                >
                  <Home size={13} aria-hidden="true" />
                  Home
                </Link>
              </li>
              <li>
                <ChevronRight size={13} className="text-gray-600" aria-hidden="true" />
              </li>
              <li className="text-gold font-medium" aria-current="page">
                Contact
              </li>
            </ol>
          </nav>
          <div className="max-w-2xl">
            <span className="inline-block text-gold text-sm font-semibold tracking-widest uppercase font-body mb-3">
              Get In Touch
            </span>
            <h1 className="font-heading text-4xl sm:text-5xl font-bold text-white mb-5">
              Contact Dr Magerman
            </h1>
            <p className="text-gray-300 font-body leading-relaxed text-lg">
              We&apos;re here to help. Reach out with any questions, or book your
              appointment directly.
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
            {/* Contact Info */}
            <div className="lg:col-span-2 space-y-6">
              <div className="bg-white rounded-2xl shadow-card p-7">
                <h2 className="font-heading text-xl font-semibold text-navy mb-6">
                  Practice Information
                </h2>
                <ul className="space-y-5">
                  <li className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-cream flex items-center justify-center flex-shrink-0">
                      <MapPin size={18} className="text-gold" aria-hidden="true" />
                    </div>
                    <div>
                      <p className="font-body font-semibold text-navy text-sm mb-0.5">
                        Address
                      </p>
                      <address className="text-text-muted text-sm font-body leading-relaxed not-italic">
                        [Practice Address]<br />
                        Athlone, Cape Town<br />
                        7764
                      </address>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-cream flex items-center justify-center flex-shrink-0">
                      <Phone size={18} className="text-gold" aria-hidden="true" />
                    </div>
                    <div>
                      <p className="font-body font-semibold text-navy text-sm mb-0.5">
                        Phone
                      </p>
                      <a
                        href="tel:+27XXXXXXXXX"
                        className="text-text-muted text-sm font-body hover:text-gold transition-colors"
                      >
                        +27 XX XXX XXXX
                      </a>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-cream flex items-center justify-center flex-shrink-0">
                      <Mail size={18} className="text-gold" aria-hidden="true" />
                    </div>
                    <div>
                      <p className="font-body font-semibold text-navy text-sm mb-0.5">
                        Email
                      </p>
                      <a
                        href="mailto:info@drmagerman.co.za"
                        className="text-text-muted text-sm font-body hover:text-gold transition-colors"
                      >
                        info@drmagerman.co.za
                      </a>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-cream flex items-center justify-center flex-shrink-0">
                      <Clock size={18} className="text-gold" aria-hidden="true" />
                    </div>
                    <div>
                      <p className="font-body font-semibold text-navy text-sm mb-1">
                        Opening Hours
                      </p>
                      <dl className="text-text-muted text-sm font-body space-y-0.5">
                        <div className="flex justify-between gap-4">
                          <dt>Mon – Fri</dt>
                          <dd className="font-medium text-navy">08:00 – 17:00</dd>
                        </div>
                        <div className="flex justify-between gap-4">
                          <dt>Saturday</dt>
                          <dd className="font-medium text-navy">08:00 – 12:00</dd>
                        </div>
                        <div className="flex justify-between gap-4">
                          <dt>Sunday</dt>
                          <dd className="text-red-500 font-medium">Closed</dd>
                        </div>
                      </dl>
                    </div>
                  </li>
                </ul>
              </div>

              {/* Emergency notice */}
              <div className="bg-red-50 border border-red-200 rounded-2xl p-5">
                <p className="font-body text-red-700 text-sm leading-relaxed">
                  <strong className="font-semibold">Medical Emergency?</strong>{" "}
                  Do not use this form. Call{" "}
                  <a href="tel:10177" className="font-bold underline">
                    10177
                  </a>{" "}
                  (SA Ambulance) or go immediately to your nearest emergency
                  room.
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-3">
              <h2 className="font-heading text-xl font-semibold text-navy mb-6">
                Send Us a Message
              </h2>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Google Maps */}
      <section className="bg-white" aria-labelledby="map-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
          <h2
            id="map-heading"
            className="font-heading text-2xl font-semibold text-navy mb-6"
          >
            Find Us
          </h2>
          <div className="rounded-2xl overflow-hidden shadow-card border border-gray-100">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d26481.26975939041!2d18.497693!3d-33.9706!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1dcc5b27cfba5283%3A0x7e00e29e4ba8dfa3!2sAthlone%2C%20Cape%20Town%2C%207764!5e0!3m2!1sen!2sza!4v1700000000000!5m2!1sen!2sza"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Dr Magerman Practice Location — Athlone, Cape Town"
            />
          </div>
        </div>
      </section>
    </>
  );
}
