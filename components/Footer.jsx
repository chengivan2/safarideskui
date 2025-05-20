import { FaLinkedin, FaSquareXTwitter } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="w-full border-t bg-white/70 dark:bg-gray-900/70 backdrop-blur-md">
      <div className="container mx-auto px-4 py-12 md:px-6">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div className="flex flex-col gap-2">
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
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-4">
              Seamless Support, Smarter Solutions for your customer service
              needs.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-medium mb-4">Product</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="/features"
                  className="text-sm text-gray-600 dark:text-gray-400 hover:text-green-500 dark:hover:text-green-400"
                >
                  Features
                </a>
              </li>
              <li>
                <a
                  href="/pricing"
                  className="text-sm text-gray-600 dark:text-gray-400 hover:text-green-500 dark:hover:text-green-400"
                >
                  Pricing
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-medium mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="/documentation"
                  className="text-sm text-gray-600 dark:text-gray-400 hover:text-green-500 dark:hover:text-green-400"
                >
                  Documentation
                </a>
              </li>
              <li>
                <a
                  href="/signup"
                  className="text-sm text-gray-600 dark:text-gray-400 hover:text-green-500 dark:hover:text-green-400"
                >
                  Help Center
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-medium mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="/about"
                  className="text-sm text-gray-600 dark:text-gray-400 hover:text-green-500 dark:hover:text-green-400"
                >
                  About Us
                </a>
              </li>

              <li>
                <a
                  href="/terms"
                  className="text-sm text-gray-600 dark:text-gray-400 hover:text-green-500 dark:hover:text-green-400"
                >
                  Terms & Conditions
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-center border-t mt-12 pt-8">
          <p className="text-sm text-gray-600 dark:text-gray-400">
            &copy; {new Date().getFullYear()} SafariDesk. All rights reserved.
          </p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <a
              href="https://www.linkedin.com/company/safaridesk-ticketing/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-400 hover:text-green-500 dark:hover:text-green-400 transition-colors"
              title="SafariDesk on LinkedIn"
            >
              <FaLinkedin size={20} />
            </a>
            <a
              href="https://x.com/ticketing_sd?s=21&t=uSyZfTP9_xXnl9jl27mQLQ"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-400 hover:text-green-500 dark:hover:text-green-400 transition-colors"
              title="SafariDesk on X"
            >
              <FaSquareXTwitter size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
