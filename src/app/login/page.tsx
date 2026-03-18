"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";

export default function LoginPage() {
  const router = useRouter();
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const formData = new FormData(e.currentTarget);
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;

    const res = await signIn("credentials", {
      email,
      password,
      redirect: false,
    });

    if (res?.error) {
      setError("Email atau kata sandi salah");
      setLoading(false);
    } else {
      router.push("/dashboard");
      router.refresh(); // Force refresh to get new auth state
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-background flex-col py-12 px-4 sm:px-6 lg:px-8 transition-colors">
      <div className="max-w-md w-full space-y-8 bg-card p-10 rounded-2xl shadow-xl border border-border">
        <div>
          <div className="flex justify-center mb-6">
            <div className="flex items-center justify-center w-14 h-14 rounded-full bg-brand-blue text-white font-bold text-2xl shadow-lg border-2 border-background dark:border-border">
              TAT
            </div>
          </div>
          <h2 className="text-center text-3xl font-extrabold text-foreground">
            Login Portal
          </h2>
          <p className="mt-2 text-center text-sm text-muted-foreground">
            Masuk ke dasbor internal atau portal klien
          </p>
        </div>
        
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className="space-y-4">
            <div>
              <label className="text-sm font-medium text-foreground block mb-1">Email</label>
              <input
                name="email"
                type="email"
                required
                className="appearance-none relative block w-full px-4 py-3 border border-border placeholder-gray-500 bg-background text-foreground rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-blue focus:border-brand-blue sm:text-sm transition-all"
                placeholder="admin@tatpartners.co.id"
              />
            </div>
            <div>
              <label className="text-sm font-medium text-foreground block mb-1">Password</label>
              <input
                name="password"
                type="password"
                required
                className="appearance-none relative block w-full px-4 py-3 border border-border placeholder-gray-500 bg-background text-foreground rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-blue focus:border-brand-blue sm:text-sm transition-all"
                placeholder="••••••••"
              />
            </div>
          </div>

          {error && <div className="text-sm text-red-600 bg-red-50 dark:bg-red-900/20 p-3 rounded-lg border border-red-100 dark:border-red-900/30">{error}</div>}

          <div>
            <button
              type="submit"
              disabled={loading}
              className="group relative w-full flex justify-center py-3.5 px-4 border border-transparent text-sm font-bold rounded-xl text-white bg-brand-blue hover:bg-brand-blue-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-blue transition-all shadow-lg active:scale-95 disabled:opacity-70"
            >
              {loading ? "Memproses..." : "Masuk (Sign In)"}
            </button>
          </div>
        </form>
        
        <div className="text-center text-[10px] text-muted-foreground mt-6 border-t border-border pt-6">
          <p className="font-bold mb-1">AKUN PERCOBAAN:</p>
          <p>Admin: admin@tatpartners.co.id / admin123</p>
          <p>Partner: partner@tatpartners.co.id / partner123</p>
          <p>Client: finance@krakatausteel.com / client123</p>
        </div>
      </div>
    </div>
  );
}
