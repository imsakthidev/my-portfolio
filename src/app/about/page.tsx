import styles from '@/app/page.module.css';
import { portfolioData } from '@/data/portfolio';

export default function About() {
  const { about, education } = portfolioData;

  return (
    <section id="about" className="section" style={{ background: 'var(--bg-secondary)' }}>
      <div className="container">
        <h2 className={styles.sectionTitle}>{about.title}</h2>
        <div className={`glass-card ${styles.card}`} style={{ maxWidth: '800px', margin: '0 auto' }}>
          <p style={{ color: 'var(--text-primary)', fontSize: '1.1rem', lineHeight: '1.7', marginBottom: '1rem' }}>
            {about.description1}
          </p>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1rem', lineHeight: '1.7', marginBottom: '1.5rem' }}>
            {about.description2}
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem', paddingTop: '1rem', borderTop: '1px solid rgba(255, 255, 255, 0.1)' }}>
            <div>
              <span style={{ color: 'var(--text-muted)', fontSize: '0.85rem', display: 'block' }}>Location</span>
              <strong style={{ color: 'var(--text-primary)' }}>{about.location}</strong>
            </div>
            <div>
              <span style={{ color: 'var(--text-muted)', fontSize: '0.85rem', display: 'block' }}>Email</span>
              <a href={`mailto:${about.email}`} style={{ color: 'var(--accent-primary)', textDecoration: 'none' }}>{about.email}</a>
            </div>
            <div>
              <span style={{ color: 'var(--text-muted)', fontSize: '0.85rem', display: 'block' }}>Education</span>
              <strong style={{ color: 'var(--text-primary)' }}>{education.degree}</strong>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
