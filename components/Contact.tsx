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
  company: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

export default function Contact() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    company: "",
    message: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);

  const validateForm = () => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Please enter your name.";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Please enter your email address.";
    } else if (
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)
    ) {
      newErrors.email = "Please enter a valid email address.";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Please tell us about your project.";
    } else if (formData.message.trim().length < 10) {
      newErrors.message =
        "Please provide at least 10 characters.";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!validateForm()) {
      return;
    }

    /*
      Stage 4 currently performs client-side validation.

      Later we can connect this form to:
      - Next.js API route
      - Email service
      - Formspree
      - Resend
      - your backend
    */

    setSubmitted(true);

    setFormData({
      name: "",
      email: "",
      company: "",
      message: "",
    });

    setErrors({});
  };

  const handleChange = (
    field: keyof FormData,
    value: string
  ) => {
    setFormData((previous) => ({
      ...previous,
      [field]: value,
    }));

    if (errors[field as keyof FormErrors]) {
      setErrors((previous) => ({
        ...previous,
        [field]: undefined,
      }));
    }

    setSubmitted(false);
  };

  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-slate-950 py-24"
    >
      {/* Background glow */}
      <div className="absolute -left-40 top-20 h-96 w-96 rounded-full bg-cyan-500/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="mx-auto max-w-3xl text-center"
        >
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-400">
            Get in Touch
          </p>

          <h2 className="mt-4 text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Let's Discuss Your
            <span className="text-cyan-400">
              {" "}
              Research
            </span>
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-400">
            Tell us about your project and our team will get
            back to you.
          </p>
        </motion.div>

        <div className="mt-16 grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h3 className="text-2xl font-bold text-white">
              Connect with our team
            </h3>

            <p className="mt-4 max-w-md leading-7 text-slate-400">
              Whether you are starting a new research project
              or looking for scientific support, we would be
              happy to discuss your requirements.
            </p>

            <div className="mt-8 space-y-6">
              <div className="flex gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-cyan-500/10">
                  <Mail
                    size={19}
                    className="text-cyan-400"
                  />
                </div>

                <div>
                  <p className="text-sm text-slate-500">
                    Email
                  </p>
                  <p className="mt-1 text-white">
                    info@pharmalab.com
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-cyan-500/10">
                  <Phone
                    size={19}
                    className="text-cyan-400"
                  />
                </div>

                <div>
                  <p className="text-sm text-slate-500">
                    Phone
                  </p>
                  <p className="mt-1 text-white">
                    +1 000 000 0000
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-cyan-500/10">
                  <MapPin
                    size={19}
                    className="text-cyan-400"
                  />
                </div>

                <div>
                  <p className="text-sm text-slate-500">
                    Location
                  </p>
                  <p className="mt-1 text-white">
                    Research & Innovation Center
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm sm:p-8"
          >
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex min-h-[400px] flex-col items-center justify-center text-center"
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-cyan-500/10">
                  <CheckCircle2
                    size={32}
                    className="text-cyan-400"
                  />
                </div>

                <h3 className="mt-6 text-2xl font-bold text-white">
                  Thank You
                </h3>

                <p className="mt-3 max-w-md text-slate-400">
                  Your message has been received. Our team will
                  get back to you shortly.
                </p>

                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-7 rounded-full border border-white/10 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-white/10"
                >
                  Send another message
                </button>
              </motion.div>
            ) : (
              <form
                onSubmit={handleSubmit}
                noValidate
                className="space-y-6"
              >
                <div className="grid gap-6 sm:grid-cols-2">

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
                      placeholder="Your name"
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
                </div>

                {/* Company */}
                <div>
                  <label
                    htmlFor="company"
                    className="text-sm font-medium text-white"
                  >
                    Company
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
                    placeholder="Company name"
                  />
                </div>

                {/* Message */}
                <div>
                  <label
                    htmlFor="message"
                    className="text-sm font-medium text-white"
                  >
                    Project Details *
                  </label>

                  <textarea
                    id="message"
                    name="message"
                    rows={5}
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
                    placeholder="Tell us about your research requirements..."
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

                {/* Submit */}
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-cyan-500 px-6 py-3.5 font-semibold text-slate-950 transition hover:bg-cyan-400"
                >
                  Send Message
                  <Send size={17} />
                </motion.button>

                <p className="text-center text-xs text-slate-500">
                  We respect your privacy and will only use your
                  information to respond to your enquiry.
                </p>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}