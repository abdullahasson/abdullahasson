import { StaticImageData } from "next/image"

// Project Card Props
interface ProjectData {
  projectDemo: string;
  img: StaticImageData;
  title: string;
  text: string;
  projectRepo: string;
}
export interface ProjectCardProps {
  data: ProjectData;
}

// Testimonial Card Props
interface TestimonialData {
  projectDemo: string;
  img: StaticImageData;
  title: string;
  text: string;
  projectRepo: string;
}
export interface TestimonialCardProps {
  data: TestimonialData;
}