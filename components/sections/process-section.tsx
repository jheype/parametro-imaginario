import { FadeIn } from '@/components/ui/fade-in';
import { SectionHeading } from '@/components/ui/section-heading';
import { processItems } from '@/lib/site-data';

export function ProcessSection() {
  return (
    <section id="processo" className="border-b border-brand-line py-24 sm:py-32">
      <div className="container-shell">
        <SectionHeading
          eyebrow="Processo"
          title={
            <>
              Um acompanhamento claro, organizado e pensado para dar segurança ao cliente em cada etapa da obra.
            </>
          }
          description={
            <>
              Desde o primeiro contacto até à execução final, trabalhamos com
              atenção, transparência e compromisso, para que cada fase decorra
              com confiança e boa orientação.
            </>
          }
        />

        <div className="mt-14 grid gap-5 lg:grid-cols-4">
          {processItems.map((item, index) => (
            <FadeIn
              key={item.title}
              delay={index * 0.08}
              className="relative rounded-[1.8rem] border border-brand-line bg-white p-6 shadow-[0_14px_40px_rgba(0,0,0,0.04)]"
            >
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-full bg-brand-accent font-serif text-xl text-white">
                {index + 1}
              </div>
              <h3 className="font-serif text-3xl leading-none">{item.title}</h3>
              <p className="mt-4 text-base leading-8 text-brand-muted">
                {item.description}
              </p>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}