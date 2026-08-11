import { useReveal } from '../../hooks/useReveal';
import {
  CRMIcon,
  POSIcon,
  AutomationIcon,
  PortalsIcon,
  VoiceAIIcon,
  IntegrationsIcon,
} from './icons';
import styles from './Services.module.css';

const SERVICES = [
  {
    Icon: CRMIcon,
    title: 'CRM & Client Management',
    copy: 'Track leads, customers, and every interaction in one organized pipeline.',
  },
  {
    Icon: POSIcon,
    title: 'Point of Sale (POS)',
    copy: 'Fast, reliable checkout built around how your staff actually sell.',
  },
  {
    Icon: AutomationIcon,
    title: 'Automation & Workflows',
    copy: 'Turn multi-step manual processes into a single click.',
  },
  {
    Icon: PortalsIcon,
    title: 'Admin & Staff Portals',
    copy: 'Separate, purpose-built dashboards for owners and for staff.',
  },
  {
    Icon: VoiceAIIcon,
    title: 'Voice AI & Chatbots',
    copy: 'Answer customer calls and messages automatically, day or night.',
  },
  {
    Icon: IntegrationsIcon,
    title: 'Custom Apps & Integrations',
    copy: 'Custom dashboards, client portals, and internal tools, connected to what you already use.',
  },
];

export default function Services() {
  const headRef = useReveal();
  const gridRef = useReveal({ threshold: 0.5, delay: 350 });

  return (
    <section id="services" className={styles.services}>
      <div className={styles.waveEdge} aria-hidden="true">
        <svg className={styles.waveShadow} viewBox="0 0 2400 200" preserveAspectRatio="none" fill="none">
          <path
            d="M0,96 C133,114 267,82 400,99 C533,116 667,84 800,98 C933,115 1067,83 1200,99 C1333,113 1467,85 1600,98 C1733,110 1867,88 2000,99 C2133,107 2267,90 2400,97 L2400,200 L0,200 Z"
            fill="#143fc0"
          />
        </svg>
        <svg viewBox="0 0 2400 200" preserveAspectRatio="none" fill="none">
          <path
            d="M0,96 C133,114 267,82 400,99 C533,116 667,84 800,98 C933,115 1067,83 1200,99 C1333,113 1467,85 1600,98 C1733,110 1867,88 2000,99 C2133,107 2267,90 2400,97 L2400,200 L0,200 Z"
            fill="#f5f8ff"
          />
        </svg>
      </div>
      <div className="container">
        <div ref={headRef} className={`${styles.head} reveal`}>
          <h2 className={styles.heading}>
            <span className="serif-italic" style={{ color: '#1f56ea' }}>One partner.</span> Every system your business runs on.
          </h2>
        </div>

        <div ref={gridRef} className={`${styles.grid} reveal`}>
          {SERVICES.map(({ Icon, title, copy }, i) => (
            <div key={title} className={styles.card} style={{ '--card-index': i }}>
              <div className={styles.icon}>
                <Icon />
              </div>
              <h3 className={styles.cardTitle}>{title}</h3>
              <p className={styles.cardCopy}>{copy}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
