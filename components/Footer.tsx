"use client";

import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  ArrowUpRight,
} from "lucide-react";

const companyLinks = [
  { label: "About Us", href: "#about" },
  { label: "Our Process", href: "#process" },
  { label: "Careers", href: "#" },
  { label: "Contact", href: "#contact" },
];

const serviceLinks = [
  {
    label: "Regulatory Affairs & Market Access",
    href: "#services",
  },
  {
    label: "Quality Management & Compliance",
    href: "#services",
  },
  {
    label: "Technical & Clinical Documentation",
    href: "#services",
  },
  {
    label: "Product & Process Development",
    href: "#services",
  },
  {
    label: "Risk Management & FMEA",
    href: "#services",
  },
  {
    label: "Scientific & Research Consulting",
    href: "#services",
  },
  {
    label: "Post-Market Surveillance",
    href: "#services",
  },
];

const resourceLinks = [
  { label: "Research Insights", href: "#" },
    /*
  { label: "Publications", href: "#" },
  { label: "Case Studies", href: "#" },
   */ 
  { label: "FAQ", href: "#faq" },
];

function FooterLink({
  label,
  href,
}: {
  label: string;
  href: string;
}) {
  return (
    <li>
      <motion.a
        href={href}
        whileHover={{ x: 4 }}
        transition={{ duration: 0.2 }}
        className="group inline-flex items-start gap-1.5 text-sm leading-6 text-slate-400 transition-colors duration-200 hover:text-cyan-400"
      >
        <span>{label}</span>

        <ArrowUpRight
          size={13}
          className="mt-1 shrink-0 opacity-0 transition-opacity duration-200 group-hover:opacity-100"
        />
      </motion.a>
    </li>
  );
}

export default function Footer() {
  return (
    <footer className="overflow-hidden bg-slate-950 text-white">

      <div className="mx-auto max-w-7xl px-6 py-16 sm:py-20 lg:px-8">

        {/* =====================================================
            MAIN FOOTER
        ====================================================== */}
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
            amount: 0.15,
          }}
          transition={{
            duration: 0.7,
          }}
          className="grid gap-14 lg:grid-cols-[1.15fr_0.7fr_1.65fr_0.8fr] lg:gap-10"
        >

          {/* =================================================
              BRAND / CONTACT
          ================================================== */}
          <div>

            {/* Logo */}
            <motion.a
              href="#"
              whileHover={{
                scale: 1.02,
              }}
              transition={{
                duration: 0.2,
              }}
              className="inline-flex items-center gap-3"
            >
              <div className="flex h-12 w-12 shrink-0 items-center justify-center overflow-hidden rounded-xl bg-white">
                <img
                  src="/images/solunist-logo-transparent-3.png"
                  alt="Solunist Research"
                  className="h-11 w-11 object-contain"
                />
              </div>

              <div>
                <div className="text-lg font-bold tracking-tight text-white">
                  Solunist Research
                </div>
                {/*
                <div className="mt-0.5 text-xs font-medium tracking-wide text-slate-400">
                  Research & Development
                </div>
                */}

              </div>
            </motion.a>

            {/* Description */}
            <p className="mt-6 max-w-sm text-sm leading-7 text-slate-400">
              Advancing pharmaceutical and medical device
              development through scientific expertise, regulatory
              knowledge, and reliable research solutions.
            </p>

            {/* Contact Information */}
            <div className="mt-7 space-y-4">

              <a
                href="mailto:info@solunistresearch.com"
                className="group flex items-center gap-3 text-sm text-slate-400 transition-colors hover:text-cyan-400"
              >
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-white/10 bg-white/[0.03]">
                  <Mail
                    size={16}
                    className="text-cyan-400"
                  />
                </span>

                <span>
                  info@solunistresearch.com
                </span>
              </a>

              <a
                href="tel:+10000000000"
                className="group flex items-center gap-3 text-sm text-slate-400 transition-colors hover:text-cyan-400"
              >
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-white/10 bg-white/[0.03]">
                  <Phone
                    size={16}
                    className="text-cyan-400"
                  />
                </span>

                <span>
                  +1 000 000 0000
                </span>
              </a>

              <div className="flex items-center gap-3 text-sm text-slate-400">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-white/10 bg-white/[0.03]">
                  <MapPin
                    size={16}
                    className="text-cyan-400"
                  />
                </span>

                <span>
                  Pune, Maharashtra, India
                </span>
              </div>

            </div>
          </div>


          {/* =================================================
              COMPANY
          ================================================== */}
          <motion.div
            initial={{
              opacity: 0,
              y: 25,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.5,
              delay: 0.1,
            }}
          >
            <h3 className="text-sm font-semibold uppercase tracking-[0.16em] text-white">
              Company
            </h3>

            <div className="mt-3 h-px w-8 bg-cyan-500" />

            <ul className="mt-6 space-y-3">
              {companyLinks.map((link) => (
                <FooterLink
                  key={link.label}
                  label={link.label}
                  href={link.href}
                />
              ))}
            </ul>
          </motion.div>


          {/* =================================================
              SERVICES
          ================================================== */}
          <motion.div
            initial={{
              opacity: 0,
              y: 25,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.5,
              delay: 0.2,
            }}
          >
            <h3 className="text-sm font-semibold uppercase tracking-[0.16em] text-white">
              Services
            </h3>

            <div className="mt-3 h-px w-8 bg-cyan-500" />

            <ul className="mt-6 grid gap-x-8 gap-y-3 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
              {serviceLinks.map((link) => (
                <FooterLink
                  key={link.label}
                  label={link.label}
                  href={link.href}
                />
              ))}
            </ul>
          </motion.div>


          {/* =================================================
              RESOURCES
          ================================================== */}
          <motion.div
            initial={{
              opacity: 0,
              y: 25,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.5,
              delay: 0.3,
            }}
          >
            <h3 className="text-sm font-semibold uppercase tracking-[0.16em] text-white">
              Resources
            </h3>

            <div className="mt-3 h-px w-8 bg-cyan-500" />

            <ul className="mt-6 space-y-3">
              {resourceLinks.map((link) => (
                <FooterLink
                  key={link.label}
                  label={link.label}
                  href={link.href}
                />
              ))}
            </ul>

            {/* CTA */}
            <div className="mt-8">
              <a
                href="#contact"
                className="group inline-flex items-center gap-2 rounded-lg border border-cyan-400/30 bg-cyan-400/10 px-4 py-2.5 text-sm font-semibold text-cyan-300 transition-all duration-300 hover:border-cyan-400/60 hover:bg-cyan-400/20"
              >
                Talk to an Expert

                <ArrowUpRight
                  size={15}
                  className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </a>
            </div>
          </motion.div>

        </motion.div>


        {/* =====================================================
            FOOTER DIVIDER
        ====================================================== */}
        <div className="mt-16 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />


        {/* =====================================================
            BOTTOM BAR
        ====================================================== */}
        <motion.div
          initial={{
            opacity: 0,
          }}
          whileInView={{
            opacity: 1,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.7,
            delay: 0.2,
          }}
          className="flex flex-col gap-5 pt-8 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between"
        >

          <p>
            © 2026 Solunist Research. All rights reserved.
          </p>

          <div className="flex flex-wrap gap-x-6 gap-y-2">
            <a
              href="#"
              className="transition-colors hover:text-cyan-400"
            >
              Privacy Policy
            </a>

            <a
              href="#"
              className="transition-colors hover:text-cyan-400"
            >
              Terms of Service
            </a>
          </div>

        </motion.div>

      </div>
    </footer>
  );
}