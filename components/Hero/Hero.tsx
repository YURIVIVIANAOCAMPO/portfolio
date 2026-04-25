"use client";

import { motion } from "framer-motion";
import styles from "./Hero.module.css";
import { MoveRight, Download, Server, Database, Code, Globe } from "lucide-react";

const stack = [
  { name: "React", icon: <Code size={16} /> },
  { name: "Next.js", icon: <Globe size={16} /> },
  { name: "Node.js", icon: <Server size={16} /> },
  { name: "PostgreSQL", icon: <Database size={16} /> },
  { name: "Docker", icon: <Server size={16} /> },
];

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.glow} />
      
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className={styles.badge}
      >
        Desarrolladora Fullstack
      </motion.div>

      <motion.h1 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className={styles.title}
      >
        Viviana <br />
        <span className={styles.accentText}>Fullstack Developer</span>
      </motion.h1>

      <motion.p 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className={styles.subtitle}
      >
        Construyo productos funcionales que resuelven problemas reales de negocio. Listos para producción y optimizados para el crecimiento.
      </motion.p>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className={styles.stack}
      >
        {stack.map((item, i) => (
          <div key={i} className={styles.stackItem}>
            {item.icon}
            {item.name}
          </div>
        ))}
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className={styles.actions}
      >
        <button className={styles.primaryBtn} onClick={() => document.getElementById('projects')?.scrollIntoView()}>
          Ver proyectos <MoveRight size={18} style={{ marginLeft: '8px' }} />
        </button>
        <button className={styles.secondaryBtn}>
          Descargar CV <Download size={18} style={{ marginLeft: '8px' }} />
        </button>
      </motion.div>
    </section>
  );
}
