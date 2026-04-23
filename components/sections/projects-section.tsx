'use client';

import { motion } from 'framer-motion';
import { ArrowUpRight, PlayCircle } from 'lucide-react';
import { FaInstagram } from 'react-icons/fa';
import { SectionHeading } from '@/components/ui/section-heading';
import { projects, contactDetails } from '@/lib/site-data';

export function ProjectsSection() {
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
              className="overflow-hidden rounded-[2rem] border border-brand-line bg-white shadow-[0_24px_70px_rgba(0,0,0,0.05)]"
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
                    <h3 className="mt-4 font-serif text-4xl leading-none sm:text-5xl">
                      {project.title}
                    </h3>
                    <p className="mt-5 text-base leading-8 text-brand-muted">
                      {project.description}
                    </p>
                  </div>

                  <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                    <a
                      href={contactDetails.instagramHref}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 rounded-full border border-brand-line px-6 py-3 text-sm font-semibold uppercase tracking-[0.12em] text-brand-text transition-colors hover:border-brand-accent hover:text-brand-accent"
                    >
                      <FaInstagram className="h-4 w-4" />
                      Ver no Instagram
                    </a>
                    <a
                      href="#contacto"
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
    </section>
  );
}