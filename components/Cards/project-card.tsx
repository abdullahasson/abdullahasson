// Next 
import Image from "next/image";
// Motion
import * as motion from "motion/react-client"
// UI
import {
  MorphingDialog,
  MorphingDialogTrigger,
  MorphingDialogContent,
  MorphingDialogTitle,
  MorphingDialogImage,
  MorphingDialogSubtitle,
  MorphingDialogClose,
  MorphingDialogDescription,
  MorphingDialogContainer,
} from '@/components/ui/morphing-dialog';

interface ProjectCardPorps {
  title: string;
  text: string;
  img: string;
  projectDemo: string;
}

export default function ProjectCard({
  project
} : {
  project : ProjectCardPorps
}) {
  return (
    <div>
      <MorphingDialog
        transition={{
          type: 'spring',
          bounce: 0.05,
          duration: 0.25,
        }}
      >
        {/* Trigger */}
        <MorphingDialogTrigger className="w-full">
          <motion.div
            className="group rounded-3xl p-5 relative overflow-hidden w-full h-[350px] cursor-pointer"
            whileHover={{ scale: 1.05 }} 
            transition={{ type: 'spring', stiffness: 300 }}

          >
            <motion.div
              className="absolute z-0 left-0 top-0 w-full h-full overflow-hidden"
              whileHover={{ scale: 1.1, rotate: -2 }}
              transition={{ duration: 0.5 }}
            >
              <Image
                src={project.img}
                alt={`${project.title}-image`}
                fill
                className="w-full h-full object-cover"
              />
            </motion.div>
          </motion.div>
        </MorphingDialogTrigger>



        {/* Content */}
        <MorphingDialogContainer>
          <MorphingDialogContent
            style={{
              borderRadius: '24px',
            }}
            className='pointer-events-auto relative flex h-auto w-full flex-col overflow-hidden border border-zinc-50/10 bg-zinc-900 sm:w-[500px]'
          >
            <MorphingDialogImage 
              src={project.img}
              alt={`${project.title}-image`}
            />



            <div className='p-6'>
              <MorphingDialogTitle className='text-2xl text-zinc-50'>
                {project.title}
              </MorphingDialogTitle>
              <MorphingDialogSubtitle className='text-zinc-400'>
                Edouard Wilfrid Buquet
              </MorphingDialogSubtitle>
              <MorphingDialogDescription
                disableLayoutAnimation
                variants={{
                  initial: { opacity: 0, scale: 0.8, y: 100 },
                  animate: { opacity: 1, scale: 1, y: 0 },
                  exit: { opacity: 0, scale: 0.8, y: 100 },
                }}
              >
                <p className='mt-2 text-zinc-500'>
                  {project.text}
                </p>



                <a
                  className='mt-2 inline-flex text-zinc-500 underline'
                  href={project.projectDemo}
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  privew
                </a>
              </MorphingDialogDescription>
            </div>



            <MorphingDialogClose className='text-zinc-50' />

          </MorphingDialogContent>
        </MorphingDialogContainer>
      </MorphingDialog>
    </div>
  )
}