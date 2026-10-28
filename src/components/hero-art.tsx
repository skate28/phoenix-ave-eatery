"use client";

import { motion, useReducedMotion } from "framer-motion";
import { EggFried, Sandwich, Sparkles } from "lucide-react";
import type { ReactNode } from "react";

import { SpinBadge } from "@/components/spin-badge";
import { cn } from "@/lib/cn";

function Bob({ children, className, delay = 0 }: { children: ReactNode; className?: string; delay?: number }) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      aria-hidden="true"
      className={cn("absolute", className)}
      initial={reduce ? false : { opacity: 0, scale: 0.4 }}
      animate={reduce ? { opacity: 1 } : { opacity: 1, scale: 1, y: [0, -10, 0] }}
      transition={
        reduce
          ? { duration: 0 }
          : {
              opacity: { duration: 0.4, delay: 0.6 + delay },
              scale: { type: "spring", stiffness: 260, damping: 14, delay: 0.6 + delay },
              y: { duration: 3.6, repeat: Infinity, ease: "easeInOut", delay: 1.2 + delay },
            }
      }
    >
      {children}
    </motion.div>
  );
}

const token = "grid place-items-center rounded-full border-[3px] border-ink shadow-[4px_4px_0_0_var(--fs-ink)]";

/** Illustrated counter sign used when there is no hero photo. Icons only, no food photography. */
export function HeroArt({ ringText, center }: { ringText: string; center: string }) {
  const reduce = useReducedMotion();
  return (
    <div className="relative mx-auto aspect-square w-full max-w-[22rem] sm:max-w-[26rem]">
      <div aria-hidden="true" className="sunburst animate-sunburst absolute -inset-[30%] rounded-full" />
      <motion.div
        className="absolute inset-[8%]"
        initial={reduce ? false : { opacity: 0, rotate: -25, scale: 0.7 }}
        animate={{ opacity: 1, rotate: 0, scale: 1 }}
        transition={reduce ? { duration: 0 } : { type: "spring", stiffness: 120, damping: 14, delay: 0.25 }}
      >
        <SpinBadge text={ringText} className="size-full">
          <span className="flex flex-col items-center gap-1 px-2 text-center">
            <Sandwich className="size-14 sm:size-20" strokeWidth={1.6} aria-hidden="true" />
            <span className="font-display text-xs uppercase leading-tight tracking-wider sm:text-sm">{center}</span>
          </span>
        </SpinBadge>
      </motion.div>
      <Bob className="left-0 top-[6%]" delay={0}>
        <span className={cn(token, "size-16 bg-paper text-ink sm:size-20")}>
          <EggFried className="size-8 sm:size-10" strokeWidth={1.75} />
        </span>
      </Bob>
      <Bob className="bottom-[4%] right-0" delay={0.3}>
        <span className={cn(token, "size-14 bg-teal text-cream sm:size-16")}>
          <Sparkles className="size-7 sm:size-8" strokeWidth={1.75} />
        </span>
      </Bob>
    </div>
  );
}
