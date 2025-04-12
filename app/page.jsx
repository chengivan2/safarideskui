"use client";

import { useState } from "react";

import { TypeAnimation } from "react-type-animation";

export default function Home() {
  
  

  return (
    <div className="relative">
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <svg
          className="absolute left-[max(50%,25rem)] top-0 h-[64rem] w-[128rem] -translate-x-1/2 stroke-green-200 [mask-image:radial-gradient(64rem_64rem_at_top,white,transparent)] dark:stroke-green-800/20"
          aria-hidden="true"
        >
          <defs>
            <pattern
              id="e813992c-7d03-4cc4-a2bd-151760b470a0"
              width="200"
              height="200"
              x="50%"
              y="-1"
              patternUnits="userSpaceOnUse"
            >
              <path d="M100 200V.5M.5 .5H200" fill="none" />
            </pattern>
          </defs>
          <svg
            x="50%"
            y="-1"
            className="overflow-visible fill-green-50 dark:fill-green-900/20"
          >
            <path
              d="M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M-300.5 600h201v201h-201Z"
              strokeWidth="0"
            />
          </svg>
          <rect
            width="100%"
            height="100%"
            strokeWidth="0"
            fill="url(#e813992c-7d03-4cc4-a2bd-151760b470a0)"
          />
        </svg>
      </div>

      <section className="relative flex flex-col justify-center items-center px-4 py-24 md:py-32">
        <div className="container mx-auto text-center max-w-4xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-[1.4] tracking-normal">
            SafariDesk is a Simple Yet Powerful Ticketing System for Exceptional
            Customer Support
          </h1>
          <p className="text-2xl md:text-3xl text-gray-600 dark:text-gray-400 mb-[8rem] max-w-2xl mx-auto leading-[1.2]">
            Designed for customer support teams across industries{" "}
            <TypeAnimation
              sequence={[
                "schools.",
                2000,
                "SMBs.",
                2000,
                "real estate.",
                2000,
                "healthcare.",
                2000,
                "logistics.",
                2000,
                "and more.",
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              className="text-green-500 font-semibold"
            />
          </p>

          <div className="relative w-full max-w-3xl mx-auto rounded-xl overflow-hidden shadow-2xl">
            <div className="relative rounded-xl overflow-hidden bg-white/30 dark:bg-gray-800/30 backdrop-blur-lg border border-white/50 dark:border-gray-700/50">
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <div className="h-3 w-3 rounded-full bg-red-500"></div>
                    <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
                    <div className="h-3 w-3 rounded-full bg-green-500"></div>
                  </div>
                  <div className="text-sm font-medium">
                    SafariDesk Dashboard
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="h-8 bg-green-100 dark:bg-green-900/20 rounded-md w-3/4"></div>
                  <div className="grid grid-cols-3 gap-4">
                    <div className="h-24 bg-green-100 dark:bg-green-900/20 rounded-md"></div>
                    <div className="h-24 bg-green-100 dark:bg-green-900/20 rounded-md"></div>
                    <div className="h-24 bg-green-100 dark:bg-green-900/20 rounded-md"></div>
                  </div>
                  <div className="h-32 bg-green-100 dark:bg-green-900/20 rounded-md"></div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="h-16 bg-green-100 dark:bg-green-900/20 rounded-md"></div>
                    <div className="h-16 bg-green-100 dark:bg-green-900/20 rounded-md"></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/50 to-white/80 dark:via-black/50 dark:to-black/80 pointer-events-none"></div>
          </div>
        </div>
      </section>
    </div>
  );
}
