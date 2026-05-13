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
  badges: string[];
  images: string[];
};

export type ProcessItem = {
  title: string;
  description: string;
};

export const navItems: NavItem[] = [
  { label: 'Início', href: '/' },
  { label: 'Sobre', href: '/sobre' },
  { label: 'Serviços', href: '/#servicos' },
  { label: 'Projetos', href: '/#projetos' },
  { label: 'Processo', href: '/#processo' },
  { label: 'Contacto', href: '/#contacto' },
];

export const serviceItems: ServiceItem[] = [
  {
    title: 'Construção de raiz',
    description: 'Executamos projetos desde a base até à entrega final, com planeamento rigoroso, acompanhamento contínuo e compromisso em cada etapa.',
    icon: Home,
  },
  {
    title: 'Remodelações completas',
    description: 'Transformamos espaços antigos em ambientes modernos, funcionais e valorizados, adaptados às necessidades de cada cliente.',
    icon: Paintbrush,
  },
  {
    title: 'Reformas e reabilitação',
    description: 'Intervimos com precisão técnica e atenção ao detalhe, preservando o imóvel e melhorando o seu desempenho e estética.',
    icon: Hammer,
  },
  {
    title: 'Acabamentos',
    description: 'Garantimos um acabamento de excelência, com foco nos detalhes, qualidade dos materiais e perfeição na execução.',
    icon: Wrench,
  },
];

export const featureStats = [
  { value: '+35 anos', label: 'de experiência no mercado Brasileiro' },
  { value: '6 anos', label: 'a servir clientes em Portugal' },
  { value: '3 dias', label: 'prazo médio para envio do orçamento' },
  { value: 'Lisboa', label: 'com cobertura completa em arredores' },
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
    beforeImage: '/kitchen-before.jpg',
    afterImage: '/kitchen-after.jpg',
    videoLabel: 'Comparação do resultado final',
    badges: ['Sala', 'Zona social', 'Acabamento'],
    images: [
      '/kitchen-before.jpg',
      '/kitchen-after.jpg',
      '/obra01-01.jpg',
      '/obra01-02.jpg',
      '/obra01-03.jpg',
      '/obra01-04.jpg',
      '/obra01-05.jpg',
      '/obra01-06.jpg',
      '/obra01-07.jpg',
      '/obra01-08.jpg',
      '/obra01-09.jpg',
      '/obra01-10.jpg',
      '/obra01-11.jpg',
      '/obra01-12.jpg',
      '/obra01-13.jpg',
      '/obra01-14.jpg',
      '/obra01-15.jpg',
      '/obra01-16.jpg',
    ],
  },
  {
    title: 'Renovação integral de casa de banho',
    category: 'Remodelação interior',
    description: 'Reabilitação total da casa de banho, com renovação de revestimentos, louças e mobiliário, criando um espaço mais atual, elegante e funcional.',
    beforeImage: '/before-two.jpeg',
    afterImage: '/after-two.jpeg',
    videoLabel: 'Evolução da obra',
    badges: ['Casa de banho', 'Revestimentos', 'Funcionalidade'],
    images: [
      '/before-two.jpeg',
      '/after-two.jpeg',
      '/image-05.jpeg',
    ],
  },
  {
    title: 'Execução e acabamento de espaço renovado',
    category: 'Obra e acabamento',
    description: 'Intervenção focada na melhoria do espaço, com renovação visível dos materiais, valorização do interior e atenção ao detalhe em toda a execução.',
    beforeImage: '/stairs-before.jpg',
    afterImage: '/stairs-after.jpg',
    videoLabel: 'Sequência da transformação',
    badges: ['Obra', 'Interiores', 'Detalhes'],
    images: [
      '/stairs-before.jpg',
      '/stairs-after.jpg',
      '/obra03-01.jpeg',
      '/obra03-02.jpeg',
      '/obra03-03.jpeg',
      '/obra03-04.jpeg',
      '/obra03-05.jpeg',
      '/obra03-06.jpeg',
      '/obra03-07.jpeg',
    ],
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

export type GalleryProject = {
  title: string;
  description: string;
  coverImage: string;
  badges: string[];
  images: string[];
};

export const galleryProjects: GalleryProject[] = [
  {
    title: 'Projeto residencial 01',
    description:
      'Registo visual de obra residencial com foco em acabamento, valorização do espaço e execução cuidada.',
    coverImage: '/image-01.jpeg',
    badges: ['Residencial', 'Remodelação', 'Acabamento'],
    images: ['/image-01.jpeg'],
  },
  {
    title: 'Projeto residencial 02',
    description:
      'Detalhe de intervenção em espaço interior, com atenção aos materiais, proporções e resultado final.',
    coverImage: '/image-02.jpeg',
    badges: ['Interiores', 'Obra', 'Detalhes'],
    images: ['/image-02.jpeg'],
  },
  {
    title: 'Projeto residencial 03',
    description:
      'Melhoria de ambiente residencial com execução limpa e acabamento alinhado ao estilo do imóvel.',
    coverImage: '/image-03.jpeg',
    badges: ['Renovação', 'Residencial', 'Execução'],
    images: ['/image-03.jpeg'],
  },
  {
    title: 'Projeto residencial 04',
    description:
      'Registo de obra com foco na transformação visual do espaço e na qualidade dos acabamentos.',
    coverImage: '/image-04.jpeg',
    badges: ['Transformação', 'Acabamento', 'Obra limpa'],
    images: ['/image-04.jpeg'],
  },
  {
    title: 'Projeto residencial 05',
    description:
      'Execução de melhorias no imóvel, valorizando funcionalidade, estética e atenção ao detalhe.',
    coverImage: '/image-05.jpeg',
    badges: ['Funcionalidade', 'Detalhes', 'Remodelação'],
    images: ['/image-05.jpeg'],
  },
  {
    title: 'Projeto residencial 06',
    description:
      'Intervenção em ambiente residencial com acabamento cuidado e resultado visual mais moderno.',
    coverImage: '/image-06.jpeg',
    badges: ['Moderno', 'Interiores', 'Acabamento'],
    images: ['/image-06.jpeg'],
  },
  {
    title: 'Projeto residencial 07',
    description:
      'Registo final de obra com foco em acabamento, organização visual e valorização do espaço.',
    coverImage: '/image-07.jpeg',
    badges: ['Finalização', 'Obra', 'Valorização'],
    images: ['/image-07.jpeg'],
  },
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