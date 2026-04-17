import { Reveal } from './Reveal';

export function SectionHeading({ eyebrow, title, description }) {
  return (
    <div className="mb-8">
      <Reveal>
        <div className="inline-flex items-center gap-2">
          <span className="badge">{eyebrow}</span>
        </div>
      </Reveal>
      <Reveal delay={0.05}>
        <h2 className="mt-4 text-2xl font-bold tracking-tight text-ink-900 dark:text-white sm:text-3xl">
          {title}
        </h2>
      </Reveal>
      {description ? (
        <Reveal delay={0.1}>
          <p className="mt-3 max-w-2xl text-sm leading-7 text-ink-700 dark:text-white/70">{description}</p>
        </Reveal>
      ) : null}
    </div>
  );
}

