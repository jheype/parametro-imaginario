import { BeforeAfterShowcase, BeforeAfterSlider } from '@/components/sections/before-after-showcase';
import { ContactSection } from '@/components/sections/contact-section';
import { GallerySection } from '@/components/sections/gallery-section';
import { HeroSection } from '@/components/sections/hero-section';
import { ProcessSection } from '@/components/sections/process-section';
import { ProjectsSection } from '@/components/sections/projects-section';
//import { ScrollStorySection } from '@/components/sections/scroll-story-section';
import { ServicesSection } from '@/components/sections/services-section';

export default function Page() {
  return (
    <main>
      <HeroSection />
      <BeforeAfterShowcase />
      <ServicesSection />
      <section className="border-b border-brand-line pb-12 sm:pb-16">
        <div className="container-shell">
          <BeforeAfterSlider
            beforeSrc="/before2.jpeg"
            afterSrc="/after2.jpeg"
          />
        </div>
      </section>
      <ProjectsSection />
      {/* <ScrollStorySection /> */}
      <GallerySection />
      <ProcessSection />
      <ContactSection />
    </main>
  );
}