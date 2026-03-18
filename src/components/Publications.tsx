"use client";

import { Download, Eye, FileText } from "lucide-react";

export default function Publications() {
  const publications = [
    {
      title: "TAT Indonesian Tax Manual 2026 - Bahasa Inggris",
      desc: "Panduan lengkap mengenai sistem perpajakan di Indonesia diperbarui untuk tahun 2026.",
      pages: "124",
      size: "4.2 MB"
    },
    {
      title: "Konsep dan Aplikasi Pajak Penghasilan Edisi Kedua",
      desc: "Buku panduan komprehensif untuk memahami dan mengaplikasikan regulasi Pajak Penghasilan (PPh).",
      pages: "350",
      size: "8.5 MB"
    },
    {
      title: "In-Depth: Transfer Pricing Guidelines",
      desc: "Analisis mendalam mengenai praktik dan regulasi harga transfer terkini di yurisdiksi Indonesia.",
      pages: "86",
      size: "3.1 MB"
    }
  ];

  return (
    <section className="py-24 bg-background dark:bg-section-bg border-t border-border transition-colors">
      <div className="container mx-auto px-4 md:px-6">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h4 className="text-brand-blue dark:text-brand-blue-light font-semibold uppercase tracking-wider text-sm mb-2">Publikasi Terbatas</h4>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4 leading-tight">Jelajahi Publikasi Kami</h2>
          <p className="text-muted-foreground text-lg">Unduh buku, manual pajak, dan hasil kajian mendalam riset internal kami secara gratis.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {publications.map((pub, idx) => (
            <div key={idx} className="bg-card rounded-2xl p-8 shadow-sm border border-border flex flex-col h-full hover:border-brand-blue/30 hover:shadow-md transition-all duration-300 hover:-translate-y-1">
              
              <div className="w-12 h-12 rounded-lg bg-red-50 dark:bg-red-950/30 text-red-500 dark:text-red-400 flex items-center justify-center mb-6">
                <FileText size={24} />
              </div>
              
              <h3 className="text-xl font-bold text-foreground mb-3 leading-snug">{pub.title}</h3>
              <p className="text-muted-foreground text-sm mb-6 flex-grow">{pub.desc}</p>
              
              <div className="flex items-center justify-between text-xs text-muted-foreground font-semibold pb-6 mb-6 border-b border-border uppercase tracking-tight">
                <span>{pub.pages} Halaman</span>
                <span>PDF — {pub.size}</span>
              </div>
              
              <div className="flex items-center gap-3">
                <button className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl bg-muted text-foreground font-bold hover:bg-brand-blue hover:text-white transition-all transform active:scale-95 text-sm border border-border">
                  <Eye size={16} /> Preview
                </button>
                <button className="flex-none p-3 rounded-xl bg-muted text-muted-foreground hover:bg-brand-blue hover:text-white transition-all transform active:scale-95 border border-border" title="Download PDF">
                  <Download size={18} />
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
