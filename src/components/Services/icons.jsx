const common = {
  width: 20,
  height: 20,
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.7,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
};

export function CRMIcon() {
  return (
    <svg {...common}>
      <circle cx="9" cy="8" r="3.2" />
      <path d="M3.5 20c0-3.3 2.5-5.5 5.5-5.5s5.5 2.2 5.5 5.5" />
      <circle cx="17.5" cy="8.5" r="2.4" />
      <path d="M15 14.8c2.6 0.3 4.6 2.3 4.6 5.2" />
    </svg>
  );
}

export function POSIcon() {
  return (
    <svg {...common}>
      <rect x="4" y="4" width="16" height="11" rx="2" />
      <path d="M8 19h8" />
      <path d="M9 22h6" />
      <circle cx="12" cy="9.5" r="1.4" />
    </svg>
  );
}

export function AutomationIcon() {
  return (
    <svg {...common}>
      <circle cx="6" cy="7" r="2.4" />
      <circle cx="18" cy="7" r="2.4" />
      <circle cx="12" cy="18" r="2.4" />
      <path d="M8 8.3L11 16" />
      <path d="M16 8.3L13 16" />
      <path d="M8.2 6.3h7.6" />
    </svg>
  );
}

export function PortalsIcon() {
  return (
    <svg {...common}>
      <rect x="3" y="4" width="8" height="16" rx="2" />
      <rect x="13" y="4" width="8" height="7" rx="2" />
      <rect x="13" y="13" width="8" height="7" rx="2" />
    </svg>
  );
}

export function VoiceAIIcon() {
  return (
    <svg {...common}>
      <rect x="8.5" y="3" width="7" height="12" rx="3.5" />
      <path d="M5 11a7 7 0 0 0 14 0" />
      <path d="M12 18v3" />
    </svg>
  );
}

export function IntegrationsIcon() {
  return (
    <svg {...common}>
      <rect x="2.5" y="8" width="7" height="7" rx="3.5" transform="rotate(-45 6 11.5)" />
      <rect x="14.5" y="8" width="7" height="7" rx="3.5" transform="rotate(-45 18 11.5)" />
      <path d="M10.5 13.5l3-3" />
    </svg>
  );
}
