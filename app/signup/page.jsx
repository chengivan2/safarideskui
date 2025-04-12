"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { FiUser, FiMail, FiGlobe } from "react-icons/fi";
import { FaArrowRightLong } from "react-icons/fa6";

export default function SignUp() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [subdomain, setSubdomain] = useState("");
  const [email, setEmail] = useState("");
  const [agreeTerms, setAgreeTerms] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle sign-up logic here
    console.log({ firstName, lastName, companyName, subdomain, email, agreeTerms });
  };

  return (
    <div className="container relative flex min-h-[calc(100vh-4rem)] flex-col items-center justify-center px-4 py-12">
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
          <rect width="100%" height="100%" strokeWidth="0" fill="url(#e813992c-7d03-4cc4-a2bd-151760b470a0)" />
        </svg>
      </div>

      <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[500px]">
        <div className="flex flex-col space-y-2 text-center">
          <div className="mx-auto mb-4">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo-flPCkOIXvJVd6Dy0EV2pRYx4goKdmY.png"
              alt="SafariDesk Logo"
              width={150}
              height={40}
            />
          </div>
          <h1 className="text-2xl font-semibold tracking-tight">Create an account</h1>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Enter your information to get started with SafariDesk
          </p>
        </div>
        <div className="rounded-lg border-2 border-white/50 dark:border-gray-700/50 bg-[#F8F8F8]/20 dark:bg-gray-800/40 backdrop-blur-xl shadow-sm p-8 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-white/30 dark:from-gray-800/10 dark:to-gray-800/30 pointer-events-none"></div>
          <form onSubmit={handleSubmit} className="space-y-4 relative z-10">
            {/* First Name and Last Name */}
            <div className="flex gap-4">
              {/* First Name */}
              <div className="space-y-2 flex-1">
                <label htmlFor="firstName" className="text-sm font-medium leading-none">
                  First Name
                </label>
                <div className="relative">
                  <FiUser className="absolute left-3 top-1/2 transform -translate-y-1/2 text-green-500" />
                  <input
                    id="firstName"
                    placeholder="John"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    required
                    className="w-full pl-10 px-3 py-2 border border-gray-300 dark:border-gray-700 rounded-md bg-white/70 dark:bg-gray-900/70 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-colors"
                  />
                </div>
              </div>

              {/* Last Name */}
              <div className="space-y-2 flex-1">
                <label htmlFor="lastName" className="text-sm font-medium leading-none">
                  Last Name
                </label>
                <div className="relative">
                  <FiUser className="absolute left-3 top-1/2 transform -translate-y-1/2 text-green-500" />
                  <input
                    id="lastName"
                    placeholder="Doe"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    required
                    className="w-full pl-10 px-3 py-2 border border-gray-300 dark:border-gray-700 rounded-md bg-white/70 dark:bg-gray-900/70 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-colors"
                  />
                </div>
              </div>
            </div>

            {/* Company Name */}
            <div className="space-y-2">
              <label htmlFor="companyName" className="text-sm font-medium leading-none">
                Company Name
              </label>
              <div className="relative">
                <FiGlobe className="absolute left-3 top-1/2 transform -translate-y-1/2 text-green-500" />
                <input
                  id="companyName"
                  placeholder="Acme Inc."
                  value={companyName}
                  onChange={(e) => setCompanyName(e.target.value)}
                  required
                  className="w-full pl-10 px-3 py-2 border border-gray-300 dark:border-gray-700 rounded-md bg-white/70 dark:bg-gray-900/70 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-colors"
                />
              </div>
            </div>

            {/* Subdomain */}
            <div className="space-y-2">
              <label htmlFor="subdomain" className="text-sm font-medium leading-none">
                Subdomain
              </label>
              <div className="flex">
                <div className="relative flex-grow">
                  <FiGlobe className="absolute left-3 top-1/2 transform -translate-y-1/2 text-green-500" />
                  <input
                    id="subdomain"
                    placeholder="your-company"
                    value={subdomain}
                    onChange={(e) => setSubdomain(e.target.value)}
                    required
                    className="w-full pl-10 px-3 py-2 border border-gray-300 dark:border-gray-700 rounded-l-md bg-white/70 dark:bg-gray-900/70 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-colors"
                  />
                </div>
                <span className="px-3 py-2 border border-l-0 border-gray-300 dark:border-gray-700 rounded-r-md bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400">
                  .safaridesk.io
                </span>
              </div>
            </div>

            {/* Work Email */}
            <div className="space-y-2">
              <label htmlFor="email" className="text-sm font-medium leading-none">
                Work Email
              </label>
              <div className="relative">
                <FiMail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-green-500" />
                <input
                  id="email"
                  type="email"
                  placeholder="name@company.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full pl-10 px-3 py-2 border border-gray-300 dark:border-gray-700 rounded-md bg-white/70 dark:bg-gray-900/70 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-colors"
                />
              </div>
            </div>

            {/* Terms and Conditions */}
            <div className="flex items-center space-x-2">
              <input
                type="checkbox"
                id="terms"
                checked={agreeTerms}
                onChange={(e) => setAgreeTerms(e.target.checked)}
                required
                className="h-4 w-4 rounded border-gray-300 text-green-500 focus:ring-green-500"
              />
              <label htmlFor="terms" className="text-sm font-medium leading-none">
                I agree to the{" "}
                <Link href="/terms" className="text-green-500 hover:text-green-600">
                  Terms of Service
                </Link>{" "}
                and{" "}
                <Link href="/privacy" className="text-green-500 hover:text-green-600">
                  Privacy Policy
                </Link>
              </label>
            </div>

            {/* Submit Button with Text */}
            <div className="flex justify-end items-center gap-4">
              <span className="text-lg lg:text-xl font-medium text-[#F97316] flex items-center gap-2"
              style={{ fontFamily: "var(--font-shadows-into-light)" }}>
                Your new journey begins here {" "}
                <span><FaArrowRightLong /></span>
              </span>
              <button
                type="submit"
                className="px-4 py-2 bg-green-500 hover:bg-green-600 text-white rounded-md font-medium transition-colors"
              >
                Create Account
              </button>
            </div>
          </form>
        </div>
        <div className="text-center text-sm">
          Already have an account?{" "}
          <Link href="/signin" className="font-medium text-green-500 hover:text-green-600">
            Sign in
          </Link>
        </div>
      </div>
    </div>
  );
}
