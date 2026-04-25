"use client";

import { motion } from "framer-motion";
import styles from "./HowIWork.module.css";

const steps = [
  { title: "Desarrollo End-to-End", desc: "Desde la concepción del modelo de datos hasta la interfaz de usuario final." },
  { title: "Integración Fullstack", desc: "Sincronización perfecta entre capas para aplicaciones fluidas." },
  { title: "Enfoque en UX & ROI", desc: "Diseños que no solo se ven bien, sino que cumplen objetivos de negocio." },
  { title: "API Management", desc: "Consumo y creación de APIs robustas y bien documentadas." },
  { title: "Deploy & Scalability", desc: "Configuración de entornos productivos con Docker y CI/CD." },
];

export default function HowIWork() {
  return (
    <section className={styles.section}>
      <h2 className={styles.title}>Metodología Profesional</h2>
      <div className={styles.stepGrid}>
        {steps.map((step, i) => (
          <motion.div 
            key={step.title}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className={styles.step}
          >
            <span className={styles.stepNumber}>0{i + 1}</span>
            <h3>{step.title}</h3>
            <p>{step.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
