"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  ArrowLeft,
  Wand2,
  Zap,
  Star,
  Target,
  Gift,
  ShoppingCart,
  MessageSquare,
  Image,
  Layout,
  ArrowRight,
  Sparkles,
  Check,
} from "lucide-react";

const templates = [
  { id: "flash-sale", name: "Flash Sale Pro", emoji: "⚡", desc: "Halaman promo dengan countdown timer, stok terbatas, dan urgency tinggi. Ideal untuk flash sale marketplace.", color: "from-red-500/20 to-orange-500/10", category: "sale" },
  { id: "product-review", name: "Product Review", emoji: "⭐", desc: "Landing page dengan social proof kuat: testimoni, rating bintang, before/after. Konversi tinggi untuk beauty & health.", color: "from-yellow-500/20 to-amber-500/10", category: "review" },
  { id: "landing-minimal", name: "Landing Minimal", emoji: "🎯", desc: "Clean & super cepat. Hanya fokus pada 1 CTA. Cocok untuk iklan Meta dengan budget kecil tapi CTR tinggi.", color: "from-blue-500/20 to-cyan-500/10", category: "minimal" },
  { id: "mega-bundle", name: "Mega Bundle", emoji: "🎁", desc: "Halaman multi-produk dengan paket bundling. Tabel perbandingan, diskon bertingkat, dan bonus eksklusif.", color: "from-brand-500/20 to-pink-500/10", category: "bundle" },
  { id: "video-sales", name: "Video Sales Page", emoji: "📹", desc: "Halaman dengan video hero utama. Storytelling kuat untuk produk mahal atau edukasi market.", color: "from-purple-500/20 to-indigo-500/10", category: "video" },
  { id: "presell-article", name: "Presell Article", emoji: "📰", desc: "Format artikel blog untuk pre-selling. Tidak terlihat seperti iklan, lolos review Meta lebih mudah.", color: "from-green-500/20 to-emerald-500/10", category: "article" },
  { id: "whatsapp-funnel", name: "WhatsApp Funnel", emoji: "💬", desc: "Direct to WhatsApp dengan form pre-qualification. Ideal untuk produk high-ticket & jasa.", color: "from-emerald-500/20 to-teal-500/10", category: "funnel" },
  { id: "blank", name: "Mulai dari Nol", emoji: "📝", desc: "Canvas kosong. Bangun halaman Anda sendiri dengan drag & drop builder. Kebebasan penuh.", color: "from-slate-500/20 to-slate-400/10", category: "blank" },
];

const steps = [
  { num: 1, label: "Pilih Template" },
  { num: 2, label: "Info Produk" },
  { num: 3, label: "Konfigurasi" },
];

export default function NewBuilderPage() {
  const router = useRouter();
  const [step, setStep] = useState(1);
  const [selectedTemplate, setSelectedTemplate] = useState<string | null>(null);
  const [productName, setProductName] = useState("");
  const [productPrice, setProductPrice] = useState("");
  const [productDesc, setProductDesc] = useState("");
  const [slug, setSlug] = useState("");
  const [cloaking, setCloaking] = useState(true);

  const handleCreate = () => {
    // Navigate to builder editor with the template
    router.push(`/dashboard/builder/lp-new`);
  };

  return (
    <div className="max-w-4xl mx-auto space-y-6 animate-fade-in">
      {/* Header */}
      <div className="flex items-center gap-4">
        <Link href="/dashboard/builder" className="w-10 h-10 rounded-xl bg-white/[0.04] border border-white/[0.06] flex items-center justify-center text-slate-400 hover:text-white hover:bg-white/[0.08] transition-all">
          <ArrowLeft className="w-5 h-5" />
        </Link>
        <div>
          <h1 className="page-title text-white flex items-center gap-2">
            <Sparkles className="w-6 h-6 text-brand-400" />
            Buat Landing Page Baru
          </h1>
          <p className="page-subtitle">Ikuti langkah-langkah berikut untuk membuat halaman konversi tinggi</p>
        </div>
      </div>

      {/* Progress Steps */}
      <div className="glass-card p-4">
        <div className="flex items-center justify-between">
          {steps.map((s, i) => (
            <div key={s.num} className="flex items-center gap-3 flex-1">
              <div className={`w-8 h-8 rounded-lg flex items-center justify-center text-[13px] font-bold transition-all ${
                step >= s.num
                  ? "bg-brand-500/20 text-brand-400 border border-brand-500/30"
                  : "bg-white/[0.04] text-slate-500 border border-white/[0.06]"
              }`}>
                {step > s.num ? <Check className="w-4 h-4" /> : s.num}
              </div>
              <span className={`text-[12px] font-semibold ${step >= s.num ? "text-white" : "text-slate-500"}`}>
                {s.label}
              </span>
              {i < steps.length - 1 && (
                <div className={`flex-1 h-px mx-3 ${step > s.num ? "bg-brand-500/30" : "bg-white/[0.06]"}`} />
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Step 1: Choose Template */}
      {step === 1 && (
        <div className="space-y-4">
          <h2 className="text-[16px] font-bold text-white">Pilih Template</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {templates.map((tpl) => (
              <button
                key={tpl.id}
                onClick={() => setSelectedTemplate(tpl.id)}
                className={`p-5 rounded-2xl border text-left transition-all duration-300 hover:scale-[1.01] ${
                  selectedTemplate === tpl.id
                    ? "bg-brand-500/10 border-brand-500/40 ring-1 ring-brand-500/20"
                    : "bg-white/[0.02] border-white/[0.06] hover:bg-white/[0.04]"
                }`}
              >
                <div className="flex items-start gap-4">
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${tpl.color} flex items-center justify-center text-3xl flex-shrink-0`}>
                    {tpl.emoji}
                  </div>
                  <div>
                    <h3 className="text-[14px] font-bold text-white mb-1">{tpl.name}</h3>
                    <p className="text-[11px] text-slate-400 leading-relaxed">{tpl.desc}</p>
                  </div>
                </div>
                {selectedTemplate === tpl.id && (
                  <div className="mt-3 flex items-center gap-1 text-[11px] text-brand-400 font-semibold">
                    <Check className="w-3.5 h-3.5" />
                    Dipilih
                  </div>
                )}
              </button>
            ))}
          </div>
          <div className="flex justify-end">
            <button
              onClick={() => selectedTemplate && setStep(2)}
              disabled={!selectedTemplate}
              className="btn-primary text-[13px] py-2.5 disabled:opacity-40 disabled:cursor-not-allowed"
            >
              Lanjut
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}

      {/* Step 2: Product Info */}
      {step === 2 && (
        <div className="space-y-4">
          <h2 className="text-[16px] font-bold text-white">Informasi Produk</h2>
          <div className="glass-card p-6 space-y-4">
            <div>
              <label className="text-[12px] font-semibold text-slate-300 mb-1.5 block">Nama Produk *</label>
              <input
                type="text"
                value={productName}
                onChange={(e) => { setProductName(e.target.value); setSlug(e.target.value.toLowerCase().replace(/\s+/g, "-").replace(/[^a-z0-9-]/g, "")); }}
                placeholder="contoh: Serum Vitamin C Brightening"
                className="input-field text-[13px]"
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="text-[12px] font-semibold text-slate-300 mb-1.5 block">Harga Asli</label>
                <input type="text" value={productPrice} onChange={(e) => setProductPrice(e.target.value)} placeholder="Rp 299.000" className="input-field text-[13px]" />
              </div>
              <div>
                <label className="text-[12px] font-semibold text-slate-300 mb-1.5 block">Harga Diskon</label>
                <input type="text" placeholder="Rp 149.000" className="input-field text-[13px]" />
              </div>
            </div>
            <div>
              <label className="text-[12px] font-semibold text-slate-300 mb-1.5 block">Deskripsi Singkat</label>
              <textarea
                value={productDesc}
                onChange={(e) => setProductDesc(e.target.value)}
                placeholder="Tuliskan deskripsi produk yang menarik..."
                className="input-field text-[13px] min-h-[100px] resize-none"
              />
            </div>
            <div>
              <label className="text-[12px] font-semibold text-slate-300 mb-1.5 block">URL Slug</label>
              <div className="flex items-center gap-2">
                <span className="text-[12px] text-slate-500">affilispeed.com/</span>
                <input type="text" value={slug} onChange={(e) => setSlug(e.target.value)} placeholder="serum-vitamin-c" className="input-field text-[13px] flex-1" />
              </div>
            </div>
          </div>
          <div className="flex justify-between">
            <button onClick={() => setStep(1)} className="btn-ghost text-[13px] py-2.5">
              <ArrowLeft className="w-4 h-4" />
              Kembali
            </button>
            <button
              onClick={() => productName && setStep(3)}
              disabled={!productName}
              className="btn-primary text-[13px] py-2.5 disabled:opacity-40 disabled:cursor-not-allowed"
            >
              Lanjut
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}

      {/* Step 3: Config */}
      {step === 3 && (
        <div className="space-y-4">
          <h2 className="text-[16px] font-bold text-white">Konfigurasi</h2>
          <div className="glass-card p-6 space-y-4">
            <div className="flex items-center justify-between p-4 rounded-xl bg-white/[0.02] border border-white/[0.04]">
              <div>
                <p className="text-[13px] font-bold text-white">Aktifkan Cloaking</p>
                <p className="text-[11px] text-slate-500">Lindungi halaman dari bot Meta & spy tools</p>
              </div>
              <button onClick={() => setCloaking(!cloaking)} className={`toggle-switch ${cloaking ? "active" : ""}`} />
            </div>
            <div className="flex items-center justify-between p-4 rounded-xl bg-white/[0.02] border border-white/[0.04]">
              <div>
                <p className="text-[13px] font-bold text-white">Auto-Optimize Gambar</p>
                <p className="text-[11px] text-slate-500">Kompres otomatis ke WebP untuk speed 2G</p>
              </div>
              <button className="toggle-switch active" />
            </div>
            <div className="flex items-center justify-between p-4 rounded-xl bg-white/[0.02] border border-white/[0.04]">
              <div>
                <p className="text-[13px] font-bold text-white">Pixel Meta</p>
                <p className="text-[11px] text-slate-500">Track konversi dengan Facebook Pixel</p>
              </div>
              <button className="toggle-switch active" />
            </div>

            {/* Summary */}
            <div className="p-4 rounded-xl bg-brand-500/5 border border-brand-500/20 mt-4">
              <h4 className="text-[13px] font-bold text-white mb-2">📋 Ringkasan</h4>
              <div className="space-y-1 text-[12px]">
                <p className="text-slate-400">Template: <strong className="text-white">{templates.find(t => t.id === selectedTemplate)?.name}</strong></p>
                <p className="text-slate-400">Produk: <strong className="text-white">{productName || "-"}</strong></p>
                <p className="text-slate-400">URL: <strong className="text-brand-400">affilispeed.com/{slug || "..."}</strong></p>
                <p className="text-slate-400">Cloaking: <strong className={cloaking ? "text-green-400" : "text-red-400"}>{cloaking ? "Aktif" : "Nonaktif"}</strong></p>
              </div>
            </div>
          </div>
          <div className="flex justify-between">
            <button onClick={() => setStep(2)} className="btn-ghost text-[13px] py-2.5">
              <ArrowLeft className="w-4 h-4" />
              Kembali
            </button>
            <button onClick={handleCreate} className="btn-primary text-[13px] py-2.5">
              <Wand2 className="w-4 h-4" />
              Buat Landing Page
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
