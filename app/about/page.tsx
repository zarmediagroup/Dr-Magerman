import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { GraduationCap, Heart, Users, Shield, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "About Dr Magerman | GP Practice — Athlone, Cape Town",
  description:
    "Learn about Dr Magerman, his qualifications, philosophy of care, and commitment to the Athlone community. Trusted GP with over 20 years of experience.",
};

const qualifications = [
  {
    year: "2004",
    title: "MBChB — University of Cape Town",
    description:
      "Graduated with distinction from UCT's Faculty of Health Sciences, one of Africa's top-ranked medical schools.",
  },
  {
    year: "2006",
    title: "Community Service — Western Cape",
    description:
      "Completed community service at a district hospital in the Western Cape, gaining broad primary care experience.",
  },
  {
    year: "2008",
    title: "FCFP(SA) — Fellow of the College of Family Physicians",
    description:
      "Obtained fellowship in Family Medicine, specialising in comprehensive, long-term patient care.",
  },
  {
    year: "2010",
    title: "Diploma in Occupational Medicine",
    description:
      "Additional qualification enabling comprehensive occupational health services for local businesses.",
  },
  {
    year: "2004–Present",
    title: "Private GP Practice — Athlone, Cape Town",
    description:
      "Established and grown a thriving family practice serving thousands of patients across Cape Town's Southern Suburbs.",
  },
];

const values = [
  {
    icon: Heart,
    title: "Compassionate Care",
    description:
      "Every patient is treated with dignity, empathy, and genuine concern. We listen first, then act.",
  },
  {
    icon: Shield,
    title: "Evidence-Based Medicine",
    description:
      "Clinical decisions grounded in the latest medical evidence and best-practice guidelines.",
  },
  {
    icon: Users,
    title: "Community Commitment",
    description:
      "Deeply rooted in Athlone and the Southern Suburbs — we understand our community's unique health needs.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-navy pt-32 pb-20" aria-labelledby="about-hero-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block text-gold text-sm font-semibold tracking-widest uppercase font-body mb-4">
                About the Doctor
              </span>
            <h1
              id="about-hero-heading"
              className="font-heading text-4xl sm:text-5xl font-bold text-white mb-6"
            >
              About Dr Meagan Magerman
            </h1>
              <p className="text-gray-300 font-body leading-relaxed text-lg mb-8">
                A trusted partner in your health journey for over two decades.
                Dr Magerman combines clinical excellence with genuine human
                connection.
              </p>
              <Link
                href="/appointments"
                className="inline-flex items-center gap-2 px-7 py-3.5 bg-gold text-white rounded-xl font-bold font-body text-sm hover:bg-opacity-90 transition-all duration-200"
              >
                Book an Appointment
                <ArrowRight size={16} aria-hidden="true" />
              </Link>
            </div>
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[4/5] max-w-sm mx-auto">
                <Image
                  src="/Dr-Meagan-Magerman-2.jpg"
                  alt="Dr Meagan Magerman — General Practitioner, Athlone"
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 768px) 100vw, 400px"
                />
              </div>
              <div className="absolute -bottom-4 -left-4 bg-white px-5 py-4 rounded-xl shadow-lg hidden sm:block">
                <p className="font-heading font-bold text-navy text-lg leading-none">
                  HPCSA Registered
                </p>
                <p className="font-body text-xs text-text-muted mt-1">
                  Reg. No: [XXXXXXXX]
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Background & Philosophy */}
      <section className="py-20 bg-white" aria-labelledby="philosophy-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <h2
                id="philosophy-heading"
                className="font-heading text-3xl font-bold text-navy mb-6 gold-underline"
              >
                Philosophy of Care
              </h2>
              <div className="space-y-4 text-text-muted font-body leading-relaxed">
                <p>
                  Medicine, at its core, is about people — not just conditions.
                  Dr Magerman&apos;s approach to general practice is built on this
                  belief. He takes the time to understand each patient as a
                  whole person: their lifestyle, their stressors, their
                  aspirations, and their health goals.
                </p>
                <p>
                  In a healthcare landscape that can feel rushed and
                  impersonal, Dr Magerman offers something increasingly rare: a
                  GP who genuinely knows his patients. Continuity of care is
                  not just a concept — it&apos;s the foundation of everything the
                  practice does.
                </p>
                <p>
                  His clinical approach combines evidence-based medicine with
                  holistic thinking. He believes that the best health outcomes
                  come from treating the patient, not just the disease — and
                  from empowering people with the knowledge to take ownership
                  of their own wellbeing.
                </p>
              </div>
            </div>
            <div>
              <h2 className="font-heading text-3xl font-bold text-navy mb-6 gold-underline">
                Our Practice
              </h2>
              <div className="space-y-4 text-text-muted font-body leading-relaxed">
                <p>
                  Located in the heart of Athlone, the practice serves patients
                  from across Cape Town&apos;s Southern Suburbs — including
                  Mitchells Plain, Wynberg, Claremont, Rondebosch, and beyond.
                </p>
                <p>
                  The practice is equipped to handle a wide range of medical
                  needs, from routine consultations and chronic disease
                  management to minor procedures and occupational health
                  assessments.
                </p>
                <p>
                  We accept most major medical aids and offer affordable
                  private consultation rates, ensuring that quality healthcare
                  remains accessible to all members of our community.
                </p>
              </div>
              <div className="mt-8 grid grid-cols-2 gap-4">
                <div className="bg-cream rounded-xl p-5 text-center">
                  <p className="font-heading text-3xl font-bold text-navy">20+</p>
                  <p className="text-text-muted text-sm font-body mt-1">Years in Practice</p>
                </div>
                <div className="bg-cream rounded-xl p-5 text-center">
                  <p className="font-heading text-3xl font-bold text-navy">5,000+</p>
                  <p className="text-text-muted text-sm font-body mt-1">Patients Served</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Qualifications Timeline */}
      <section className="py-20 bg-cream" aria-labelledby="qualifications-heading">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="inline-block text-gold text-sm font-semibold tracking-widest uppercase font-body mb-3">
              Academic & Professional
            </span>
            <h2
              id="qualifications-heading"
              className="font-heading text-3xl font-bold text-navy"
            >
              Background & Qualifications
            </h2>
          </div>
          <div className="relative">
            {/* Vertical line */}
            <div
              className="absolute left-6 top-0 bottom-0 w-0.5 bg-gold/30 hidden sm:block"
              aria-hidden="true"
            />
            <div className="space-y-10">
              {qualifications.map((item, i) => (
                <div key={i} className="flex gap-6 sm:gap-8 items-start">
                  <div className="flex-shrink-0 hidden sm:flex flex-col items-center">
                    <div className="w-12 h-12 rounded-full bg-navy border-4 border-gold flex items-center justify-center z-10">
                      <GraduationCap size={18} className="text-gold" aria-hidden="true" />
                    </div>
                  </div>
                  <div className="flex-1 bg-white rounded-xl p-5 shadow-card">
                    <span className="inline-block text-gold text-xs font-semibold font-body tracking-widest uppercase mb-2">
                      {item.year}
                    </span>
                    <h3 className="font-heading text-base font-semibold text-navy mb-2">
                      {item.title}
                    </h3>
                    <p className="text-text-muted text-sm font-body leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Practice Values */}
      <section className="py-20 bg-white" aria-labelledby="values-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2
              id="values-heading"
              className="font-heading text-3xl font-bold text-navy"
            >
              Our Core Values
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {values.map((value) => (
              <div
                key={value.title}
                className="card p-8 text-center group hover:border-gold/30 border border-transparent"
              >
                <div className="w-14 h-14 rounded-2xl bg-cream flex items-center justify-center mx-auto mb-5 group-hover:bg-gold/10 transition-colors">
                  <value.icon
                    size={24}
                    className="text-navy group-hover:text-gold transition-colors"
                    aria-hidden="true"
                  />
                </div>
                <h3 className="font-heading text-lg font-semibold text-navy mb-3">
                  {value.title}
                </h3>
                <p className="text-text-muted text-sm font-body leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-navy" aria-labelledby="about-cta-heading">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2
            id="about-cta-heading"
            className="font-heading text-3xl font-bold text-white mb-4"
          >
            Ready to Meet Dr Magerman?
          </h2>
          <p className="text-gray-300 font-body mb-8">
            Book your first consultation and experience patient-centred care.
          </p>
          <Link
            href="/appointments"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gold text-white rounded-xl font-bold font-body text-base hover:bg-opacity-90 transition-all"
          >
            Book an Appointment
            <ArrowRight size={18} aria-hidden="true" />
          </Link>
        </div>
      </section>
    </>
  );
}
