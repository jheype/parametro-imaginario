'use client';

import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { X } from 'lucide-react';
import { FaInstagram } from 'react-icons/fa';
import { SectionHeading } from '@/components/ui/section-heading';
import { contactDetails, galleryProjects } from '@/lib/site-data';

export function GallerySection() {
  const [selectedProject, setSelectedProject] = useState<(typeof galleryProjects)[number] | null>(null);

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
    <section className="border-b border-brand-line py-12 sm:py-16">
      <div className="container-shell">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            eyebrow="Galeria"
            title={<>Fotografias reais para mostrar detalhe, acabamento e a qualidade do resultado final.</>}
            description={
              <>
                Nesta galeria apresentamos espaços remodelados, interiores concluídos e detalhes de execução que ajudam a perceber o cuidado colocado em cada projeto.
              </>
            }
            className="max-w-4xl"
          />

          <a
            href={contactDetails.instagramHref}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 self-start rounded-full border border-brand-line px-6 py-3 text-sm font-semibold uppercase tracking-[0.12em] text-brand-text transition-colors hover:border-brand-accent hover:text-brand-accent"
          >
            <FaInstagram className="h-4 w-4" />
            Ver mais no Instagram
          </a>
        </div>

        <div className="mt-14 columns-1 gap-5 sm:columns-2 xl:columns-3">
          {galleryProjects.map((project, index) => (
            <motion.button
              key={project.title}
              type="button"
              onClick={() => setSelectedProject(project)}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.65, delay: index * 0.04 }}
              className="mb-5 block w-full overflow-hidden rounded-[1.8rem] border border-brand-line bg-white text-left shadow-[0_14px_40px_rgba(0,0,0,0.04)]"
            >
              <img
                src={project.coverImage}
                alt={project.title}
                className="w-full object-cover transition-transform duration-700 hover:scale-[1.03]"
              />
            </motion.button>
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
                aria-label="Fechar galeria"
                className="absolute right-4 top-4 z-10 rounded-full border border-brand-line bg-white/90 p-2 text-brand-text shadow-sm transition-colors hover:text-brand-accent"
              >
                <X className="h-5 w-5" />
              </button>

              <div className="grid gap-5 lg:grid-cols-[1.4fr_0.8fr]">
                <img
                  src={selectedProject.coverImage}
                  alt={selectedProject.title}
                  className="h-72 w-full rounded-[1.2rem] object-cover sm:h-80"
                />

                <div className="flex flex-col justify-center pr-8">
                  <p className="text-xs font-semibold uppercase tracking-[0.22em] text-brand-accent">
                    Projeto
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