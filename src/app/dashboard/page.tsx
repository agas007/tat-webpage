import { ArrowUpRight, CheckCircle2, Clock, PlayCircle } from "lucide-react";
import { prisma } from "@/lib/db";
import { auth } from "@/auth";

export default async function Dashboard() {
  const session = await auth();

  // Fetch real stats from DB
  const [activeCount, reviewCount, doneCount, recentTasksFromDb] = await Promise.all([
    prisma.task.count({ where: { status: 'progress' } }),
    prisma.task.count({ where: { status: 'review' } }),
    prisma.task.count({ where: { status: 'done' } }),
    prisma.task.findMany({
      take: 4,
      orderBy: { updatedAt: 'desc' },
      include: {
        project: {
          include: { client: true }
        },
        assignee: true
      }
    })
  ]);

  const stats = [
    { label: "Pekerjaan Aktif", value: activeCount.toString(), trend: "+12%", icon: <PlayCircle className="text-blue-500" /> },
    { label: "Menunggu Review", value: reviewCount.toString(), trend: "-2", icon: <Clock className="text-orange-500" /> },
    { label: "Selesai (Total)", value: doneCount.toString(), trend: "+24%", icon: <CheckCircle2 className="text-green-500" /> },
  ];

  return (
    <div className="space-y-6">
      
      {/* Welcome Banner */}
      <div className="bg-gradient-to-r from-brand-blue to-brand-blue-dark rounded-2xl p-8 text-white shadow-lg relative overflow-hidden">
        <div className="relative z-10">
          <h2 className="text-2xl md:text-3xl font-bold mb-2 tracking-tight">Selamat datang kembali, {session?.user?.name}!</h2>
          <p className="text-blue-100 max-w-xl opacity-90">Berikut adalah ringkasan pekerjaan tim Anda hari ini. Ada {reviewCount} pekerjaan yang membutuhkan review segera.</p>
        </div>
        <div className="absolute top-0 right-0 w-64 h-full bg-white/10 transform skew-x-12 translate-x-16"></div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {stats.map((stat, idx) => (
          <div key={idx} className="bg-card p-6 rounded-2xl border border-gray-100 dark:border-gray-800 shadow-sm flex items-center justify-between transition-colors">
            <div>
              <p className="text-sm font-medium text-muted-foreground mb-1">{stat.label}</p>
              <h3 className="text-3xl font-bold text-foreground tracking-tight">{stat.value}</h3>
              <p className="text-xs font-semibold text-green-500 mt-2 flex items-center gap-1">
                <ArrowUpRight size={14} /> {stat.trend}
              </p>
            </div>
            <div className="w-12 h-12 rounded-full bg-muted flex items-center justify-center transition-colors">
              {stat.icon}
            </div>
          </div>
        ))}
      </div>

      {/* Kanban / Task Overview Preview */}
      <div className="bg-card rounded-2xl border border-gray-100 dark:border-gray-800 shadow-sm overflow-hidden transition-colors">
        <div className="px-6 py-5 border-b border-gray-100 dark:border-gray-800 flex justify-between items-center bg-muted/30">
          <h3 className="font-bold text-lg text-brand-dark dark:text-white">Pekerjaan Terkini</h3>
          <a href="/dashboard/tasks" className="text-sm font-semibold text-brand-blue dark:text-brand-blue-light hover:underline underline-offset-4">Lihat Semua di Board</a>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-muted/50 text-muted-foreground text-xs uppercase tracking-wider">
                <th className="px-6 py-4 font-bold">Klien / Project</th>
                <th className="px-6 py-4 font-bold">Nama Pekerjaan</th>
                <th className="px-6 py-4 font-bold text-center">Status</th>
                <th className="px-6 py-4 font-bold">Assignee</th>
              </tr>
            </thead>
            <tbody className="divide-y border-gray-100 dark:border-gray-800">
              {recentTasksFromDb.map((task, idx) => (
                <tr key={idx} className="hover:bg-muted/30 transition-colors">
                  <td className="px-6 py-4 font-semibold text-foreground">{task.project.name}</td>
                  <td className="px-6 py-4 text-muted-foreground">{task.title}</td>
                  <td className="px-6 py-4 text-center">
                    <span className={`px-2.5 py-1 text-[10px] font-bold rounded-md tracking-wider ${
                      task.status === 'done' ? 'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400' :
                      task.status === 'review' ? 'bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-400' :
                      task.status === 'progress' ? 'bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400' :
                      'bg-muted text-foreground'
                    }`}>
                      {task.status.toUpperCase()}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 rounded-full bg-brand-blue text-white flex items-center justify-center text-[10px] font-bold">
                        {task.assignee?.name?.charAt(0) || '?'}
                      </div>
                      <span className="text-sm text-muted-foreground">{task.assignee?.name || 'Unassigned'}</span>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

    </div>
  );
}
