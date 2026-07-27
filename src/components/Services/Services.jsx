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
    copy: 'Custom dashboards, client portals, and internal tools — connected to what you already use.',
  },
];

export default function Services() {
  const headRef = useReveal();
  const gridRef = useReveal({ threshold: 0.5, delay: 350 });

  return (
    <section id="services" className={styles.services}>
      <div className="container">
        <div ref={headRef} className={`${styles.head} reveal`}>
          <p className="eyebrow">What we build</p>
          <h2 className={styles.heading}>One partner. Every system your business runs on.</h2>
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
