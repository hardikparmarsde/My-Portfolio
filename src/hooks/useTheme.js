import { useEffect, useMemo, useState } from 'react';

const STORAGE_KEY = 'hp_theme';

function getPreferredTheme() {
  if (typeof window === 'undefined') return 'light';
  const stored = window.localStorage.getItem(STORAGE_KEY);
  if (stored === 'light' || stored === 'dark') return stored;
  return window.matchMedia?.('(prefers-color-scheme: dark)')?.matches ? 'dark' : 'light';
}

export function useTheme() {
  const initial = useMemo(() => getPreferredTheme(), []);
  const [theme, setTheme] = useState(initial);

  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'dark') root.classList.add('dark');
    else root.classList.remove('dark');
    window.localStorage.setItem(STORAGE_KEY, theme);
  }, [theme]);

  return {
    theme,
    setTheme,
    toggle: () => setTheme((t) => (t === 'dark' ? 'light' : 'dark')),
  };
}

