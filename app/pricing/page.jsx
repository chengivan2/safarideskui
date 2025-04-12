"use client"

import { useState } from "react"
import Link from "next/link"
import PricingToggle from "@/components/PricingToggle"

export default function Pricing() {
  const [isYearly, setIsYearly] = useState(false)

  const basePlans = [
    {
      name: "Basic",
      monthlyPrice: "$10",
      yearlyPrice: "$100",
      priceUnit: "per agent",
      description: "Perfect for small teams just getting started with customer support.",
      features: [
        "3 max domains",
        "5 max agents",
        "Unlimited storage",
      ],
      cta: "Start Your Safari",
      popular: false,
    },
    {
      name: "Standard",
      monthlyPrice: "$15",
      yearlyPrice: "$150",
      priceUnit: "per agent",
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
      priceUnit: "per agent",
      description: "For large organizations with complex support requirements.",
      features: [
        "10 max domains",
        "Unlimited agents",
        "Unlimited storage",
        "Expedited support",
        "Mobile version",
      ],
      cta: "Contact Sales",
      popular: false,
    },
  ]

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
          <svg x="50%" y="-1" className="overflow-visible fill-green-50 dark:fill-green-900/20">
            <path
              d="M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M-300.5 600h201v201h-201Z"
              strokeWidth="0"
            />
          </svg>
          <rect width="100%" height="100%" strokeWidth="0" fill="url(#e813992c-7d03-4cc4-a2bd-151760b470a0)" />
        </svg>
      </div>

      <div className="container mx-auto px-4 py-20">
        <div className="text-center max-w-3xl mx-auto mb-8">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">Simple, Transparent Pricing</h1>
          <p className="mt-4 text-xl text-gray-600 dark:text-gray-400">
            Choose the plan that's right for your team. All plans include a 14-day free trial.
          </p>
        </div>

        <PricingToggle onToggle={setIsYearly} discountPercentage={10} />

        <div className="grid gap-8 md:grid-cols-3">
          {basePlans.map((plan, index) => (
            <div
              key={index}
              className={`relative rounded-xl overflow-hidden ${
                plan.popular
                  ? "bg-white/40 dark:bg-gray-800/40 border-green-500 shadow-lg shadow-green-500/10"
                  : "bg-white/30 dark:bg-gray-800/30 border-white/50 dark:border-gray-700/50 shadow-sm"
              } backdrop-blur-xl border-2 hover:shadow-xl transition-all duration-300 group`}
            >
              {plan.popular && (
                <div className="absolute top-0 right-0 bg-green-500 text-white px-4 py-1 text-sm font-medium">
                  Most Popular
                </div>
              )}
              {isYearly && (
                <div className="absolute top-0 left-0 bg-green-500 text-white px-4 py-1 text-sm font-medium">
                  Save 10%
                </div>
              )}
              <div className="p-8 relative z-10 h-full flex flex-col">
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-white/20 dark:from-gray-800/5 dark:to-gray-800/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <h3 className="text-2xl font-bold">{plan.name}</h3>
                <div className="mt-4 flex items-baseline">
                  <span className="text-4xl font-extrabold">{isYearly ? plan.yearlyPrice : plan.monthlyPrice}</span>
                  <span className="ml-1 text-xl text-gray-600 dark:text-gray-400">
                    {plan.priceUnit}/{isYearly ? "year" : "month"}
                  </span>
                </div>
                {isYearly && plan.name !== "Enterprise" && (
                  <div className="mt-2 text-sm text-green-600 dark:text-green-400">
                    Save $
                    {Number.parseInt(plan.monthlyPrice.substring(1)) * 12 -
                      Number.parseInt(plan.yearlyPrice.substring(1))}{" "}
                    per agent annually
                  </div>
                )}
                <p className="mt-4 text-gray-600 dark:text-gray-400">{plan.description}</p>
                <ul className="mt-6 space-y-3 flex-grow">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-green-500 mr-2 flex-shrink-0 mt-0.5"
                      >
                        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                        <polyline points="22 4 12 14.01 9 11.01"></polyline>
                      </svg>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-8">
                  <Link href={plan.name === "Enterprise" ? "/contact" : "/signup"}>
                    <button
                      className={`cursor-pointer w-full px-6 py-3 rounded-md font-medium transition-colors ${
                        plan.popular
                          ? "bg-green-500 hover:bg-green-600 text-white"
                          : "bg-white/70 dark:bg-gray-800/70 hover:bg-white dark:hover:bg-gray-700 text-gray-700 dark:text-gray-200 border border-gray-300 dark:border-gray-700"
                      }`}
                    >
                      {plan.cta}
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold tracking-tight">Frequently Asked Questions</h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:gap-12">
            {[
              {
                question: "Can I switch plans later?",
                answer:
                  "Yes, you can upgrade or downgrade your plan at any time. Changes will be reflected in your next billing cycle.",
              },
              {
                question: "Is there a setup fee?",
                answer:
                  "No, there are no setup fees for any of our plans. You only pay the monthly or annual subscription fee.",
              },
              {
                question: "Do you offer annual billing?",
                answer: "Yes, we offer annual billing with a 10% discount compared to monthly billing.",
              },
              {
                question: "What payment methods do you accept?",
                answer: "We accept all major credit cards, PayPal, and bank transfers for annual plans.",
              },
              {
                question: "Can I cancel my subscription?",
                answer:
                  "Yes, you can cancel your subscription at any time. There are no long-term contracts or cancellation fees.",
              },
              {
                question: "Do you offer a free trial?",
                answer:
                  "Yes, all plans come with a 14-day free trial. No credit card required to start your safari with us.",
              },
            ].map((faq, index) => (
              <div key={index} className="space-y-2">
                <h3 className="text-xl font-medium">{faq.question}</h3>
                <p className="text-gray-600 dark:text-gray-400">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-20 text-center">
          <h2 className="text-2xl font-bold mb-4">Ready to Go on a Ticketing Safari?</h2>
          <p className="text-gray-600 dark:text-gray-400 mb-6 max-w-2xl mx-auto">
            Contact our sales team to discuss your specific requirements and get a tailored quote.
          </p>
          <Link href="/contact">
            <button className="px-6 py-3 text-gray-700 dark:text-gray-200 bg-white/70 dark:bg-gray-800/70 hover:bg-white dark:hover:bg-gray-700 border border-gray-300 dark:border-gray-700 rounded-md font-medium transition-colors">
              Contact Sales
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}
