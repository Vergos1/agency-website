'use client';
import React from 'react';
import s from './appFooter.module.scss';
import Link from 'next/link';
import ArrowIcon from '@/assets/icons/arrow-sprite.svg';
import { AppRoutes } from '@/utils/types/app.types';
import {
  messengersLinks,
  navigationLinks,
  phonesListLinks,
} from '@/utils/constants/data.constants';

export default function AppFooter() {
  return (
    <footer className={s.footer}>
      <div className={s.itemTop}>
        <div className={`${s.container} ${s.containerTop}`}>
          <div className={s.navWrapper}>
            <div className={s.leftItem}>
              <h1 className={s.title}>
                <span className={s.withArrowItem}>
                  Let’s
                  <ArrowIcon />
                </span>
                Work Together
              </h1>
              <p className={s.description}>
                A more meaningful home for photography
              </p>
            </div>

            <div className={s.rightItem}>
              <div className={s.navLinks}>
                <span className={s.navTitle}>pages</span>
                <div className={s.linksWrapper}>
                  {navigationLinks.map((item, index) => (
                    <Link
                      key={index}
                      href={item.link}
                      className={s.link}
                    >
                      {item.title}
                    </Link>
                  ))}
                </div>
              </div>
              <div className={s.navLinks}>
                <span className={s.navTitle}>phones</span>
                <div className={s.linksWrapper}>
                  {phonesListLinks.map((item, index) => (
                    <a
                      key={index}
                      href={`tel:${item.link}`}
                      className={s.link}
                    >
                      {item.number}
                    </a>
                  ))}
                </div>
              </div>
              <div className={s.navLinks}>
                <span className={s.navTitle}>messengers</span>
                <div className={s.linksWrapper}>
                  {messengersLinks.map((item, index) => (
                    <a
                      key={index}
                      href={item.link}
                      className={s.link}
                      target="_blank"
                    >
                      {item.title}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={s.itemBottom}>
        <div className={s.container}>
          <div className={s.bottomWrapper}>
            <div className={s.links}>
              <Link className={s.link} href={AppRoutes.home}>
                Terms & Conditions
              </Link>
              |
              <Link className={s.link} href={AppRoutes.home}>
                Privacy Policy
              </Link>
            </div>
            <p className={s.copyright}>
              © 2024 Vin Art Studio. All Rights Reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
