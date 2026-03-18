import { Calculator, Scale, Briefcase, FileSpreadsheet } from "lucide-react";

export default function Services() {
  const services = [
    {
      title: "Tax Compliance",
      icon: <Calculator className="w-8 h-8" />,
      features: [
        "SPT Tahunan PPh Orang Pribadi",
        "SPT Tahunan PPh Badan",
        "SPT Masa PPh & PPN",
        "Administrasi Perpajakan"
      ],
      desc: "Layanan kepatuhan pajak bulanan dan tahunan secara akurat, memastikan bisnis Anda terhindar dari sanksi administratif dan mematuhi regulasi perpajakan yang dinamis."
    },
    {
      title: "Tax Audit & Dispute",
      icon: <Scale className="w-8 h-8" />,
      features: [
        "Pendampingan Pemeriksaan",
        "Dokumen Keberatan Pajak",
        "Banding Pengadilan Pajak",
        "Peninjauan Kembali (PK)"
      ],
      desc: "Solusi komprehensif untuk sengketa pajak. Tim advokat kami mendampingi Anda dari proses pemeriksaan hingga Mahkamah Agung berbekal Izin Kuasa Hukum Pengadilan."
    },
    {
      title: "Specialized Services",
      icon: <Briefcase className="w-8 h-8" />,
      features: [
        "Strategic Tax Planning",
        "Transfer Pricing Documentation",
        "People & Mobility Services",
        "Restrukturisasi Pajak"
      ],
      desc: "Layanan konsultasi khusus untuk memaksimalkan efisiensi pajak secara legal (tax planning), manajemen harga transfer (TP Doc), dan urusan ekspatriat."
    },
    {
      title: "Accounting Services",
      icon: <FileSpreadsheet className="w-8 h-8" />,
      features: [
        "Penyusunan Laporan Keuangan",
        "Review Akuntansi Berkala",
        "Setup Sistem Akuntansi",
        "Payroll & Administrasi"
      ],
      desc: "Kami membimbing penyusunan sistem akuntansi yang solid dan transparan untuk menghasilkan laporan keuangan berkualitas yang valid di mata otoritas pajak."
    }
  ];

  return (
    <section id="layanan" className="py-24 bg-background dark:bg-section-bg transition-colors">
      <div className="container mx-auto px-4 md:px-6">
        
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <h4 className="text-brand-blue dark:text-brand-blue-light font-semibold uppercase tracking-wider text-sm mb-2">Layanan Kami</h4>
            <h2 className="text-3xl md:text-5xl font-bold text-brand-dark dark:text-white mb-4 leading-tight">Jelajahi Keahlian Kami.</h2>
            <p className="text-gray-600 dark:text-gray-300 text-lg">Solusi pajak komprehensif dan akuntansi berkualitas tinggi yang dirancang khusus untuk mengoptimalkan kinerja dan pertumbuhan perusahaan Anda.</p>
          </div>
          <a href="#konsultasi" className="hidden md:inline-flex px-6 py-3 rounded-md bg-brand-blue/10 dark:bg-brand-blue/20 text-brand-blue dark:text-brand-blue-light font-semibold hover:bg-brand-blue hover:text-white transition-colors">
            Konsultasi Layanan
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
          {services.map((service, idx) => (
            <div key={idx} className="group rounded-2xl border border-border bg-card p-8 shadow-[0_4px_20px_rgb(0,0,0,0.03)] hover:shadow-[0_10px_40px_rgb(0,77,153,0.08)] transition-all duration-300 hover:-translate-y-2 flex flex-col h-full">
              
              <div className="w-16 h-16 rounded-xl bg-brand-silver dark:bg-gray-700 flex items-center justify-center mb-6 group-hover:bg-brand-blue group-hover:text-white transition-colors">
                <div className="text-brand-blue dark:text-brand-blue-light group-hover:text-white transition-colors">
                  {service.icon}
                </div>
              </div>
              
              <h3 className="text-2xl font-bold text-brand-dark dark:text-white mb-4">{service.title}</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6 flex-grow">{service.desc}</p>
              
              <ul className="space-y-3 pt-6 border-t border-gray-100 dark:border-gray-700">
                {service.features.map((feat, i) => (
                  <li key={i} className="flex items-center text-sm font-medium text-gray-700 dark:text-gray-300">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-blue dark:bg-brand-blue-light mr-3 opacity-70"></span>
                    {feat}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
