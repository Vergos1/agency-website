'use client';
import s from './floatingText.module.scss';
import { scrollTextVariants } from '@/utils/constants/animation.constants';
import { motion } from 'framer-motion';

export interface FloatingTextProps {
  text: string;
}

const FloatingText: React.FC<FloatingTextProps> = ({
  text = 'Text',
}) => {
  return (
    <div className={s.floatingContainer}>
      <motion.div variants={scrollTextVariants} animate="animate">
        <span className={s.floatingText}>{text}</span>
      </motion.div>
      <motion.div variants={scrollTextVariants} animate="animate">
        <span className={s.floatingText}>{text}</span>
      </motion.div>
      <motion.div variants={scrollTextVariants} animate="animate">
        <span className={s.floatingText}>{text}</span>
      </motion.div>
    </div>
  );
};

export default FloatingText;
