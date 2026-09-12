"use client";

import { motion } from "framer-motion";
import {
  FlaskConical,
  ShieldCheck,
  Lightbulb,
} from "lucide-react";

const values = [
  {
    icon: FlaskConical,
    title: "Scientific Excellence",
    description:
      "Combining scientific expertise, advanced methodologies, and rigorous research practices to deliver meaningful results.",
  },
  {
    icon: ShieldCheck,
    title: "Quality & Compliance",
    description:
      "Structured processes and quality-focused workflows designed to maintain accuracy, reliability, and consistency.",
  },
  {
    icon: Lightbulb,
    title: "Innovation Driven",
    description:
      "We continuously explore better technologies, methods, and approaches to solve complex pharmaceutical challenges.",
  },
];

export default function About() {
  return (
    <section
      id="about"
      className="bg-white py-24"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="mx-auto max-w-3xl text-center"
        >
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-600">
            About Solunist Research
          </p>
          
          <h2 className="mt-4 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
            From Research & Development to
            <span className="text-cyan-500"> Global Compliance</span>
          </h2>
          
          <p className="mt-6 text-lg leading-8 text-slate-600">
            Solunist Research is a science-driven consulting firm helping organizations transform innovative ideas into practical, compliant, and market-ready solutions. We bring together scientific expertise, industry knowledge, regulatory insight, and a practical approach to help our clients navigate complex challenges across healthcare and life sciences.
            {/*From innovation and development to compliance and market readiness, we work alongside our clients to create solutions that are credible, effective, and built for real-world success.*/}
          </p>

          <p className="max-w-3xl text-lg leading-8 text-slate-600">
            {/*Solunist Research is a science-driven consulting firm helping organizations transform innovative ideas into practical, compliant, and market-ready solutions. We bring together scientific expertise, industry knowledge, regulatory insight, and a practical approach to help our clients navigate complex challenges across healthcare and life sciences.*/}
            From innovation and development to compliance and market readiness, we work alongside our clients to create solutions that are credible, effective, and built for real-world success.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {values.map((value, index) => {
            const Icon = value.icon;

            return (
              <motion.div
                key={value.title}
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
                  amount: 0.2,
                }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.15,
                }}
                whileHover={{
                  y: -8,
                }}
                className="group rounded-2xl border border-slate-200 bg-white p-8 shadow-sm transition-shadow duration-300 hover:shadow-xl"
              >
                <motion.div
                  whileHover={{
                    scale: 1.08,
                    rotate: 3,
                  }}
                  className="flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-50"
                >
                  <Icon
                    size={26}
                    className="text-cyan-600"
                  />
                </motion.div>

                <h3 className="mt-6 text-xl font-bold text-slate-900">
                  {value.title}
                </h3>

                <p className="mt-4 leading-7 text-slate-600">
                  {value.description}
                </p>

                <div className="mt-6 h-1 w-0 rounded-full bg-cyan-500 transition-all duration-300 group-hover:w-12" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}