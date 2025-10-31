import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { Projects } from "@/components/projects";
import { Showcase } from "@/components/showcase";
import { About } from "@/components/about";
import { Skills } from "@/components/skills";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";
import { TechBackground } from "@/components/tech-background";

export default function Home() {
  return (
    <main className="relative min-h-screen">
      <TechBackground />
      <Navbar />
      <div id="home">
        <Hero />
      </div>
      <Projects />
      <Showcase />
      <About />
      <Skills />
      <Contact />
      <Footer />
    </main>
  );
}
