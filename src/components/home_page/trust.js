"use client"
import { motion } from 'framer-motion';
import React from 'react';

const TRUST_STRIP = [
  "Organic leads solution for all your roofing services",
  "Month-to-Month, No Contracts",
  "Built Exclusively for Roofers",
];
const Trust = () => {
    return (
        <div>
             {/* Trust strip — staggered fade-in after the hero */}
      <motion.div
        className="relative  border-[#ccc5b9]/60 bg-[#fffcf2] overflow-hidden"
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1.2, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="mx-auto flex max-w-7xl px-6 py-6 text-sm font-semibold text-[#403d39] lg:px-10">
          <motion.div
            className="flex shrink-0 items-center justify-around gap-6 pr-6 min-w-full"
            animate={{ x: ["0%", "-100%"] }}
            transition={{ ease: "linear", duration: 20, repeat: Infinity }}
          >
            {TRUST_STRIP.map((t, i) => (
              <span key={`orig-${t}-${i}`} className="flex items-center gap-6 whitespace-nowrap">
                {t}
                <span className="text-[#eb5e28]">•</span>
              </span>
            ))}
          </motion.div>

          <motion.div
            className="flex shrink-0 items-center justify-around gap-6 pr-6 min-w-full"
            aria-hidden="true"
            animate={{ x: ["0%", "-100%"] }}
            transition={{ ease: "linear", duration: 20, repeat: Infinity }}
          >
            {TRUST_STRIP.map((t, i) => (
              <span key={`dup-${t}-${i}`} className="flex items-center gap-6 whitespace-nowrap">
                {t}
                <span className="text-[#eb5e28]">•</span>
              </span>
            ))}
          </motion.div>
        </div>
      </motion.div>
        </div>
    );
}

export default Trust;
