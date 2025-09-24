// Framer Motion
import * as motion from "motion/react-client"


interface TitleProps {
    title: string;
    secondaryTitle: string;
}


const Title = ({ title, secondaryTitle }: TitleProps) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, amount: 0.5 }} // Trigger when 50% of the element is in view
        >
            <div className="w-fit mx-auto flex flex-col items-center">
                <h2 className="text-[44px] font-bold">
                    {title}
                </h2>
                <motion.div
                    className="p-1 w-10/12 mx-auto rounded-md bg-c2"
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    transition={{ duration: 1, delay: 0.5 }}
                    viewport={{ once: true, amount: 0.5 }}
                />
            </div>

            <motion.p
                className="text-c3 text-center pt-11 text-5xl font-normal leading-[1.2] max-[560px]:text-2xl max-[560px]:pt-5 max-[767px]:pt-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.5 }}
                viewport={{ once: true, amount: 0.5 }}
            >
                {secondaryTitle}
            </motion.p>
        </motion.div>
    );
};

export default Title;