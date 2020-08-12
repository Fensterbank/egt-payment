import Head from 'next/head';

import styles from '../styles/Home.module.css';
import { Footer } from './footer';
import { HeroSection } from './herosection';

export default function Home() {
  return (
    <div className={`${styles.container} w-full h-full pattern-grid-lg`}>
      <Head>
        <title>Mitgliedsbeitrag - Elysium Gaming Tübingen e.V.</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="w-full">
        <HeroSection />
      </main>

      <Footer />
    </div>
  );
}
