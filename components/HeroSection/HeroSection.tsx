import s from "./heroSection.module.scss";
import Image from "next/image";
import Play from "@/assets/icons/play-circle.svg";

const HeroSection = () => {
    return (
     <section className={s.hero}>
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
                 <div className={s.item}>
                     <button className={s.playVideoButton}>
                         <Image className={s.play} src={Play} alt="play" width={24} height={24}/>
                         <span className={s.buttonText}>Watch the video</span>
                     </button>
                     <p className={s.description}>
                         We create craft websites that help unlock the potential of businesses. We help companies to
                         become
                         more understandable and unique for their customers.
                     </p>
                 </div>
             </div>
         </div>
     </section>
    )
}
export default HeroSection;