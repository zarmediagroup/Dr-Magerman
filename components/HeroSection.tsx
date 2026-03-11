"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle } from "lucide-react";

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay, ease: "easeOut" },
});

export default function HeroSection() {
  return (
    <section
      className="relative min-h-screen bg-navy overflow-hidden flex items-center"
      aria-labelledby="hero-heading"
    >
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/Dr-Meagan-Magerman-2.jpg"
          alt=""
          fill
          className="object-cover opacity-15"
          priority
          sizes="100vw"
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/95 to-navy/60" />
      </div>

      {/* Diagonal accent */}
      <div
        className="absolute top-0 right-0 w-1/2 h-full z-0 hidden lg:block overflow-hidden"
        aria-hidden="true"
      >
        <div className="relative w-full h-full">
          <Image
            src="/Dr-Meagan-Magerman-2.jpg"
            alt=""
            fill
            className="object-cover object-top opacity-40"
            priority
            sizes="50vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/70 to-transparent" />
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-32 pt-40">
        <div className="max-w-2xl">
          {/* Badge */}
          <motion.div {...fadeUp(0)}>
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gold/20 border border-gold/30 text-gold text-xs font-semibold tracking-widest uppercase font-body mb-6">
              <CheckCircle size={13} aria-hidden="true" />
              Serving Athlone Since 2004
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h1
            id="hero-heading"
            className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6"
            {...fadeUp(0.15)}
          >
            Compassionate Care,{" "}
            <span className="text-gold-gradient">Right in Athlone.</span>
          </motion.h1>

          {/* Subheading */}
          <motion.p
            className="font-body text-gray-300 text-lg leading-relaxed mb-8 max-w-lg"
            {...fadeUp(0.3)}
          >
            Dr Magerman provides trusted primary healthcare to families across
            Cape Town&apos;s Southern Suburbs — compassionate, evidence-based,
            and always patient-first.
          </motion.p>

          {/* CTAs */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4"
            {...fadeUp(0.45)}
          >
            <Link
              href="/appointments"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gold text-white rounded-xl font-bold font-body text-base hover:bg-opacity-90 transition-all duration-200 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
            >
              Book Appointment
              <ArrowRight size={18} aria-hidden="true" />
            </Link>
            <Link
              href="/about"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-white/30 text-white rounded-xl font-semibold font-body text-base hover:border-white/60 hover:bg-white/10 transition-all duration-200"
            >
              Learn More
            </Link>
          </motion.div>

          {/* Trust chips */}
          <motion.div
            className="flex flex-wrap gap-3 mt-10"
            {...fadeUp(0.55)}
          >
            {[
              "HPCSA Registered",
              "Medical Aid Accepted",
              "Family-Friendly Practice",
            ].map((chip) => (
              <span
                key={chip}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/10 text-gray-300 text-xs font-body"
              >
                <CheckCircle size={11} className="text-gold" aria-hidden="true" />
                {chip}
              </span>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Bottom wave */}
      <div
        className="absolute bottom-0 left-0 right-0 z-10"
        aria-hidden="true"
      >
        <svg
          viewBox="0 0 1440 80"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full"
          preserveAspectRatio="none"
        >
          <path
            d="M0 80L1440 80L1440 20C1200 70 960 0 720 40C480 80 240 10 0 50L0 80Z"
            fill="#0B1F3A"
          />
          <path
            d="M0 80L1440 80L1440 40C1200 80 960 20 720 55C480 90 240 30 0 65L0 80Z"
            fill="white"
          />
        </svg>
      </div>
    </section>
  );
}
