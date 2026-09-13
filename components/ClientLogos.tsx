"use client";

import { motion } from "framer-motion";

const logos = [
  "Startups",
  "Medical Device Manufacturers",
  "Pharma & Biotech Institutions",
  "SaMD Developers",
  "CROs",
];

export default function ClientLogos() {
  const duplicatedLogos = [...logos, ...logos];

  return (
    <section className="overflow-hidden border-y border-slate-200 bg-white py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
            Trusted by Research Teams
          </p>

          <h2 className="mt-3 text-2xl font-bold text-slate-900">
            WHO WE SUPPORT
          </h2>
        </div>

        <div className="relative mt-12 overflow-hidden">

          {/* Left Fade */}
          <div className="absolute left-0 top-0 z-10 h-full w-24 bg-gradient-to-r from-white to-transparent" />

          {/* Right Fade */}
          <div className="absolute right-0 top-0 z-10 h-full w-24 bg-gradient-to-l from-white to-transparent" />

          <motion.div
            className="flex w-max items-center gap-16"
            animate={{
              x: ["0%", "-50%"],
            }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            {duplicatedLogos.map((logo, index) => (
              <div
                key={`${logo}-${index}`}
                className="flex h-16 min-w-[150px] items-center justify-center rounded-xl border border-slate-200 bg-slate-50 px-8"
              >
                <span className="text-lg font-bold tracking-widest text-slate-400">
                  {logo}
                </span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}