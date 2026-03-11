"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  Stethoscope,
  Activity,
  Baby,
  Heart,
  Shield,
  Brain,
  Scissors,
  Briefcase,
  FlaskConical,
  ArrowRight,
  Home,
  ChevronRight,
  CheckCircle,
  Calendar,
  MessageCircle,
} from "lucide-react";

const services = [
  {
    icon: Stethoscope,
    title: "General Consultations",
    shortDesc: "Thorough, unhurried consultations for acute and chronic conditions.",
    fullDesc:
      "Whether you're dealing with a sudden illness, a recurring concern, or simply need a check-up, Dr Magerman provides thorough, unhurried consultations. Every visit includes a detailed history, physical examination, and a personalised management plan. Same-day appointments are available for urgent matters.",
    highlights: [
      "Same-day appointments available",
      "Full physical examination",
      "Personalised management plan",
      "Acute & chronic conditions",
    ],
    color: "bg-blue-50",
    iconColor: "text-blue-600",
    tag: "Most Popular",
  },
  {
    icon: Activity,
    title: "Chronic Disease Management",
    shortDesc: "Ongoing management of diabetes, hypertension, asthma, and more.",
    fullDesc:
      "Living with a chronic condition requires consistent monitoring and a proactive management approach. Dr Magerman provides comprehensive care for conditions including Type 1 and Type 2 Diabetes, Hypertension, Asthma, COPD, Hyperlipidaemia, and Hypothyroidism — with regular HbA1c, blood pressure monitoring, medication management, and lifestyle counselling.",
    highlights: [
      "Diabetes (Type 1 & 2)",
      "Hypertension & cardiovascular risk",
      "Asthma & COPD management",
      "Medication reviews & adjustments",
    ],
    color: "bg-red-50",
    iconColor: "text-red-600",
    tag: null,
  },
  {
    icon: Baby,
    title: "Child & Infant Healthcare",
    shortDesc: "Compassionate care for babies, toddlers, and children of all ages.",
    fullDesc:
      "From newborn check-ups and growth monitoring to childhood illness management and school readiness assessments, Dr Magerman provides comprehensive paediatric primary care. This includes Road-to-Health Booklet management, developmental assessments, immunisations (EPI schedule), and management of common childhood conditions.",
    highlights: [
      "Newborn & infant check-ups",
      "Road-to-Health Booklet",
      "Childhood immunisations (EPI)",
      "Developmental assessments",
    ],
    color: "bg-yellow-50",
    iconColor: "text-yellow-600",
    tag: null,
  },
  {
    icon: Heart,
    title: "Women's Health",
    shortDesc: "Confidential, sensitive care for all aspects of women's health.",
    fullDesc:
      "Women's health is a broad and deeply personal area. Services include Pap smears and cervical screening, contraceptive counselling and prescriptions (including IUD referrals), pre-conception counselling, menopause management, breast examination and referrals, as well as STI testing and treatment. All consultations are conducted with complete sensitivity and confidentiality.",
    highlights: [
      "Pap smears & cervical screening",
      "Contraception counselling",
      "Menopause management",
      "Pre-conception care",
    ],
    color: "bg-pink-50",
    iconColor: "text-pink-600",
    tag: null,
  },
  {
    icon: Shield,
    title: "Preventive Care & Vaccinations",
    shortDesc: "Stay ahead of illness with preventive strategies and vaccinations.",
    fullDesc:
      "Prevention is the cornerstone of good health. The practice offers a full range of adult and childhood vaccinations, annual flu vaccinations, travel vaccinations, cardiovascular risk screening (cholesterol, blood pressure, BMI), diabetes screening, and personalised wellness plans. Regular health check-ups can identify risks before they become problems.",
    highlights: [
      "Annual flu vaccinations",
      "Travel health & vaccines",
      "Cardiovascular risk screening",
      "Personalised wellness plans",
    ],
    color: "bg-green-50",
    iconColor: "text-green-600",
    tag: null,
  },
  {
    icon: Brain,
    title: "Mental Health Support",
    shortDesc: "Non-judgmental assessment and management of mental health concerns.",
    fullDesc:
      "Mental health is health. Dr Magerman provides compassionate, evidence-based management of anxiety disorders, depression, burnout, stress-related conditions, and sleep disorders. Initial assessments, medication management, psychotherapy referrals, and ongoing monitoring are all available. A safe, non-judgmental space is guaranteed for every consultation.",
    highlights: [
      "Anxiety & depression management",
      "Burnout & stress support",
      "Sleep disorder assessment",
      "Referrals & medication management",
    ],
    color: "bg-purple-50",
    iconColor: "text-purple-600",
    tag: null,
  },
  {
    icon: Scissors,
    title: "Minor Procedures",
    shortDesc: "In-practice minor surgical procedures, safely and efficiently.",
    fullDesc:
      "The practice is equipped to perform a range of minor surgical procedures, avoiding unnecessary hospital visits. These include wound assessment, cleaning and suturing, abscess drainage, cryotherapy for warts and skin lesions, removal of ingrown toenails, and minor skin tag and lesion removals. All procedures are performed under appropriate sterile conditions.",
    highlights: [
      "Wound care & suturing",
      "Abscess drainage",
      "Cryotherapy for lesions",
      "Ingrown toenail removal",
    ],
    color: "bg-orange-50",
    iconColor: "text-orange-600",
    tag: null,
  },
  {
    icon: Briefcase,
    title: "Occupational Health",
    shortDesc: "COIDA assessments, pre-employment medicals, and certificates.",
    fullDesc:
      "Dr Magerman is qualified to conduct occupational health services for individuals and businesses. This includes pre-employment medical examinations, fitness-to-work certificates, COIDA assessments and documentation, sick note issuance, and medical surveillance certificates for hazardous work environments.",
    highlights: [
      "Pre-employment medicals",
      "Fitness-to-work certificates",
      "COIDA assessments",
      "Sick notes & documentation",
    ],
    color: "bg-slate-50",
    iconColor: "text-slate-600",
    tag: null,
  },
  {
    icon: FlaskConical,
    title: "COVID & Flu Testing",
    shortDesc: "Rapid testing with same-day results and appropriate treatment.",
    fullDesc:
      "The practice offers rapid antigen testing for COVID-19 and Influenza A/B, with results available during your consultation. PCR testing can be arranged through laboratory partners. Management of post-COVID symptoms and long COVID is also available. Annual flu vaccinations are recommended for all patients, especially those with chronic conditions.",
    highlights: [
      "Rapid antigen testing",
      "PCR testing via lab partners",
      "Long COVID management",
      "Annual flu vaccinations",
    ],
    color: "bg-teal-50",
    iconColor: "text-teal-600",
    tag: null,
  },
];

export default function ServicesPage() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const handleSelect = (i: number) => {
    setActiveIndex(activeIndex === i ? null : i);
  };

  return (
    <>
      {/* Hero */}
      <section className="relative bg-navy pt-32 pb-20 overflow-hidden" aria-labelledby="services-page-heading">
        {/* Decorative circles */}
        <div className="absolute top-20 right-0 w-96 h-96 rounded-full bg-gold/5 -translate-y-1/2 translate-x-1/2 pointer-events-none" aria-hidden="true" />
        <div className="absolute bottom-0 left-20 w-64 h-64 rounded-full bg-white/3 pointer-events-none" aria-hidden="true" />

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
              <li className="text-gold font-medium" aria-current="page">Services</li>
            </ol>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-end">
            <div>
              <span className="inline-block text-gold text-xs font-semibold tracking-widest uppercase mb-4 bg-gold/10 px-3 py-1.5 rounded-full">
                What We Offer
              </span>
              <h1
                id="services-page-heading"
                className="text-4xl sm:text-5xl font-bold text-white mb-5 leading-tight"
              >
                Comprehensive GP Services in Athlone
              </h1>
              <p className="text-gray-300 leading-relaxed text-lg">
                From routine consultations to specialised chronic disease
                management — complete primary healthcare under one roof.
              </p>
            </div>
            {/* Quick stats */}
            <div className="grid grid-cols-3 gap-3 lg:justify-self-end lg:w-full lg:max-w-sm">
              {[
                { value: "9+", label: "Services" },
                { value: "20+", label: "Years Experience" },
                { value: "Same-Day", label: "Appointments" },
              ].map((stat) => (
                <div key={stat.label} className="bg-white/8 border border-white/10 rounded-xl px-4 py-5 text-center">
                  <p className="text-gold font-bold text-xl leading-none">{stat.value}</p>
                  <p className="text-gray-400 text-xs mt-1.5">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid + Detail Panel */}
      <section className="py-20 bg-cream" aria-labelledby="services-grid-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 id="services-grid-heading" className="text-2xl sm:text-3xl font-bold text-navy mb-3">
              Select a Service to Learn More
            </h2>
            <p className="text-text-muted text-sm max-w-xl mx-auto">
              Click any service card to see full details, what&apos;s included, and how to book.
            </p>
          </div>

          {/* 3-col card grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {services.map((service, i) => {
              const isActive = activeIndex === i;
              return (
                <motion.button
                  key={service.title}
                  onClick={() => handleSelect(i)}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.05 }}
                  className={`relative text-left rounded-2xl p-5 border-2 transition-all duration-200 group w-full ${
                    isActive
                      ? "border-gold bg-white shadow-card-hover"
                      : "border-transparent bg-white shadow-card hover:border-gold/40 hover:shadow-card-hover hover:-translate-y-0.5"
                  }`}
                  aria-expanded={isActive}
                  aria-controls={`service-detail-panel`}
                >
                  {/* Tag */}
                  {service.tag && (
                    <span className="absolute top-4 right-4 text-[10px] font-semibold bg-gold text-white px-2 py-0.5 rounded-full tracking-wide">
                      {service.tag}
                    </span>
                  )}
                  {/* Active indicator */}
                  {isActive && (
                    <span className="absolute top-4 right-4 w-2 h-2 rounded-full bg-gold" aria-hidden="true" />
                  )}

                  <div className={`w-11 h-11 rounded-xl ${service.color} flex items-center justify-center mb-4 transition-transform duration-200 group-hover:scale-110`}>
                    <service.icon size={20} className={service.iconColor} aria-hidden="true" />
                  </div>
                  <h3 className={`font-semibold text-base mb-1.5 leading-snug transition-colors ${isActive ? "text-gold" : "text-navy"}`}>
                    {service.title}
                  </h3>
                  <p className="text-text-muted text-xs leading-relaxed">
                    {service.shortDesc}
                  </p>
                  <div className={`mt-3 flex items-center gap-1 text-xs font-semibold transition-colors ${isActive ? "text-gold" : "text-gray-400 group-hover:text-gold"}`}>
                    {isActive ? "Hide details" : "View details"}
                    <ChevronRight size={12} className={`transition-transform ${isActive ? "rotate-90" : ""}`} aria-hidden="true" />
                  </div>
                </motion.button>
              );
            })}
          </div>

          {/* Expanded Detail Panel */}
          <AnimatePresence>
            {activeIndex !== null && (
              <motion.div
                id="service-detail-panel"
                key={activeIndex}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="mt-4 bg-white rounded-2xl shadow-card-hover border border-gold/20 overflow-hidden"
                role="region"
                aria-label={`${services[activeIndex].title} details`}
              >
                <div className="grid grid-cols-1 lg:grid-cols-5">
                  {/* Left: content */}
                  <div className="lg:col-span-3 p-7 sm:p-10">
                    <div className="flex items-center gap-4 mb-6">
                      <div className={`w-14 h-14 rounded-2xl ${services[activeIndex].color} flex items-center justify-center flex-shrink-0`}>
                        {(() => {
                          const Icon = services[activeIndex].icon;
                          return <Icon size={26} className={services[activeIndex].iconColor} aria-hidden="true" />;
                        })()}
                      </div>
                      <div>
                        <h3 className="font-bold text-xl text-navy">
                          {services[activeIndex].title}
                        </h3>
                        <p className="text-text-muted text-sm mt-0.5">
                          {services[activeIndex].shortDesc}
                        </p>
                      </div>
                    </div>
                    <p className="text-text-muted leading-relaxed text-sm mb-7">
                      {services[activeIndex].fullDesc}
                    </p>
                    <div className="flex flex-wrap gap-3">
                      <Link
                        href="/appointments"
                        className="inline-flex items-center gap-2 px-6 py-3 bg-navy text-white rounded-xl text-sm font-semibold hover:bg-opacity-90 transition-all shadow-sm hover:shadow-md"
                      >
                        <Calendar size={15} aria-hidden="true" />
                        Book This Service
                      </Link>
                      <Link
                        href={`https://wa.me/27XXXXXXXXX?text=Hi%2C%20I%27d%20like%20to%20book%20for%20${encodeURIComponent(services[activeIndex].title)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-6 py-3 bg-[#25D366] text-white rounded-xl text-sm font-semibold hover:bg-opacity-90 transition-all"
                      >
                        <MessageCircle size={15} aria-hidden="true" />
                        WhatsApp Us
                      </Link>
                    </div>
                  </div>

                  {/* Right: highlights */}
                  <div className="lg:col-span-2 bg-cream p-7 sm:p-10 flex flex-col justify-center">
                    <p className="text-xs font-semibold tracking-widest uppercase text-gold mb-5">
                      What&apos;s Included
                    </p>
                    <ul className="space-y-3">
                      {services[activeIndex].highlights.map((highlight) => (
                        <li key={highlight} className="flex items-start gap-3">
                          <CheckCircle
                            size={17}
                            className="text-gold flex-shrink-0 mt-0.5"
                            aria-hidden="true"
                          />
                          <span className="text-navy text-sm font-medium">{highlight}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="mt-8 pt-6 border-t border-gray-200">
                      <Link
                        href="/faq"
                        className="text-sm text-text-muted hover:text-navy transition-colors flex items-center gap-1.5 group"
                      >
                        Have questions about this service?
                        <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform" aria-hidden="true" />
                      </Link>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-navy relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
          <div className="absolute bottom-0 right-0 w-80 h-80 rounded-full bg-gold/5 translate-x-1/3 translate-y-1/3" />
        </div>
        <div className="relative max-w-3xl mx-auto px-4 text-center">
          <span className="inline-block text-gold text-xs font-semibold tracking-widest uppercase mb-4 bg-gold/10 px-3 py-1.5 rounded-full">
            Get Started
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-5">
            Not Sure Which Service You Need?
          </h2>
          <p className="text-gray-300 mb-8 leading-relaxed">
            Book a general consultation and Dr Magerman will assess your needs
            and guide you to the right care.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/appointments"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gold text-white rounded-xl font-bold text-base hover:bg-opacity-90 transition-all shadow-lg hover:-translate-y-0.5"
            >
              Book an Appointment
              <ArrowRight size={18} aria-hidden="true" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-white/20 text-white rounded-xl font-semibold text-base hover:border-white/50 hover:bg-white/10 transition-all"
            >
              Ask a Question
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
