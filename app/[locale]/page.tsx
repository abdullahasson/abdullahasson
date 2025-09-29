// Sections
import Home from "./_sections/home-section";
import Expertise from "./_sections/expertise-section";
import Projects from "./_sections/projects-section";
import Contact from "./_sections/contact-section";
import TestimonialsSection from "./_sections/testimonials-section";
// Components
import CustomDock from "@/components/custom-dock";
// UI
import Hr from "@/components/ui/hr";

export default function Homepage() {
  return (
    <>
      {/* Nav */}
      <CustomDock />
      <Home />
      <Hr />

      {/* Expertise */}
      <Expertise />
      <Hr />

      {/* Projects */}
      <Projects />
      <Hr />

      {/* Testimonials */}
      <TestimonialsSection />
      <Hr />

      {/* Contact */}
      <Contact />
    </>
  );
}
