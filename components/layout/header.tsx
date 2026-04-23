'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { Menu, Phone, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { contactDetails, navItems } from '@/lib/site-data';
import { SiteButton } from '@/components/ui/site-button';

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <>
      <header
        className={[
          'fixed inset-x-0 top-0 z-50 transition-all duration-300',
          scrolled
            ? 'border-b border-brand-line bg-brand-background/85 backdrop-blur-xl'
            : 'bg-transparent',
        ].join(' ')}
      >
        <div className="container-shell flex h-20 items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <div className="relative h-12 w-12 overflow-hidden rounded-full border border-brand-line bg-white shadow-sm">
              <Image
                src="/logo-png.png"
                alt="Logo Parametro Imaginario"
                fill
                className="object-contain p-1"
                priority
              />
            </div>

            <div>
              <p className="font-serif text-2xl leading-none">
                Parametro Imaginario
              </p>
              <p className="mt-1 text-[11px] uppercase tracking-[0.22em] text-brand-muted">
                Construção e remodelação
              </p>
            </div>
          </Link>

          <nav className="hidden items-center gap-7 lg:flex">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-brand-muted transition-colors hover:text-brand-text"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="hidden items-center gap-3 lg:flex">
            <SiteButton href={contactDetails.phoneHref} variant="outline">
              <Phone className="h-4 w-4" />
              Ligar
            </SiteButton>

            <SiteButton
              href={contactDetails.whatsappHref}
              variant="secondary"
              external
            >
              WhatsApp
            </SiteButton>
          </div>

          <button
            type="button"
            onClick={() => setOpen(true)}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-brand-line bg-white text-brand-text lg:hidden"
            aria-label="Abrir menu"
          >
            <Menu className="h-5 w-5" />
          </button>
        </div>
      </header>

      <AnimatePresence>
        {open ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-black/45 backdrop-blur-sm lg:hidden"
          >
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="ml-auto flex h-full w-[86vw] max-w-sm flex-col bg-brand-surface p-6 shadow-2xl"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="relative h-11 w-11 overflow-hidden rounded-full border border-brand-line bg-white shadow-sm">
                    <Image
                      src="/logo-png.png"
                      alt="Logo Parametro Imaginario"
                      fill
                      className="object-contain p-1"
                    />
                  </div>

                  <div>
                    <p className="font-serif text-2xl">Parametro Imaginario</p>
                    <p className="mt-1 text-xs uppercase tracking-[0.22em] text-brand-muted">
                      Lisboa e região
                    </p>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-brand-line"
                  aria-label="Fechar menu"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              <div className="mt-10 flex flex-1 flex-col gap-2">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="rounded-2xl px-4 py-3 text-base font-medium text-brand-text transition-colors hover:bg-brand-soft"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>

              <div className="grid gap-3">
                <SiteButton href={contactDetails.phoneHref} variant="outline">
                  <Phone className="h-4 w-4" />
                  {contactDetails.phoneDisplay}
                </SiteButton>

                <SiteButton
                  href={contactDetails.whatsappHref}
                  variant="secondary"
                  external
                >
                  Falar no WhatsApp
                </SiteButton>
              </div>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}