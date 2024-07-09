'use client';
import s from './appHeader.module.scss';
import { useRef, useState } from 'react';
import Link from 'next/link';
import { motion, useCycle } from 'framer-motion';
import { useDimensions } from '@/utils/hooks/useDimensions';
import LocalDropdown from '@/components/elements/LocalDropdown/LocalDropdown';
import MenuButton from '@/components/elements/MenuButton/MenuButton';
import Logo from '@/assets/icons/logo.svg';
import { AppRoutes } from '@/utils/types/app.types';
import { navigationLinks } from '@/utils/constants/data.constants';
import { burgerAnimation } from '@/utils/constants/animation.constants';
import { overflowHiddenModal } from '@/utils/functions';

export default function AppHeader() {
  const [openMenu, setOpenMenu] = useState<boolean>(false);
  const [isOpen, toggleOpen] = useCycle(false, true);
  const containerRef = useRef(null);
  const { height } = useDimensions(containerRef);

  const handleOpenMenu = () => {
    setOpenMenu(!openMenu);
    toggleOpen();
    overflowHiddenModal(openMenu);
  };

  return (
    <header className={s.header}>
      <div className={s.container}>
        <Link href={AppRoutes.home}>
          <Logo className={s.logo} />
        </Link>

        <nav className={s.navigation}>
          {navigationLinks.map((item, index) => (
            <li key={index} className={s.listItem}>
              <Link href={item.link} className={s.link}>
                {item.title}
              </Link>
            </li>
          ))}
        </nav>
        <div className={s.rightContent}>
          <LocalDropdown />
          <motion.nav
            initial={false}
            animate={isOpen ? 'open' : 'closed'}
            custom={height}
            ref={containerRef}
          >
            <motion.div
              className={s.background}
              variants={burgerAnimation}
            />
            <MenuButton handler={handleOpenMenu} open={openMenu} />
          </motion.nav>
        </div>
      </div>
    </header>
  );
}
