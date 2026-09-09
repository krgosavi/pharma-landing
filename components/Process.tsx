"use client";

import { motion } from "framer-motion";
import {
  Search,
  ClipboardList,
  FlaskConical,
  ShieldCheck,
  CheckCircle2,
} from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Discovery",
    description:
      "We understand your scientific objectives, requirements, challenges, and project scope.",
    icon: Search,
  },
  {
    number: "02",
    title: "Research & Planning",
    description:
      "Our scientific team develops a structured research strategy tailored to your objectives.",
    icon: ClipboardList,
  },
  {
    number: "03",
    title: "Execution",
    description:
      "Research and testing are performed using reliable processes, advanced equipment, and scientific expertise.",
    icon: FlaskConical,
  },
  {
    number: "04",
    title: "Validation",
    description:
      "Results are carefully analyzed and validated against defined quality and performance requirements.",
    icon: ShieldCheck,
  },
  {
    number: "05",
    title: "Delivery",
    description:
      "We deliver clear results, documentation, and actionable scientific insights.",
    icon: CheckCircle2,
  },
];

export default function Process() {
  return (
    <section
      id="process"
      className="relative overflow-hidden bg-slate-50 py-24"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mx-auto max-w-3xl text-center"
        >
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-600">
            Our Process
          </p>

          <h2 className="mt-4 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
            From Discovery to
            <span className="text-cyan-500"> Delivery</span>
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            A structured scientific workflow designed to transform complex
            research challenges into reliable results.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative mt-20">

          {/* Timeline Line */}
          <div className="absolute left-5 top-0 hidden h-full w-px bg-slate-200 md:left-1/2 md:block md:-translate-x-1/2" />

          <motion.div
            initial={{ height: 0 }}
            whileInView={{ height: "100%" }}
            viewport={{ once: true }}
            transition={{ duration: 2, ease: "easeInOut" }}
            className="absolute left-5 top-0 hidden w-px bg-cyan-500 md:left-1/2 md:block md:-translate-x-1/2"
          />

          <div className="space-y-16">
            {steps.map((step, index) => {
              const Icon = step.icon;
              const isLeft = index % 2 === 0;

              return (
                <motion.div
                  key={step.number}
                  initial={{
                    opacity: 0,
                    x: isLeft ? -50 : 50,
                  }}
                  whileInView={{
                    opacity: 1,
                    x: 0,
                  }}
                  viewport={{
                    once: true,
                    amount: 0.3,
                  }}
                  transition={{
                    duration: 0.7,
                    delay: index * 0.1,
                  }}
                  className={`relative flex flex-col md:flex-row ${
                    isLeft ? "md:justify-start" : "md:justify-end"
                  }`}
                >
                  {/* Center Number */}
                  <div className="absolute left-0 top-0 z-10 hidden md:left-1/2 md:flex md:-translate-x-1/2">
                    <motion.div
                      whileHover={{ scale: 1.15 }}
                      className="flex h-12 w-12 items-center justify-center rounded-full border-4 border-slate-50 bg-cyan-500 text-sm font-bold text-slate-950 shadow-lg"
                    >
                      {step.number}
                    </motion.div>
                  </div>

                  {/* Content */}
                  <div
                    className={`w-full md:w-[43%] ${
                      isLeft ? "md:pr-10" : "md:pl-10"
                    }`}
                  >
                    <motion.div
                      whileHover={{ y: -5 }}
                      transition={{ duration: 0.2 }}
                      className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm transition-shadow hover:shadow-xl"
                    >
                      <div className="flex items-start gap-5">
                        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-cyan-50">
                          <Icon
                            size={23}
                            className="text-cyan-600"
                          />
                        </div>

                        <div>
                          <p className="text-sm font-semibold text-cyan-600">
                            Step {step.number}
                          </p>

                          <h3 className="mt-1 text-xl font-bold text-slate-900">
                            {step.title}
                          </h3>

                          <p className="mt-3 text-sm leading-6 text-slate-600">
                            {step.description}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}