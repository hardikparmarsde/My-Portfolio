import { useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import { FiExternalLink, FiGithub } from 'react-icons/fi';

function LinkButton({ href, children, icon: Icon }) {
  if (!href) return null;
  const isGithub = href.includes('github.com');
  const I = Icon || (isGithub ? FiGithub : FiExternalLink);
  return (
    <a className="btn-ghost" href={href} target="_blank" rel="noreferrer">
      <I className="h-4 w-4" />
      {children}
    </a>
  );
}

export function ProjectCard({ project }) {
  const images = project.images || [];
  const hasImages = images.length > 0;
  const [active, setActive] = useState(images[0] || null);

  const links = useMemo(() => {
    const live = project.links?.live;
    const source = project.links?.source;
    const backend = project.links?.backend;
    return { live, source, backend };
  }, [project.links]);

  return (
    <div className="glass rounded-2xl p-4 sm:p-5">
      <div className="flex flex-col gap-4 lg:flex-row lg:items-start">
        {hasImages ? (
          <div className="w-full lg:w-[52%]">
            <motion.div
              className="relative overflow-hidden rounded-xl border border-white/15 dark:border-white/10 bg-white/40 dark:bg-white/5"
              whileHover={{ y: -2 }}
              transition={{ duration: 0.25 }}
            >
              {/* eslint-disable-next-line jsx-a11y/img-redundant-alt */}
              <img src={active} alt={`${project.title} screenshot`} className="w-full h-auto block" />
            </motion.div>

            {images.length > 1 ? (
              <div className="mt-3 flex gap-2 overflow-x-auto pb-1">
                {images.map((src) => (
                  <button
                    key={src}
                    type="button"
                    onClick={() => setActive(src)}
                    className={`relative shrink-0 overflow-hidden rounded-lg border transition ${
                      active === src
                        ? 'border-ink-500/60 ring-2 ring-ink-400/30'
                        : 'border-white/15 hover:border-ink-400/40 dark:border-white/10'
                    }`}
                    aria-label="Select screenshot"
                  >
                    {/* eslint-disable-next-line jsx-a11y/img-redundant-alt */}
                    <img src={src} alt={`${project.title} thumbnail`} className="h-12 w-20 object-cover" />
                  </button>
                ))}
              </div>
            ) : null}
          </div>
        ) : null}

        <div className="flex-1">
          <div className="flex items-start justify-between gap-3">
            <div>
              <h3 className="text-lg font-semibold text-ink-900 dark:text-white">{project.title}</h3>
              <p className="mt-2 text-sm leading-7 text-ink-700 dark:text-white/70">{project.description}</p>
            </div>
          </div>

          <div className="mt-4 flex flex-wrap gap-2">
            {project.tech?.map((t) => (
              <span key={t} className="badge">
                {t}
              </span>
            ))}
          </div>

          <div className="mt-5 flex flex-wrap gap-2">
            <LinkButton href={links.live}>Live</LinkButton>
            <LinkButton href={links.source}>Source</LinkButton>
            <LinkButton href={links.backend}>Backend</LinkButton>
          </div>
        </div>
      </div>
    </div>
  );
}

