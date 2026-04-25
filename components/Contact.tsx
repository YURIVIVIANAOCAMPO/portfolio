"use client";

import styles from "./Contact.module.css";
import { Mail, Linkedin, Github } from "lucide-react";
import { clsx } from "clsx";

export default function Contact() {
  return (
    <footer id="contacto" className={styles.section}>
      <div className={styles.container}>
        <div className={styles.labelBI}>FICHA DE CONTACTO</div>
        <h2 className={styles.title}>Construyamos el próximo hito.</h2>
        <p className={styles.subtitle}>
          Especialista en convertir lógica de negocio compleja en productos digitales escalables. Disponible para proyectos estratégicos.
        </p>
        
        <div className={styles.contactGrid}>
           <div className={styles.contactInfoCard}>
              <h3>Ubicación & Disponibilidad</h3>
              <p>Remoto / Global (Latam Timezone)</p>
              <p>Disponibilidad para proyectos Fullstack</p>
           </div>
           
           <div className={clsx(styles.contactInfoCard, styles.centeredCard)}>
              <h3>Canales Directos</h3>
              <div className={styles.social}>
                <a href="https://www.linkedin.com/in/viviana-ocampo-baracaldo-a1581785" target="_blank" className={styles.socialLink}>
                  <Linkedin size={20} />
                  <span>LinkedIn</span>
                </a>
                <a href="https://github.com/YURIVIVIANAOCAMPO" target="_blank" className={styles.socialLink}>
                  <Github size={20} />
                  <span>GitHub</span>
                </a>
                <a href="https://wa.me/qr/CP2RVC7ELC3SE1" target="_blank" className={styles.socialLink}>
                   <div className={styles.waIcon}>
                      <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.72.937 3.658 1.43 5.63 1.43h.004c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                   </div>
                  <span>WhatsApp</span>
                </a>
              </div>
              <div className={styles.emailBox}>
                <Mail size={18} color="var(--accent)" />
                <span>ingyury260@gmail.com</span>
              </div>
              <p style={{ marginTop: '1.2rem', fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                +57 317 408 9448
              </p>
           </div>
        </div>
      </div>
      
      <div className={styles.footer} style={{ textAlign: 'center' }}>
        <p>© 2026 Ingeniera Viviana Ocampo. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
}
