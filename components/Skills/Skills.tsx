"use client";

import { motion } from "framer-motion";
import styles from "./Skills.module.css";
import { Layout, Server, Database, Cloud, Search, Target } from "lucide-react";

const skillCategories = [
  {
    title: "Frontend & data viz",
    icon: <Layout className={styles.icon} />,
    skills: [
      { name: "React (Vite/Next.js)", desc: "Interfaces dinámicas de alto rendimiento" },
      { name: "Recharts & D3.js", desc: "Visualización avanzada de datos complejos" },
      { name: "Zustand & Framer Motion", desc: "Estado global y micro-interacciones" },
    ]
  },
  {
    title: "Backend & architecture",
    icon: <Server className={styles.icon} />,
    skills: [
      { name: "Node.js & Java", desc: "Microservicios con Spring Boot y Express" },
      { name: "Arquitectura REST", desc: "Diseño e integración de APIs seguras" },
      { name: "Procesos masivos", desc: "Manejo de CSV y transformación de datasets" },
    ]
  },
  {
    title: "Data & infrastructure",
    icon: <Database className={styles.icon} />,
    skills: [
      { name: "CKAN & Solr", desc: "Gestión y búsqueda en catálogos de datos" },
      { name: "PostgreSQL & Docker", desc: "Persistencia y entornos contenerizados" },
      { name: "Linux (Ubuntu)", desc: "Configuración y despliegue en servidores" },
    ]
  },
  {
    title: "Growth & SEM Strategy",
    icon: <Target className={styles.icon} />,
    skills: [
      { name: "Trafficker Especialista", desc: "Meta Ads (Facebook/Instagram) y Google Ads" },
      { name: "Conversión & ROI", desc: "Optimización de campañas orientada a resultados" },
      { name: "Tracking Avanzado", desc: "Píxeles, conversiones offline y GTM" },
    ]
  },
  {
    title: "Business logic specialist",
    icon: <Search className={styles.icon} />,
    skills: [
      { name: "Requerimiento → Solución", desc: "Traducción de necesidades a técnica" },
      { name: "Escalabilidad modular", desc: "Diseño orientado a crecimiento" },
      { name: "Enfoque en producto", desc: "Soluciones que generan valor real" },
    ]
  }
];

export default function Skills() {
  return (
    <section id="skills" className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2>Stack tecnológico</h2>
        </div>
        
        <div className={styles.grid}>
          {skillCategories.map((cat, i) => (
            <motion.div 
              key={cat.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={styles.skillCard}
            >
              {cat.icon}
              <h3>{cat.title}</h3>
              <div className={styles.skillList}>
                {cat.skills.map(s => (
                  <div key={s.name} className={styles.skillItem}>
                    <span className={styles.skillName}>{s.name}</span>
                    <span className={styles.skillDesc}>{s.desc}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
