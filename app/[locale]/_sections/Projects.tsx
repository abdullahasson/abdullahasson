// Next
import Image from "next/image"
// Next Intl
import { useTranslations } from "next-intl"
// Motion
import * as motion from "motion/react-client"
// Components
import Title from "@/components/Title"
// images
import HooBankImage from "@/images/HooBank.png"
import BrainWaveImage from "@/images/brainwave.png"
import HubQouteImage from "@/images/hubqoute.jpg"


const Projects = () => {
    const t = useTranslations("Projects")

    const projects = [
        {
            title: t('project1.title'),
            text: t('project1.des'),
            img: HooBankImage,
            // hash: projectsPhoto.hoobankHash,
            projectDemo: 'https://abdullahasson.github.io/HooBank/',
            projectRepo: 'https://github.com/abdullahasson/HooBank',
        },
        {
            title: t('project2.title'),
            text: t('project2.des'),
            img: BrainWaveImage,
            // hash: projectsPhoto.brainwaveHash,
            projectDemo: 'https://abdullahasson.github.io/brainwave/',
            projectRepo: 'https://github.com/abdullahasson/brainwave',
        },
        {
            title: t('project3.title'),
            text: t('project3.des'),
            img: HubQouteImage,
            // hash: projectsPhoto.hubqouteHash,
            projectDemo: 'https://abdullahasson.github.io/HubQoute/',
            projectRepo: 'https://github.com/abdullahasson/HubQoute',
        },
    ]

    return (
        <section className="flex flex-col items-center pt-16" id="projects">
            <Title title={t('projectsTitle')} secondaryTitle={t('projectsText')} />

            {/* Projects List */}
            <div dir="ltr" className="mt-20 w-full">
                <div className="grid gap-12 grid-cols-2 max-[560px]:grid-cols-1">
                    {
                        projects.map((project, index) => (
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
                                        src={project.img}
                                        alt={`${project.title}-image`}
                                        className="w-full h-full object-cover"
                                    />
                                </motion.div>
                            </motion.div>
                        ))
                    }
                </div>
            </div>
        </section>
    )
}

export default Projects
