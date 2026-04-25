"use client";

import { motion } from "framer-motion";
import styles from "./TechnicalDecisions.module.css";

const decisions = [
  {
    title: "¿Por qué Next.js?",
    reason: "Elegí Next.js para maximizar el SEO y la velocidad de carga mediante Server Side Rendering (SSR) y Static Site Generation (SSG). Esto asegura que el contenido sea indexable desde el primer segundo.",
    snippet: "// Optimization via Dynamic Metadata\nexport async function generateMetadata() { ... }"
  },
  {
    title: "Elección de PostgreSQL",
    reason: "Para sistemas con relaciones complejas (como Oromiel), una base de datos relacional robusta es innegociable. PostgreSQL ofrece integridad referencial y escalabilidad probada.",
    snippet: "CREATE TABLE users (id UUID PRIMARY KEY, ...)"
  },
  {
    title: "Estructura del Backend",
    reason: "Utilizo una arquitectura modular. Para el backend con Node.js, separo controladores, servicios y modelos para facilitar el mantenimiento y las pruebas unitarias.",
    snippet: "controllers/ | services/ | models/"
  },
  {
    title: "Seguridad y Auth",
    reason: "Implemento autenticación basada en JWT o Clerk (según el caso), asegurando que los datos sensibles estén siempre protegidos con roles de usuario configurables.",
    snippet: "middleware.ts -> config: { matcher: '/admin/:path*' }"
  }
];

export default function TechnicalDecisions() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.title}>Pensamiento Técnico</h2>
        <div className={styles.grid}>
          {decisions.map((item, i) => (
            <motion.div 
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={styles.card}
            >
              <h3>{item.title}</h3>
              <p>{item.reason}</p>
              <div className={styles.codeSnippet}>{item.snippet}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
