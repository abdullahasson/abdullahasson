// Framer Motion
import * as motion from "motion/react-client"
// React Icons
import { RiReactjsFill, RiNextjsLine } from "react-icons/ri";
import { TbBrandTypescript } from "react-icons/tb";



interface ExpertiseListProps {
    title: string;
}

const ExpertiseList = ({ title }: ExpertiseListProps) => {


    const technologie = [
        {
            name: "Core Frontend Tools",
            technologies: "Next / React / Javascript / HTML / CSS",
        },
        {
            name: "State Managers",
            technologies: "Redux / Context API",
        },
        {
            name: "React Ecosystem Libraries",
            technologies: "Axios / React Hook Form & Zod / React Router / Tanstack Router / Tanstack Query",
        },
        {
            name: "CSS",
            technologies: "Tailwind / SASS / Emotion/Styled Components / CSS Modules",
        },
        {
            name: "UI",
            technologies: "Material UI / shadcn/ui / Bootstrap",
        },
        {
            name: "Animations",
            technologies: "GSAP / AOS",
        },
        {
            name: "Bundling Tools",
            technologies: "Vite",
        },
        {
            name: "Code Quality",
            technologies: "ESLint / Prettier / BEM / Chrome Developer Tools / React Profiler / Git / Core Web Vitals",
        },
        {
            name: "Unit Testing",
            technologies: "Jest / React Testing Library",
        },
        {
            name: "Performance Analysis Tool",
            technologies: "GTmetrix | Lighthouse",
        },
        {
            name: "Code Editor",
            technologies: "Visual Studio Code",
        },
    ];


    return (
        <>
            {/* Icons Section */}
            <motion.div
                dir="ltr"
                className="flex justify-between items-center pt-14 gap-12 max-[767px]:px-10"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 1, duration: 0.5 }}
                viewport={{ once: true, amount: 0.5 }}
            >
                {/* {["Next", "react", "redux", "javascript", "html5", "css3"].map((item, index) => (
                    <motion.div
                        key={index}
                        className="text-center"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                    >
                        <SiNextdotjs className="text-c2 text-9xl" />

                        <p className="text-3xl">{item}</p>
                    </motion.div>
                ))} */}
                <motion.div
                    className="text-center"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                >
                    <RiNextjsLine className="text-c2 text-9xl" />

                    <p className="text-3xl">Next</p>
                </motion.div>
                <motion.div
                    className="text-center"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                >
                    <RiReactjsFill className="text-c2 text-9xl" />

                    <p className="text-3xl">React</p>
                </motion.div>
                <motion.div 
                    className="text-center"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                >
                    <TbBrandTypescript className="text-c2 text-9xl" />

                    <p className="text-3xl">Typescript</p>
                </motion.div>
            </motion.div>

            <motion.h2
                className="font-bold text-5xl pt-16 max-[560px]:text-center max-[560px]:text-3xl"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2, duration: 0.5 }}
                viewport={{ once: true, amount: 0.5 }}
            >
                {title}
            </motion.h2>

            {/* Expertise List */}
            <motion.div
                dir="ltr"
                className="border-2 border-c3 border-solid divide-y-[0.5px] rounded-xl divide-solid flex flex-col mt-16 max-[767px]:mt-10 w-11/12 max-[767px]:w-full"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.4, duration: 0.5 }}
                viewport={{ once: true, amount: 0.5 }}
            >
                {technologie.map((item, index) => (
                    <div
                        key={index}
                        className="px-6 py-7 flex items-center justify-between max-[767px]:flex-col max-[767px]:py-4"
                    >
                        <h2 className="text-4xl max-[767px]:mb-2">{item.name}</h2>
                        <div className="flex text-2xl txt p-0">{item.technologies}</div>
                    </div>
                ))}
            </motion.div>
        </>
    )
}

export default ExpertiseList;