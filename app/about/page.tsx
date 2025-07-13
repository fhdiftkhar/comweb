"use client";
import Image from "next/image";
import { FaRocket, FaUsers, FaGlobe, FaCode, FaShieldAlt, FaLightbulb } from "react-icons/fa";

export default function About() {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center py-16 px-4 overflow-x-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute top-[-100px] left-[-80px] w-[400px] h-[400px] bg-gradient-to-br from-[var(--accent)] to-indigo-200 opacity-30 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-[-120px] right-[-100px] w-[500px] h-[500px] bg-gradient-to-tr from-indigo-300 to-purple-200 opacity-20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute top-1/2 left-1/2 w-[120vw] h-32 bg-gradient-to-r from-transparent via-[var(--accent)] to-transparent opacity-10 blur-2xl -translate-x-1/2 -translate-y-1/2 animate-pulse" />
      </div>

      {/* Company Logo Section */}
      <div className="relative flex flex-col items-center mb-12">
        <div className="relative w-40 h-40 rounded-full overflow-hidden shadow-2xl border-8 border-[var(--accent)] bg-white/60 dark:bg-black/40 backdrop-blur-lg animate-float flex items-center justify-center">
          <Image
            src="/buidoza-logo.svg"
            alt="Buidoza Logo"
            width={160}
            height={48}
            className="object-contain"
            priority
          />
          <span className="absolute inset-0 rounded-full border-4 border-white/40 animate-glow" />
        </div>
        <h1 className="mt-8 text-4xl sm:text-5xl font-extrabold bg-gradient-to-r from-[var(--accent)] to-indigo-600 bg-clip-text text-transparent drop-shadow-lg relative">
          About Buidoza
          <span className="block h-1 w-24 mx-auto mt-2 bg-gradient-to-r from-[var(--accent)] to-indigo-400 rounded-full animate-pulse" />
        </h1>
      </div>

      {/* Company Story */}
      <div className="relative flex flex-col items-center gap-10 max-w-2xl mx-auto mb-12">
        <div className="flex flex-col sm:flex-row items-center gap-6 w-full">
          <div className="flex-shrink-0 flex flex-col items-center">
            <FaRocket className="text-3xl accent mb-2 animate-bounce" />
            <span className="font-bold accent">Founded</span>
          </div>
          <div className="flex-1 card bg-white/70 dark:bg-black/30 shadow-lg p-6">
            <p className="text-lg text-gray-700 dark:text-gray-300">Established with a vision to revolutionize digital transformation through innovative software solutions.</p>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row items-center gap-6 w-full">
          <div className="flex-shrink-0 flex flex-col items-center">
            <FaUsers className="text-3xl accent mb-2 animate-bounce" />
            <span className="font-bold accent">50+ Clients</span>
          </div>
          <div className="flex-1 card bg-white/70 dark:bg-black/30 shadow-lg p-6">
            <p className="text-lg text-gray-700 dark:text-gray-300">Successfully delivered projects for clients across various industries, from startups to Fortune 500 companies.</p>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row items-center gap-6 w-full">
          <div className="flex-shrink-0 flex flex-col items-center">
            <FaGlobe className="text-3xl accent mb-2 animate-bounce" />
            <span className="font-bold accent">Global Reach</span>
          </div>
          <div className="flex-1 card bg-white/70 dark:bg-black/30 shadow-lg p-6">
            <p className="text-lg text-gray-700 dark:text-gray-300">Serving clients worldwide with our distributed team of experts and cutting-edge technology solutions.</p>
          </div>
        </div>
      </div>

      {/* Company Values */}
      <div className="flex flex-wrap justify-center gap-4 mb-12">
        <span className="flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-[var(--accent)] to-indigo-400 text-white font-semibold shadow-lg animate-bounce-slow"><FaCode /> Innovation First</span>
        <span className="flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-indigo-400 to-purple-400 text-white font-semibold shadow-lg animate-bounce-slow"><FaShieldAlt /> Quality Assured</span>
        <span className="flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-purple-400 to-[var(--accent)] text-white font-semibold shadow-lg animate-bounce-slow"><FaLightbulb /> Creative Solutions</span>
      </div>

      {/* Call to Action */}
      <div className="flex flex-col items-center gap-4 mt-8">
        <span className="text-xl text-gray-700 dark:text-gray-300 font-medium">Ready to build the future together?</span>
        <a
          href="/contact"
          className="inline-block bg-gradient-to-r from-[var(--accent)] to-indigo-500 text-white rounded-full px-10 py-4 font-bold text-xl shadow-2xl hover:scale-105 transition-transform duration-200 animate-pulse"
        >
          Get in Touch
        </a>
      </div>
    </div>
  );
} 