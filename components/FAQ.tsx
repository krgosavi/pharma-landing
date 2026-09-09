"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "What pharmaceutical services do you provide?",
    answer:
      "We provide pharmaceutical R&D, analytical testing, bioanalytical services, formulation development, quality support, and regulatory support.",
  },
  {
    question: "Can you support early-stage research projects?",
    answer:
      "Yes. Our services can support projects from early research and planning through testing, validation, and final delivery.",
  },
  {
    question: "How do you ensure research quality?",
    answer:
      "We follow structured scientific workflows, defined quality processes, validation procedures, and thorough documentation throughout the project.",
  },
  {
    question: "Can projects be customized according to our requirements?",
    answer:
      "Yes. Research programs can be structured around your scientific objectives, project requirements, timelines, and desired outcomes.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section
      id="faq"
      className="bg-white py-24"
    >
      <div className="mx-auto max-w-4xl px-6 lg:px-8">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center"
        >
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-600">
            FAQ
          </p>

          <h2 className="mt-4 text-4xl font-bold text-slate-900">
            Frequently Asked Questions
          </h2>

          <p className="mt-5 text-slate-600">
            Find answers to common questions about our pharmaceutical
            research and scientific services.
          </p>
        </motion.div>

        {/* FAQ Items */}
        <div className="mt-12 space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <motion.div
                key={faq.question}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.08,
                }}
                className="overflow-hidden rounded-2xl border border-slate-200"
              >
                <button
                  onClick={() =>
                     setOpenIndex(isOpen ? null : index)
                      }
                      aria-expanded={isOpen}
                      aria-controls={`faq-answer-${index}`}
                      className="flex w-full items-center justify-between gap-6 px-6 py-5 text-left"
                >
                  <span
                      id={`faq-question-${index}`}
                      className="font-semibold text-slate-900"
                      >
                      {faq.question}
                  </span>

                  <motion.div
                    id={`faq-answer-${index}`}
                    role="region"
                    aria-labelledby={`faq-question-${index}`}
                    animate={{
                      rotate: isOpen ? 180 : 0,
                    }}
                    transition={{ duration: 0.25 }}
                    className="shrink-0"
                  >
                    <ChevronDown
                      size={20}
                      className="text-cyan-600"
                    />
                  </motion.div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{
                        height: 0,
                        opacity: 0,
                      }}
                      animate={{
                        height: "auto",
                        opacity: 1,
                      }}
                      exit={{
                        height: 0,
                        opacity: 0,
                      }}
                      transition={{
                        duration: 0.3,
                        ease: "easeInOut",
                      }}
                    >
                      <div className="px-6 pb-6 pr-14 text-sm leading-7 text-slate-600">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}