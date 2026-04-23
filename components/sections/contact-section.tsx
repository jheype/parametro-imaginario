'use client';

import { useMemo, useRef, useState } from 'react';
import { Loader2, MapPin, MessageCircle, Phone, CheckCircle2, AlertCircle } from 'lucide-react';
import { FaInstagram } from 'react-icons/fa';
import { contactDetails } from '@/lib/site-data';
import { SectionHeading } from '@/components/ui/section-heading';
import { FadeIn } from '@/components/ui/fade-in';
import { SiteButton } from '@/components/ui/site-button';

type ToastState = {
  type: 'success' | 'error' | null;
  message: string;
};

function sanitizeInput(value: string) {
  return value
    .replace(/<script[\s\S]*?>[\s\S]*?<\/script>/gi, '')
    .replace(/[<>]/g, '')
    .trim();
}

export function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [toast, setToast] = useState<ToastState>({ type: null, message: '' });
  const lastSubmitRef = useRef<number>(0);

  const toastStyles = useMemo(() => {
    if (toast.type === 'success') {
      return 'border-emerald-200 bg-emerald-50 text-emerald-800';
    }

    if (toast.type === 'error') {
      return 'border-red-200 bg-red-50 text-red-800';
    }

    return '';
  }, [toast.type]);

  const showToast = (type: 'success' | 'error', message: string) => {
    setToast({ type, message });
    window.clearTimeout((showToast as unknown as { timer?: number }).timer);
    (showToast as unknown as { timer?: number }).timer = window.setTimeout(() => {
      setToast({ type: null, message: '' });
    }, 4500);
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const now = Date.now();
    if (now - lastSubmitRef.current < 8000) {
      showToast('error', 'Aguarde alguns segundos antes de enviar novamente.');
      return;
    }

    const form = event.currentTarget;
    const formData = new FormData(form);

    const honey = String(formData.get('website') || '').trim();
    if (honey) {
      showToast('success', 'Pedido enviado com sucesso.');
      form.reset();
      return;
    }

    const nome = sanitizeInput(String(formData.get('nome') || ''));
    const telefone = sanitizeInput(String(formData.get('telefone') || ''));
    const email = sanitizeInput(String(formData.get('email') || ''));
    const local = sanitizeInput(String(formData.get('local') || ''));
    const servico = sanitizeInput(String(formData.get('servico') || ''));
    const prazo = sanitizeInput(String(formData.get('prazo') || ''));
    const descricao = sanitizeInput(String(formData.get('descricao') || ''));

    if (!nome || !telefone || !email || !descricao) {
      showToast('error', 'Preencha os campos obrigatórios para enviar o pedido.');
      return;
    }

    const emailIsValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    if (!emailIsValid) {
      showToast('error', 'Introduza um email válido.');
      return;
    }

    setIsSubmitting(true);

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          nome,
          telefone,
          email,
          local,
          servico,
          prazo,
          descricao,
          website: honey,
        }),
      });

      if (!res.ok) {
        showToast('error', 'Não foi possível enviar o pedido. Tente novamente.');
        return;
      }

      lastSubmitRef.current = Date.now();
      form.reset();
      showToast('success', 'Pedido enviado com sucesso. Entraremos em contacto em breve.');
    } catch {
      showToast('error', 'Erro de ligação. Verifique a conexão e tente novamente.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contacto" className="py-12 sm:py-16">
      <div className="container-shell grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <SectionHeading
            eyebrow="Contacto"
            title={<>Fale connosco e explique o que pretende fazer no seu imóvel.</>}
            description={
              <>
                Pode entrar em contacto por telefone, WhatsApp ou através do formulário.
                Respondemos com rapidez e, após a visita ao imóvel, enviamos o orçamento
                com clareza e dentro do prazo definido.
              </>
            }
          />

          <div className="mt-10 space-y-5">
            <FadeIn className="rounded-[1.8rem] border border-brand-line bg-white p-6">
              <p className="text-xs font-bold uppercase tracking-[0.26em] text-brand-accent">
                Orçamento
              </p>
              <p className="mt-4 text-base leading-8 text-brand-muted">
                Após a visita ao imóvel, o orçamento é preparado e enviado em média até 3 dias,
                com detalhe e alinhamento com o trabalho a realizar.
              </p>
            </FadeIn>

            <div className="grid gap-4 sm:grid-cols-2">
              <a
                href={contactDetails.phoneHref}
                className="rounded-[1.6rem] border border-brand-line bg-white p-5 transition-colors hover:border-brand-accent"
              >
                <Phone className="h-5 w-5 text-brand-accent" />
                <p className="mt-4 text-xs font-bold uppercase tracking-[0.24em] text-brand-muted">
                  Telefone
                </p>
                <p className="mt-2 font-serif text-2xl">{contactDetails.phoneDisplay}</p>
                <p className="mt-1 text-sm text-brand-muted">Chamada direta</p>
              </a>

              <a
                href={contactDetails.whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-[1.6rem] border border-brand-line bg-white p-5 transition-colors hover:border-brand-accent"
              >
                <MessageCircle className="h-5 w-5 text-brand-accent" />
                <p className="mt-4 text-xs font-bold uppercase tracking-[0.24em] text-brand-muted">
                  WhatsApp
                </p>
                <p className="mt-2 font-serif text-2xl">Enviar mensagem</p>
                <p className="mt-1 text-sm text-brand-muted">Resposta rápida</p>
              </a>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-[1.6rem] border border-brand-line bg-white p-5">
                <MapPin className="h-5 w-5 text-brand-accent" />
                <p className="mt-4 text-xs font-bold uppercase tracking-[0.24em] text-brand-muted">
                  Atuação
                </p>
                <p className="mt-2 text-base leading-7 text-brand-text">{contactDetails.region}</p>
                <p className="mt-1 text-sm text-brand-muted">Trabalhamos em toda a região</p>
              </div>

              <a
                href={contactDetails.instagramHref}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-[1.6rem] border border-brand-line bg-white p-5 transition-colors hover:border-brand-accent"
              >
                <FaInstagram className="h-5 w-5 text-brand-accent" />
                <p className="mt-4 text-xs font-bold uppercase tracking-[0.24em] text-brand-muted">
                  Instagram
                </p>
                <p className="mt-2 text-base leading-7 text-brand-text">
                  Ver projetos e trabalhos recentes
                </p>
              </a>
            </div>
          </div>
        </div>

        <FadeIn className="rounded-[2rem] border border-brand-line bg-white p-7 shadow-[0_22px_60px_rgba(0,0,0,0.05)] sm:p-9">
          <div className="relative">
            {toast.type ? (
              <div
                className={`mb-5 flex items-start gap-3 rounded-2xl border px-4 py-3 text-sm ${toastStyles}`}
                role="status"
                aria-live="polite"
              >
                {toast.type === 'success' ? (
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0" />
                ) : (
                  <AlertCircle className="mt-0.5 h-5 w-5 shrink-0" />
                )}
                <p>{toast.message}</p>
              </div>
            ) : null}

            <form className="grid gap-5" onSubmit={handleSubmit} noValidate>
              <input
                type="text"
                name="website"
                tabIndex={-1}
                autoComplete="off"
                className="hidden"
                aria-hidden="true"
              />

              <div className="grid gap-5 md:grid-cols-2">
                <label className="grid gap-2 text-sm font-medium text-brand-text">
                  Nome
                  <input
                    name="nome"
                    type="text"
                    required
                    placeholder="Ex: João Silva"
                    autoComplete="name"
                    className="rounded-2xl border border-brand-line bg-brand-surface px-4 py-3 text-brand-text outline-none transition-colors placeholder:text-brand-muted/70 focus:border-brand-accent"
                  />
                </label>

                <label className="grid gap-2 text-sm font-medium text-brand-text">
                  Telefone / WhatsApp
                  <input
                    name="telefone"
                    type="tel"
                    required
                    placeholder="Ex: +351 912 345 678"
                    autoComplete="tel"
                    className="rounded-2xl border border-brand-line bg-brand-surface px-4 py-3 text-brand-text outline-none transition-colors placeholder:text-brand-muted/70 focus:border-brand-accent"
                  />
                </label>
              </div>

              <div className="grid gap-5 md:grid-cols-2">
                <label className="grid gap-2 text-sm font-medium text-brand-text">
                  Email
                  <input
                    name="email"
                    type="email"
                    required
                    placeholder="Ex: nome@email.com"
                    autoComplete="email"
                    className="rounded-2xl border border-brand-line bg-brand-surface px-4 py-3 text-brand-text outline-none transition-colors placeholder:text-brand-muted/70 focus:border-brand-accent"
                  />
                </label>

                <label className="grid gap-2 text-sm font-medium text-brand-text">
                  Local da obra
                  <input
                    name="local"
                    type="text"
                    placeholder="Ex: Lisboa, Cascais ou arredores"
                    className="rounded-2xl border border-brand-line bg-brand-surface px-4 py-3 text-brand-text outline-none transition-colors placeholder:text-brand-muted/70 focus:border-brand-accent"
                  />
                </label>
              </div>

              <div className="grid gap-5 md:grid-cols-2">
                <label className="grid gap-2 text-sm font-medium text-brand-text">
                  Tipo de serviço
                  <select
                    name="servico"
                    className="rounded-2xl border border-brand-line bg-brand-surface px-4 py-3 text-brand-text outline-none transition-colors focus:border-brand-accent"
                    defaultValue="Remodelação"
                  >
                    <option>Construção de raiz</option>
                    <option>Remodelação</option>
                    <option>Reforma</option>
                    <option>Acabamentos</option>
                    <option>Outro</option>
                  </select>
                </label>

                <label className="grid gap-2 text-sm font-medium text-brand-text">
                  Prazo pretendido
                  <input
                    name="prazo"
                    type="text"
                    placeholder="Ex: O mais breve possível"
                    className="rounded-2xl border border-brand-line bg-brand-surface px-4 py-3 text-brand-text outline-none transition-colors placeholder:text-brand-muted/70 focus:border-brand-accent"
                  />
                </label>
              </div>

              <label className="grid gap-2 text-sm font-medium text-brand-text">
                Descrição do pedido
                <textarea
                  name="descricao"
                  rows={6}
                  required
                  placeholder="Descreva resumidamente o tipo de obra, o estado atual do espaço e o que pretende melhorar."
                  className="resize-none rounded-3xl border border-brand-line bg-brand-surface px-4 py-4 text-brand-text outline-none transition-colors placeholder:text-brand-muted/70 focus:border-brand-accent"
                />
              </label>

              <div className="flex flex-col gap-4 pt-2 sm:flex-row">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-brand-accent px-6 py-3 text-sm font-semibold uppercase tracking-[0.12em] text-white transition-colors hover:bg-brand-accent-strong disabled:cursor-not-allowed disabled:opacity-70 sm:w-auto"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="h-4 w-4 animate-spin" />
                      A enviar...
                    </>
                  ) : (
                    'Solicitar orçamento'
                  )}
                </button>

                <SiteButton
                  href={contactDetails.whatsappHref}
                  variant="outline"
                  external
                  className="w-full sm:w-auto"
                >
                  Falar no WhatsApp
                </SiteButton>
              </div>
            </form>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}