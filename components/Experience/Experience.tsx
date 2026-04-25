"use client";

import { motion } from "framer-motion";
import styles from "./Experience.module.css";

const experiences = [
  {
    period: "2023 - Presente",
    role: "Fullstack Developer",
    company: "Oromiel Multiparque",
    desc: "Lideré el desarrollo de la intranet administrativa y la landing page captadora, integrando PostgreSQL con Next.js y gestionando el despliegue con Docker."
  },
  {
    period: "2022 - 2023",
    role: "Backend Specialist",
    company: "Assisprex",
    desc: "Desarrollo de soluciones internas para la gestión de procesos, optimizando APIs y bases de datos relacionales."
  },
  {
    period: "2021 - 2022",
    role: "Web Developer",
    company: "LG",
    desc: "Mantenimiento y creación de módulos para aplicaciones web corporativas, asegurando rendimiento y compatibilidad multi-navegador."
  }
];

export default function Experience() {
  return (
    <section id="experiencia" className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.title}>Trayectoria Profesional</h2>
        <div className={styles.timeline}>
          {experiences.map((exp, i) => (
            <motion.div 
              key={exp.company}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={styles.expItem}
            >
              <div className={styles.period}>{exp.period}</div>
              <div className={styles.content}>
                <h3>{exp.role}</h3>
                <span className={styles.company}>{exp.company}</span>
                <p>{exp.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
