"use client";

import { useState } from "react";
import Sidebar from "@/components/layout/sidebar";
import Header from "@/components/layout/header";
import { cn } from "@/lib/utils";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen">
      <Sidebar />
      <div className="ml-[260px] transition-all duration-300 min-h-screen">
        <Header />
        <main className="p-6">{children}</main>
      </div>
    </div>
  );
}
