// Next js
import Link from "next/link"
// Next Intl
import { useLocale, useTranslations } from "next-intl"
// Contants Data
import { dockData } from "@/constants/components";
// Motion
import * as motion from "motion/react-client"
// UI
import { Dock, DockIcon, DockItem, DockLabel } from '@/components/ui/dock';
import { Magnetic } from "./ui/magnetic"

export default function CustomDock() {

    const t = useTranslations('Dock')
    const lang = useLocale();
    const isRTL = lang == 'ar'

    return (
        <motion.div
            initial={{
                x: 0,
                y: -80,
            }}

            animate={{
                x: 0,
                y: 0
            }}
        >
            <div className='fixed top-7 left-1/2 max-w-full -translate-x-1/2 z-50 rotate-180'>
                <Dock className={`items-end pb-5 bg-black/30 backdrop-blur-xl ${isRTL ? 'flex-row-reverse' : ''}`}>
                    {dockData.map((item, idx) => (
                        <Magnetic key={idx}>
                            <Link href={item.href}>
                                <DockItem
                                    className='aspect-square rounded-full bg-neutral-800 rotate-180'
                                >
                                    <DockLabel className="text-xl font-medium -bottom-12">{t(`${item.title}`)}</DockLabel>
                                    <DockIcon>{item.icon}</DockIcon>
                                </DockItem>
                            </Link>
                        </Magnetic>
                    ))}
                </Dock>
            </div>
        </motion.div>
    )
}