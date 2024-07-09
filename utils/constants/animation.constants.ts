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

// ACCORDION ANIMATION
export const buttonAnimation = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
};

export const contentAnimation = {
  initial: { opacity: 0, maxHeight: 0 },
  animate: {
    opacity: 1,
    maxHeight: 500,
    transition: {
      opacity: { duration: 0.5 },
      maxHeight: { duration: 0.5, delay: 0.1 },
    },
  },
  exit: {
    opacity: 0,
    maxHeight: 0,
    transition: {
      opacity: { duration: 0.3 },
      maxHeight: { delay: 0, duration: 0.3 },
    },
  },
};
//
