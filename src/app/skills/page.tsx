import styles from '@/app/page.module.css';
import { portfolioData } from '@/data/portfolio';

export default function Skills() {
  const { skills, education } = portfolioData;

  return (
    <section id="skills" className="section">
      <div className="container">
        <h2 className={styles.sectionTitle}>Skills</h2>
        
        <div className={styles.skillsMarqueeWrapper} style={{ marginBottom: '4rem' }}>
          <div className={styles.skillsMarquee}>
            {skills.map((skillGroup, i) => (
              <div key={`g1-${i}`} className={styles.skillCategory}>
                <h3 className={styles.skillCategoryTitle}>{skillGroup.category}</h3>
                <div className={styles.tagList}>
                  {skillGroup.items.map((skill, j) => (
                    <span key={`s1-${j}`} className={styles.tag}>{skill}</span>
                  ))}
                </div>
              </div>
            ))}
            {/* Duplicate for infinite loop effect */}
            {skills.map((skillGroup, i) => (
              <div key={`g2-${i}`} className={styles.skillCategory}>
                <h3 className={styles.skillCategoryTitle}>{skillGroup.category}</h3>
                <div className={styles.tagList}>
                  {skillGroup.items.map((skill, j) => (
                    <span key={`s2-${j}`} className={styles.tag}>{skill}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* Education Section */}
        <h2 className={styles.sectionTitle} style={{ marginTop: '2rem' }}>Education</h2>
        <div className={`glass-card ${styles.card}`} style={{ maxWidth: '800px', margin: '0 auto' }}>
          <h3 className={styles.cardTitle}>{education.degree}</h3>
          <div className={styles.cardSubtitle}>{education.institution}</div>
          <div className={styles.cardMeta}>
            <span>{education.location}</span>
            <span>{education.duration}</span>
          </div>
          {education.description && (
            <p style={{ color: 'var(--text-secondary)', marginTop: '1rem' }}>
              {education.description}
            </p>
          )}
        </div>

      </div>
    </section>
  );
}
