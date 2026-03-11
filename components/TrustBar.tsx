"use client";

import { motion } from "framer-motion";
import { Stethoscope, Users, ClipboardList, Clock } from "lucide-react";

const trustItems = [
  {
    icon: Stethoscope,
    title: "20+ Years Experience",
    desc: "Trusted clinical expertise",
  },
  {
    icon: Users,
    title: "Family-Centred Care",
    desc: "Care for every generation",
  },
  {
    icon: ClipboardList,
    title: "Chronic Disease Specialists",
    desc: "Diabetes, hypertension & more",
  },
  {
    icon: Clock,
    title: "Same-Day Appointments",
    desc: "When you need us most",
  },
];

export default function TrustBar() {
  return (
    <section className="bg-navy py-12" aria-label="Trust indicators">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {trustItems.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="flex flex-col items-center text-center gap-3"
            >
              <div className="w-12 h-12 rounded-full bg-gold/20 flex items-center justify-center flex-shrink-0">
                <item.icon size={22} className="text-gold" aria-hidden="true" />
              </div>
              <div>
                <p className="font-heading text-white font-semibold text-base leading-tight">
                  {item.title}
                </p>
                <p className="text-gray-400 text-xs mt-1 font-body">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
