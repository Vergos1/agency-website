import React from "react";
import s from "./title.module.scss";

export interface TitleProps  {
    title: string;
    subtitle: string;
    subtitlePosition?: "top" | "bottom";
    titleFontSize?: "32px" | "28px";
    titleMaxWidth?:
     "max-content" | "100%" |
     "75%" | "50%" | "30%" | "20%" |
     "10%" | "none" | "initial" |
     "inherit" | "unset" | "revert" |
     "auto" | "fit-content" | "min-content" |
     "fill-available" | "fill" |
     "contain" | "cover";
}
const Title: React.FC<TitleProps> = ({
                                    title = "title",
                                    subtitle = "subtitle",
                                    subtitlePosition = "top",
                                    titleFontSize = "32px",
                                    titleMaxWidth = "max-content",
                                }) => {
    const titleStyles = {
        maxWidth: titleMaxWidth,
        fontSize: titleFontSize
    }

    return (
     <div className={s.wrapper}>
         {/*doc: if props subtitlePosition === top*/}
         {subtitlePosition === "top" && (
          <p className={s.subtitle}>{subtitle}</p>
         )}

         <h2 style={titleStyles} className={s.title}>
             {title}
         </h2>

         {/*doc: if props subtitlePosition === bottom*/}
         {subtitlePosition === "bottom" && (
          <p className={s.subtitle}>{subtitle}</p>
         )}
     </div>
    );
}

export default Title;