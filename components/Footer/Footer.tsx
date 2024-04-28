"use client";
import React from 'react';
import s from './footer.module.scss';
import Link from "next/link";
import ArrowIcon from "@/assets/icons/arrow-sprite.svg";
import Image from "next/image";

const pagesLinks = [
    {
        title: "Home",
        link: "/"
    },
    {
        title: "Portfolio",
        link: "/"
    },
    {
        title: "About Us",
        link: "/"
    },
    {
        title: "Services",
        link: "/"
    },
];
const phonesLinks = [
    {
        number: "+38 (066) 363 35 31",
        link: "+380663633531"
    },
    {
        number: "+38 (096) 011 30 33",
        link: "+380960113033"
    }
];
const messengersLinks = [
    {
        title: "Telegram",
        link: "https://t.me/vinartstudio"
    },
    {
        title: "WhatsApp",
        link: "https://wa.me/380663633531"
    },
    {
        title: "Viber",
        link: "viber://chat?number=+380663633531"
    },
];
export default function Footer() {
    return (
     <footer className={s.footer}>
         <div className={s.itemTop}>
             <div className={`${s.container} ${s.containerTop}`}>
                 <div className={s.navWrapper}>
                     <div className={s.leftItem}>
                         <h1 className={s.title}>
                             <span className={s.withArrowItem}>
                                 Let’s
                                 <Image
                                  src={ArrowIcon}
                                  alt="arrow"
                                  width={50}
                                  height={50}
                                 />
                             </span>
                             Work Together
                         </h1>
                         <p className={s.description}>
                             A more meaningful home for photography
                         </p>
                     </div>

                     <div className={s.rightItem}>
                         <div className={s.navLinks}>
                             <span className={s.navTitle}>pages</span>
                             <div className={s.linksWrapper}>
                                 {pagesLinks.map((item, index) => (
                                  <Link key={index} href={item.link} className={s.link}>
                                      {item.title}
                                  </Link>
                                 ))}
                             </div>
                         </div>
                         <div className={s.navLinks}>
                             <span className={s.navTitle}>phones</span>
                             <div className={s.linksWrapper}>
                                 {phonesLinks.map((item, index) => (
                                  <a key={index} href={`tel:${item.link}`} className={s.link}>
                                      {item.number}
                                  </a>
                                 ))}
                             </div>
                         </div>
                         <div className={s.navLinks}>
                             <span className={s.navTitle}>messengers</span>
                             <div className={s.linksWrapper}>
                                 {messengersLinks.map((item, index) => (
                                  <a key={index} href={item.link} className={s.link}>{item.title}</a>
                                 ))}
                             </div>
                         </div>
                     </div>
                 </div>
             </div>
         </div>
         <div className={s.itemBottom}>
             <div className={s.container}>
                 <div className={s.bottomWrapper}>
                     <div className={s.links}>
                         <Link className={s.link} href={"/"}>Terms & Conditions</Link>
                         |
                         <Link className={s.link} href={"/"}>Privacy Policy</Link>
                     </div>
                     <p className={s.copyright}>
                         © 2024 Vin Art Studio. All Rights Reserved.
                     </p>
                 </div>
             </div>
         </div>
     </footer>
    )
}