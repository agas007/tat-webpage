import { GraduationCap, BookOpen, Users } from "lucide-react";

export default function Academy() {
  const programs = [
    {
      title: "Brevet Pajak A & B",
      type: "Flexible / Hybrid",
      icon: <GraduationCap className="w-8 h-8" />,
      desc: "Program pelatihan komprehensif bagi calon praktisi pajak untuk mendapatkan sertifikasi Brevet A dan B dengan kurikulum terstruktur dan pengajar praktisi ahli."
    },
    {
      title: "In-House Training",
      type: "Corporate",
      icon: <Users className="w-8 h-8" />,
      desc: "Pelatihan khusus perpajakan yang disesuaikan dengan kebutuhan spesifik dan masalah yang dihadapi oleh perusahaan Anda langsung di lokasi Anda."
    },
    {
      title: "Tax Talkshows & Seminar",
      type: "Event",
      icon: <BookOpen className="w-8 h-8" />,
      desc: "Diskusi interaktif dan seminar rutin membahas regulasi terbaru dan isu-isu perpajakan terkini bersama narasumber ahli dari DJP maupun praktisi."
    }
  ];

  return (
    <section className="py-24 bg-brand-dark text-white relative overflow-hidden">
      {/* Background Graphic */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-brand-blue/20 transform skew-x-12 translate-x-32 hidden lg:block"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <h4 className="text-blue-400 font-semibold uppercase tracking-wider text-sm mb-2">Pendidikan & Pelatihan</h4>
            <h2 className="text-3xl md:text-5xl font-bold mb-4 leading-tight">TATax Academy.</h2>
            <p className="text-gray-300 text-lg">Dedikasi kami tidak hanya pada layanan konsultasi, melainkan juga pada pengembangan sumber daya manusia melalui edukasi perpajakan yang berkualitas.</p>
          </div>
          <button className="hidden md:inline-flex px-6 py-3 rounded-md bg-white text-brand-dark font-semibold hover:bg-gray-100 transition-colors">
            Lihat Jadwal Terdekat
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {programs.map((prog, idx) => (
            <div key={idx} className="bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-sm hover:bg-white/10 transition-colors flex flex-col items-start group">
              <div className="w-16 h-16 rounded-xl bg-white/10 flex items-center justify-center mb-6">
                <div className="text-white group-hover:scale-110 transition-transform">
                  {prog.icon}
                </div>
              </div>
              <div className="inline-block px-3 py-1 rounded-full bg-brand-blue/30 text-blue-300 text-xs font-semibold tracking-wider uppercase mb-4">
                {prog.type}
              </div>
              <h3 className="text-2xl font-bold mb-3">{prog.title}</h3>
              <p className="text-gray-400 leading-relaxed">{prog.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
