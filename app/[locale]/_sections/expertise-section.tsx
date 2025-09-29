// Next Intl
import { useTranslations } from "next-intl";
// Components
import Title from "@/components/Title";
import ExpertiseList from "@/components/ExpertiseList";


function Expertise() {
  const t = useTranslations("Expertise");

  return (
    <section className="flex flex-col items-center pt-16 min-h-[100vh] px-64 pb-[5rem] max-[560px]:px-10 max-[767px]:px-10" id="expertise">
      {/* Title Section */}
      <Title 
        title={t("expertiseTitle")} 
        secondaryTitle={t("expertiseText")} 
      />


      {/* Expertise List Title */}
      <ExpertiseList 
        title={t("expertiseListTitle")} 
      />
    </section>
  );
}

export default Expertise;