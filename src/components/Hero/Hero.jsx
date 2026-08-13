import React from 'react';
import styles from './Hero.module.css';
import { motion } from 'framer-motion';
import Magnetic from '../Magnetic';
import logoMark from '../../assets/logo-mark.png';

export default function Hero() {




  // --- Staggered Text Animation ---
  const headlineWords = [
    { text: "we", line: 1 }, { text: "are", line: 1 }, { text: "agos.", line: 1, bold: true }, { text: "we", line: 1 }, { text: "build", line: 1, break: true },
    { text: "smooth", line: 2 }, { text: "operations,", line: 2, break: true },
    { text: "smart", line: 3 }, { text: "automations", line: 3 }, { text: "&", line: 3, break: true },
    { text: "flowing", line: 4, italic: true, break: true },
    { text: "systems", line: 5 }
  ];

  const wordAnimation = {
    hidden: { opacity: 0, y: 30 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.1 + (i * 0.04), // staggered delay
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1]
      }
    })
  };

  return (
    <section id="top" className={styles.hero}>
          
          {/* Background Soft 3D Ribbon Glow Layer - with Mouse Parallax */}
          <motion.div
            animate={{ x: [-15, 15, -15], y: [-10, 10, -10] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className={styles.ambientRibbons} aria-hidden="true">
            <svg viewBox="0 0 1200 600" fill="none" className={styles.ribbonSvg}>
              <path
                d="M-100,200 C300,100 500,400 900,150 C1100,20 1300,300 1400,200"
                stroke="url(#ribbonGrad1)"
                strokeWidth="32"
                strokeLinecap="round"
                style={{ filter: 'blur(35px)', opacity: 0.45 }}
              />
              <path
                d="M-50,350 C400,450 600,150 1000,300"
                stroke="url(#ribbonGrad2)"
                strokeWidth="24"
                strokeLinecap="round"
                style={{ filter: 'blur(28px)', opacity: 0.35 }}
              />
              <defs>
                <linearGradient id="ribbonGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#1f56ea" stopOpacity="0.8" />
                  <stop offset="50%" stopColor="#9fbdff" stopOpacity="0.5" />
                  <stop offset="100%" stopColor="#143fc0" stopOpacity="0.2" />
                </linearGradient>
                <linearGradient id="ribbonGrad2" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#9fbdff" stopOpacity="0.6" />
                  <stop offset="100%" stopColor="#1f56ea" stopOpacity="0.3" />
                </linearGradient>
              </defs>
            </svg>
          </motion.div>

          {/* Soft drifting fog waves -- three layers at different opacity,
              speed, and direction so they read as atmospheric depth rather
              than a single moving line. Faded out at the top via a mask on
              .waves (see Hero.module.css) so they dissolve into the hero
              background instead of cutting off hard. */}
          <div className={styles.waves} aria-hidden="true">
            <svg className={styles.wave1} viewBox="0 0 2400 400" preserveAspectRatio="none" fill="none">
              <path
                d="M0,220 C100,180 200,180 300,220 C400,260 500,260 600,220 C700,180 800,180 900,220 C1000,260 1100,260 1200,220 C1300,180 1400,180 1500,220 C1600,260 1700,260 1800,220 C1900,180 2000,180 2100,220 C2200,260 2300,260 2400,220 L2400,400 L0,400 Z"
                fill="#e4ecff"
              />
            </svg>
            <svg className={styles.wave2} viewBox="0 0 2400 300" preserveAspectRatio="none" fill="none">
              <path
                d="M0,160 C100,120 200,120 300,160 C400,200 500,200 600,160 C700,120 800,120 900,160 C1000,200 1100,200 1200,160 C1300,120 1400,120 1500,160 C1600,200 1700,200 1800,160 C1900,120 2000,120 2100,160 C2200,200 2300,200 2400,160"
                stroke="#9fbdff"
                strokeWidth="2.5"
              />
            </svg>
            <svg className={styles.wave3} viewBox="0 0 2400 260" preserveAspectRatio="none" fill="none">
              <path
                d="M0,140 C100,100 200,100 300,140 C400,180 500,180 600,140 C700,100 800,100 900,140 C1000,180 1100,180 1200,140 C1300,100 1400,100 1500,140 C1600,180 1700,180 1800,140 C1900,100 2000,100 2100,140 C2200,180 2300,180 2400,140"
                stroke="#1f56ea"
                strokeWidth="2"
              />
            </svg>
          </div>

          {/* 5 Floating 3D Glass Tiles (with Mouse Parallax) */}
          <div className={styles.tilesContainer}>
            <div className={styles.tileWrapper}>

              {/* Tile 1: Top-Left Agos Logo Glass Card */}
              <motion.div
                initial={{ opacity: 0, y: 30, rotate: -12 }}
                animate={{ opacity: 1, y: [0, -12, 0], rotate: [-12, -9, -12] }}
                transition={{
                  opacity: { duration: 0.8 },
                  y: { duration: 6, repeat: Infinity, ease: 'easeInOut' },
                  rotate: { duration: 6, repeat: Infinity, ease: 'easeInOut' },
                }}
                
                className={`${styles.tile} ${styles.tile1}`}
              >
                <div className={styles.tileInner}>
                  <img src={logoMark} className={styles.tileLogo} alt="Agos Mark" />
                </div>
              </motion.div>

              {/* Tile 2: Top-Right Network Node Share Glass Card */}
              <motion.div
                initial={{ opacity: 0, y: -20, rotate: 10 }}
                animate={{ opacity: 1, y: [0, 12, 0], rotate: [10, 14, 10] }}
                transition={{
                  opacity: { duration: 0.8, delay: 0.2 },
                  y: { duration: 7, repeat: Infinity, ease: 'easeInOut', delay: 0.5 },
                  rotate: { duration: 7, repeat: Infinity, ease: 'easeInOut', delay: 0.5 },
                }}
                className={`${styles.tile} ${styles.tile2}`}
              >
                <div className={styles.tileInner}>
                  <svg className={styles.systemIconLarge} viewBox="0 0 24 24" fill="none" stroke="#1f56ea" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="18" cy="5" r="3" />
                    <circle cx="6" cy="12" r="3" />
                    <circle cx="18" cy="19" r="3" />
                    <line x1="8.59" y1="13.51" x2="15.42" y2="17.49" />
                    <line x1="15.41" y1="6.51" x2="8.59" y2="10.49" />
                  </svg>
                </div>
              </motion.div>

              {/* Tile 3: Mid-Left Database Stack Floating 3D Icon */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8, rotate: -6 }}
                animate={{ opacity: 1, scale: 1, y: [0, -10, 0] }}
                transition={{
                  opacity: { duration: 0.8, delay: 0.4 },
                  y: { duration: 5.5, repeat: Infinity, ease: 'easeInOut', delay: 1 },
                }}
                className={`${styles.tile} ${styles.tile3}`}
              >
                <div className={styles.tileInner}>
                  <svg className={styles.systemIcon} viewBox="0 0 24 24" fill="none" stroke="#4779ff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <ellipse cx="12" cy="5" rx="9" ry="3" />
                    <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" />
                    <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
                  </svg>
                </div>
              </motion.div>

              {/* Tile 4: Bottom-Left Cog System Glass Card -- third tile kept
                  looping (measured ~3-4fps cost vs. settled, acceptable). */}
              <motion.div
                initial={{ opacity: 0, y: 30, rotate: -8 }}
                animate={{ opacity: 1, y: [0, 14, 0], rotate: [-8, -4, -8] }}
                transition={{
                  opacity: { duration: 0.8, delay: 0.3 },
                  y: { duration: 6.5, repeat: Infinity, ease: 'easeInOut', delay: 0.2 },
                  rotate: { duration: 6.5, repeat: Infinity, ease: 'easeInOut', delay: 0.2 },
                }}
                className={`${styles.tile} ${styles.tile4}`}
              >
                <div className={styles.tileInner}>
                  <svg className={styles.systemIconLarge} viewBox="0 0 24 24" fill="none" stroke="#1f56ea" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
                  </svg>
                </div>
              </motion.div>

              {/* Tile 5: Bottom-Right Large Monitor Glass Card */}
              <motion.div
                initial={{ opacity: 0, y: 40, rotate: 8 }}
                animate={{ opacity: 1, y: [0, -14, 0], rotate: [8, 11, 8] }}
                transition={{
                  opacity: { duration: 0.8, delay: 0.5 },
                  y: { duration: 7.5, repeat: Infinity, ease: 'easeInOut', delay: 0.7 },
                  rotate: { duration: 7.5, repeat: Infinity, ease: 'easeInOut', delay: 0.7 },
                }}
                
                className={`${styles.tile} ${styles.tile5}`}
              >
                <div className={styles.tileInner}>
                  <svg className={styles.desktopMonitorIcon} viewBox="0 0 24 24" fill="none" stroke="#9fbdff" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="3" width="20" height="14" rx="3" ry="3" />
                    <line x1="8" y1="21" x2="16" y2="21" />
                    <line x1="12" y1="17" x2="12" y2="21" />
                  </svg>
                </div>
              </motion.div>

            </div>
          </div>

          {/* Main Hero Card Container */}
          <div className={`container ${styles.centeredLayout}`}>
            <motion.div 
              className={styles.textContent}
              whileHover={{ rotateX: 2, rotateY: -2, z: 20 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <h1 className={styles.headline}>
                <div className={styles.headlineBase}>
                  {headlineWords.map((word, i) => (
                    <React.Fragment key={i}>
                      <motion.span
                        custom={i}
                        initial="hidden"
                        animate="visible"
                        variants={wordAnimation}
                        style={{ display: 'inline-block', marginRight: '0.25em' }}
                        className={
                          word.bold ? styles.boldSans :
                          word.italic ? `${styles.boldSans} gradient-text` : ''
                        }
                      >
                        {word.text}
                      </motion.span>
                      {word.break && <br />}
                    </React.Fragment>
                  ))}
                  
                  <motion.span
                    custom={headlineWords.length}
                    initial="hidden"
                    animate="visible"
                    variants={wordAnimation}
                    style={{ display: 'inline-block' }}
                  >
                    <Magnetic>
                      <a href="#contact" className={`${styles.inlineCta} cta-blob`}>
                        let's talk
                        <span className="cta-blob-inner">
                          <span className="cta-blob-blobs">
                            <span className="cta-blob-blob" />
                            <span className="cta-blob-blob" />
                            <span className="cta-blob-blob" />
                            <span className="cta-blob-blob" />
                          </span>
                        </span>
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M5 12h14M12 5l7 7-7 7" />
                        </svg>
                      </a>
                    </Magnetic>
                  </motion.span>
                </div>
              </h1>

              <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 1 }}
                className={styles.subhead}
              >
                but first &rarr; <a href="#about" className={styles.exploreLink}>explore our craft</a>
              </motion.p>
            </motion.div>
          </div>
      </section>
  );
}
