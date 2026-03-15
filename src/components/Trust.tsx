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
    "RUKUN RAHARJA", "PLN ENJINIRING", "SARATOGA", 
    "PERTAMINA", "ANGKASA PURA", "INDOPELITA", "KRAKATAU STEEL", "KIMIA FARMA"
  ];

  return (
    <section className="py-20 bg-gray-50 border-t border-b border-gray-100">
      <div className="container mx-auto px-4 md:px-6">
        
        {/* Legality Section */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h4 className="text-brand-blue font-semibold uppercase tracking-wider text-sm mb-2">Legalitas & Kepercayaan</h4>
          <h2 className="text-3xl md:text-4xl font-bold text-brand-dark mb-4">Pilar Kepercayaan TAT & Partners</h2>
          <p className="text-gray-600">Beroperasi dengan standar profesionalisme tinggi dan diakui secara resmi oleh otoritas perpajakan Indonesia.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
          {credentials.map((cred, idx) => (
            <div key={idx} className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow border border-gray-100 flex flex-col items-center text-center group">
              <div className="w-20 h-20 rounded-full bg-brand-silver flex items-center justify-center mb-6 group-hover:bg-brand-blue/10 transition-colors">
                {cred.icon}
              </div>
              <h3 className="text-lg font-bold text-brand-dark mb-2">{cred.title}</h3>
              <p className="text-brand-blue font-medium">{cred.number}</p>
            </div>
          ))}
        </div>

        {/* Client Slider */}
        <div className="text-center mb-10">
          <h4 className="text-gray-500 font-medium uppercase tracking-wider text-sm">Dipercaya Oleh Berbagai Perusahaan Terkemuka</h4>
        </div>

        <div className="relative flex overflow-x-hidden group">
          <div className="py-8 animate-marquee whitespace-nowrap flex items-center gap-16">
            {clients.map((client, idx) => (
              <span key={`a-${idx}`} className="text-2xl font-bold text-gray-300 hover:text-brand-blue transition-colors">
                {client}
              </span>
            ))}
            {clients.map((client, idx) => (
              <span key={`b-${idx}`} className="text-2xl font-bold text-gray-300 hover:text-brand-blue transition-colors">
                {client}
              </span>
            ))}
          </div>
          
          <div className="absolute top-0 py-8 animate-marquee2 whitespace-nowrap flex items-center gap-16">
            {clients.map((client, idx) => (
              <span key={`c-${idx}`} className="text-2xl font-bold text-gray-300 hover:text-brand-blue transition-colors">
                {client}
              </span>
            ))}
            {clients.map((client, idx) => (
              <span key={`d-${idx}`} className="text-2xl font-bold text-gray-300 hover:text-brand-blue transition-colors">
                {client}
              </span>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
