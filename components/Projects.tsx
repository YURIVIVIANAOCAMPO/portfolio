"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import styles from "./Projects.module.css";
import { CheckCircle, ExternalLink, Key, User } from "lucide-react";

const projects = [
  {
    id: "store-microservices",
    title: "Store microservices front",
    type: "E-commerce architecture",
    desc: "Frontend moderno desarrollado en Vue para la gestión de microservicios de una tienda, enfocado en escalabilidad y rendimiento.",
    context: "Sincronización de stock y gestión de productos en tiempo real.",
    solution: "Arquitectura desacoplada comunicándose con servicios Java/Spring Boot.",
    stack: ["Vue.js", "Microservicios", "REST API", "State management"],
    impact: "Flujo de datos optimizado entre servicios independientes.",
    image: "/storeMaster.png",
    links: {
      demo: "https://store-microservices-front.vercel.app/",
    }
  },
  {
    id: "products-service",
    title: "Microservices ecosystem",
    type: "Backend architecture",
    desc: "Arquitectura distribuida compuesta por múltiples microservicios para la gestión de productos e inventarios.",
    context: "Sincronización y persistencia de datos a gran escala.",
    solution: "Ecosistema con Spring Boot y documentación Swagger para cada servicio.",
    stack: ["Java", "Spring Boot", "Docker", "PostgreSQL"],
    impact: "Infraestructura escalable y documentada para consumo frontend.",
    image: "/products-service.png",
    links: {
      demo: "https://products-service-u496.onrender.com/swagger-ui/index.html",
      extra: "https://inventory-service-vqa6.onrender.com/swagger-ui/index.html#/"
    }
  },
  {
    id: "spybee",
    title: "Spybee project manager",
    type: "SaaS enterprise",
    desc: "Plataforma avanzada de gestión para equipos, con dashboards interactivos y mapas integrados.",
    context: "Optimización de flujos de trabajo internos.",
    solution: "Dashboard con glassmorphism radical, sistema de roles y filtros dinámicos.",
    stack: ["TypeScript", "Next.js", "Clerk auth", "PostgreSQL"],
    impact: "Visibilidad 360 del progreso del equipo.",
    image: "/spybee.png",
    links: {
      demo: "https://spybee-six.vercel.app",
    }
  },
  {
    id: "alumbrado",
    title: "Alumbrado público",
    type: "Government tech",
    desc: "Sistema de gestión para el mantenimiento y control del alumbrado público.",
    context: "Digitalización de reportes y geolocalización de activos.",
    solution: "Fullstack con Node.js y React, integración con mapas para ubicación de luminarias.",
    stack: ["TypeScript", "Node.js", "Leaflet", "React"],
    impact: "Optimización de tiempos de respuesta en mantenimiento ciudadano.",
    image: "/oromiel.png",
    links: {
      demo: "https://github.com/YURIVIVIANAOCAMPO/alumbrado_publico_frontend",
    }
  }
];

export default function Projects() {
  return (
    <section id="projects" className={styles.section}>
      <div className={styles.header}>
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Casos de éxito
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Soluciones reales desplegadas y funcionales orientadas al retorno de inversión.
        </motion.p>
      </div>

      <div className={styles.projectsGrid}>
        {projects.map((project, index) => (
          <motion.div 
            key={project.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
            className={styles.mainProject}
          >
            <div className={styles.projectInfo}>
              <h3>{project.type}</h3>
              <h4>{project.title}</h4>
              <p className={styles.projectDescription}>{project.desc}</p>

              <div className={styles.caseStudyGrid}>
                <div className={styles.caseStudyItem}>
                  <h5>Contexto</h5>
                  <p>{project.context}</p>
                </div>
                <div className={styles.caseStudyItem}>
                  <h5>Solución</h5>
                  <p>{project.solution}</p>
                </div>
              </div>

              <div className={styles.stack}>
                {project.stack.map(tag => (
                  <span key={tag} className={styles.tag}>{tag}</span>
                ))}
              </div>

              <div className={styles.impact}>
                <p>
                  <CheckCircle size={16} color="var(--accent)" style={{ display: 'inline', marginRight: '8px', verticalAlign: 'middle' }} />
                  Impacto: {project.impact}
                </p>
              </div>



              <div className={styles.actionLinks}>
                <a href={project.links.demo} target="_blank" className={styles.primaryLink}>
                  {project.id === "products-service" ? "Swagger Products" : "Visitar Demo"} <ExternalLink size={16} />
                </a>
                {project.links.extra && (
                  <a href={project.links.extra} target="_blank" className={styles.primaryLink}>
                    Swagger Inventory <ExternalLink size={16} />
                  </a>
                )}
              </div>
            </div>

            <div className={styles.imageWrapper}>
              <div className={styles.imageTilt}>
                <Image 
                  src={project.image} 
                  alt={project.title} 
                  width={800} 
                  height={500} 
                  layout="responsive"
                  className={styles.projectImage}
                />
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
