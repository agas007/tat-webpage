import Link from "next/link";
import { ArrowRight, FileText, TrendingUp } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-background dark:bg-section-bg text-foreground transition-all">
      {/* Background Graphic */}
      <div className="absolute top-0 right-0 w-3/4 md:w-1/2 h-full bg-brand-blue/20 transform skew-x-12 translate-x-32 hidden md:block"></div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-blue/10 text-brand-blue dark:text-brand-blue-light text-sm font-medium mb-6 border border-brand-blue/30 backdrop-blur-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-blue-light opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-blue-light"></span>
            </span>
            Konsultan Pajak Terdaftar & Terpercaya
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-foreground mb-6 leading-tight">
            Solusi Pajak yang <br className="hidden md:block" />
            <span className="text-brand-blue dark:text-brand-blue-light">Jelas & Terukur</span>
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed relative z-10">
            Menyatukan keahlian akademis dan pengalaman praktis selama lebih dari 15 tahun. Kami menyederhanakan kerumitan demi solusi yang jelas untuk meraih tujuan finansial Anda.
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
              className="w-full sm:w-auto px-8 py-4 rounded-full bg-muted text-foreground font-medium border border-border hover:bg-accent transition-all flex items-center justify-center gap-2 backdrop-blur-sm"
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
