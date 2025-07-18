"use client";
import { FaBars } from "react-icons/fa";
import { useState } from "react";
import Link from "next/link";

export default function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <>
      {/* Desktop Nav */}
      <nav className="w-full hidden sm:flex justify-center py-6 mb-12 border-b border-black/5 dark:border-white/10 bg-white/60 dark:bg-black/40 backdrop-blur-lg sticky top-0 z-50 shadow-sm">
        <div className="flex gap-8 text-base font-medium">
          <Link href="/" className="hover:accent underline-offset-4 transition-colors hover:text-[var(--accent)]">Home</Link>
          <Link href="/about" className="hover:accent underline-offset-4 transition-colors hover:text-[var(--accent)]">About</Link>
          <Link href="/pricing" className="hover:accent underline-offset-4 transition-colors hover:text-[var(--accent)]">Pricing</Link>
          <Link href="/portfolio" className="hover:accent underline-offset-4 transition-colors hover:text-[var(--accent)]">Portfolio</Link>
          <Link href="/contact" className="hover:accent underline-offset-4 transition-colors hover:text-[var(--accent)]">Contact</Link>
        </div>
      </nav>
      {/* Mobile Floating Nav - Bottom Right */}
      <div className="sm:hidden fixed bottom-6 right-6 z-50 flex flex-col items-end">
        <button
          className="bg-white/80 dark:bg-black/60 backdrop-blur-lg shadow-xl rounded-full w-16 h-16 flex items-center justify-center border-2 border-[var(--accent)] hover:scale-110 transition-transform"
          onClick={() => setMenuOpen((open) => !open)}
          aria-label="Open navigation menu"
        >
          <FaBars className="text-2xl text-[var(--accent)]" />
        </button>
        <div
          className={`transition-all duration-300 ease-in-out flex flex-col items-end gap-4 mt-2 ${menuOpen ? "opacity-100 scale-100" : "opacity-0 scale-75 pointer-events-none"}`}
          style={{
            position: "absolute",
            bottom: "80px",
            right: "0",
            transform: "none",
          }}
        >
          <Link href="/" className="bg-white/90 dark:bg-black/80 rounded-full px-6 py-2 shadow-md border border-[var(--accent)] text-[var(--accent)] font-semibold hover:bg-[var(--accent)] hover:text-white transition">Home</Link>
          <Link href="/about" className="bg-white/90 dark:bg-black/80 rounded-full px-6 py-2 shadow-md border border-[var(--accent)] text-[var(--accent)] font-semibold hover:bg-[var(--accent)] hover:text-white transition">About</Link>
          <Link href="/pricing" className="bg-white/90 dark:bg-black/80 rounded-full px-6 py-2 shadow-md border border-[var(--accent)] text-[var(--accent)] font-semibold hover:bg-[var(--accent)] hover:text-white transition">Pricing</Link>
          <Link href="/portfolio" className="bg-white/90 dark:bg-black/80 rounded-full px-6 py-2 shadow-md border border-[var(--accent)] text-[var(--accent)] font-semibold hover:bg-[var(--accent)] hover:text-white transition">Portfolio</Link>
          <Link href="/contact" className="bg-white/90 dark:bg-black/80 rounded-full px-6 py-2 shadow-md border border-[var(--accent)] text-[var(--accent)] font-semibold hover:bg-[var(--accent)] hover:text-white transition">Contact</Link>
        </div>
      </div>
    </>
  );
} 