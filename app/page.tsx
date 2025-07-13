import { FaCogs, FaPlug, FaPalette, FaCheckCircle } from "react-icons/fa";
import { MdInventory, MdEvent } from "react-icons/md";

export default function Home() {
  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen p-8 gap-20 font-[family-name:var(--font-geist-sans)] w-full overflow-x-hidden">
      {/* Animated Background Shapes */}
      <div className="absolute inset-0 -z-10 pointer-events-none w-full overflow-x-hidden">
        <div className="absolute top-0 left-0 w-[320px] h-[320px] bg-gradient-to-br from-[var(--accent)] to-indigo-200 opacity-30 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-gradient-to-tr from-indigo-300 to-purple-200 opacity-20 rounded-full blur-3xl animate-pulse" />
      </div>

      <main className="flex flex-col gap-20 items-center text-center max-w-3xl mx-auto w-full">
        {/* Hero Section */}
        <section className="flex flex-col sm:flex-row items-center justify-between gap-10 w-full">
          <div className="flex-1">
            <h1 className="text-5xl sm:text-6xl font-extrabold mb-6 bg-gradient-to-r from-[var(--accent)] to-indigo-600 bg-clip-text text-transparent drop-shadow-lg">
              Glide App Development
            </h1>
            <p className="text-xl text-gray-700 dark:text-gray-300 mb-8 max-w-xl mx-auto sm:mx-0">
              I turn your ideas into beautiful, user-friendly mobile and web apps—fast, with no code. Get a modern, custom solution for your business or project using Glide.
            </p>
            <a
              href="/contact"
              className="inline-block bg-gradient-to-r from-[var(--accent)] to-indigo-500 text-white rounded-full px-10 py-4 font-semibold text-xl shadow-xl hover:scale-105 transition-transform duration-200"
            >
              Get in Touch
            </a>
          </div>
          <div className="flex-1 flex items-center justify-center">
            <div className="bg-white/70 dark:bg-black/30 rounded-full p-8 shadow-2xl border border-indigo-100 dark:border-indigo-900">
              <FaCogs className="text-[var(--accent)] text-7xl drop-shadow-lg" />
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="w-full">
          <h2 className="text-3xl font-bold mb-8 accent">Services</h2>
          <div className="grid gap-8 sm:grid-cols-3">
            <div className="card flex flex-col items-center text-center hover:scale-105 transition-transform duration-200">
              <FaCogs className="text-3xl mb-3 accent" />
              <h3 className="font-semibold text-lg mb-2">Custom Glide Apps</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">Tailored mobile & web apps for your unique business needs.</p>
            </div>
            <div className="card flex flex-col items-center text-center hover:scale-105 transition-transform duration-200">
              <FaPlug className="text-3xl mb-3 accent" />
              <h3 className="font-semibold text-lg mb-2">Integrations</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">Connect your Glide app to Google Sheets, APIs, and more.</p>
            </div>
            <div className="card flex flex-col items-center text-center hover:scale-105 transition-transform duration-200">
              <FaPalette className="text-3xl mb-3 accent" />
              <h3 className="font-semibold text-lg mb-2">UI/UX Design</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">Modern, minimal, and user-friendly interfaces for all devices.</p>
            </div>
          </div>
        </section>

        {/* Why Choose Me Section */}
        <section className="w-full">
          <h2 className="text-3xl font-bold mb-8 accent">Why Choose Me?</h2>
          <ul className="text-left mx-auto max-w-lg space-y-4 text-lg text-gray-700 dark:text-gray-300">
            <li className="flex items-center gap-3"><FaCheckCircle className="accent" /> <span>Fast delivery and clear communication</span></li>
            <li className="flex items-center gap-3"><FaCheckCircle className="accent" /> <span>100% no-code expertise with <span className="font-semibold">Glide</span></span></li>
            <li className="flex items-center gap-3"><FaCheckCircle className="accent" /> <span>Modern, minimal, and responsive design</span></li>
            <li className="flex items-center gap-3"><FaCheckCircle className="accent" /> <span>Ongoing support and updates</span></li>
          </ul>
        </section>

        {/* Mini Portfolio Preview */}
        <section className="w-full">
          <h2 className="text-3xl font-bold mb-8 accent">Sample Projects</h2>
          <div className="grid gap-8 sm:grid-cols-2">
            <div className="card text-left hover:scale-105 transition-transform duration-200">
              <div className="flex items-center gap-3 mb-2">
                <MdInventory className="text-2xl accent" />
                <h3 className="font-semibold text-lg">Inventory Manager</h3>
              </div>
              <p className="text-gray-600 dark:text-gray-400 text-sm mb-2">A custom inventory tracking app for small businesses, built with Glide.</p>
              <a href="/portfolio" className="accent text-sm font-medium hover:underline">View more</a>
            </div>
            <div className="card text-left hover:scale-105 transition-transform duration-200">
              <div className="flex items-center gap-3 mb-2">
                <MdEvent className="text-2xl accent" />
                <h3 className="font-semibold text-lg">Event Planner</h3>
              </div>
              <p className="text-gray-600 dark:text-gray-400 text-sm mb-2">An event management solution for organizers, featuring RSVP and scheduling tools.</p>
              <a href="/portfolio" className="accent text-sm font-medium hover:underline">View more</a>
            </div>
          </div>
          <div className="mt-8">
            <a
              href="/portfolio"
              className="inline-block bg-gradient-to-r from-[var(--accent)] to-indigo-500 text-white rounded-full px-8 py-3 font-semibold text-lg shadow-lg hover:scale-105 transition-transform duration-200"
            >
              View Full Portfolio
            </a>
          </div>
        </section>

        {/* Final Call to Action */}
        <section>
          <div className="flex flex-col items-center gap-4">
            <span className="text-lg text-gray-700 dark:text-gray-300">Ready to launch your next app?</span>
            <a
              href="/contact"
              className="inline-block bg-gradient-to-r from-[var(--accent)] to-indigo-500 text-white rounded-full px-12 py-5 font-bold text-2xl shadow-2xl hover:scale-105 transition-transform duration-200"
            >
              Start Your Project Today
            </a>
          </div>
        </section>
      </main>
    </div>
  );
}
