import { FadeIn } from '@/components/ui/fade-in';
import { SectionHeading } from '@/components/ui/section-heading';
import { trustItems } from '@/lib/site-data';

export default function AboutPage() {
  return (
    <section id="sobre" className="border-b border-brand-line py-12 sm:py-16 mt-16">
      <div className="container-shell grid gap-14 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <SectionHeading
            eyebrow="Sobre a empresa"
            title={
              <>
                Uma história construída com experiência, clareza e respeito pelo
                cliente.
              </>
            }
            description={
              <>
                A Parametro Imaginario Unipessoal LDA atua há 6 anos em Portugal
                e traz 35 anos de experiência no Brasil como Construtora Moura.
                O foco é simples: fazer bem, explicar com honestidade e deixar o
                cliente tranquilo ao longo de todo o processo.
              </>
            }
          />
        </div>

        <div className="grid gap-5">
          {trustItems.map((item, index) => {
            const Icon = item.icon;

            return (
              <FadeIn
                key={item.title}
                delay={index * 0.08}
                className="rounded-[1.8rem] border border-brand-line bg-white p-6 shadow-[0_18px_50px_rgba(0,0,0,0.04)]"
              >
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-brand-soft text-brand-accent">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-serif text-3xl leading-none">
                      {item.title}
                    </h3>
                    <p className="mt-4 text-base leading-8 text-brand-muted">
                      {item.description}
                    </p>
                  </div>
                </div>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}