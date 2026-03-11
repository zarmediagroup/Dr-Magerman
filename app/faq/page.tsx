"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  Home,
  ChevronRight,
  ArrowRight,
  ChevronDown,
  Calendar,
  CreditCard,
  Stethoscope,
  MapPin,
  HelpCircle,
  Phone,
  MessageCircle,
} from "lucide-react";

const faqCategories = [
  {
    id: "appointments",
    label: "Appointments",
    icon: Calendar,
    color: "bg-blue-50 text-blue-600",
    faqs: [
      {
        question: "How do I book an appointment with Dr Magerman?",
        answer:
          "You can book an appointment by calling our practice directly on +27 XX XXX XXXX, sending a WhatsApp message, completing our online contact form, or visiting the practice in person. We recommend calling ahead to secure your preferred time slot.",
      },
      {
        question: "Do you offer same-day appointments?",
        answer:
          "Yes, we prioritise same-day appointments for urgent medical concerns. Please call as early as possible in the morning to check availability. We always keep slots open for acute cases throughout the day.",
      },
      {
        question: "Can I book online?",
        answer:
          "You can submit an appointment request via our online contact form or WhatsApp. Our receptionist will confirm your booking within a few hours during practice hours. For urgent matters, please call us directly.",
      },
      {
        question: "What should I bring to my first appointment?",
        answer:
          "For your first visit, please bring: your South African ID or passport, your medical aid card and details (if applicable), any previous medical records or recent test results, a list of any current medications you're taking, and any relevant referral letters. If you're a cash patient, please bring payment.",
      },
    ],
  },
  {
    id: "fees",
    label: "Medical Aid & Fees",
    icon: CreditCard,
    color: "bg-green-50 text-green-600",
    faqs: [
      {
        question: "Which medical aids does Dr Magerman accept?",
        answer:
          "We accept most major medical aids including Discovery Health, Bonitas, Momentum Health, Medihelp, Fedhealth, Bestmed, and many others. Please contact us to confirm whether your specific plan is accepted. We also welcome cash-paying patients.",
      },
      {
        question: "What are your consultation fees?",
        answer:
          "Our consultation fees are competitive and aligned with the SAMA (South African Medical Association) tariff guidelines. Exact fees vary depending on the type and length of consultation. Please contact our practice for current fee information. Medical aid patients pay according to their scheme's rate.",
      },
      {
        question: "Do you offer private consultations?",
        answer:
          "Yes, we offer private (cash) consultations for patients without medical aid or those who prefer to pay directly. We believe quality healthcare should be accessible, and we strive to keep our private fees reasonable and transparent.",
      },
    ],
  },
  {
    id: "services",
    label: "Services",
    icon: Stethoscope,
    color: "bg-purple-50 text-purple-600",
    faqs: [
      {
        question: "Does Dr Magerman treat children?",
        answer:
          "Absolutely. Dr Magerman provides comprehensive paediatric primary care for babies, toddlers, and children of all ages. This includes the Road-to-Health Booklet assessments, childhood immunisations, growth monitoring, and management of common childhood illnesses.",
      },
      {
        question: "Do you manage chronic conditions like diabetes or hypertension?",
        answer:
          "Yes, chronic disease management is a core part of the practice. Dr Magerman provides comprehensive ongoing care for diabetes (Type 1 and Type 2), hypertension, asthma, COPD, high cholesterol, and thyroid conditions. Personalised care plans, regular monitoring, and lifestyle counselling are all included.",
      },
      {
        question: "Can I get a sick note from Dr Magerman?",
        answer:
          "Yes, sick notes are issued following a consultation where your condition is properly assessed. We do not issue sick notes without an examination, as this is both a medical and legal requirement. Please book a consultation if you require a sick note.",
      },
      {
        question: "Do you offer vaccinations?",
        answer:
          "Yes, we offer a full range of vaccinations including childhood immunisations (EPI schedule), annual influenza (flu) vaccinations, Hepatitis A and B, Tetanus/Diphtheria, Meningococcal, and travel vaccinations. Please call ahead to ensure the required vaccines are in stock.",
      },
    ],
  },
  {
    id: "practice",
    label: "Practice Information",
    icon: MapPin,
    color: "bg-orange-50 text-orange-600",
    faqs: [
      {
        question: "Where is the practice located?",
        answer:
          "Dr Magerman's practice is located at [Practice Address], Athlone, Cape Town, 7764. We are conveniently situated in the heart of Athlone, easily accessible from Mitchells Plain, Wynberg, Claremont, and other Southern Suburbs.",
      },
      {
        question: "What are your opening hours?",
        answer:
          "We are open Monday to Friday from 08:00 to 17:00, and Saturday from 08:00 to 12:00. We are closed on Sundays and public holidays. For after-hours emergencies, please call 10177 (ambulance) or visit your nearest emergency room.",
      },
      {
        question: "Is there parking available?",
        answer:
          "Yes, there is parking available on the premises and in the surrounding area. If you have any specific accessibility requirements, please let us know when booking and we will do our best to accommodate you.",
      },
      {
        question: "What happens in a medical emergency?",
        answer:
          "For life-threatening emergencies, please call 10177 (SA Ambulance) immediately or proceed to your nearest emergency room. Do not wait for a GP appointment in an emergency. During practice hours, call us if you are unsure whether your situation requires emergency care and we will advise you accordingly.",
      },
    ],
  },
];

function FAQItem({ question, answer, index }: { question: string; answer: string; index: number }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className={`border border-gray-100 rounded-xl overflow-hidden bg-white transition-all duration-200 ${isOpen ? "border-gold/30 shadow-card" : "hover:border-gray-200"}`}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-start justify-between gap-4 px-5 py-4 text-left group"
        aria-expanded={isOpen}
      >
        <div className="flex items-start gap-3 min-w-0">
          <span className="flex-shrink-0 w-6 h-6 rounded-full bg-cream text-navy text-xs font-bold flex items-center justify-center mt-0.5">
            {index + 1}
          </span>
          <span className="font-semibold text-navy text-sm leading-snug group-hover:text-gold transition-colors">
            {question}
          </span>
        </div>
        <ChevronDown
          size={17}
          className={`flex-shrink-0 text-gold transition-transform duration-300 mt-0.5 ${isOpen ? "rotate-180" : ""}`}
          aria-hidden="true"
        />
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <p className="px-5 pb-5 pt-1 text-text-muted text-sm leading-relaxed border-t border-gray-50 ml-0">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQPage() {
  const [activeCategory, setActiveCategory] = useState("appointments");

  const activeCat = faqCategories.find((c) => c.id === activeCategory)!;
  const totalFAQs = faqCategories.reduce((acc, c) => acc + c.faqs.length, 0);

  return (
    <>
      {/* Hero */}
      <section className="relative bg-navy pt-32 pb-20 overflow-hidden">
        <div className="absolute top-0 right-0 w-72 h-72 rounded-full bg-gold/5 -translate-y-1/2 translate-x-1/3 pointer-events-none" aria-hidden="true" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav aria-label="Breadcrumb" className="mb-8">
            <ol className="flex items-center gap-2 text-sm">
              <li>
                <Link href="/" className="text-gray-400 hover:text-gold transition-colors flex items-center gap-1.5">
                  <Home size={13} aria-hidden="true" />
                  Home
                </Link>
              </li>
              <li><ChevronRight size={13} className="text-gray-600" aria-hidden="true" /></li>
              <li className="text-gold font-medium" aria-current="page">FAQ</li>
            </ol>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-end">
            <div>
              <span className="inline-block text-gold text-xs font-semibold tracking-widest uppercase mb-4 bg-gold/10 px-3 py-1.5 rounded-full">
                Questions & Answers
              </span>
              <h1 className="text-4xl sm:text-5xl font-bold text-white mb-5 leading-tight">
                Frequently Asked Questions
              </h1>
              <p className="text-gray-300 leading-relaxed text-lg">
                Everything you need to know about our practice, services,
                appointments, and fees.
              </p>
            </div>
            {/* Stats row */}
            <div className="grid grid-cols-2 gap-3 lg:max-w-xs lg:justify-self-end lg:w-full">
              <div className="bg-white/8 border border-white/10 rounded-xl px-5 py-5 text-center">
                <p className="text-gold font-bold text-2xl leading-none">{totalFAQs}</p>
                <p className="text-gray-400 text-xs mt-1.5">Questions Answered</p>
              </div>
              <div className="bg-white/8 border border-white/10 rounded-xl px-5 py-5 text-center">
                <p className="text-gold font-bold text-2xl leading-none">{faqCategories.length}</p>
                <p className="text-gray-400 text-xs mt-1.5">Categories</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Category tabs (mobile) */}
      <div className="lg:hidden bg-white border-b border-gray-100 sticky top-20 z-40 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 overflow-x-auto">
          <div className="flex gap-1 py-3 min-w-max">
            {faqCategories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-semibold transition-all whitespace-nowrap ${
                  activeCategory === cat.id
                    ? "bg-navy text-white shadow-sm"
                    : "text-gray-500 hover:bg-cream hover:text-navy"
                }`}
              >
                <cat.icon size={13} aria-hidden="true" />
                {cat.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Main content: sidebar + accordions */}
      <section className="py-16 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 items-start">

            {/* Sidebar — desktop only */}
            <aside className="hidden lg:block lg:col-span-1">
              <div className="sticky top-28 space-y-2">
                <p className="text-xs font-semibold tracking-widest uppercase text-text-muted mb-4 px-2">
                  Browse by Category
                </p>
                {faqCategories.map((cat) => {
                  const isActive = activeCategory === cat.id;
                  return (
                    <button
                      key={cat.id}
                      onClick={() => setActiveCategory(cat.id)}
                      className={`w-full flex items-center gap-3 px-4 py-3.5 rounded-xl text-left transition-all duration-200 group ${
                        isActive
                          ? "bg-navy text-white shadow-md"
                          : "bg-white text-navy hover:bg-white hover:shadow-card border border-transparent hover:border-gray-100"
                      }`}
                    >
                      <div className={`w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 transition-colors ${isActive ? "bg-white/20" : cat.color}`}>
                        <cat.icon size={15} aria-hidden="true" />
                      </div>
                      <div className="min-w-0">
                        <p className={`text-sm font-semibold leading-none ${isActive ? "text-white" : "text-navy"}`}>
                          {cat.label}
                        </p>
                        <p className={`text-xs mt-1 ${isActive ? "text-white/60" : "text-text-muted"}`}>
                          {cat.faqs.length} questions
                        </p>
                      </div>
                      {isActive && (
                        <ChevronRight size={14} className="text-white/60 ml-auto flex-shrink-0" aria-hidden="true" />
                      )}
                    </button>
                  );
                })}

                {/* Contact card */}
                <div className="mt-6 bg-white rounded-xl p-5 border border-gray-100 shadow-card">
                  <div className="flex items-center gap-2 mb-3">
                    <HelpCircle size={16} className="text-gold" aria-hidden="true" />
                    <p className="font-semibold text-navy text-sm">Still need help?</p>
                  </div>
                  <p className="text-text-muted text-xs leading-relaxed mb-4">
                    Can&apos;t find your answer? Our team is ready to help.
                  </p>
                  <div className="space-y-2">
                    <a
                      href="tel:+27XXXXXXXXX"
                      className="flex items-center gap-2 text-xs font-medium text-navy hover:text-gold transition-colors"
                    >
                      <Phone size={13} aria-hidden="true" />
                      +27 XX XXX XXXX
                    </a>
                    <a
                      href="https://wa.me/27XXXXXXXXX"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-xs font-medium text-navy hover:text-gold transition-colors"
                    >
                      <MessageCircle size={13} aria-hidden="true" />
                      WhatsApp Us
                    </a>
                  </div>
                </div>
              </div>
            </aside>

            {/* FAQ Accordion Panel */}
            <div className="lg:col-span-3">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeCategory}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                >
                  {/* Category header */}
                  <div className="flex items-center gap-4 mb-6 bg-white rounded-2xl p-5 shadow-card border border-transparent">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 ${activeCat.color}`}>
                      <activeCat.icon size={22} aria-hidden="true" />
                    </div>
                    <div>
                      <h2 className="font-bold text-xl text-navy">{activeCat.label}</h2>
                      <p className="text-text-muted text-sm">
                        {activeCat.faqs.length} frequently asked questions
                      </p>
                    </div>
                  </div>

                  {/* FAQ items */}
                  <div className="space-y-2">
                    {activeCat.faqs.map((faq, i) => (
                      <FAQItem
                        key={faq.question}
                        question={faq.question}
                        answer={faq.answer}
                        index={i}
                      />
                    ))}
                  </div>

                  {/* Browse other categories */}
                  <div className="mt-8">
                    <p className="text-xs font-semibold tracking-widest uppercase text-text-muted mb-3">
                      Browse Other Categories
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {faqCategories
                        .filter((c) => c.id !== activeCategory)
                        .map((cat) => (
                          <button
                            key={cat.id}
                            onClick={() => setActiveCategory(cat.id)}
                            className="flex items-center gap-2 px-4 py-2 bg-white rounded-xl text-sm font-medium text-navy hover:bg-navy hover:text-white transition-all border border-gray-100 hover:border-navy shadow-sm"
                          >
                            <cat.icon size={13} aria-hidden="true" />
                            {cat.label}
                          </button>
                        ))}
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* CTA card */}
              <div className="mt-10 bg-navy rounded-2xl p-7 sm:p-8 text-center">
                <h3 className="font-bold text-xl text-white mb-2">
                  Didn&apos;t Find Your Answer?
                </h3>
                <p className="text-gray-300 text-sm mb-6">
                  Our team is happy to help with any questions not covered here.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white text-navy rounded-xl font-semibold text-sm hover:bg-cream transition-all"
                  >
                    Contact Us
                    <ArrowRight size={15} aria-hidden="true" />
                  </Link>
                  <Link
                    href="/appointments"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-gold text-white rounded-xl font-semibold text-sm hover:bg-opacity-90 transition-all"
                  >
                    Book an Appointment
                    <ArrowRight size={15} aria-hidden="true" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
