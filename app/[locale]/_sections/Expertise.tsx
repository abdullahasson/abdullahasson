// Next Intl
import { useTranslations } from "next-intl";
// Components
import Title from "@/components/Title";
import ExpertiseList from "@/components/ExpertiseList";


function Expertise() {
  const t = useTranslations("Expertise");

  return (
    <section className="flex flex-col items-center pt-16" id="expertise">
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