"use client";

import DashboardShell from "@/components/DashboardShell/DashboardShell";
import {
  HeroWidget,
  ProjectsWidget,
  StatsWidget,
  SkillsWidget,
  ContactWidget,
  containerVariants
} from "@/components/Widgets/Widgets";
import styles from "@/components/DashboardShell/DashboardShell.module.css";
import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";
import { clsx } from "clsx";

import Projects from "@/components/Projects/Projects";
import Skills from "@/components/Skills/Skills";
import Contact from "@/components/Contact/Contact";
import RadarChart from "@/components/RadarChart/RadarChart";

export default function Home() {
  return (
    <DashboardShell>
      <div className={styles.scrollContainer}>
        <motion.div
          className={styles.grid}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Row 1: Profile & Core Stats */}
          <div id="hero" className={styles.span8}>
            <HeroWidget className={styles.fullHeight} />
          </div>
          <div id="github-stats" className={styles.span4}>
            <StatsWidget
              title="GitHub activity"
              value="15 Repos"
              subText="19 followers · 15 following"
              chart
              data={[12, 35, 24, 45, 69, 50, 45]}
              labels={["18 Abr", "19 Abr", "20 Abr", "21 Abr", "22 Abr", "23 Abr", "24 Abr"]}
            />
            <div style={{ marginTop: '1.5rem' }}>
              <StatsWidget
                title="Impacto real"
                value="100%"
                subText="69 commits este mes"
                chart
                data={[10, 25, 34, 55, 69, 45, 60]}
                labels={["Sem 1", "Sem 2", "Sem 3", "Sem 4", "Hoy", "P1", "P2"]}
              />
            </div>
          </div>

          {/* Row 2: Skills & Experience BI */}
          <div id="skills-summary" className={styles.span7}>
            <SkillsWidget />
          </div>

          <div id="experience" className={styles.span5}>
            <div className={clsx(styles.widget, styles.fullHeight)}>
              <div className={styles.labelBI}>Fortalezas diferenciales</div>
              <RadarChart 
                data={[
                  { axis: "Frontend", value: 95 },
                  { axis: "Backend", value: 85 },
                  { axis: "Datos", value: 90 },
                  { axis: "Marketing", value: 88 },
                  { axis: "Estrategia", value: 92 }
                ]} 
              />
              <ul style={{ listStyle: 'none', padding: 0, marginTop: '1rem' }}>
                {[
                  "Combinación frontend + lógica + datos",
                  "Pensamiento arquitectónico (API design)",
                  "Experiencia en proyectos complejos",
                  "Adaptabilidad tecnológica rápida"
                ].map(s => (
                  <li key={s} style={{ fontSize: '0.85rem', color: '#fff', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <CheckCircle size={14} color="var(--accent)" /> {s}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Row 3: Key Projects & Vision */}
          <div id="projects-summary" className={styles.span8}>
            <ProjectsWidget />
          </div>
          <div id="vision" className={styles.span4}>
            <div className={clsx(styles.widget, styles.fullHeight)}>
              <div className={styles.labelBI}>Visión de producto</div>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginTop: '1rem', lineHeight: '1.7' }}>
                "No solo consumo APIs, también diseño cómo deben estructurarse para escalar. Mi enfoque está en el retorno de inversión y la eficiencia técnica."
              </p>
              <div style={{ marginTop: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
                {[
                  { label: "Enfoque", val: "API-first design" },
                  { label: "Prioridad", val: "Escalabilidad modular" },
                  { label: "Criterio", val: "Decisiones basadas en datos" }
                ].map(item => (
                  <div key={item.label} style={{ borderLeft: '2px solid var(--accent)', paddingLeft: '12px' }}>
                    <div style={{ fontSize: '0.65rem', color: 'var(--accent)', textTransform: 'uppercase', letterSpacing: '0.1rem' }}>{item.label}</div>
                    <div style={{ fontSize: '0.85rem', color: '#fff', fontWeight: 500 }}>{item.val}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Detailed Sections */}
        <div id="projects">
          <Projects />
        </div>
        <div id="skills">
          <Skills />
        </div>
        <div id="contact">
          <Contact />
        </div>
      </div>
    </DashboardShell>
  );
}
