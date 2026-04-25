"use client";

import React, { useState } from "react";
import styles from "./DashboardShell.module.css";
import { 
  LayoutDashboard, 
  Briefcase, 
  Code2, 
  User, 
  Mail, 
  Settings, 
  LogOut, 
  Bell, 
  Menu,
  X,
  Cpu
} from "lucide-react";
import { clsx } from "clsx";

export default function DashboardShell({ children }: { children: React.ReactNode }) {
  const [activeTab, setActiveTab] = useState("hero");

  const navigateTo = (id: string) => {
    setActiveTab(id);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const navItems = [
    { id: "hero", label: "Dashboard", icon: LayoutDashboard },
    { id: "projects", label: "Proyectos", icon: Briefcase },
    { id: "skills", label: "Stack tech", icon: Cpu },
    { id: "contact", label: "Contacto", icon: Mail },
  ];

  return (
    <div className={styles.dashboardWrapper}>
      <header className={styles.topbar}>
        {/* Main Navigation */}
        <nav className={styles.mainNav}>
          {navItems.map((item) => (
            <div 
              key={item.id}
              className={clsx(styles.navLink, activeTab === item.id && styles.activeLink)}
              onClick={() => navigateTo(item.id)}
            >
              <item.icon size={18} className={styles.icon} />
              <span className={styles.navLabel}>{item.label}</span>
            </div>
          ))}
        </nav>
      </header>



      {/* Main Content */}
      <main className={styles.mainContent}>
        {children}
      </main>
    </div>
  );
}
