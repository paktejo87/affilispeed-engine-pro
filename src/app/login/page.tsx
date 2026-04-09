"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  Zap,
  Mail,
  Lock,
  Eye,
  EyeOff,
  ArrowRight,
  Shield,
  Sparkles,
  TrendingUp,
  Globe,
} from "lucide-react";

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      router.push("/dashboard");
    }, 1500);
  };

  return (
    <div className="min-h-screen flex">
      {/* Left: Decorative Panel */}
      <div className="hidden lg:flex lg:w-1/2 relative overflow-hidden bg-navy-950">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-[400px] h-[400px] bg-brand-500/10 rounded-full blur-[100px] animate-float" />
          <div className="absolute bottom-20 right-20 w-[300px] h-[300px] bg-accent-500/10 rounded-full blur-[80px] animate-float" style={{ animationDelay: "3s" }} />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-brand-600/5 rounded-full blur-[120px]" />

          {/* Grid Pattern */}
          <div className="absolute inset-0 opacity-[0.03]" style={{
            backgroundImage: "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
            backgroundSize: "60px 60px"
          }} />
        </div>

        {/* Content */}
        <div className="relative z-10 flex flex-col justify-center px-16 py-12">
          <div className="flex items-center gap-3 mb-12">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-brand-500 to-accent-500 flex items-center justify-center">
              <Zap className="w-7 h-7 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-black text-white tracking-tight">AffiliSpeed</h1>
              <p className="text-[11px] text-brand-400 font-bold tracking-[0.2em] uppercase">Engine Pro</p>
            </div>
          </div>

          <h2 className="text-4xl font-black text-white leading-[1.15] mb-4 tracking-tight">
            Kecepatan adalah
            <br />
            <span className="gradient-text">Uang, Keamanan</span>
            <br />
            adalah Kekuatan.
          </h2>
          <p className="text-slate-400 text-[15px] leading-relaxed mb-12 max-w-md">
            Platform affiliate paling mematikan di Indonesia. Landing page instan di jaringan 2G, cloaking siluman, dan konversi tertinggi untuk META Ads.
          </p>

          {/* Feature Cards */}
          <div className="space-y-3">
            {[
              { icon: TrendingUp, title: "Konversi 8.7%", desc: "Rata-rata CTR pengguna kami", color: "text-green-400" },
              { icon: Shield, title: "15.832 Bot Diblokir", desc: "Perlindungan cloaking aktif", color: "text-brand-400" },
              { icon: Globe, title: "< 1.5 detik LCP", desc: "Kecepatan muat bahkan di 2G", color: "text-blue-400" },
            ].map((feature, i) => (
              <div
                key={i}
                className="flex items-center gap-4 p-4 rounded-2xl bg-white/[0.03] border border-white/[0.06] backdrop-blur-sm hover:bg-white/[0.05] transition-all duration-300"
                style={{ animationDelay: `${i * 150}ms` }}
              >
                <div className={`w-10 h-10 rounded-xl bg-white/[0.05] flex items-center justify-center ${feature.color}`}>
                  <feature.icon className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-[13px] font-bold text-white">{feature.title}</p>
                  <p className="text-[11px] text-slate-500">{feature.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Right: Login Form */}
      <div className="flex-1 flex items-center justify-center p-8 relative">
        {/* Background glow */}
        <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-brand-500/5 rounded-full blur-[100px]" />

        <div className="w-full max-w-[420px] relative z-10">
          {/* Mobile Logo */}
          <div className="flex items-center gap-3 mb-8 lg:hidden">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-brand-500 to-accent-500 flex items-center justify-center">
              <Zap className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-black text-white">AffiliSpeed</h1>
              <p className="text-[9px] text-brand-400 font-bold tracking-[0.2em] uppercase">Engine Pro</p>
            </div>
          </div>

          <div className="mb-8">
            <h2 className="text-2xl font-black text-white mb-2">
              Masuk ke Akun Anda
            </h2>
            <p className="text-[14px] text-slate-400">
              Selamat datang kembali! Masukkan kredensial Anda.
            </p>
          </div>

          {/* Social Login */}
          <div className="grid grid-cols-2 gap-3 mb-6">
            <button className="btn-ghost text-[12px] justify-center py-3">
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4" />
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
              </svg>
              Google
            </button>
            <button className="btn-ghost text-[12px] justify-center py-3">
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" fill="#fff" />
              </svg>
              GitHub
            </button>
          </div>

          {/* Divider */}
          <div className="flex items-center gap-4 mb-6">
            <div className="flex-1 h-px bg-white/[0.06]" />
            <span className="text-[11px] text-slate-500 font-medium">atau masuk dengan email</span>
            <div className="flex-1 h-px bg-white/[0.06]" />
          </div>

          {/* Form */}
          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="text-[12px] font-semibold text-slate-300 mb-1.5 block">
                Alamat Email
              </label>
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="nama@email.com"
                  className="input-field pl-11"
                  required
                />
              </div>
            </div>

            <div>
              <label className="text-[12px] font-semibold text-slate-300 mb-1.5 block">
                Kata Sandi
              </label>
              <div className="relative">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
                <input
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Masukkan kata sandi"
                  className="input-field pl-11 pr-11"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-500 hover:text-white transition-colors"
                >
                  {showPassword ? (
                    <EyeOff className="w-4 h-4" />
                  ) : (
                    <Eye className="w-4 h-4" />
                  )}
                </button>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  className="w-4 h-4 rounded bg-navy-800 border-white/10 accent-brand-500"
                />
                <span className="text-[12px] text-slate-400">Ingat saya</span>
              </label>
              <a
                href="#"
                className="text-[12px] text-brand-400 hover:text-brand-300 font-medium transition-colors"
              >
                Lupa kata sandi?
              </a>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="btn-primary w-full justify-center py-3.5 text-[14px] relative overflow-hidden group disabled:opacity-70"
            >
              {loading ? (
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  Memproses...
                </div>
              ) : (
                <>
                  Masuk ke Dashboard
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </>
              )}
            </button>
          </form>

          <p className="text-center text-[13px] text-slate-400 mt-6">
            Belum punya akun?{" "}
            <Link
              href="/register"
              className="text-brand-400 font-semibold hover:text-brand-300 transition-colors"
            >
              Daftar Gratis
            </Link>
          </p>

          {/* Trust */}
          <div className="flex items-center justify-center gap-4 mt-8 pt-8 border-t border-white/[0.04]">
            <div className="flex items-center gap-1.5 text-[10px] text-slate-500">
              <Shield className="w-3.5 h-3.5" />
              Enkripsi AES-256
            </div>
            <div className="flex items-center gap-1.5 text-[10px] text-slate-500">
              <Sparkles className="w-3.5 h-3.5" />
              2FA Ready
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
