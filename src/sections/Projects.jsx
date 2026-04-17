import { Reveal } from '../components/Reveal';
import { SectionHeading } from '../components/SectionHeading';
import { ProjectCard } from '../components/ProjectCard';

export function Projects({ profile }) {
  return (
    <section id="projects" className="relative scroll-mt-24 py-16 sm:py-20">
      <div className="container-page">
        <SectionHeading
          eyebrow="Projects"
          title="Selected work"
          description="A few projects that highlight UI polish, interactions, and practical engineering."
        />

        <div className="grid gap-6">
          {profile.projects.map((p, idx) => (
            <Reveal key={p.title} delay={idx * 0.05}>
              <ProjectCard project={p} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

