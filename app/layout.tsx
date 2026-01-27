import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Bhrayane Freudel YENOU - Développeur Fullstack | Web & Mobile',
  description: 'Portfolio professionnel de Bhrayane Freudel YENOU, développeur fullstack spécialisé dans le développement web, mobile et la maintenance informatique. Expertise en React, Next.js, Vue.js, Laravel, Flutter et plus.',
  keywords: 'développeur fullstack, développeur web, développeur mobile, Bénin, React, Next.js, Vue.js, Laravel, Flutter, maintenance informatique',
  authors: [{ name: 'Bhrayane Freudel YENOU' }],
  openGraph: {
    title: 'Bhrayane Freudel YENOU - Développeur Fullstack',
    description: 'Développeur fullstack spécialisé en web et mobile',
    type: 'website',
    images: [
      {
        url: 'https://bolt.new/static/og_default.png',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Bhrayane Freudel YENOU - Développeur Fullstack',
    description: 'Développeur fullstack spécialisé en web et mobile',
    images: [
      {
        url: 'https://bolt.new/static/og_default.png',
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className="scroll-smooth">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
