// Next
import Image from "next/image";
// Next Intl
import { useTranslations, useLocale } from "next-intl";
// Animation
import * as motion from "motion/react-client"
// Components
import WriteEffect from "@/components/WriteEffect";
import { CreativeImage } from "@/components/CreativeImage";
// Images
import bgImage from "@/images/bg.jpg";
// React Icons
import { FaWhatsapp, FaTelegramPlane } from "react-icons/fa";


function Home() {
  const t = useTranslations("Hero");
  const lang = useLocale();
  const isRtl = lang == 'ar';

  return (
    <section
      className="flex justify-between items-center max-[768px]:flex-col relative min-[767px]:px-64"
      id="home"
    >
      <motion.div
        className="bg absolute top-0 left-0 -z-10 w-full h-screen opacity-[0.2] pointer-events-none max-[767px]:hidden"
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 2, ease: "easeOut" }}
      >
        <Image src={bgImage} alt="background-image" className="w-full h-full object-cover" />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-[768px]:text-center"
      >
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="text-[3.2rem] font-bold max-[500px]:text-[2rem]"
        >
          {t("welcome")}
        </motion.h3>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="text-[5.6rem] font-bold leading-[1.3] max-[500px]:text-[2.5rem]"
        >
          {t("name")}
        </motion.h1>

        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="mb-8 text-[3.2rem] font-bold max-[500px]:text-[2rem] max-[560px]:mb-4"
        >
          {t("And")} <WriteEffect />
        </motion.h3>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.5 }}
          className="txt text-start p-0 w-[57%] text-4xl leading-snug max-[767px]:text-center max-[767px]:w-11/12 max-[767px]:mx-auto"
        >
          {t("where and age")}
        </motion.p>

        <motion.div>
          <motion.a
            whileHover={{ scale: 1.1, y: -5 }}
            whileTap={{ scale: 0.9 }}
            className="inline-flex cursor-pointer justify-center items-center w-16 h-16 bg-transparent border-c2 text-[2rem] text-c2 ml-0 mr-6 my-12 rounded-[50%] border-[0.2rem] border-solid hover:bg-c2 hover:text-c1"
            target="_blank"
            href="https://wa.me/963935101347"
          >
            <FaWhatsapp />
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.1, y: -5 }}
            whileTap={{ scale: 0.9 }}
            className="inline-flex cursor-pointer justify-center items-center w-16 h-16 bg-transparent border-c2 text-[2rem] text-c2 ml-0 mr-6 my-12 rounded-[50%] border-[0.2rem] border-solid hover:bg-c2 hover:text-c1"
            target="_blank"
            href="https://t.me/abdullahasson"
          >
            <FaTelegramPlane />
          </motion.a>
        </motion.div>
      </motion.div>

      <div>
        <CreativeImage
          src="/images/assets/personal-small.jpg"
          alt="my-photo"
          className={`${isRtl ? 'mr-auto' : 'ml-auto'} `}
        />
      </div>

      <motion.a
        href="#expertise"
        className="absolute left-1/2 bottom-7 -translate-x-1/2 text-[4rem] text-c2 max-[560px]:bottom-0"
        initial={{ y: 0 }}
        animate={{ y: [0, -10, 0] }}
        transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
      >
        <i className="bx bx-chevrons-down" />
      </motion.a>
    </section>
  );
}

export default Home;