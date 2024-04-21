"use client";
import {useRef, useState} from "react";
import s from "./localDropdown.module.scss";
import Image from "next/image";
import useClickAway from "@/hooks/useOutsideClick";
import ChevronIcon from "@/assets/icons/chevron.svg";


const languages: string[] = ["ua", "en"];
export default function LocalDropdown() {
    const [open, setOpen] = useState<boolean>(false);
    const [language, setLanguage] = useState<string>("ua");
    const clickRef = useRef<HTMLButtonElement>(null);

    useClickAway(clickRef, () => {
        setOpen(false);
    });

    const handleOpenDropdown = () => {
        setOpen(!open)
    }

    return (
     <button ref={clickRef} className={s.dropdown} onClick={handleOpenDropdown}>
         <div className={s.dropdownButton}>
             UA
             <Image src={ChevronIcon} alt="arrow"/>
         </div>
         {open && (
          <ul className={s.list}>
              {languages.map((language, index) => (
               <li key={index} className={s.item}>
                   <button className={s.button}>
                       {language}
                   </button>
               </li>
              ))}
          </ul>
         )}
     </button>
    )
}