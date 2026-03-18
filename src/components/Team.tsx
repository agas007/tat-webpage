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

  const getInitials = (name: string) => {
    return name.split(' ').map(n => n[0]).join('').substring(0, 2).toUpperCase();
  };

  return (
    <section className="py-20 bg-background dark:bg-section-bg relative overflow-hidden transition-colors">

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mt-6 mb-4">Member Tim</h2>
          <div className="w-24 h-1 bg-brand-blue dark:bg-brand-blue-light mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-12">
          {teamMembers.map((member, idx) => (
            <div key={idx} className="flex flex-col items-center text-center group">
              <div className="w-28 h-28 md:w-36 md:h-36 rounded-full bg-muted shadow-md border-4 border-background dark:border-border overflow-hidden mb-4 group-hover:border-brand-blue/20 transition-all flex items-center justify-center">
                {/* Fallback initials instead of external image for better theme control */}
                <span className="text-2xl md:text-3xl font-black text-foreground tracking-tighter opacity-80 group-hover:scale-110 group-hover:opacity-100 transition-all">
                  {getInitials(member.name)}
                </span>
              </div>
              <h3 className="text-sm md:text-base font-bold text-foreground leading-tight mb-1">{member.name}</h3>
              <p className="text-[10px] md:text-xs text-muted-foreground font-medium">{member.title}</p>
              <p className="text-brand-blue dark:text-brand-blue-light text-xs italic mt-1">{member.role}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
