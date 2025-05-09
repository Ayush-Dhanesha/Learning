import { Header } from '@/sections/Header';
import { HeroSection } from '@/sections/Hero';
import { ProjectsSection } from '@/sections/Projects';
import { ContactSection } from '@/sections/Contact';
import { TapeSection } from '@/sections/Tape';
import { TestimonialsSection } from '@/sections/Testimonials';
import { Footer } from '@/sections/Footer';

export default function Home() {
  return (
    <div >
      <div className='bg-gray-950'>
        <Header  />
      </div>
      <HeroSection />
      <ProjectsSection />
      <div className='bg-gray-950'>
        <TapeSection />
      </div>
      <div className='bg-gray-950'>
        <TestimonialsSection/>
      </div>
      <div className='bg-gray-950'>
      <ContactSection />
      </div>
      <div className='bg-gray-950'>
      <Footer />
      </div>
    </div>
  );
}
