"use client";

import { useAuth } from "@/lib/auth-context";
import { useRouter } from "next/navigation";
import {
  BarChart3,
  Users,
  TrendingUp,
  Globe,
  Activity,
  Zap,
  Shield,
  ArrowUpRight,
  ArrowDownRight,
  Ban,
  Server,
  Clock,
} from "lucide-react";

const platformStats = [
  { label: "Total Pengguna", value: "2.847", change: "+12.3%", up: true, icon: Users, color: "text-brand-400", bg: "bg-brand-500/15" },
  { label: "LP Aktif", value: "18.432", change: "+8.7%", up: true, icon: Globe, color: "text-green-400", bg: "bg-green-500/15" },
  { label: "Revenue Platform", value: "Rp 1.2B", change: "+23.1%", up: true, icon: TrendingUp, color: "text-yellow-400", bg: "bg-yellow-500/15" },
  { label: "Bot Diblokir Hari Ini", value: "45.219", change: "+5.2%", up: true, icon: Shield, color: "text-red-400", bg: "bg-red-500/15" },
  { label: "Avg Response Time", value: "142ms", change: "-8.3%", up: true, icon: Zap, color: "text-accent-400", bg: "bg-accent-500/15" },
  { label: "Uptime", value: "99.97%", change: "SLA OK", up: true, icon: Activity, color: "text-emerald-400", bg: "bg-emerald-500/15" },
];

const topUsers = [
  { name: "Farhan Wijaya", revenue: "Rp 156.3M", lps: 42, plan: "enterprise" },
  { name: "Siti Nurhaliza", revenue: "Rp 89.7M", lps: 34, plan: "enterprise" },
  { name: "Reza Firmansyah", revenue: "Rp 22.8M", lps: 15, plan: "pro" },
  { name: "Ahmad Rizky", revenue: "Rp 15.2M", lps: 12, plan: "pro" },
  { name: "Dewi Lestari", revenue: "Rp 6.1M", lps: 8, plan: "pro" },
];

const recentEvents = [
  { type: "signup", message: "User baru: maya.p@email.com mendaftar paket Free", time: "2 menit lalu", icon: Users, color: "text-green-400" },
  { type: "upgrade", message: "budi.s@yahoo.com upgrade dari Free ke Pro", time: "15 menit lalu", icon: TrendingUp, color: "text-brand-400" },
  { type: "block", message: "1.247 bot diblokir dari 103.28.x.x (Facebook Crawler)", time: "30 menit lalu", icon: Shield, color: "text-red-400" },
  { type: "alert", message: "Server SG-02 response time naik ke 320ms", time: "1 jam lalu", icon: Server, color: "text-yellow-400" },
  { type: "signup", message: "User baru: farhan.w@email.com mendaftar paket Enterprise", time: "2 jam lalu", icon: Users, color: "text-green-400" },
];

export default function AdminAnalyticsPage() {
  const { isAdmin } = useAuth();
  const router = useRouter();

  if (!isAdmin) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh] text-center animate-fade-in">
        <div className="w-20 h-20 rounded-2xl bg-red-500/10 flex items-center justify-center mb-4">
          <Ban className="w-10 h-10 text-red-400" />
        </div>
        <h2 className="text-xl font-bold text-white mb-2">Akses Ditolak</h2>
        <p className="text-[14px] text-slate-400 mb-6">Hanya Admin yang dapat mengakses halaman ini.</p>
        <button onClick={() => router.push("/dashboard")} className="btn-primary text-[13px]">
          Kembali ke Dashboard
        </button>
      </div>
    );
  }

  return (
    <div className="space-y-6 animate-fade-in">
      {/* Header */}
      <div>
        <h1 className="page-title text-white flex items-center gap-3">
          <BarChart3 className="w-7 h-7 text-red-400" />
          Analytics Platform
        </h1>
        <p className="page-subtitle">Statistik real-time seluruh platform AffiliSpeed Engine Pro</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {platformStats.map((stat, i) => {
          const Icon = stat.icon;
          return (
            <div key={i} className="glass-card glass-card-hover p-5 animate-slide-up" style={{ animationDelay: `${i * 80}ms` }}>
              <div className="flex items-center justify-between mb-3">
                <div className={`w-10 h-10 rounded-xl ${stat.bg} flex items-center justify-center`}>
                  <Icon className={`w-5 h-5 ${stat.color}`} />
                </div>
                <div className={`flex items-center gap-1 text-[11px] font-semibold ${stat.up ? "text-green-400" : "text-red-400"}`}>
                  {stat.up ? <ArrowUpRight className="w-3.5 h-3.5" /> : <ArrowDownRight className="w-3.5 h-3.5" />}
                  {stat.change}
                </div>
              </div>
              <p className="text-2xl font-black text-white mb-0.5">{stat.value}</p>
              <p className="text-[12px] text-slate-400">{stat.label}</p>
            </div>
          );
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Top Users */}
        <div className="glass-card p-6 animate-slide-up" style={{ animationDelay: "200ms" }}>
          <h3 className="text-[15px] font-bold text-white mb-4 flex items-center gap-2">
            <TrendingUp className="w-5 h-5 text-yellow-400" />
            Top Revenue Users
          </h3>
          <div className="space-y-3">
            {topUsers.map((user, i) => (
              <div key={i} className="flex items-center justify-between p-3 rounded-xl bg-white/[0.02] border border-white/[0.04] hover:bg-white/[0.04] transition-colors">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-yellow-400/20 to-orange-400/20 flex items-center justify-center text-[12px] font-bold text-yellow-400">
                    #{i + 1}
                  </div>
                  <div>
                    <p className="text-[12px] font-semibold text-white">{user.name}</p>
                    <p className="text-[10px] text-slate-500">{user.lps} Landing Pages</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-[12px] font-bold text-green-400">{user.revenue}</p>
                  <span className={`badge text-[8px] ${user.plan === "enterprise" ? "badge-yellow" : "badge-purple"}`}>
                    {user.plan}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Recent Events */}
        <div className="glass-card p-6 animate-slide-up" style={{ animationDelay: "300ms" }}>
          <h3 className="text-[15px] font-bold text-white mb-4 flex items-center gap-2">
            <Activity className="w-5 h-5 text-brand-400" />
            Event Log Real-Time
            <div className="live-dot ml-1" />
          </h3>
          <div className="space-y-3">
            {recentEvents.map((event, i) => {
              const Icon = event.icon;
              return (
                <div key={i} className="flex items-start gap-3 p-3 rounded-xl bg-white/[0.02] border border-white/[0.04]">
                  <div className="w-8 h-8 rounded-lg bg-white/[0.04] flex items-center justify-center flex-shrink-0">
                    <Icon className={`w-4 h-4 ${event.color}`} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-[11px] text-slate-300">{event.message}</p>
                    <p className="text-[10px] text-slate-500 flex items-center gap-1 mt-0.5">
                      <Clock className="w-3 h-3" />
                      {event.time}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
