import { Reveal } from '../components/Reveal';
import { SectionHeading } from '../components/SectionHeading';
import {
  SiReact,
  SiNextdotjs,
  SiJavascript,
  SiRedux,
  SiHtml5,
  SiCss,
  SiTailwindcss,
  SiMui,
  SiAntdesign,
  SiBootstrap,
  SiNodedotjs,
  SiSocketdotio,
  SiMqtt,
  SiJsonwebtokens,
  SiExpress,
  SiMongodb,
  SiElectron,
  SiAngular,
} from 'react-icons/si';
import { FaJava } from 'react-icons/fa';

const SKILL_ICONS = {
  'React.js': SiReact,
  'Next.js': SiNextdotjs,
  Angular: SiAngular,
  JavaScript: SiJavascript,
  Redux: SiRedux,
  HTML: SiHtml5,
  CSS: SiCss,
  'Tailwind CSS': SiTailwindcss,
  'Material UI': SiMui,
  'Ant Design': SiAntdesign,
  Bootstrap: SiBootstrap,
  'Node.js': SiNodedotjs,
  'Socket.IO': SiSocketdotio,
  MQTT: SiMqtt,
  JWT: SiJsonwebtokens,
  Express: SiExpress,
  MongoDB: SiMongodb,
  'Electron.js': SiElectron,
  Java: FaJava,
};

const SKILL_COLORS = {
  'React.js': '#61DAFB',
  'Next.js': '#111827',
  Angular: '#DD0031',
  JavaScript: '#F7DF1E',
  Redux: '#764ABC',
  HTML: '#E34F26',
  CSS: '#1572B6',
  'Tailwind CSS': '#06B6D4',
  'Material UI': '#007FFF',
  'Ant Design': '#1677FF',
  Bootstrap: '#7952B3',
  'Node.js': '#339933',
  'Socket.IO': '#111827',
  MQTT: '#660066',
  JWT: '#D63AFF',
  Express: '#111827',
  MongoDB: '#47A248',
  'Electron.js': '#47848F',
  Java: '#E11D48',
};

export function Skills({ profile }) {
  const skillsFlat = Array.from(new Set(profile.skills.flatMap((g) => g.items)));
  return (
    <section id="skills" className="relative scroll-mt-24 py-16 sm:py-20">
      <div className="container-page">
        <SectionHeading
          eyebrow="Skills"
          title="Tools I work with"
          description="A focused stack for building responsive UIs, real-time experiences, and production-ready apps."
        />

        <Reveal>
          <div className="glass rounded-2xl p-5 sm:p-6">
            <div className="grid grid-cols-4 gap-3 sm:grid-cols-6 md:grid-cols-8 lg:grid-cols-10">
              {skillsFlat.map((skill) => {
                const Icon = SKILL_ICONS[skill];
                const color = SKILL_COLORS[skill];
                return (
                  <div
                    key={skill}
                    className="group glass rounded-2xl p-3 flex flex-col items-center justify-center gap-2 hover:-translate-y-0.5 hover:bg-white/80 dark:hover:bg-white/10 transition"
                    title={skill}
                    aria-label={skill}
                  >
                    {Icon && (
                      <Icon
                        className="h-7 w-7 sm:h-8 sm:w-8"
                        style={{
                          color: color || undefined,
                          filter: 'drop-shadow(0 8px 18px rgba(0,0,0,0.12))',
                        }}
                      />
                    )}
                    <span className="text-[10px] sm:text-xs font-semibold text-ink-800 dark:text-white/80 text-center">
                      {skill}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

