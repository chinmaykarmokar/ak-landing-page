"use client";

import { TypewriterEffectSmooth } from "../ui/typewriter-effect";

interface Word {
    text: string;
    className?: string;
}

interface TypewriterEffectSmoothDemoProps {
    words: Word[];
}

export function AnimatedText({
    words
}: TypewriterEffectSmoothDemoProps) {
    return (
        <TypewriterEffectSmooth words={words} />
    );
}