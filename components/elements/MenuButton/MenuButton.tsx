import React from "react";
import s from "./menuButton.module.scss";

interface MenuButtonProps {
    handler: () => void;
    open: boolean;
}

const MenuButton: React.FC<MenuButtonProps> = ({handler, open}) => {
    return (
     <button
      onClick={handler}
      className={s.menuButton}
     >
         menu
         <div className={`${s.burgerIcon} ${open ? s.opened : s.closed}`}>
             <div className={s.bar}></div>
             <div className={s.bar}></div>
             <div className={s.bar}></div>
         </div>
     </button>
    )
}
export default MenuButton;