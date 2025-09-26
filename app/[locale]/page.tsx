// Sections
import Home from "./_sections/Home";
import Expertise from "./_sections/Expertise";
import Projects from "./_sections/Projects";
import Contact from "./_sections/Contact";
import TestimonialsSection from "./_sections/testimonials-section";
// Components
import CustomDock from "@/components/custom-dock";
// UI
import Hr from "@/components/ui/hr";


export default function Homepage() {
  return (
    <>
      <CustomDock />
      <Home />
      <Hr />
      <Expertise />
      <Hr />
      <Projects />
      <Hr />
      <TestimonialsSection />
      <Hr />
      <Contact />
    </>
  );
}
