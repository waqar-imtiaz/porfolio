import { Navbar } from '@/components/navbar';
import { Hero } from '@/components/hero';
import { About } from '@/components/about';
import { Skills } from '@/components/skills';
import { ExperienceTimeline } from '@/components/experience-timeline';
import { Projects } from '@/components/projects';
import { Highlights } from '@/components/highlights';
import { Contact } from '@/components/contact';
import { Footer } from '@/components/footer';

export default function Home() {
  return (
    <div>
      <Navbar />
      <main className="space-y-6">
        <Hero />
        <About />
        <Skills />
        <ExperienceTimeline />
        <Projects />
        <Highlights />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
