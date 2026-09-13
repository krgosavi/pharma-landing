"use client";

import { FormEvent, useState } from "react";
import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  CheckCircle2,
} from "lucide-react";

interface FormData {
  name: string;
  email: string;
  phone: string;
  company: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  phone?: string;
  message?: string;
}

const initialFormData: FormData = {
  name: "",
  email: "",
  phone: "",
  company: "",
  message: "",
};

export default function Contact() {
  const [formData, setFormData] =
    useState<FormData>(initialFormData);

  const [errors, setErrors] =
    useState<FormErrors>({});

  const [sending, setSending] =
    useState(false);

  const [submitted, setSubmitted] =
    useState(false);

  const [submitError, setSubmitError] =
    useState("");

  const handleChange = (
    field: keyof FormData,
    value: string
  ) => {
    setFormData((previous) => ({
      ...previous,
      [field]: value,
    }));

    setErrors((previous) => ({
      ...previous,
      [field]: undefined,
    }));

    setSubmitError("");
    setSubmitted(false);
  };

  const validateForm = () => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Please enter your name.";
    }

    if (!formData.email.trim()) {
      newErrors.email =
        "Please enter your email address.";
    } else if (
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(
        formData.email
      )
    ) {
      newErrors.email =
        "Please enter a valid email address.";
    }

    if (!formData.phone.trim()) {
      newErrors.phone =
        "Please enter your phone number.";
    } else if (
      !/^[0-9+\-\s()]{7,20}$/.test(
        formData.phone
      )
    ) {
      newErrors.phone =
        "Please enter a valid phone number.";
    }

    if (!formData.message.trim()) {
      newErrors.message =
        "Please tell us how we can help.";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (
    event: FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();

    if (!validateForm()) {
      return;
    }

    setSending(true);
    setSubmitError("");
    setSubmitted(false);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",

        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(
          result.error ||
            "Failed to send your message."
        );
      }

      setSubmitted(true);

      setFormData(initialFormData);
      setErrors({});
    } catch (error) {
      console.error(error);

      setSubmitError(
        "We couldn't send your message. Please try again or contact us directly by email."
      );
    } finally {
      setSending(false);
    }
  };

  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-slate-950 py-24"
    >
      {/* Background decoration */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-0 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-cyan-500/10 blur-3xl" />

        <div className="absolute bottom-0 right-0 h-[400px] w-[400px] rounded-full bg-blue-500/10 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* Heading */}
        <motion.div
          initial={{
            opacity: 0,
            y: 30,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.2,
          }}
          transition={{
            duration: 0.7,
          }}
          className="mx-auto max-w-3xl text-center"
        >
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-400">
            Contact Us
          </p>

          <h2 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-5xl">
            Let&apos;s Discuss Your
            <span className="text-cyan-400">
              {" "}
              Research Goals
            </span>
          </h2>

          <p className="mt-6 text-base leading-7 text-slate-400 sm:text-lg">
            Tell us about your project, research
            requirements, or development challenges.
            Our team will get back to you.
          </p>
        </motion.div>

        {/* Content */}
        <div className="mt-16 grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          {/* Contact Information */}
          <motion.div
            initial={{
              opacity: 0,
              x: -30,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
              amount: 0.2,
            }}
            transition={{
              duration: 0.7,
            }}
          >
            <div>
              <h3 className="text-2xl font-semibold text-white">
                Start a Conversation
              </h3>

              <p className="mt-4 max-w-md leading-7 text-slate-400">
                Whether you need regulatory support,
                research consulting, technical
                documentation, or product development
                expertise, we&apos;re ready to help.
              </p>
            </div>

            <div className="mt-8 space-y-5">
              {/* Email */}
              <a
                href="mailto:info@solunistresearch.com"
                className="group flex items-center gap-4"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/5">
                  <Mail
                    size={18}
                    className="text-cyan-400"
                  />
                </span>

                <div>
                  <p className="text-xs font-medium uppercase tracking-wider text-slate-500">
                    Email
                  </p>

                  <p className="mt-1 text-sm text-slate-300 transition-colors group-hover:text-cyan-400">
                    info@solunistresearch.com
                  </p>
                </div>
              </a>

              {/* Phone */}
              <a
                href="tel:+10000000000"
                className="group flex items-center gap-4"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/5">
                  <Phone
                    size={18}
                    className="text-cyan-400"
                  />
                </span>

                <div>
                  <p className="text-xs font-medium uppercase tracking-wider text-slate-500">
                    Phone
                  </p>

                  <p className="mt-1 text-sm text-slate-300 transition-colors group-hover:text-cyan-400">
                    +1 000 000 0000
                  </p>
                </div>
              </a>

              {/* Location */}
              <div className="flex items-center gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/5">
                  <MapPin
                    size={18}
                    className="text-cyan-400"
                  />
                </span>

                <div>
                  <p className="text-xs font-medium uppercase tracking-wider text-slate-500">
                    Location
                  </p>

                  <p className="mt-1 text-sm text-slate-300">
                    Pune, Maharashtra, India
                  </p>
                </div>
              </div>
            </div>

            {/* Response note */}
            <div className="mt-10 rounded-2xl border border-cyan-400/10 bg-cyan-400/5 p-5">
              <p className="text-sm leading-6 text-slate-400">
                <span className="font-semibold text-cyan-400">
                  What happens next?
                </span>
                <br />
                Submit your enquiry and our team will
                review your requirements and contact
                you using the details provided.
              </p>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{
              opacity: 0,
              x: 30,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
              amount: 0.2,
            }}
            transition={{
              duration: 0.7,
              delay: 0.1,
            }}
            className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 shadow-2xl sm:p-8"
          >
            {submitted ? (
              <div className="flex min-h-[500px] flex-col items-center justify-center text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-cyan-400/10">
                  <CheckCircle2
                    size={34}
                    className="text-cyan-400"
                  />
                </div>

                <h3 className="mt-6 text-2xl font-semibold text-white">
                  Message Sent Successfully
                </h3>

                <p className="mt-3 max-w-md leading-7 text-slate-400">
                  Thank you for contacting Solunist
                  Research. Your enquiry has been sent
                  to our team. We&apos;ll get back to you
                  soon.
                </p>

                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="mt-8 rounded-xl border border-white/10 px-5 py-3 text-sm font-semibold text-white transition hover:border-cyan-400/40 hover:text-cyan-400"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                noValidate
                className="space-y-6"
              >
                {/* Name */}
                <div>
                  <label
                    htmlFor="name"
                    className="text-sm font-medium text-white"
                  >
                    Name *
                  </label>

                  <input
                    id="name"
                    name="name"
                    type="text"
                    autoComplete="name"
                    value={formData.name}
                    onChange={(event) =>
                      handleChange(
                        "name",
                        event.target.value
                      )
                    }
                    aria-invalid={!!errors.name}
                    aria-describedby={
                      errors.name
                        ? "name-error"
                        : undefined
                    }
                    className={`mt-2 w-full rounded-xl border bg-white/5 px-4 py-3 text-white outline-none transition placeholder:text-slate-600 focus:border-cyan-400 ${
                      errors.name
                        ? "border-red-400"
                        : "border-white/10"
                    }`}
                    placeholder="Your full name"
                  />

                  {errors.name && (
                    <p
                      id="name-error"
                      className="mt-2 text-sm text-red-400"
                    >
                      {errors.name}
                    </p>
                  )}
                </div>

                {/* Email */}
                <div>
                  <label
                    htmlFor="email"
                    className="text-sm font-medium text-white"
                  >
                    Email *
                  </label>

                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    value={formData.email}
                    onChange={(event) =>
                      handleChange(
                        "email",
                        event.target.value
                      )
                    }
                    aria-invalid={!!errors.email}
                    aria-describedby={
                      errors.email
                        ? "email-error"
                        : undefined
                    }
                    className={`mt-2 w-full rounded-xl border bg-white/5 px-4 py-3 text-white outline-none transition placeholder:text-slate-600 focus:border-cyan-400 ${
                      errors.email
                        ? "border-red-400"
                        : "border-white/10"
                    }`}
                    placeholder="you@company.com"
                  />

                  {errors.email && (
                    <p
                      id="email-error"
                      className="mt-2 text-sm text-red-400"
                    >
                      {errors.email}
                    </p>
                  )}
                </div>

                {/* Phone */}
                <div>
                  <label
                    htmlFor="phone"
                    className="text-sm font-medium text-white"
                  >
                    Phone *
                  </label>

                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    autoComplete="tel"
                    value={formData.phone}
                    onChange={(event) =>
                      handleChange(
                        "phone",
                        event.target.value
                      )
                    }
                    aria-invalid={!!errors.phone}
                    aria-describedby={
                      errors.phone
                        ? "phone-error"
                        : undefined
                    }
                    className={`mt-2 w-full rounded-xl border bg-white/5 px-4 py-3 text-white outline-none transition placeholder:text-slate-600 focus:border-cyan-400 ${
                      errors.phone
                        ? "border-red-400"
                        : "border-white/10"
                    }`}
                    placeholder="+91 98765 43210"
                  />

                  {errors.phone && (
                    <p
                      id="phone-error"
                      className="mt-2 text-sm text-red-400"
                    >
                      {errors.phone}
                    </p>
                  )}
                </div>

                {/* Company */}
                <div>
                  <label
                    htmlFor="company"
                    className="text-sm font-medium text-white"
                  >
                    Company
                    <span className="ml-1 text-slate-500">
                      (Optional)
                    </span>
                  </label>

                  <input
                    id="company"
                    name="company"
                    type="text"
                    autoComplete="organization"
                    value={formData.company}
                    onChange={(event) =>
                      handleChange(
                        "company",
                        event.target.value
                      )
                    }
                    className="mt-2 w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none transition placeholder:text-slate-600 focus:border-cyan-400"
                    placeholder="Company / Organization"
                  />
                </div>

                {/* Message */}
                <div>
                  <label
                    htmlFor="message"
                    className="text-sm font-medium text-white"
                  >
                    Message *
                  </label>

                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    value={formData.message}
                    onChange={(event) =>
                      handleChange(
                        "message",
                        event.target.value
                      )
                    }
                    aria-invalid={!!errors.message}
                    aria-describedby={
                      errors.message
                        ? "message-error"
                        : undefined
                    }
                    className={`mt-2 w-full resize-none rounded-xl border bg-white/5 px-4 py-3 text-white outline-none transition placeholder:text-slate-600 focus:border-cyan-400 ${
                      errors.message
                        ? "border-red-400"
                        : "border-white/10"
                    }`}
                    placeholder="Tell us about your project or requirements..."
                  />

                  {errors.message && (
                    <p
                      id="message-error"
                      className="mt-2 text-sm text-red-400"
                    >
                      {errors.message}
                    </p>
                  )}
                </div>

                {/* Submit Error */}
                {submitError && (
                  <div className="rounded-xl border border-red-400/20 bg-red-400/10 px-4 py-3 text-sm leading-6 text-red-300">
                    {submitError}
                  </div>
                )}

                {/* Submit Button */}
                <motion.button
                  whileHover={{
                    scale: sending ? 1 : 1.02,
                  }}
                  whileTap={{
                    scale: sending ? 1 : 0.98,
                  }}
                  type="submit"
                  disabled={sending}
                  className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-cyan-500 px-6 py-3.5 font-semibold text-slate-950 transition hover:bg-cyan-400 disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {sending
                    ? "Sending..."
                    : "Send Message"}

                  {!sending && <Send size={17} />}
                </motion.button>

                <p className="text-center text-xs leading-5 text-slate-600">
                  By submitting this form, you agree
                  to be contacted regarding your enquiry.
                </p>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}