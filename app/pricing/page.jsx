"use client";

import { useState } from "react";
import { PiCheckCircle, PiSealCheckFill } from "react-icons/pi";
import Link from "next/link";
import PricingToggle from "@/components/PricingToggle";
import { FaCheck } from "react-icons/fa6";

export default function Pricing() {
  const [isYearly, setIsYearly] = useState(false);

  return (
    <div className="relative">
      {/* Background SVG patterns */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <svg
          className="absolute right-[max(50%,25rem)] top-0 h-[64rem] w-[128rem] -translate-x-1/2 stroke-green-200 [mask-image:radial-gradient(64rem_64rem_at_top,white,transparent)] dark:stroke-green-800/20"
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

      <div className="container mx-auto px-4 py-20">
        <div className="text-center max-w-3xl mx-auto mb-8">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            SafariDesk Ticketing System - Pricing & Features
          </h1>
          <p className="mt-4 text-xl text-gray-600 dark:text-gray-400">
            SafariDesk offers a simple and affordable pricing model designed to
            meet the needs of small to medium-sized teams.
          </p>
        </div>

        <PricingToggle onToggle={setIsYearly} discountPercentage={33} />

        <div className="max-w-xl mx-auto">
          <div className="relative rounded-xl overflow-hidden border-green-500 shadow-lg shadow-green-500/10 border-2 hover:shadow-xl transition-all duration-300 group bg-gradient-to-br from-green-100/60 via-white/40 to-green-200/60 dark:from-gray-800/60 dark:via-gray-900/40 dark:to-green-900/60 backdrop-blur-xl backdrop-saturate-150">
            <div className="p-8 relative z-10 h-full flex flex-col">
              <h3 className="text-2xl font-bold mb-2">Basic</h3>
              <div className="mt-2 flex items-baseline gap-4">
                <span className="text-3xl font-extrabold text-green-600 dark:text-green-400">
                  {isYearly ? "$120" : "$15"}
                </span>
                <span className="text-lg text-gray-600 dark:text-gray-400">
                  per agent / {isYearly ? "year" : "month"}
                </span>
              </div>
              {isYearly && (
                <div className="mt-1 text-green-600 dark:text-green-400 text-base font-semibold">
                  Save 33% with annual billing
                </div>
              )}
              <p className="mt-4 font-bold bg-gradient-to-r from-green-500 via-yellow-400 to-orange-500 bg-clip-text text-transparent">
                <span>
                  <PiSealCheckFill
                    size={24}
                    className="inline-block mr-2 text-green-500"
                  />
                  2 Agents for free for life
                </span>
              </p>
              <ul className="mt-6 space-y-3 flex-grow text-gray-700 dark:text-gray-200">
                <li>Ticket creation and management via email</li>
                <li>SLA management with response time tracking</li>
                <li>Internal notes and team collaboration tools</li>
                <li>Basic reporting and analytics dashboard</li>
                <li>One knowledge base (FAQ/Help Center)</li>
                <li>Automation rules (up to 5)</li>
                <li>File attachments and media support</li>
                <li>Role-based access and permissions</li>
                <li>Email notifications and alerts</li>
                <li>Community support access</li>
              </ul>
              <div className="mt-8">
                <a href="/signup">
                  <button className="cursor-pointer w-full px-6 py-3 rounded-md font-medium bg-green-500 hover:bg-green-600 text-white transition-colors">
                    Start Your Safari
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 max-w-2xl mx-auto text-center">
          <h2 className="text-2xl font-bold mb-4">Additional Information</h2>
          <ul className="text-gray-600 dark:text-gray-400 space-y-2">
            <li>All users receive full access to features, no hidden tiers.</li>
            <li>Designed for ease of use, fast setup, and scalability.</li>
          </ul>
        </div>

        <div className="mt-20 text-center">
          <h2 className="text-2xl font-bold mb-4">
            Ready to Go on a Ticketing Safari?
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mb-6 max-w-2xl mx-auto">
            Contact our sales team to discuss your specific requirements and get
            a tailored quote.
          </p>
          <a href="/contact">
            <button className="px-6 py-3 text-gray-700 dark:text-gray-200 bg-white/70 dark:bg-gray-800/70 hover:bg-white dark:hover:bg-gray-700 border border-gray-300 dark:border-gray-700 rounded-md font-medium transition-colors">
              Contact Sales
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}
