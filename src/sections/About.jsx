import { FiBookOpen, FiMapPin, FiPhoneCall } from 'react-icons/fi';
import { Reveal } from '../components/Reveal';
import { SectionHeading } from '../components/SectionHeading';

export function About({ profile }) {
  return (
    <section id="about" className="relative scroll-mt-24 py-16 sm:py-20">
      <div className="container-page">
        <SectionHeading eyebrow="About" title="A little about me" description={profile.summary.join(' ')} />

        <div className="grid gap-6 lg:grid-cols-12">
          <Reveal className="lg:col-span-7">
            <div className="glass rounded-2xl p-5 sm:p-6">
              <div className="text-sm font-semibold text-ink-900 dark:text-white">Highlights</div>
              <ul className="mt-4 space-y-3 text-sm leading-7 text-ink-700 dark:text-white/70">
                <li className="flex gap-3">
                  <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-ink-500" />
                  Developed modern, responsive web applications using React.js, Next.js, Tailwind CSS, and Material UI.
                </li>
                <li className="flex gap-3">
                  <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-ink-500" />
                  Integrated real-time features with Node.js, MQTT, and Socket.IO in collaboration with backend teams.
                </li>
                <li className="flex gap-3">
                  <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-ink-500" />
                  Built SEO pages using Next.js and worked on payment flows using Careem Pay.
                </li>
              </ul>
            </div>
          </Reveal>

          <Reveal delay={0.05} className="lg:col-span-5">
            <div className="glass rounded-2xl p-5 sm:p-6">
              <div className="text-sm font-semibold text-ink-900 dark:text-white">Education</div>
              <div className="mt-4 space-y-4">
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

        <Reveal delay={0.08}>
          <div className="mt-6 flex flex-wrap gap-2">
            <span className="badge">
              <FiMapPin className="mr-2 h-4 w-4" />
              {profile.location}
            </span>
            <a className="badge hover:bg-white/70 dark:hover:bg-white/10 transition" href={`tel:${profile.phone}`}>
              <FiPhoneCall className="mr-2 h-4 w-4" />
              {profile.phone}
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

