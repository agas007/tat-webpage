import { CheckCircle2 } from "lucide-react";

export default function About() {
  return (
    <section id="tentang" className="py-20 md:py-32 bg-background dark:bg-section-bg transition-colors">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          
          <div className="w-full lg:w-1/2">
            <div className="relative">
              {/* Image Placeholder. In production, this would be an actual office/team image */}
              <div className="w-full aspect-[4/3] rounded-2xl bg-gradient-to-br from-brand-silver to-gray-200 overflow-hidden shadow-xl">
                <div className="absolute inset-0 flex items-center justify-center text-gray-400 font-medium">
                  [Office/Corporate Image Placeholder]
                </div>
              </div>
              
              <div className="absolute -bottom-10 -right-10 bg-card p-6 rounded-2xl shadow-2xl flex flex-col gap-2 max-w-[200px] border border-border transition-colors">
                <h3 className="text-5xl font-extrabold text-brand-blue dark:text-brand-blue-light">15+</h3>
                <p className="text-foreground font-medium leading-tight text-sm">Tahun melayani sebagai mitra Anda</p>
              </div>
            </div>
          </div>
          
          <div className="w-full lg:w-1/2 space-y-6 lg:pl-10">
            <h4 className="text-brand-blue dark:text-brand-blue-light font-semibold uppercase tracking-wider text-sm">Siapa Kami</h4>
            <h2 className="text-3xl md:text-5xl font-bold text-foreground leading-tight">Lebih Dari Sekadar Konsultan.</h2>
            
            <p className="text-muted-foreground text-lg leading-relaxed pt-4">
              TAT & Partners adalah konsultan pajak dari Indonesia dengan spesialisasi jasa perpajakan domestik mapun internasional. Kami bukan sekadar memberikan advis, tapi kami berdiri sebagai mitra finansial Anda.
            </p>
            
            <p className="text-muted-foreground text-lg leading-relaxed">
              Dengan dukungan tim ahli dan pengalaman lebih dari 15 tahun di industri ini, kami siap menyederhanakan regulasi yang rumit menjadi solusi yang jelas, konkret, dan terukur bagi bisnis Anda.
            </p>
            
            <ul className="space-y-4 pt-6">
              {[
                "Solusi Tepat Sasaran Sesuai Hukum",
                "Meningkatkan Kepatuhan & Efisiensi",
                "Akomodatif & Solutif Terhadap Masalah Klien"
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-4">
                  <div className="mt-1 flex-shrink-0 text-brand-blue dark:text-brand-blue-light">
                    <CheckCircle2 size={24} />
                  </div>
                  <span className="text-foreground font-medium pb-1 border-b border-border transition-colors">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          
        </div>
      </div>
    </section>
  );
}
