"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import {
  TrendingUp,
  TrendingDown,
  BarChart3,
  MousePointerClick,
  Shield,
  Layers,
  ArrowUpRight,
  ArrowDownRight,
  Activity,
  Eye,
  Zap,
  Target,
  Search,
  Filter,
  ExternalLink,
  Clock,
  FileEdit,
  Trash2,
  Upload,
  ShieldCheck,
  Plus,
  ChevronRight,
  Flame,
  Star,
  ShoppingBag,
} from "lucide-react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
} from "recharts";
import { formatCurrency, formatNumber, formatPercent, timeAgo } from "@/lib/utils";
import {
  statsOverview,
  revenueData,
  winningProducts,
  activityLog,
  landingPages,
} from "@/lib/mock-data";

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="glass-card p-3 min-w-[180px]">
        <p className="text-[11px] font-semibold text-slate-300 mb-2">{label}</p>
        {payload.map((entry: any, i: number) => (
          <div key={i} className="flex items-center justify-between gap-4 mb-1">
            <div className="flex items-center gap-2">
              <div
                className="w-2 h-2 rounded-full"
                style={{ background: entry.color }}
              />
              <span className="text-[11px] text-slate-400">{entry.name}</span>
            </div>
            <span className="text-[11px] font-semibold text-white">
              {formatCurrency(entry.value)}
            </span>
          </div>
        ))}
      </div>
    );
  }
  return null;
};

export default function DashboardPage() {
  const [animatedStats, setAnimatedStats] = useState({
    totalClicks: 0,
    conversions: 0,
    revenue: 0,
    roi: 0,
  });

  useEffect(() => {
    const duration = 1500;
    const steps = 60;
    const interval = duration / steps;
    let step = 0;

    const timer = setInterval(() => {
      step++;
      const progress = step / steps;
      const eased = 1 - Math.pow(1 - progress, 3);

      setAnimatedStats({
        totalClicks: Math.round(statsOverview.totalClicks * eased),
        conversions: Math.round(statsOverview.conversionRate * 10 * eased) / 10,
        revenue: Math.round(statsOverview.totalRevenue * eased),
        roi: Math.round(statsOverview.roi * eased),
      });

      if (step >= steps) clearInterval(timer);
    }, interval);

    return () => clearInterval(timer);
  }, []);

  const statCards = [
    {
      label: "Total Klik",
      value: formatNumber(animatedStats.totalClicks),
      change: "+18.3%",
      trend: "up",
      icon: MousePointerClick,
      colorClass: "stat-card-purple",
      iconBg: "bg-brand-500/20",
      iconColor: "text-brand-400",
    },
    {
      label: "Konversi Rate",
      value: `${animatedStats.conversions}%`,
      change: "+2.1%",
      trend: "up",
      icon: Target,
      colorClass: "stat-card-green",
      iconBg: "bg-accent-500/20",
      iconColor: "text-accent-400",
    },
    {
      label: "Total Revenue",
      value: formatCurrency(animatedStats.revenue),
      change: "+32.5%",
      trend: "up",
      icon: TrendingUp,
      colorClass: "stat-card-blue",
      iconBg: "bg-blue-500/20",
      iconColor: "text-blue-400",
    },
    {
      label: "ROI",
      value: `${animatedStats.roi}%`,
      change: "+45.2%",
      trend: "up",
      icon: Zap,
      colorClass: "stat-card-orange",
      iconBg: "bg-yellow-500/20",
      iconColor: "text-yellow-400",
    },
  ];

  const activityIcons: Record<string, any> = {
    publish: Upload,
    cloaking: ShieldCheck,
    create: Plus,
    update: FileEdit,
    delete: Trash2,
  };

  const activityColors: Record<string, string> = {
    publish: "text-green-400 bg-green-500/15",
    cloaking: "text-brand-400 bg-brand-500/15",
    create: "text-blue-400 bg-blue-500/15",
    update: "text-yellow-400 bg-yellow-500/15",
    delete: "text-red-400 bg-red-500/15",
  };

  return (
    <div className="space-y-6 animate-fade-in">
      {/* Page Title */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="page-title text-white">Dashboard</h1>
          <p className="page-subtitle">Pusat komando affiliate marketing Anda</p>
        </div>
        <div className="flex items-center gap-2">
          <select className="input-field text-[12px] py-2 px-3 w-auto bg-navy-800">
            <option>7 Hari Terakhir</option>
            <option>30 Hari Terakhir</option>
            <option>3 Bulan Terakhir</option>
          </select>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {statCards.map((stat, i) => {
          const Icon = stat.icon;
          return (
            <div
              key={i}
              className={`glass-card glass-card-hover p-5 stat-card-gradient ${stat.colorClass} animate-slide-up`}
              style={{ animationDelay: `${i * 100}ms` }}
            >
              <div className="flex items-start justify-between mb-4">
                <div className={`w-11 h-11 rounded-xl ${stat.iconBg} flex items-center justify-center`}>
                  <Icon className={`w-5 h-5 ${stat.iconColor}`} />
                </div>
                <div className={`flex items-center gap-1 text-[12px] font-semibold ${
                  stat.trend === "up" ? "text-green-400" : "text-red-400"
                }`}>
                  {stat.trend === "up" ? (
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  ) : (
                    <ArrowDownRight className="w-3.5 h-3.5" />
                  )}
                  {stat.change}
                </div>
              </div>
              <p className="text-2xl font-black text-white mb-1 tracking-tight">
                {stat.value}
              </p>
              <p className="text-[12px] text-slate-400">{stat.label}</p>
            </div>
          );
        })}
      </div>

      {/* Charts Row */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Revenue Chart */}
        <div className="lg:col-span-2 glass-card p-6 animate-slide-up animate-delay-200">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h3 className="text-[15px] font-bold text-white">Pendapatan vs Pengeluaran Iklan</h3>
              <p className="text-[12px] text-slate-500 mt-1">Perbandingan revenue dan ads spend</p>
            </div>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-brand-500" />
                <span className="text-[11px] text-slate-400">Revenue</span>
              </div>
              <div className="flex items-center gap-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-red-400" />
                <span className="text-[11px] text-slate-400">Ads Spend</span>
              </div>
              <div className="flex items-center gap-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-accent-500" />
                <span className="text-[11px] text-slate-400">Profit</span>
              </div>
            </div>
          </div>
          <div className="h-[280px]">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={revenueData}>
                <defs>
                  <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#7c3aed" stopOpacity={0.3} />
                    <stop offset="95%" stopColor="#7c3aed" stopOpacity={0} />
                  </linearGradient>
                  <linearGradient id="colorProfit" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#10b981" stopOpacity={0.2} />
                    <stop offset="95%" stopColor="#10b981" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.04)" />
                <XAxis
                  dataKey="date"
                  stroke="rgba(255,255,255,0.2)"
                  tick={{ fill: "rgba(255,255,255,0.4)", fontSize: 11 }}
                  tickLine={false}
                  axisLine={false}
                />
                <YAxis
                  stroke="rgba(255,255,255,0.2)"
                  tick={{ fill: "rgba(255,255,255,0.4)", fontSize: 11 }}
                  tickLine={false}
                  axisLine={false}
                  tickFormatter={(v) => `${(v / 1000000).toFixed(0)}M`}
                />
                <Tooltip content={<CustomTooltip />} />
                <Area
                  type="monotone"
                  dataKey="revenue"
                  stroke="#7c3aed"
                  strokeWidth={2.5}
                  fill="url(#colorRevenue)"
                  name="Revenue"
                />
                <Area
                  type="monotone"
                  dataKey="adSpend"
                  stroke="#f87171"
                  strokeWidth={2}
                  fill="transparent"
                  strokeDasharray="5 5"
                  name="Ads Spend"
                />
                <Area
                  type="monotone"
                  dataKey="profit"
                  stroke="#10b981"
                  strokeWidth={2}
                  fill="url(#colorProfit)"
                  name="Profit"
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="glass-card p-6 animate-slide-up animate-delay-300">
          <h3 className="text-[15px] font-bold text-white mb-5">Ringkasan Cepat</h3>
          <div className="space-y-4">
            <div className="flex items-center justify-between p-3 rounded-xl bg-white/[0.02] border border-white/[0.04]">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-brand-500/15 flex items-center justify-center">
                  <Layers className="w-4 h-4 text-brand-400" />
                </div>
                <div>
                  <p className="text-[12px] text-slate-400">Landing Pages</p>
                  <p className="text-[16px] font-bold text-white">{statsOverview.totalLandingPages}</p>
                </div>
              </div>
              <span className="badge badge-green text-[10px]">Aktif</span>
            </div>

            <div className="flex items-center justify-between p-3 rounded-xl bg-white/[0.02] border border-white/[0.04]">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-blue-500/15 flex items-center justify-center">
                  <Activity className="w-4 h-4 text-blue-400" />
                </div>
                <div>
                  <p className="text-[12px] text-slate-400">Kampanye Aktif</p>
                  <p className="text-[16px] font-bold text-white">{statsOverview.activeCampaigns}</p>
                </div>
              </div>
              <span className="badge badge-blue text-[10px]">Live</span>
            </div>

            <div className="flex items-center justify-between p-3 rounded-xl bg-white/[0.02] border border-white/[0.04]">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-red-500/15 flex items-center justify-center">
                  <Shield className="w-4 h-4 text-red-400" />
                </div>
                <div>
                  <p className="text-[12px] text-slate-400">Bot Diblokir</p>
                  <p className="text-[16px] font-bold text-white">{formatNumber(statsOverview.blockedBots)}</p>
                </div>
              </div>
              <span className="badge badge-red text-[10px]">Aman</span>
            </div>

            <div className="flex items-center justify-between p-3 rounded-xl bg-white/[0.02] border border-white/[0.04]">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-yellow-500/15 flex items-center justify-center">
                  <BarChart3 className="w-4 h-4 text-yellow-400" />
                </div>
                <div>
                  <p className="text-[12px] text-slate-400">Ads Spend</p>
                  <p className="text-[16px] font-bold text-white">{formatCurrency(statsOverview.totalAdSpend)}</p>
                </div>
              </div>
              <span className="badge badge-yellow text-[10px]">-5.2%</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Row */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Winning Products */}
        <div className="glass-card p-6 animate-slide-up animate-delay-300">
          <div className="flex items-center justify-between mb-5">
            <div className="flex items-center gap-2">
              <Flame className="w-5 h-5 text-orange-400" />
              <h3 className="text-[15px] font-bold text-white">Produk Winning</h3>
            </div>
            <Link href="/dashboard/builder" className="text-[12px] text-brand-400 hover:text-brand-300 flex items-center gap-1 font-medium transition-colors">
              Lihat Semua <ChevronRight className="w-3.5 h-3.5" />
            </Link>
          </div>
          <div className="space-y-3">
            {winningProducts.slice(0, 4).map((product, i) => (
              <div
                key={product.id}
                className="flex items-center gap-4 p-3 rounded-xl bg-white/[0.02] border border-white/[0.04] hover:bg-white/[0.04] transition-all duration-200 cursor-pointer group"
              >
                <div className="w-11 h-11 rounded-xl bg-white/[0.05] flex items-center justify-center text-xl">
                  {product.image}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2">
                    <p className="text-[13px] font-semibold text-white truncate">
                      {product.name}
                    </p>
                    {product.trending && (
                      <span className="badge badge-red text-[9px] py-0.5 px-1.5">
                        <Flame className="w-2.5 h-2.5" /> Hot
                      </span>
                    )}
                  </div>
                  <div className="flex items-center gap-3 mt-1">
                    <span className="text-[11px] text-slate-500">{product.category}</span>
                    <span className="text-[11px] text-slate-600">•</span>
                    <span className="text-[11px] text-slate-500">{formatNumber(product.clicks)} klik</span>
                    <span className="text-[11px] text-slate-600">•</span>
                    <span className="text-[11px] text-accent-400 font-semibold">CTR {product.ctr}%</span>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-[13px] font-bold text-white">{formatCurrency(product.price)}</p>
                  <p className="text-[11px] text-slate-500 line-through">{formatCurrency(product.originalPrice)}</p>
                </div>
                <ExternalLink className="w-4 h-4 text-slate-600 group-hover:text-brand-400 transition-colors flex-shrink-0" />
              </div>
            ))}
          </div>
        </div>

        {/* Activity Log */}
        <div className="glass-card p-6 animate-slide-up animate-delay-400">
          <div className="flex items-center justify-between mb-5">
            <div className="flex items-center gap-2">
              <Clock className="w-5 h-5 text-brand-400" />
              <h3 className="text-[15px] font-bold text-white">Log Aktivitas</h3>
            </div>
            <div className="live-dot" />
          </div>
          <div className="space-y-1">
            {activityLog.map((item, i) => {
              const Icon = activityIcons[item.type] || FileEdit;
              const colorClass = activityColors[item.type] || "text-slate-400 bg-white/5";

              return (
                <div
                  key={item.id}
                  className="flex items-start gap-3 p-3 rounded-xl hover:bg-white/[0.02] transition-colors"
                >
                  <div className={`w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 ${colorClass}`}>
                    <Icon className="w-3.5 h-3.5" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-[12px] text-white">
                      <span className="font-semibold">{item.action}</span>{" "}
                      <span className="text-slate-400">{item.target}</span>
                    </p>
                    <p className="text-[10px] text-slate-600 mt-0.5">
                      {timeAgo(item.timestamp)}
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
