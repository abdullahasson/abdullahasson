"use client";

import { usePathname } from "next/navigation";
import { useLocale } from "next-intl";
import { TbWorld } from "react-icons/tb";
import Link from "next/link";

const ChangeLng = () => {
  const pathname = usePathname();
  const lang = useLocale()

  const changelng = lang == 'en' ? 'ar' : 'en'

  return (
    <Link 
      href={`/${changelng}/${pathname.split("/").slice(2).join("/")}`}
    >
      <div className='flex flex-row-reverse items-center justify-center gap-1 text-xl font-semibold'>
        <TbWorld /> {lang == 'en' ? 'عربي' : 'English'}
      </div>
    </Link>
  );
};

export default ChangeLng;