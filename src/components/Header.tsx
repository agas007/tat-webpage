"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? "bg-background/95 dark:bg-card/95 backdrop-blur-md shadow-sm py-4" 
          : "bg-background dark:bg-card py-6"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <div className="flex items-center justify-center w-10 h-10 rounded-full bg-brand-blue text-white font-bold text-xl group-hover:bg-brand-blue-dark transition-colors border-2 border-transparent group-hover:border-white/20">
            TAT
          </div>
          <span className="font-bold text-xl tracking-tight text-foreground hidden sm:block">
            & Partners
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8 text-sm font-semibold">
          <Link href="#tentang" className="text-foreground hover:text-brand-blue transition-colors">
            Siapa Kami
          </Link>
          <Link href="#layanan" className="text-foreground hover:text-brand-blue transition-colors">
            Keahlian Kami
          </Link>
          <Link href="#tim" className="text-foreground hover:text-brand-blue transition-colors">
            Kepemimpinan
          </Link>
          <Link href="#wawasan" className="text-foreground hover:text-brand-blue transition-colors">
            Wawasan
          </Link>
        </nav>

        {/* Desktop CTA & Theme Toggle */}
        <div className="flex items-center gap-4">
          <div className="hidden md:flex items-center gap-4">
            <Link 
              href="/dashboard" 
              className="text-sm font-semibold text-foreground hover:text-brand-blue transition-colors"
            >
              Portal Login
            </Link>
            <Link 
              href="#konsultasi" 
              className="px-5 py-2.5 rounded-xl bg-brand-blue text-white text-sm font-medium hover:bg-brand-blue-dark transition-all transform hover:-translate-y-0.5 shadow-md hover:shadow-lg active:scale-95"
            >
              Hubungi Kami
            </Link>
          </div>
          
          <div className="flex items-center gap-2">
            <ThemeToggle />

            {/* Mobile menu button */}
            <button 
              className="lg:hidden p-2 text-brand-dark dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      <div 
        className={`absolute top-full left-0 w-full bg-white dark:bg-brand-dark shadow-xl py-6 px-6 lg:hidden flex flex-col gap-4 border-t border-gray-100 dark:border-gray-800 transition-all duration-300 origin-top ${
          isMobileMenuOpen ? "scale-y-100 opacity-100 visible" : "scale-y-0 opacity-0 invisible"
        }`}
      >
        <Link href="#tentang" className="text-base font-semibold text-gray-700 dark:text-gray-200 hover:text-brand-blue" onClick={() => setIsMobileMenuOpen(false)}>Siapa Kami</Link>
        <Link href="#layanan" className="text-base font-semibold text-gray-700 dark:text-gray-200 hover:text-brand-blue" onClick={() => setIsMobileMenuOpen(false)}>Keahlian Kami</Link>
        <Link href="#tim" className="text-base font-semibold text-gray-700 dark:text-gray-200 hover:text-brand-blue" onClick={() => setIsMobileMenuOpen(false)}>Kepemimpinan</Link>
        <Link href="#wawasan" className="text-base font-semibold text-gray-700 dark:text-gray-200 hover:text-brand-blue" onClick={() => setIsMobileMenuOpen(false)}>Wawasan</Link>
        <div className="pt-4 border-t border-gray-100 dark:border-gray-800 flex flex-col gap-4">
          <Link href="/dashboard" className="text-base font-semibold text-gray-700 dark:text-gray-200 hover:text-brand-blue" onClick={() => setIsMobileMenuOpen(false)}>Login Portal</Link>
          <Link href="#konsultasi" className="px-5 py-3 rounded-xl bg-brand-blue text-white text-center font-bold shadow-lg shadow-brand-blue/20" onClick={() => setIsMobileMenuOpen(false)}>Hubungi Kami Sekarang</Link>
        </div>
      </div>
    </header>
  );
}
