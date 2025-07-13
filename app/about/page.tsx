"use client";
import Image from "next/image";
import { FaUserGraduate, FaRocket, FaUsers, FaMagic, FaBolt, FaGlobe } from "react-icons/fa";

export default function About() {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center py-16 px-4 overflow-x-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute top-[-100px] left-[-80px] w-[400px] h-[400px] bg-gradient-to-br from-[var(--accent)] to-indigo-200 opacity-30 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-[-120px] right-[-100px] w-[500px] h-[500px] bg-gradient-to-tr from-indigo-300 to-purple-200 opacity-20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute top-1/2 left-1/2 w-[120vw] h-32 bg-gradient-to-r from-transparent via-[var(--accent)] to-transparent opacity-10 blur-2xl -translate-x-1/2 -translate-y-1/2 animate-pulse" />
      </div>

      {/* Floating Profile Card */}
      <div className="relative flex flex-col items-center mb-12">
        <div className="relative w-40 h-40 rounded-full overflow-hidden shadow-2xl border-8 border-[var(--accent)] bg-white/60 dark:bg-black/40 backdrop-blur-lg animate-float">
          <Image
            src="/profile/about.png"
            alt="Profile photo"
            width={320}
            height={320}
            className="object-cover w-full h-full"
            priority
          />
          <span className="absolute inset-0 rounded-full border-4 border-white/40 animate-glow" />
        </div>
        <h1 className="mt-8 text-4xl sm:text-5xl font-extrabold bg-gradient-to-r from-[var(--accent)] to-indigo-600 bg-clip-text text-transparent drop-shadow-lg relative">
          About Me
          <span className="block h-1 w-24 mx-auto mt-2 bg-gradient-to-r from-[var(--accent)] to-indigo-400 rounded-full animate-pulse" />
        </h1>
      </div>

      {/* Timeline / Story Path */}
      <div className="relative flex flex-col items-center gap-10 max-w-2xl mx-auto mb-12">
        <div className="flex flex-col sm:flex-row items-center gap-6 w-full">
          <div className="flex-shrink-0 flex flex-col items-center">
            <FaUserGraduate className="text-3xl accent mb-2 animate-bounce" />
            <span className="font-bold accent">Student</span>
          </div>
          <div className="flex-1 card bg-white/70 dark:bg-black/30 shadow-lg p-6">
            <p className="text-lg text-gray-700 dark:text-gray-300">Software engineering student passionate about building and learning every day.</p>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row items-center gap-6 w-full">
          <div className="flex-shrink-0 flex flex-col items-center">
            <FaRocket className="text-3xl accent mb-2 animate-bounce" />
            <span className="font-bold accent">3 Years</span>
          </div>
          <div className="flex-1 card bg-white/70 dark:bg-black/30 shadow-lg p-6">
            <p className="text-lg text-gray-700 dark:text-gray-300">3 years of hands-on experience developing powerful Glide apps for real-world needs.</p>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row items-center gap-6 w-full">
          <div className="flex-shrink-0 flex flex-col items-center">
            <FaUsers className="text-3xl accent mb-2 animate-bounce" />
            <span className="font-bold accent">60+ Clients</span>
          </div>
          <div className="flex-1 card bg-white/70 dark:bg-black/30 shadow-lg p-6">
            <p className="text-lg text-gray-700 dark:text-gray-300">Delivered custom solutions to over 60 clients worldwide, each with unique goals and challenges.</p>
          </div>
        </div>
      </div>

      {/* Animated Badges / Superpowers */}
      <div className="flex flex-wrap justify-center gap-4 mb-12">
        <span className="flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-[var(--accent)] to-indigo-400 text-white font-semibold shadow-lg animate-bounce-slow"><FaMagic /> Creative Problem Solver</span>
        <span className="flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-indigo-400 to-purple-400 text-white font-semibold shadow-lg animate-bounce-slow"><FaBolt /> Fast Delivery</span>
        <span className="flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-purple-400 to-[var(--accent)] text-white font-semibold shadow-lg animate-bounce-slow"><FaGlobe /> Global Collaboration</span>
      </div>

      {/* Call to Action */}
      <div className="flex flex-col items-center gap-4 mt-8">
        <span className="text-xl text-gray-700 dark:text-gray-300 font-medium">Let's build something amazing together.</span>
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