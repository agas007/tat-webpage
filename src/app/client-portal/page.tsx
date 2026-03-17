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
    <div className="space-y-8 max-w-5xl mx-auto py-8">
      
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-2xl font-bold text-brand-dark">Status Pekerjaan Anda</h1>
          <p className="text-gray-600 mt-1">Pantau progress pengerjaan jasa perpajakan Anda secara real-time.</p>
        </div>
        <button className="flex items-center gap-2 px-5 py-2.5 bg-brand-blue text-white rounded-xl shadow-sm hover:bg-brand-blue-dark transition-colors font-medium">
          <MessageSquare size={18} /> Hubungi Konsultan
        </button>
      </div>

      {projects.length === 0 ? (
        <div className="bg-white rounded-2xl border border-gray-200 p-12 text-center">
            <h3 className="text-lg font-bold text-gray-400">Belum ada project aktif untuk akun Anda.</h3>
        </div>
      ) : (
        projects.map((project, idx) => (
          <div key={idx} className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden">
            {/* Project Header */}
            <div className="p-6 border-b border-gray-100 flex flex-col md:flex-row justify-between gap-4">
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <span className="px-2.5 py-1 bg-gray-100 text-gray-600 text-xs font-bold rounded-md font-mono">PRJ-{project.id.substring(0, 4).toUpperCase()}</span>
                  <span className={`px-2.5 py-1 text-xs font-bold rounded-md ${
                    project.status === 'In Progress' ? 'bg-blue-100 text-blue-700' : 'bg-orange-100 text-orange-700'
                  }`}>
                    {project.status}
                  </span>
                  <span className="text-xs text-gray-400 font-medium flex items-center gap-1">
                    <Clock size={12} /> Terakhir diupdate: {new Date(project.lastUpdate).toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' })}
                  </span>
                </div>
                <h2 className="text-xl font-bold text-brand-dark">{project.name}</h2>
                <p className="text-sm text-gray-500 mt-1">PIC TAT: <span className="font-semibold text-brand-dark">
                    {project.tasks[0]?.assignee?.name || 'Assigned to Team'}
                </span></p>
              </div>
              
              <div className="md:text-right flex flex-col justify-center">
                <div className="text-3xl font-bold text-brand-blue mb-1">{project.progress}%</div>
                <div className="w-full md:w-32 h-2 bg-gray-100 rounded-full overflow-hidden">
                  <div className="h-full bg-brand-blue rounded-full" style={{ width: `${project.progress}%` }}></div>
                </div>
              </div>
            </div>
  
            {/* Project Steps Line (Dummy Mapping to Tasks for now) */}
            <div className="p-6 bg-gray-50/50 border-b border-gray-100">
              <h3 className="text-sm font-bold text-brand-dark mb-6">Tahapan Pengerjaan</h3>
              <div className="relative">
                <div className="absolute top-3 left-0 w-full h-1 bg-gray-200 rounded-full z-0"></div>
                <div 
                  className="absolute top-3 left-0 h-1 bg-brand-blue rounded-full z-0 transition-all duration-1000"
                  style={{ width: `${project.progress}%` }}
                ></div>
                
                <div className="flex justify-between relative z-10">
                  {['Analisis', 'Pengumpulan', 'Drafting', 'Review', 'Finish'].map((step, sIdx) => (
                    <div key={sIdx} className="flex flex-col items-center w-1/5">
                      <div className={`w-7 h-7 rounded-full flex items-center justify-center mb-2 border-2 ${
                        (sIdx * 25) < project.progress ? 'bg-brand-blue border-brand-blue text-white' : 
                        (sIdx * 25) <= project.progress ? 'bg-white border-brand-blue text-brand-blue shadow-[0_0_0_4px_rgba(0,77,153,0.1)]' : 
                        'bg-white border-gray-300 text-gray-300'
                      }`}>
                        {(sIdx * 25) < project.progress ? <CheckCircle2 size={16} /> : <span className="text-xs font-bold">{sIdx + 1}</span>}
                      </div>
                      <p className={`text-[10px] md:text-xs text-center font-medium px-1 ${
                        (sIdx * 25) <= project.progress ? 'text-brand-dark' : 'text-gray-400'
                      }`}>
                        {step}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
  
            {/* Next Action required */}
            <div className="p-6 bg-yellow-50 flex items-start md:items-center justify-between gap-4">
              <div className="flex items-start gap-3">
                <AlertCircle className="text-yellow-600 mt-0.5 md:mt-0" size={20} />
                <div>
                  <h4 className="text-sm font-bold text-yellow-800">Status Saat Ini</h4>
                  <p className="text-sm text-yellow-700">{project.nextAction || 'Pekerjaan berjalan sesuai jadwal.'}</p>
                </div>
              </div>
              {project.status === 'In Progress' && (
                 <button className="flex-shrink-0 flex items-center gap-2 px-4 py-2 bg-yellow-500 text-white rounded-lg shadow-sm hover:bg-yellow-600 transition-colors text-sm font-medium">
                   <FileKey size={16} /> Unggah Dokumen
                 </button>
              )}
            </div>
          </div>
        ))
      )}
    </div>
  );
}
