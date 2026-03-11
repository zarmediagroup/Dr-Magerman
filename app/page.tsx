import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  Stethoscope,
  Heart,
  Baby,
  Activity,
  Shield,
  Brain,
  Scissors,
  Briefcase,
  FlaskConical,
  ArrowRight,
} from "lucide-react";
import TrustBar from "@/components/TrustBar";
import ServiceCard from "@/components/ServiceCard";
import TestimonialCarousel from "@/components/TestimonialCarousel";
import HeroSection from "@/components/HeroSection";

export const metadata: Metadata = {
  title: "Dr Magerman | General Practitioner — Athlone, Cape Town",
  description:
    "Book an appointment with Dr Magerman, a trusted GP in Athlone, Cape Town. Offering comprehensive primary healthcare, chronic disease management, and preventive care.",
};

const services = [
  {
    icon: Stethoscope,
    title: "General Consultations",
    description:
      "Comprehensive consultations for acute and chronic conditions. Same-day appointments available for urgent medical needs.",
  },
  {
    icon: Activity,
    title: "Chronic Disease Management",
    description:
      "Specialised management of diabetes, hypertension, asthma, and other chronic conditions with personalised care plans.",
  },
  {
    icon: Baby,
    title: "Child & Infant Healthcare",
    description:
      "Compassionate healthcare for babies, toddlers, and children — from newborn check-ups to school-age wellness.",
  },
  {
    icon: Heart,
    title: "Women's Health",
    description:
      "Confidential, sensitive care covering reproductive health, cervical screening, family planning, and menopause management.",
  },
  {
    icon: Shield,
    title: "Preventive Care & Vaccinations",
    description:
      "Stay ahead of illness with routine vaccinations, health screenings, and personalised preventive health strategies.",
  },
  {
    icon: Brain,
    title: "Mental Health Support",
    description:
      "Supportive, non-judgmental assessments and management of anxiety, depression, stress, and other mental health concerns.",
  },
  {
    icon: Scissors,
    title: "Minor Procedures",
    description:
      "In-practice minor surgical procedures including wound care, suturing, cryotherapy, and lesion removals.",
  },
  {
    icon: Briefcase,
    title: "Occupational Health Certificates",
    description:
      "COIDA assessments, pre-employment medicals, and occupational health certificates issued efficiently.",
  },
  {
    icon: FlaskConical,
    title: "COVID & Flu Testing",
    description:
      "Rapid COVID-19 and influenza testing with same-day results and appropriate treatment plans.",
  },
];

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <TrustBar />

      {/* Services Section */}
      <section
        id="services"
        className="py-20 bg-cream"
        aria-labelledby="services-heading"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="inline-block text-gold text-sm font-semibold tracking-widest uppercase font-body mb-3">
              What We Offer
            </span>
            <h2
              id="services-heading"
              className="font-heading text-3xl sm:text-4xl font-bold text-navy mb-4"
            >
              Comprehensive GP Services
            </h2>
            <p className="text-text-muted font-body leading-relaxed">
              From routine check-ups to complex chronic disease management, we
              provide complete primary healthcare for your whole family.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, i) => (
              <ServiceCard key={service.title} {...service} index={i} />
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 px-7 py-3.5 border-2 border-navy text-navy rounded-xl font-semibold font-body text-sm hover:bg-navy hover:text-white transition-all duration-200"
            >
              View All Services
              <ArrowRight size={16} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      {/* About Snippet */}
      <section
        className="py-20 bg-white"
        aria-labelledby="about-heading"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-card aspect-[4/5] max-w-sm mx-auto lg:mx-0">
                <Image
                  src="/Dr-Meagan-Magerman-2.jpg"
                  alt="Dr Meagan Magerman — General Practitioner in Athlone, Cape Town"
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 lg:-right-8 bg-gold text-white px-6 py-4 rounded-xl shadow-lg hidden sm:block">
                <p className="font-heading font-bold text-2xl leading-none">20+</p>
                <p className="font-body text-xs mt-1 text-gold-light">Years of Experience</p>
              </div>
            </div>
            <div>
              <span className="inline-block text-gold text-sm font-semibold tracking-widest uppercase font-body mb-3">
                Our Practice
              </span>
              <h2
                id="about-heading"
                className="font-heading text-3xl sm:text-4xl font-bold text-navy mb-6 gold-underline"
              >
                Meet Dr Meagan Magerman
              </h2>
              <p className="text-text-muted font-body leading-relaxed mb-4">
                Dr Magerman has been serving the Athlone and Cape Town
                community for over two decades. His philosophy centres on
                building long-term relationships with patients — understanding
                not just their symptoms, but their lives.
              </p>
              <p className="text-text-muted font-body leading-relaxed mb-8">
                With expertise spanning general practice, chronic disease
                management, and preventive medicine, Dr Magerman provides
                comprehensive, evidence-based care that puts patients first.
                His practice is built on trust, dignity, and accessible
                healthcare for all.
              </p>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 px-7 py-3.5 bg-navy text-white rounded-xl font-semibold font-body text-sm hover:bg-opacity-90 transition-all duration-200 shadow-sm hover:shadow-md hover:-translate-y-0.5"
              >
                Full Profile
                <ArrowRight size={16} aria-hidden="true" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section
        className="py-20 bg-cream"
        aria-labelledby="testimonials-heading"
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-block text-gold text-sm font-semibold tracking-widest uppercase font-body mb-3">
              Patient Stories
            </span>
            <h2
              id="testimonials-heading"
              className="font-heading text-3xl sm:text-4xl font-bold text-navy"
            >
              What Our Patients Say
            </h2>
          </div>
          <TestimonialCarousel />
        </div>
      </section>

      {/* CTA Banner */}
      <section
        className="py-20"
        style={{
          background:
            "linear-gradient(135deg, var(--color-navy) 0%, #142d52 60%, #1a3a5c 100%)",
        }}
        aria-labelledby="cta-heading"
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block text-gold-light text-sm font-semibold tracking-widest uppercase font-body mb-4 opacity-80">
            Take the First Step
          </span>
          <h2
            id="cta-heading"
            className="font-heading text-3xl sm:text-4xl font-bold text-white mb-5"
          >
            Ready to Prioritise Your Health?
          </h2>
          <p className="text-gray-300 font-body max-w-xl mx-auto mb-8 leading-relaxed">
            Don&apos;t wait until you&apos;re unwell. Book your appointment today and take
            control of your health with the support of a trusted GP.
          </p>
          <Link
            href="/appointments"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gold text-white rounded-xl font-bold font-body text-base hover:bg-opacity-90 transition-all duration-200 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
          >
            Book an Appointment Today
            <ArrowRight size={18} aria-hidden="true" />
          </Link>
        </div>
      </section>
    </>
  );
}
