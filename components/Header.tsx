"use client"

// react
import { useState } from "react";
import { useTranslations } from "next-intl"
// components
import SwitchLanguages from "./ui/switch-languages";
// svg 
import Logo from "../public/Logo";
import Menu from "../public/Menu_icon";



const Header = () => {
    const t = useTranslations("Header")

    const [openNav, setopenNav] = useState(false)

    const mobileStyleNav =
        `
      max-[768px]:w-full 
      max-[768px]:p-[20px] 
      max-[768px]:overflow-hidden 
      max-[768px]:absolute 
      max-[768px]:top-full 
      max-[768px]:left-0 
      max-[768px]:flex-col 
      max-[768px]:bg-[#323649] 
      max-[768px]:backdrop-blur-[22px]
    `

    return (
        <header className="max-[768px]:p-8 max-[768px]:justify-between fixed w-full py-6 px-64 bg-[#050505a9] backdrop-blur-[22px] flex justify-between items-center z-50 -translate-x-2/4 p-5 left-2/4 top-0">
            <a href="#home" className="logo rotate-180">
                <Logo />
            </a>

            <div
                className="max-[768px]:flex min-[769px]:hidden text-[3.6rem] text-[color:var(--text-color)] cursor-pointer"
                id="menu-icon"
                onClick={() => { setopenNav(!openNav) }}
            >
                <Menu />
            </div>

            <nav
                className={`navbar flex justify-center gap-[60px] max-[768px]:hidden ${openNav && mobileStyleNav}`}
            // style={{display : openNav && window.innerWidth <= 768 ? "flex" : null }}
            >
                {
                    ['#home', '#expertise', '#projects', '#contact'].map((link, index) => (
                        <a
                            key={link}
                            onClick={() => { setopenNav(false) }}
                            href={link}
                            className=" text-[1.7rem] text-[color:var(--text-color)] text-center transition hover:text-c2 px-[9px] py-1.5 hover:rounded-[50px]">
                            {t(`nav${index + 1}`)}
                        </a>
                    ))
                }
            </nav>

            <SwitchLanguages />
        </header>
    )
}


export default Header;