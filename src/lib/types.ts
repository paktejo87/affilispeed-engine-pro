export interface LandingPage {
  id: string;
  title: string;
  slug: string;
  status: "published" | "draft" | "archived";
  thumbnail: string;
  clicks: number;
  conversions: number;
  ctr: number;
  createdAt: Date;
  updatedAt: Date;
  cloakingEnabled: boolean;
  domain: string;
}

export interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice: number;
  image: string;
  category: string;
  platform: "shopee" | "tiktok" | "tokopedia";
  clicks: number;
  conversions: number;
  ctr: number;
  trending: boolean;
}

export interface DomainInfo {
  id: string;
  domain: string;
  type: "default" | "custom";
  sslStatus: "active" | "pending" | "expired";
  health: "healthy" | "warning" | "danger";
  landingPages: number;
  addedAt: Date;
  expiresAt: Date;
}

export interface TrafficLog {
  id: string;
  timestamp: Date;
  ip: string;
  country: string;
  isp: string;
  device: string;
  action: "allowed" | "blocked" | "redirected";
  reason: string;
  page: string;
}

export interface ActivityItem {
  id: string;
  action: string;
  target: string;
  timestamp: Date;
  type: "create" | "update" | "delete" | "publish" | "cloaking";
}

export interface RevenueData {
  date: string;
  revenue: number;
  adSpend: number;
  profit: number;
}

export interface StatsOverview {
  totalLandingPages: number;
  activeCampaigns: number;
  totalClicks: number;
  conversionRate: number;
  totalRevenue: number;
  totalAdSpend: number;
  roi: number;
  blockedBots: number;
}
