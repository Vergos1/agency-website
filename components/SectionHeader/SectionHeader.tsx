import React from "react";
import s from "./sectionHeader.module.scss";
import Title, {TitleProps} from "@/components/Title/Title";
import Button, {ButtonProps} from "@/components/elements/Button/Button";


/**
 * @interface SectionHeaderProps
 * @extends {TitleProps} - The properties from the Title component.
 * @extends {ButtonProps} - The properties from the Button component.
 * @property {string} buttonClassName - The CSS(module) class to apply to the button.
 * @property {string} buttonText - The text to display on the button.
 * */
interface SectionHeaderProps
 extends TitleProps, ButtonProps {
    buttonClassName?: string;
    buttonText?: string;
}


/**
 * The Section Header component.
 * This component displays a title and a button.
 * The title and button properties are inherited from the Title and Button components respectively.
 *
 * @param {SectionHeaderProps} props - The properties for the SectionHeader component.
 * @returns {JSX.Element} The SectionHeader component.
 */
const SectionHeader: React.FC<SectionHeaderProps> = ({
                                                         title = "title",
                                                         subtitle = "subtitle",
                                                         subtitlePosition = "top",
                                                         titleFontSize = "32px",
                                                         titleMaxWidth = "max-content",
                                                         buttonClassName,
                                                         onClick,
                                                         url,
                                                         buttonText = "buttonText",
                                                     }: SectionHeaderProps): JSX.Element => {
    return (
     <div className={s.wrapper}>
         <Title
          title={title}
          subtitle={subtitle}
          subtitlePosition={subtitlePosition}
          titleFontSize={titleFontSize}
          titleMaxWidth={titleMaxWidth}
         />

         {buttonText && (
          <Button
           url={url}
           onClick={onClick}
           className={buttonClassName}
          >
              {buttonText}
          </Button>
         )}
     </div>
    );
}

export default SectionHeader;