import Hero from "../sections/Hero";
import About from "../sections/About";
import WhyChooseUs from "../sections/WhyChooseUs";
import Services from "../sections/Services";
import Calculator from "../sections/Calculator";
import Projects from "../sections/Projects";
import Testimonials from "../sections/Testimonials";
import FAQ from "../sections/FAQ";
import Contact from "../sections/Contact";
import Footer from "../sections/Footer";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <WhyChooseUs />
      <Services />
      <Calculator />
      <Projects />
      <Testimonials />
      <FAQ />
      <Contact />
      <Footer />
    </>
  );
}