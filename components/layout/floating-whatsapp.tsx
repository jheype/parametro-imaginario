'use client';

import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';
import { contactDetails } from '@/lib/site-data';

export function FloatingWhatsApp() {
  return (
    <motion.a
      href={contactDetails.whatsappHref}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar no WhatsApp"
      initial={{ opacity: 0, scale: 0.7, y: 24 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.6 }}
      className="fixed bottom-5 right-5 z-40 inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_20px_40px_rgba(37,211,102,0.35)] transition-transform hover:scale-105"
    >
      <MessageCircle className="h-6 w-6" />
    </motion.a>
  );
}