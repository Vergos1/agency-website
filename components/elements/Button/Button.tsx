import React from "react";
import s from "./button.module.scss";
import Link from "next/link";


/**
 * @interface ButtonProps
 * @property {React.ReactNode} children - The content to be displayed inside the button.
 * @property {string} [className] - The CSS class to apply to the button.
 * @property {() => void} [onClick] - The function to call when the button is clicked.
 * @property {string} [url] - The URL to navigate to when the button is clicked. If provided, the button will be rendered as a link.
 * */
export interface ButtonProps {
    children?: React.ReactNode;
    className?: string;
    onClick?: () => void;
    url?: string;
}

/**
 * The Button component.
 * This component displays a button or a link, depending on whether a URL is provided.
 * If a URL is provided, the button is rendered as a link using the Next.js Link component.
 * Otherwise, it is rendered as a standard HTML button.
 *
 * @param {ButtonProps} props - The properties for the Button component.
 * @returns {JSX.Element} The Button component.
 */
const Button: React.FC<ButtonProps> = ({
                                           children,
                                           className,
                                           onClick,
                                           url,
                                       }: ButtonProps): JSX.Element => {
    return (
     <>
         {url ? (
          <Link
           href={url}
           className={`${s.button} ${className}`}
          >
              {children}
          </Link>
         ) : (
          <button
           onClick={onClick}
           className={`${s.button} ${className}`}
          >
              {children}
          </button>
         )}
     </>
    );
}

export default Button;