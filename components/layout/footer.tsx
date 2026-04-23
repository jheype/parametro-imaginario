import { MapPin, MessageCircle, Phone } from 'lucide-react';
import { FaInstagram } from "react-icons/fa"
import { contactDetails, navItems } from '@/lib/site-data';

export function Footer() {
  return (
    <footer className="border-t border-brand-line bg-brand-panel py-16 text-white">
      <div className="container-shell grid gap-12 lg:grid-cols-[1.1fr_0.6fr_0.8fr]">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.28em] text-brand-accent">
            Parametro Imaginario Unipessoal LDA
          </p>
          <h2 className="mt-5 font-serif text-4xl leading-none sm:text-5xl">
            Construção, remodelação e confiança em cada etapa.
          </h2>
          <p className="mt-5 max-w-2xl text-base leading-8 text-white/70">
            Empresa com 6 anos em Portugal e 35 anos de história no Brasil como
            Construtora Moura, focada em clareza, compromisso e tranquilidade
            para o cliente.
          </p>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-white/55">
            Navegação
          </p>
          <div className="mt-5 grid gap-3">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-base text-white/72 transition-colors hover:text-white"
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-white/55">
            Contactos
          </p>
          <div className="mt-5 grid gap-4">
            <a
              href={contactDetails.phoneHref}
              className="flex items-center gap-3 text-white/72 transition-colors hover:text-white"
            >
              <Phone className="h-4 w-4 text-brand-accent" />
              {contactDetails.phoneDisplay}
            </a>
            <a
              href={contactDetails.whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-white/72 transition-colors hover:text-white"
            >
              <MessageCircle className="h-4 w-4 text-brand-accent" />
              WhatsApp
            </a>
            <a
              href={contactDetails.instagramHref}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-white/72 transition-colors hover:text-white"
            >
              <FaInstagram className="h-4 w-4 text-brand-accent" />
              Instagram
            </a>
            <div className="flex items-center gap-3 text-white/72">
              <MapPin className="h-4 w-4 text-brand-accent" />
              {contactDetails.region}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}