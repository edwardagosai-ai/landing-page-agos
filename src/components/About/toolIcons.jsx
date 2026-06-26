const common = {
  width: 21,
  height: 21,
  viewBox: '0 0 48 48',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.7,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
};

export function CRMIcon() {
  return (
    <svg {...common}>
      <rect x="10" y="8" width="28" height="32" rx="3" />
      <circle cx="24" cy="18" r="5" />
      <path d="M14 34c1-6 6-9 10-9s9 3 10 9" />
    </svg>
  );
}

export function InventoryIcon() {
  return (
    <svg {...common}>
      <rect x="7" y="26" width="14" height="12" rx="2" />
      <rect x="27" y="26" width="14" height="12" rx="2" />
      <rect x="17" y="9" width="14" height="12" rx="2" />
    </svg>
  );
}

export function DatabaseIcon() {
  return (
    <svg {...common}>
      <ellipse cx="24" cy="12" rx="14" ry="5" />
      <path d="M10 12v12c0 2.8 6.3 5 14 5s14-2.2 14-5V12" />
      <path d="M10 24v12c0 2.8 6.3 5 14 5s14-2.2 14-5V24" />
    </svg>
  );
}

export function AccountingIcon() {
  return (
    <svg {...common}>
      <rect x="10" y="6" width="28" height="36" rx="3" />
      <path d="M24 13v22" />
      <path d="M30 18c0-2.8-2.7-4.5-6-4.5s-6 1.8-6 4.5 2.7 4 6 5 6 2.2 6 5-2.7 4.5-6 4.5-6-1.7-6-4.5" />
    </svg>
  );
}

export function SchedulingIcon() {
  return (
    <svg {...common}>
      <rect x="8" y="10" width="32" height="28" rx="3" />
      <path d="M8 18h32" />
      <path d="M16 6v8M32 6v8" />
      <circle cx="16" cy="27" r="1.1" fill="currentColor" stroke="none" />
      <circle cx="24" cy="27" r="1.1" fill="currentColor" stroke="none" />
      <circle cx="32" cy="27" r="1.1" fill="currentColor" stroke="none" />
    </svg>
  );
}
