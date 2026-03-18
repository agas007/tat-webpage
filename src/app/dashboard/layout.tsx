import Link from "next/link";
import { LayoutDashboard, Users, CheckSquare, FileText, Settings, Bell } from "lucide-react";
import { auth } from "@/auth";
import { redirect } from "next/navigation";
import LogoutButton from "@/components/LogoutButton";
import { ThemeToggle } from "@/components/ThemeToggle";

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await auth();

  if (!session?.user) {
    redirect("/login");
  }

  // Basic RBAC: Redirect clients trying to access admin dashboard
  if (session.user.role === "Client") {
    redirect("/client-portal");
  }

  return (
    <div className="min-h-screen bg-background dark:bg-section-bg flex transition-colors">
      {/* Sidebar */}
      <aside className="w-64 bg-brand-dark text-gray-300 flex flex-col hidden md:flex border-r border-white/5">
        <div className="h-16 flex items-center px-6 border-b border-white/10">
          <Link href="/" className="flex items-center gap-2 text-white">
            <div className="w-8 h-8 rounded-full bg-brand-blue flex items-center justify-center font-bold text-xs">TAT</div>
            <span className="font-bold tracking-tight">Portal Internal</span>
          </Link>
        </div>

        <nav className="flex-1 py-6 px-4 space-y-1">
          <Link href="/dashboard" className="flex items-center gap-3 px-3 py-2.5 rounded-lg bg-white/10 text-white font-medium">
            <LayoutDashboard size={18} /> Overview
          </Link>
          <Link href="/dashboard/tasks" className="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-white/5 hover:text-white transition-colors">
            <CheckSquare size={18} /> Pekerjaan (Tasks)
          </Link>
          <Link href="/dashboard/clients" className="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-white/5 hover:text-white transition-colors">
            <Users size={18} /> Klien & Portal
          </Link>
          <Link href="/dashboard/publications" className="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-white/5 hover:text-white transition-colors">
            <FileText size={18} /> Manajemen Konten
          </Link>
        </nav>

        <div className="p-4 border-t border-white/10 mt-auto">
          <Link href="/dashboard/settings" className="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-white/5 hover:text-white transition-colors">
            <Settings size={18} /> Pengaturan
          </Link>
          <LogoutButton />
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* Top Navbar */}
        <header className="h-16 bg-background dark:bg-card border-b border-gray-200 dark:border-gray-800 flex items-center justify-between px-6 shadow-sm z-10 transition-colors">
          <div className="flex items-center gap-4">
            <h1 className="text-xl font-semibold text-brand-dark dark:text-white hidden sm:block">Dashboard</h1>
          </div>
          <div className="flex items-center gap-4">
            <ThemeToggle />
            <button className="relative p-2 text-gray-500 dark:text-gray-400 hover:text-brand-blue dark:hover:text-brand-blue-light transition-colors" aria-label="Notifications">
              <Bell size={20} />
              <span className="absolute top-1 right-1.5 w-2 h-2 rounded-full bg-red-500 border border-background dark:border-card"></span>
            </button>
            <div className="flex items-center gap-3 pl-4 border-l border-gray-200 dark:border-gray-800">
              <div className="text-right hidden sm:block">
                <p className="text-sm font-bold text-brand-dark dark:text-gray-200 leading-tight">{session.user.name}</p>
                <p className="text-[10px] text-brand-blue dark:text-brand-blue-light font-bold uppercase tracking-wider">{session.user.role}</p>
              </div>
              <div className="w-9 h-9 rounded-full bg-brand-blue text-white flex items-center justify-center font-bold text-sm uppercase shadow-sm border border-brand-blue-dark">
                {session.user.name?.substring(0, 2) || "U"}
              </div>
            </div>
          </div>
        </header>

        {/* Page Content */}
        <main className="flex-1 overflow-auto p-6 md:p-8">
          <div className="max-w-7xl mx-auto">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}
