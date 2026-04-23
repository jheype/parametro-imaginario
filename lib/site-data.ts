import { Hammer, Home, Paintbrush, Phone, ShieldCheck, TimerReset, Wrench } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

export type NavItem = {
  label: string;
  href: string;
};

export type ServiceItem = {
  title: string;
  description: string;
  icon: LucideIcon;
};

export type ProjectItem = {
  title: string;
  category: string;
  description: string;
  beforeImage: string;
  afterImage: string;
  videoLabel: string;
};

export type ProcessItem = {
  title: string;
  description: string;
};

export const navItems: NavItem[] = [
  { label: 'Início', href: '#inicio' },
  { label: 'Sobre', href: '#sobre' },
  { label: 'Serviços', href: '#servicos' },
  { label: 'Projetos', href: '#projetos' },
  { label: 'Processo', href: '#processo' },
  { label: 'Contacto', href: '#contacto' },
];

export const serviceItems: ServiceItem[] = [
  {
    title: 'Construção de raiz',
    description: 'Executamos obras desde a base até à entrega final, com organização, acompanhamento e compromisso em cada etapa.',
    icon: Home,
  },
  {
    title: 'Remodelações completas',
    description: 'Transformamos interiores antigos em espaços renovados, mais modernos, funcionais e valorizados.',
    icon: Paintbrush,
  },
  {
    title: 'Reformas e reabilitação',
    description: 'Intervimos com rigor técnico e atenção ao detalhe, respeitando o imóvel e o objetivo de cada cliente.',
    icon: Hammer,
  },
  {
    title: 'Acabamentos',
    description: 'Cuidamos dos detalhes finais com foco na estética, qualidade e boa execução do espaço.',
    icon: Wrench,
  },
];

export const featureStats = [
  { value: '35 anos', label: 'de experiência no Brasil' },
  { value: '6 anos', label: 'de atividade em Portugal' },
  { value: '3 dias', label: 'prazo médio para envio do orçamento' },
  { value: 'Lisboa', label: 'e região' },
];

export const trustItems = [
  {
    title: 'Clareza em todo o processo',
    description: 'Falamos de forma simples e direta para que o cliente perceba cada fase da obra com segurança.',
    icon: ShieldCheck,
  },
  {
    title: 'Prazos bem definidos',
    description: 'Após a visita ao imóvel, o orçamento é enviado em média até 3 dias.',
    icon: TimerReset,
  },
  {
    title: 'Contacto rápido e fácil',
    description: 'Telefone, WhatsApp e formulário sempre acessíveis para tornar o primeiro contacto simples e imediato.',
    icon: Phone,
  },
];

export const projects: ProjectItem[] = [
  {
    title: 'Remodelação completa de sala e zona social',
    category: 'Antes e depois',
    description: 'Transformação de um espaço em bruto num ambiente mais moderno, amplo e confortável, com acabamentos limpos e uma linguagem visual contemporânea.',
    beforeImage: '/before.jpeg',
    afterImage: '/after.jpeg',
    videoLabel: 'Comparação do resultado final',
  },
  {
    title: 'Renovação integral de casa de banho',
    category: 'Remodelação interior',
    description: 'Reabilitação total da casa de banho, com renovação de revestimentos, louças e mobiliário, criando um espaço mais atual, elegante e funcional.',
    beforeImage: '/before-two.jpeg',
    afterImage: '/after-two.jpeg',
    videoLabel: 'Evolução da obra',
  },
  {
    title: 'Execução e acabamento de espaço renovado',
    category: 'Obra e acabamento',
    description: 'Intervenção focada na melhoria do espaço, com renovação visível dos materiais, valorização do interior e atenção ao detalhe em toda a execução.',
    beforeImage: '/before-three.jpeg',
    afterImage: '/after-three.jpeg',
    videoLabel: 'Sequência da transformação',
  },
];

export const processItems: ProcessItem[] = [
  {
    title: 'Primeiro contacto',
    description: 'Recebemos o pedido por telefone, WhatsApp ou formulário e percebemos exatamente o que o cliente pretende.',
  },
  {
    title: 'Visita ao imóvel',
    description: 'Avaliamos o espaço, ouvimos as necessidades do cliente e analisamos a melhor solução para a obra.',
  },
  {
    title: 'Orçamento detalhado',
    description: 'Depois da visita, enviamos o orçamento em média até 3 dias, com clareza e alinhamento realista do trabalho.',
  },
  {
    title: 'Execução com acompanhamento',
    description: 'A obra avança com organização, compromisso, comunicação clara e respeito pelo espaço do cliente.',
  },
];

export const galleryImages = [
  '/image-01.jpeg',
  '/image-03.jpeg',
  '/image-04.jpeg',
  '/image-05.jpeg',
  '/image-06.jpeg',
  '/image-07.jpeg',
];

export const contactDetails = {
  phoneDisplay: '+351 927 147 574',
  phoneHref: 'tel:+351927147574',
  whatsappHref: 'https://wa.me/351927147574',
  instagramHref: 'https://instagram.com/moura_obras',
  region: 'Lisboa e região',
};

export const heroVideo = {
  poster: '/hero-poster.jpeg',
  src: '/heroVideo.mp4',
};