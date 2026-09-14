import Hero from '../sections/Hero';
import Certifications from '../sections/Certifications';
import About from '../sections/About';
import Skills from '../sections/Skills';
import Experience from '../sections/Experience';
import Education from '../sections/Education';
import Projects from '../sections/Projects';
import Services from '../sections/Services';
import Resume from '../sections/Resume';
import Contact from '../sections/Contact';

export default function HomePage() {
  return (
    <>
      <Hero />
      <Certifications />
      <About />
      <Skills />
      <Experience />
      <Education />
      <Projects />
      <Services />
      <Resume />
      <Contact />
    </>
  );
}