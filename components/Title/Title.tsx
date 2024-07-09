'use client';
import React from 'react';
import s from './title.module.scss';
import { Properties } from 'csstype';

/**
 * @interface TitleProps
 * @property {string} title - The main title text.
 * @property {string} subtitle - The subtitle text.
 * @property {"top" | "bottom"} [subtitlePosition] - The position of the subtitle relative to the title. Defaults to "top".
 * @property {"32px" | "28px"} [titleFontSize] - The font size of the title. Defaults to "32px".
 * @property {"max-content" | "100%" | "75%" | "50%" | "30%" | "20%" | "10%" | "none" | "initial" | "inherit" | "unset" | "revert" | "auto" | "fit-content" | "min-content" | "fill-available" | "fill" | "contain" | "cover"} [titleMaxWidth] - The maximum width of the title. Defaults to "max-content".
 * */
export interface TitleProps {
  title: string;
  subtitle?: string;
  subtitlePosition?: 'top' | 'bottom';
  titleUpperCase?: boolean;
  titleFontSize?: '32px' | '28px';
  titleMaxWidth?:
    | 'max-content'
    | '100%'
    | '75%'
    | '50%'
    | '30%'
    | '20%'
    | '10%'
    | 'none'
    | 'initial'
    | 'inherit'
    | 'unset'
    | 'revert'
    | 'auto'
    | 'fit-content'
    | 'min-content'
    | 'fill-available'
    | 'fill'
    | 'contain'
    | 'cover';
}

/**
 * The Title component.
 * This component displays a title and a subtitle.
 * The position of the subtitle can be set to either "top" or "bottom".
 * The font size and maximum width of the title can also be customized.
 *
 * @param {TitleProps} props - The properties for the Title component.
 * @returns {JSX.Element} The Title component.
 */
const Title: React.FC<TitleProps> = ({
  title = 'title',
  subtitle,
  subtitlePosition = 'top',
  titleUpperCase,
  titleFontSize = '32px',
  titleMaxWidth = 'max-content',
}: TitleProps): JSX.Element => {
  const titleStyles: Properties = {
    textTransform: titleUpperCase ? 'uppercase' : 'none',
    maxWidth: titleMaxWidth,
    fontSize: titleFontSize,
  };

  return (
    <div className={s.wrapper}>
      {/*doc: if props subtitlePosition === top*/}
      {subtitlePosition === 'top' && subtitle && (
        <p className={s.subtitle}>{subtitle}</p>
      )}

      <h2 style={titleStyles} className={s.title}>
        {title}
      </h2>

      {/*doc: if props subtitlePosition === bottom*/}
      {subtitlePosition === 'bottom' && subtitle && (
        <p className={s.subtitle}>{subtitle}</p>
      )}
    </div>
  );
};

export default Title;
