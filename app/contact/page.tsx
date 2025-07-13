"use client";
import { useState } from "react";
import Image from "next/image";
import { FaPaperPlane, FaSmileBeam } from "react-icons/fa";

export default function Contact() {
  const [sent, setSent] = useState(false);

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center py-16 px-2 sm:px-4 overflow-x-hidden bg-gradient-to-br from-pink-100 via-indigo-100 to-white dark:from-[#1a1a2e] dark:via-[#23234b] dark:to-[#18181b]">
      {/* Diagonal/Wave Split Background */}
      <svg className="absolute inset-0 w-full h-full -z-10" viewBox="0 0 1440 900" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0,0 L1440,0 L1440,600 Q720,900 0,600 Z" fill="url(#wave)" opacity="0.12" />
        <defs>
          <linearGradient id="wave" x1="0" y1="0" x2="1440" y2="900" gradientUnits="userSpaceOnUse">
            <stop stopColor="#f472b6" />
            <stop offset="1" stopColor="#6366f1" />
          </linearGradient>
        </defs>
      </svg>
      <div className="relative flex flex-col-reverse sm:flex-row items-center justify-center w-full max-w-4xl mx-auto gap-0 sm:gap-8">
        {/* Left: Avatar & Message */}
        <div className="flex-1 flex flex-col items-center justify-center py-10 sm:py-20">
          <div className="relative mb-6">
            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-pink-400 via-indigo-400 to-purple-400 blur-2xl opacity-40 animate-pulse" style={{ filter: 'blur(32px)' }} />
            <div className="relative w-32 h-32 rounded-full overflow-hidden border-4 border-pink-300 shadow-2xl">
              <Image src="/profile/about.png" alt="Avatar" width={256} height={256} className="object-cover w-full h-full" />
            </div>
          </div>
          <h2 className="text-2xl font-bold mb-2 accent text-center">Let&apos;s Connect!</h2>
          <p className="text-base text-gray-700 dark:text-gray-300 text-center max-w-xs mb-4">I love collaborating on new ideas and helping people bring their visions to life. Drop me a message and let&apos;s make something amazing together!</p>
          <div className="flex items-center gap-2 text-pink-400 font-semibold animate-bounce-slow"><FaSmileBeam /> Friendly, Fast Replies!</div>
        </div>
        {/* Right: Contact Form in Portal */}
        <div className="flex-1 flex flex-col items-center justify-center py-10 sm:py-20">
          <div className="relative flex flex-col items-center w-full">
            {/* Glowing Portal Ring */}
            <div className="absolute -top-8 left-1/2 -translate-x-1/2 z-0">
              <svg width="220" height="60" viewBox="0 0 220 60" fill="none"><ellipse cx="110" cy="30" rx="100" ry="18" fill="url(#portal)" opacity="0.25"/><defs><radialGradient id="portal" cx="0.5" cy="0.5" r="0.5" fx="0.5" fy="0.5"><stop stopColor="#f472b6"/><stop offset="1" stopColor="#6366f1"/></radialGradient></defs></svg>
            </div>
            <div className="relative bg-white/80 dark:bg-black/40 backdrop-blur-lg rounded-3xl shadow-2xl border-4 border-pink-300 px-8 py-10 w-full max-w-md animate-float">
              {!sent ? (
                <form className="flex flex-col gap-6" onSubmit={e => { e.preventDefault(); setSent(true); }}>
                  <div className="relative">
                    <input type="text" required placeholder=" " className="peer w-full px-6 py-4 rounded-full border-2 border-transparent focus:border-pink-400 bg-white/90 dark:bg-black/50 shadow-inner focus:shadow-pink-200/40 dark:focus:shadow-pink-400/10 transition-all outline-none text-lg" />
                    <label className="absolute left-6 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none transition-all duration-200 peer-focus:-top-3 peer-focus:left-4 peer-focus:text-xs peer-focus:text-pink-400 peer-placeholder-shown:top-1/2 peer-placeholder-shown:left-6 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 bg-white/80 dark:bg-black/40 px-1">Name</label>
                  </div>
                  <div className="relative">
                    <input type="email" required placeholder=" " className="peer w-full px-6 py-4 rounded-full border-2 border-transparent focus:border-pink-400 bg-white/90 dark:bg-black/50 shadow-inner focus:shadow-pink-200/40 dark:focus:shadow-pink-400/10 transition-all outline-none text-lg" />
                    <label className="absolute left-6 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none transition-all duration-200 peer-focus:-top-3 peer-focus:left-4 peer-focus:text-xs peer-focus:text-pink-400 peer-placeholder-shown:top-1/2 peer-placeholder-shown:left-6 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 bg-white/80 dark:bg-black/40 px-1">Email</label>
                  </div>
                  <div className="relative">
                    <textarea required placeholder=" " rows={4} className="peer w-full px-6 py-4 rounded-2xl border-2 border-transparent focus:border-pink-400 bg-white/90 dark:bg-black/50 shadow-inner focus:shadow-pink-200/40 dark:focus:shadow-pink-400/10 transition-all outline-none text-lg resize-none" />
                    <label className="absolute left-6 top-6 text-gray-400 pointer-events-none transition-all duration-200 peer-focus:-top-3 peer-focus:left-4 peer-focus:text-xs peer-focus:text-pink-400 peer-placeholder-shown:top-6 peer-placeholder-shown:left-6 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 bg-white/80 dark:bg-black/40 px-1">Message</label>
                  </div>
                  <button type="submit" className="mt-2 bg-gradient-to-r from-pink-400 to-indigo-500 text-white rounded-full px-10 py-4 font-bold text-lg shadow-lg hover:scale-105 transition-transform duration-200 active:scale-95 active:shadow-pink-400/40 focus:outline-none focus:ring-4 focus:ring-pink-200 animate-pulse flex items-center gap-2 justify-center">
                    <FaPaperPlane /> Send Message
                  </button>
                </form>
              ) : (
                <div className="flex flex-col items-center gap-4 animate-float">
                  <div className="relative w-20 h-20 mb-2">
                    <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-pink-400 via-indigo-400 to-purple-400 blur-2xl opacity-40 animate-pulse" style={{ filter: 'blur(16px)' }} />
                    <div className="relative w-20 h-20 rounded-full overflow-hidden border-4 border-pink-300 shadow-2xl flex items-center justify-center bg-white/80 dark:bg-black/40">
                      <FaPaperPlane className="text-4xl text-pink-400 animate-bounce" />
                    </div>
                  </div>
                  <span className="text-xl font-bold text-pink-400">Thank you!</span>
                  <span className="text-base text-gray-700 dark:text-gray-300 text-center">Your message has been sent. I&apos;ll get back to you soon.</span>
                  <button onClick={() => setSent(false)} className="mt-2 bg-gradient-to-r from-pink-400 to-indigo-500 text-white rounded-full px-6 py-2 font-semibold shadow-lg hover:scale-105 transition-transform duration-200">Send Another</button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 