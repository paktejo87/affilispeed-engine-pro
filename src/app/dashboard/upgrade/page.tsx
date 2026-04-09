"use client";

import { useState } from "react";
import { useAuth } from "@/lib/auth-context";
import {
  Crown,
  Check,
  Zap,
  Shield,
  Globe,
  Wand2,
  Sparkles,
  ArrowRight,
  Star,
  Rocket,
} from "lucide-react";

const plans = [
  {
    name: "Starter",
    price: "GRATIS",
    priceNote: "Selamanya",
    icon: Zap,
    color: "text-slate-400",
    borderColor: "border-white/[0.06]",
    bgGlow: "",
    popular: false,
    features: [
      "3 Landing Page",
      "1 Domain Kustom",
      "Basic Cloaking",
      "1.000 Visitor/bulan",
      "Template Standar",
      "Dukungan Email",
    ],
    limits: [
      "Tanpa A/B Testing",
      "Tanpa Anti-Spy Shield",
      "Branding AffiliSpeed",
    ],
  },
  {
    name: "Pro",
    price: "Rp 299.000",
    priceNote: "/bulan",
    icon: Rocket,
    color: "text-brand-400",
    borderColor: "border-brand-500/40",
    bgGlow: "from-brand-500/10 to-accent-500/5",
    popular: true,
    features: [
      "25 Landing Page",
      "5 Domain Kustom",
      "Full Cloaking + Mirage Routing",
      "50.000 Visitor/bulan",
      "Semua Template Premium",
      "Anti-Spy Shield (AdSpy, Minea, BigSpy)",
      "A/B Testing",
      "Webhook & API Access",
      "Prioritas Dukungan 24/7",
      "Tanpa Branding",
    ],
    limits: [],
  },
  {
    name: "Enterprise",
    price: "Rp 799.000",
    priceNote: "/bulan",
    icon: Crown,
    color: "text-yellow-400",
    borderColor: "border-yellow-500/30",
    bgGlow: "from-yellow-500/10 to-orange-500/5",
    popular: false,
    features: [
      "Unlimited Landing Page",
      "Unlimited Domain",
      "Advanced Cloaking + AI Filter",
      "Unlimited Visitor",
      "Custom Template Builder",
      "Full Anti-Spy + Custom Rules",
      "Advanced Analytics & Heatmap",
      "Dedicated IP Address",
      "API Rate Limit 10.000 req/min",
      "Account Manager Dedicated",
      "SLA 99.9% Uptime",
      "White-label Option",
    ],
    limits: [],
  },
];

export default function UpgradePage() {
  const { user } = useAuth();
  const [billingPeriod, setBillingPeriod] = useState<"monthly" | "yearly">("monthly");

  return (
    <div className="space-y-8 animate-fade-in max-w-6xl mx-auto">
      {/* Header */}
      <div className="text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-500/10 border border-brand-500/20 mb-4">
          <Crown className="w-4 h-4 text-yellow-400" />
          <span className="text-[12px] font-bold text-brand-400">Upgrade Paket</span>
        </div>
        <h1 className="text-3xl font-black text-white mb-3">
          Pilih Paket yang <span className="gradient-text">Tepat untuk Anda</span>
        </h1>
        <p className="text-slate-400 text-[15px] max-w-lg mx-auto">
          Tingkatkan performa affiliate marketing Anda dengan fitur-fitur premium yang dirancang untuk konversi maksimal.
        </p>
      </div>

      {/* Billing Toggle */}
      <div className="flex items-center justify-center gap-3">
        <button
          onClick={() => setBillingPeriod("monthly")}
          className={`px-4 py-2 rounded-lg text-[13px] font-semibold transition-all ${
            billingPeriod === "monthly"
              ? "bg-brand-500/20 text-brand-400 border border-brand-500/30"
              : "text-slate-400 hover:text-white"
          }`}
        >
          Bulanan
        </button>
        <button
          onClick={() => setBillingPeriod("yearly")}
          className={`px-4 py-2 rounded-lg text-[13px] font-semibold transition-all flex items-center gap-2 ${
            billingPeriod === "yearly"
              ? "bg-brand-500/20 text-brand-400 border border-brand-500/30"
              : "text-slate-400 hover:text-white"
          }`}
        >
          Tahunan
          <span className="badge badge-green text-[9px]">-20%</span>
        </button>
      </div>

      {/* Plans Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {plans.map((plan, i) => {
          const Icon = plan.icon;
          const isCurrent = user?.plan === plan.name.toLowerCase();
          const displayPrice = billingPeriod === "yearly" && plan.price !== "GRATIS"
            ? `Rp ${Math.round(parseInt(plan.price.replace(/\D/g, "")) * 0.8).toLocaleString("id-ID")}`
            : plan.price;

          return (
            <div
              key={plan.name}
              className={`relative glass-card p-6 transition-all duration-300 hover:-translate-y-1 animate-slide-up ${
                plan.popular ? `border-brand-500/40 bg-gradient-to-br ${plan.bgGlow}` : ""
              }`}
              style={{ animationDelay: `${i * 100}ms` }}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <div className="flex items-center gap-1 px-3 py-1 rounded-full bg-gradient-to-r from-brand-500 to-accent-500 text-white text-[10px] font-bold shadow-lg shadow-brand-500/25">
                    <Star className="w-3 h-3" />
                    Paling Populer
                  </div>
                </div>
              )}

              <div className="mb-6">
                <div className="flex items-center gap-2 mb-3">
                  <div className={`w-10 h-10 rounded-xl bg-white/[0.04] flex items-center justify-center ${plan.color}`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-[16px] font-bold text-white">{plan.name}</h3>
                </div>
                <div className="flex items-baseline gap-1">
                  <span className="text-3xl font-black text-white">{displayPrice}</span>
                  <span className="text-[13px] text-slate-500">{plan.priceNote}</span>
                </div>
              </div>

              {/* Features */}
              <ul className="space-y-2.5 mb-6">
                {plan.features.map((feature, j) => (
                  <li key={j} className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                    <span className="text-[12px] text-slate-300">{feature}</span>
                  </li>
                ))}
                {plan.limits.map((limit, j) => (
                  <li key={`limit-${j}`} className="flex items-start gap-2">
                    <span className="w-4 h-4 text-center text-red-400 flex-shrink-0 text-[12px]">✕</span>
                    <span className="text-[12px] text-slate-500 line-through">{limit}</span>
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              {isCurrent ? (
                <button
                  disabled
                  className="w-full py-3 rounded-xl bg-white/[0.04] text-slate-500 text-[13px] font-semibold border border-white/[0.06]"
                >
                  Paket Saat Ini
                </button>
              ) : (
                <button
                  className={`w-full py-3 rounded-xl text-[13px] font-semibold flex items-center justify-center gap-2 transition-all ${
                    plan.popular
                      ? "bg-gradient-to-r from-brand-500 to-accent-500 text-white shadow-lg shadow-brand-500/25 hover:shadow-brand-500/40"
                      : "bg-white/[0.04] text-white border border-white/[0.08] hover:bg-white/[0.08]"
                  }`}
                >
                  {plan.price === "GRATIS" ? "Mulai Gratis" : "Pilih Paket"}
                  <ArrowRight className="w-4 h-4" />
                </button>
              )}
            </div>
          );
        })}
      </div>

      {/* FAQ */}
      <div className="glass-card p-8 text-center">
        <Sparkles className="w-8 h-8 text-brand-400 mx-auto mb-3" />
        <h3 className="text-[16px] font-bold text-white mb-2">Ada Pertanyaan?</h3>
        <p className="text-[13px] text-slate-400 mb-4">
          Tim kami siap membantu Anda memilih paket yang tepat. Hubungi kami kapan saja.
        </p>
        <button className="btn-ghost text-[13px] px-6 py-2.5">
          Hubungi Sales Team
        </button>
      </div>
    </div>
  );
}
