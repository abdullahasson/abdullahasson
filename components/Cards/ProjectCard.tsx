"use client"
// Next 
import Image, { StaticImageData } from "next/image"
// Framer Motion
import { motion } from "framer-motion"


interface ProjectData {
  projectDemo: string;
  img: StaticImageData;
  title: string;
  text: string;
  projectRepo: string;
  // Add other properties if needed
}

// Define the props for the ProjectCard component
interface ProjectCardProps {
  data: ProjectData;
}

const ProjectCard = ({ data }: ProjectCardProps) => {

  return (
    <motion.div
      dir="ltr"
      className="group rounded-3xl p-5 relative overflow-hidden w-full h-[350px] cursor-pointer"
      whileHover={{ scale: 1.05 }} // Scale up on hover
      transition={{ type: 'spring', stiffness: 300 }} // Spring animation
    >
      {/* Clickable overlay */}
      <motion.a
        className="absolute left-0 top-0 w-full h-full bg-transparent z-20"
        target="_blank"
        href={data.projectDemo}
        whileHover={{ backgroundColor: 'rgba(0, 0, 0, 0.1)' }} // Slight overlay on hover
        transition={{ duration: 0.3 }}
      ></motion.a>

      {/* Image with zoom and rotate animation */}
      <motion.div
        className="absolute z-0 left-0 top-0 w-full h-full overflow-hidden"
        whileHover={{ scale: 1.1, rotate: -2 }} // Zoom and rotate on hover
        transition={{ duration: 0.5 }}
      >
        <Image
          src={data.img}
          alt={`${data.title}-image`}
          className="w-full h-full object-cover"
        />
      </motion.div>

      {/* Text content with fade-in animation */}
      <motion.div
        className="z-10 text-xl w-full absolute bottom-0 left-0 pb-8 pl-8 bg-gradient-to-t from-slate-900 from-0% via-slate-700 via-50% to-transparent to-100%"
        initial={{ opacity: 0, y: 20 }} // Initial state (hidden)
        whileInView={{ opacity: 1, y: 0 }} // Animate in when in view
        transition={{ duration: 0.5, delay: 0.2 }} // Smooth fade-in
        viewport={{ once: true }} // Animate only once
      >
        <h3 className="text-5xl font-extrabold mb-3">{data.title}</h3>
        <p className="txt text-[16px] w-5/6 text-start m-0 p-0">{data.text}</p>
      </motion.div>

      {/* GitHub icon with bounce animation */}
      <motion.a
        className="absolute bottom-10 right-10 w-16 h-16 bg-[#0fe] transition-all hover:bg-white hover:text-[#0fe] text-4xl rounded-xl font-extrabold flex items-center justify-center z-30"
        target="_blank"
        href={data.projectRepo}
        whileHover={{ scale: 1.2 }} // Bounce on hover
        whileTap={{ scale: 0.9 }} // Shrink on click
        transition={{ type: 'spring', stiffness: 300 }} // Spring animation
      >
        <li className="bx bxl-github"></li>
      </motion.a>
    </motion.div>
  )
}

export default ProjectCard