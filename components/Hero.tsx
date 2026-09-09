"use client";

import { useEffect, useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  FlaskConical,
  Microscope,
} from "lucide-react";

const slides = [
  {
    eyebrow: "Pharmaceutical Research & Innovation",
    title: "Advancing Science.",
    highlight: "Improving Lives.",
    description:
      "Advanced pharmaceutical research, analytical testing, and scientific solutions designed to help organizations accelerate innovation.",
    button: "Explore Services",
    secondary: "Talk to an Expert",
    image: "/images/hero-lab.jpg",
  },
  {
    eyebrow: "Precision. Quality. Discovery.",
    title: "Research Built",
    highlight: "Around Your Goals.",
    description:
      "From early-stage research to analytical development, we deliver scientific solutions designed around complex pharmaceutical challenges.",
    button: "Discover Our Expertise",
    secondary: "Start a Conversation",
    image: "/images/hero-scientist.jpg",
  },
  {
    eyebrow: "Science That Moves Forward",
    title: "Turning Research",
    highlight: "Into Results.",
    description:
      "Partner with experienced scientific teams to accelerate research programs with reliable processes and meaningful insights.",
    button: "Our Research",
    secondary: "Contact Us",
    image: "/images/hero-manufacturing.jpg",
  },
];

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto slide
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((previous) =>
        previous === slides.length - 1 ? 0 : previous + 1
      );
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((previous) =>
      previous === slides.length - 1 ? 0 : previous + 1
    );
  };

  const previousSlide = () => {
    setCurrentSlide((previous) =>
      previous === 0 ? slides.length - 1 : previous - 1
    );
  };

  const slide = slides[currentSlide];

  return (
    <section className="relative min-h-screen overflow-hidden bg-slate-950 pt-20">

      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center transition-all duration-1000 sm:bg-center"
        style={{
          backgroundImage: `url(${slide.image})`,
        }}
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-slate-950/75" />

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/85 to-slate-950/30" />

      {/* Decorative glow */}
      <div className="absolute -right-40 top-20 h-96 w-96 rounded-full bg-cyan-500/20 blur-3xl" />

      <div className="relative mx-auto flex min-h-[calc(100vh-80px)] max-w-7xl items-center px-6 py-20 lg:px-8">

        <div className="max-w-3xl">

          {/* Eyebrow */}
          <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-sm text-cyan-300 backdrop-blur-sm">
            <FlaskConical size={16} />

            {slide.eyebrow}
          </div>

          {/* Heading */}
          <h1
           key={currentSlide}
            className="animate-[fadeIn_0.7s_ease-out] text-4xl font-bold leading-[1.05] tracking-tight text-white sm:text-6xl lg:text-7xl"
          >
            {slide.title}

            <span className="block text-cyan-400">
              {slide.highlight}
            </span>
          </h1>

          {/* Description */}
          <p
            key={`description-${currentSlide}`}
            className="mt-6 max-w-2xl animate-[fadeIn_0.9s_ease-out] text-base leading-7 text-slate-300 sm:mt-7 sm:text-lg sm:leading-8"
          >
            {slide.description}
          </p>

          {/* Buttons */}
          <div className="mt-8 flex flex-col gap-3 sm:mt-10 sm:flex-row sm:gap-4">

            <a
              href="#services"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-cyan-500 px-7 py-3.5 font-semibold text-slate-950 transition hover:bg-cyan-400"
            >
              {slide.button}

              <ArrowUpRight size={18} />
            </a>

            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/5 px-7 py-3.5 font-semibold text-white backdrop-blur-sm transition hover:bg-white/10"
            >
              {slide.secondary}
            </a>

          </div>

          {/* Carousel Controls */}
          <div className="mt-14 flex items-center gap-5">

            {/* Previous */}
            <button
              onClick={previousSlide}
              aria-label="Previous slide"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-white/5 text-white backdrop-blur transition hover:bg-white/10"
            >
              <ArrowLeft size={18} />
            </button>

            {/* Indicators */}
            <div className="flex items-center gap-2">

              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  aria-label={`Go to slide ${index + 1}`}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    currentSlide === index
                      ? "w-8 bg-cyan-400"
                      : "w-2 bg-white/30 hover:bg-white/60"
                  }`}
                />
              ))}

            </div>

            {/* Next */}
            <button
              onClick={nextSlide}
              aria-label="Next slide"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-white/5 text-white backdrop-blur transition hover:bg-white/10"
            >
              <ArrowRight size={18} />
            </button>

          </div>

        </div>

      </div>

      {/* Bottom Research Badge */}
      <div className="absolute bottom-8 right-8 hidden items-center gap-4 rounded-2xl border border-white/10 bg-white/5 px-5 py-4 backdrop-blur-md lg:flex">

        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-400/10">
          <Microscope size={20} className="text-cyan-400" />
        </div>

        <div>
          <p className="text-xs text-slate-400">
            Research Focus
          </p>

          <p className="text-sm font-medium text-white">
            Precision & Innovation
          </p>
        </div>

      </div>

    </section>
  );
}