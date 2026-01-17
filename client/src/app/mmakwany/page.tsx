'use client';

import Link from 'next/link';
import styles from './page.module.css';

export default function MmakwanyHome() {
  return (
    <div className={styles.wrapper}>
      <header className={styles.hero}>
        <div className="container">
          <div className={styles.heroContent}>
            <span className={styles.eyebrow}>Welcome to your</span>
            <h1 className={styles.title}>Private Sanctuary</h1>
            <p className={styles.subtitle}>
              Escape the chaos. Immerse yourself in serenity. 
              The entire home, exclusively yours.
            </p>
            <Link href="/mmakwany/book" className="btn btn-mmakwany">
              Reserve Your Stay
            </Link>
          </div>
        </div>
      </header>

      <section className={styles.features}>
        <div className="container">
          <div className={styles.featureGrid}>
            <div className={styles.feature}>
              <h3>Complete Privacy</h3>
              <p>No other guests. Just you and your loved ones in a secure, private compound.</p>
            </div>
            <div className={styles.feature}>
              <h3>Modern Comfort</h3>
              <p>High-speed WiFi, smart entertainment, and a fully equipped chef's kitchen.</p>
            </div>
            <div className={styles.feature}>
              <h3>Nature Inspired</h3>
              <p>Surrounded by lush gardens and calming landscapes for ultimate relaxation.</p>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.showcase}>
        <div className="container section-py">
          <div className={styles.split}>
            <div className={styles.text}>
              <h2>Unmatched Elegance</h2>
              <p>Nestled in a serene landscape, MMAKWANY offers a modern architectural masterpiece designed for discerning guests seeking tranquility and luxury.</p>
              <ul className={styles.featuresList}>
                <li>• 5 Bedrooms (En-suite)</li>
                <li>• Private Swimming Pool</li>
                <li>• Fully Equipped Chef's Kitchen</li>
                <li>• High-speed Starlink Internet</li>
              </ul>
            </div>
            <div className={styles.imageBox}>
               <img src="/images/rooms/mmakwany-villa.png" alt="MMAKWANY Villa" className={styles.villaImg} />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
