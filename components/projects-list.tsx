// Next Intl
import { useTranslations } from "next-intl"
// Components
import ProjectCard from "./Cards/project-card"

export default function ProjectsList() {

    const t = useTranslations("Projects")

    const project = [
        {
            title: t('project1.title'),
            text: t('project1.des'),
            img: '/images/HooBank.png',
            projectDemo: 'https://abdullahasson.github.io/HooBank/',
            projectRepo: 'https://github.com/abdullahasson/HooBank',
        },
        {
            title: t('project2.title'),
            text: t('project2.des'),
            img: '/images/HooBank.png',
            projectDemo: 'https://abdullahasson.github.io/brainwave/',
            projectRepo: 'https://github.com/abdullahasson/brainwave',
        },
        {
            title: t('project3.title'),
            text: t('project3.des'),
            img: '/images/HooBank.png',
            projectDemo: 'https://abdullahasson.github.io/HubQoute/',
            projectRepo: 'https://github.com/abdullahasson/HubQoute',
        },
    ]

    return (
        <div dir="ltr" className="mt-20 w-full">
            <div className="grid gap-12 grid-cols-2 max-[560px]:grid-cols-1">
                {
                    project.map((project, index) => (
                        <ProjectCard project={project} key={index} />
                    ))
                }
            </div>
        </div>
    )
}