"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Plus,
  Search,
  Filter,
  MoreVertical,
  Eye,
  Edit3,
  Trash2,
  Copy,
  ExternalLink,
  MousePointerClick,
  Target,
  Clock,
  Shield,
  ShieldCheck,
  Wand2,
  LayoutTemplate,
  ArrowUpRight,
} from "lucide-react";
import { formatNumber, timeAgo } from "@/lib/utils";
import { landingPages } from "@/lib/mock-data";

export default function BuilderPage() {
  const [filter, setFilter] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredPages = landingPages.filter((lp) => {
    if (filter !== "all" && lp.status !== filter) return false;
    if (searchQuery && !lp.title.toLowerCase().includes(searchQuery.toLowerCase()))
      return false;
    return true;
  });

  const statusMap: Record<string, { label: string; class: string }> = {
    published: { label: "Published", class: "badge-green" },
    draft: { label: "Draft", class: "badge-yellow" },
    archived: { label: "Arsip", class: "badge-red" },
  };

  return (
    <div className="space-y-6 animate-fade-in">
      {/* Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <h1 className="page-title text-white flex items-center gap-3">
            <Wand2 className="w-7 h-7 text-brand-400" />
            Magic Form Builder
          </h1>
          <p className="page-subtitle">Buat landing page yang mengonversi dalam hitungan menit</p>
        </div>
        <Link href="/dashboard/builder/new" className="btn-primary">
          <Plus className="w-4 h-4" />
          Buat Landing Page Baru
        </Link>
      </div>

      {/* Template Showcase */}
      <div className="glass-card p-6 gradient-border rounded-2xl">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <LayoutTemplate className="w-5 h-5 text-brand-400" />
            <h3 className="text-[15px] font-bold text-white">Template Premium</h3>
          </div>
          <span className="badge badge-purple text-[10px]">8 Template</span>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {[
            { name: "Flash Sale Pro", emoji: "⚡", desc: "Konversi tinggi", color: "from-red-500/20 to-orange-500/10" },
            { name: "Product Review", emoji: "⭐", desc: "Social proof", color: "from-yellow-500/20 to-amber-500/10" },
            { name: "Landing Minimal", emoji: "🎯", desc: "Clean & fast", color: "from-blue-500/20 to-cyan-500/10" },
            { name: "Mega Bundle", emoji: "🎁", desc: "Multi produk", color: "from-brand-500/20 to-pink-500/10" },
          ].map((tpl, i) => (
            <Link
              key={i}
              href="/dashboard/builder/new"
              className="group p-4 rounded-xl bg-gradient-to-br border border-white/[0.06] hover:border-brand-500/30 transition-all duration-300 hover:scale-[1.02]"
              style={{ backgroundImage: `linear-gradient(135deg, ${tpl.color.split(' ')[0].replace('from-', '').replace('/20', '')}, transparent)` }}
            >
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${tpl.color} flex items-center justify-center text-2xl mb-3`}>
                {tpl.emoji}
              </div>
              <p className="text-[13px] font-bold text-white group-hover:text-brand-300 transition-colors">{tpl.name}</p>
              <p className="text-[11px] text-slate-500">{tpl.desc}</p>
            </Link>
          ))}
        </div>
      </div>

      {/* Filter & Search */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          {[
            { value: "all", label: "Semua" },
            { value: "published", label: "Published" },
            { value: "draft", label: "Draft" },
            { value: "archived", label: "Arsip" },
          ].map((f) => (
            <button
              key={f.value}
              onClick={() => setFilter(f.value)}
              className={`px-4 py-2 rounded-xl text-[12px] font-semibold transition-all duration-200 ${
                filter === f.value
                  ? "bg-brand-500/20 text-brand-400 border border-brand-500/30"
                  : "bg-white/[0.03] text-slate-400 border border-white/[0.06] hover:bg-white/[0.06]"
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
          <input
            type="text"
            placeholder="Cari halaman..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="input-field pl-10 w-[260px] text-[12px] py-2.5"
          />
        </div>
      </div>

      {/* Landing Page Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredPages.map((lp, i) => (
          <div
            key={lp.id}
            className="glass-card glass-card-hover overflow-hidden group animate-slide-up"
            style={{ animationDelay: `${i * 80}ms` }}
          >
            {/* Thumbnail */}
            <div className="h-[140px] bg-gradient-to-br from-navy-800 to-navy-850 flex items-center justify-center relative">
              <span className="text-5xl opacity-60 group-hover:scale-110 transition-transform duration-300">
                {lp.thumbnail}
              </span>
              {lp.cloakingEnabled && (
                <div className="absolute top-3 right-3 flex items-center gap-1 bg-brand-500/20 backdrop-blur-sm border border-brand-500/30 rounded-lg px-2 py-1">
                  <ShieldCheck className="w-3 h-3 text-brand-400" />
                  <span className="text-[9px] text-brand-300 font-semibold">CLOAKED</span>
                </div>
              )}
              <div className="absolute top-3 left-3">
                <span className={`badge ${statusMap[lp.status].class} text-[9px]`}>
                  {statusMap[lp.status].label}
                </span>
              </div>
              {/* Hover Actions */}
              <div className="absolute inset-0 bg-navy-900/80 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center gap-2">
                <Link
                  href={`/dashboard/builder/${lp.id}`}
                  className="w-9 h-9 rounded-xl bg-brand-500/20 border border-brand-500/30 flex items-center justify-center text-brand-400 hover:bg-brand-500/30 transition-colors"
                >
                  <Edit3 className="w-4 h-4" />
                </Link>
                <button className="w-9 h-9 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:bg-white/10 transition-colors">
                  <Eye className="w-4 h-4" />
                </button>
                <button className="w-9 h-9 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:bg-white/10 transition-colors">
                  <Copy className="w-4 h-4" />
                </button>
                <button className="w-9 h-9 rounded-xl bg-red-500/10 border border-red-500/20 flex items-center justify-center text-red-400 hover:bg-red-500/20 transition-colors">
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Content */}
            <div className="p-4">
              <h3 className="text-[14px] font-bold text-white mb-1 truncate group-hover:text-brand-300 transition-colors">
                {lp.title}
              </h3>
              <p className="text-[11px] text-slate-500 mb-3 flex items-center gap-1">
                <Clock className="w-3 h-3" />
                {timeAgo(lp.updatedAt)}
              </p>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-2">
                <div className="text-center p-2 rounded-lg bg-white/[0.02]">
                  <p className="text-[14px] font-bold text-white">{formatNumber(lp.clicks)}</p>
                  <p className="text-[9px] text-slate-500 uppercase tracking-wider">Klik</p>
                </div>
                <div className="text-center p-2 rounded-lg bg-white/[0.02]">
                  <p className="text-[14px] font-bold text-white">{formatNumber(lp.conversions)}</p>
                  <p className="text-[9px] text-slate-500 uppercase tracking-wider">Konversi</p>
                </div>
                <div className="text-center p-2 rounded-lg bg-white/[0.02]">
                  <p className="text-[14px] font-bold text-accent-400">{lp.ctr}%</p>
                  <p className="text-[9px] text-slate-500 uppercase tracking-wider">CTR</p>
                </div>
              </div>

              {/* Domain */}
              <div className="mt-3 pt-3 border-t border-white/[0.04] flex items-center justify-between">
                <p className="text-[10px] text-slate-500 truncate flex items-center gap-1">
                  <ExternalLink className="w-3 h-3" />
                  {lp.domain}/{lp.slug}
                </p>
                <Link
                  href={`/dashboard/builder/${lp.id}`}
                  className="text-[11px] text-brand-400 font-semibold hover:text-brand-300 flex items-center gap-0.5 transition-colors"
                >
                  Edit <ArrowUpRight className="w-3 h-3" />
                </Link>
              </div>
            </div>
          </div>
        ))}

        {/* New Page Card */}
        <Link
          href="/dashboard/builder/new"
          className="glass-card border-2 border-dashed border-white/[0.08] hover:border-brand-500/30 flex flex-col items-center justify-center min-h-[340px] transition-all duration-300 group cursor-pointer hover:bg-brand-500/5"
        >
          <div className="w-14 h-14 rounded-2xl bg-brand-500/10 border border-brand-500/20 flex items-center justify-center mb-4 group-hover:scale-110 group-hover:bg-brand-500/20 transition-all duration-300">
            <Plus className="w-7 h-7 text-brand-400" />
          </div>
          <p className="text-[14px] font-bold text-slate-300 group-hover:text-white transition-colors">
            Buat Halaman Baru
          </p>
          <p className="text-[11px] text-slate-500 mt-1">
            Mulai dari template atau dari nol
          </p>
        </Link>
      </div>
    </div>
  );
}
