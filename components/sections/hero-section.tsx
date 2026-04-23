'use client';

import { motion } from 'framer-motion';
import { ArrowRight, MessageCircle, Phone } from 'lucide-react';
import { featureStats, heroVideo } from '@/lib/site-data';
import { SiteButton } from '@/components/ui/site-button';
import { contactDetails } from '@/lib/site-data';

export function HeroSection() {
  return (
    <section id="inicio" className="relative overflow-hidden border-b border-brand-line pt-28">
      <div className="absolute inset-0 hero-grid opacity-70" />
      <div className="container-shell relative grid min-h-[calc(100svh-7rem)] items-center gap-12 py-12 lg:grid-cols-[1.1fr_0.9fr] lg:py-16">
        <div className="relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="section-eyebrow">35 anos no Brasil • 6 anos em Portugal</span>
            <h1 className="max-w-4xl font-serif text-5xl leading-none sm:text-6xl lg:text-8xl">
              Construção e remodelação com uma apresentação que <span className="italic text-brand-accent">mostra a transformação</span>.
            </h1>
            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <SiteButton href="#contacto" variant="secondary">
                Pedir orçamento
                <ArrowRight className="h-4 w-4" />
              </SiteButton>
              <SiteButton href={contactDetails.whatsappHref} variant="outline" external>
                <MessageCircle className="h-4 w-4" />
                Falar no WhatsApp
              </SiteButton>
              <SiteButton href={contactDetails.phoneHref} variant="outline">
                <Phone className="h-4 w-4" />
                Ligar agora
              </SiteButton>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.18 }}
            className="mt-12 grid gap-4 sm:grid-cols-2 xl:grid-cols-4"
          >
            {featureStats.map((item) => (
              <div key={item.label} className="rounded-3xl border border-brand-line bg-white/65 p-5 shadow-[0_15px_40px_rgba(0,0,0,0.04)] backdrop-blur-sm">
                <p className="font-serif text-3xl text-brand-accent">{item.value}</p>
                <p className="mt-2 text-sm leading-6 text-brand-muted">{item.label}</p>
              </div>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, x: 36 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="relative lg:-mt-96"
        >
          <div className="absolute -left-8 top-10 hidden h-28 w-28 rounded-full bg-brand-accent/20 blur-3xl lg:block" />
          <div className="relative h-[560px] overflow-hidden rounded-[2rem] border border-black/10 bg-brand-panel shadow-[0_30px_100px_rgba(0,0,0,0.18)]">
            <div className="absolute inset-0 z-10 bg-gradient-to-tr from-black/70 via-black/15 to-transparent" />

            {heroVideo.src ? (
              <video
                className="absolute inset-0 h-full w-full object-cover origin-top [object-position:center_20%]"
                autoPlay
                muted
                loop
                playsInline
                poster={heroVideo.poster}
              >
                <source src={heroVideo.src} />
              </video>
            ) : (
              <img src={heroVideo.poster} alt="Construção em evolução" className="absolute inset-0 h-full w-full object-cover object-top" />
            )}

            <motion.div
              animate={{ y: ['0%', '100%', '0%'] }}
              transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute inset-x-0 top-0 z-20 h-24 bg-gradient-to-b from-brand-accent/28 via-brand-accent/6 to-transparent blur-xl"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}