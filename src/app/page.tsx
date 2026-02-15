'use client'

import { AnimatedText } from "@/components/animatedText/animatedText";
import { Navbar } from "@/components/floatingNavbar/floatingNavbar";
import { StickyScrollComponent } from "@/components/stickyScroll/stickyScroll";
import { Button } from "@/components/ui/button";
import { DottedGlowBackground } from "@/components/ui/dotted-glow-background";
import { FocusCards } from "@/components/ui/focus-cards";

import { Tinos } from "next/font/google";

const tinos = Tinos({
  weight: ['400', '700'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-tinos',
});

const Home = () => {
  const words = [
    {
      text: "Born",
      className: "text-xl md:text-xl lg:text-xl xl:text-4xl text-white",
    },
    {
      text: "in",
      className: "text-xl md:text-xl lg:text-xl xl:text-4xl text-white",
    },
    {
      text: "fire,",
      // className: "font-bold bg-gradient-to-r from-red-700 to-yellow-300 bg-clip-text text-transparent",
      className: "text-xl md:text-xl lg:text-xl xl:text-4xl text-yellow-500",
    },
    {
      text: "forged",
      className: "text-xl md:text-xl lg:text-xl xl:text-4xl text-white",
    },
    {
      text: "by",
      className: "text-xl md:text-xl lg:text-xl xl:text-4xl text-white",
    },
    {
      text: "trust",
      // className: "font-bold bg-gradient-to-r from-red-700 to-yellow-300 bg-clip-text text-transparent",
      className: "text-xl md:text-xl lg:text-xl xl:text-4xl text-orange-600",
    },

  ];

  return (
    <>
      <Navbar />

      <div className="relative flex w-full h-[100vh] items-center justify-center rounded-md rounded-tl-3xl rounded-br-3xl rounded-bl-3xl border border-transparent px-4 shadow ring-1 shadow-black/10 ring-black/5 dark:shadow-white/10 dark:ring-white/5">
        <div className="absolute inset-0 z-20 flex flex-col items-center justify-center gap-2 text-white">
          <h1 className={`${tinos.className} text-3xl font-bold md:text-5xl`}>
            Agnikriti
          </h1>

          <AnimatedText words={words} />

          <br />

          <div className="flex flex-col gap-3 items-center">
            <h2
              className="text-white text-xl font-semibold"
            >
              Reach out to us
            </h2>

            <div className="flex gap-4 items-center justify-center">
              <Button
                asChild
                className="w-[50%] bg-gradient-to-r from-orange-700 to-yellow-300 text-black px-10 py-6 font-semibold text-xl rounded-4xl"
              >
                <a href="mailto:admin@agnikriti.com">Over email</a>
              </Button>

              <Button
                asChild
                className="w-[50%] bg-gradient-to-r from-yellow-300 to-orange-700 text-black px-10 py-6 font-semibold text-xl rounded-4xl"
              >
                <a href="tel:+919082401725">On call</a>
              </Button>
            </div>
          </div>

        </div>

        <DottedGlowBackground
          className="pointer-events-none mask-radial-to-90% mask-radial-at-center"
          opacity={0.7}
          gap={12}
          radius={2}
          colorLightVar="--color-blue-500"
          glowColorLightVar="--color-blue-600"
          colorDarkVar="--color-yellow-500"
          glowColorDarkVar="--color-yellow-300"
          backgroundOpacity={0}
          speedMin={0.3}
          speedMax={1.6}
          speedScale={1}
        />
      </div>

      <StickyScrollComponent />

      <div
        className="flex flex-col gap-4 items-center justify-center py-20"
      >
        <h1
          className="text-5xl font-bold text-white"
        >
          Our Team
        </h1>

        <br />

        <hr
          className="w-30 border-t-4 border-orange-500 rounded-full"
        />

        <br />

        <FocusCards
          cards={
            [
              {
                name: "Tanmoy Karmokar",
                title: "Co-founder, Backend Developer",
                description: "Tanmoy is software developer with expertise in building scalable and reliable real-world backend systems, he brings a wealth of experience to the team and believes in robust product delivery and excellence.",
                imageUrl: "/assets/tanmoy.jpg",
                linkedinUrl: "https://www.linkedin.com/in/tanmoy-karmokar-4178918b/",
              },
              {
                name: "Ranjan Jadhav",
                title: "Co-founder, Backend Developer",
                description: "A software developer by profession, Ranjan has strong interest in AI technologies. He emphasises on solving real world problems with the help of AI and contribute positively and impactfully to the society.",
                imageUrl: "/assets/ranjan.png",
                linkedinUrl: "https://www.linkedin.com/in/ranjan-jadhav-a4b231b2/",
              },
              {
                name: "Vishal Gupta",
                title: "Co-founder, Manager",
                description: "Vishal is a developer by profession, he looks after the managerial and operational aspects of the company. With his strong organizational skills and strategic mindset.",
                imageUrl: "/assets/vishal.png",
                linkedinUrl: "https://www.linkedin.com/in/vishal-gupta-7960761a8/",
              },
              {
                name: "Chinmay Karmokar",
                title: "Co-founder, Web and App Developer",
                description: "Chinmay is a software developer experienced in building web and mobile applications. The face of the company is what he believes in, and he is committed to it by building user friendly interfaces and experiences.",
                imageUrl: "/assets/chinmay.jpg",
                linkedinUrl: "https://www.linkedin.com/in/chinmay-karmokar-b0042b174/",
              },
            ]
          }
        />
        {/* </div> */}
      </div>
    </>
  )
}

export default Home;