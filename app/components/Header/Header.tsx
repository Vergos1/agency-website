import Image from "next/image";
// import styles from "./Header.module.scss";
import Logo from "../../assets/icons/logo.svg";

export default function Header() {
    return (
     <header>
         <Image src={Logo} alt="logo"/>
         <h1>Header</h1>
     </header>
    )
}