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
    <section className="py-20 bg-gray-50 border-t border-gray-100">
      <div className="container mx-auto px-4 md:px-6">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h4 className="text-brand-blue font-semibold uppercase tracking-wider text-sm mb-2">Publikasi Terbatas</h4>
          <h2 className="text-3xl md:text-4xl font-bold text-brand-dark mb-4">Jelajahi Publikasi Kami</h2>
          <p className="text-gray-600">Unduh buku, manual pajak, dan hasil kajian mendalam riset internal kami secara gratis.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {publications.map((pub, idx) => (
            <div key={idx} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200 flex flex-col h-full hover:border-brand-blue/30 hover:shadow-md transition-all">
              
              <div className="w-12 h-12 rounded-lg bg-red-50 text-red-500 flex items-center justify-center mb-6">
                <FileText size={24} />
              </div>
              
              <h3 className="text-lg font-bold text-brand-dark mb-3 leading-snug">{pub.title}</h3>
              <p className="text-gray-500 text-sm mb-6 flex-grow">{pub.desc}</p>
              
              <div className="flex items-center justify-between text-xs text-gray-400 font-medium pb-6 mb-6 border-b border-gray-100">
                <span>{pub.pages} Halaman</span>
                <span>PDF • {pub.size}</span>
              </div>
              
              <div className="flex items-center gap-3">
                <button className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-lg bg-brand-blue/10 text-brand-blue font-semibold hover:bg-brand-blue hover:text-white transition-colors text-sm">
                  <Eye size={16} /> Preview
                </button>
                <button className="flex-none p-2.5 rounded-lg bg-gray-100 text-gray-600 hover:bg-gray-200 transition-colors" title="Download PDF">
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
