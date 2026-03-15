import Link from "next/link";
import { LogOut, Home, FileText, UploadCloud, Bell } from "lucide-react";
import { auth } from "@/auth";
import { redirect } from "next/navigation";
import LogoutButton from "@/components/LogoutButton";

export default async function ClientPortalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await auth();

  if (!session?.user) {
    redirect("/login");
  }

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Top Navbar */}
      <header className="h-20 bg-brand-dark flex items-center justify-between px-6 shadow-md z-10 text-white">
        <div className="container mx-auto flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-brand-blue flex items-center justify-center font-bold text-lg">TAT</div>
            <div>
              <span className="font-bold tracking-tight block leading-tight">Client Portal</span>
              <span className="text-xs text-gray-400 font-medium tracking-widest uppercase">TAT & Partners</span>
            </div>
          </Link>
          
          <div className="flex items-center gap-6">
            <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
              <Link href="/client-portal" className="text-brand-blue-light hover:text-white transition-colors flex items-center gap-2">
                <Home size={16} /> Status Pekerjaan
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white transition-colors flex items-center gap-2">
                <FileText size={16} /> Arsip Dokumen
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white transition-colors flex items-center gap-2">
                <UploadCloud size={16} /> Kirim Berkas
              </Link>
            </nav>

            <div className="flex items-center gap-4 pl-6 border-l border-white/10">
              <button className="relative p-2 text-gray-400 hover:text-white transition-colors">
                <Bell size={20} />
                <span className="absolute top-1 right-1.5 w-2 h-2 rounded-full bg-brand-blue border border-brand-dark"></span>
              </button>
              <div className="flex items-center gap-3">
                <div className="text-right hidden sm:block">
                  <p className="text-sm font-medium text-white leading-tight">{session.user.name}</p>
                  <p className="text-xs text-brand-blue-light">{session.user.role}</p>
                </div>
                <div className="w-10 h-10 rounded-full bg-white text-brand-dark flex items-center justify-center font-bold text-sm uppercase">
                  {session.user.name?.substring(0, 2) || "U"}
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Page Content */}
      <main className="flex-1 overflow-auto p-6">
        <div className="container mx-auto">
          {children}
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 py-6 text-center text-sm text-gray-500">
        <p>Copyright © 2026 PT Global Siber Strategi - TAT Digital Transformation</p>
        <div className="mt-2 flex items-center justify-center gap-4">
          <LogoutButton className="text-red-500 hover:text-red-700 font-medium transition-colors flex items-center gap-1" />
        </div>
      </footer>
    </div>
  );
}
