"use client";

import { useState } from "react";
import Link from "next/link";
import PricingToggle from "@/components/PricingToggle";
import { TypeAnimation } from "react-type-animation";

export default function Home() {
  const [isYearly, setIsYearly] = useState(false);

  const basePlans = [
    {
      name: "Starter",
      monthlyPrice: "$10",
      yearlyPrice: "$100",
      description:
        "Perfect for small teams just getting started with customer support.",
      features: [
        "3 max domains",
        "5 max agents",
        "Unlimited storage",
      ],
      cta: "Start Your Safari",
      popular: false,
    },
    {
      name: "Professional",
      monthlyPrice: "$15",
      yearlyPrice: "$150",
      description: "Ideal for growing teams with moderate support volume.",
      features: [
        "6 max domains",
        "10 max agents",
        "Unlimited storage",
        "All the core features",
        "Mobile version",
      ],
      cta: "Start Your Safari",
      popular: true,
    },
    {
      name: "Enterprise",
      monthlyPrice: "$25",
      yearlyPrice: "$265",
      description: "For large organizations with complex support requirements.",
      features: [
        "10 max domains",
        "Unlimited agents",
        "Unlimited storage",
        "Expedited support",
        "Mobile version",
      ],
      cta: "Start Your Safari",
      popular: false,
    },
  ];

  // const trustedCompanies = [
  //   { name: "Adobe", logo: "/placeholder.svg?height=40&width=40" },
  //   { name: "Dell", logo: "/placeholder.svg?height=40&width=40" },
  //   { name: "VMware", logo: "/placeholder.svg?height=40&width=40" },
  //   { name: "IBM", logo: "/placeholder.svg?height=40&width=40" },
  //   { name: "Samsung", logo: "/placeholder.svg?height=40&width=40" },
  //   { name: "HP", logo: "/placeholder.svg?height=40&width=40" },
  // ];

  return (
    <div className="relative">
      {/* Background SVG patterns */}
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

      {/* Hero Section */}
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
          {/* Dashboard mockup */}
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
            {/* Gradient overlay that gets darker from top to bottom */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/50 to-white/80 dark:via-black/50 dark:to-black/80 pointer-events-none"></div>
          </div>

          {/* <div className="mt-16">
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-6">
              Trusted by thousands of companies across 50+ countries
            </p>
            <div className="flex flex-wrap justify-center items-center gap-8 opacity-70">
              {trustedCompanies.map((company, index) => (
                <div key={index} className="flex items-center justify-center">
                  <Image
                    src={company.logo || "/placeholder.svg"}
                    alt={company.name}
                    width={40}
                    height={40}
                    className="grayscale"
                  />
                </div>
              ))}
            </div>
          </div> */}
        </div>
      </section>

        
      {/* <section className="px-4 py-20">
        <div className="container mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Frequently Asked Questions
            </h2>
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
              Find answers to common questions about SafariDesk.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:gap-12 max-w-5xl mx-auto">
            {[
              {
                question: "How does SafariDesk help improve customer support?",
                answer:
                  "SafariDesk centralizes all customer communications, automates routine tasks, provides real-time analytics, and ensures timely responses through SLA management, helping teams deliver faster and more effective support.",
              },
              {
                question: "Can I integrate SafariDesk with my existing tools?",
                answer:
                  "Yes, SafariDesk offers seamless integration with popular tools including CRM systems, communication platforms, and analytics software through our API and pre-built connectors.",
              },
              {
                question: "Is SafariDesk suitable for small businesses?",
                answer:
                  "Our Starter plan is specifically designed for small teams, offering essential features at an affordable price point while still providing the ability to scale as your business grows.",
              },
              {
                question: "How secure is my customer data with SafariDesk?",
                answer:
                  "We take security seriously. SafariDesk employs industry-standard encryption, regular security audits, and complies with major data protection regulations to ensure your customer data remains secure.",
              },
              {
                question: "Can I customize the ticketing workflow?",
                answer:
                  "Yes, SafariDesk offers highly customizable workflows. You can create custom ticket statuses, set up automated routing rules, design approval processes, and configure notifications to match your team's specific needs.",
              },
              {
                question: "What kind of support does SafariDesk provide?",
                answer:
                  "All plans include access to our comprehensive knowledge base and community forum. The Professional plan adds email and chat support, while Enterprise customers receive priority support with dedicated account management.",
              },
            ].map((faq, index) => (
              <div
                key={index}
                className="space-y-2 p-6 rounded-xl bg-white/30 dark:bg-gray-800/30 backdrop-blur-sm border border-white/50 dark:border-gray-700/50 shadow-sm"
              >
                <h3 className="text-xl font-medium">{faq.question}</h3>
                <p className="text-gray-600 dark:text-gray-400">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>*/}

     {/* CTA Section 
      <section className="px-4 py-20 bg-green-50/50 dark:bg-green-900/20">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Ready to Go on a Ticketing Safari?
            </h2>
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-400 mb-8">
              Join thousands of companies that use SafariDesk to deliver
              exceptional customer service.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link href="/signup">
                <button className="px-6 py-3 text-white bg-green-500 hover:bg-green-600 rounded-md font-medium transition-colors">
                  Start Your Safari
                </button>
              </Link>
              <Link href="/pricing">
                <button className="px-6 py-3 text-gray-700 dark:text-gray-200 bg-white dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 border border-gray-300 dark:border-gray-700 rounded-md font-medium transition-colors">
                  View Pricing
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section> */}
    </div>
  );
}
