"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

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
        isScrolled ? "bg-white/95 backdrop-blur-md shadow-sm py-4" : "bg-white py-6"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <div className="flex items-center justify-center w-10 h-10 rounded-full bg-brand-blue text-white font-bold text-xl group-hover:bg-brand-blue-dark transition-colors">
            TAT
          </div>
          <span className="font-bold text-xl tracking-tight text-brand-dark hidden sm:block">
            & Partners
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          <Link href="#tentang" className="text-sm font-medium text-gray-600 hover:text-brand-blue transition-colors">
            Siapa Kami
          </Link>
          <Link href="#layanan" className="text-sm font-medium text-gray-600 hover:text-brand-blue transition-colors">
            Keahlian Kami
          </Link>
          <Link href="#tim" className="text-sm font-medium text-gray-600 hover:text-brand-blue transition-colors">
            Kepemimpinan
          </Link>
          <Link href="#wawasan" className="text-sm font-medium text-gray-600 hover:text-brand-blue transition-colors">
            Wawasan
          </Link>
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center gap-4">
          <Link 
            href="/dashboard" 
            className="text-sm font-medium text-brand-dark hover:text-brand-blue transition-colors flex items-center gap-1"
          >
            Portal Login
          </Link>
          <Link 
            href="#konsultasi" 
            className="px-5 py-2.5 rounded-full bg-brand-blue text-white text-sm font-medium hover:bg-brand-blue-dark transition-all transform hover:-translate-y-0.5 shadow-md hover:shadow-lg"
          >
            Hubungi Kami
          </Link>
        </div>

        {/* Mobile menu button */}
        <button 
          className="md:hidden p-2 text-brand-dark"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isMobileMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-white shadow-lg py-4 px-6 md:hidden flex flex-col gap-4 border-t border-gray-100">
          <Link href="#tentang" className="text-base font-medium text-gray-700 hover:text-brand-blue" onClick={() => setIsMobileMenuOpen(false)}>Siapa Kami</Link>
          <Link href="#layanan" className="text-base font-medium text-gray-700 hover:text-brand-blue" onClick={() => setIsMobileMenuOpen(false)}>Keahlian Kami</Link>
          <Link href="#tim" className="text-base font-medium text-gray-700 hover:text-brand-blue" onClick={() => setIsMobileMenuOpen(false)}>Kepemimpinan</Link>
          <Link href="#wawasan" className="text-base font-medium text-gray-700 hover:text-brand-blue" onClick={() => setIsMobileMenuOpen(false)}>Wawasan</Link>
          <Link href="#konsultasi" className="text-brand-blue font-semibold mt-2" onClick={() => setIsMobileMenuOpen(false)}>Hubungi Kami Sekarang</Link>
        </div>
      )}
    </header>
  );
}
