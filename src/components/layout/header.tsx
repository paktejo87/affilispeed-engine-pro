"use client";

import { useState } from "react";
import {
  Search,
  Bell,
  Plus,
  ChevronDown,
  Sparkles,
  X,
} from "lucide-react";

export default function Header() {
  const [searchOpen, setSearchOpen] = useState(false);
  const [notifOpen, setNotifOpen] = useState(false);

  const notifications = [
    {
      id: 1,
      title: "Domain Terindikasi Flagging",
      message: "best.dealhunter.co.id terdeteksi oleh sistem Meta",
      time: "5 menit lalu",
      type: "danger",
    },
    {
      id: 2,
      title: "Konversi Meningkat!",
      message: "Serum Anti Aging naik 23% hari ini",
      time: "1 jam lalu",
      type: "success",
    },
    {
      id: 3,
      title: "Bot Terblokir",
      message: "AdSpy scanner terdeteksi & diblokir dari 3 halaman",
      time: "3 jam lalu",
      type: "warning",
    },
  ];

  return (
    <header className="h-[72px] border-b border-white/[0.06] bg-navy-900/60 backdrop-blur-xl flex items-center justify-between px-6 sticky top-0 z-40">
      {/* Left: Greeting */}
      <div>
        <h2 className="text-[15px] font-bold text-white flex items-center gap-2">
          Selamat Datang Kembali!
          <Sparkles className="w-4 h-4 text-yellow-400" />
        </h2>
        <p className="text-[12px] text-slate-500">
          {new Date().toLocaleDateString("id-ID", {
            weekday: "long",
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </p>
      </div>

      {/* Right: Actions */}
      <div className="flex items-center gap-2">
        {/* Search */}
        <div className="relative">
          {searchOpen ? (
            <div className="flex items-center bg-navy-800 border border-white/10 rounded-xl px-3 py-2 gap-2 animate-scale-in">
              <Search className="w-4 h-4 text-slate-400" />
              <input
                type="text"
                placeholder="Cari halaman, produk, domain..."
                className="bg-transparent text-[13px] text-white outline-none w-[240px] placeholder:text-slate-500"
                autoFocus
              />
              <button
                onClick={() => setSearchOpen(false)}
                className="text-slate-400 hover:text-white"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          ) : (
            <button
              onClick={() => setSearchOpen(true)}
              className="w-10 h-10 rounded-xl bg-white/[0.04] border border-white/[0.06] flex items-center justify-center text-slate-400 hover:text-white hover:bg-white/[0.08] transition-all duration-200"
            >
              <Search className="w-[18px] h-[18px]" />
            </button>
          )}
        </div>

        {/* Notifications */}
        <div className="relative">
          <button
            onClick={() => setNotifOpen(!notifOpen)}
            className="w-10 h-10 rounded-xl bg-white/[0.04] border border-white/[0.06] flex items-center justify-center text-slate-400 hover:text-white hover:bg-white/[0.08] transition-all duration-200 relative"
          >
            <Bell className="w-[18px] h-[18px]" />
            <div className="absolute top-2 right-2 w-2.5 h-2.5 rounded-full bg-red-500 border-2 border-navy-900" />
          </button>

          {notifOpen && (
            <>
              <div
                className="fixed inset-0 z-40"
                onClick={() => setNotifOpen(false)}
              />
              <div className="absolute right-0 top-12 w-[360px] rounded-2xl bg-navy-800 border border-white/[0.08] shadow-2xl shadow-black/40 z-50 animate-scale-in overflow-hidden">
                <div className="px-4 py-3 border-b border-white/[0.06] flex items-center justify-between">
                  <h3 className="text-[13px] font-bold text-white">
                    Notifikasi
                  </h3>
                  <span className="badge badge-purple text-[10px]">
                    3 Baru
                  </span>
                </div>
                <div className="max-h-[320px] overflow-y-auto">
                  {notifications.map((notif) => (
                    <div
                      key={notif.id}
                      className="px-4 py-3 border-b border-white/[0.04] hover:bg-white/[0.02] transition-colors cursor-pointer"
                    >
                      <div className="flex items-start gap-3">
                        <div
                          className={`w-2 h-2 rounded-full mt-1.5 flex-shrink-0 ${
                            notif.type === "danger"
                              ? "bg-red-500"
                              : notif.type === "success"
                              ? "bg-green-500"
                              : "bg-yellow-500"
                          }`}
                        />
                        <div className="min-w-0">
                          <p className="text-[12px] font-semibold text-white">
                            {notif.title}
                          </p>
                          <p className="text-[11px] text-slate-400 mt-0.5">
                            {notif.message}
                          </p>
                          <p className="text-[10px] text-slate-600 mt-1">
                            {notif.time}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="px-4 py-2.5 border-t border-white/[0.06]">
                  <button className="text-[12px] text-brand-400 font-medium hover:text-brand-300 transition-colors w-full text-center">
                    Lihat Semua Notifikasi
                  </button>
                </div>
              </div>
            </>
          )}
        </div>

        {/* New LP Button */}
        <button className="btn-primary text-[13px] px-5">
          <Plus className="w-4 h-4" />
          <span className="hidden sm:inline">Buat Landing Page</span>
        </button>
      </div>
    </header>
  );
}
