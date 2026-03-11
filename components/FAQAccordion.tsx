"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQAccordionProps {
  faqs: FAQItem[];
  category?: string;
}

export default function FAQAccordion({ faqs, category }: FAQAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="space-y-1">
      {category && (
        <h2 className="font-heading text-xl font-semibold text-navy mb-4 gold-underline pb-2">
          {category}
        </h2>
      )}
      {faqs.map((faq, i) => (
        <div
          key={i}
          className="border border-gray-200 rounded-xl overflow-hidden bg-white hover:border-gold/30 transition-colors duration-200"
        >
          <button
            onClick={() => setOpenIndex(openIndex === i ? null : i)}
            className="w-full flex justify-between items-center px-5 py-4 text-left font-medium font-body text-navy hover:bg-cream/50 transition-colors duration-200"
            aria-expanded={openIndex === i}
            aria-controls={`faq-answer-${i}`}
          >
            <span className="pr-4 text-sm sm:text-base leading-snug">{faq.question}</span>
            <ChevronDown
              size={18}
              className={`flex-shrink-0 text-gold transition-transform duration-300 ${
                openIndex === i ? "rotate-180" : ""
              }`}
              aria-hidden="true"
            />
          </button>
          <AnimatePresence>
            {openIndex === i && (
              <motion.div
                id={`faq-answer-${i}`}
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="overflow-hidden"
                role="region"
              >
                <p className="px-5 pb-5 pt-1 text-text-muted text-sm leading-relaxed font-body border-t border-gray-100">
                  {faq.answer}
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
}
