import Nav from "@/components/nav/Nav";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Triad from "@/components/sections/Triad";
import WorkGrid from "@/components/sections/WorkGrid";
import WorkGallery from "@/components/sections/WorkGallery";
import Services from "@/components/sections/Services";
import Tools from "@/components/sections/Tools";
import Stats from "@/components/sections/Stats";
import Philosophy from "@/components/sections/Philosophy";
import Transpose from "@/components/sections/Transpose";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <About />
        <Triad />
        <WorkGrid />
        <WorkGallery />
        <Services />
        <Tools />
        <Stats />
        <Philosophy />
        <Transpose />
      </main>
      <Contact />
    </>
  );
}
