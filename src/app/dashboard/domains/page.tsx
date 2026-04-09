"use client";

import { useState } from "react";
import {
  Globe,
  Plus,
  Shield,
  ShieldCheck,
  ShieldAlert,
  Lock,
  Unlock,
  AlertTriangle,
  CheckCircle,
  XCircle,
  Clock,
  ExternalLink,
  Copy,
  Trash2,
  RefreshCw,
  ArrowRight,
  X,
  Info,
  ChevronRight,
  Layers,
  Activity,
} from "lucide-react";
import { domains } from "@/lib/mock-data";

export default function DomainsPage() {
  const [showAddModal, setShowAddModal] = useState(false);
  const [newDomain, setNewDomain] = useState("");

  const healthConfig: Record<string, { label: string; color: string; icon: any; bg: string }> = {
    healthy: { label: "Sehat", color: "text-green-400", icon: CheckCircle, bg: "bg-green-500/15" },
    warning: { label: "Peringatan", color: "text-yellow-400", icon: AlertTriangle, bg: "bg-yellow-500/15" },
    danger: { label: "Bahaya", color: "text-red-400", icon: XCircle, bg: "bg-red-500/15" },
  };

  const sslConfig: Record<string, { label: string; class: string }> = {
    active: { label: "SSL Aktif", class: "badge-green" },
    pending: { label: "SSL Pending", class: "badge-yellow" },
    expired: { label: "SSL Expired", class: "badge-red" },
  };

  return (
    <div className="space-y-6 animate-fade-in">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="page-title text-white flex items-center gap-3">
            <Globe className="w-7 h-7 text-brand-400" />
            Manajemen Domain
          </h1>
          <p className="page-subtitle">Kelola URL default dan domain kustom Anda</p>
        </div>
        <button onClick={() => setShowAddModal(true)} className="btn-primary">
          <Plus className="w-4 h-4" />
          Tambah Domain
        </button>
      </div>

      {/* Domain Rotation Alert */}
      <div className="glass-card p-4 border-l-4 border-l-red-500 animate-slide-up flex items-start gap-3">
        <AlertTriangle className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
        <div className="flex-1">
          <p className="text-[13px] font-bold text-white">⚠️ Domain Rotation Alert</p>
          <p className="text-[12px] text-slate-400 mt-1">
            <strong className="text-red-400">best.dealhunter.co.id</strong> terindikasi flagging oleh sistem Meta. Segera rotate ke domain cadangan untuk menghindari banned.
          </p>
          <div className="flex items-center gap-2 mt-3">
            <button className="btn-danger text-[11px] py-1.5 px-3">
              <RefreshCw className="w-3.5 h-3.5" /> Rotate Domain
            </button>
            <button className="btn-ghost text-[11px] py-1.5 px-3">
              Detail
            </button>
          </div>
        </div>
      </div>

      {/* Default URL */}
      <div className="glass-card p-5 gradient-border rounded-2xl animate-slide-up animate-delay-100">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-brand-500/15 flex items-center justify-center">
              <Layers className="w-6 h-6 text-brand-400" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-[14px] font-bold text-white">URL Default</h3>
                <span className="badge badge-purple text-[9px]">Gratis</span>
              </div>
              <p className="text-[12px] text-slate-400 mt-0.5 flex items-center gap-1">
                <Lock className="w-3 h-3 text-green-400" />
                affilispeed.com/user123/
                <span className="text-brand-400">{"{slug}"}</span>
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <span className="badge badge-green text-[10px]">
              <CheckCircle className="w-3 h-3" /> SSL Aktif
            </span>
            <span className="badge badge-green text-[10px]">
              <Activity className="w-3 h-3" /> 32 LP Aktif
            </span>
          </div>
        </div>
      </div>

      {/* Domain List */}
      <div className="space-y-3">
        <h3 className="text-[13px] font-bold text-slate-400 uppercase tracking-wider">Domain Kustom</h3>
        {domains
          .filter((d) => d.type === "custom")
          .map((domain, i) => {
            const health = healthConfig[domain.health];
            const ssl = sslConfig[domain.sslStatus];
            const HealthIcon = health.icon;

            return (
              <div
                key={domain.id}
                className="glass-card glass-card-hover p-5 animate-slide-up"
                style={{ animationDelay: `${(i + 1) * 100}ms` }}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className={`w-11 h-11 rounded-xl ${health.bg} flex items-center justify-center`}>
                      <HealthIcon className={`w-5 h-5 ${health.color}`} />
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <h3 className="text-[14px] font-bold text-white">{domain.domain}</h3>
                        <button className="text-slate-600 hover:text-white transition-colors">
                          <Copy className="w-3.5 h-3.5" />
                        </button>
                      </div>
                      <div className="flex items-center gap-3 mt-1">
                        <span className={`badge ${ssl.class} text-[9px]`}>
                          <Lock className="w-2.5 h-2.5" /> {ssl.label}
                        </span>
                        <span className={`text-[10px] ${health.color} font-semibold`}>
                          ● {health.label}
                        </span>
                        <span className="text-[10px] text-slate-500">
                          {domain.landingPages} Landing Pages
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <button className="btn-ghost text-[10px] py-1.5 px-3">
                      <ExternalLink className="w-3 h-3" /> Kunjungi
                    </button>
                    <button className="btn-ghost text-[10px] py-1.5 px-3">
                      <RefreshCw className="w-3 h-3" /> Cek SSL
                    </button>
                    <button className="w-8 h-8 rounded-lg bg-red-500/10 border border-red-500/20 flex items-center justify-center text-red-400 hover:bg-red-500/20 transition-colors">
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>

                {/* Warning for danger health */}
                {domain.health === "danger" && (
                  <div className="mt-3 pt-3 border-t border-white/[0.04] flex items-center gap-2">
                    <AlertTriangle className="w-4 h-4 text-red-400" />
                    <p className="text-[11px] text-red-400">
                      Domain ini terindikasi <strong>flagging</strong>. Segera lakukan domain rotation!
                    </p>
                  </div>
                )}

                {domain.health === "warning" && (
                  <div className="mt-3 pt-3 border-t border-white/[0.04] flex items-center gap-2">
                    <AlertTriangle className="w-4 h-4 text-yellow-400" />
                    <p className="text-[11px] text-yellow-400">
                      Peringatan: Domain ini menunjukkan tanda-tanda awal flagging. Monitor secara berkala.
                    </p>
                  </div>
                )}
              </div>
            );
          })}
      </div>

      {/* DNS Instructions */}
      <div className="glass-card p-6 animate-slide-up animate-delay-300">
        <div className="flex items-center gap-2 mb-4">
          <Info className="w-5 h-5 text-blue-400" />
          <h3 className="text-[15px] font-bold text-white">Cara Menghubungkan Domain Kustom</h3>
        </div>
        <div className="space-y-4">
          {[
            { step: "1", title: "Beli domain dari registrar", desc: "Namecheap, GoDaddy, Niagahoster, dll." },
            { step: "2", title: "Tambahkan CNAME record", desc: "Arahkan CNAME ke: proxy.affilispeed.com" },
            { step: "3", title: "Klik \"Tambah Domain\" di atas", desc: "Masukkan domain lalu sistem akan verifikasi DNS" },
            { step: "4", title: "SSL otomatis terpasang", desc: "Sertifikat SSL gratis diterbitkan dalam 1-5 menit" },
          ].map((step) => (
            <div key={step.step} className="flex items-start gap-4">
              <div className="w-8 h-8 rounded-lg bg-brand-500/15 flex items-center justify-center flex-shrink-0">
                <span className="text-[12px] font-bold text-brand-400">{step.step}</span>
              </div>
              <div>
                <p className="text-[13px] font-semibold text-white">{step.title}</p>
                <p className="text-[11px] text-slate-500">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Add Domain Modal */}
      {showAddModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm animate-fade-in">
          <div className="glass-card w-full max-w-[480px] p-6 animate-scale-in mx-4">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-[16px] font-bold text-white">Tambah Domain Kustom</h3>
              <button
                onClick={() => setShowAddModal(false)}
                className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center text-slate-400 hover:text-white transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
            <div className="space-y-4">
              <div>
                <label className="text-[12px] font-semibold text-slate-300 mb-1.5 block">Nama Domain</label>
                <input
                  type="text"
                  value={newDomain}
                  onChange={(e) => setNewDomain(e.target.value)}
                  placeholder="contoh: promo.tokosaya.com"
                  className="input-field"
                />
              </div>
              <div className="p-3 rounded-xl bg-blue-500/10 border border-blue-500/20">
                <p className="text-[11px] text-blue-300">
                  <strong>Penting:</strong> Pastikan CNAME record sudah diarahkan ke <code className="text-blue-200 bg-blue-500/20 px-1 rounded">proxy.affilispeed.com</code> sebelum menambahkan domain.
                </p>
              </div>
              <div className="flex gap-3">
                <button
                  onClick={() => setShowAddModal(false)}
                  className="btn-ghost flex-1 justify-center"
                >
                  Batal
                </button>
                <button className="btn-primary flex-1 justify-center">
                  <Shield className="w-4 h-4" /> Verifikasi & Tambah
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
