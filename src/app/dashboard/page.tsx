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
    <div className="space-y-6 max-w-7xl mx-auto">
      
      {/* Welcome Banner */}
      <div className="bg-gradient-to-r from-brand-blue to-brand-blue-dark rounded-2xl p-8 text-white shadow-md relative overflow-hidden">
        <div className="relative z-10">
          <h2 className="text-2xl md:text-3xl font-bold mb-2">Selamat datang kembali, {session?.user?.name}!</h2>
          <p className="text-blue-100 max-w-xl">Berikut adalah ringkasan pekerjaan tim Anda hari ini. Ada {reviewCount} pekerjaan yang membutuhkan review segera.</p>
        </div>
        <div className="absolute top-0 right-0 w-64 h-full bg-white/10 transform skew-x-12 translate-x-16"></div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {stats.map((stat, idx) => (
          <div key={idx} className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-500 mb-1">{stat.label}</p>
              <h3 className="text-3xl font-bold text-brand-dark">{stat.value}</h3>
              <p className="text-xs font-semibold text-green-500 mt-2 flex items-center gap-1">
                <ArrowUpRight size={14} /> {stat.trend}
              </p>
            </div>
            <div className="w-12 h-12 rounded-full bg-gray-50 flex items-center justify-center">
              {stat.icon}
            </div>
          </div>
        ))}
      </div>

      {/* Kanban / Task Overview Preview */}
      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
        <div className="px-6 py-5 border-b border-gray-100 flex justify-between items-center">
          <h3 className="font-bold text-lg text-brand-dark">Pekerjaan Terkini</h3>
          <a href="/dashboard/tasks" className="text-sm font-semibold text-brand-blue hover:text-brand-blue-dark">Lihat Semua di Board</a>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-gray-50 text-gray-500 text-xs uppercase tracking-wider">
                <th className="px-6 py-4 font-semibold">Klien / Project</th>
                <th className="px-6 py-4 font-semibold">Nama Pekerjaan</th>
                <th className="px-6 py-4 font-semibold">Status</th>
                <th className="px-6 py-4 font-semibold">Assignee</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {recentTasksFromDb.map((task, idx) => (
                <tr key={idx} className="hover:bg-gray-50/50 transition-colors">
                  <td className="px-6 py-4 font-semibold text-brand-dark">{task.project.name}</td>
                  <td className="px-6 py-4 text-gray-600">{task.title}</td>
                  <td className="px-6 py-4">
                    <span className={`px-3 py-1 text-xs font-bold rounded-full ${
                      task.status === 'done' ? 'bg-green-100 text-green-700' :
                      task.status === 'review' ? 'bg-orange-100 text-orange-700' :
                      task.status === 'progress' ? 'bg-blue-100 text-blue-700' :
                      'bg-gray-100 text-gray-700'
                    }`}>
                      {task.status.toUpperCase()}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-500">{task.assignee?.name || 'Unassigned'}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

    </div>
  );
}
