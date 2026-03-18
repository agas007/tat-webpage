import { ArrowRight, Calendar } from "lucide-react";
import Link from "next/link";

export default function Insights() {
  const articles = [
    {
      title: "Gagasan Reformasi Perpajakan: Jaga Ekonomi, Jamin Penerimaan",
      date: "12 Oct 2026",
      category: "Regulasi",
      tag: "Terbaru",
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&q=80&w=800",
      desc: "Reformasi perpajakan menjadi pilar penting dalam menjaga stabilitas ekonomi nasional dan menjamin penerimaan negara yang berkelanjutan."
    },
    {
      title: "On 'High Alert': Indonesia's Tax Dispute Environment and Rules",
      date: "05 Oct 2026",
      category: "Artikel",
      tag: "Populer",
      image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80&w=800",
      desc: "An in-depth analysis of the current state of tax disputes in Indonesia and the evolving regulatory landscape that businesses need to navigate."
    },
    {
      title: "Kajian Persiapan Penyatuan Atap Pengadilan Pajak",
      date: "28 Sep 2026",
      category: "Kajian",
      tag: "Analisis Khusus",
      image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&q=80&w=800",
      desc: "Meninjau kesiapan infrastruktur dan regulasi dalam rencana penyatuan sistem peradilan pajak di Indonesia."
    }
  ];

  return (
    <section id="wawasan" className="py-24 bg-background dark:bg-section-bg transition-colors">
      <div className="container mx-auto px-4 md:px-6">
        
        <div className="flex justify-between items-end mb-12">
          <div className="max-w-3xl">
            <h4 className="text-brand-blue dark:text-brand-blue-light font-semibold uppercase tracking-wider text-sm mb-2">Wawasan</h4>
            <h2 className="text-3xl md:text-5xl font-bold text-brand-dark dark:text-white mb-4">Publikasi Terkini</h2>
            <p className="text-gray-600 dark:text-gray-400 text-lg">Ikuti perkembangan regulasi perpajakan terbaru dan analisis mendalam dari tim ahli kami.</p>
          </div>
          <Link href="#wawasan" className="hidden sm:flex items-center gap-2 text-brand-blue font-semibold hover:text-brand-blue-dark transition-colors group">
            Lihat Semua Artikel
            <ArrowRight size={18} className="transform group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 border-t border-gray-100 pt-8">
          {articles.map((article, idx) => (
            <div key={idx} className="group cursor-pointer flex flex-col h-full">
              <div className="relative h-64 overflow-hidden rounded-xl mb-6">
                <img src={article.image} alt={article.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute top-4 left-4 bg-card px-3 py-1 text-xs font-bold rounded shadow-sm text-foreground">
                  {article.tag}
                </div>
              </div>
              
              <div className="p-8 flex flex-col flex-1 bg-card transition-colors">
                <div className="flex items-center gap-4 text-xs text-muted-foreground mb-4">
                  <span className="flex items-center gap-1"><Calendar size={14} /> {article.date}</span>
                </div>
                <h3 className="text-xl font-bold text-brand-dark dark:text-white mb-3 group-hover:text-brand-blue transition-colors leading-tight">{article.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-6 line-clamp-2">{article.desc}</p>
                <div className="mt-auto flex items-center text-brand-blue dark:text-brand-blue-light font-bold text-sm">
                  Baca Selengkapnya
                  <ArrowRight size={18} className="ml-1 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 sm:hidden text-center">
          <Link href="#wawasan" className="inline-flex items-center gap-2 text-brand-blue font-semibold">
            Lihat Semua Artikel <ArrowRight size={18} />
          </Link>
        </div>

      </div>
    </section>
  );
}
