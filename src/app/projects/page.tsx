import styles from '@/app/page.module.css';
import { portfolioData } from '@/data/portfolio';

export default function Projects() {
  const { projects } = portfolioData;

  return (
    <section id="projects" className="section" style={{ background: 'var(--bg-secondary)' }}>
      <div className="container">
        <h2 className={styles.sectionTitle}>Featured Projects</h2>
        <div className={styles.grid}>
          {projects.map((project) => (
            <div key={project.id} className={`glass-card ${styles.card}`}>
              <h3 className={styles.cardTitle} style={{color: 'var(--accent-primary)'}}>{project.title}</h3>
              <p style={{ color: 'var(--text-secondary)', marginBottom: '1rem' }}>
                {project.description}
              </p>
              <div className={styles.tagList}>
                {project.tags.map((tag, i) => (
                  <span key={i} className={styles.tag}>{tag}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
