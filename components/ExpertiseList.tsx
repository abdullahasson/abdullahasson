// Framer Motion
import * as motion from "motion/react-client"
// Constants
import { technologie, techIcon } from "../constants/components"

interface ExpertiseListProps {
    title: string;
}

const ExpertiseList = ({ title }: ExpertiseListProps) => {

    return (
        <>
            {/* Icons Section */}
            <motion.div
                dir="ltr"
                className="flex justify-between items-center pt-12 gap-12 max-[767px]:px-10"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 1, duration: 0.5 }}
                viewport={{ once: true, amount: 0.5 }}
            >
                {
                    techIcon.map((item, index) => (
                        <motion.div
                            key={index}
                            className="text-center"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                        >
                            <span className="text-9xl">
                                {item.icon}
                            </span>

                            <p className="text-3xl">
                                {item.name}
                            </p>
                        </motion.div>
                    ))
                }
            </motion.div>


            {/* Expertise List */}
            <motion.h2
                className="font-bold text-5xl pt-12 max-[560px]:text-center max-[560px]:text-3xl"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2, duration: 0.5 }}
                viewport={{ once: true, amount: 0.5 }}
            >
                {title}
            </motion.h2>

            <motion.div
                dir="ltr"
                className="border-2 border-c3 border-solid shadow-xl divide-y-[0.5px] rounded-xl divide-solid flex flex-col mt-16 max-[767px]:mt-10 w-11/12 max-[767px]:w-full"
                initial={{
                    opacity: 0,
                    y: 20,
                }}

                whileInView={{
                    opacity: 1,
                    y: 0,
                }}

                transition={{
                    delay: 1.4,
                    duration: 0.5
                }}

                viewport={{ once: true }}
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