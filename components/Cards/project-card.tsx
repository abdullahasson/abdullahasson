// Next 
import Image from "next/image"
// Types
import { ProjectCardProps } from "@/types/type"
// Framer Motion
import * as motion from "motion/react-client"
// Shadcn UI
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog"
// React Icons
import { FaGithub } from "react-icons/fa"


const ProjectCard = ({ data }: ProjectCardProps) => {

  return (
    <Dialog>
      <DialogTrigger>
        <motion.div
          className="group rounded-3xl p-5 relative overflow-hidden w-full h-[350px] cursor-pointer"
          whileHover={{ scale: 1.05 }} // Scale up on hover
          transition={{ type: 'spring', stiffness: 300 }} // Spring animation
        >
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
        </motion.div>
      </DialogTrigger>

      <DialogContent className="max-w-4xl rounded-2xl dark:bg-slate-900 bg-slate-50 overflow-hidden">
        <DialogHeader className="px-8 pt-6">
          <DialogTitle className="text-3xl font-bold text-slate-800 dark:text-slate-200">
            {data.title}
          </DialogTitle>
          <DialogDescription className="text-lg text-slate-600 dark:text-slate-400 mt-2">
            {data.text}
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-6 px-8 pb-8">
          {/* Project Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
            className="relative rounded-xl overflow-hidden border-2 border-slate-200 dark:border-slate-800"
          >
            <Image
              src={data.img}
              alt={`${data.title} Demo`}
              width={1280}
              height={800}
              className="w-full h-64 object-cover"
            />
          </motion.div>

          {/* Project Links */}
          <div className="flex gap-4">
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href={data.projectDemo}
              target="_blank"
              className="flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors duration-300"
            >
              <span className="font-semibold">Live Demo</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
                <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
              </svg>
            </motion.a>

            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href={data.projectRepo}
              target="_blank"
              className="flex items-center gap-2 px-6 py-3 bg-slate-800 hover:bg-slate-900 text-white rounded-lg transition-colors duration-300"
            >
              <FaGithub className="h-5 w-5" />
              <span className="font-semibold">GitHub Repo</span>
            </motion.a>
          </div>

          {/* Additional Info Section - You can add more project details here */}
          <div className="pt-4 border-t border-slate-200 dark:border-slate-800">
            <h3 className="text-xl font-semibold text-slate-800 dark:text-slate-200 mb-2">Project Features</h3>
            <ul className="list-disc list-inside text-slate-600 dark:text-slate-400 space-y-2">
              <li>Responsive design</li>
              <li>Modern UI components</li>
              <li>Interactive animations</li>
              <li>Cross-browser compatibility</li>
            </ul>
          </div>
        </div>


      </DialogContent>
    </Dialog>
  )
}

export default ProjectCard