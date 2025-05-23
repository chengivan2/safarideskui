"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import ThemeToggle from "./ThemeToggle";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [visible, setVisible] = useState(true);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;

      // Determine if we're scrolling up or down
      const isScrollingUp = prevScrollPos > currentScrollPos;

      // Show header when scrolling up or at the top of the page
      // Hide header when scrolling down and past 50px
      setVisible(isScrollingUp || currentScrollPos < 50);

      // Update previous scroll position
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Features", href: "/features" },
    { name: "Pricing", href: "/pricing" },
  ];

  return (
    <header
      className={`fixed top-0 z-50 w-full border-b bg-white/70 dark:bg-gray-900/70 backdrop-blur-md transition-transform duration-300 ${
        visible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
        <a href="/" className="flex items-center gap-1">
          <img
            src="/safaridesk-logo-no-bg.png"
            alt="SafariDesk Logo"
            width={75}
            height={20}
          />
          <span
            className="h-10 flex items-center text-2xl font-bold bg-gradient-to-br from-green-500 via-lime-400 to-orange-400 bg-clip-text text-transparent select-none"
            style={{ lineHeight: "2.5rem" }}
          >
            SafariDesk
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`text-sm font-medium transition-colors hover:text-green-500 ${
                pathname === link.href
                  ? "text-green-500"
                  : "text-gray-700 dark:text-gray-200"
              }`}
            >
              {link.name}
            </a>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <ThemeToggle />
          <a href="/signin">
            <button className="px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-200 hover:text-green-500 dark:hover:text-green-400 transition-colors">
              Sign In
            </button>
          </a>
          <a href="/signup">
            <button className="px-4 py-2 text-sm font-medium text-white bg-green-500 hover:bg-green-600 rounded-md transition-colors">
              Start Your Free Trial
            </button>
          </a>
        </div>

        {/* Mobile Navigation */}
        <div className="flex items-center gap-4 md:hidden">
          <ThemeToggle />
          <button
            className="flex h-9 w-9 items-center justify-center rounded-md md:hidden"
            onClick={toggleMenu}
          >
            {isMenuOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-5 w-5"
              >
                <path d="M18 6 6 18"></path>
                <path d="m6 6 12 12"></path>
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-5 w-5"
              >
                <line x1="4" x2="20" y1="12" y2="12"></line>
                <line x1="4" x2="20" y1="6" y2="6"></line>
                <line x1="4" x2="20" y1="18" y2="18"></line>
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 top-16 z-50 bg-white dark:bg-gray-900 md:hidden">
          <nav className="container flex flex-col gap-6 p-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`text-lg font-medium ${
                  pathname === link.href
                    ? "text-green-500"
                    : "text-gray-700 dark:text-gray-200"
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <div className="flex flex-col gap-4 mt-4">
              <a href="/signin" onClick={() => setIsMenuOpen(false)}>
                <button className="w-full px-4 py-2 text-left text-gray-700 dark:text-gray-200 hover:text-green-500 dark:hover:text-green-400 font-medium transition-colors">
                  Sign In
                </button>
              </a>
              <a href="/signup" onClick={() => setIsMenuOpen(false)}>
                <button className="w-full px-4 py-2 text-white bg-green-500 hover:bg-green-600 rounded-md font-medium transition-colors">
                  Sign Up
                </button>
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
