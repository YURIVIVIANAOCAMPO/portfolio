"use client";

import styles from "../DashboardShell/DashboardShell.module.css";
import widgetStyles from "./Widgets.module.css";
import { motion } from "framer-motion";
import { CheckCircle, ExternalLink, Key, User, ArrowUpRight, Github, Linkedin, Mail, Layout, Server, Database, Target } from "lucide-react";
import { clsx } from "clsx";
import Image from "next/image";
import D3Chart from "../D3Chart/D3Chart";

export const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

export const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1 }
};

export function TiltWidget({ children, className }: { children: React.ReactNode, className?: string }) {
  return (
    <motion.div
      variants={itemVariants}
      whileHover={{ scale: 1.02, rotateX: 2, rotateY: -2 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className={clsx(styles.widget, "glass-reflection", className)}
    >
      {children}
    </motion.div>
  );
}

export function HeroWidget({ className }: { className?: string }) {
  return (
    <TiltWidget className={className}>
      <motion.div 
        className={widgetStyles.heroContent}
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.2 }}
      >
        <div className={styles.labelBI} style={{ color: 'var(--accent)', marginBottom: '0.5rem' }}>Perfil Profesional</div>
        <h1 className={widgetStyles.heroTitle}>Viviana Ocampo Baracaldo</h1>
        <h3 className={widgetStyles.heroSubtitle}>Fullstack developer & data strategist</h3>
        <p>Desarrolladora Fullstack orientada a la construcción de soluciones escalables y al aprovechamiento estratégico de los datos. Especialista en transformar necesidades de negocio en productos digitales funcionales, combinando visión técnica, pensamiento estructurado y enfoque en resultados.</p>
        <div className={widgetStyles.kpiGrid}>
          <div className={widgetStyles.kpiItem}>
            <span className={widgetStyles.kpiValue}>+3</span>
            <span className={widgetStyles.kpiLabel}>Sistemas complejos</span>
          </div>
          <div className={widgetStyles.kpiItem}>
            <span className={widgetStyles.kpiValue}>100%</span>
            <span className={widgetStyles.kpiLabel}>Adaptabilidad tech</span>
          </div>
        </div>
      </motion.div>
    </TiltWidget>
  );
}

export function ProjectsWidget() {
  const projects = [
    {
      title: "Microservices backend",
      tag: "Ecosystem",
      image: "/products-service.png",
      url: "https://products-service-u496.onrender.com/swagger-ui/index.html"
    },
    {
      title: "Spybee manager",
      tag: "SaaS",
      image: "/spybee.png",
      url: "https://spybee-six.vercel.app"
    },
    {
      title: "Oromiel multiparque",
      tag: "Real Estate",
      image: "/oromiel.png",
      url: "https://oromielmultiparque.com"
    }
  ];

  return (
    <TiltWidget>
      <div className={styles.widgetHeader}>
        <h3>Casos de éxito</h3>
      </div>
      <div className={widgetStyles.projectList}>
        {projects.map(p => (
          <a key={p.title} href={p.url} target="_blank" className={widgetStyles.projectCard}>
            <div className={widgetStyles.projectImg}>
               <Image src={p.image} alt={p.title} fill style={{ objectFit: 'cover' }} />
            </div>
            <div className={widgetStyles.projectMeta}>
              <h4>{p.title}</h4>
              <span>{p.tag}</span>
            </div>
          </a>
        ))}
      </div>
    </TiltWidget>
  );
}

export function StatsWidget({ title, value, subText, chart, data, labels }: { title: string, value: string, subText: string, chart?: boolean, data?: number[], labels?: string[] }) {
  return (
    <div className={clsx(styles.widget, "glass-reflection")}>
      <div className={widgetStyles.statItem}>
        <span className={widgetStyles.statTitle}>{title}</span>
        
        {chart && (
          <div className={widgetStyles.miniChartFull}>
             <D3Chart data={data || [30, 80, 45, 90, 55, 70, 85]} labels={labels} />
          </div>
        )}

        <div className={widgetStyles.statFooter}>
          <span className={widgetStyles.statValueSmall}>{value}</span>
          <span className={widgetStyles.statSub}>{subText}</span>
        </div>
      </div>
    </div>
  );
}

export function SkillsWidget() {
  const categories = [
    { name: "Frontend moderno", items: ["React (Next.js)", "Vue.js", "Angular", "Framer motion", "D3.js"], icon: <Layout size={14} /> },
    { name: "Backend & cloud", items: ["Node.js", "Spring boot", "FastAPI", "Agentes de IA", "Docker"], icon: <Server size={14} /> },
    { name: "Datos & BI", items: ["Python", "APIs REST", "CKAN/Solr", "Power BI"], icon: <Database size={14} /> },
    { name: "Growth & SEM", items: ["Meta Ads", "Google Ads", "ROI Optimization", "GTM Tracking"], icon: <Target size={14} /> },
  ];

  return (
    <div className={clsx(styles.widget, "glass-reflection")}>
       <div className={styles.widgetHeader}>
        <h3>Stack tecnológico & habilidades</h3>
      </div>
      <div className={widgetStyles.skillGrid}>
        {categories.map(c => (
          <div key={c.name} className={widgetStyles.skillCat}>
            <h5>
              {c.icon}
              <span style={{ marginLeft: '8px' }}>{c.name}</span>
            </h5>
            <div className={widgetStyles.skillItems}>
              {c.items.map(i => <span key={i} className={widgetStyles.skillItem}>{i}</span>)}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export function ContactWidget() {
  return (
    <TiltWidget className={widgetStyles.contactWidgetSpecial}>
       <div className={widgetStyles.contactContent}>
          <h3>¿Trabajamos?</h3>
          <div className={widgetStyles.contactLinks}>
             <Mail size={20} />
             <Linkedin size={20} />
             <Github size={20} />
          </div>
       </div>
    </TiltWidget>
  );
}
