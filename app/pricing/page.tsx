"use client";
import { useRef } from "react";
import { FaRocket, FaStar, FaBriefcase, FaCrown } from "react-icons/fa";

const tiers = [
  {
    name: "Starter",
    price: "$199",
    icon: <FaRocket className="text-3xl text-cyan-400 mb-2" />,
    features: [
      "Basic Glide app setup",
      "Up to 2 screens",
      "Email support",
      "1 revision"
    ],
    color: "from-cyan-400 to-blue-300",
    highlight: false,
    fun: "Perfect for launching your first idea!",
  },
  {
    name: "Pro",
    price: "$399",
    icon: <FaStar className="text-3xl text-yellow-400 mb-2" />,
    features: [
      "Custom features",
      "Up to 5 screens",
      "Priority support",
      "3 revisions"
    ],
    color: "from-yellow-400 to-orange-400",
    highlight: true,
    fun: "Our most popular plan!",
  },
  {
    name: "Business",
    price: "$799",
    icon: <FaBriefcase className="text-3xl text-purple-400 mb-2" />,
    features: [
      "Advanced integrations",
      "Up to 10 screens",
      "Dedicated support",
      "Unlimited revisions"
    ],
    color: "from-purple-400 to-indigo-400",
    highlight: false,
    fun: "For growing teams and big ideas.",
  },
  {
    name: "Enterprise",
    price: "Custom",
    icon: <FaCrown className="text-3xl text-pink-400 mb-2" />,
    features: [
      "Full custom solution",
      "Unlimited screens",
      "24/7 support",
      "White-glove onboarding"
    ],
    color: "from-pink-400 to-red-400",
    highlight: false,
    fun: "Tailored for your unique needs.",
  },
];

export default function Pricing() {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <div ref={containerRef} className="relative min-h-screen flex flex-col items-center justify-center py-16 px-4 overflow-x-hidden">
      {/* Parallax Animated Background */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute top-[-100px] left-[-80px] w-[400px] h-[400px] bg-gradient-to-br from-cyan-400 to-blue-200 opacity-30 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-[-120px] right-[-100px] w-[500px] h-[500px] bg-gradient-to-tr from-pink-300 to-purple-200 opacity-20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute top-1/2 left-1/2 w-[120vw] h-32 bg-gradient-to-r from-transparent via-yellow-400 to-transparent opacity-10 blur-2xl -translate-x-1/2 -translate-y-1/2 animate-pulse" />
      </div>
      <h1 className="text-4xl sm:text-5xl font-extrabold mb-12 mt-12 bg-gradient-to-r from-[var(--accent)] to-indigo-600 bg-clip-text text-transparent drop-shadow-lg relative z-20">
        Pricing
      </h1>
      {/* Animated Connections */}
      <svg className="absolute hidden lg:block left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-0" width="900" height="300" viewBox="0 0 900 300" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M 120 150 Q 225 50 350 150 T 780 150" stroke="#6366f1" strokeWidth="6" strokeDasharray="12 12" opacity="0.18" />
      </svg>
      <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4 w-full max-w-6xl relative z-10">
        {tiers.map((tier) => (
          <div
            key={tier.name}
            className={`group relative card flex flex-col items-center text-center p-8 transition-transform duration-300 hover:scale-110 hover:rotate-2 shadow-2xl border-4 ${tier.highlight ? 'border-yellow-400 bg-gradient-to-br from-yellow-100/60 to-orange-100/60 dark:from-yellow-400/20 dark:to-orange-400/10' : 'border-transparent'} ${tier.highlight ? 'z-20 scale-110 shadow-[0_8px_40px_0_rgba(251,191,36,0.18)]' : ''} bg-gradient-to-br ${tier.color} bg-opacity-30 dark:bg-opacity-40 backdrop-blur-lg`}
            style={{ top: tier.highlight ? '-24px' : '0' }}
          >
            <div className="mb-4">{tier.icon}</div>
            <h2 className={`text-2xl font-bold mb-2 ${tier.highlight ? 'text-yellow-500' : 'accent'}`}>{tier.name}</h2>
            <div className={`text-3xl font-extrabold mb-4 ${tier.highlight ? 'text-yellow-500' : 'accent'}`}>{tier.price}</div>
            <ul className="mb-6 space-y-2 text-gray-700 dark:text-gray-300">
              {tier.features.map((f) => (
                <li key={f} className="flex items-center gap-2 justify-center">
                  <span className="inline-block w-2 h-2 rounded-full bg-[var(--accent)]"></span>
                  {f}
                </li>
              ))}
            </ul>
            {/* Fun fact on hover */}
            <div className="absolute left-1/2 -translate-x-1/2 bottom-24 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 translate-y-4 transition-all duration-300 pointer-events-none select-none">
              <span className="inline-block bg-white/90 dark:bg-black/80 text-[var(--accent)] font-semibold px-4 py-2 rounded-full shadow-lg border border-[var(--accent)] animate-bounce-slow text-xs whitespace-nowrap">{tier.fun}</span>
            </div>
            {tier.highlight && (
              <span className="absolute -top-5 left-1/2 -translate-x-1/2 bg-yellow-400 text-white text-xs font-bold px-4 py-1 rounded-full shadow-lg animate-pulse">Most Popular</span>
            )}
            <a
              href="/contact"
              className={`mt-auto inline-block bg-gradient-to-r from-[var(--accent)] to-indigo-500 text-white rounded-full px-6 py-2 font-semibold shadow-lg hover:scale-110 transition-transform duration-200 ${tier.highlight ? 'text-lg animate-pulse' : ''}`}
            >
              {tier.price === 'Custom' ? 'Contact Us' : 'Get Started'}
            </a>
            {/* Confetti for Most Popular on hover */}
            {tier.highlight && (
              <span className="absolute inset-0 pointer-events-none group-hover:opacity-100 opacity-0 transition-opacity duration-300">
                <svg className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2" width="120" height="60" viewBox="0 0 120 60" fill="none"><circle cx="20" cy="20" r="4" fill="#fde68a"/><circle cx="60" cy="10" r="3" fill="#fbbf24"/><circle cx="100" cy="25" r="4" fill="#f59e42"/><circle cx="40" cy="40" r="2" fill="#fbbf24"/><circle cx="80" cy="35" r="3" fill="#fde68a"/></svg>
              </span>
            )}
          </div>
        ))}
      </div>
      {/* Sticky Glowing CTA Bar */}
      <div className="fixed bottom-0 left-0 w-full z-50 flex justify-center pointer-events-none">
        <div className="pointer-events-auto bg-gradient-to-r from-[var(--accent)] to-indigo-500 text-white rounded-t-2xl px-8 py-4 shadow-2xl flex items-center gap-4 animate-pulse">
          <span className="font-bold text-lg">Ready to get started?</span>
          <a href="/contact" className="bg-white text-[var(--accent)] font-bold px-6 py-2 rounded-full shadow-lg hover:scale-110 transition-transform duration-200">Contact Me</a>
        </div>
      </div>
    </div>
  );
} 