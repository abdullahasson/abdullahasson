import Home from "./_sections/Home";
import Expertise from "./_sections/Expertise";
import Projects from "./_sections/Projects";
import Contact from "./_sections/Contact";

export default function Homepage() {
  return (
    <>
      <Home />
      <hr />
      <Expertise />
      <hr />
      <Projects />
      <hr />
      <Contact />
    </>
  );
}
