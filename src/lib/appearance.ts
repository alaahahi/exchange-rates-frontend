export const APPEARANCE_STORAGE_KEY = 'dinar-appearance';

export type AppearanceColors = {
  brand: string;
  accent: string;
  up: string;
  down: string;
};

export const defaultAppearance: AppearanceColors = {
  brand: '#0d2149',
  accent: '#c29953',
  up: '#1a7a4c',
  down: '#b42318',
};

export const appearancePresets: Record<string, AppearanceColors> = {
  default: { ...defaultAppearance },
  market: {
    brand: '#0b1c3d',
    accent: '#d4a017',
    up: '#0f7a45',
    down: '#c62828',
  },
  soft: {
    brand: '#1a2744',
    accent: '#b8956a',
    up: '#2e7d57',
    down: '#a33b32',
  },
};

function darken(hex: string, amount: number): string {
  const raw = hex.replace('#', '');
  if (raw.length !== 6) return hex;
  const num = Number.parseInt(raw, 16);
  if (Number.isNaN(num)) return hex;
  const r = Math.max(0, ((num >> 16) & 255) - amount);
  const g = Math.max(0, ((num >> 8) & 255) - amount);
  const b = Math.max(0, (num & 255) - amount);
  return `#${((r << 16) | (g << 8) | b).toString(16).padStart(6, '0')}`;
}

export function applyAppearance(colors: AppearanceColors, root: HTMLElement = document.documentElement): void {
  root.style.setProperty('--color-navy', colors.brand);
  root.style.setProperty('--color-navy-dark', darken(colors.brand, 18));
  root.style.setProperty('--color-navy-soft', darken(colors.brand, -12));
  root.style.setProperty('--color-brand', colors.brand);
  root.style.setProperty('--color-brand-dark', darken(colors.brand, 18));
  root.style.setProperty('--color-gold', colors.accent);
  root.style.setProperty('--color-gold-dark', darken(colors.accent, 24));
  root.style.setProperty('--color-accent', colors.accent);
  root.style.setProperty('--color-accent-dark', darken(colors.accent, 24));
  root.style.setProperty('--color-up', colors.up);
  root.style.setProperty('--color-down', colors.down);
  root.style.setProperty('--color-theme', colors.brand);
}

export function readStoredAppearance(): AppearanceColors | null {
  try {
    const raw = localStorage.getItem(APPEARANCE_STORAGE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw) as Partial<AppearanceColors>;
    if (!parsed.brand || !parsed.accent || !parsed.up || !parsed.down) return null;
    return {
      brand: parsed.brand,
      accent: parsed.accent,
      up: parsed.up,
      down: parsed.down,
    };
  } catch {
    return null;
  }
}

export function saveAppearance(colors: AppearanceColors): void {
  localStorage.setItem(APPEARANCE_STORAGE_KEY, JSON.stringify(colors));
}

export function clearAppearance(): void {
  localStorage.removeItem(APPEARANCE_STORAGE_KEY);
}

export function changeDirection(change: number | null): 'up' | 'down' | 'flat' {
  if (change === null || Number.isNaN(change) || change === 0) return 'flat';
  return change > 0 ? 'up' : 'down';
}
