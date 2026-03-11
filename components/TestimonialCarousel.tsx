"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    quote:
      "Dr Magerman has been our family doctor for over a decade. His patience, thoroughness, and genuine care for his patients is unmatched. I wouldn't trust anyone else with my family's health.",
    name: "Sarah M.",
    suburb: "Athlone",
    rating: 5,
  },
  {
    quote:
      "I've been managing my diabetes for years and Dr Magerman's approach to chronic disease management has genuinely improved my quality of life. He takes the time to explain everything clearly.",
    name: "James T.",
    suburb: "Mitchells Plain",
    rating: 5,
  },
  {
    quote:
      "Getting a same-day appointment was a lifesaver when my child fell ill. The practice is well-organised, the staff are friendly, and Dr Magerman is incredibly reassuring with young patients.",
    name: "Fatima R.",
    suburb: "Claremont",
    rating: 5,
  },
];

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-0.5" aria-label={`${rating} out of 5 stars`} role="img">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          size={16}
          className={i < rating ? "text-gold fill-gold" : "text-gray-300"}
          aria-hidden="true"
        />
      ))}
    </div>
  );
}

export default function TestimonialCarousel() {
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const next = useCallback(() => {
    setCurrent((c) => (c + 1) % testimonials.length);
  }, []);

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(next, 5000);
    return () => clearInterval(interval);
  }, [next, isPaused]);

  return (
    <div
      className="relative"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="overflow-hidden min-h-[220px] flex items-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -40 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="w-full"
          >
            <blockquote className="text-center">
              <StarRating rating={testimonials[current].rating} />
              <p className="mt-5 text-gray-700 font-body text-lg leading-relaxed italic max-w-2xl mx-auto">
                &ldquo;{testimonials[current].quote}&rdquo;
              </p>
              <footer className="mt-5">
                <cite className="not-italic font-heading font-semibold text-navy text-base">
                  — {testimonials[current].name},{" "}
                  <span className="font-body font-normal text-text-muted">
                    {testimonials[current].suburb}
                  </span>
                </cite>
              </footer>
            </blockquote>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Dot navigation */}
      <div className="flex items-center justify-center gap-2 mt-8" role="tablist" aria-label="Testimonial navigation">
        {testimonials.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            role="tab"
            aria-selected={i === current}
            aria-label={`View testimonial ${i + 1}`}
            className={`rounded-full transition-all duration-300 ${
              i === current
                ? "w-6 h-2.5 bg-gold"
                : "w-2.5 h-2.5 bg-gray-300 hover:bg-gold/50"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
