"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ArrowLeft,
  Smartphone,
  Monitor,
  Eye,
  Download,
  Upload,
  Save,
  Image as ImageIcon,
  Type,
  Link2,
  DollarSign,
  Tag,
  ShoppingCart,
  Flame,
  Users,
  ArrowDown,
  Star,
  Shield,
  Truck,
  Clock,
  ChevronDown,
  ChevronUp,
  Zap,
  ArrowUpRight,
  Settings,
  ToggleLeft,
  ToggleRight,
  X,
  Check,
  Palette,
  Layout,
} from "lucide-react";

interface FormData {
  productName: string;
  productDescription: string;
  price: string;
  originalPrice: string;
  ctaText: string;
  ctaLink: string;
  sellerName: string;
  category: string;
  benefits: string[];
  platform: "shopee" | "tiktok" | "both";
}

interface WidgetConfig {
  fomo: boolean;
  fomoStock: number;
  socialProof: boolean;
  stickyCta: boolean;
  trustBadges: boolean;
  urgencyTimer: boolean;
  timerMinutes: number;
  reviewStars: boolean;
  reviewCount: number;
}

export default function BuilderEditorPage() {
  const [activeTab, setActiveTab] = useState<"content" | "widgets" | "style">("content");
  const [viewMode, setViewMode] = useState<"mobile" | "desktop">("mobile");
  const [formData, setFormData] = useState<FormData>({
    productName: "Serum Niacinamide 10% + Zinc",
    productDescription: "Serum wajah premium yang mengandung Niacinamide 10% dan Zinc untuk mengurangi pori-pori dan mengontrol minyak berlebih. Cocok untuk semua jenis kulit.",
    price: "89.000",
    originalPrice: "250.000",
    ctaText: "🛒 BELI SEKARANG - DISKON 64%!",
    ctaLink: "https://shopee.co.id/product/12345",
    sellerName: "BeautyLab Official",
    category: "Kecantikan",
    benefits: [
      "Mencerahkan kulit dalam 7 hari",
      "Mengecilkan pori-pori",
      "Mengontrol minyak berlebih",
      "BPOM Certified & Halal",
    ],
    platform: "both",
  });

  const [widgets, setWidgets] = useState<WidgetConfig>({
    fomo: true,
    fomoStock: 12,
    socialProof: true,
    stickyCta: true,
    trustBadges: true,
    urgencyTimer: true,
    timerMinutes: 15,
    reviewStars: true,
    reviewCount: 4827,
  });

  const [expandedSection, setExpandedSection] = useState<string | null>("basic");

  const toggleSection = (section: string) => {
    setExpandedSection(expandedSection === section ? null : section);
  };

  const updateWidget = (key: keyof WidgetConfig, value: any) => {
    setWidgets((prev) => ({ ...prev, [key]: value }));
  };

  return (
    <div className="animate-fade-in -m-6">
      {/* Top Bar */}
      <div className="h-[56px] bg-navy-900/95 backdrop-blur-xl border-b border-white/[0.06] flex items-center justify-between px-4 sticky top-0 z-30">
        <div className="flex items-center gap-3">
          <Link
            href="/dashboard/builder"
            className="w-8 h-8 rounded-lg bg-white/[0.04] border border-white/[0.06] flex items-center justify-center text-slate-400 hover:text-white hover:bg-white/[0.08] transition-all"
          >
            <ArrowLeft className="w-4 h-4" />
          </Link>
          <div>
            <h1 className="text-[13px] font-bold text-white">{formData.productName || "Halaman Baru"}</h1>
            <p className="text-[10px] text-slate-500">Draft • Belum dipublikasi</p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          {/* View Mode Toggle */}
          <div className="flex items-center bg-white/[0.04] rounded-lg p-0.5 border border-white/[0.06]">
            <button
              onClick={() => setViewMode("mobile")}
              className={`w-8 h-7 rounded-md flex items-center justify-center transition-all ${
                viewMode === "mobile" ? "bg-brand-500/20 text-brand-400" : "text-slate-400 hover:text-white"
              }`}
            >
              <Smartphone className="w-3.5 h-3.5" />
            </button>
            <button
              onClick={() => setViewMode("desktop")}
              className={`w-8 h-7 rounded-md flex items-center justify-center transition-all ${
                viewMode === "desktop" ? "bg-brand-500/20 text-brand-400" : "text-slate-400 hover:text-white"
              }`}
            >
              <Monitor className="w-3.5 h-3.5" />
            </button>
          </div>

          <button className="btn-ghost text-[11px] py-1.5 px-3">
            <Eye className="w-3.5 h-3.5" /> Preview
          </button>
          <button className="btn-ghost text-[11px] py-1.5 px-3">
            <Download className="w-3.5 h-3.5" /> HTML
          </button>
          <button className="btn-success text-[11px] py-1.5 px-3">
            <Upload className="w-3.5 h-3.5" /> Publikasi
          </button>
        </div>
      </div>

      <div className="flex h-[calc(100vh-56px)]">
        {/* Left Panel: Controls */}
        <div className="w-[340px] border-r border-white/[0.06] bg-navy-900/50 overflow-y-auto flex-shrink-0">
          {/* Tabs */}
          <div className="flex border-b border-white/[0.06]">
            {[
              { key: "content", label: "Konten", icon: Type },
              { key: "widgets", label: "Widget", icon: Zap },
              { key: "style", label: "Gaya", icon: Palette },
            ].map((tab) => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.key}
                  onClick={() => setActiveTab(tab.key as any)}
                  className={`flex-1 flex items-center justify-center gap-1.5 py-3 text-[11px] font-semibold transition-all border-b-2 ${
                    activeTab === tab.key
                      ? "text-brand-400 border-brand-500 bg-brand-500/5"
                      : "text-slate-500 border-transparent hover:text-white hover:bg-white/[0.02]"
                  }`}
                >
                  <Icon className="w-3.5 h-3.5" />
                  {tab.label}
                </button>
              );
            })}
          </div>

          {/* Content Tab */}
          {activeTab === "content" && (
            <div className="p-4 space-y-3">
              {/* Basic Info */}
              <div className="glass-card overflow-hidden">
                <button onClick={() => toggleSection("basic")} className="w-full flex items-center justify-between p-3 hover:bg-white/[0.02] transition-colors">
                  <div className="flex items-center gap-2">
                    <Tag className="w-4 h-4 text-brand-400" />
                    <span className="text-[12px] font-bold text-white">Info Produk</span>
                  </div>
                  {expandedSection === "basic" ? <ChevronUp className="w-4 h-4 text-slate-500" /> : <ChevronDown className="w-4 h-4 text-slate-500" />}
                </button>
                {expandedSection === "basic" && (
                  <div className="p-3 pt-0 space-y-3">
                    <div>
                      <label className="text-[11px] font-semibold text-slate-400 mb-1 block">Nama Produk</label>
                      <input
                        type="text"
                        value={formData.productName}
                        onChange={(e) => setFormData({ ...formData, productName: e.target.value })}
                        className="input-field text-[12px] py-2"
                      />
                    </div>
                    <div>
                      <label className="text-[11px] font-semibold text-slate-400 mb-1 block">Deskripsi</label>
                      <textarea
                        value={formData.productDescription}
                        onChange={(e) => setFormData({ ...formData, productDescription: e.target.value })}
                        className="input-field text-[12px] py-2 h-[80px] resize-none"
                      />
                    </div>
                    <div>
                      <label className="text-[11px] font-semibold text-slate-400 mb-1 block">Kategori</label>
                      <input
                        type="text"
                        value={formData.category}
                        onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                        className="input-field text-[12px] py-2"
                      />
                    </div>
                  </div>
                )}
              </div>

              {/* Pricing */}
              <div className="glass-card overflow-hidden">
                <button onClick={() => toggleSection("pricing")} className="w-full flex items-center justify-between p-3 hover:bg-white/[0.02]transition-colors">
                  <div className="flex items-center gap-2">
                    <DollarSign className="w-4 h-4 text-accent-400" />
                    <span className="text-[12px] font-bold text-white">Harga & CTA</span>
                  </div>
                  {expandedSection === "pricing" ? <ChevronUp className="w-4 h-4 text-slate-500" /> : <ChevronDown className="w-4 h-4 text-slate-500" />}
                </button>
                {expandedSection === "pricing" && (
                  <div className="p-3 pt-0 space-y-3">
                    <div className="grid grid-cols-2 gap-2">
                      <div>
                        <label className="text-[11px] font-semibold text-slate-400 mb-1 block">Harga Jual</label>
                        <div className="relative">
                          <span className="absolute left-3 top-1/2 -translate-y-1/2 text-[11px] text-slate-500">Rp</span>
                          <input
                            type="text"
                            value={formData.price}
                            onChange={(e) => setFormData({ ...formData, price: e.target.value })}
                            className="input-field text-[12px] py-2 pl-8"
                          />
                        </div>
                      </div>
                      <div>
                        <label className="text-[11px] font-semibold text-slate-400 mb-1 block">Harga Coret</label>
                        <div className="relative">
                          <span className="absolute left-3 top-1/2 -translate-y-1/2 text-[11px] text-slate-500">Rp</span>
                          <input
                            type="text"
                            value={formData.originalPrice}
                            onChange={(e) => setFormData({ ...formData, originalPrice: e.target.value })}
                            className="input-field text-[12px] py-2 pl-8"
                          />
                        </div>
                      </div>
                    </div>
                    <div>
                      <label className="text-[11px] font-semibold text-slate-400 mb-1 block">Teks Tombol CTA</label>
                      <input
                        type="text"
                        value={formData.ctaText}
                        onChange={(e) => setFormData({ ...formData, ctaText: e.target.value })}
                        className="input-field text-[12px] py-2"
                      />
                    </div>
                    <div>
                      <label className="text-[11px] font-semibold text-slate-400 mb-1 block">Link Affiliate</label>
                      <input
                        type="url"
                        value={formData.ctaLink}
                        onChange={(e) => setFormData({ ...formData, ctaLink: e.target.value })}
                        className="input-field text-[12px] py-2"
                      />
                    </div>
                    <div>
                      <label className="text-[11px] font-semibold text-slate-400 mb-1 block">Platform</label>
                      <div className="flex gap-2">
                        {[
                          { value: "shopee", label: "Shopee", color: "bg-orange-500/15 text-orange-400 border-orange-500/20" },
                          { value: "tiktok", label: "TikTok", color: "bg-pink-500/15 text-pink-400 border-pink-500/20" },
                          { value: "both", label: "Keduanya", color: "bg-brand-500/15 text-brand-400 border-brand-500/20" },
                        ].map((p) => (
                          <button
                            key={p.value}
                            onClick={() => setFormData({ ...formData, platform: p.value as any })}
                            className={`flex-1 py-2 rounded-lg text-[11px] font-semibold border transition-all ${
                              formData.platform === p.value ? p.color : "bg-white/[0.02] text-slate-500 border-white/[0.06]"
                            }`}
                          >
                            {p.label}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Image Upload */}
              <div className="glass-card overflow-hidden">
                <button onClick={() => toggleSection("images")} className="w-full flex items-center justify-between p-3 hover:bg-white/[0.02] transition-colors">
                  <div className="flex items-center gap-2">
                    <ImageIcon className="w-4 h-4 text-blue-400" />
                    <span className="text-[12px] font-bold text-white">Gambar Produk</span>
                  </div>
                  {expandedSection === "images" ? <ChevronUp className="w-4 h-4 text-slate-500" /> : <ChevronDown className="w-4 h-4 text-slate-500" />}
                </button>
                {expandedSection === "images" && (
                  <div className="p-3 pt-0">
                    <div className="border-2 border-dashed border-white/[0.08] rounded-xl p-6 flex flex-col items-center justify-center hover:border-brand-500/30 transition-colors cursor-pointer">
                      <ImageIcon className="w-8 h-8 text-slate-500 mb-2" />
                      <p className="text-[12px] text-slate-400 font-medium">Drop gambar atau klik untuk upload</p>
                      <p className="text-[10px] text-slate-600 mt-1">Auto-compress ke WebP/AVIF</p>
                      <div className="flex items-center gap-1.5 mt-3">
                        <Zap className="w-3 h-3 text-accent-400" />
                        <span className="text-[10px] text-accent-400 font-semibold">
                          Kompresi otomatis aktif
                        </span>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Widgets Tab */}
          {activeTab === "widgets" && (
            <div className="p-4 space-y-3">
              {/* FOMO Counter */}
              <div className="glass-card p-4">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <Flame className="w-4 h-4 text-red-400" />
                    <span className="text-[12px] font-bold text-white">FOMO Counter</span>
                  </div>
                  <button
                    onClick={() => updateWidget("fomo", !widgets.fomo)}
                    className={`toggle-switch ${widgets.fomo ? "active" : ""}`}
                  />
                </div>
                {widgets.fomo && (
                  <div className="space-y-2">
                    <label className="text-[10px] text-slate-500">Sisa Stok Ditampilkan</label>
                    <input
                      type="range"
                      min="1"
                      max="50"
                      value={widgets.fomoStock}
                      onChange={(e) => updateWidget("fomoStock", parseInt(e.target.value))}
                      className="w-full accent-red-500"
                    />
                    <div className="text-[11px] text-red-400 font-semibold text-center">
                      ⚠️ Sisa {widgets.fomoStock} pcs lagi!
                    </div>
                  </div>
                )}
              </div>

              {/* Social Proof */}
              <div className="glass-card p-4">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <Users className="w-4 h-4 text-blue-400" />
                    <span className="text-[12px] font-bold text-white">Social Proof</span>
                  </div>
                  <button
                    onClick={() => updateWidget("socialProof", !widgets.socialProof)}
                    className={`toggle-switch ${widgets.socialProof ? "active" : ""}`}
                  />
                </div>
                {widgets.socialProof && (
                  <p className="text-[10px] text-slate-500">
                    Pop-up &quot;Seseorang baru membeli...&quot; muncul otomatis (Pure CSS)
                  </p>
                )}
              </div>

              {/* Sticky CTA */}
              <div className="glass-card p-4">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <ArrowDown className="w-4 h-4 text-accent-400" />
                    <span className="text-[12px] font-bold text-white">Sticky CTA</span>
                  </div>
                  <button
                    onClick={() => updateWidget("stickyCta", !widgets.stickyCta)}
                    className={`toggle-switch ${widgets.stickyCta ? "active" : ""}`}
                  />
                </div>
                {widgets.stickyCta && (
                  <p className="text-[10px] text-slate-500">
                    Tombol beli menempel di bawah layar HP
                  </p>
                )}
              </div>

              {/* Trust Badges */}
              <div className="glass-card p-4">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <Shield className="w-4 h-4 text-green-400" />
                    <span className="text-[12px] font-bold text-white">Trust Badges</span>
                  </div>
                  <button
                    onClick={() => updateWidget("trustBadges", !widgets.trustBadges)}
                    className={`toggle-switch ${widgets.trustBadges ? "active" : ""}`}
                  />
                </div>
                {widgets.trustBadges && (
                  <div className="flex gap-2 flex-wrap">
                    {["100% Original", "Garansi Uang Kembali", "Pengiriman Cepat"].map((badge) => (
                      <span key={badge} className="badge badge-green text-[9px]">
                        <Check className="w-2.5 h-2.5" /> {badge}
                      </span>
                    ))}
                  </div>
                )}
              </div>

              {/* Urgency Timer */}
              <div className="glass-card p-4">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-yellow-400" />
                    <span className="text-[12px] font-bold text-white">Timer Urgensi</span>
                  </div>
                  <button
                    onClick={() => updateWidget("urgencyTimer", !widgets.urgencyTimer)}
                    className={`toggle-switch ${widgets.urgencyTimer ? "active" : ""}`}
                  />
                </div>
                {widgets.urgencyTimer && (
                  <div className="space-y-2">
                    <label className="text-[10px] text-slate-500">Durasi (menit)</label>
                    <input
                      type="number"
                      value={widgets.timerMinutes}
                      onChange={(e) => updateWidget("timerMinutes", parseInt(e.target.value))}
                      className="input-field text-[12px] py-2"
                    />
                  </div>
                )}
              </div>

              {/* Review Stars */}
              <div className="glass-card p-4">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <Star className="w-4 h-4 text-yellow-400" />
                    <span className="text-[12px] font-bold text-white">Rating & Review</span>
                  </div>
                  <button
                    onClick={() => updateWidget("reviewStars", !widgets.reviewStars)}
                    className={`toggle-switch ${widgets.reviewStars ? "active" : ""}`}
                  />
                </div>
                {widgets.reviewStars && (
                  <div className="space-y-2">
                    <label className="text-[10px] text-slate-500">Jumlah Review</label>
                    <input
                      type="number"
                      value={widgets.reviewCount}
                      onChange={(e) => updateWidget("reviewCount", parseInt(e.target.value))}
                      className="input-field text-[12px] py-2"
                    />
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Style Tab */}
          {activeTab === "style" && (
            <div className="p-4 space-y-3">
              <div className="glass-card p-4">
                <h4 className="text-[12px] font-bold text-white mb-3">Skema Warna</h4>
                <div className="grid grid-cols-4 gap-2">
                  {[
                    { name: "Merah", colors: ["#ef4444", "#dc2626"] },
                    { name: "Oranye", colors: ["#f97316", "#ea580c"] },
                    { name: "Ungu", colors: ["#8b5cf6", "#7c3aed"] },
                    { name: "Hijau", colors: ["#10b981", "#059669"] },
                    { name: "Biru", colors: ["#3b82f6", "#2563eb"] },
                    { name: "Pink", colors: ["#ec4899", "#db2777"] },
                    { name: "Kuning", colors: ["#eab308", "#ca8a04"] },
                    { name: "Hitam", colors: ["#374151", "#1f2937"] },
                  ].map((scheme) => (
                    <button key={scheme.name} className="flex flex-col items-center gap-1 p-2 rounded-lg hover:bg-white/[0.04] transition-colors">
                      <div
                        className="w-8 h-8 rounded-lg"
                        style={{ background: `linear-gradient(135deg, ${scheme.colors[0]}, ${scheme.colors[1]})` }}
                      />
                      <span className="text-[9px] text-slate-500">{scheme.name}</span>
                    </button>
                  ))}
                </div>
              </div>
              <div className="glass-card p-4">
                <h4 className="text-[12px] font-bold text-white mb-3">Layout</h4>
                <div className="grid grid-cols-2 gap-2">
                  {["Klasik", "Modern", "Minimal", "Agresif"].map((layout) => (
                    <button key={layout} className="p-3 rounded-xl border border-white/[0.06] text-[11px] text-slate-400 hover:border-brand-500/30 hover:text-white hover:bg-white/[0.02] transition-all">
                      {layout}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Center: Live Preview */}
        <div className="flex-1 bg-navy-950/50 flex items-start justify-center p-8 overflow-y-auto">
          <div
            className={`relative transition-all duration-500 ${
              viewMode === "mobile"
                ? "w-[375px]"
                : "w-full max-w-[800px]"
            }`}
          >
            {/* Phone Frame */}
            {viewMode === "mobile" && (
              <div className="absolute -inset-3 rounded-[38px] bg-gradient-to-b from-slate-700 to-slate-800 shadow-2xl shadow-black/50 pointer-events-none">
                <div className="absolute top-2 left-1/2 -translate-x-1/2 w-[80px] h-[24px] bg-black rounded-b-2xl" />
              </div>
            )}

            {/* Preview Content */}
            <div
              className={`bg-white overflow-hidden ${
                viewMode === "mobile"
                  ? "rounded-[30px] min-h-[680px]"
                  : "rounded-2xl min-h-[600px]"
              }`}
            >
              {/* Social Proof Popup */}
              {widgets.socialProof && (
                <div className="absolute bottom-24 left-4 z-20 bg-white rounded-xl shadow-lg border border-gray-100 p-3 flex items-center gap-2 animate-slide-up max-w-[280px]">
                  <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center text-sm">👤</div>
                  <div>
                    <p className="text-[10px] text-gray-800 font-semibold">Andi dari Jakarta baru saja membeli!</p>
                    <p className="text-[9px] text-gray-400">2 menit lalu</p>
                  </div>
                </div>
              )}

              {/* Urgency Timer Bar */}
              {widgets.urgencyTimer && (
                <div className="bg-gradient-to-r from-red-600 to-red-500 px-4 py-2 flex items-center justify-center gap-2">
                  <Clock className="w-3 h-3 text-white" />
                  <span className="text-[11px] text-white font-bold">
                    ⏰ FLASH SALE berakhir dalam 00:{String(widgets.timerMinutes).padStart(2, "0")}:00
                  </span>
                </div>
              )}

              {/* Hero Section */}
              <div className="relative bg-gradient-to-b from-gray-50 to-white px-4 pt-4 pb-6">
                {/* Category */}
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-[10px] bg-orange-100 text-orange-600 px-2 py-0.5 rounded-full font-semibold">
                    {formData.category}
                  </span>
                  {widgets.reviewStars && (
                    <div className="flex items-center gap-1">
                      <div className="flex">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <Star key={star} className="w-3 h-3 text-yellow-400 fill-yellow-400" />
                        ))}
                      </div>
                      <span className="text-[10px] text-gray-500">({widgets.reviewCount.toLocaleString("id-ID")})</span>
                    </div>
                  )}
                </div>

                {/* Product Image Placeholder */}
                <div className="w-full aspect-square rounded-2xl bg-gradient-to-br from-orange-50 to-pink-50 flex items-center justify-center mb-4 border border-gray-100">
                  <div className="text-center">
                    <span className="text-6xl">🧴</span>
                    <p className="text-[10px] text-gray-400 mt-2">Gambar Produk</p>
                  </div>
                </div>

                {/* Product Name */}
                <h1 className="text-[18px] font-black text-gray-900 leading-tight mb-2">
                  {formData.productName}
                </h1>

                {/* Price */}
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-[22px] font-black text-red-600">
                    Rp {formData.price}
                  </span>
                  <span className="text-[14px] text-gray-400 line-through">
                    Rp {formData.originalPrice}
                  </span>
                  <span className="bg-red-100 text-red-600 text-[10px] font-bold px-2 py-0.5 rounded-full">
                    -64%
                  </span>
                </div>

                {/* FOMO */}
                {widgets.fomo && (
                  <div className="bg-red-50 border border-red-100 rounded-xl p-3 mb-3">
                    <div className="flex items-center gap-2">
                      <Flame className="w-4 h-4 text-red-500" />
                      <span className="text-[12px] font-bold text-red-600">
                        ⚠️ Sisa {widgets.fomoStock} pcs lagi! Segera habis!
                      </span>
                    </div>
                    <div className="mt-2 bg-red-200 rounded-full h-1.5 overflow-hidden">
                      <div
                        className="bg-red-500 h-full rounded-full"
                        style={{ width: `${Math.max(10, 100 - widgets.fomoStock * 2)}%` }}
                      />
                    </div>
                  </div>
                )}

                {/* Description */}
                <p className="text-[12px] text-gray-600 leading-relaxed mb-4">
                  {formData.productDescription}
                </p>

                {/* Benefits */}
                <div className="space-y-2 mb-4">
                  {formData.benefits.map((benefit, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                        <Check className="w-3 h-3 text-green-600" />
                      </div>
                      <span className="text-[12px] text-gray-700">{benefit}</span>
                    </div>
                  ))}
                </div>

                {/* Trust Badges */}
                {widgets.trustBadges && (
                  <div className="grid grid-cols-3 gap-2 mb-4">
                    {[
                      { icon: Shield, label: "100% Original", color: "text-green-600" },
                      { icon: Truck, label: "Pengiriman Cepat", color: "text-blue-600" },
                      { icon: Star, label: "Garansi Uang Kembali", color: "text-yellow-600" },
                    ].map((badge, i) => {
                      const BadgeIcon = badge.icon;
                      return (
                        <div key={i} className="flex flex-col items-center gap-1 p-2 bg-gray-50 rounded-xl">
                          <BadgeIcon className={`w-4 h-4 ${badge.color}`} />
                          <span className="text-[8px] text-gray-500 text-center">{badge.label}</span>
                        </div>
                      );
                    })}
                  </div>
                )}

                {/* CTA Buttons */}
                <div className="space-y-2">
                  {(formData.platform === "shopee" || formData.platform === "both") && (
                    <button className="w-full py-3.5 bg-gradient-to-r from-orange-500 to-red-500 text-white text-[14px] font-bold rounded-xl shadow-lg shadow-orange-500/30 flex items-center justify-center gap-2">
                      <ShoppingCart className="w-4 h-4" />
                      {formData.ctaText}
                    </button>
                  )}
                  {(formData.platform === "tiktok" || formData.platform === "both") && (
                    <button className="w-full py-3.5 bg-gradient-to-r from-gray-900 to-gray-800 text-white text-[14px] font-bold rounded-xl shadow-lg flex items-center justify-center gap-2">
                      🎵 Beli di TikTok Shop
                    </button>
                  )}
                </div>
              </div>

              {/* Sticky CTA */}
              {widgets.stickyCta && (
                <div className="sticky bottom-0 bg-white/95 backdrop-blur-lg border-t border-gray-100 px-4 py-3 flex items-center gap-3">
                  <div className="flex-1">
                    <p className="text-[10px] text-gray-500">Harga spesial</p>
                    <p className="text-[16px] font-black text-red-600">Rp {formData.price}</p>
                  </div>
                  <button className="px-6 py-3 bg-gradient-to-r from-orange-500 to-red-500 text-white text-[12px] font-bold rounded-xl shadow-lg shadow-orange-500/30">
                    BELI SEKARANG
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
