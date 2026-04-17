import { FiGithub, FiLinkedin, FiMail, FiPhoneCall } from 'react-icons/fi';
import { Reveal } from '../components/Reveal';
import { SectionHeading } from '../components/SectionHeading';

export function Contact({ profile }) {
  return (
    <section id="contact" className="relative scroll-mt-24 py-16 sm:py-20">
      <div className="container-page">
        <SectionHeading
          eyebrow="Contact"
          title="Let’s build something"
          description="Reach out for roles, collaborations, or just to connect."
        />

        <div className="grid gap-6 lg:grid-cols-12">
          <Reveal className="lg:col-span-7">
            <div className="glass rounded-2xl p-5 sm:p-6">
              <div className="text-sm font-semibold text-ink-900 dark:text-white">Email</div>
              <a
                href={`mailto:${profile.email}`}
                className="mt-2 inline-flex items-center gap-2 text-sm text-ink-700 hover:text-ink-900 dark:text-white/70 dark:hover:text-white transition"
              >
                <FiMail className="h-4 w-4" />
                {profile.email}
              </a>

              <div className="mt-6 text-sm font-semibold text-ink-900 dark:text-white">Phone</div>
              <a
                href={`tel:${profile.phone}`}
                className="mt-2 inline-flex items-center gap-2 text-sm text-ink-700 hover:text-ink-900 dark:text-white/70 dark:hover:text-white transition"
              >
                <FiPhoneCall className="h-4 w-4" />
                {profile.phone}
              </a>

              <div className="mt-8 flex flex-wrap gap-3">
                <a className="btn-primary" href={`mailto:${profile.email}`}>
                  <FiMail className="h-4 w-4" />
                  Email me
                </a>
                <a className="btn-ghost" href={profile.links.linkedin} target="_blank" rel="noreferrer">
                  <FiLinkedin className="h-4 w-4" />
                  LinkedIn
                </a>
                <a className="btn-ghost" href={profile.links.github} target="_blank" rel="noreferrer">
                  <FiGithub className="h-4 w-4" />
                  GitHub
                </a>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.05} className="lg:col-span-5">
            <div className="glass rounded-2xl p-5 sm:p-6">
              <div className="text-sm font-semibold text-ink-900 dark:text-white">Location</div>
              <p className="mt-2 text-sm leading-7 text-ink-700 dark:text-white/70">{profile.location}</p>
              <div className="mt-6 text-sm font-semibold text-ink-900 dark:text-white">Links</div>
              <div className="mt-3 grid gap-2">
                <a
                  className="glass rounded-xl p-4 text-sm text-ink-700 hover:text-ink-900 dark:text-white/70 dark:hover:text-white transition"
                  href={profile.links.linkedin}
                  target="_blank"
                  rel="noreferrer"
                >
                  {profile.links.linkedin}
                </a>
                <a
                  className="glass rounded-xl p-4 text-sm text-ink-700 hover:text-ink-900 dark:text-white/70 dark:hover:text-white transition"
                  href={profile.links.github}
                  target="_blank"
                  rel="noreferrer"
                >
                  {profile.links.github}
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

