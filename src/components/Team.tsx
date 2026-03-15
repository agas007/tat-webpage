export default function Team() {
  const teamMembers = [
    { name: "Nurul Hasanah", title: "S.Ak., M.Ak., BKP", role: "Manager" },
    { name: "Nisrina Jaesa", title: "S.Ak, M.Ak., BKP", role: "Manager" },
    { name: "Livia Egitha S.", title: "S.Ak", role: "Supervisor" },
    { name: "Salmawanti", title: "S.Ak", role: "Supervisor" },
    { name: "Wahyu Prahari Mukti", title: "S.Ak", role: "Supervisor" },
    { name: "Muhammad Ma'shum", title: "S.Ak", role: "Supervisor" },
    { name: "Adinda Diva Julianingtyas", title: "S.Ak", role: "Ketua Tim" },
    { name: "Alicia Herynda S", title: "S.Ak", role: "Ketua Tim" },
    { name: "Vitha Putri Utami", title: "S.Ak", role: "Ketua Tim" },
    { name: "Mutsaqoful Fikri", title: "SE., Ak", role: "Ketua Tim" },
    { name: "Jihan Afia Karunia", title: "S.Ak", role: "Ketua Tim" },
    { name: "Adib Mustafid", title: "S.Ak", role: "Ketua Tim" }
  ];

  return (
    <section className="py-20 bg-gray-50 border-t border-gray-100 relative overflow-hidden">
      {/* Decorative background curve */}
      <div className="absolute top-0 inset-x-0 h-32 bg-white rounded-b-[50%] scale-x-150 transform -translate-y-16"></div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-brand-dark mt-6 mb-4">Member Tim</h2>
          <div className="w-24 h-1 bg-brand-blue mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-12">
          {teamMembers.map((member, idx) => (
            <div key={idx} className="flex flex-col items-center text-center group">
              <div className="w-28 h-28 md:w-36 md:h-36 rounded-full bg-white shadow-md border-4 border-white overflow-hidden mb-4 group-hover:border-brand-blue/20 transition-colors">
                {/* Fallback avatar */}
                <img 
                  src={`https://ui-avatars.com/api/?name=${member.name}&background=f0f2f5&color=1a1a2e&size=256`} 
                  alt={member.name}
                  className="w-full h-full object-cover mix-blend-multiply"
                />
              </div>
              <h3 className="text-sm md:text-base font-bold text-brand-dark leading-tight mb-1">{member.name}</h3>
              <p className="text-[10px] md:text-xs text-gray-500 font-medium">{member.title}</p>
              <p className="text-brand-blue text-xs italic mt-1">{member.role}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
