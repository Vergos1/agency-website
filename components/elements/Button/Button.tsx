import React from 'react';
import s from './button.module.scss';
import Link from 'next/link';
import LinkIcon from '@/assets/icons/link-arrow.svg';

/**
 * @interface ButtonProps
 * @property {React.ReactNode} children - The content to be displayed inside the button.
 * @property {"primary" | "secondary" | "unstyled"} [variant] - The variant of the button. Defaults to "primary".
 * @property {boolean} [iconVisible] - Whether to display an icon inside the button.
 * @property {string} [className] - The CSS class to apply to the button.
 * @property {() => void} [onClick] - The function to call when the button is clicked.
 * @property {string} [url] - The URL to navigate to when the button is clicked. If provided, the button will be rendered as a link.
 * */
export interface ButtonProps {
  children?: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'unstyled';
  iconVisible?: boolean;
  className?: string;
  onClick?: () => void;
  url?: string;
}

/**
 * The Button component.
 * This component displays a button or a link, depending on whether a URL is provided.
 * The button can have one of three variants: primary, secondary, or unstyled.
 * If a URL is provided, the button is rendered as a link using the Next.js Link component.
 * Otherwise, it is rendered as a standard HTML button.
 *
 * @param {ButtonProps} props - The properties for the Button component.
 * @returns {JSX.Element} The Button component.
 */
const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  iconVisible = true,
  className,
  onClick,
  url,
}: ButtonProps): JSX.Element => {
  return (
    <>
      {url ? (
        <Link
          href={url}
          className={`${s.button} ${className} ${s[variant]}`}
        >
          {children}
          {iconVisible && <LinkIcon className={s.icon} />}
        </Link>
      ) : (
        <button
          onClick={onClick}
          className={`${s.button} ${className} ${s[variant]}`}
        >
          {children}
          {iconVisible && <LinkIcon className={s.icon} />}
        </button>
      )}
    </>
  );
};

export default Button;
