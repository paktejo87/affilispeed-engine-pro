"use client";

import { useState } from "react";
import { useAuth } from "@/lib/auth-context";
import { useRouter } from "next/navigation";
import {
  Users,
  Search,
  UserPlus,
  MoreHorizontal,
  Shield,
  ShieldCheck,
  Crown,
  Mail,
  Calendar,
  Ban,
  CheckCircle,
  XCircle,
  Eye,
  Edit,
  Trash2,
  Download,
  Filter,
  ArrowUpDown,
  TrendingUp,
  AlertTriangle,
} from "lucide-react";

const mockUsers = [
  { id: 1, name: "Ahmad Rizky", email: "ahmad.rizky@email.com", role: "user", plan: "pro", status: "active", lpCount: 12, revenue: "Rp 15.2M", lastLogin: "2 menit lalu", created: "2025-01-15" },
  { id: 2, name: "Siti Nurhaliza", email: "siti.nur@gmail.com", role: "user", plan: "enterprise", status: "active", lpCount: 34, revenue: "Rp 89.7M", lastLogin: "1 jam lalu", created: "2024-11-20" },
  { id: 3, name: "Budi Santoso", email: "budi.s@yahoo.com", role: "user", plan: "free", status: "active", lpCount: 2, revenue: "Rp 450K", lastLogin: "3 jam lalu", created: "2025-03-01" },
  { id: 4, name: "Dewi Lestari", email: "dewi.l@outlook.com", role: "user", plan: "pro", status: "suspended", lpCount: 8, revenue: "Rp 6.1M", lastLogin: "5 hari lalu", created: "2025-02-10" },
  { id: 5, name: "Reza Firmansyah", email: "reza.f@gmail.com", role: "user", plan: "pro", status: "active", lpCount: 15, revenue: "Rp 22.8M", lastLogin: "30 menit lalu", created: "2024-12-05" },
  { id: 6, name: "Maya Putri", email: "maya.p@email.com", role: "user", plan: "free", status: "active", lpCount: 1, revenue: "Rp 120K", lastLogin: "2 hari lalu", created: "2025-03-20" },
  { id: 7, name: "Farhan Wijaya", email: "farhan.w@email.com", role: "user", plan: "enterprise", status: "active", lpCount: 42, revenue: "Rp 156.3M", lastLogin: "10 menit lalu", created: "2024-08-15" },
  { id: 8, name: "Indah Permata", email: "indah.p@gmail.com", role: "user", plan: "pro", status: "inactive", lpCount: 5, revenue: "Rp 2.8M", lastLogin: "30 hari lalu", created: "2025-01-28" },
];

export default function AdminUsersPage() {
  const { isAdmin } = useAuth();
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState("");
  const [filterPlan, setFilterPlan] = useState("all");
  const [filterStatus, setFilterStatus] = useState("all");
  const [selectedUsers, setSelectedUsers] = useState<number[]>([]);

  if (!isAdmin) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh] text-center animate-fade-in">
        <div className="w-20 h-20 rounded-2xl bg-red-500/10 flex items-center justify-center mb-4">
          <Ban className="w-10 h-10 text-red-400" />
        </div>
        <h2 className="text-xl font-bold text-white mb-2">Akses Ditolak</h2>
        <p className="text-[14px] text-slate-400 mb-6 max-w-sm">
          Halaman ini hanya dapat diakses oleh Admin. Silakan login dengan akun admin.
        </p>
        <button onClick={() => router.push("/dashboard")} className="btn-primary text-[13px]">
          Kembali ke Dashboard
        </button>
      </div>
    );
  }

  const filteredUsers = mockUsers.filter(u => {
    const matchSearch = u.name.toLowerCase().includes(searchQuery.toLowerCase()) || u.email.toLowerCase().includes(searchQuery.toLowerCase());
    const matchPlan = filterPlan === "all" || u.plan === filterPlan;
    const matchStatus = filterStatus === "all" || u.status === filterStatus;
    return matchSearch && matchPlan && matchStatus;
  });

  const stats = [
    { label: "Total User", value: mockUsers.length.toString(), change: "+3 minggu ini", icon: Users, color: "text-brand-400", bg: "bg-brand-500/15" },
    { label: "User Aktif", value: mockUsers.filter(u => u.status === "active").length.toString(), change: "87.5%", icon: CheckCircle, color: "text-green-400", bg: "bg-green-500/15" },
    { label: "Paket Pro+", value: mockUsers.filter(u => u.plan !== "free").length.toString(), change: "75% paying", icon: Crown, color: "text-yellow-400", bg: "bg-yellow-500/15" },
    { label: "Total Revenue", value: "Rp 293M", change: "+18.5% bulan ini", icon: TrendingUp, color: "text-accent-400", bg: "bg-accent-500/15" },
  ];

  return (
    <div className="space-y-6 animate-fade-in">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="page-title text-white flex items-center gap-3">
            <Users className="w-7 h-7 text-red-400" />
            Kelola Pengguna
          </h1>
          <p className="page-subtitle">Manajemen akun pengguna, langganan, dan izin akses</p>
        </div>
        <div className="flex items-center gap-2">
          <button className="btn-ghost text-[12px] py-2">
            <Download className="w-4 h-4" />
            Export CSV
          </button>
          <button className="btn-primary text-[12px] py-2">
            <UserPlus className="w-4 h-4" />
            Tambah User
          </button>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat, i) => {
          const Icon = stat.icon;
          return (
            <div key={i} className="glass-card glass-card-hover p-5 animate-slide-up" style={{ animationDelay: `${i * 80}ms` }}>
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

      {/* Filters */}
      <div className="glass-card p-4">
        <div className="flex flex-wrap items-center gap-3">
          <div className="relative flex-1 min-w-[250px]">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Cari nama atau email..."
              className="input-field text-[12px] py-2.5 pl-10 w-full"
            />
          </div>
          <select
            value={filterPlan}
            onChange={(e) => setFilterPlan(e.target.value)}
            className="input-field text-[12px] py-2.5 w-[140px]"
          >
            <option value="all">Semua Paket</option>
            <option value="free">Free</option>
            <option value="pro">Pro</option>
            <option value="enterprise">Enterprise</option>
          </select>
          <select
            value={filterStatus}
            onChange={(e) => setFilterStatus(e.target.value)}
            className="input-field text-[12px] py-2.5 w-[140px]"
          >
            <option value="all">Semua Status</option>
            <option value="active">Aktif</option>
            <option value="suspended">Suspended</option>
            <option value="inactive">Nonaktif</option>
          </select>
        </div>
      </div>

      {/* Users Table */}
      <div className="glass-card overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-white/[0.06]">
                <th className="text-left text-[10px] font-bold text-slate-500 uppercase tracking-wider py-3 px-4">
                  <input
                    type="checkbox"
                    className="rounded bg-navy-800 border-white/10 accent-brand-500"
                    onChange={(e) => {
                      if (e.target.checked) setSelectedUsers(filteredUsers.map(u => u.id));
                      else setSelectedUsers([]);
                    }}
                  />
                </th>
                {["User", "Paket", "Status", "Landing Page", "Revenue", "Login Terakhir", "Aksi"].map((header) => (
                  <th key={header} className="text-left text-[10px] font-bold text-slate-500 uppercase tracking-wider py-3 px-4">
                    {header}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {filteredUsers.map((user) => (
                <tr key={user.id} className="border-b border-white/[0.03] hover:bg-white/[0.02] transition-colors">
                  <td className="py-3 px-4">
                    <input
                      type="checkbox"
                      checked={selectedUsers.includes(user.id)}
                      onChange={(e) => {
                        if (e.target.checked) setSelectedUsers([...selectedUsers, user.id]);
                        else setSelectedUsers(selectedUsers.filter(id => id !== user.id));
                      }}
                      className="rounded bg-navy-800 border-white/10 accent-brand-500"
                    />
                  </td>
                  <td className="py-3 px-4">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-brand-400 to-accent-400 flex items-center justify-center flex-shrink-0">
                        <span className="text-white font-bold text-[11px]">
                          {user.name.split(" ").map(n => n[0]).join("").slice(0, 2)}
                        </span>
                      </div>
                      <div>
                        <p className="text-[12px] font-semibold text-white">{user.name}</p>
                        <p className="text-[10px] text-slate-500">{user.email}</p>
                      </div>
                    </div>
                  </td>
                  <td className="py-3 px-4">
                    <span className={`badge text-[9px] ${
                      user.plan === "enterprise" ? "badge-yellow" :
                      user.plan === "pro" ? "badge-purple" : "badge-blue"
                    }`}>
                      {user.plan.charAt(0).toUpperCase() + user.plan.slice(1)}
                    </span>
                  </td>
                  <td className="py-3 px-4">
                    <span className={`badge text-[9px] ${
                      user.status === "active" ? "badge-green" :
                      user.status === "suspended" ? "badge-red" : "badge-yellow"
                    }`}>
                      {user.status === "active" ? "✓ Aktif" :
                       user.status === "suspended" ? "⚠ Suspended" : "○ Nonaktif"}
                    </span>
                  </td>
                  <td className="py-3 px-4 text-[12px] text-white font-mono">{user.lpCount}</td>
                  <td className="py-3 px-4 text-[12px] text-green-400 font-semibold">{user.revenue}</td>
                  <td className="py-3 px-4 text-[11px] text-slate-400">{user.lastLogin}</td>
                  <td className="py-3 px-4">
                    <div className="flex items-center gap-1">
                      <button className="w-7 h-7 rounded-lg hover:bg-white/[0.04] flex items-center justify-center text-slate-400 hover:text-white transition-colors" title="Lihat Detail">
                        <Eye className="w-3.5 h-3.5" />
                      </button>
                      <button className="w-7 h-7 rounded-lg hover:bg-white/[0.04] flex items-center justify-center text-slate-400 hover:text-white transition-colors" title="Edit">
                        <Edit className="w-3.5 h-3.5" />
                      </button>
                      <button className="w-7 h-7 rounded-lg hover:bg-red-500/10 flex items-center justify-center text-slate-400 hover:text-red-400 transition-colors" title={user.status === "suspended" ? "Aktifkan" : "Suspend"}>
                        {user.status === "suspended" ? <CheckCircle className="w-3.5 h-3.5" /> : <Ban className="w-3.5 h-3.5" />}
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Table Footer */}
        <div className="flex items-center justify-between p-4 border-t border-white/[0.06]">
          <p className="text-[11px] text-slate-500">
            Menampilkan {filteredUsers.length} dari {mockUsers.length} pengguna
          </p>
          <div className="flex gap-1">
            {[1, 2, 3].map(p => (
              <button key={p} className={`w-8 h-8 rounded-lg text-[12px] font-semibold transition-all ${
                p === 1 ? "bg-brand-500/20 text-brand-400" : "text-slate-500 hover:bg-white/[0.04]"
              }`}>
                {p}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
