import Home from "./_sections/Home";
import Expertise from "./_sections/Expertise";
import Projects from "./_sections/Projects";
// import Testimonials from "./_sections/Testimonials"
import Contact from "./_sections/Contact";
// UI
import Hr from "@/components/ui/hr";

export default function Homepage() {
  return (
    <>
      <Home />
      <Hr />
      <Expertise />
      <Hr />
      <Projects />
      <Hr />
      <Contact />
    </>
  );
}
