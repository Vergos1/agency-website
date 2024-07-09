'use client';
import s from './heroSection.module.scss';
import { videoAnimation } from '@/utils/constants/animation.constants';
import { useDimensions } from '@/utils/hooks/useDimensions';
import { AnimatePresence, motion, useCycle } from 'framer-motion';
import { useRef, useState } from 'react';
import PlayIcon from '@/assets/icons/play-circle.svg';
import CloseIcon from '@/assets/icons/close-icon.svg';
import ReactPlayer from 'react-player';
import { overflowHiddenModal } from '@/utils/functions';

export const HeroSection = () => {
  const containerRef = useRef(null);
  const { height } = useDimensions(containerRef);
  const [isOpen, toggleOpen] = useCycle(false, true);
  const [openMenu, setOpenMenu] = useState<boolean>(false);
  const [videoKey, setVideoKey] = useState<number>(0);

  const handleOpenMenu = () => {
    setOpenMenu(!openMenu);
    overflowHiddenModal(openMenu);
    toggleOpen();
    if (openMenu) {
      setVideoKey((prevKey) => prevKey + 1);
    }
  };

  return (
    <section className={s.hero}>
      <div className="container">
        <div className={s.wrapper}>
          <div className={s.item}>
            <h1 className={s.title}>
              BUILD & LAUNCH
              <br />
              <span className={s.secondLine}>beautiful design</span>
              <br />
              <span className={s.thirdLine}>web-dev</span>
            </h1>
            <button className={s.buttonScroll}>
              scroll <br /> down
            </button>
          </div>
          <div className={s.item}>
            <motion.nav
              initial={false}
              animate={isOpen ? 'open' : 'closed'}
              custom={height}
              ref={containerRef}
            >
              <motion.div
                className={s.background}
                variants={videoAnimation}
              >
                <button
                  onClick={handleOpenMenu}
                  className={s.closeButton}
                >
                  <CloseIcon />
                </button>
                <AnimatePresence>
                  {openMenu && (
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ rotate: 360, scale: 1 }}
                      transition={{
                        type: 'spring',
                        stiffness: 260,
                        damping: 20,
                        restDelta: 0.001,
                        duration: 2,
                      }}
                      className={s.videoWrapper}
                    >
                      <div className={s.video}>
                        <ReactPlayer
                          key={videoKey}
                          url="./vinart-studio.mp4"
                          width="100%"
                          height="80%"
                          playing={openMenu}
                          loop
                          autoPlay
                        />
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            </motion.nav>
            <button
              onClick={handleOpenMenu}
              className={s.playVideoButton}
            >
              <PlayIcon className={s.play} />
              <span className={s.buttonText}>Watch the video</span>
            </button>
            <p className={s.description}>
              We create craft websites that help unlock the potential
              of businesses. We help companies to become more
              understandable and unique for their customers.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
