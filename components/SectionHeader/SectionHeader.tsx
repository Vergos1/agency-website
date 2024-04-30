import React from "react";
import s from "./sectionHeader.module.scss";
import Title, {TitleProps} from "@/components/Title/Title";

interface SectionHeaderProps extends TitleProps {

}

const SectionHeader: React.FC<SectionHeaderProps> = ({
                                                         title = "title",
                                                         subtitle = "subtitle",
                                                         subtitlePosition = "top",
                                                         titleFontSize = "32px",
                                                         titleMaxWidth = "max-content",

                                                     }) => {
    return (
     <div className={s.wrapper}>
         <Title
          title={title}
          subtitle={subtitle}
          subtitlePosition={subtitlePosition}
          titleFontSize={titleFontSize}
          titleMaxWidth={titleMaxWidth}
         />

     </div>
    );
}

export default SectionHeader;