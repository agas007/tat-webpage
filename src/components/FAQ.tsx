"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function FAQ() {
  const faqs = [
    {
      q: "Apa bedanya TAT & Partners dengan konsultan pajak lainnya?",
      a: "TAT & Partners memposisikan diri tidak hanya sebagai konsultan, tetapi sebagai mitra finansial Anda. Kami menggabungkan 15+ tahun pengalaman praktis, legalitas resmi (Kuasa Hukum Pengadilan Pajak), dan pendekatan solutif-edukatif untuk menyederhanakan regulasi yang rumit."
    },
    {
      q: "Berapa lama proses pembuatan Transfer Pricing Documentation (TP Doc)?",
      a: "Waktu pembuatan TP Doc bervariasi tergantung pada kompleksitas transaksi dan kesiapan data klien, rata-rata membutuhkan waktu 4 hingga 8 minggu. Kami memastikan semua dokumen memenuhi standar arm's length principle yang diakui DJP."
    },
    {
      q: "Apakah TAT menyediakan jasa pendampingan pemeriksaan pajak?",
      a: "Ya, kami melayani pendampingan pemeriksaan secara komprehensif. Mulai dari audit, pengajuan keberatan, banding di Pengadilan Pajak, hingga proses Peninjauan Kembali (PK) di Mahkamah Agung."
    },
    {
      q: "Selain perpajakan, apakah TAT melayani pembukuan bulanan perusahaan?",
      a: "Tentu. Layanan Accounting Services kami mencakup setup sistem akuntansi, review berkala, hingga penyusunan laporan keuangan valid secara komersial dan fiskal."
    },
    {
      q: "Bagaimana cara melakukan konsultasi pertama kali dengan TAT?",
      a: "Anda dapat mengisi Formulir Konsultasi di bagian bawah halaman ini, atau menghubungi kami langsung via WhatsApp untuk menjadwalkan pertemuan tatap muka di Head Office / Branch Office kami maupun meeting online."
    }
  ];

  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <section className="py-20 bg-background dark:bg-section-bg transition-colors">
      <div className="container mx-auto px-4 md:px-6">
        
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h4 className="text-brand-blue dark:text-brand-blue-light font-semibold uppercase tracking-wider text-sm mb-2">FAQ</h4>
          <h2 className="text-3xl md:text-4xl font-bold text-brand-dark dark:text-white mb-4">Pertanyaan Seputar Layanan</h2>
          <p className="text-gray-600 dark:text-gray-400">Temukan jawaban atas pertanyaan yang sering diajukan terkait proses konsultasi dan pelayanan di TAT & Partners.</p>
        </div>

        <div className="max-w-4xl mx-auto border border-border bg-card rounded-2xl overflow-hidden shadow-sm transition-colors">
          {faqs.map((faq, idx) => (
            <div key={idx} className={`border-b border-border last:border-b-0 transition-colors ${openIdx === idx ? 'bg-brand-blue/5 dark:bg-brand-blue/10' : 'bg-card'}`}>
              <button 
                onClick={() => toggle(idx)}
                className="w-full flex justify-between items-center text-left p-6 gap-4 hover:text-brand-blue transition-colors outline-none"
              >
                <span className="font-semibold text-lg text-brand-dark dark:text-gray-100">{faq.q}</span>
                <div className={`flex-shrink-0 w-8 h-8 rounded-full bg-muted flex items-center justify-center transition-all duration-300 ${openIdx === idx ? 'rotate-180 bg-brand-blue text-white' : 'text-muted-foreground'}`}>
                  <ChevronDown size={20} />
                </div>
              </button>
              
              <div 
                className={`overflow-hidden transition-all duration-300 ease-in-out px-6 ${
                  openIdx === idx ? 'max-h-96 pb-6 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed pl-4 border-l-2 border-brand-blue/30">{faq.a}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
