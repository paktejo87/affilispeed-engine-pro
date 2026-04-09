"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  Wand2,
  Shield,
  Globe,
  Settings,
  ChevronLeft,
  ChevronRight,
  Zap,
  LogOut,
  Crown,
  HelpCircle,
} from "lucide-react";
import { cn } from "@/lib/utils";

const navItems = [
  {
    label: "Dashboard",
    href: "/dashboard",
    icon: LayoutDashboard,
    description: "Pusat Komando",
  },
  {
    label: "Form Builder",
    href: "/dashboard/builder",
    icon: Wand2,
    description: "Mesin Konversi",
  },
  {
    label: "Ghost Layer",
    href: "/dashboard/cloaking",
    icon: Shield,
    description: "Pertahanan Siluman",
  },
  {
    label: "Domain",
    href: "/dashboard/domains",
    icon: Globe,
    description: "Manajemen URL",
  },
  {
    label: "Pengaturan",
    href: "/dashboard/settings",
    icon: Settings,
    description: "Konfigurasi",
  },
];

export default function Sidebar() {
  const [collapsed, setCollapsed] = useState(false);
  const pathname = usePathname();

  return (
    <aside
      className={cn(
        "fixed left-0 top-0 h-screen z-50 flex flex-col transition-all duration-300 ease-in-out",
        "bg-navy-900/95 backdrop-blur-xl border-r border-white/[0.06]",
        collapsed ? "w-[72px]" : "w-[260px]"
      )}
    >
      {/* Logo */}
      <div className="flex items-center gap-3 px-5 h-[72px] border-b border-white/[0.06]">
        <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-brand-500 to-accent-500 flex items-center justify-center flex-shrink-0">
          <Zap className="w-5 h-5 text-white" />
        </div>
        {!collapsed && (
          <div className="animate-fade-in">
            <h1 className="text-[15px] font-bold tracking-tight text-white">
              AffiliSpeed
            </h1>
            <p className="text-[10px] text-brand-400 font-semibold tracking-widest uppercase">
              Engine Pro
            </p>
          </div>
        )}
      </div>

      {/* Navigation */}
      <nav className="flex-1 py-4 px-3 overflow-y-auto">
        <div className={cn("mb-3 px-2", collapsed && "hidden")}>
          <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-slate-500">
            Menu Utama
          </span>
        </div>
        <ul className="space-y-1">
          {navItems.map((item) => {
            const isActive =
              pathname === item.href ||
              (item.href !== "/dashboard" && pathname.startsWith(item.href));
            const Icon = item.icon;

            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={cn(
                    "group flex items-center gap-3 px-3 py-2.5 rounded-xl transition-all duration-200 relative",
                    isActive
                      ? "bg-gradient-to-r from-brand-500/20 to-brand-500/5 text-white"
                      : "text-slate-400 hover:bg-white/[0.04] hover:text-white"
                  )}
                >
                  {isActive && (
                    <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[3px] h-8 rounded-r-full bg-brand-500" />
                  )}
                  <div
                    className={cn(
                      "w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0 transition-all duration-200",
                      isActive
                        ? "bg-brand-500/20 text-brand-400"
                        : "bg-white/[0.04] text-slate-400 group-hover:bg-white/[0.08] group-hover:text-white"
                    )}
                  >
                    <Icon className="w-[18px] h-[18px]" />
                  </div>
                  {!collapsed && (
                    <div className="animate-fade-in min-w-0">
                      <span className="text-[13px] font-semibold block truncate">
                        {item.label}
                      </span>
                      <span className="text-[10px] text-slate-500 block">
                        {item.description}
                      </span>
                    </div>
                  )}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>

      {/* Upgrade Banner */}
      {!collapsed && (
        <div className="mx-3 mb-3 p-4 rounded-xl bg-gradient-to-br from-brand-500/10 to-accent-500/5 border border-brand-500/20 animate-fade-in">
          <div className="flex items-center gap-2 mb-2">
            <Crown className="w-4 h-4 text-yellow-400" />
            <span className="text-[12px] font-bold text-white">
              Upgrade Pro
            </span>
          </div>
          <p className="text-[11px] text-slate-400 mb-3 leading-relaxed">
            Buka fitur cloaking unlimited & domain tanpa batas.
          </p>
          <button className="btn-primary w-full text-[12px] py-2 justify-center">
            Upgrade Sekarang
          </button>
        </div>
      )}

      {/* Bottom Section */}
      <div className="px-3 pb-4 border-t border-white/[0.06] pt-3">
        <div className="flex items-center gap-3 px-2 mb-2">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-brand-400 to-accent-400 flex items-center justify-center flex-shrink-0">
            <span className="text-white font-bold text-[13px]">AR</span>
          </div>
          {!collapsed && (
            <div className="animate-fade-in min-w-0 flex-1">
              <p className="text-[13px] font-semibold text-white truncate">
                Ahmad Rizky
              </p>
              <p className="text-[10px] text-slate-500">Paket Pro</p>
            </div>
          )}
        </div>
        {!collapsed && (
          <div className="flex gap-1 mt-2">
            <button className="flex-1 flex items-center justify-center gap-1.5 py-2 rounded-lg text-[11px] text-slate-400 hover:bg-white/[0.04] hover:text-white transition-colors">
              <HelpCircle className="w-3.5 h-3.5" />
              Bantuan
            </button>
            <button className="flex-1 flex items-center justify-center gap-1.5 py-2 rounded-lg text-[11px] text-red-400 hover:bg-red-500/10 transition-colors">
              <LogOut className="w-3.5 h-3.5" />
              Keluar
            </button>
          </div>
        )}
      </div>

      {/* Collapse Toggle */}
      <button
        onClick={() => setCollapsed(!collapsed)}
        className="absolute -right-3 top-[80px] w-6 h-6 rounded-full bg-navy-800 border border-white/10 flex items-center justify-center text-slate-400 hover:text-white hover:border-brand-500/50 transition-all duration-200 z-50"
      >
        {collapsed ? (
          <ChevronRight className="w-3.5 h-3.5" />
        ) : (
          <ChevronLeft className="w-3.5 h-3.5" />
        )}
      </button>
    </aside>
  );
}
