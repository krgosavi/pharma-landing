"use client";

import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const stats = [
  {
    number: 8,
    suffix: "+",
    label: "Years of Expertise",
  },
  {
    number: 250,
    suffix: "+",
    label: "Research Projects",
  },
  {
    number: 40,
    suffix: "+",
    label: "Global Clients",
  },
  {
    number: 98,
    suffix: "%",
    label: "On-Time Delivery",
  },
];

function AnimatedNumber({
  number,
  suffix,
}: {
  number: number;
  suffix: string;
}) {
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = ref.current;

    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStarted(true);
        }
      },
      { threshold: 0.5 }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!started) return;

    let startTime: number | null = null;
    const duration = 1800;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;

      const progress = Math.min(
        (timestamp - startTime) / duration,
        1
      );

      const easedProgress =
        1 - Math.pow(1 - progress, 3);

      setCount(Math.floor(easedProgress * number));

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [started, number]);

  return (
    <div ref={ref}>
      {count}
      {suffix}
    </div>
  );
}

export default function Stats() {
  return (
    <section className="relative overflow-hidden bg-slate-950 py-24">

      {/* Glow */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.08, 0.15, 0.08],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute left-1/2 top-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-500 blur-3xl"
      />

      <div className="relative mx-auto grid max-w-7xl grid-cols-2 gap-y-14 px-6 lg:grid-cols-4 lg:px-8">
        {stats.map((stat, index) => (
          <motion.div
            key={stat.label}
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
              amount: 0.4,
            }}
            transition={{
              duration: 0.6,
              delay: index * 0.12,
            }}
            className="text-center"
          >
            <div className="text-4xl font-bold tracking-tight text-cyan-400 sm:text-5xl">
              <AnimatedNumber
                number={stat.number}
                suffix={stat.suffix}
              />
            </div>

            <div className="mt-3 text-sm text-slate-400">
              {stat.label}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}