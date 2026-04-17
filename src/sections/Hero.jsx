import { motion } from 'framer-motion';
import { FiArrowRight, FiMail, FiMapPin } from 'react-icons/fi';
import { Reveal } from '../components/Reveal';

export function Hero({ profile }) {
  return (
    <section id="top" className="relative pt-28 sm:pt-32">
      <div className="container-page">
        <div className="grid gap-10 lg:grid-cols-12 lg:items-start">
          <div className="lg:col-span-7">
            <Reveal>
              <span className="badge">Available for opportunities</span>
            </Reveal>
            <Reveal delay={0.05}>
              <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-ink-900 dark:text-white sm:text-5xl">
                {profile.name}
              </h1>
            </Reveal>
            <Reveal delay={0.08}>
              <p className="mt-2 text-lg font-semibold text-ink-700 dark:text-white/70">{profile.title}</p>
            </Reveal>

            <Reveal delay={0.12}>
              <p className="mt-6 max-w-2xl text-sm leading-7 text-ink-700 dark:text-white/70">
                {profile.summary.join(' ')}
              </p>
            </Reveal>

            <Reveal delay={0.16}>
              <div className="mt-8 flex flex-wrap gap-3">
                <a href="#projects" className="btn-primary">
                  View projects <FiArrowRight className="h-4 w-4" />
                </a>
                <a href={`mailto:${profile.email}`} className="btn-ghost">
                  <FiMail className="h-4 w-4" /> Contact
                </a>
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-5">
            <motion.div
              className="glass-strong rounded-2xl p-5 sm:p-6"
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.05 }}
            >
              <div className="flex items-start justify-between gap-3">
                <div>
                  <div className="text-sm font-semibold text-ink-900 dark:text-white">Quick details</div>
                  <div className="mt-1 text-xs text-ink-700 dark:text-white/65">{profile.location}</div>
                </div>
                <div className="h-10 w-10 rounded-2xl bg-ink-900 text-white dark:bg-white dark:text-ink-900 grid place-items-center animate-floaty">
                  <span className="text-sm font-bold">{profile.name.split(' ').map((w) => w[0]).join('')}</span>
                </div>
              </div>

              <div className="mt-5 grid gap-3">
                <div className="glass rounded-xl p-4">
                  <div className="flex items-center gap-2 text-sm font-medium text-ink-900 dark:text-white">
                    <FiMapPin className="h-4 w-4 text-ink-700 dark:text-white/70" />
                    Location
                  </div>
                  <div className="mt-1 text-sm text-ink-700 dark:text-white/70">{profile.location}</div>
                </div>
                <div className="glass rounded-xl p-4">
                  <div className="flex items-center gap-2 text-sm font-medium text-ink-900 dark:text-white">
                    <FiMail className="h-4 w-4 text-ink-700 dark:text-white/70" />
                    Email
                  </div>
                  <a
                    className="mt-1 inline-block text-sm text-ink-700 hover:text-ink-900 dark:text-white/70 dark:hover:text-white transition"
                    href={`mailto:${profile.email}`}
                  >
                    {profile.email}
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

