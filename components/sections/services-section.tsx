import { FadeIn } from '@/components/ui/fade-in';
import { SectionHeading } from '@/components/ui/section-heading';
import { serviceItems } from '@/lib/site-data';

export function ServicesSection() {
  return (
    <section id="servicos" className="border-b border-brand-line py-24 sm:py-32">
      <div className="container-shell">
        <SectionHeading
          eyebrow="Serviços"
          title={
            <>
              Soluções completas em construção, remodelação e reabilitação, com acompanhamento sério do início ao fim.
            </>
          }
          description={
            <>
              Trabalhamos com diferentes tipos de intervenção, sempre com foco na boa execução, na clareza do processo e na qualidade final de cada espaço.
            </>
          }
        />

        <div className="mt-14 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {serviceItems.map((item, index) => {
            const Icon = item.icon;

            return (
              <FadeIn
                key={item.title}
                delay={index * 0.06}
                className="rounded-[1.8rem] border border-brand-line bg-white p-6 shadow-[0_16px_40px_rgba(0,0,0,0.04)]"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-soft text-brand-accent">
                  <Icon className="h-5 w-5" />
                </div>

                <h3 className="mt-6 font-serif text-3xl leading-none">
                  {item.title}
                </h3>

                <p className="mt-4 text-base leading-8 text-brand-muted">
                  {item.description}
                </p>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}