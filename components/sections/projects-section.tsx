'use client';

import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowUpRight, PlayCircle, X } from 'lucide-react';
import { FaInstagram } from 'react-icons/fa';
import { SectionHeading } from '@/components/ui/section-heading';
import { projects, contactDetails } from '@/lib/site-data';

export function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState<(typeof projects)[number] | null>(null);

  useEffect(() => {
    if (!selectedProject) return;

    document.body.style.overflow = 'hidden';

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setSelectedProject(null);
    };

    window.addEventListener('keydown', closeOnEscape);

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', closeOnEscape);
    };
  }, [selectedProject]);

  return (
    <section id="projetos" className="border-b border-brand-line py-12 sm:py-16">
      <div className="container-shell">
        <SectionHeading
          eyebrow="Projetos"
          title={
            <>
              Projetos reais que mostram a evolução da obra e a qualidade do acabamento final.
            </>
          }
          description={
            <>
              Aqui apresentamos exemplos de remodelações e intervenções concluídas, com comparações visuais que ajudam a perceber a transformação de cada espaço.
            </>
          }
        />

        <div className="mt-14 grid gap-8">
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 60, scale: 0.97, filter: 'blur(10px)' }}
              whileInView={{ opacity: 1, y: 0, scale: 1, filter: 'blur(0px)' }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{
                duration: 0.95,
                delay: index * 0.12,
                ease: [0.16, 1, 0.3, 1],
              }}
              onClick={() => setSelectedProject(project)}
              onKeyDown={(event) => {
                if (event.key === 'Enter' || event.key === ' ') {
                  event.preventDefault();
                  setSelectedProject(project);
                }
              }}
              role="button"
              tabIndex={0}
              aria-label={`Ver detalhes do projeto ${project.title}`}
              className="cursor-pointer overflow-hidden rounded-[2rem] border border-brand-line bg-white text-left shadow-[0_24px_70px_rgba(0,0,0,0.05)] outline-none transition-transform focus-visible:ring-2 focus-visible:ring-brand-accent focus-visible:ring-offset-4"
            >
              <div className="grid lg:grid-cols-[1.1fr_0.9fr]">
                  <div className="grid gap-0 sm:grid-cols-2">
                    <div className="relative overflow-hidden">
                      <img
                        src={project.beforeImage}
                        alt={`${project.title} antes`}
                        className="h-[280px] w-full object-cover grayscale transition-transform duration-700 hover:scale-105 sm:h-[380px]"
                      />
                      <div className="absolute left-4 top-4 rounded-full bg-black/65 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.18em] text-white">
                        Antes
                      </div>
                    </div>

                    <div className="relative overflow-hidden">
                      <img
                        src={project.afterImage}
                        alt={`${project.title} depois`}
                        className="h-[280px] w-full object-cover transition-transform duration-700 hover:scale-105 sm:h-[380px]"
                      />
                      <div className="absolute left-4 top-4 rounded-full bg-brand-accent px-3 py-1 text-[10px] font-bold uppercase tracking-[0.18em] text-white">
                        Depois
                      </div>
                      <div className="absolute bottom-4 right-4 flex items-center gap-2 rounded-full bg-white/90 px-4 py-2 text-xs font-semibold uppercase tracking-[0.12em] text-brand-text backdrop-blur-sm">
                        <PlayCircle className="h-4 w-4 text-brand-accent" />
                        {project.videoLabel}
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col justify-between p-7 sm:p-9">
                    <div>
                      <p className="text-xs font-bold uppercase tracking-[0.26em] text-brand-accent">
                        {project.category}
                      </p>
                      <h3 className="mt-4 font-serif text-4xl leading-none text-brand-heading sm:text-5xl">
                        {project.title}
                      </h3>
                      <p className="mt-5 text-base leading-8 text-brand-muted">
                        {project.description}
                      </p>
                      <p className="mt-5 text-sm font-semibold uppercase tracking-[0.12em] text-brand-accent">
                        Clique para ver mais detalhes
                      </p>
                    </div>

                    <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                      <a
                        href={contactDetails.instagramHref}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(event) => event.stopPropagation()}
                        onKeyDown={(event) => event.stopPropagation()}
                        className="inline-flex items-center justify-center gap-2 rounded-full border border-brand-line px-6 py-3 text-sm font-semibold uppercase tracking-[0.12em] text-brand-text transition-colors hover:border-brand-accent hover:text-brand-accent"
                      >
                        <FaInstagram className="h-4 w-4" />
                        Ver no Instagram
                      </a>
                      <a
                        href="#contacto"
                        onClick={(event) => event.stopPropagation()}
                        onKeyDown={(event) => event.stopPropagation()}
                        className="inline-flex items-center justify-center gap-2 rounded-full bg-brand-accent px-6 py-3 text-sm font-semibold uppercase tracking-[0.12em] text-white transition-colors hover:bg-brand-accent-strong"
                      >
                        Pedir algo semelhante
                        <ArrowUpRight className="h-4 w-4" />
                      </a>
                    </div>
                  </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedProject && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/35 px-4 py-6 backdrop-blur-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              role="dialog"
              aria-modal="true"
              aria-label={selectedProject.title}
              initial={{ opacity: 0, y: 28, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 28, scale: 0.97 }}
              transition={{ duration: 0.25 }}
              onClick={(event) => event.stopPropagation()}
              className="relative max-h-[90vh] w-full max-w-5xl overflow-y-auto rounded-[1.75rem] border border-brand-line bg-[#F7F4EE] p-4 shadow-[0_24px_80px_rgba(0,0,0,0.18)] sm:p-6"
            >
              <button
                type="button"
                onClick={() => setSelectedProject(null)}
                aria-label="Fechar projeto"
                className="absolute right-4 top-4 z-10 rounded-full border border-brand-line bg-white/90 p-2 text-brand-text shadow-sm transition-colors hover:text-brand-accent"
              >
                <X className="h-5 w-5" />
              </button>

              <div className="grid gap-5 lg:grid-cols-[1.4fr_0.8fr]">
                <img
                  src={selectedProject.afterImage}
                  alt={selectedProject.title}
                  className="h-72 w-full rounded-[1.2rem] object-cover sm:h-80"
                />

                <div className="flex flex-col justify-center pr-8">
                  <p className="text-xs font-semibold uppercase tracking-[0.22em] text-brand-accent">
                    {selectedProject.category}
                  </p>

                  <h3 className="mt-3 text-2xl font-semibold text-brand-heading sm:text-3xl">
                    {selectedProject.title}
                  </h3>

                  <p className="mt-4 text-sm leading-7 text-brand-muted">
                    {selectedProject.description}
                  </p>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {selectedProject.badges.map((badge) => (
                      <span
                        key={badge}
                        className="rounded-full border border-brand-line bg-white px-3 py-1 text-xs font-semibold text-brand-text"
                      >
                        {badge}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {selectedProject.images.map((image, index) => (
                  <img
                    key={`${image}-${index}`}
                    src={image}
                    alt={`${selectedProject.title} - imagem ${index + 1}`}
                    className="h-56 w-full rounded-[1.1rem] object-cover"
                  />
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
