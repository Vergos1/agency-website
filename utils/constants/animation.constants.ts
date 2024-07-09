import { Variants } from 'framer-motion';

export const burgerAnimation = {
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

export const videoAnimation = {
  open: (height = 1000) => ({
    clipPath: `circle(${height * 2 + 200}px at 100% 50%)`,
    transition: {
      delay: 0.15,
      type: 'spring',
      stiffness: 50,
      restDelta: 2,
    },
  }),
  closed: {
    clipPath: 'circle(0px at 100% 50%)',
    transition: {
      delay: 0.15,
      type: 'spring',
      stiffness: 250,
      damping: 40,
    },
  },
};

/**
 * * Анімації для компоненту акордеону.
 * * Включає анімації для кнопки та змісту акордеону.
 */

// Анімація для кнопки акордеону.
export const buttonAnimation = {
  initial: { opacity: 0 }, // Початковий стан: прозорість 0.
  animate: { opacity: 1 }, // Анімований стан: прозорість 1.
  exit: { opacity: 0 }, // Стан при виході: прозорість 0.
};

// Анімація для змісту акордеону.
export const contentAnimation = {
  initial: { opacity: 0, maxHeight: 0 }, // Початковий стан: прозорість 0, максимальна висота 0.
  animate: {
    opacity: 1, // Анімований стан: прозорість 1.
    maxHeight: 500, // Розгортання до максимальної висоти 500px.
    transition: {
      opacity: { duration: 0.15 }, // Тривалість анімації прозорості 0.15 секунд.
      maxHeight: { duration: 0.25, delay: 0.05 }, // Тривалість анімації максимальної висоти 0.25 секунд із затримкою 0.05 секунд.
    },
  },
  exit: {
    opacity: 0, // Стан при виході: прозорість 0.
    maxHeight: 0, // Згортання до мінімальної висоти 0px.
    transition: {
      opacity: { duration: 0.2 }, // Тривалість анімації прозорості 0.2 секунд.
      maxHeight: { duration: 0.35, delay: 0.05 }, // Тривалість анімації максимальної висоти 0.35 секунд із затримкою 0.05 секунд.
    },
  },
};

/**
 * * Конфігурація анімації для плаваючого тексту.
 * * Використовується з `framer-motion` для створення ефекту нескінченного прокручування тексту.
 */
export const scrollTextVariants: Variants = {
  animate: {
    // Початкова та кінцева позиція анімації по осі X.
    x: ['100vw', '-200vw'],
    transition: {
      x: {
        repeat: Infinity, // Анімація повторюється нескінченно.
        repeatType: 'loop', // Анімація повторюється у циклі.
        duration: 25, // Тривалість анімації в секундах.
        ease: 'linear', // Рівномірний рух анімації.
      },
    },
  },
};
