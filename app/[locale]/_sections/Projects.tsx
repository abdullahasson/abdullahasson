// Next Intl
import { useTranslations } from "next-intl"
// Components
import Title from "@/components/Title"
import ProjectCard from "@/components/Cards/ProjectCard"
// Data
import { projects } from "@/constants/content"


const Projects = () => {
    const t = useTranslations()

    return (
        <section className="flex flex-col items-center pt-16" id="projects">
            <Title title={t('projectsTitle')} secondaryTitle={t('projectsText')} />

            {/* Projects List */}
            <div dir="ltr" className="mt-20 w-full">
                <div className="grid gap-12 grid-cols-2 max-[560px]:grid-cols-1">
                    {projects.map((project) => (
                        <ProjectCard data={project} key={project.title} />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Projects
