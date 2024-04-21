"use client";
import React, {useRef, useState} from "react";
import s from "./localDropdown.module.scss";
import Image from "next/image";
import useClickAway from "@/hooks/useOutsideClick";
import ChevronIcon from "@/assets/icons/chevron.svg";


const languages: string[] = ["ua", "en"];
export default function LocalDropdown() {
    const [open, setOpen] = useState<boolean>(false);
    const [language, setLanguage] = useState<string>("ua");
    const clickRef = useRef<HTMLButtonElement>(null);

    console.log(language);

    useClickAway(clickRef, () => {
        setOpen(false);
    });

    const handleOpenDropdown = () => {
        setOpen(!open)
    }

    const handleSelectLanguage = (event: React.MouseEvent<HTMLButtonElement>) => {
        const language = event.currentTarget.textContent;
        //doc: Extract language from the button's text
        if (language) {
            setLanguage(language);
            setOpen(false);
        }
    }

    return (
     <button ref={clickRef} className={s.dropdown} onClick={handleOpenDropdown}>
         <div className={s.dropdownButton}>
             {language}
             <Image src={ChevronIcon} alt="arrow"/>
         </div>
         {open && (
          <ul className={s.list}>
              {languages.map((language, index) => (
               <li key={index} className={s.item}>
                   <span
                    onClick={handleSelectLanguage}
                    className={s.button}
                   >
                       {language}
                   </span>
               </li>
              ))}
          </ul>
         )}
     </button>
    )
}