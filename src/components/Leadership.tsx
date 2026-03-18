"use client";

import Image from "next/image";
import { Linkedin, Mail } from "lucide-react";

export default function Leadership() {
  const partners = [
    {
      name: "Tri Agung Tofiq",
      title: "S.E., S.H., M.Ak., M.H., BKP",
      role: "Managing Partner",
      // Using generic placeholder if actual image not found, but we copied generated ones handling via ID or generic
      image: "/images/partner_1_portrait_1773559480325.png"
    },
    {
      name: "Wahyu Nurul Hidayati",
      title: "S.E, Ak, CA, M.Ak, Ph.D (C)",
      role: "Operational Director",
      image: "/images/partner_2_portrait_1773559495600.png"
    },
    {
      name: "Ari Susanto",
      title: "S.E., M.Ak., BKP",
      role: "Partner",
      image: "/images/partner_ari_1773562219775.png"
    },
    {
      name: "Devid Januardi",
      title: "S.Kom, M.Ak, BKP",
      role: "Partner",
      image: "/images/partner_devid_1773562236023.png"
    },
    {
      name: "Agung Suprianto",
      title: "SE, Ak, CPA, M.Ak, BKP",
      role: "Partner",
      image: "/images/partner_agung_1773562258262.png"
    }
  ];

  return (
    <section id="tim" className="py-24 bg-background dark:bg-section-bg transition-colors relative">
      <div className="container mx-auto px-4 md:px-6">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h4 className="text-brand-blue dark:text-brand-blue-light font-semibold uppercase tracking-wider text-sm mb-2">Partner Kami</h4>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">Kepemimpinan</h2>
          <p className="text-muted-foreground text-lg">Didukung oleh profesional berpengalaman dengan lisensi resmi dan rekam jejak yang terbukti di bidang perpajakan dan akuntansi.</p>
        </div>

        {/* Top 2 Partners (Managing & Operational) */}
        <div className="flex flex-wrap justify-center gap-12 mb-16">
          {partners.slice(0, 2).map((partner, idx) => (
            <div key={idx} className="w-full md:w-80 group">
              <div className="relative w-full aspect-[4/5] rounded-2xl overflow-hidden mb-6 bg-muted flex items-center justify-center">
                <img 
                  src={partner.image} 
                  alt={partner.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  onError={(e) => {
                    // Fallback to placeholder if not found
                    e.currentTarget.src = "https://ui-avatars.com/api/?name=" + partner.name + "&background=004d99&color=fff&size=512";
                  }}
                />
                  <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex justify-center gap-4">
                  <a href="#" className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white hover:bg-brand-blue transition-colors">
                    <Linkedin size={18} />
                  </a>
                  <a href="#" className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white hover:bg-brand-blue transition-colors">
                    <Mail size={18} />
                  </a>
                </div>
              </div>
              <div className="text-center">
                <h3 className="text-xl font-bold text-foreground">{partner.name}</h3>
                <p className="text-xs text-muted-foreground font-medium mb-1">{partner.title}</p>
                <div className="inline-block px-3 py-1 rounded bg-brand-blue/10 dark:bg-brand-blue/20 text-brand-blue dark:text-brand-blue-light text-sm font-semibold mt-2">
                  {partner.role}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Other 3 Partners */}
        <div className="flex flex-wrap justify-center gap-8">
          {partners.slice(2).map((partner, idx) => (
            <div key={idx} className="w-full sm:w-64 group">
              <div className="relative w-full aspect-square rounded-full overflow-hidden mb-6 bg-muted border-4 border-background dark:border-border shadow-lg mx-auto max-w-[200px] flex items-center justify-center">
                <img 
                  src={partner.image} 
                  alt={partner.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  onError={(e) => {
                    e.currentTarget.src = "https://ui-avatars.com/api/?name=" + partner.name + "&background=004d99&color=fff&size=256";
                  }}
                />
              </div>
              <div className="text-center">
                <h3 className="text-lg font-bold text-foreground">{partner.name}</h3>
                <p className="text-[11px] text-muted-foreground font-medium mb-1">{partner.title}</p>
                <p className="text-brand-blue dark:text-brand-blue-light text-sm font-medium">{partner.role}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
