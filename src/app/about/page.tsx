import styles from '@/app/page.module.css';
import { portfolioData } from '@/data/portfolio';

export default function About() {
  const { about } = portfolioData;

  return (
    <section id="about" className="section" style={{ background: 'var(--bg-secondary)' }}>
      <div className="container">
        <h2 className={styles.sectionTitle}>{about.title}</h2>
        <div className={`glass-card ${styles.card}`} style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
          <p style={{ color: 'var(--text-primary)', fontSize: '1.1rem', lineHeight: '1.7', marginBottom: '1rem' }}>
            {about.description1}
          </p>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1rem', lineHeight: '1.7', marginBottom: '1.5rem' }}>
            {about.description2}
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem', paddingTop: '1rem', borderTop: '1px solid rgba(255, 255, 255, 0.1)', justifyContent: 'center' }}>
            <div style={{ textAlign: 'center' }}>
              <span style={{ color: 'var(--text-muted)', fontSize: '0.85rem', display: 'block', marginBottom: '0.25rem' }}>Email</span>
              <a href={`mailto:${about.email}`} style={{ color: 'var(--accent-primary)', textDecoration: 'none', fontWeight: '600' }}>{about.email}</a>
            </div>
            <div style={{ textAlign: 'center' }}>
              <span style={{ color: 'var(--text-muted)', fontSize: '0.85rem', display: 'block', marginBottom: '0.25rem' }}>Location</span>
              <strong style={{ color: 'var(--text-primary)' }}>{about.location}</strong>
            </div>
            <div style={{ textAlign: 'center' }}>
              <span style={{ color: 'var(--text-muted)', fontSize: '0.85rem', display: 'block', marginBottom: '0.25rem' }}>Phone</span>
              <a href={`tel:${about.phone}`} style={{ color: 'var(--accent-primary)', textDecoration: 'none', fontWeight: '600' }}>{about.phone}</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
