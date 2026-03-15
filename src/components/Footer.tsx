"use client";

import { Instagram, Facebook, Twitter, ChevronUp, MapPin, Mail, Phone } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-brand-dark text-white pt-20 relative">
      <div className="container mx-auto px-4 md:px-6">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-16">
          
          {/* Brand Info */}
          <div className="col-span-1 lg:col-span-4">
            <div className="flex items-center gap-2 mb-6">
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-brand-blue text-white font-bold text-2xl">
                TAT
              </div>
              <span className="font-bold text-2xl tracking-tight text-white">
                & Partners
              </span>
            </div>
            <p className="text-gray-400 mb-8 max-w-sm">
              Mensederhanakan kerumitan demi solusi yang jelas. Konsultan pajak terdaftar dan mitra finansial terpercaya Anda.
            </p>
            <p className="text-brand-blue-light font-medium italic text-lg border-l-2 border-brand-blue pl-4">
              "Tax Solutions, Prosperity Solutions"
            </p>
          </div>

          {/* Locations */}
          <div className="col-span-1 lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-8">
            <div>
              <h4 className="text-white font-bold mb-4 flex items-center gap-2">
                <MapPin size={18} className="text-brand-blue" />
                Head Office
              </h4>
              <p className="text-gray-400 text-sm leading-relaxed">
                Menara Sentraya, 12th Floor<br />
                Jl. Iskandarsyah Raya 1A - Blok M<br />
                Jakarta Selatan 12160
              </p>
            </div>
            <div>
              <h4 className="text-white font-bold mb-4 flex items-center gap-2">
                <MapPin size={18} className="text-brand-blue" />
                Branch Office
              </h4>
              <p className="text-gray-400 text-sm leading-relaxed">
                UH-Town Building, Blok UH/B-01<br />
                Jl. Boulevard UPJ Bintaro Sawah Baru<br />
                Tangerang Selatan 15413
              </p>
            </div>
          </div>

          {/* Contact & Socials */}
          <div className="col-span-1 lg:col-span-3">
            <h4 className="text-white font-bold mb-4">Hubungi Kami</h4>
            <ul className="space-y-4 text-sm text-gray-400 mb-8">
              <li className="flex items-center gap-3">
                <Mail size={16} className="text-brand-blue flex-shrink-0" />
                <a href="mailto:taxconsultingtat@gmail.com" className="hover:text-white transition-colors break-all">taxconsultingtat@gmail.com</a>
              </li>
              <li className="flex items-start gap-3">
                <Phone size={16} className="text-brand-blue flex-shrink-0 mt-1" />
                <div>
                  <a href="tel:082112991209" className="hover:text-white transition-colors block">0821-1299-1209</a>
                  <a href="tel:02174790554" className="hover:text-white transition-colors block mt-1">021-74790554</a>
                </div>
              </li>
            </ul>

            <div className="flex items-center gap-4">
              <a href="https://www.instagram.com/tatax.solution" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-brand-blue hover:text-white transition-all">
                <Instagram size={18} />
                <span className="sr-only">Instagram Tatax.solution</span>
              </a>
              <a href="https://twitter.com/tataxsolution" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-brand-blue hover:text-white transition-all">
                <Twitter size={18} />
                <span className="sr-only">Twitter Tataxsolution</span>
              </a>
              <a href="https://www.facebook.com/tataxsolution" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-brand-blue hover:text-white transition-all">
                <Facebook size={18} />
                <span className="sr-only">Facebook Tataxsolution</span>
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-sm text-center md:text-left">
            Copyright © 2026 Dibuat oleh Tim TAT Digital Transformation. Hak cipta dilindungi Undang-undang.
          </p>
          <button 
            onClick={scrollToTop}
            className="flex items-center gap-2 text-sm font-medium text-gray-400 hover:text-brand-blue transition-colors group"
          >
            Kembali ke atas
            <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-brand-blue/20 transition-colors">
              <ChevronUp size={16} className="text-brand-blue" />
            </div>
          </button>
        </div>

      </div>
    </footer>
  );
}
