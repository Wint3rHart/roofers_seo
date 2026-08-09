"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Calendar, Clock } from "lucide-react";
import { fadeUp, viewportOnce, useReducedMotion } from "../../ui/motion";

/**
 * Author / review byline card — left sidebar, above the Table of Contents.
 */
export default function AuthorCard({
  name = "Omer Ejaz",
  avatar = "/local-seo/author.jpeg",
  dateEdited = "July 20, 2026",
  readTime = "9 Minutes",
}) {
  const reduce = useReducedMotion();

  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={reduce ? false : viewportOnce}
      className="overflow-hidden rounded-2xl border-b-4 border-[#eb5e28] bg-[#252422] p-6"
    >
      <div className="flex items-center gap-4">
        <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-full">
          <Image src={avatar} alt={name} fill className="object-cover" />
        </div>
        <div>
          <p className="sub-heading text-xs font-light text-[#ccc5b9]">
            Written/Reviewed by:
          </p>
          <p className="sub-heading text-base font-bold text-[#fffcf2]">
            {name}
          </p>
        </div>
      </div>

      <div className="mt-5 border-t text-[16px] border-[#403d39] pt-4">
        <div className="flex items-center gap-3">
          <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-md bg-[#eb5e28]">
            <Calendar className="h-4 w-4 text-[#fffcf2]" />
          </span>
          <p className="sub-heading text-[16px] font-bold text-[#fffcf2]">
            Date Edited: {dateEdited}
          </p>
        </div>
      </div>

      <div className="mt-4 border-t border-[#403d39] pt-4">
        <div className="flex items-center gap-3">
          <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-md bg-[#eb5e28]">
            <Clock className="h-4 w-4 text-[#fffcf2]" />
          </span>
          <p className="sub-heading text-[16px] font-bold text-[#fffcf2]">
            Read Time: {readTime}
          </p>
        </div>
      </div>
    </motion.div>
  );
}