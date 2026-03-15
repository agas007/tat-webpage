"use client";

import { LogOut } from "lucide-react";
import { signOut } from "next-auth/react";

export default function LogoutButton({ 
  className = "", 
  showText = true 
}: { 
  className?: string, 
  showText?: boolean 
}) {
  return (
    <button 
      onClick={() => signOut({ callbackUrl: "/login" })}
      className={className || "flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-red-500/10 text-red-400 mt-1 transition-colors w-full"}
    >
      <LogOut size={18} />
      {showText && <span>Keluar</span>}
    </button>
  );
}
