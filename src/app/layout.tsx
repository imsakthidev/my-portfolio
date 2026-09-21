import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Sakthivelpandian P. | AI-Focused Software Developer',
  description: 'Portfolio of Sakthivelpandian P. - AI-focused software developer, GIS Operator at SSB. Experience in React, Next.js, Node.js, Firebase, and AI-powered applications.',
};

import Navbar from '@/components/Navbar';
import styles from '@/app/page.module.css';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main style={{ minHeight: '100vh', paddingTop: '80px' }}>
          {children}
        </main>
        {/* Shared Footer */}
        <footer className={styles.footer}>
          <div className="container">
            <p>© {new Date().getFullYear()} Sakthivelpandian P. All rights reserved.</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
