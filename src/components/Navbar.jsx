import { useEffect, useMemo, useState } from 'react';
import { FiGithub, FiLinkedin, FiMoon, FiSun } from 'react-icons/fi';
import clsx from 'clsx';

const NAV = [
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'experience', label: 'Experience' },
  { id: 'contact', label: 'Contact' },
];

export function Navbar({ profile, theme, onToggleTheme }) {
  const [scrolled, setScrolled] = useState(false);
  const isDark = theme === 'dark';

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 6);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const links = useMemo(
    () => [
      { href: profile.links.linkedin, icon: FiLinkedin, label: 'LinkedIn' },
      { href: profile.links.github, icon: FiGithub, label: 'GitHub' },
    ],
    [profile.links.github, profile.links.linkedin]
  );

  return (
    <header
      className={clsx(
        'fixed inset-x-0 top-0 z-50',
        scrolled ? 'bg-white/40 shadow-sm backdrop-blur-xl dark:bg-black/20' : 'bg-transparent'
      )}
    >
      <div className="container-page">
        <div className="flex h-16 items-center justify-between">
          <a href="#top" className="group inline-flex items-center gap-2">
            <div className="h-9 w-9 rounded-xl bg-ink-900 text-white dark:bg-white dark:text-ink-900 grid place-items-center">
              <span className="text-sm font-bold">{profile.name.split(' ').map((w) => w[0]).join('')}</span>
            </div>
            <div className="hidden sm:block">
              <div className="text-sm font-semibold text-ink-900 dark:text-white">{profile.name}</div>
              <div className="text-xs text-ink-700 dark:text-white/65">{profile.title}</div>
            </div>
          </a>

          <nav className="hidden md:flex items-center gap-1">
            {NAV.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className="rounded-lg px-3 py-2 text-sm font-medium text-ink-700 hover:text-ink-900 hover:bg-white/50 dark:text-white/70 dark:hover:text-white dark:hover:bg-white/10 transition"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-1">
            {links.map(({ href, icon: Icon, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                className="glass rounded-xl p-2 text-ink-800 hover:-translate-y-0.5 hover:bg-white/80 dark:text-white/85 dark:hover:bg-white/10 transition"
                aria-label={label}
                title={label}
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
            <button
              type="button"
              onClick={onToggleTheme}
              className="glass rounded-xl p-2 text-ink-800 hover:-translate-y-0.5 hover:bg-white/80 dark:text-white/85 dark:hover:bg-white/10 transition"
              aria-label="Toggle dark mode"
              title="Toggle dark mode"
            >
              {isDark ? <FiSun className="h-4 w-4" /> : <FiMoon className="h-4 w-4" />}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}

