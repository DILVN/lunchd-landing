"use client";

import { motion } from "motion/react";
import Logo from "./Logo";

export default function Footer() {
  return (
    <motion.footer
      className="bg-brand text-white px-6 sm:px-8 md:px-12 lg:px-16 xl:px-20 py-16 md:py-20"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <div className="w-full flex flex-col gap-12 md:gap-16">
        {/* Top row - small text and links */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 text-sm">
          <div className="flex items-center gap-6 font-medium">
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
          <div className="flex items-center gap-6 text-white/70">
            <span>Lunchd &copy; 2026</span>
            <span>Made in London</span>
          </div>
        </div>

        {/* Bottom row - BIG logo */}
        <div className="flex items-center justify-center pt-8">
          <Logo className="w-64 sm:w-80 md:w-96 lg:w-[500px]" />
        </div>
      </div>
    </motion.footer>
  );
}
