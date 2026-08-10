import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Skills } from "@/components/sections/Skills";
import { Projects } from "@/components/sections/Projects";
import { AILab } from "@/components/sections/AILab";
import { Services } from "@/components/sections/Services";
import { Experience } from "@/components/sections/Experience";
import { Testimonials } from "@/components/sections/Testimonials";
import { CurrentlyBuilding } from "@/components/sections/CurrentlyBuilding";
import { GitHubSection } from "@/components/sections/GitHubSection";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Skills />
      <Projects />
      <AILab />
      <Services />
      <Experience />
      <Testimonials />
      <GitHubSection />
      <CurrentlyBuilding />
      <Contact />
    </>
  );
}
