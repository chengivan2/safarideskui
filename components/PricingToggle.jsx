"use client"

import { useState } from "react"

export default function PricingToggle({ onToggle }) {
  const [isYearly, setIsYearly] = useState(false)

  const handleToggle = () => {
    const newValue = !isYearly
    setIsYearly(newValue)
    onToggle(newValue)
  }

  return (
    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
      <span className={`text-base font-medium ${!isYearly ? "text-green-500" : "text-gray-600 dark:text-gray-400"}`}>
        Monthly
      </span>
      <button
        onClick={handleToggle}
        className="relative inline-flex h-6 w-12 items-center rounded-full bg-gray-200 dark:bg-gray-700 transition-colors focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
        role="switch"
        aria-checked={isYearly}
      >
        <span
          className={`${
            isYearly ? "translate-x-6 bg-green-500" : "translate-x-1 bg-white"
          } inline-block h-4 w-4 transform rounded-full transition-transform`}
        />
      </button>
      <div className="flex items-center gap-2">
        <span className={`text-base font-medium ${isYearly ? "text-green-500" : "text-gray-600 dark:text-gray-400"}`}>
          Yearly
        </span>
        <span className="bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-200 text-xs font-medium px-2 py-1 rounded-full">
          Save 10%
        </span>
      </div>
    </div>
  )
}
