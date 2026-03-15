import Link from "next/link";
import { ArrowRight, FileText, TrendingUp } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-brand-silver">
      <div className="absolute inset-0 z-0 opacity-10">
        <div className="absolute top-0 -right-20 w-96 h-96 bg-brand-blue rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob"></div>
        <div className="absolute top-0 -left-20 w-72 h-72 bg-brand-blue-light rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-gray-400 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob animation-delay-4000"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white text-brand-blue text-sm font-medium mb-6 shadow-sm border border-brand-blue/10">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-blue opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-blue"></span>
            </span>
            Konsultan Pajak Terdaftar & Terpercaya
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-brand-dark mb-6 leading-tight">
            Solusi Pajak yang <br className="hidden md:block" />
            <span className="text-brand-blue">Jelas & Terukur</span>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed">
            Menyatukan keahlian akademis dan pengalaman praktis selama lebih dari 15 tahun. Kami mensederhanakan kerumitan demi solusi yang jelas untuk meraih tujuan finansial Anda.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link 
              href="#layanan" 
              className="w-full sm:w-auto px-8 py-4 rounded-full bg-brand-blue text-white font-medium hover:bg-brand-blue-dark transition-all transform hover:-translate-y-1 shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
            >
              Jelajahi Keahlian Kami
              <ArrowRight size={18} />
            </Link>
            <Link 
              href="#tentang" 
              className="w-full sm:w-auto px-8 py-4 rounded-full bg-white text-brand-dark font-medium border border-gray-200 hover:border-gray-300 hover:bg-gray-50 transition-all flex items-center justify-center gap-2"
            >
              Pelajari Lebih Lanjut
            </Link>
          </div>
        </div>

        {/* Floating Stat Cards for Professional Vibe */}
        <div className="hidden lg:grid grid-cols-2 gap-4 absolute top-1/2 -right-12 xl:right-0 transform -translate-y-1/2">
          {/* Card 1 */}
        </div>
      </div>
    </section>
  );
}
