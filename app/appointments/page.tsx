import type { Metadata } from "next";
import Link from "next/link";
import { Phone, MessageCircle, Mail, Clock, AlertTriangle, CheckCircle, Home, ChevronRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Book an Appointment | Dr Magerman GP Practice — Athlone",
  description:
    "Book your appointment with Dr Magerman via phone, WhatsApp, or online form. Same-day appointments available for urgent cases in Athlone, Cape Town.",
};

const bookingMethods = [
  {
    icon: Phone,
    title: "Call Us",
    description:
      "Speak directly to our receptionist to book your preferred time slot. Best for urgent appointments.",
    action: "Call Now",
    href: "tel:+27XXXXXXXXX",
    color: "bg-navy",
    detail: "+27 XX XXX XXXX",
  },
  {
    icon: MessageCircle,
    title: "WhatsApp",
    description:
      "Send us a WhatsApp message and our team will confirm your appointment within a few hours.",
    action: "Chat on WhatsApp",
    href: "https://wa.me/27XXXXXXXXX?text=Hi%2C%20I%27d%20like%20to%20book%20an%20appointment%20with%20Dr%20Magerman",
    color: "bg-[#25D366]",
    detail: "We typically reply within 2 hours",
    external: true,
  },
  {
    icon: Mail,
    title: "Online Form",
    description:
      "Complete our contact form with your details and preferred appointment time. We'll be in touch within 24 hours.",
    action: "Complete Form",
    href: "/contact",
    color: "bg-gold",
    detail: "Response within 24 hours",
  },
];

const openingHours = [
  { day: "Monday", hours: "08:00 – 17:00", open: true },
  { day: "Tuesday", hours: "08:00 – 17:00", open: true },
  { day: "Wednesday", hours: "08:00 – 17:00", open: true },
  { day: "Thursday", hours: "08:00 – 17:00", open: true },
  { day: "Friday", hours: "08:00 – 17:00", open: true },
  { day: "Saturday", hours: "08:00 – 12:00", open: true },
  { day: "Sunday", hours: "Closed", open: false },
];

const tips = [
  "Same-day appointments are available for urgent medical concerns — call early.",
  "Bring your ID, medical aid card, and a list of current medications.",
  "For chronic disease check-ups, please fast for 8–12 hours before your appointment.",
  "If you need to cancel, please do so at least 2 hours in advance.",
];

export default function AppointmentsPage() {
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
                Appointments
              </li>
            </ol>
          </nav>
          <div className="max-w-2xl">
            <span className="inline-block text-gold text-sm font-semibold tracking-widest uppercase font-body mb-3">
              Schedule Your Visit
            </span>
            <h1 className="font-heading text-4xl sm:text-5xl font-bold text-white mb-5">
              Book Your Appointment
            </h1>
            <p className="text-gray-300 font-body leading-relaxed text-lg">
              Three easy ways to book. Choose the method that works best for
              you.
            </p>
          </div>
        </div>
      </section>

      {/* Booking Methods */}
      <section className="py-20 bg-cream" aria-labelledby="booking-methods-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 id="booking-methods-heading" className="sr-only">Booking Methods</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {bookingMethods.map((method) => (
              <article
                key={method.title}
                className="bg-white rounded-2xl shadow-card overflow-hidden group hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1 flex flex-col"
              >
                <div className={`${method.color} px-6 py-8 flex items-center gap-4`}>
                  <div className="w-14 h-14 rounded-2xl bg-white/20 flex items-center justify-center flex-shrink-0">
                    <method.icon size={28} className="text-white" aria-hidden="true" />
                  </div>
                  <h3 className="font-heading text-2xl font-bold text-white">
                    {method.title}
                  </h3>
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <p className="text-text-muted font-body text-sm leading-relaxed mb-4 flex-1">
                    {method.description}
                  </p>
                  <p className="text-xs font-body text-gray-400 mb-5 flex items-center gap-1.5">
                    <CheckCircle size={12} className="text-green-500" aria-hidden="true" />
                    {method.detail}
                  </p>
                  {method.external ? (
                    <a
                      href={method.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`${method.color} text-white text-center py-3 px-5 rounded-xl font-semibold font-body text-sm hover:opacity-90 transition-opacity block`}
                    >
                      {method.action}
                    </a>
                  ) : method.href.startsWith("tel") ? (
                    <a
                      href={method.href}
                      className={`${method.color} text-white text-center py-3 px-5 rounded-xl font-semibold font-body text-sm hover:opacity-90 transition-opacity block`}
                    >
                      {method.action}
                    </a>
                  ) : (
                    <Link
                      href={method.href}
                      className={`${method.color} text-white text-center py-3 px-5 rounded-xl font-semibold font-body text-sm hover:opacity-90 transition-opacity block`}
                    >
                      {method.action}
                    </Link>
                  )}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Opening Hours + Tips */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* Opening Hours */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-cream flex items-center justify-center">
                  <Clock size={20} className="text-gold" aria-hidden="true" />
                </div>
                <h2 className="font-heading text-2xl font-bold text-navy">
                  Opening Hours
                </h2>
              </div>
              <div className="bg-cream rounded-2xl overflow-hidden">
                {openingHours.map((item, i) => (
                  <div
                    key={item.day}
                    className={`flex justify-between items-center px-6 py-4 ${
                      i < openingHours.length - 1 ? "border-b border-white" : ""
                    }`}
                  >
                    <span className="font-body text-sm font-medium text-navy">
                      {item.day}
                    </span>
                    <span
                      className={`font-body text-sm font-semibold ${
                        item.open ? "text-navy" : "text-red-500"
                      }`}
                    >
                      {item.hours}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Appointment Tips */}
            <div>
              <h2 className="font-heading text-2xl font-bold text-navy mb-6">
                Before Your Appointment
              </h2>
              <ul className="space-y-4">
                {tips.map((tip, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-gold/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="font-heading text-gold font-bold text-xs">
                        {i + 1}
                      </span>
                    </div>
                    <p className="text-text-muted font-body text-sm leading-relaxed">
                      {tip}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Disclaimer */}
      <section className="pb-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className="bg-red-50 border-2 border-red-200 rounded-2xl p-6 flex items-start gap-4"
            role="alert"
          >
            <AlertTriangle
              size={24}
              className="text-red-600 flex-shrink-0 mt-0.5"
              aria-hidden="true"
            />
            <div>
              <h2 className="font-heading text-lg font-semibold text-red-700 mb-2">
                For Medical Emergencies
              </h2>
              <p className="text-red-600 font-body text-sm leading-relaxed">
                Please do not use this page to report a medical emergency. If
                you or someone else is experiencing a life-threatening
                emergency, call{" "}
                <a href="tel:10177" className="font-bold underline">
                  10177
                </a>{" "}
                (SA Ambulance Service) immediately, or go directly to your
                nearest hospital emergency room. Do not wait for a GP
                appointment.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
