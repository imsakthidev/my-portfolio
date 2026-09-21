import styles from '@/app/page.module.css';
import { portfolioData } from '@/data/portfolio';

export default function Experience() {
  const { experience } = portfolioData;

  return (
    <section id="experience" className="section">
      <div className="container">
        <h2 className={styles.sectionTitle}>Work Experience</h2>
        <div className={styles.timeline}>
          {experience.map((exp) => (
            <div key={exp.id} className={styles.timelineItem}>
              <div className={styles.timelineDot}></div>
              <div className={`glass-card ${styles.card}`}>
                <h3 className={styles.cardTitle}>{exp.role}</h3>
                <div className={styles.cardSubtitle}>{exp.company}</div>
                <div className={styles.cardMeta}>
                  <span>{exp.location}</span>
                  <span>{exp.duration}</span>
                </div>
                <ul style={{ paddingLeft: '1.2rem', color: 'var(--text-secondary)' }}>
                  {exp.responsibilities.map((resp, i) => (
                    <li key={i} style={{ marginBottom: '0.5rem' }}>{resp}</li>
                  ))}
                  {exp.achievement && (
                    <li style={{ marginTop: '1rem', color: 'var(--success)', fontWeight: '600' }}>
                      {exp.achievement}
                    </li>
                  )}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
