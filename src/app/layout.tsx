import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/Navbar';
import styles from '@/app/page.module.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://portfoliosakthi.vercel.app'),
  title: {
    default: 'Sakthivelpandian P. | AI-Focused Software Developer & GIS Operator',
    template: '%s | Sakthivelpandian P.',
  },
  description:
    'Official portfolio of Sakthivelpandian P. - AI-focused software developer and GIS Operator at SSB. Expert in React, Next.js, Gemini API, Node.js, and GIS mapping.',
  keywords: [
    'Sakthivelpandian',
    'Sakthivelpandian P',
    'Sakthivelpandian portfolio',
    'imsakthidev',
    'AI Developer Theni',
    'GIS Operator SSB',
    'Full Stack Developer Tamilnadu',
    'Sakthi Speaks Digital',
    'Smart Moi',
  ],
  authors: [{ name: 'Sakthivelpandian P', url: 'https://portfoliosakthi.vercel.app' }],
  creator: 'Sakthivelpandian P',
  publisher: 'Sakthivelpandian P',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://portfoliosakthi.vercel.app',
    siteName: 'Sakthivelpandian P Portfolio',
    title: 'Sakthivelpandian P. | AI-Focused Software Developer & GIS Operator',
    description:
      'Official portfolio of Sakthivelpandian P. - AI-focused software developer and GIS Operator at SSB.',
    images: [
      {
        url: '/photo.jpg',
        width: 400,
        height: 400,
        alt: 'Sakthivelpandian P',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sakthivelpandian P. | AI-Focused Software Developer',
    description:
      'Official portfolio of Sakthivelpandian P. - AI-focused software developer and GIS Operator at SSB.',
    images: ['/photo.jpg'],
  },
  alternates: {
    canonical: 'https://portfoliosakthi.vercel.app',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Sakthivelpandian P',
  alternateName: 'Sakthi',
  url: 'https://portfoliosakthi.vercel.app',
  image: 'https://portfoliosakthi.vercel.app/photo.jpg',
  jobTitle: 'AI-Focused Software Developer & GIS Operator',
  worksFor: {
    '@type': 'Organization',
    name: 'Sashastra Seema Bal (SSB)',
  },
  sameAs: [
    'https://github.com/imsakthidev',
    'mailto:imsakthidev@gmail.com',
  ],
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Theni',
    addressRegion: 'Tamilnadu',
    addressCountry: 'India',
  },
  knowsAbout: [
    'Software Engineering',
    'Artificial Intelligence',
    'Next.js',
    'React',
    'GIS Mapping',
    'Google Gemini API',
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
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
