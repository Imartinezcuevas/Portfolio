import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Image from "next/image";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Iván Martínez</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div className={styles.fullWidthSection}>
          <div className={styles.wTabs}>
            <div className={`${styles.homeTabsContent} ${styles.wTabContent}`}>
              <div className={styles.heroTextWrapper}>
                <h1 className={styles.coloredGradientH1}>
                  Hi, I'm Iván.
                </h1>
                <div className={styles.locationWrapper}>
                  <p className={styles.strongText}>Murcia, Spain</p>
                </div>
                <p className={styles.heroCenteredParagraph}>
                  I'm a naturally curious designer with an appetite for No-Code tools, motion design, and tasty food.
                </p>
              </div>

              <a href='#' className={`${styles.projectCard} ${styles.wInlineBlock}`}>
                <div className={styles.vStack}>
                  <div className={styles.vSpace}></div>
                  <h2>Project 1</h2>
                  <div className={styles.hStack}>
                    <p className={styles.smallCapsSubtitle}>Data Analisys</p>
                    <div className={styles.hSpace8px}></div>
                    <p className={styles.smallCapsSubtitleLight}>•</p>
                    <div className={styles.hSpace8px}></div>
                    <p className={styles.smallCapsSubtitle}>2023</p>
                  </div>
                  <div className={styles.vSpaceSmall}></div>
                  <p> Texto de ejemplo fjkdalsfjkldasjf jfdklasfjñladsj fajsdklfjaldsf</p>
                  <div className={styles.primaryButton}>
                    <div className={styles.buttonText}>Read the Case Study</div>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </main>

      <footer>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel" className={styles.logo} />
        </a>
      </footer>
    </div>
  )
}
