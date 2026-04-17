import { FiActivity, FiBookOpen, FiBox, FiZap } from 'react-icons/fi';
import { Reveal } from '../components/Reveal';
import { SectionHeading } from '../components/SectionHeading';

const ICONS = [FiBox, FiActivity, FiZap];

export function About({ profile }) {
  const about = profile.about;
  const focus = about?.focusAreas || [];
  const paragraphs = about?.paragraphs?.length ? about.paragraphs : profile.summary;
  const stats = about?.stats || [];

  return (
    <section id="about" className="relative scroll-mt-24 py-16 sm:py-20">
      <div className="container-page">
        <SectionHeading eyebrow="About" title="A Little Bit About Me" description={null} />

        <div className="grid gap-6 lg:grid-cols-12">
          <Reveal className="lg:col-span-12">
            <div className="glass rounded-2xl p-5 sm:p-6">
              <div className="text-sm font-semibold text-ink-900 dark:text-white">Professional summary</div>
              {about?.tagline ? (
                <div className="mt-2 text-base font-semibold text-ink-900 dark:text-white">{about.tagline}</div>
              ) : null}

              <div className="mt-4 space-y-3 text-sm leading-7 text-ink-700 dark:text-white/70">
                {paragraphs.map((p) => (
                  <p key={p}>{p}</p>
                ))}
              </div>

              {stats.length ? (
                <div className="mt-6 grid gap-3 sm:grid-cols-3">
                  {stats.map((s) => (
                    <div key={s.label} className="glass rounded-xl p-4 text-center">
                      <div className="text-xl font-extrabold tracking-tight text-ink-900 dark:text-white">
                        {s.value}
                      </div>
                      <div className="mt-1 text-xs text-ink-700 dark:text-white/65">{s.label}</div>
                    </div>
                  ))}
                </div>
              ) : null}
            </div>
          </Reveal>

          <Reveal className="lg:col-span-5">
            <div className="glass rounded-2xl p-5 sm:p-6">
              <div className="text-sm font-semibold text-ink-900 dark:text-white">What I do</div>
              <div className="mt-4 space-y-3">
                {focus.map((item, idx) => {
                  const Icon = ICONS[idx % ICONS.length];
                  return (
                    <div key={item.title} className="glass rounded-xl p-4">
                      <div className="flex items-start gap-3">
                        <span className="mt-0.5 grid h-9 w-9 place-items-center rounded-xl bg-ink-900/90 text-white dark:bg-white dark:text-ink-900">
                          <Icon className="h-4 w-4" />
                        </span>
                        <div>
                          <div className="text-sm font-semibold text-ink-900 dark:text-white">{item.title}</div>
                          <div className="mt-1 text-xs leading-6 text-ink-700 dark:text-white/65">
                            {item.description}
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.05} className="lg:col-span-7">
            <div className="glass rounded-2xl p-5 sm:p-6">
              <div className="text-sm font-semibold text-ink-900 dark:text-white">Education</div>
              <div className="mt-4 space-y-3">
                {profile.education.map((e) => (
                  <div key={`${e.institute}-${e.year}`} className="glass rounded-xl p-4">
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <div className="text-sm font-semibold text-ink-900 dark:text-white">{e.program}</div>
                        <div className="mt-1 text-xs text-ink-700 dark:text-white/65">
                          {e.institute} · {e.year}
                        </div>
                      </div>
                      <span className="badge">{e.score}</span>
                    </div>
                    <div className="mt-2 flex items-center gap-2 text-xs text-ink-700 dark:text-white/65">
                      <FiBookOpen className="h-4 w-4" />
                      {e.location}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

