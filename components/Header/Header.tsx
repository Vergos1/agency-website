'use client';
import s from './header.module.scss';
import { useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, useCycle } from 'framer-motion';
import { useDimensions } from '@/utils/hooks/useDimensions';
import LocalDropdown from '@/components/elements/LocalDropdown/LocalDropdown';
import MenuButton from '@/components/elements/MenuButton/MenuButton';
import Logo from '@/assets/icons/logo.svg';
import { AppRoutes } from '@/utils/types/app.types';
import { navigationLinks } from '@/utils/constants/data.constants';

const sidebar = {
  open: (height = 1000) => ({
    clipPath: `circle(${
      height * 2 + 200
    }px at calc(100% - 40px) 40px)`,
    transition: {
      delay: 0.15,
      type: 'spring',
      stiffness: 50,
      restDelta: 2,
    },
  }),
  closed: {
    clipPath: 'circle(0px at calc(100% - 40px) 40px)',
    transition: {
      delay: 0.15,
      type: 'spring',
      stiffness: 250,
      damping: 40,
    },
  },
};

export default function Header() {
  const [openMenu, setOpenMenu] = useState<boolean>(false);
  const [isOpen, toggleOpen] = useCycle(false, true);
  const containerRef = useRef(null);
  const { height } = useDimensions(containerRef);

  const handleOpenMenu = () => {
    setOpenMenu(!openMenu);
    toggleOpen();
  };

  return (
    <header className={s.header}>
      <div className={s.container}>
        <Link href={AppRoutes.home}>
          <Logo className={s.image} />
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
            <motion.div className={s.background} variants={sidebar} />
            <MenuButton handler={handleOpenMenu} open={openMenu} />
          </motion.nav>
        </div>
      </div>
    </header>
  );
}
