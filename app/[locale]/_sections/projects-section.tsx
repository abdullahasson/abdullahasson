// Next Intl
import { useTranslations } from "next-intl"
// Components
import Title from "@/components/Title"
import ProjectsList from "@/components/projects-list"



const Projects = () => {
    const t = useTranslations("Projects")

    return (
        <section className="flex flex-col items-center pt-16 min-h-[100vh] px-64 pb-[5rem] max-[560px]:px-10 max-[767px]:px-10" id="projects">
            <Title title={t('projectsTitle')} secondaryTitle={t('projectsText')} />

            {/* Projects List */}
            <ProjectsList />
        </section>
    )
}

export default Projects
