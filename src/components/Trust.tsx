import { FileCheck, ShieldCheck, Scale, Award } from "lucide-react"; 

export default function Trust() {
  const credentials = [
    {
      title: "Akte Pendirian",
      number: "Tahun 2021",
      icon: <FileCheck className="w-10 h-10 text-brand-blue" />,
    },
    {
      title: "Nomor Induk Berusaha (NIB)",
      number: "1245000340951",
      icon: <ShieldCheck className="w-10 h-10 text-brand-blue" />,
    },
    {
      title: "Izin Kuasa Hukum Pengadilan Pajak",
      number: "KHP-00932/2026",
      icon: <Scale className="w-10 h-10 text-brand-blue" />,
    },
    {
      title: "Registered Tax Consultant",
      number: "Kemenkeu RI",
      icon: <Award className="w-10 h-10 text-brand-blue" />,
    }
  ];

  const clients = [
    { name: "Askrindo", src: "/images/clients/Askrindo.png" },
    { name: "PLN Enjiniring", src: "/images/clients/PLN-Enjiniring.png" },
    { name: "Saratoga", src: "/images/clients/Saratoga.png" },
    { name: "Afi Tour", src: "/images/clients/afitour.webp" },
    { name: "Cuan Group", src: "/images/clients/cuangroup.webp" },
    { name: "Energas", src: "/images/clients/energas.png" },
    { name: "Pertamina", src: "/images/clients/pertamina.png" },
    { name: "Raharja Energi Cepu", src: "/images/clients/raharja-energi-cepu.png" },
    { name: "Rukun Raharja", src: "/images/clients/rukun-raharja.png" },
    { name: "Sangil Indonesia", src: "/images/clients/sangil-indonesia.png" },
    { name: "Trinusa Resources", src: "/images/clients/trinusa-resources.png" }
  ];

  return (
    <section className="py-24 bg-background dark:bg-section-bg border-t border-b border-border transition-colors">
      <div className="container mx-auto px-4 md:px-6">
        
        {/* Legality Section */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h4 className="text-brand-blue dark:text-brand-blue-light font-semibold uppercase tracking-wider text-sm mb-2">Legalitas & Kepercayaan</h4>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Pilar Kepercayaan TAT & Partners</h2>
          <p className="text-muted-foreground">Beroperasi dengan standar profesionalisme tinggi dan diakui secara resmi oleh otoritas perpajakan Indonesia.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
          {credentials.map((cred, idx) => (
            <div key={idx} className="bg-card p-8 rounded-2xl shadow-sm hover:shadow-md transition-all border border-border flex flex-col items-center text-center group">
              <div className="w-20 h-20 rounded-full bg-muted flex items-center justify-center mb-6 group-hover:bg-brand-blue/10 transition-colors">
                <div className="dark:text-brand-blue-light">{cred.icon}</div>
              </div>
              <h3 className="text-lg font-bold text-foreground mb-2">{cred.title}</h3>
              <p className="text-brand-blue dark:text-brand-blue-light font-medium">{cred.number}</p>
            </div>
          ))}
        </div>

        {/* Client Slider */}
        <div className="text-center mb-10">
          <h4 className="text-muted-foreground font-medium uppercase tracking-wider text-sm">Dipercaya Oleh Berbagai Perusahaan Terkemuka</h4>
        </div>

        <div className="relative flex overflow-hidden group py-10">
          {/* Fading Edges left & right */}
          <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-background dark:from-section-bg to-transparent z-10 pointer-events-none"></div>
          <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-background dark:from-section-bg to-transparent z-10 pointer-events-none"></div>

          <div className="py-8 animate-scroll-left group-hover:[animation-play-state:paused] whitespace-nowrap flex items-center gap-12 w-max px-8">
            {clients.map((client, idx) => (
              <div key={`a-${idx}`} className="h-20 lg:h-24 px-8 py-4 bg-white rounded-xl shadow-sm flex items-center justify-center transition-all hover:shadow-md hover:scale-105 group/logo">
                <img 
                  src={client.src} 
                  alt={client.name} 
                  className="h-full w-auto max-w-[120px] object-contain grayscale group-hover/logo:grayscale-0 transition-all duration-300"
                />
              </div>
            ))}
            {clients.map((client, idx) => (
              <div key={`b-${idx}`} className="h-20 lg:h-24 px-8 py-4 bg-white rounded-xl shadow-sm flex items-center justify-center transition-all hover:shadow-md hover:scale-105 group/logo">
                <img 
                  src={client.src} 
                  alt={client.name} 
                  className="h-full w-auto max-w-[120px] object-contain grayscale group-hover/logo:grayscale-0 transition-all duration-300"
                />
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
