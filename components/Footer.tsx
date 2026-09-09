"use client";

import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  ArrowUpRight,
} from "lucide-react";

const columns = [
  {
    title: "Company",
    links: ["About Us", "Our Process", "Careers", "Contact"],
  },
  {
    title: "Services",
    links: [
      "Pharmaceutical R&D",
      "Analytical Testing",
      "Bioanalytical Services",
      "Formulation Development",
    ],
  },
  {
    title: "Resources",
    links: [
      "Research Insights",
      "Publications",
      "Case Studies",
      "FAQ",
    ],
  },
];

export default function Footer() {
  return (
    <footer
      id="contact"
      className="overflow-hidden bg-slate-950 text-white"
    >
      <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">

        {/* Top */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="grid gap-12 lg:grid-cols-[1.3fr_2fr]"
        >
          {/* Brand */}
          <div>
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="flex items-center gap-3"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-cyan-500">
                <span className="text-lg font-bold text-slate-950">
                  P
                </span>
              </div>

              <span className="text-xl font-bold">
                PharmaLab
              </span>
            </motion.div>

            <p className="mt-6 max-w-md leading-7 text-slate-400">
              Advancing pharmaceutical research through scientific
              expertise, innovation, and reliable research solutions.
            </p>

            <div className="mt-8 space-y-4 text-sm text-slate-400">
              <div className="flex items-center gap-3">
                <Mail size={17} className="text-cyan-400" />
                info@pharmalab.com
              </div>

              <div className="flex items-center gap-3">
                <Phone size={17} className="text-cyan-400" />
                +1 000 000 0000
              </div>

              <div className="flex items-center gap-3">
                <MapPin size={17} className="text-cyan-400" />
                Research & Innovation Center
              </div>
            </div>
          </div>

          {/* Columns */}
          <div className="grid gap-10 sm:grid-cols-3">
            {columns.map((column, index) => (
              <motion.div
                key={column.title}
                initial={{
                  opacity: 0,
                  y: 30,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.12,
                }}
              >
                <h3 className="font-semibold text-white">
                  {column.title}
                </h3>

                <ul className="mt-5 space-y-3">
                  {column.links.map((link) => (
                    <li key={link}>
                      <motion.a
                        href="#"
                        whileHover={{ x: 4 }}
                        className="inline-flex items-center gap-1 text-sm text-slate-400 transition hover:text-cyan-400"
                      >
                        {link}
                        <ArrowUpRight size={13} />
                      </motion.a>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Bottom */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-16 flex flex-col gap-4 border-t border-white/10 pt-8 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between"
        >
          <p>
            © 2026 PharmaLab. All rights reserved.
          </p>

          <div className="flex gap-6">
            <a
              href="#"
              className="transition hover:text-cyan-400"
            >
              Privacy Policy
            </a>

            <a
              href="#"
              className="transition hover:text-cyan-400"
            >
              Terms of Service
            </a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}