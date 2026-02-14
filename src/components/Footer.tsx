"use client";

import { motion } from "motion/react";
import Logo from "./Logo";

export default function Footer() {
  return (
    <motion.footer
      className="bg-brand text-white px-6 sm:px-8 md:px-12 lg:px-16 xl:px-20 py-12 md:py-16"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto flex flex-col gap-8">
        {/* Top row */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          <Logo className="w-48 md:w-56 lg:w-64" />
          <div className="flex items-center gap-8 text-sm font-medium">
            <a
              href="https://www.instagram.com/lunchdapp/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-70 transition-opacity duration-300"
            >
              Instagram
            </a>
            <a
              href="https://x.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-70 transition-opacity duration-300"
            >
              X
            </a>
            <a
              href="mailto:hello@lunchd.app"
              className="hover:opacity-70 transition-opacity duration-300"
            >
              say hi
            </a>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-white/10" />

        {/* Bottom row */}
        <div className="flex items-center justify-center text-sm text-white/50">
          <span>&copy; 2025, Lunchd by APT53. All rights reserved.</span>
        </div>
      </div>
    </motion.footer>
  );
}
