import { ArrowRight, Calendar } from "lucide-react";
import Link from "next/link";

export default function Insights() {
  const articles = [
    {
      title: "Gagasan Reformasi Perpajakan: Jaga Ekonomi, Jamin Penerimaan",
      date: "12 Oct 2026",
      category: "Regulasi",
      tag: "Terbaru"
    },
    {
      title: "On 'High Alert': Indonesia's Tax Dispute Environment and Rules",
      date: "05 Oct 2026",
      category: "Artikel",
      tag: "Populer"
    },
    {
      title: "Kajian Persiapan Penyatuan Atap Pengadilan Pajak",
      date: "28 Sep 2026",
      category: "Kajian",
      tag: "Analisis Khusus"
    }
  ];

  return (
    <section id="wawasan" className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        
        <div className="flex justify-between items-end mb-12">
          <div>
            <h4 className="text-brand-blue font-semibold uppercase tracking-wider text-sm mb-2">Wawasan Terkini</h4>
            <h2 className="text-3xl md:text-4xl font-bold text-brand-dark">Berita & Analisis Pajak</h2>
          </div>
          <Link href="#wawasan" className="hidden sm:flex items-center gap-2 text-brand-blue font-semibold hover:text-brand-blue-dark transition-colors group">
            Lihat Semua Artikel
            <ArrowRight size={18} className="transform group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 border-t border-gray-100 pt-8">
          {articles.map((article, idx) => (
            <div key={idx} className="group cursor-pointer flex flex-col h-full">
              <div className="w-full aspect-[16/9] bg-gray-100 rounded-xl overflow-hidden mb-6 relative">
                {/* Image Placeholder */}
                <div className="absolute inset-0 bg-brand-silver mix-blend-multiply group-hover:bg-brand-blue/5 transition-colors duration-300"></div>
                <div className="absolute inset-0 flex items-center justify-center text-gray-400 text-sm font-medium">Image Preview</div>
                <div className="absolute top-4 left-4 bg-white px-3 py-1 text-xs font-bold rounded shadow-sm text-brand-dark">
                  {article.category}
                </div>
              </div>
              
              <div className="flex items-center gap-4 text-xs font-medium text-gray-500 mb-3">
                <span className="flex items-center gap-1.5 bg-gray-50 px-2 py-1 rounded text-brand-blue border border-brand-blue/10">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-blue"></span>
                  {article.tag}
                </span>
                <span className="flex items-center gap-1">
                  <Calendar size={14} />
                  {article.date}
                </span>
              </div>
              
              <h3 className="text-xl font-bold text-brand-dark mb-3 group-hover:text-brand-blue transition-colors leading-snug flex-grow">
                {article.title}
              </h3>
              
              <div className="flex items-center gap-2 text-sm font-semibold text-brand-blue mt-4">
                Baca Selengkapnya
                <ArrowRight size={16} />
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
