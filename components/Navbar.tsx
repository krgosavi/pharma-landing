"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { useState } from "react";

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "Process", href: "#process" },
  { name: "FAQ", href: "#faq" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{
        duration: 0.7,
        ease: "easeOut",
      }}
      className="fixed left-0 right-0 top-0 z-50 border-b border-white/10 bg-slate-950/85 backdrop-blur-xl"
    >
      <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-8">

        {/* Logo */}
        <motion.a
          href="#"
          whileHover={{ scale: 1.03 }}
          className="flex items-center gap-3"
        >
          <div className="relative h-10 w-10 overflow-hidden rounded-xl">
              <img
                src="/images/solunist-logo-transparent-3.png"
                alt="Solunist Research & Development"
                className="h-11 w-auto object-contain"
              />
          </div>
          
          <div>
          
            <span className="text-lg font-bold tracking-tight text-white">
              Solunist Research
            </span>
              {/*
            <span className="ml-2 hidden text-xs text-slate-400 sm:inline">
              Research & Development
            </span>
            */}
          </div>
        </motion.a>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link, index) => (
            <motion.a
              key={link.name}
              href={link.href}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.2 + index * 0.08,
                duration: 0.4,
              }}
              className="text-sm font-medium text-slate-300 transition hover:text-cyan-400"
            >
              {link.name}
            </motion.a>
          ))}
        </div>

        {/* Desktop CTA */}
        <motion.a
          href="#contact"
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.97 }}
          className="hidden items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-slate-950 transition hover:bg-cyan-400 md:flex"
        >
          Contact Us
          <ArrowUpRight size={16} />
        </motion.a>

        {/* Mobile Button */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
           aria-label={mobileOpen ? "Close menu" : "Open menu"}
           aria-expanded={mobileOpen}
           aria-controls="mobile-navigation"
           className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 text-white md:hidden"
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            id="mobile-navigation"
            initial={{
              opacity: 0,
              height: 0,
            }}
            animate={{
              opacity: 1,
              height: "auto",
            }}
            exit={{
              opacity: 0,
              height: 0,
            }}
            transition={{
              duration: 0.3,
              ease: "easeInOut",
            }}
            className="overflow-hidden border-t border-white/10 bg-slate-950 md:hidden"
          >
            <div className="space-y-1 px-6 py-5">
              {navLinks.map((link, index) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{
                    delay: index * 0.07,
                  }}
                  className="block rounded-xl px-4 py-3 text-slate-300 transition hover:bg-white/5 hover:text-cyan-400"
                >
                  {link.name}
                </motion.a>
              ))}

              <motion.a
                href="#contact"
                onClick={() => setMobileOpen(false)}
                className="mt-3 flex items-center justify-center gap-2 rounded-xl bg-cyan-500 px-5 py-3 font-semibold text-slate-950"
              >
                Contact Us
                <ArrowUpRight size={17} />
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}