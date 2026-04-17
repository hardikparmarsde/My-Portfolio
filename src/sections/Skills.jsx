import { Reveal } from '../components/Reveal';
import { SectionHeading } from '../components/SectionHeading';

export function Skills({ profile }) {
  return (
    <section id="skills" className="relative scroll-mt-24 py-16 sm:py-20">
      <div className="container-page">
        <SectionHeading
          eyebrow="Skills"
          title="Tools I work with"
          description="A focused stack for building responsive UIs, real-time experiences, and production-ready apps."
        />

        <div className="grid gap-6 md:grid-cols-2">
          {profile.skills.map((group, idx) => (
            <Reveal key={group.category} delay={idx * 0.04}>
              <div className="glass rounded-2xl p-5 sm:p-6">
                <div className="text-sm font-semibold text-ink-900 dark:text-white">{group.category}</div>
                <div className="mt-4 flex flex-wrap gap-2">
                  {group.items.map((skill) => (
                    <span key={skill} className="badge">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

