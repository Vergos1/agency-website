'use client';
import s from './accordion.module.scss';
import React from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import ChevronIcon from '@/assets/icons/chevron-question.svg';
import {
  buttonAnimation,
  contentAnimation,
} from '@/utils/constants/animation.constants';

export interface AccordionProps {
  isOpen: boolean;
  toggle: () => void;
  title: string;
  description: string;
}

const Accordion: React.FC<AccordionProps> = ({
  isOpen,
  toggle,
  title = 'Title',
  description = 'Description',
}) => {
  return (
    <AnimatePresence>
      <motion.button
        onClick={toggle}
        key="question"
        {...buttonAnimation}
        className={s.accordion}
      >
        <div className={s.header}>
          <p className={s.title}>{title}</p>
          <span
            className={s.iconWrapper}
            style={{
              transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
            }}
          >
            <ChevronIcon className={s.icon} />
          </span>
        </div>
        {isOpen && (
          <motion.div
            key="answer"
            {...contentAnimation}
            className={s.wrapper}
          >
            <p className={s.description}>{description}</p>
          </motion.div>
        )}
      </motion.button>
    </AnimatePresence>
  );
};
export default Accordion;
