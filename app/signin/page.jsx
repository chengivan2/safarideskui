"use client";

import { useState } from "react";

export default function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle sign in logic here
    console.log({ email, password, rememberMe });
  };

  return (
    <div className="container relative flex min-h-[calc(100vh-4rem)] flex-col items-center justify-center px-4 py-12">
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
          <rect
            width="100%"
            height="100%"
            strokeWidth="0"
            fill="url(#e813992c-7d03-4cc4-a2bd-151760b470a0)"
          />
        </svg>
      </div>

      <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
        <div className="flex flex-col space-y-2 text-center">
          <div className="mx-auto mb-4">
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo-flPCkOIXvJVd6Dy0EV2pRYx4goKdmY.png"
              alt="SafariDesk Logo"
              width={150}
              height={40}
            />
          </div>
          <h1 className="text-2xl font-semibold tracking-tight">
            Welcome back
          </h1>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Enter your email to sign in to your account
          </p>
        </div>
        <div className="rounded-lg border-2 border-white/50 dark:border-gray-700/50 bg-white/40 dark:bg-gray-800/40 backdrop-blur-xl shadow-sm p-8 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-white/30 dark:from-gray-800/10 dark:to-gray-800/30 pointer-events-none"></div>
          <form onSubmit={handleSubmit} className="space-y-4 relative z-10">
            <div className="space-y-2">
              <label
                htmlFor="email"
                className="text-sm font-medium leading-none"
              >
                Email
              </label>
              <input
                id="email"
                type="email"
                placeholder="name@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-700 rounded-md bg-white/70 dark:bg-gray-900/70 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-colors"
              />
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="text-sm font-medium leading-none"
                >
                  Password
                </label>
                <a
                  href="/forgot-password"
                  className="text-sm font-medium text-green-500 hover:text-green-600"
                >
                  Forgot password?
                </a>
              </div>
              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-700 rounded-md bg-white/70 dark:bg-gray-900/70 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-colors"
              />
            </div>
            <div className="flex items-center space-x-2">
              <input
                type="checkbox"
                id="remember"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
                className="h-4 w-4 rounded border-gray-300 text-green-500 focus:ring-green-500"
              />
              <label
                htmlFor="remember"
                className="text-sm font-medium leading-none"
              >
                Remember me
              </label>
            </div>
            <button
              type="submit"
              className="w-full px-4 py-2 bg-green-500 hover:bg-green-600 text-white rounded-md font-medium transition-colors"
            >
              Sign In
            </button>
          </form>
        </div>
        <div className="text-center text-sm">
          Don&apos;t have an account?{" "}
          <a
            href="/signup"
            className="font-medium text-green-500 hover:text-green-600"
          >
            Sign up
          </a>
        </div>
      </div>
    </div>
  );
}
