import s from "./page.module.scss";
import Arrow from "@/assets/icons/arrow.svg";
import Image from "next/image";

export default function Home() {
    return (
     <div className="container">
         <div className={s.wrapper}>
             <div className={s.item}>
                 <h1 className={s.title}>
                     BUILD & LAUNCH<br/>
                     <span className={s.secondLine}>beautiful design</span><br/>
                     <span className={s.thirdLine}>web-dev</span>
                 </h1>
                 <button className={s.buttonScroll}>
                     scroll <br/> down
                 </button>
             </div>
         </div>
     </div>
    );
}
