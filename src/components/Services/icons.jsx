const common = {
  width: 30,
  height: 30,
  viewBox: '0 0 48 48',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.7,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
};

export function WebIcon() {
  return (
    <svg {...common}>
      <rect x="5" y="9" width="38" height="28" rx="3" />
      <path d="M5 16h38" />
      <circle cx="10.5" cy="12.5" r="0.9" fill="currentColor" stroke="none" />
      <path d="M10 27c3-4 6-4 9 0s6 4 9 0 6-4 9 0" />
    </svg>
  );
}

export function AgenticIcon() {
  return (
    <svg {...common}>
      <rect x="15" y="15" width="18" height="18" rx="4" transform="rotate(45 24 24)" />
      <circle cx="24" cy="24" r="1.3" fill="currentColor" stroke="none" />
      <path d="M24 9c-5 3-5 7-2 9" />
      <path d="M24 39c5-3 5-7 2-9" />
      <circle cx="22" cy="7" r="1" fill="currentColor" stroke="none" />
      <circle cx="26" cy="41" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function AutomationIcon() {
  return (
    <svg {...common}>
      <path d="M16 16c-6 0-9 4-9 8.5S10 32 16 32c8 0 8-16 16-16 6 0 9 4 9 8.5S38 32 32 32" />
      <circle cx="9.5" cy="24.5" r="1" fill="currentColor" stroke="none" />
      <circle cx="38.5" cy="24.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function SystemsIcon() {
  return (
    <svg {...common}>
      <rect x="6" y="20" width="24" height="14" rx="2.5" />
      <rect x="14" y="11" width="24" height="14" rx="2.5" />
      <circle cx="32" cy="18" r="0.9" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function IntegrationsIcon() {
  return (
    <svg {...common}>
      <circle cx="11" cy="14" r="5" />
      <circle cx="37" cy="34" r="5" />
      <path d="M15 17.5C20 24 28 24 33 30.5" />
      <circle cx="24" cy="24" r="1.1" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function SupportIcon() {
  return (
    <svg {...common}>
      <path d="M24 6c10 0 17 7.5 17 17S34 40 24 40 7 32.5 7 23" />
      <path d="M7 23l-3.5 2.5M7 23l1 4.2" />
      <circle cx="24" cy="23" r="1.1" fill="currentColor" stroke="none" />
    </svg>
  );
}
