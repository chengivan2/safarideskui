import Link from "next/link"
import Image from "next/image"

export default function Footer() {
  return (
    <footer className="w-full border-t bg-white/70 dark:bg-gray-900/70 backdrop-blur-md">
      <div className="container mx-auto px-4 py-12 md:px-6">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div className="flex flex-col gap-2">
            <Link href="/" className="flex items-center gap-2">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo-flPCkOIXvJVd6Dy0EV2pRYx4goKdmY.png"
                alt="SafariDesk Logo"
                width={150}
                height={40}
              />
            </Link>
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-4">
              Seamless Support, Smarter Solutions for your customer service needs.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-medium mb-4">Product</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/features"
                  className="text-sm text-gray-600 dark:text-gray-400 hover:text-green-500 dark:hover:text-green-400"
                >
                  Features
                </Link>
              </li>
              <li>
                <Link
                  href="/pricing"
                  className="text-sm text-gray-600 dark:text-gray-400 hover:text-green-500 dark:hover:text-green-400"
                >
                  Pricing
                </Link>
              </li>
              <li>
                <Link
                  href="/integrations"
                  className="text-sm text-gray-600 dark:text-gray-400 hover:text-green-500 dark:hover:text-green-400"
                >
                  Integrations
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-medium mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/blog"
                  className="text-sm text-gray-600 dark:text-gray-400 hover:text-green-500 dark:hover:text-green-400"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href="/documentation"
                  className="text-sm text-gray-600 dark:text-gray-400 hover:text-green-500 dark:hover:text-green-400"
                >
                  Documentation
                </Link>
              </li>
              <li>
                <Link
                  href="/help"
                  className="text-sm text-gray-600 dark:text-gray-400 hover:text-green-500 dark:hover:text-green-400"
                >
                  Help Center
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-medium mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/about"
                  className="text-sm text-gray-600 dark:text-gray-400 hover:text-green-500 dark:hover:text-green-400"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-sm text-gray-600 dark:text-gray-400 hover:text-green-500 dark:hover:text-green-400"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  href="/careers"
                  className="text-sm text-gray-600 dark:text-gray-400 hover:text-green-500 dark:hover:text-green-400"
                >
                  Careers
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-center border-t mt-12 pt-8">
          <p className="text-sm text-gray-600 dark:text-gray-400">
            &copy; {new Date().getFullYear()} SafariDesk. All rights reserved.
          </p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <Link
              href="/terms"
              className="text-sm text-gray-600 dark:text-gray-400 hover:text-green-500 dark:hover:text-green-400"
            >
              Terms
            </Link>
            <Link
              href="/privacy"
              className="text-sm text-gray-600 dark:text-gray-400 hover:text-green-500 dark:hover:text-green-400"
            >
              Privacy
            </Link>
            <Link
              href="/cookies"
              className="text-sm text-gray-600 dark:text-gray-400 hover:text-green-500 dark:hover:text-green-400"
            >
              Cookies
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
