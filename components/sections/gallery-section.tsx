'use client';

import { motion } from 'framer-motion';
import { FaInstagram } from "react-icons/fa"
import { SectionHeading } from '@/components/ui/section-heading';
import { galleryImages, contactDetails } from '@/lib/site-data';

export function GallerySection() {
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
          {galleryImages.map((image, index) => (
            <motion.div
              key={`${image}-${index}`}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.65, delay: index * 0.04 }}
              className="mb-5 overflow-hidden rounded-[1.8rem] border border-brand-line bg-white shadow-[0_14px_40px_rgba(0,0,0,0.04)]"
            >
              <img
                src={image}
                alt={`Projeto ${index + 1}`}
                className="w-full object-cover transition-transform duration-700 hover:scale-[1.03]"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}