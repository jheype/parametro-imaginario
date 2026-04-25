'use client';

import { motion, useScroll, useTransform, type MotionValue } from 'framer-motion';
import { useRef } from 'react';

const phases = [
  {
    title: 'Estado inicial',
    text: 'A secção pode começar com o imóvel original, um terreno vazio ou um espaço desatualizado.',
    image: '/before-three.jpeg',
  },
  {
    title: 'Estrutura a ganhar forma',
    text: 'À medida que o utilizador faz scroll, a narrativa visual mostra a obra a avançar.',
    image: '/after-three.jpeg',
  },
  {
    title: 'Resultado final',
    text: 'No fim, o cliente vê o resultado pronto, mais fotos e o CTA para pedir contacto.',
    image: '/after-three.jpeg',
  },
];

type StoryPhaseProps = {
  title: string;
  text: string;
  image: string;
  progress: MotionValue<number>;
  start: number;
  end: number;
};

function StoryPhase({ title, text, image, progress, start, end }: StoryPhaseProps) {
  const opacity = useTransform(progress, [start, start + 0.1, end - 0.1, end], [0, 1, 1, 0]);
  const scale = useTransform(progress, [start, end], [1.08, 1]);
  const textY = useTransform(progress, [start, end], [40, -30]);

  return (
    <motion.div style={{ opacity }} className="absolute inset-0">
      <motion.img
        src={image}
        alt={title}
        style={{ scale }}
        className="h-full w-full object-cover opacity-65"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/25 to-black/80" />

      <div className="container-shell relative z-10 flex h-full items-center justify-center text-center">
        <motion.div style={{ y: textY }} className="max-w-4xl text-white">
          <p className="text-xs font-bold uppercase tracking-[0.35em] text-brand-accent">
            Storytelling visual
          </p>
          <h2 className="mt-6 font-serif text-5xl leading-none sm:text-6xl lg:text-8xl">
            {title}
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-white/72">
            {text}
          </p>
        </motion.div>
      </div>
    </motion.div>
  );
}

type ProgressIndicatorProps = {
  progress: MotionValue<number>;
  start: number;
  end: number;
};

function ProgressIndicator({ progress, start, end }: ProgressIndicatorProps) {
  const scaleX = useTransform(progress, [start, end], [0.2, 1]);

  return (
    <motion.div
      style={{ scaleX }}
      className="h-1 w-16 origin-left rounded-full bg-brand-accent"
    />
  );
}

export function ScrollStorySection() {
  const ref = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end end'],
  });

  return (
    <section ref={ref} className="relative h-[300vh] border-b border-brand-line bg-brand-panel">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        {phases.map((phase, index) => {
          const start = index / phases.length;
          const end = (index + 1) / phases.length;

          return (
            <StoryPhase
              key={phase.title}
              title={phase.title}
              text={phase.text}
              image={phase.image}
              progress={scrollYProgress}
              start={start}
              end={end}
            />
          );
        })}

        <div className="pointer-events-none absolute bottom-6 left-0 right-0 flex justify-center gap-3">
          {phases.map((phase, index) => {
            const start = index / phases.length;
            const end = (index + 1) / phases.length;

            return (
              <ProgressIndicator
                key={phase.title}
                progress={scrollYProgress}
                start={start}
                end={end}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}