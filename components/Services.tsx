"use client";

import { motion } from "framer-motion";
import {
  FileText,
  ShieldCheck,
  ClipboardCheck,
  FlaskConical,
  AlertTriangle,
  Microscope,
  Activity,
  ArrowUpRight,
  Check,
} from "lucide-react";

const services = [
  {
    icon: FileText,
    title: "Regulatory Affairs & Market Access",
    description:
      "Strategic regulatory guidance and market access support across global pharmaceutical and medical device pathways.",
    points: [
      "FDA 510(k) Strategy & Submission Support",
      "EU MDR / CE Marking & Submission Support",
      "SFDA & TGA Regulatory Strategy",
      "Medical Device Classification",
      "SaMD Regulatory Strategy",
      "Global Regulatory Pathway Selection",
      "Pre-Submission Planning",
      "Regulatory Gap Assessment",
    ],
  },

  {
    icon: ShieldCheck,
    title: "Quality Management & Compliance",
    description:
      "Quality systems and compliance solutions designed to strengthen regulatory readiness and operational excellence.",
    points: [
      "ISO 13485 QMS Implementation",
      "ISO 14971 Risk Management",
      "IEC 62304 Software Lifecycle",
      "IEC 62366 Usability Engineering",
      "Internal & Supplier Audits",
      "CAPA & Change Control",
      "GAP Analysis",
      "Good Documentation Support",
    ],
  },

  {
    icon: ClipboardCheck,
    title: "Technical & Clinical Documentation",
    description:
      "Comprehensive technical and clinical documentation support aligned with regulatory and product requirements.",
    points: [
      "GSPR & Technical Documentation",
      "STED Preparation & Review",
      "Clinical Evaluation Reports (CER)",
      "Risk Management Files",
      "DHF / Design Control",
      "Software V&V Documentation",
      "Labeling & IFU Review",
      "Clinical Literature Review",
    ],
  },

  {
    icon: FlaskConical,
    title: "Product & Process Development",
    description:
      "Development support focused on pharmaceutical products, processes, formulation optimization, and technology transfer.",
    points: [
      "Pharmaceutical Product Lifecycle Management",
      "Novel & Complex Formulation Development",
      "Product & Process Development",
      "Process Optimization",
      "Technical Documentation Support",
      "Scale-Up & Technology Transfer Support",
    ],
  },

  {
    icon: AlertTriangle,
    title: "Risk Management & FMEA",
    description:
      "Structured risk management methodologies to identify, evaluate, control, and reduce product and process risks.",
    points: [
      "FMEA Development & Review",
      "Risk Analysis",
      "Risk Management Plans",
      "Process & Product Risk Assessment",
      "CAPA Management",
      "Complaint Handling Systems",
      "E&L Risk Assessment",
      "Raw Material Risk Assessment",
    ],
  },

  {
    icon: Microscope,
    title: "Scientific & Research Consulting",
    description:
      "Evidence-based scientific expertise supporting research strategy, clinical evaluation, and complex development decisions.",
    points: [
      "Literature Review",
      "Scientific Evidence Assessment",
      "PubMed & Scientific Database Review",
      "Regulatory Literature Search",
      "Clinical Evaluation Support",
      "R&D Consulting for Pharmaceuticals & Medical Devices",
    ],
  },

  {
    icon: Activity,
    title: "Post-Market Surveillance",
    description:
      "Ongoing safety and performance monitoring to support regulatory compliance throughout the product lifecycle.",
    points: [
      "PMS Strategy & Plans",
      "PMCF Strategy",
      "PSUR Preparation",
      "Complaint Trending",
      "MAUDE & Regulatory Database Analysis",
    ],
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="bg-slate-50 py-24"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        {/* Section Heading */}
        <motion.div
          initial={{
            opacity: 0,
            y: 40,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.3,
          }}
          transition={{
            duration: 0.7,
          }}
          className="mx-auto max-w-3xl text-center"
        >
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-600">
            Our Services
          </p>

          <h2 className="mt-4 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
            Comprehensive
            <span className="text-cyan-500">
              {" "}
              Pharmaceutical And MedTech Solutions
            </span>
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            From regulatory strategy and quality management to
            product development, scientific consulting, and
            post-market surveillance, we provide specialized
            support across the product lifecycle.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <motion.article
                key={service.title}
                initial={{
                  opacity: 0,
                  y: 50,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                  amount: 0.1,
                }}
                transition={{
                  duration: 0.55,
                  delay: index * 0.08,
                }}
                whileHover={{
                  y: -8,
                }}
                className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white p-7 shadow-sm transition-shadow duration-300 hover:shadow-xl"
              >

                {/* Decorative background */}
                <motion.div
                  initial={{
                    scale: 0,
                  }}
                  whileInView={{
                    scale: 1,
                  }}
                  viewport={{
                    once: true,
                  }}
                  transition={{
                    duration: 0.8,
                    delay: index * 0.08,
                  }}
                  className="absolute -right-10 -top-10 h-28 w-28 rounded-full bg-cyan-50"
                />

                <div className="relative flex h-full flex-col">

                  {/* Icon */}
                  <motion.div
                    whileHover={{
                      scale: 1.1,
                      rotate: -4,
                    }}
                    className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-slate-100 transition-colors duration-300 group-hover:bg-cyan-50"
                  >
                    <Icon
                      size={25}
                      className="text-cyan-600"
                    />
                  </motion.div>

                  {/* Title */}
                  <h3 className="mt-7 text-xl font-bold leading-7 text-slate-900">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="mt-4 text-sm leading-6 text-slate-600">
                    {service.description}
                  </p>

                  {/* Divider */}
                  <div className="my-6 h-px w-full bg-slate-100" />

                  {/* Service Points */}
                  <ul className="space-y-3">
                    {service.points.map((point, pointIndex) => (
                      <motion.li
                        key={point}
                        initial={{
                          opacity: 0,
                          x: -10,
                        }}
                        whileInView={{
                          opacity: 1,
                          x: 0,
                        }}
                        viewport={{
                          once: true,
                        }}
                        transition={{
                          duration: 0.3,
                          delay:
                            index * 0.08 +
                            pointIndex * 0.04,
                        }}
                        className="flex items-start gap-3 text-sm leading-6 text-slate-600"
                      >
                        <span className="mt-1 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-cyan-50">
                          <Check
                            size={11}
                            strokeWidth={3}
                            className="text-cyan-600"
                          />
                        </span>

                        <span>{point}</span>
                      </motion.li>
                    ))}
                  </ul>

                  {/* Bottom CTA */}
                  <div className="mt-auto pt-7">
                    <div className="flex items-center gap-2 text-sm font-semibold text-cyan-600 transition-all duration-300 group-hover:gap-3">
                      Explore Service
                      <ArrowUpRight size={16} />
                    </div>

                    {/* Hover line */}
                    <div className="mt-4 h-1 w-0 rounded-full bg-cyan-500 transition-all duration-300 group-hover:w-12" />
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}