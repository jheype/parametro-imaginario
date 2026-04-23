'use client';

import { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { MoveHorizontal } from 'lucide-react';
import { SectionHeading } from '@/components/ui/section-heading';

export function BeforeAfterShowcase() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [position, setPosition] = useState(50);
  const [dragging, setDragging] = useState(false);

  const updatePosition = (clientX: number) => {
    if (!containerRef.current) return;

    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = (x / rect.width) * 100;

    setPosition(Math.min(100, Math.max(0, percentage)));
  };

  const handleMouseDown = (event: React.MouseEvent<HTMLDivElement>) => {
    setDragging(true);
    updatePosition(event.clientX);
  };

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    if (!dragging) return;
    updatePosition(event.clientX);
  };

  const handleMouseUp = () => {
    setDragging(false);
  };

  const handleMouseLeave = () => {
    setDragging(false);
  };

  const handleTouchStart = (event: React.TouchEvent<HTMLDivElement>) => {
    setDragging(true);
    updatePosition(event.touches[0].clientX);
  };

  const handleTouchMove = (event: React.TouchEvent<HTMLDivElement>) => {
    updatePosition(event.touches[0].clientX);
  };

  const handleTouchEnd = () => {
    setDragging(false);
  };

  return (
    <section className="border-b border-brand-line py-12 sm:py-16">
      <div className="container-shell">
        <SectionHeading
          eyebrow="Transformação real"
          title={
            <>
             Veja a diferença entre o estado inicial do espaço e o resultado final da intervenção.
            </>
          }
          description={
            <>
             Este comparador ajuda a perceber de forma imediata a transformação do imóvel, desde a fase inicial até ao acabamento concluído.
            </>
          }
          align="center"
        />

        <motion.div
          initial={{ opacity: 0, y: 26 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          ref={containerRef}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseLeave}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          className="relative mt-14 overflow-hidden rounded-[2rem] border border-brand-line bg-brand-panel shadow-[0_26px_80px_rgba(0,0,0,0.16)] select-none"
        >
          <img
            src="/after.jpeg"
            alt="Resultado final da obra"
            className="h-[380px] w-full object-cover sm:h-[520px]"
            draggable={false}
          />

          <div
            className="absolute inset-y-0 left-0 overflow-hidden border-r-2 border-brand-accent"
            style={{ width: `${position}%` }}
          >
            <img
              src="/before.jpeg"
              alt="Estado inicial do espaço"
              className="h-[380px] w-full max-w-none object-cover grayscale sm:h-[520px]"
              style={{ width: `${100 / (position / 100 || 1)}%` }}
              draggable={false}
            />

            <div className="absolute left-6 top-6 rounded-full bg-black/60 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-white backdrop-blur-sm">
              Antes
            </div>
          </div>

          <div className="absolute right-6 top-6 rounded-full bg-brand-accent px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-white">
            Depois
          </div>

          <div
            className="absolute inset-y-0 z-20"
            style={{ left: `${position}%`, transform: 'translateX(-50%)' }}
          >
            <div className="relative h-full w-px bg-brand-accent shadow-[0_0_25px_rgba(181,138,66,0.9)]">
              <div className="absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 flex-col items-center gap-3">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-brand-accent text-white shadow-[0_20px_50px_rgba(181,138,66,0.4)]">
                  <MoveHorizontal className="h-5 w-5" />
                </div>

                <span className="rounded-full bg-white px-3 py-1 text-[10px] font-bold uppercase tracking-[0.22em] text-brand-accent">
                  Arraste
                </span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}