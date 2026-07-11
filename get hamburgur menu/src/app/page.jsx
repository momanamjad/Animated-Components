import AboutMe from "@/components/about-me/about-me";
import InitialImageWrapper from "@/components/initial-image-wrapper";
import Navbar from "@/components/nabvar";
import Hero from "@/components/hero";
import WorkExperience from "@/components/work-experience/work-experience";
import TechStack from "@/components/tech-stack/tect-stack";

export default function Home() {
  return (
    <main id="home">
      <InitialImageWrapper />
      <Navbar />
      <Hero />
      <AboutMe />
      <WorkExperience />
      <TechStack />
    </main>
  );
}
