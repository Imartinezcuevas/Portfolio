import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Image from "next/image";
import arrow from '../images/arrow.svg'
import proyect from '../images/test.png'
import position from '../images/position.svg'

export default function Home() {
  return (
    <div>
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
                  <Image
                    src={position}
                    alt="Picture of the author"
                    className={styles.locationIcon}
                  />
                  <p className={styles.strongText}>Murcia, Spain</p>
                </div>
                <p className={styles.heroCenteredParagraph}>
                  I'm a naturally curious designer with an appetite for No-Code tools, motion design, and tasty food.
                </p>
              </div>

              <a href='#' className={`${styles.projectCard} ${styles.wInlineBlock}`}>
                <div className={styles.vStack}>
                  <div className={styles.vSpace}></div>
                  <h2>Allergen Detection</h2>
                  <div className={styles.hStack}>
                    <p className={styles.smallCapsSubtitle}>Data Analisys</p>
                    <div className={styles.hSpace8px}></div>
                    <p className={styles.smallCapsSubtitleLight}>•</p>
                    <div className={styles.hSpace8px}></div>
                    <p className={styles.smallCapsSubtitle}>2023</p>
                  </div>
                  <div className={styles.vSpaceSmall}></div>
                  <p> Proyecto Deteccion de alergenos con espectrometria NIR</p>
                  <div className={styles.primaryButton}>
                    <div className={styles.buttonText}>Read the Case Study</div>
                    <Image
                      src={arrow}
                      alt="Picture of the author"
                      className={styles.buttonIcon}
                    />
                  </div>
                </div>
                <Image
                    src={proyect}
                    alt="Picture of the author"
                    className={styles.projectPreviewImage}
                  />
              </a>

              <a href='#' className={`${styles.projectCard} ${styles.wInlineBlock}`}>
                <div className={styles.vStack}>
                  <div className={styles.vSpace}></div>
                  <h2>Allergen Detection</h2>
                  <div className={styles.hStack}>
                    <p className={styles.smallCapsSubtitle}>Data Analisys</p>
                    <div className={styles.hSpace8px}></div>
                    <p className={styles.smallCapsSubtitleLight}>•</p>
                    <div className={styles.hSpace8px}></div>
                    <p className={styles.smallCapsSubtitle}>2023</p>
                  </div>
                  <div className={styles.vSpaceSmall}></div>
                  <p> Proyecto Deteccion de alergenos con espectrometria NIR</p>
                  <div className={styles.primaryButton}>
                    <div className={styles.buttonText}>Read the Case Study</div>
                    <Image
                      src={arrow}
                      alt="Picture of the author"
                      className={styles.buttonIcon}
                    />
                  </div>
                </div>
                <Image
                    src={proyect}
                    alt="Picture of the author"
                    className={styles.projectPreviewImage}
                  />
              </a>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
