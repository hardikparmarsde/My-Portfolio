import { FiBriefcase } from 'react-icons/fi';
import { Reveal } from '../components/Reveal';
import { SectionHeading } from '../components/SectionHeading';

export function Experience({ profile }) {
  return (
    <section id="experience" className="relative scroll-mt-24 py-16 sm:py-20">
      <div className="container-page">
        <SectionHeading
          eyebrow="Experience"
          title="Where I’ve worked"
          description="Roles and responsibilities extracted from my resume."
        />

        <div className="grid gap-6">
          {profile.experience.map((job, idx) => (
            <Reveal key={`${job.company}-${job.role}`} delay={idx * 0.05}>
              <div className="glass rounded-2xl p-5 sm:p-6">
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <div>
                    <div className="flex items-center gap-2 text-sm font-semibold text-ink-900 dark:text-white">
                      <FiBriefcase className="h-4 w-4 text-ink-700 dark:text-white/70" />
                      {job.role}
                    </div>
                    <div className="mt-1 text-xs text-ink-700 dark:text-white/65">
                      {job.company} · {job.period}
                    </div>
                  </div>
                </div>
                <ul className="mt-4 space-y-2 text-sm leading-7 text-ink-700 dark:text-white/70">
                  {job.bullets.map((b) => (
                    <li key={b} className="flex gap-3">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-ink-500" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

