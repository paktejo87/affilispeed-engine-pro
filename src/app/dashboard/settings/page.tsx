"use client";

import { useState } from "react";
import {
  Settings,
  User,
  Key,
  Bell,
  Shield,
  CreditCard,
  Users,
  Eye,
  EyeOff,
  Copy,
  Plus,
  Trash2,
  Check,
  AlertTriangle,
  Crown,
  Zap,
  Globe,
  Lock,
  Mail,
  Smartphone,
  Save,
  ExternalLink,
} from "lucide-react";

export default function SettingsPage() {
  const [activeTab, setActiveTab] = useState("api");
  const [showMetaKey, setShowMetaKey] = useState(false);
  const [showShopeeKey, setShowShopeeKey] = useState(false);
  const [showTiktokKey, setShowTiktokKey] = useState(false);

  const tabs = [
    { key: "api", label: "API Keys", icon: Key },
    { key: "account", label: "Akun", icon: User },
    { key: "notif", label: "Notifikasi", icon: Bell },
    { key: "billing", label: "Langganan", icon: CreditCard },
    { key: "team", label: "Tim", icon: Users },
    { key: "security", label: "Keamanan", icon: Shield },
  ];

  return (
    <div className="space-y-6 animate-fade-in">
      {/* Header */}
      <div>
        <h1 className="page-title text-white flex items-center gap-3">
          <Settings className="w-7 h-7 text-brand-400" />
          Pengaturan
        </h1>
        <p className="page-subtitle">Konfigurasi akun, API, dan preferensi platform</p>
      </div>

      <div className="flex gap-6">
        {/* Sidebar Tabs */}
        <div className="w-[200px] flex-shrink-0 space-y-1">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            return (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key)}
                className={`w-full flex items-center gap-2.5 px-3 py-2.5 rounded-xl text-[12px] font-semibold transition-all ${
                  activeTab === tab.key
                    ? "bg-brand-500/15 text-brand-400 border border-brand-500/20"
                    : "text-slate-400 hover:bg-white/[0.04] hover:text-white"
                }`}
              >
                <Icon className="w-4 h-4" />
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Content */}
        <div className="flex-1 min-w-0">
          {/* API Keys */}
          {activeTab === "api" && (
            <div className="space-y-4 animate-fade-in">
              <div className="glass-card p-5">
                <div className="flex items-center gap-2 mb-1">
                  <Key className="w-5 h-5 text-brand-400" />
                  <h3 className="text-[15px] font-bold text-white">API Keys</h3>
                </div>
                <p className="text-[12px] text-slate-500 mb-6">
                  Hubungkan akun marketplace dan platform iklan Anda. Semua API key disimpan dengan enkripsi <strong className="text-white">AES-256</strong>.
                </p>

                {/* Meta API */}
                <div className="space-y-4">
                  <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.04]">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-xl bg-blue-500/15 flex items-center justify-center">
                          <span className="text-[16px]">📘</span>
                        </div>
                        <div>
                          <h4 className="text-[13px] font-bold text-white">Meta (Facebook) API</h4>
                          <p className="text-[10px] text-slate-500">Sinkronisasi Ads Spend & Performance</p>
                        </div>
                      </div>
                      <span className="badge badge-green text-[9px]">
                        <Check className="w-2.5 h-2.5" /> Terhubung
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="flex-1 relative">
                        <input
                          type={showMetaKey ? "text" : "password"}
                          value="EAABsbCS1iHgBO9kJjZC7xRd2mK..."
                          readOnly
                          className="input-field text-[12px] py-2 pr-20 font-mono"
                        />
                        <div className="absolute right-2 top-1/2 -translate-y-1/2 flex gap-1">
                          <button
                            onClick={() => setShowMetaKey(!showMetaKey)}
                            className="w-7 h-7 rounded-md bg-white/5 flex items-center justify-center text-slate-400 hover:text-white transition-colors"
                          >
                            {showMetaKey ? <EyeOff className="w-3 h-3" /> : <Eye className="w-3 h-3" />}
                          </button>
                          <button className="w-7 h-7 rounded-md bg-white/5 flex items-center justify-center text-slate-400 hover:text-white transition-colors">
                            <Copy className="w-3 h-3" />
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-1.5 mt-2">
                      <Lock className="w-3 h-3 text-green-400" />
                      <span className="text-[10px] text-green-400">Terenkripsi AES-256</span>
                    </div>
                  </div>

                  {/* Shopee API */}
                  <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.04]">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-xl bg-orange-500/15 flex items-center justify-center">
                          <span className="text-[16px]">🛒</span>
                        </div>
                        <div>
                          <h4 className="text-[13px] font-bold text-white">Shopee Affiliate API</h4>
                          <p className="text-[10px] text-slate-500">Sinkronisasi Komisi & Produk</p>
                        </div>
                      </div>
                      <span className="badge badge-green text-[9px]">
                        <Check className="w-2.5 h-2.5" /> Terhubung
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="flex-1 relative">
                        <input
                          type={showShopeeKey ? "text" : "password"}
                          value="shp_af_9f8e7d6c5b4a3f2e1d..."
                          readOnly
                          className="input-field text-[12px] py-2 pr-20 font-mono"
                        />
                        <div className="absolute right-2 top-1/2 -translate-y-1/2 flex gap-1">
                          <button
                            onClick={() => setShowShopeeKey(!showShopeeKey)}
                            className="w-7 h-7 rounded-md bg-white/5 flex items-center justify-center text-slate-400 hover:text-white transition-colors"
                          >
                            {showShopeeKey ? <EyeOff className="w-3 h-3" /> : <Eye className="w-3 h-3" />}
                          </button>
                          <button className="w-7 h-7 rounded-md bg-white/5 flex items-center justify-center text-slate-400 hover:text-white transition-colors">
                            <Copy className="w-3 h-3" />
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-1.5 mt-2">
                      <Lock className="w-3 h-3 text-green-400" />
                      <span className="text-[10px] text-green-400">Terenkripsi AES-256</span>
                    </div>
                  </div>

                  {/* TikTok API */}
                  <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.04]">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-xl bg-pink-500/15 flex items-center justify-center">
                          <span className="text-[16px]">🎵</span>
                        </div>
                        <div>
                          <h4 className="text-[13px] font-bold text-white">TikTok Shop API</h4>
                          <p className="text-[10px] text-slate-500">Sinkronisasi Komisi & Performa</p>
                        </div>
                      </div>
                      <span className="badge badge-yellow text-[9px]">
                        <AlertTriangle className="w-2.5 h-2.5" /> Belum Terhubung
                      </span>
                    </div>
                    <button className="btn-secondary w-full justify-center text-[12px] py-2.5">
                      <Plus className="w-3.5 h-3.5" /> Hubungkan TikTok Shop
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Account */}
          {activeTab === "account" && (
            <div className="space-y-4 animate-fade-in">
              <div className="glass-card p-6">
                <h3 className="text-[15px] font-bold text-white mb-6">Profil Akun</h3>
                <div className="flex items-center gap-6 mb-6">
                  <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-brand-400 to-accent-400 flex items-center justify-center">
                    <span className="text-2xl font-bold text-white">AR</span>
                  </div>
                  <div>
                    <h4 className="text-[16px] font-bold text-white">Ahmad Rizky</h4>
                    <p className="text-[12px] text-slate-400">ahmad.rizky@email.com</p>
                    <div className="flex items-center gap-2 mt-2">
                      <span className="badge badge-purple text-[9px]">
                        <Crown className="w-2.5 h-2.5" /> Paket Pro
                      </span>
                      <span className="text-[10px] text-slate-500">Bergabung sejak Jan 2025</span>
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-[11px] font-semibold text-slate-400 mb-1.5 block">Nama Lengkap</label>
                    <input type="text" defaultValue="Ahmad Rizky" className="input-field text-[13px]" />
                  </div>
                  <div>
                    <label className="text-[11px] font-semibold text-slate-400 mb-1.5 block">Username</label>
                    <input type="text" defaultValue="user123" className="input-field text-[13px]" />
                  </div>
                  <div>
                    <label className="text-[11px] font-semibold text-slate-400 mb-1.5 block">Email</label>
                    <input type="email" defaultValue="ahmad.rizky@email.com" className="input-field text-[13px]" />
                  </div>
                  <div>
                    <label className="text-[11px] font-semibold text-slate-400 mb-1.5 block">No. WhatsApp</label>
                    <input type="tel" defaultValue="+62 812-3456-7890" className="input-field text-[13px]" />
                  </div>
                </div>
                <button className="btn-primary mt-4">
                  <Save className="w-4 h-4" /> Simpan Perubahan
                </button>
              </div>
            </div>
          )}

          {/* Notifications */}
          {activeTab === "notif" && (
            <div className="space-y-4 animate-fade-in">
              <div className="glass-card p-6">
                <h3 className="text-[15px] font-bold text-white mb-6">Preferensi Notifikasi</h3>
                <div className="space-y-4">
                  {[
                    { label: "Domain Flagging Alert", desc: "Notifikasi saat domain terindikasi flagging oleh Meta", enabled: true },
                    { label: "Konversi Tinggi", desc: "Laporan saat landing page mencapai CTR di atas 10%", enabled: true },
                    { label: "Bot Attack", desc: "Peringatan saat terdeteksi serangan bot beruntun", enabled: true },
                    { label: "Report Mingguan", desc: "Ringkasan performa mingguan via email", enabled: false },
                    { label: "Produk Trending Baru", desc: "Notifikasi saat ada produk winning baru di marketplace", enabled: true },
                    { label: "SSL Expiry Warning", desc: "Peringatan 7 hari sebelum SSL expired", enabled: true },
                  ].map((notif, i) => (
                    <div key={i} className="flex items-center justify-between p-3 rounded-xl bg-white/[0.02] border border-white/[0.04]">
                      <div>
                        <p className="text-[12px] font-semibold text-white">{notif.label}</p>
                        <p className="text-[10px] text-slate-500">{notif.desc}</p>
                      </div>
                      <button className={`toggle-switch ${notif.enabled ? "active" : ""}`} />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Billing */}
          {activeTab === "billing" && (
            <div className="space-y-4 animate-fade-in">
              <div className="glass-card p-6 gradient-border rounded-2xl">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <Crown className="w-5 h-5 text-yellow-400" />
                      <h3 className="text-[16px] font-bold text-white">Paket Pro</h3>
                    </div>
                    <p className="text-[12px] text-slate-400">Berlaku hingga 15 April 2026</p>
                  </div>
                  <div className="text-right">
                    <p className="text-2xl font-black gradient-text">Rp 299.000</p>
                    <p className="text-[11px] text-slate-500">/bulan</p>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-3 mb-6">
                  {[
                    "50 Landing Pages",
                    "5 Custom Domain",
                    "Cloaking Unlimited",
                    "Anti-Spy Shield",
                    "Winning Product Scraper",
                    "Revenue Sync API",
                    "Priority Support",
                    "Template Premium",
                  ].map((feature) => (
                    <div key={feature} className="flex items-center gap-2 text-[11px] text-slate-300">
                      <Check className="w-3.5 h-3.5 text-green-400 flex-shrink-0" />
                      {feature}
                    </div>
                  ))}
                </div>
                <div className="flex gap-3">
                  <button className="btn-primary flex-1 justify-center">
                    <Zap className="w-4 h-4" /> Upgrade ke Enterprise
                  </button>
                  <button className="btn-ghost">Lihat Semua Paket</button>
                </div>
              </div>
            </div>
          )}

          {/* Team */}
          {activeTab === "team" && (
            <div className="space-y-4 animate-fade-in">
              <div className="glass-card p-6">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <h3 className="text-[15px] font-bold text-white">Anggota Tim</h3>
                    <p className="text-[12px] text-slate-500">Kelola akses tim ke dashboard</p>
                  </div>
                  <button className="btn-secondary text-[12px]">
                    <Plus className="w-3.5 h-3.5" /> Undang Anggota
                  </button>
                </div>
                <div className="space-y-3">
                  {[
                    { name: "Ahmad Rizky", email: "ahmad@email.com", role: "Owner", avatar: "AR" },
                    { name: "Siti Nurhaliza", email: "siti@email.com", role: "Editor", avatar: "SN" },
                    { name: "Budi Santoso", email: "budi@email.com", role: "Viewer", avatar: "BS" },
                  ].map((member) => (
                    <div key={member.email} className="flex items-center justify-between p-3 rounded-xl bg-white/[0.02] border border-white/[0.04]">
                      <div className="flex items-center gap-3">
                        <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-brand-400 to-accent-400 flex items-center justify-center">
                          <span className="text-white text-[11px] font-bold">{member.avatar}</span>
                        </div>
                        <div>
                          <p className="text-[12px] font-semibold text-white">{member.name}</p>
                          <p className="text-[10px] text-slate-500">{member.email}</p>
                        </div>
                      </div>
                      <span className={`badge ${
                        member.role === "Owner" ? "badge-purple" : 
                        member.role === "Editor" ? "badge-blue" : "badge-yellow"
                      } text-[9px]`}>
                        {member.role}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Security */}
          {activeTab === "security" && (
            <div className="space-y-4 animate-fade-in">
              <div className="glass-card p-6">
                <h3 className="text-[15px] font-bold text-white mb-6">Keamanan Akun</h3>
                <div className="space-y-4">
                  <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.04]">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-xl bg-green-500/15 flex items-center justify-center">
                          <Lock className="w-5 h-5 text-green-400" />
                        </div>
                        <div>
                          <p className="text-[13px] font-bold text-white">Kata Sandi</p>
                          <p className="text-[10px] text-slate-500">Terakhir diubah 30 hari lalu</p>
                        </div>
                      </div>
                      <button className="btn-ghost text-[11px]">Ubah</button>
                    </div>
                  </div>
                  <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.04]">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-xl bg-brand-500/15 flex items-center justify-center">
                          <Smartphone className="w-5 h-5 text-brand-400" />
                        </div>
                        <div>
                          <p className="text-[13px] font-bold text-white">Autentikasi 2 Faktor (2FA)</p>
                          <p className="text-[10px] text-slate-500">Perlindungan ekstra untuk akun Anda</p>
                        </div>
                      </div>
                      <button className="btn-primary text-[11px] py-1.5">Aktifkan</button>
                    </div>
                  </div>
                  <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.04]">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-xl bg-yellow-500/15 flex items-center justify-center">
                          <Shield className="w-5 h-5 text-yellow-400" />
                        </div>
                        <div>
                          <p className="text-[13px] font-bold text-white">Rate Limiting</p>
                          <p className="text-[10px] text-green-400">● Aktif — Proteksi brute force</p>
                        </div>
                      </div>
                      <span className="badge badge-green text-[9px]">Aktif</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
