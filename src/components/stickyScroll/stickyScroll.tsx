"use client";

import { StickyScroll } from "../ui/sticky-scroll-reveal";
import { BsFire } from "react-icons/bs";
import { FaShieldAlt } from "react-icons/fa";
import { GiTwoCoins } from "react-icons/gi";

const content = [
    {
        title: "What is Agnikriti?",
        description: "We are a team of passionate developers who are here to assist your businesses take-off in the digital landscape. We understand the challenges that come with building and scaling a successful online presence, and we're here to help you navigate those challenges with trust and ease.",
        content: (
            <div className="flex h-full w-full items-center justify-center text-white">
                <BsFire
                    className="text-orange-500 drop-shadow-[0_0_15px_rgba(255,255,0,0.8)]"
                    size={150}
                />
            </div>
        )
    },
    {
        title: "Why us?",
        description: "Simple reason - we know how delicate trust is, and that is something you should be least worried about when you are building your online presence. So we are someone you can trust, someone who is here to help you build your online presence with ease and confidence. We are committed to providing you with the best possible service and support.",
        content: (
            <div className="flex h-full w-full items-center justify-center text-white">
                <FaShieldAlt
                    className="text-blue-500 drop-shadow-[0_0_15px_rgba(102,204,255,0.8)]"
                    size={150}
                />
            </div>
        ),
    },
    {
        title: "But what about the pricing?",
        description: "We'll charge you in a way which wouldn't burn a hole in your pocket, and that is something we can guarantee. We understand that every business has different needs and budgets, which is why we offer flexible pricing plans that are designed to fit your specific requirements. Whether you're a small startup or a large enterprise, we have a plan that will work for you.",
        content: (
            <div className="flex h-full w-full items-center justify-center text-white">
                <GiTwoCoins
                    className="text-white-500 drop-shadow-[0_0_15px_rgba(255,255,255,0.8)]"
                    size={150}
                />
            </div>
        ),
    },
];
export function StickyScrollComponent() {
    return (
        <div className="w-full py-4">
            <StickyScroll content={content} />
        </div>
    );
}
