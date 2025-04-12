import React from "react";

export default function page() {
  return (
    <>
      {/* Features Section */}
      <section className="px-4 py-20 bg-gray-50/50 dark:bg-gray-900/50">
        <div className="container mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Powerful Features for Exceptional Support
            </h2>
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
              Everything you need to manage customer inquiries efficiently and
              provide timely resolutions.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                icon: (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="40"
                    height="40"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-green-500"
                  >
                    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                  </svg>
                ),
                title: "Unified Inbox",
                description:
                  "Manage all customer communications in one centralized location.",
              },
              {
                icon: (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="40"
                    height="40"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-green-500"
                  >
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                    <polyline points="22 4 12 14.01 9 11.01"></polyline>
                  </svg>
                ),
                title: "Automated Workflows",
                description:
                  "Streamline repetitive tasks with customizable automation rules.",
              },
              {
                icon: (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="40"
                    height="40"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-green-500"
                  >
                    <circle cx="12" cy="12" r="10"></circle>
                    <polyline points="12 6 12 12 16 14"></polyline>
                  </svg>
                ),
                title: "SLA Management",
                description:
                  "Track and meet service level agreements with built-in timers and alerts.",
              },
              {
                icon: (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="40"
                    height="40"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-green-500"
                  >
                    <line x1="18" y1="20" x2="18" y2="10"></line>
                    <line x1="12" y1="20" x2="12" y2="4"></line>
                    <line x1="6" y1="20" x2="6" y2="14"></line>
                  </svg>
                ),
                title: "Advanced Analytics",
                description:
                  "Gain insights into team performance and customer satisfaction.",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="relative p-6 rounded-xl bg-white/30 dark:bg-gray-800/30 backdrop-blur-sm border border-white/50 dark:border-gray-700/50 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-xl font-medium mb-2">{feature.title}</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="px-4 py-20">
        <div className="container mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Trusted by Support Teams Worldwide
            </h2>
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
              See what our customers have to say about SafariDesk.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                quote:
                  "SafariDesk has transformed how we handle customer inquiries. The interface is intuitive and the automation features save us hours every day.",
                author: "Sarah Johnson",
                role: "Customer Support Manager, TechCorp",
              },
              {
                quote:
                  "The analytics provided by SafariDesk have helped us identify bottlenecks in our support process and improve our response times by 45%.",
                author: "Michael Chen",
                role: "Operations Director, CloudSystems",
              },
              {
                quote:
                  "We've tried several ticketing systems, but SafariDesk stands out with its ease of use and powerful customization options.",
                author: "Emma Rodriguez",
                role: "Head of Customer Experience, RetailPlus",
              },
            ].map((testimonial, index) => (
              <div
                key={index}
                className="p-6 rounded-xl bg-white/30 dark:bg-gray-800/30 backdrop-blur-sm border border-white/50 dark:border-gray-700/50 shadow-sm"
              >
                <p className="italic mb-6">{testimonial.quote}</p>
                <div>
                  <p className="font-medium">{testimonial.author}</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
