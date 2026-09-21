import Image from 'next/image';
import styles from './page.module.css';
import About from './about/page';
import Experience from './experience/page';
import Projects from './projects/page';
import Skills from './skills/page';

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroBackground}>
          <div className={styles.heroGlow}></div>
        </div>
        <div className={`container ${styles.heroContent}`}>
          <div className="animate-fade-in-up">
            <Image 
              src="/photo.jpg" 
              alt="Sakthivelpandian P" 
              width={160} 
              height={160} 
              className={styles.heroImage}
              priority
            />
          </div>
          <span className={`${styles.eyebrow} animate-fade-in-up`}>👋 Available for Hire</span>
          <h1 className={`${styles.heroTitle} animate-fade-in-up delay-100`}>
            Building <br/>
            <span className="gradient-text">Intelligent Apps</span> <br/>
            & Digital Experiences
          </h1>
          <p className={`${styles.heroSubtitle} animate-fade-in-up delay-200`}>
            I'm Sakthivelpandian, an AI-focused software developer and GIS Operator. I specialize in building AI-powered full-stack applications and turning complex problems into elegant solutions.
          </p>
          <div className={`${styles.heroActions} animate-fade-in-up delay-300`}>
            <a href="/projects" className="btn btn-primary">View My Work</a>
            <a href="https://github.com/imsakthidev" target="_blank" rel="noopener noreferrer" className="btn btn-primary">GitHub Profile</a>
          </div>
        </div>
      </section>

      {/* Render all dynamic pages on the home page for scrolling */}
      <About />
      <Experience />
      <Projects />
      <Skills />
    </>
  );
}
