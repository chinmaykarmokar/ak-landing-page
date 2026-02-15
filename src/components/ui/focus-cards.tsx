"use client";

import React, { useState } from "react";
import { cn } from "@/lib/utils";
import { Tinos } from "next/font/google";
import Link from "next/link";
import { FaLinkedin } from "react-icons/fa";

const tinos = Tinos({
  weight: ['400', '700'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-tinos',
});

export const Card = React.memo(
  ({
    card,
    index,
    hovered,
    setHovered,
  }: {
    card: any;
    index: number;
    hovered: number | null;
    setHovered: React.Dispatch<React.SetStateAction<number | null>>;
  }) => (
    <div
      onMouseEnter={() => setHovered(index)}
      onMouseLeave={() => setHovered(null)}
      className={cn(
        "rounded-xl relative bg-gray-100 dark:bg-neutral-900 overflow-hidden h-[70vh] md:h-96 w-full transition-all duration-300 ease-out",
        hovered !== null && hovered !== index && "blur-sm scale-[0.98]"
      )}
    >
      <img
        src={card.imageUrl}
        alt={card.name}
        className="object-cover object-center absolute inset-0 w-full h-full"
      />
      <div
        className={cn(
          "absolute inset-0 bg-black/50 flex items-end py-8 px-4 transition-opacity duration-300",
          hovered === index ? "opacity-100" : "opacity-0"
        )}
      >
        <div
          className="flex flex-col gap-2"
        >
          <h1 className={`${tinos.className} font-medium text-xl md:text-3xl bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-200`}>
            {card.name}
          </h1>

          <hr
            className="w-16 border-t-2 border-white rounded-full"
          />

          <div className="text-sm font-medium bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-200">
            {card.title}
          </div>
          <div className="text-sm bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-200">
            {card.description}
          </div>
          <div>
            <Link href={card.linkedinUrl} target="_blank" rel="noopener noreferrer">
              <FaLinkedin 
                className="text-white"
                size={30}
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
);

Card.displayName = "Card";

type Card = {
  name: string;
  title: string;
  description: string;
  imageUrl: string;
  linkedinUrl: string;
};

export function FocusCards({ cards }: { cards: Card[] }) {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-10 max-w-7xl mx-auto px-4 md:px-8 w-full">
      {cards.map((card, index) => (
        <Card
          key={card.name}
          card={card}
          index={index}
          hovered={hovered}
          setHovered={setHovered}
        />
      ))}
    </div>
  );
}