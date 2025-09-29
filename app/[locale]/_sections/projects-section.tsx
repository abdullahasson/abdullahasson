// Next
import Image from "next/image"
// Next Intl
import { useTranslations } from "next-intl"
// Motion
import * as motion from "motion/react-client"
// Components
import Title from "@/components/Title"
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
// images
import HooBankImage from "@/images/HooBank.png"
// import BrainWaveImage from "@/images/brainwave.png"
// import HubQouteImage from "@/images/hubqoute.jpg"


const Projects = () => {
    const t = useTranslations("Projects")

    const project = [
        {
            title: t('project1.title'),
            text: t('project1.des'),
            img: '/images/HooBank.png',
            // hash: projectsPhoto.hoobankHash,
            projectDemo: 'https://abdullahasson.github.io/HooBank/',
            projectRepo: 'https://github.com/abdullahasson/HooBank',
        },
        {
            title: t('project2.title'),
            text: t('project2.des'),
            img: '/images/HooBank.png',
            // hash: projectsPhoto.brainwaveHash,
            projectDemo: 'https://abdullahasson.github.io/brainwave/',
            projectRepo: 'https://github.com/abdullahasson/brainwave',
        },
        {
            title: t('project3.title'),
            text: t('project3.des'),
            img: '/images/HooBank.png',
            // hash: projectsPhoto.hubqouteHash,
            projectDemo: 'https://abdullahasson.github.io/HubQoute/',
            projectRepo: 'https://github.com/abdullahasson/HubQoute',
        },
    ]

    return (
        <section className="flex flex-col items-center pt-16 min-h-[100vh] px-64 pb-[5rem] max-[560px]:px-10 max-[767px]:px-10" id="projects">
            <Title title={t('projectsTitle')} secondaryTitle={t('projectsText')} />

            {/* Projects List */}
            <div dir="ltr" className="mt-20 w-full">
                <div className="grid gap-12 grid-cols-2 max-[560px]:grid-cols-1">
                    {
                        project.map((project, index) => (
                            <MorphingDialog
                                key={index}
                                transition={{
                                    type: 'spring',
                                    bounce: 0.05,
                                    duration: 0.25,
                                }}
                            >
                                <MorphingDialogTrigger
                                    style={{
                                        borderRadius: '12px',
                                    }}
                                >
                                    <motion.div
                                        className="group rounded-3xl p-5 relative overflow-hidden w-full h-[350px] cursor-pointer"
                                        whileHover={{ scale: 1.05 }} // Scale up on hover
                                        transition={{ type: 'spring', stiffness: 300 }} // Spring animation
                                        key={index}
                                    >
                                        <motion.div
                                            className="absolute z-0 left-0 top-0 w-full h-full overflow-hidden"
                                            whileHover={{ scale: 1.1, rotate: -2 }} // Zoom and rotate on hover
                                            transition={{ duration: 0.5 }}
                                        >
                                            <Image
                                                src={HooBankImage}
                                                alt={`${project.title}-image`}
                                                className="w-full h-full object-cover"
                                            />
                                        </motion.div>
                                    </motion.div>
                                </MorphingDialogTrigger>
                                <MorphingDialogContainer>
                                    <MorphingDialogContent
                                        style={{
                                            borderRadius: '24px',
                                        }}
                                        className='pointer-events-auto relative flex h-auto w-full flex-col overflow-hidden border border-zinc-950/10 bg-white dark:border-zinc-50/10 dark:bg-zinc-900 sm:w-[500px]'
                                    >
                                        <MorphingDialogImage
                                            src={project.img}
                                            alt='A desk lamp designed by Edouard Wilfrid Buquet in 1925. It features a double-arm design and is made from nickel-plated brass, aluminium and varnished wood.'
                                            className='h-full w-full'
                                        />
                                        <div className='p-6'>
                                            <MorphingDialogTitle className='text-2xl text-zinc-950 dark:text-zinc-50'>
                                                EB27
                                            </MorphingDialogTitle>
                                            <MorphingDialogSubtitle className='text-zinc-700 dark:text-zinc-400'>
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
                                                <p className='mt-2 text-zinc-500 dark:text-zinc-500'>
                                                    Little is known about the life of Édouard-Wilfrid Buquet. He was
                                                    born in France in 1866, but the time and place of his death is
                                                    unfortunately a mystery.
                                                </p>
                                                <p className='text-zinc-500'>
                                                    Research conducted in the 1970s revealed that he’d designed the
                                                    “EB 27” double-arm desk lamp in 1925, handcrafting it from
                                                    nickel-plated brass, aluminium and varnished wood.
                                                </p>
                                                <a
                                                    className='mt-2 inline-flex text-zinc-500 underline'
                                                    href='https://www.are.na/block/12759029'
                                                    target='_blank'
                                                    rel='noopener noreferrer'
                                                >
                                                    Are.na block
                                                </a>
                                            </MorphingDialogDescription>
                                        </div>
                                        <MorphingDialogClose className='text-zinc-50' />
                                    </MorphingDialogContent>
                                </MorphingDialogContainer>
                            </MorphingDialog>
                        ))
                    }
                </div>
            </div>
        </section>
    )
}

export default Projects
