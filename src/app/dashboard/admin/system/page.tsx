"use client";

import { useAuth } from "@/lib/auth-context";
import { useRouter } from "next/navigation";
import {
  Database,
  Server,
  Globe,
  Shield,
  Activity,
  HardDrive,
  Cpu,
  MemoryStick,
  Wifi,
  CheckCircle,
  AlertTriangle,
  Ban,
  RefreshCw,
  Settings,
  Clock,
  Zap,
} from "lucide-react";

const servers = [
  { name: "ID-01 (Jakarta)", status: "online", cpu: 23, memory: 61, disk: 44, uptime: "99.99%", region: "🇮🇩 Jakarta", responseTime: "42ms" },
  { name: "SG-01 (Singapore)", status: "online", cpu: 18, memory: 53, disk: 38, uptime: "99.97%", region: "🇸🇬 Singapore", responseTime: "68ms" },
  { name: "SG-02 (Singapore)", status: "warning", cpu: 67, memory: 82, disk: 71, uptime: "99.91%", region: "🇸🇬 Singapore", responseTime: "320ms" },
  { name: "CF-Edge (Global)", status: "online", cpu: 12, memory: 34, disk: 22, uptime: "100%", region: "🌍 Cloudflare", responseTime: "15ms" },
];

const systemConfig = [
  { key: "MAX_LP_PER_USER_FREE", value: "3", desc: "Maks LP untuk paket Free" },
  { key: "MAX_LP_PER_USER_PRO", value: "25", desc: "Maks LP untuk paket Pro" },
  { key: "CLOAKING_FILTER_VERSION", value: "v3.2.1", desc: "Versi engine cloaking" },
  { key: "RATE_LIMIT_API", value: "1000/min", desc: "Rate limit API default" },
  { key: "CDN_CACHE_TTL", value: "3600s", desc: "Cache TTL di Cloudflare" },
  { key: "AUTO_SSL_RENEWAL", value: "true", desc: "Perpanjangan SSL otomatis" },
  { key: "MAINTENANCE_MODE", value: "false", desc: "Mode maintenance platform" },
];

export default function AdminSystemPage() {
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
        <button onClick={() => router.push("/dashboard")} className="btn-primary text-[13px]">Kembali ke Dashboard</button>
      </div>
    );
  }

  const getStatusColor = (status: string) => {
    if (status === "online") return "text-green-400";
    if (status === "warning") return "text-yellow-400";
    return "text-red-400";
  };

  const getBarColor = (value: number) => {
    if (value < 50) return "bg-green-500";
    if (value < 80) return "bg-yellow-500";
    return "bg-red-500";
  };

  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="page-title text-white flex items-center gap-3">
            <Database className="w-7 h-7 text-red-400" />
            Konfigurasi Sistem
          </h1>
          <p className="page-subtitle">Monitor server, performa, dan konfigurasi platform</p>
        </div>
        <button className="btn-ghost text-[12px] py-2">
          <RefreshCw className="w-4 h-4" />
          Refresh
        </button>
      </div>

      {/* Server Status */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {servers.map((server, i) => (
          <div key={i} className="glass-card p-5 animate-slide-up" style={{ animationDelay: `${i * 80}ms` }}>
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                  server.status === "online" ? "bg-green-500/15" : "bg-yellow-500/15"
                }`}>
                  <Server className={`w-5 h-5 ${getStatusColor(server.status)}`} />
                </div>
                <div>
                  <p className="text-[13px] font-bold text-white">{server.name}</p>
                  <p className="text-[10px] text-slate-500">{server.region}</p>
                </div>
              </div>
              <div className="text-right">
                <div className={`flex items-center gap-1.5 text-[11px] font-semibold ${getStatusColor(server.status)}`}>
                  {server.status === "online" ? <CheckCircle className="w-3.5 h-3.5" /> : <AlertTriangle className="w-3.5 h-3.5" />}
                  {server.status === "online" ? "Online" : "Warning"}
                </div>
                <p className="text-[10px] text-slate-500 mt-0.5">{server.responseTime}</p>
              </div>
            </div>

            <div className="space-y-2.5">
              {[
                { label: "CPU", value: server.cpu },
                { label: "Memory", value: server.memory },
                { label: "Disk", value: server.disk },
              ].map((metric) => (
                <div key={metric.label}>
                  <div className="flex justify-between text-[10px] mb-1">
                    <span className="text-slate-500">{metric.label}</span>
                    <span className={metric.value > 80 ? "text-red-400" : metric.value > 50 ? "text-yellow-400" : "text-green-400"}>
                      {metric.value}%
                    </span>
                  </div>
                  <div className="w-full h-1.5 rounded bg-white/[0.06]">
                    <div className={`h-full rounded ${getBarColor(metric.value)} transition-all`} style={{ width: `${metric.value}%` }} />
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-3 pt-3 border-t border-white/[0.04] flex justify-between text-[10px]">
              <span className="text-slate-500">Uptime: <strong className="text-white">{server.uptime}</strong></span>
            </div>
          </div>
        ))}
      </div>

      {/* System Config */}
      <div className="glass-card p-6">
        <h3 className="text-[15px] font-bold text-white mb-4 flex items-center gap-2">
          <Settings className="w-5 h-5 text-red-400" />
          Variabel Konfigurasi
        </h3>
        <div className="space-y-2">
          {systemConfig.map((config, i) => (
            <div key={i} className="flex items-center justify-between p-3 rounded-xl bg-white/[0.02] border border-white/[0.04] hover:bg-white/[0.04] transition-colors">
              <div className="flex items-center gap-3">
                <code className="text-[11px] text-brand-400 font-mono bg-brand-500/10 px-2 py-0.5 rounded">
                  {config.key}
                </code>
                <span className="text-[11px] text-slate-500">{config.desc}</span>
              </div>
              <div className="flex items-center gap-2">
                <code className="text-[12px] text-white font-mono font-semibold">{config.value}</code>
                <button className="w-7 h-7 rounded-lg hover:bg-white/[0.04] flex items-center justify-center text-slate-500 hover:text-white transition-colors">
                  <Settings className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
