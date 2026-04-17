export function Footer({ profile }) {
  return (
    <footer className="py-10">
      <div className="container-page">
        <div className="glass rounded-2xl px-5 py-6 sm:px-6">
          <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
            <div className="text-sm font-semibold text-ink-900 dark:text-white">{profile.name}</div>
            <div className="text-xs text-ink-700 dark:text-white/65">
              © {new Date().getFullYear()} · Built with React, Tailwind CSS, and Framer Motion
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

