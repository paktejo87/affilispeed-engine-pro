"use client";

import { createContext, useContext, useState, ReactNode } from "react";

export type UserRole = "admin" | "user";

export interface AuthUser {
  name: string;
  email: string;
  avatar: string;
  role: UserRole;
  plan: "free" | "pro" | "enterprise";
}

interface AuthContextType {
  user: AuthUser | null;
  login: (role: UserRole) => void;
  logout: () => void;
  isAdmin: boolean;
}

const adminUser: AuthUser = {
  name: "Super Admin",
  email: "admin@affilispeed.com",
  avatar: "SA",
  role: "admin",
  plan: "enterprise",
};

const regularUser: AuthUser = {
  name: "Ahmad Rizky",
  email: "ahmad.rizky@email.com",
  avatar: "AR",
  role: "user",
  plan: "pro",
};

const AuthContext = createContext<AuthContextType>({
  user: null,
  login: () => {},
  logout: () => {},
  isAdmin: false,
});

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<AuthUser | null>(null);

  const login = (role: UserRole) => {
    setUser(role === "admin" ? adminUser : regularUser);
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, isAdmin: user?.role === "admin" }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
