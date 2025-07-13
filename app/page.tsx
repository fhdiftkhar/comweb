import { FaCogs, FaPlug, FaPalette, FaCheckCircle } from "react-icons/fa";
import { MdInventory, MdEvent } from "react-icons/md";
import Image from "next/image";

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
              Buidoza
            </h1>
            <p className="text-xl text-gray-700 dark:text-gray-300 mb-8 max-w-xl mx-auto sm:mx-0">
              Building the future with innovative software solutions. We specialize in custom web applications, mobile apps, and digital transformation for modern businesses.
            </p>
            <a
              href="/contact"
              className="inline-block bg-gradient-to-r from-[var(--accent)] to-indigo-500 text-white rounded-full px-10 py-4 font-semibold text-xl shadow-xl hover:scale-105 transition-transform duration-200"
            >
              Get Started
            </a>
          </div>
          <div className="flex-1 flex items-center justify-center">
            <div className="bg-white/70 dark:bg-black/30 rounded-full p-8 shadow-2xl border border-indigo-100 dark:border-indigo-900">
              <Image
                src="/buidoza-logo.svg"
                alt="Buidoza Logo"
                width={200}
                height={60}
                className="drop-shadow-lg"
              />
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="w-full">
          <h2 className="text-3xl font-bold mb-8 accent">Our Services</h2>
          <div className="grid gap-8 sm:grid-cols-3">
            <div className="card flex flex-col items-center text-center hover:scale-105 transition-transform duration-200">
              <FaCogs className="text-3xl mb-3 accent" />
              <h3 className="font-semibold text-lg mb-2">Custom Software</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">Tailored software solutions designed to meet your unique business requirements.</p>
            </div>
            <div className="card flex flex-col items-center text-center hover:scale-105 transition-transform duration-200">
              <FaPlug className="text-3xl mb-3 accent" />
              <h3 className="font-semibold text-lg mb-2">System Integration</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">Seamless integration of your existing systems and third-party applications.</p>
            </div>
            <div className="card flex flex-col items-center text-center hover:scale-105 transition-transform duration-200">
              <FaPalette className="text-3xl mb-3 accent" />
              <h3 className="font-semibold text-lg mb-2">UI/UX Design</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">Modern, intuitive interfaces that enhance user experience and drive engagement.</p>
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="w-full">
          <h2 className="text-3xl font-bold mb-8 accent">Why Choose Buidoza?</h2>
          <ul className="text-left mx-auto max-w-lg space-y-4 text-lg text-gray-700 dark:text-gray-300">
            <li className="flex items-center gap-3"><FaCheckCircle className="accent" /> <span>Proven track record with enterprise clients</span></li>
            <li className="flex items-center gap-3"><FaCheckCircle className="accent" /> <span>Cutting-edge technology stack and methodologies</span></li>
            <li className="flex items-center gap-3"><FaCheckCircle className="accent" /> <span>Dedicated team of experienced developers</span></li>
            <li className="flex items-center gap-3"><FaCheckCircle className="accent" /> <span>24/7 support and maintenance services</span></li>
          </ul>
        </section>

        {/* Portfolio Preview */}
        <section className="w-full">
          <h2 className="text-3xl font-bold mb-8 accent">Featured Projects</h2>
          <div className="grid gap-8 sm:grid-cols-2">
            <div className="card text-left hover:scale-105 transition-transform duration-200">
              <div className="flex items-center gap-3 mb-2">
                <MdInventory className="text-2xl accent" />
                <h3 className="font-semibold text-lg">Enterprise CRM</h3>
              </div>
              <p className="text-gray-600 dark:text-gray-400 text-sm mb-2">Comprehensive customer relationship management system for Fortune 500 companies.</p>
              <a href="/portfolio" className="accent text-sm font-medium hover:underline">View more</a>
            </div>
            <div className="card text-left hover:scale-105 transition-transform duration-200">
              <div className="flex items-center gap-3 mb-2">
                <MdEvent className="text-2xl accent" />
                <h3 className="font-semibold text-lg">E-commerce Platform</h3>
              </div>
              <p className="text-gray-600 dark:text-gray-400 text-sm mb-2">Scalable online marketplace with advanced inventory and payment processing.</p>
              <a href="/portfolio" className="accent text-sm font-medium hover:underline">View more</a>
            </div>
          </div>
          <div className="mt-8">
            <a
              href="/portfolio"
              className="inline-block bg-gradient-to-r from-[var(--accent)] to-indigo-500 text-white rounded-full px-8 py-3 font-semibold text-lg shadow-lg hover:scale-105 transition-transform duration-200"
            >
              View All Projects
            </a>
          </div>
        </section>

        {/* Final Call to Action */}
        <section>
          <div className="flex flex-col items-center gap-4">
            <span className="text-lg text-gray-700 dark:text-gray-300">Ready to transform your business?</span>
            <a
              href="/contact"
              className="inline-block bg-gradient-to-r from-[var(--accent)] to-indigo-500 text-white rounded-full px-12 py-5 font-bold text-2xl shadow-2xl hover:scale-105 transition-transform duration-200"
            >
              Start Your Project
            </a>
          </div>
        </section>
      </main>
    </div>
  );
}
