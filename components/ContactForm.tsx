"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";
import { CheckCircle, AlertCircle, Loader2 } from "lucide-react";

interface FormData {
  name: string;
  email: string;
  phone: string;
  reason: string;
  message: string;
  consent: boolean;
}

const reasons = [
  "General Enquiry",
  "Book Appointment",
  "Repeat Prescription",
  "Medical Aid Query",
  "Other",
];

export default function ContactForm() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    setLoading(true);
    setError(null);
    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        {
          from_name: data.name,
          from_email: data.email,
          phone: data.phone,
          reason: data.reason,
          message: data.message,
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      );
      setSuccess(true);
      reset();
    } catch {
      setError("Message failed to send. Please call us directly.");
    } finally {
      setLoading(false);
    }
  };

  if (success) {
    return (
      <div className="bg-white rounded-2xl shadow-card p-10 text-center">
        <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-5">
          <CheckCircle size={32} className="text-green-600" aria-hidden="true" />
        </div>
        <h3 className="font-heading text-2xl font-semibold text-navy mb-3">
          Message Sent!
        </h3>
        <p className="text-text-muted font-body mb-6 max-w-sm mx-auto">
          Thank you for reaching out. We&apos;ll be in touch within 24 hours.
        </p>
        <button
          onClick={() => setSuccess(false)}
          className="px-6 py-3 bg-gold text-white rounded-xl font-semibold font-body hover:bg-opacity-90 transition-all"
        >
          Send Another Message
        </button>
      </div>
    );
  }

  const inputClass =
    "w-full px-4 py-3 rounded-xl border border-gray-200 font-body text-sm text-navy placeholder-gray-400 focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold transition-colors duration-200 bg-white";
  const errorClass = "mt-1.5 text-red-500 text-xs font-body flex items-center gap-1";
  const labelClass = "block text-sm font-medium font-body text-navy mb-1.5";

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="bg-white rounded-2xl shadow-card p-6 sm:p-8 space-y-5"
      noValidate
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        {/* Full Name */}
        <div>
          <label htmlFor="name" className={labelClass}>
            Full Name <span className="text-red-500" aria-hidden="true">*</span>
          </label>
          <input
            id="name"
            type="text"
            autoComplete="name"
            placeholder="Your full name"
            className={`${inputClass} ${errors.name ? "border-red-400" : ""}`}
            aria-required="true"
            aria-describedby={errors.name ? "name-error" : undefined}
            {...register("name", { required: "Full name is required" })}
          />
          {errors.name && (
            <p id="name-error" className={errorClass} role="alert">
              <AlertCircle size={12} aria-hidden="true" />
              {errors.name.message}
            </p>
          )}
        </div>

        {/* Email */}
        <div>
          <label htmlFor="email" className={labelClass}>
            Email Address <span className="text-red-500" aria-hidden="true">*</span>
          </label>
          <input
            id="email"
            type="email"
            autoComplete="email"
            placeholder="your@email.com"
            className={`${inputClass} ${errors.email ? "border-red-400" : ""}`}
            aria-required="true"
            aria-describedby={errors.email ? "email-error" : undefined}
            {...register("email", {
              required: "Email address is required",
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: "Please enter a valid email address",
              },
            })}
          />
          {errors.email && (
            <p id="email-error" className={errorClass} role="alert">
              <AlertCircle size={12} aria-hidden="true" />
              {errors.email.message}
            </p>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        {/* Phone */}
        <div>
          <label htmlFor="phone" className={labelClass}>
            Phone Number <span className="text-red-500" aria-hidden="true">*</span>
          </label>
          <input
            id="phone"
            type="tel"
            autoComplete="tel"
            placeholder="+27 XX XXX XXXX"
            className={`${inputClass} ${errors.phone ? "border-red-400" : ""}`}
            aria-required="true"
            aria-describedby={errors.phone ? "phone-error" : undefined}
            {...register("phone", { required: "Phone number is required" })}
          />
          {errors.phone && (
            <p id="phone-error" className={errorClass} role="alert">
              <AlertCircle size={12} aria-hidden="true" />
              {errors.phone.message}
            </p>
          )}
        </div>

        {/* Reason */}
        <div>
          <label htmlFor="reason" className={labelClass}>
            Reason for Contact <span className="text-red-500" aria-hidden="true">*</span>
          </label>
          <select
            id="reason"
            className={`${inputClass} ${errors.reason ? "border-red-400" : ""}`}
            aria-required="true"
            {...register("reason", { required: "Please select a reason" })}
          >
            <option value="">Select a reason...</option>
            {reasons.map((r) => (
              <option key={r} value={r}>
                {r}
              </option>
            ))}
          </select>
          {errors.reason && (
            <p className={errorClass} role="alert">
              <AlertCircle size={12} aria-hidden="true" />
              {errors.reason.message}
            </p>
          )}
        </div>
      </div>

      {/* Message */}
      <div>
        <label htmlFor="message" className={labelClass}>
          Message <span className="text-red-500" aria-hidden="true">*</span>
        </label>
        <textarea
          id="message"
          rows={5}
          placeholder="How can we help you?"
          className={`${inputClass} resize-none ${errors.message ? "border-red-400" : ""}`}
          aria-required="true"
          aria-describedby={errors.message ? "message-error" : undefined}
          {...register("message", {
            required: "Message is required",
            minLength: { value: 10, message: "Message must be at least 10 characters" },
          })}
        />
        {errors.message && (
          <p id="message-error" className={errorClass} role="alert">
            <AlertCircle size={12} aria-hidden="true" />
            {errors.message.message}
          </p>
        )}
      </div>

      {/* Consent */}
      <div className="flex items-start gap-3">
        <input
          id="consent"
          type="checkbox"
          className="mt-0.5 w-4 h-4 rounded border-gray-300 text-gold focus:ring-gold flex-shrink-0 cursor-pointer"
          aria-required="true"
          {...register("consent", {
            required: "Please confirm your consent to continue",
          })}
        />
        <label htmlFor="consent" className="text-sm text-text-muted font-body cursor-pointer leading-relaxed">
          I consent to my data being used to respond to this enquiry in
          accordance with POPIA.{" "}
          <span className="text-red-500" aria-hidden="true">*</span>
        </label>
      </div>
      {errors.consent && (
        <p className={errorClass} role="alert">
          <AlertCircle size={12} aria-hidden="true" />
          {errors.consent.message}
        </p>
      )}

      {/* Error message */}
      {error && (
        <div
          className="flex items-center gap-2 p-4 bg-red-50 border border-red-200 rounded-xl text-red-700 text-sm font-body"
          role="alert"
        >
          <AlertCircle size={16} aria-hidden="true" />
          {error}
        </div>
      )}

      {/* Submit */}
      <button
        type="submit"
        disabled={loading}
        className="w-full py-4 bg-navy text-white rounded-xl font-semibold font-body text-sm hover:bg-opacity-90 transition-all duration-200 disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2 shadow-sm hover:shadow-md"
      >
        {loading ? (
          <>
            <Loader2 size={18} className="animate-spin" aria-hidden="true" />
            Sending...
          </>
        ) : (
          "Send Message"
        )}
      </button>
    </form>
  );
}
