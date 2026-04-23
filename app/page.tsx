import { AboutSection } from '@/components/sections/about-section';
import { BeforeAfterShowcase } from '@/components/sections/before-after-showcase';
import { ContactSection } from '@/components/sections/contact-section';
import { GallerySection } from '@/components/sections/gallery-section';
import { HeroSection } from '@/components/sections/hero-section';
import { ProcessSection } from '@/components/sections/process-section';
import { ProjectsSection } from '@/components/sections/projects-section';
import { ScrollStorySection } from '@/components/sections/scroll-story-section';
import { ServicesSection } from '@/components/sections/services-section';

export default function Page() {
  return (
    <main>
      <HeroSection />
      <BeforeAfterShowcase />
      <AboutSection />
      <ScrollStorySection />
      <ServicesSection />
      <ProjectsSection />
      <GallerySection />
      <ProcessSection />
      <ContactSection />
    </main>
  );
}