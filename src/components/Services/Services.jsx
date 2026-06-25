import { useReveal } from '../../hooks/useReveal';
import {
  WebIcon,
  MobileIcon,
  AutomationIcon,
  SystemsIcon,
  IntegrationsIcon,
  SupportIcon,
} from './icons';
import styles from './Services.module.css';

const SERVICES = [
  {
    Icon: WebIcon,
    title: 'Web Applications',
    copy: 'Custom dashboards, client portals, and internal tools built to handle real workloads — not just demos.',
  },
  {
    Icon: MobileIcon,
    title: 'Mobile Apps',
    copy: 'Native-feel iOS and Android apps for customer-facing products or field teams that need to work offline.',
  },
  {
    Icon: AutomationIcon,
    title: 'Workflow Automations',
    copy: 'We map your manual processes and replace the repetitive parts with automations that just run.',
  },
  {
    Icon: SystemsIcon,
    title: 'Custom Internal Systems',
    copy: 'Inventory, scheduling, CRM-style systems — purpose-built around how your team actually operates.',
  },
  {
    Icon: IntegrationsIcon,
    title: 'Integrations & APIs',
    copy: "Connect the tools you already use so data moves on its own, instead of living in someone's inbox.",
  },
  {
    Icon: SupportIcon,
    title: 'Ongoing Support',
    copy: 'Post-launch monitoring, fixes, and iteration — we stay on as your system evolves with the business.',
  },
];

export default function Services() {
  const headRef = useReveal();
  const gridRef = useReveal();

  return (
    <section id="services" className={`${styles.services} section-bleed`}>
      <div className="container">
        <div ref={headRef} className={`${styles.head} reveal`}>
          <p className="eyebrow">What We Build</p>
          <h2 className={styles.heading}>One team, every piece of your system</h2>
          <p className={styles.sub}>
            From the first sketch to the system your team relies on daily —
            here's where we typically come in.
          </p>
        </div>

        <div ref={gridRef} className={`${styles.grid} reveal`}>
          {SERVICES.map(({ Icon, title, copy }) => (
            <div key={title} className={styles.card}>
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
