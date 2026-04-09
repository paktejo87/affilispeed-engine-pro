"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  Zap,
  Mail,
  Lock,
  User,
  Eye,
  EyeOff,
  ArrowRight,
  ArrowLeft,
  Check,
  Crown,
  Shield,
  Sparkles,
  Globe,
} from "lucide-react";

export default function RegisterPage() {
  const [step, setStep] = useState(1);
  const [showPassword, setShowPassword] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState("pro");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const plans = [
    {
      key: "free",
      name: "Starter",
      price: "Gratis",
      desc: "Untuk pemula",
      features: ["5 Landing Pages", "1 Domain Default", "Basic Widgets", "Community Support"],
      color: "border-slate-500/20",
      bg: "bg-white/[0.02]",
    },
    {
      key: "pro",
      name: "Pro",
      price: "Rp 299.000",
      period: "/bulan",
      desc: "Paling populer",
      features: ["50 Landing Pages", "5 Custom Domain", "Cloaking Unlimited", "Anti-Spy Shield", "Winning Scraper", "Priority Support"],
      color: "border-brand-500/40",
      bg: "bg-brand-500/5",
      popular: true,
    },
    {
      key: "enterprise",
      name: "Enterprise",
      price: "Rp 799.000",
      period: "/bulan",
      desc: "Tanpa batas",
      features: ["Unlimited Landing Pages", "Unlimited Domain", "Semua Fitur Pro", "API Access", "White Label", "Dedicated Support"],
      color: "border-accent-500/30",
      bg: "bg-accent-500/5",
    },
  ];

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    if (step < 2) {
      setStep(step + 1);
      return;
    }
    setLoading(true);
    setTimeout(() => {
      router.push("/dashboard");
    }, 1500);
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-8 relative">
      {/* Background */}
      <div className="absolute inset-0 mesh-bg" />
      <div className="absolute top-20 left-20 w-[400px] h-[400px] bg-brand-500/5 rounded-full blur-[100px] animate-float" />
      <div className="absolute bottom-20 right-20 w-[300px] h-[300px] bg-accent-500/5 rounded-full blur-[80px] animate-float" style={{ animationDelay: "3s" }} />

      <div className="w-full max-w-[600px] relative z-10">
        {/* Logo */}
        <div className="flex items-center gap-3 justify-center mb-8">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-brand-500 to-accent-500 flex items-center justify-center">
            <Zap className="w-6 h-6 text-white" />
          </div>
          <div>
            <h1 className="text-xl font-black text-white">AffiliSpeed</h1>
            <p className="text-[9px] text-brand-400 font-bold tracking-[0.2em] uppercase">Engine Pro</p>
          </div>
        </div>

        {/* Progress */}
        <div className="flex items-center justify-center gap-3 mb-8">
          {[1, 2].map((s) => (
            <div key={s} className="flex items-center gap-3">
              <div className={`w-8 h-8 rounded-full flex items-center justify-center text-[12px] font-bold transition-all ${
                step >= s ? "bg-brand-500 text-white" : "bg-white/[0.05] text-slate-500"
              }`}>
                {step > s ? <Check className="w-4 h-4" /> : s}
              </div>
              {s < 2 && (
                <div className={`w-16 h-0.5 rounded-full transition-all ${
                  step > s ? "bg-brand-500" : "bg-white/[0.06]"
                }`} />
              )}
            </div>
          ))}
        </div>

        <div className="glass-card p-8">
          <form onSubmit={handleRegister}>
            {step === 1 && (
              <div className="animate-fade-in space-y-5">
                <div className="text-center mb-6">
                  <h2 className="text-2xl font-black text-white mb-2">Buat Akun Baru</h2>
                  <p className="text-[14px] text-slate-400">Mulai perjalanan affiliate Anda sekarang</p>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="text-[12px] font-semibold text-slate-300 mb-1.5 block">Nama Depan</label>
                    <div className="relative">
                      <User className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
                      <input type="text" placeholder="Ahmad" className="input-field pl-11" required />
                    </div>
                  </div>
                  <div>
                    <label className="text-[12px] font-semibold text-slate-300 mb-1.5 block">Nama Belakang</label>
                    <input type="text" placeholder="Rizky" className="input-field" required />
                  </div>
                </div>

                <div>
                  <label className="text-[12px] font-semibold text-slate-300 mb-1.5 block">Alamat Email</label>
                  <div className="relative">
                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
                    <input type="email" placeholder="nama@email.com" className="input-field pl-11" required />
                  </div>
                </div>

                <div>
                  <label className="text-[12px] font-semibold text-slate-300 mb-1.5 block">Kata Sandi</label>
                  <div className="relative">
                    <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
                    <input
                      type={showPassword ? "text" : "password"}
                      placeholder="Min. 8 karakter"
                      className="input-field pl-11 pr-11"
                      required
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-500 hover:text-white"
                    >
                      {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                    </button>
                  </div>
                </div>

                <button type="submit" className="btn-primary w-full justify-center py-3.5 text-[14px]">
                  Lanjut Pilih Paket
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            )}

            {step === 2 && (
              <div className="animate-fade-in space-y-5">
                <div className="text-center mb-6">
                  <h2 className="text-2xl font-black text-white mb-2">Pilih Paket Anda</h2>
                  <p className="text-[14px] text-slate-400">Mulai gratis, upgrade kapan saja</p>
                </div>

                <div className="space-y-3">
                  {plans.map((plan) => (
                    <button
                      key={plan.key}
                      type="button"
                      onClick={() => setSelectedPlan(plan.key)}
                      className={`w-full p-4 rounded-2xl border text-left transition-all duration-300 ${
                        selectedPlan === plan.key
                          ? `${plan.bg} ${plan.color} ring-1 ring-brand-500/30`
                          : "bg-white/[0.02] border-white/[0.06] hover:bg-white/[0.04]"
                      }`}
                    >
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center gap-2">
                          <h3 className="text-[14px] font-bold text-white">{plan.name}</h3>
                          {plan.popular && (
                            <span className="badge badge-purple text-[9px]">
                              <Crown className="w-2.5 h-2.5" /> Populer
                            </span>
                          )}
                        </div>
                        <div className="text-right">
                          <span className="text-[16px] font-black text-white">{plan.price}</span>
                          {plan.period && <span className="text-[11px] text-slate-500">{plan.period}</span>}
                        </div>
                      </div>
                      <p className="text-[11px] text-slate-500 mb-3">{plan.desc}</p>
                      <div className="flex flex-wrap gap-x-4 gap-y-1">
                        {plan.features.map((f) => (
                          <div key={f} className="flex items-center gap-1 text-[10px] text-slate-400">
                            <Check className="w-3 h-3 text-green-400" />
                            {f}
                          </div>
                        ))}
                      </div>
                    </button>
                  ))}
                </div>

                <div className="flex gap-3">
                  <button
                    type="button"
                    onClick={() => setStep(1)}
                    className="btn-ghost flex-1 justify-center"
                  >
                    <ArrowLeft className="w-4 h-4" /> Kembali
                  </button>
                  <button
                    type="submit"
                    disabled={loading}
                    className="btn-primary flex-1 justify-center py-3.5 text-[14px]"
                  >
                    {loading ? (
                      <div className="flex items-center gap-2">
                        <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        Memproses...
                      </div>
                    ) : (
                      <>
                        Mulai Sekarang
                        <Sparkles className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </div>
              </div>
            )}
          </form>
        </div>

        <p className="text-center text-[13px] text-slate-400 mt-6">
          Sudah punya akun?{" "}
          <Link href="/login" className="text-brand-400 font-semibold hover:text-brand-300 transition-colors">
            Masuk
          </Link>
        </p>
      </div>
    </div>
  );
}
