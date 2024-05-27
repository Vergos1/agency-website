import s from "./featuresSection.module.scss";
import Title from "@/components/Title/Title";
import SectionHeader from "@/components/SectionHeader/SectionHeader";


const FeaturesSection = () => {
    return (
     <section className={s.features}>
         <div className="container">
             <SectionHeader
              title="We have been designing, creating, and maintaining it-products since 2019. We provide full-cycle services - from planning and evaluating an idea to launching a product."
              subtitle="About us"
              titleMaxWidth="75%"
              buttonText="view all works"
              mb="70px"
              url="/"
             />
             <div className={s.wrapper}>
                 test text
             </div>
         </div>
     </section>
    )
}
export default FeaturesSection;