"use client";
import React, { useRef, useState } from "react";
import { useMotionValueEvent, useScroll } from "motion/react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";
import { Tinos } from "next/font/google";

const tinos = Tinos({
  weight: ['400', '700'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-tinos',
});

export const StickyScroll = ({
  content,
  contentClassName,
}: {
  content: {
    title: string;
    description: string;
    content?: React.ReactNode | any;
  }[];
  contentClassName?: string;
}) => {
  const [activeCard, setActiveCard] = useState(0);
  const ref = useRef<any>(null);
  const { scrollYProgress } = useScroll({
    container: ref,
    offset: ["start start", "end start"],
  });
  const cardLength = content.length;

  // Throttle the scroll updates
  const lastUpdate = useRef(0);
  
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const now = Date.now();
    // Increased to 100ms for even better performance
    if (now - lastUpdate.current < 100) return;
    lastUpdate.current = now;

    const cardsBreakpoints = content.map((_, index) => index / cardLength);
    const closestBreakpointIndex = cardsBreakpoints.reduce(
      (acc, breakpoint, index) => {
        const distance = Math.abs(latest - breakpoint);
        if (distance < Math.abs(latest - cardsBreakpoints[acc])) {
          return index;
        }
        return acc;
      },
      0,
    );
    
    setActiveCard(prev => prev !== closestBreakpointIndex ? closestBreakpointIndex : prev);
  });

  const backgroundColors = [
    "#000000",
    "#000000",
    "#000000"
  ];

  return (
    <motion.div
      animate={{
        backgroundColor: backgroundColors[activeCard % backgroundColors.length],
      }}
      transition={{ duration: 0.3 }}
      className="relative flex h-[30rem] justify-center space-x-10 overflow-y-auto rounded-md p-10 scrollbar-hide"
      ref={ref}
    >
      <div className="div relative flex items-start px-4">
        <div className="max-w-2xl">
          {content.map((item, index) => (
            <div key={item.title + index} className="my-20">
              <h2
                className={cn(
                  `${tinos.className} text-3xl font-bold text-slate-100 transition-opacity duration-300`,
                  activeCard === index ? "opacity-100" : "opacity-30"
                )}
              >
                {item.title}
              </h2>
              <p
                className={cn(
                  "text-kg mt-10 max-w-sm text-slate-300 transition-opacity duration-300",
                  activeCard === index ? "opacity-100" : "opacity-30"
                )}
              >
                {item.description}
              </p>
            </div>
          ))}
          <div className="h-40" />
        </div>
      </div>
      <div
        style={{ background: 'transparent' }}
        className={cn(
          "sticky top-10 hidden h-60 w-80 overflow-hidden rounded-md bg-white lg:block",
          contentClassName,
        )}
      >
        {content[activeCard].content ?? null}
      </div>
    </motion.div>
  );
};