import { Fragment } from 'react';
import { useReveal } from '../../hooks/useReveal';
import AngleDivider from '../AngleDivider/AngleDivider';
import logoMark from '../../assets/logo-mark.png';
import {
  WebIcon,
  AutomationIcon,
  SystemsIcon,
  IntegrationsIcon,
  SupportIcon,
} from '../Services/icons';
import styles from './About.module.css';

const NODES = [
  { Icon: WebIcon, label: 'Web app', x: 50, y: 10 },
  { Icon: AutomationIcon, label: 'Automation', x: 89, y: 37 },
  { Icon: SupportIcon, label: 'Support', x: 74, y: 85 },
  { Icon: SystemsIcon, label: 'Systems', x: 26, y: 85 },
  { Icon: IntegrationsIcon, label: 'Integrations', x: 11, y: 37 },
];

export default function About() {
  const ref = useReveal();

  return (
    <section id="about" className={`${styles.about} section-bleed`}>
      <AngleDivider />
      <div className="container">
        <div ref={ref} className={`${styles.grid} reveal`}>
          <div>
            <p className="eyebrow">About Agos</p>
            <h2 className={styles.heading}>
              We build the systems behind businesses that outgrow spreadsheets
            </h2>
            <p className={styles.copy}>
              Agos Solutions started with a simple frustration: most small and
              mid-sized businesses are stuck stitching together tools that
              were never meant to talk to each other. We design and build
              custom web apps, mobile apps, and automations that actually fit
              how your team works — not the other way around.
            </p>
            <p className={styles.copy} style={{ marginTop: '1rem' }}>
              No bloated enterprise contracts, no off-the-shelf templates
              pretending to be custom. Just a small, senior team that ships
              fast and sticks around after launch.
            </p>
          </div>

          <div className={styles.diagramWrap}>
            <div className={styles.diagram}>
              <div className={styles.diagramGlow} />

              <svg className={styles.diagramLines} viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
                {NODES.map((node) => (
                  <line
                    key={node.label}
                    x1="50"
                    y1="50"
                    x2={node.x}
                    y2={node.y}
                    vectorEffect="non-scaling-stroke"
                  />
                ))}
                {NODES.map((node, i) => {
                  const mx = (50 + node.x) / 2;
                  const my = (50 + node.y) / 2;
                  return (
                    <circle
                      key={`${node.label}-dot`}
                      cx={mx}
                      cy={my}
                      r="1.6"
                      className={styles.dataDot}
                      style={{ animationDelay: `${i * 0.3}s` }}
                    />
                  );
                })}
              </svg>

              <div className={styles.hubNode}>
                <div className={styles.hubBadge}>
                  <img src={logoMark} alt="" className={styles.hubLogo} />
                </div>
              </div>

              {NODES.map(({ Icon, label, x, y }) => (
                <Fragment key={label}>
                  <div className={styles.toolNode} style={{ left: `${x}%`, top: `${y}%` }}>
                    <Icon />
                  </div>
                  <span className={styles.nodeLabel} style={{ left: `${x}%`, top: `${y}%` }}>
                    {label}
                  </span>
                </Fragment>
              ))}
            </div>
            <p className={styles.diagramCaption}>
              One connected system, instead of five disconnected tools.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
