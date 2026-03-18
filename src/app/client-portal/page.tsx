import { prisma } from "@/lib/db";
import { auth } from "@/auth";
import { CheckCircle2, Clock, FileKey, MessageSquare, AlertCircle } from "lucide-react";
import { redirect } from "next/navigation";

export default async function ClientPortal() {
  const session = await auth();

  if (!session?.user) {
    redirect("/login");
  }

  // Fetch only projects belonging to this client
  const projects = await prisma.project.findMany({
    where: {
      clientId: session.user.id
    },
    include: {
      tasks: {
          include: { assignee: true }
      }
    },
    orderBy: {
      lastUpdate: 'desc'
    }
  });

  return (
    <div className="space-y-8 max-w-5xl mx-auto py-8 transition-colors">
      
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 px-4 sm:px-0">
        <div>
          <h1 className="text-2xl font-bold text-brand-dark dark:text-white tracking-tight">Status Pekerjaan Anda</h1>
          <p className="text-gray-600 dark:text-gray-400 mt-1">Pantau progress pengerjaan jasa perpajakan Anda secara real-time.</p>
        </div>
        <button className="flex items-center gap-2 px-6 py-3 bg-brand-blue text-white rounded-xl shadow-lg shadow-brand-blue/20 hover:bg-brand-blue-dark transition-all transform hover:-translate-y-0.5 font-bold active:scale-95">
          <MessageSquare size={18} /> Hubungi Konsultan
        </button>
      </div>

      {projects.length === 0 ? (
        <div className="bg-card rounded-2xl border border-border p-16 text-center shadow-sm">
            <h3 className="text-lg font-bold text-muted-foreground">Belum ada project aktif untuk akun Anda.</h3>
        </div>
      ) : (
        projects.map((project, idx) => (
          <div key={idx} className="bg-card rounded-3xl border border-border shadow-xl shadow-gray-200/50 dark:shadow-none overflow-hidden transition-all hover:border-brand-blue/30">
            {/* Project Header */}
            <div className="p-8 border-b border-border flex flex-col md:flex-row justify-between gap-6">
              <div>
                <div className="flex flex-wrap items-center gap-3 mb-4">
                  <span className="px-2.5 py-1 bg-muted text-muted-foreground text-[10px] font-bold rounded-md font-mono tracking-widest uppercase">PRJ-{project.id.substring(0, 4).toUpperCase()}</span>
                  <span className={`px-2.5 py-1 text-[10px] font-bold rounded-md tracking-widest uppercase ${
                    project.status === 'In Progress' ? 'bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400' : 'bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-400'
                  }`}>
                    {project.status.toUpperCase()}
                  </span>
                  <span className="text-[10px] text-muted-foreground font-bold uppercase tracking-widest flex items-center gap-1.5 ml-auto md:ml-0">
                    <Clock size={12} /> Diupdate: {new Date(project.lastUpdate).toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' })}
                  </span>
                </div>
                <h2 className="text-2xl font-bold text-foreground mb-2 leading-tight">{project.name}</h2>
                <div className="flex items-center gap-2">
                  <div className="w-5 h-5 rounded-full bg-brand-blue text-white flex items-center justify-center text-[10px] font-bold">T</div>
                  <p className="text-sm text-muted-foreground font-medium tracking-tight">PIC TAT: <span className="font-bold text-foreground ml-1 tracking-normal">
                      {project.tasks[0]?.assignee?.name || 'Assigned to Team'}
                  </span></p>
                </div>
              </div>
              
              <div className="md:text-right flex flex-col justify-center items-start md:items-end">
                <div className="text-5xl font-black text-brand-blue mb-2 tracking-tighter">{project.progress}%</div>
                <div className="w-full md:w-48 h-2.5 bg-muted rounded-full overflow-hidden shadow-inner translate-y-2 lg:translate-y-0">
                  <div className="h-full bg-brand-blue rounded-full transition-all duration-1000 ease-out" style={{ width: `${project.progress}%` }}></div>
                </div>
              </div>
            </div>
  
            {/* Project Steps Line */}
            <div className="p-8 bg-muted/20 border-b border-border">
              <h3 className="text-xs font-bold text-muted-foreground uppercase tracking-widest mb-8">Tahapan Pengerjaan</h3>
              <div className="relative pb-2">
                <div className="absolute top-3.5 left-0 w-full h-1 bg-muted rounded-full z-0"></div>
                <div 
                  className="absolute top-3.5 left-0 h-1 bg-brand-blue rounded-full z-0 transition-all duration-1000 ease-in-out"
                  style={{ width: `${project.progress}%` }}
                ></div>
                
                <div className="flex justify-between relative z-10 px-1">
                  {['Analisis', 'Pendataan', 'Drafting', 'Review', 'Selesai'].map((step, sIdx) => (
                    <div key={sIdx} className="flex flex-col items-center w-1/5">
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center mb-3 border-2 transition-all duration-300 ${
                        (sIdx * 25) < project.progress ? 'bg-brand-blue border-brand-blue text-white' : 
                        (sIdx * 25) <= project.progress ? 'bg-card border-brand-blue text-brand-blue shadow-lg' : 
                        'bg-card border-border text-muted-foreground'
                      }`}>
                        {(sIdx * 25) < project.progress ? <CheckCircle2 size={16} /> : <span className="text-xs font-black">{sIdx + 1}</span>}
                      </div>
                      <p className={`text-[10px] md:text-xs text-center font-bold uppercase tracking-tighter sm:tracking-normal px-1 transition-colors duration-300 ${
                        (sIdx * 25) <= project.progress ? 'text-foreground' : 'text-muted-foreground'
                      }`}>
                        {step}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
  
            {/* Next Action required */}
            <div className={`p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 transition-colors ${
                project.status === 'In Progress' ? 'bg-yellow-50/50 dark:bg-yellow-900/10' : 'bg-green-50/30 dark:bg-green-900/10'
            }`}>
              <div className="flex items-start gap-4">
                <div className={`p-2 rounded-xl ${project.status === 'In Progress' ? 'bg-yellow-100 dark:bg-yellow-900/30 text-yellow-600 dark:text-yellow-500' : 'bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-500'}`}>
                    <AlertCircle size={20} />
                </div>
                <div>
                  <h4 className={`text-xs font-bold uppercase tracking-widest mb-1 ${project.status === 'In Progress' ? 'text-yellow-800 dark:text-yellow-500' : 'text-green-800 dark:text-green-500'}`}>Status Saat Ini</h4>
                  <p className={`text-sm font-medium leading-relaxed ${project.status === 'In Progress' ? 'text-yellow-700 dark:text-yellow-600' : 'text-green-700 dark:text-green-600'}`}>
                    {project.nextAction || 'Pekerjaan berjalan sesuai jadwal. Tim ahli kami sedang memproses data Anda.'}
                  </p>
                </div>
              </div>
              {project.status === 'In Progress' && (
                 <button className="w-full sm:w-auto flex-shrink-0 flex items-center justify-center gap-2 px-6 py-3 bg-yellow-500 text-white rounded-xl shadow-lg shadow-yellow-500/20 hover:bg-yellow-600 transition-all font-bold active:scale-95">
                   <FileKey size={18} /> Unggah Dokumen
                 </button>
              )}
            </div>
          </div>
        ))
      )}
    </div>
  );
}
