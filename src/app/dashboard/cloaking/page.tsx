"use client";

import { useState } from "react";
import {
  Shield,
  ShieldCheck,
  ShieldAlert,
  ShieldOff,
  Eye,
  EyeOff,
  Globe,
  Wifi,
  Server,
  MapPin,
  Fingerprint,
  Zap,
  AlertTriangle,
  CheckCircle,
  XCircle,
  Clock,
  Search,
  Filter,
  Activity,
  BarChart3,
  TrendingUp,
  Bot,
  Smartphone,
  Monitor,
  ExternalLink,
  ChevronRight,
  ArrowRight,
} from "lucide-react";
import { formatNumber, timeAgo } from "@/lib/utils";
import { trafficLogs, landingPages } from "@/lib/mock-data";

export default function CloakingPage() {
  const [activeSection, setActiveSection] = useState<"overview" | "sieve" | "routing" | "spy" | "log">("overview");
  const [cloakingEnabled, setCloakingEnabled] = useState(true);
  const [ipFilter, setIpFilter] = useState(true);
  const [ispFilter, setIspFilter] = useState(true);
  const [geoFilter, setGeoFilter] = useState(true);
  const [humanFingerprint, setHumanFingerprint] = useState(true);
  const [antiAdSpy, setAntiAdSpy] = useState(true);
  const [antiMinea, setAntiMinea] = useState(true);
  const [antiBigSpy, setAntiBigSpy] = useState(true);

  const cloakingStats = [
    { label: "Bot Diblokir", value: "15.832", change: "+234 hari ini", icon: Bot, color: "text-red-400", bg: "bg-red-500/15" },
    { label: "Visitor Asli", value: "284.5K", change: "+12.3% minggu ini", icon: Smartphone, color: "text-green-400", bg: "bg-green-500/15" },
    { label: "Halaman Dilindungi", value: "47", change: "Semua aktif", icon: ShieldCheck, color: "text-brand-400", bg: "bg-brand-500/15" },
    { label: "Akurasi Filter", value: "99.7%", change: "Grade A+", icon: Target, color: "text-yellow-400", bg: "bg-yellow-500/15" },
  ];

  const Target = BarChart3;

  return (
    <div className="space-y-6 animate-fade-in">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="page-title text-white flex items-center gap-3">
            <Shield className="w-7 h-7 text-brand-400" />
            Ghost Layer
          </h1>
          <p className="page-subtitle">Pertahanan siluman — Lindungi akun iklan & aset intelektual Anda</p>
        </div>
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/[0.04] border border-white/[0.06]">
            <div className={`live-dot ${!cloakingEnabled && "!bg-red-500 !shadow-red-500/50"}`} />
            <span className="text-[12px] font-semibold text-white">
              {cloakingEnabled ? "Cloaking Aktif" : "Cloaking Nonaktif"}
            </span>
          </div>
          <button
            onClick={() => setCloakingEnabled(!cloakingEnabled)}
            className={`toggle-switch ${cloakingEnabled ? "active" : ""}`}
            style={{ width: "52px" }}
          />
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {cloakingStats.map((stat, i) => {
          const Icon = stat.icon;
          return (
            <div
              key={i}
              className="glass-card glass-card-hover p-5 animate-slide-up"
              style={{ animationDelay: `${i * 80}ms` }}
            >
              <div className="flex items-center gap-3 mb-3">
                <div className={`w-10 h-10 rounded-xl ${stat.bg} flex items-center justify-center`}>
                  <Icon className={`w-5 h-5 ${stat.color}`} />
                </div>
                <div>
                  <p className="text-[12px] text-slate-400">{stat.label}</p>
                  <p className="text-xl font-black text-white">{stat.value}</p>
                </div>
              </div>
              <p className="text-[10px] text-slate-500">{stat.change}</p>
            </div>
          );
        })}
      </div>

      {/* Navigation Tabs */}
      <div className="flex gap-2 overflow-x-auto pb-2">
        {[
          { key: "overview", label: "Ringkasan", icon: Activity },
          { key: "sieve", label: "Traffic Sieve", icon: Filter },
          { key: "routing", label: "Mirage Routing", icon: Globe },
          { key: "spy", label: "Anti-Spy Shield", icon: EyeOff },
          { key: "log", label: "Traffic Log", icon: Clock },
        ].map((tab) => {
          const Icon = tab.icon;
          return (
            <button
              key={tab.key}
              onClick={() => setActiveSection(tab.key as any)}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-[12px] font-semibold whitespace-nowrap transition-all ${
                activeSection === tab.key
                  ? "bg-brand-500/20 text-brand-400 border border-brand-500/30"
                  : "bg-white/[0.03] text-slate-400 border border-white/[0.06] hover:bg-white/[0.06]"
              }`}
            >
              <Icon className="w-4 h-4" />
              {tab.label}
            </button>
          );
        })}
      </div>

      {/* Overview */}
      {activeSection === "overview" && (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Traffic Sieve Status */}
          <div className="glass-card p-6 animate-slide-up">
            <div className="flex items-center gap-2 mb-5">
              <Filter className="w-5 h-5 text-brand-400" />
              <h3 className="text-[15px] font-bold text-white">Traffic Sieve</h3>
            </div>
            <div className="space-y-3">
              {[
                { label: "IP Blacklist (Data Center Meta)", enabled: ipFilter, icon: Server, desc: "Memblokir IP dari Facebook, Google Cloud, AWS" },
                { label: "ISP Filter (Mobile Only)", enabled: ispFilter, icon: Wifi, desc: "Hanya izinkan ISP mobile Indonesia" },
                { label: "Geolocation (Indonesia Only)", enabled: geoFilter, icon: MapPin, desc: "Blokir traffic dari luar Indonesia" },
                { label: "Human Fingerprinting", enabled: humanFingerprint, icon: Fingerprint, desc: "Deteksi perilaku manusia (scroll/touch)" },
              ].map((filter, i) => {
                const FilterIcon = filter.icon;
                return (
                  <div key={i} className="flex items-center justify-between p-3 rounded-xl bg-white/[0.02] border border-white/[0.04]">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-lg bg-brand-500/10 flex items-center justify-center">
                        <FilterIcon className="w-4 h-4 text-brand-400" />
                      </div>
                      <div>
                        <p className="text-[12px] font-semibold text-white">{filter.label}</p>
                        <p className="text-[10px] text-slate-500">{filter.desc}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className={`badge ${filter.enabled ? "badge-green" : "badge-red"} text-[9px]`}>
                        {filter.enabled ? "Aktif" : "Mati"}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Protected Pages */}
          <div className="glass-card p-6 animate-slide-up animate-delay-100">
            <div className="flex items-center justify-between mb-5">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-accent-400" />
                <h3 className="text-[15px] font-bold text-white">Halaman Terlindungi</h3>
              </div>
              <span className="badge badge-green text-[10px]">
                {landingPages.filter((lp) => lp.cloakingEnabled).length} Aktif
              </span>
            </div>
            <div className="space-y-2">
              {landingPages.filter((lp) => lp.cloakingEnabled).map((lp) => (
                <div key={lp.id} className="flex items-center justify-between p-3 rounded-xl bg-white/[0.02] border border-white/[0.04] hover:bg-white/[0.04] transition-colors">
                  <div className="flex items-center gap-3">
                    <span className="text-xl">{lp.thumbnail}</span>
                    <div>
                      <p className="text-[12px] font-semibold text-white">{lp.title}</p>
                      <p className="text-[10px] text-slate-500">{lp.domain}/{lp.slug}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Shield className="w-4 h-4 text-brand-400" />
                    <ChevronRight className="w-4 h-4 text-slate-600" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Traffic Sieve */}
      {activeSection === "sieve" && (
        <div className="space-y-4 animate-fade-in">
          {[
            { label: "IP Blacklist (Data Center Meta)", enabled: ipFilter, setEnabled: setIpFilter, icon: Server, color: "text-red-400", bg: "bg-red-500/10",
              desc: "Otomatis memblokir IP dari data center Meta (Facebook), Google Cloud, Amazon AWS, dan server farm lainnya.",
              details: ["157.240.0.0/16 — Facebook", "66.220.0.0/16 — Facebook", "35.0.0.0/8 — Google Cloud", "52.0.0.0/8 — Amazon AWS"] },
            { label: "ISP Filter (Mobile Only)", enabled: ispFilter, setEnabled: setIspFilter, icon: Wifi, color: "text-blue-400", bg: "bg-blue-500/10",
              desc: "Hanya mengizinkan traffic dari ISP mobile Indonesia yang sah. Server dan VPN akan diblokir.",
              details: ["✅ Telkomsel", "✅ Indosat Ooredoo", "✅ XL Axiata", "✅ Smartfren", "❌ Data Center", "❌ VPN/Proxy"] },
            { label: "Geolocation (Indonesia Only)", enabled: geoFilter, setEnabled: setGeoFilter, icon: MapPin, color: "text-green-400", bg: "bg-green-500/10",
              desc: "Memblokir semua traffic dari luar Indonesia. Reviewer Meta biasanya dari US/SG.",
              details: ["🇮🇩 Indonesia — Diizinkan", "🇺🇸 United States — Diblokir", "🇸🇬 Singapore — Diblokir", "🌍 Lainnya — Diblokir"] },
            { label: "Human Fingerprinting", enabled: humanFingerprint, setEnabled: setHumanFingerprint, icon: Fingerprint, color: "text-brand-400", bg: "bg-brand-500/10",
              desc: "Money Page hanya aktif setelah terdeteksi perilaku manusia: scroll, sentuhan layar, atau gerakan mouse.",
              details: ["👆 Touch event detection", "📜 Scroll depth > 20%", "🖱️ Mouse movement pattern", "⏱️ Time on page > 3 detik"] },
          ].map((filter, i) => (
            <div key={i} className="glass-card p-6 animate-slide-up" style={{ animationDelay: `${i * 80}ms` }}>
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className={`w-11 h-11 rounded-xl ${filter.bg} flex items-center justify-center`}>
                    <filter.icon className={`w-5 h-5 ${filter.color}`} />
                  </div>
                  <div>
                    <h3 className="text-[14px] font-bold text-white">{filter.label}</h3>
                    <p className="text-[11px] text-slate-500 mt-0.5 max-w-md">{filter.desc}</p>
                  </div>
                </div>
                <button
                  onClick={() => filter.setEnabled(!filter.enabled)}
                  className={`toggle-switch ${filter.enabled ? "active" : ""}`}
                />
              </div>
              {filter.enabled && (
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2 mt-4 pt-4 border-t border-white/[0.04]">
                  {filter.details.map((detail, j) => (
                    <div key={j} className="px-3 py-2 rounded-lg bg-white/[0.02] border border-white/[0.04] text-[11px] text-slate-400">
                      {detail}
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      )}

      {/* Mirage Routing */}
      {activeSection === "routing" && (
        <div className="animate-fade-in">
          <div className="glass-card p-6 mb-6">
            <h3 className="text-[15px] font-bold text-white mb-2">Cara Kerja Mirage Routing</h3>
            <p className="text-[12px] text-slate-400 leading-relaxed mb-6">
              Bot Meta & spy tool akan diarahkan ke <strong className="text-white">White Page</strong> (halaman aman/blog edukatif), 
              sedangkan pembeli asli akan melihat <strong className="text-brand-400">Money Page</strong> (halaman penawaran agresif).
            </p>
            
            {/* Visual Diagram */}
            <div className="flex items-stretch gap-4">
              {/* Source */}
              <div className="w-[180px] glass-card p-4 flex flex-col items-center justify-center">
                <Globe className="w-8 h-8 text-slate-400 mb-2" />
                <p className="text-[12px] font-bold text-white">Visitor Masuk</p>
                <p className="text-[10px] text-slate-500">dari Meta Ads</p>
              </div>

              {/* Arrow */}
              <div className="flex items-center">
                <ArrowRight className="w-6 h-6 text-brand-400" />
              </div>

              {/* Filter */}
              <div className="w-[200px] glass-card p-4 flex flex-col items-center justify-center gradient-border">
                <Shield className="w-8 h-8 text-brand-400 mb-2" />
                <p className="text-[12px] font-bold text-white">Ghost Layer</p>
                <p className="text-[10px] text-slate-500">Analisis real-time</p>
                <div className="flex gap-1 mt-2">
                  <span className="badge badge-green text-[8px]">IP</span>
                  <span className="badge badge-blue text-[8px]">ISP</span>
                  <span className="badge badge-purple text-[8px]">Geo</span>
                </div>
              </div>

              {/* Arrow */}
              <div className="flex flex-col items-center justify-center">
                <div className="flex items-center gap-1 mb-4">
                  <div className="w-[40px] h-[2px] bg-red-500/50" />
                  <span className="text-[9px] text-red-400">Bot</span>
                  <ArrowRight className="w-4 h-4 text-red-400" />
                </div>
                <div className="flex items-center gap-1">
                  <div className="w-[40px] h-[2px] bg-green-500/50" />
                  <span className="text-[9px] text-green-400">Human</span>
                  <ArrowRight className="w-4 h-4 text-green-400" />
                </div>
              </div>

              {/* Destinations */}
              <div className="flex flex-col gap-3 flex-1">
                <div className="glass-card p-4 border-l-2 border-l-slate-400 flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <Eye className="w-4 h-4 text-slate-400" />
                    <p className="text-[12px] font-bold text-white">White Page</p>
                  </div>
                  <p className="text-[10px] text-slate-500">Blog edukatif, artikel review, konten aman untuk reviewer Meta</p>
                  <div className="mt-2 p-2 rounded-lg bg-white/[0.02] border border-white/[0.04]">
                    <p className="text-[10px] text-slate-500">URL: https://domain.com/blog/tips-kecantikan</p>
                  </div>
                </div>
                <div className="glass-card p-4 border-l-2 border-l-accent-400 flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <Zap className="w-4 h-4 text-accent-400" />
                    <p className="text-[12px] font-bold text-white">Money Page</p>
                  </div>
                  <p className="text-[10px] text-slate-500">Halaman penawaran agresif dengan semua conversion widget aktif</p>
                  <div className="mt-2 p-2 rounded-lg bg-white/[0.02] border border-white/[0.04]">
                    <p className="text-[10px] text-accent-400">URL: https://domain.com/promo/serum-diskon-64</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Per-page Routing Config */}
          <div className="glass-card p-6">
            <h3 className="text-[15px] font-bold text-white mb-4">Konfigurasi Per Halaman</h3>
            <div className="space-y-3">
              {landingPages.filter((lp) => lp.status === "published").map((lp) => (
                <div key={lp.id} className="flex items-center justify-between p-4 rounded-xl bg-white/[0.02] border border-white/[0.04]">
                  <div className="flex items-center gap-3">
                    <span className="text-xl">{lp.thumbnail}</span>
                    <div>
                      <p className="text-[12px] font-bold text-white">{lp.title}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className={`badge ${lp.cloakingEnabled ? "badge-green" : "badge-red"} text-[10px]`}>
                      {lp.cloakingEnabled ? "Cloaked" : "Tanpa Cloak"}
                    </span>
                    <button className="btn-ghost text-[10px] py-1.5 px-3">
                      Konfigurasi
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Anti-Spy Shield */}
      {activeSection === "spy" && (
        <div className="space-y-4 animate-fade-in">
          <div className="glass-card p-6">
            <div className="flex items-center gap-2 mb-2">
              <EyeOff className="w-5 h-5 text-red-400" />
              <h3 className="text-[15px] font-bold text-white">Anti-Spy Shield</h3>
            </div>
            <p className="text-[12px] text-slate-400 mb-6">
              Memblokir akses dari robot mata-mata iklan kompetitor. Jaga winning product Anda tetap rahasia.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {[
                { name: "AdSpy", enabled: antiAdSpy, setEnabled: setAntiAdSpy, blocked: "3.421", desc: "Scanner iklan terpopuler", color: "text-blue-400" },
                { name: "Minea", enabled: antiMinea, setEnabled: setAntiMinea, blocked: "1.876", desc: "E-commerce spy tool", color: "text-green-400" },
                { name: "BigSpy", enabled: antiBigSpy, setEnabled: setAntiBigSpy, blocked: "2.109", desc: "Ads intelligence tool", color: "text-yellow-400" },
              ].map((spy) => (
                <div key={spy.name} className="glass-card p-5">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <h4 className="text-[14px] font-bold text-white">{spy.name}</h4>
                      <p className="text-[10px] text-slate-500">{spy.desc}</p>
                    </div>
                    <button
                      onClick={() => spy.setEnabled(!spy.enabled)}
                      className={`toggle-switch ${spy.enabled ? "active" : ""}`}
                    />
                  </div>
                  <div className="flex items-center gap-2 p-2 rounded-lg bg-white/[0.02]">
                    <XCircle className="w-3.5 h-3.5 text-red-400" />
                    <span className="text-[11px] text-slate-400">
                      <strong className="text-white">{spy.blocked}</strong> akses diblokir
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Traffic Log */}
      {activeSection === "log" && (
        <div className="glass-card p-6 animate-fade-in">
          <div className="flex items-center justify-between mb-5">
            <div className="flex items-center gap-2">
              <Activity className="w-5 h-5 text-brand-400" />
              <h3 className="text-[15px] font-bold text-white">Traffic Log Real-Time</h3>
              <div className="live-dot ml-2" />
            </div>
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
              <input
                type="text"
                placeholder="Cari IP, ISP, atau halaman..."
                className="input-field text-[12px] py-2 pl-10 w-[240px]"
              />
            </div>
          </div>

          {/* Table */}
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-white/[0.06]">
                  {["Waktu", "IP", "Negara", "ISP", "Device", "Halaman", "Aksi", "Alasan"].map((header) => (
                    <th key={header} className="text-left text-[10px] font-bold text-slate-500 uppercase tracking-wider py-3 px-3">
                      {header}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {trafficLogs.map((log) => (
                  <tr key={log.id} className="border-b border-white/[0.03] hover:bg-white/[0.02] transition-colors">
                    <td className="py-3 px-3 text-[11px] text-slate-400">{timeAgo(log.timestamp)}</td>
                    <td className="py-3 px-3 text-[11px] text-white font-mono">{log.ip}</td>
                    <td className="py-3 px-3 text-[11px]">
                      <span className={log.country === "ID" ? "text-green-400" : "text-red-400"}>
                        {log.country === "ID" ? "🇮🇩" : log.country === "US" ? "🇺🇸" : "🇸🇬"} {log.country}
                      </span>
                    </td>
                    <td className="py-3 px-3 text-[11px] text-slate-400">{log.isp}</td>
                    <td className="py-3 px-3">
                      <span className={`badge text-[9px] ${log.device === "Bot" ? "badge-red" : "badge-green"}`}>
                        {log.device}
                      </span>
                    </td>
                    <td className="py-3 px-3 text-[11px] text-slate-400">{log.page}</td>
                    <td className="py-3 px-3">
                      <span className={`badge text-[9px] ${
                        log.action === "allowed" ? "badge-green" :
                        log.action === "blocked" ? "badge-red" : "badge-yellow"
                      }`}>
                        {log.action === "allowed" ? "✓ Lolos" :
                         log.action === "blocked" ? "✕ Blokir" : "↗ Redirect"}
                      </span>
                    </td>
                    <td className="py-3 px-3 text-[11px] text-slate-500">{log.reason}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
}
