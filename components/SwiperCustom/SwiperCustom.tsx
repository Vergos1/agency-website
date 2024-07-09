'use client';
import 'swiper/css';
import s from './swiperCustom.module.scss';
import { A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { CommentsDataType } from '@/utils/types/data.types';
import FilledStars from '@/assets/icons/filled-stars.svg';
import EmptyStars from '@/assets/icons/empty-stars.svg';

export interface SwiperCustomProps {
  data: CommentsDataType[];
}
const SwiperCustom: React.FC<SwiperCustomProps> = ({ data }) => {
  return (
    <Swiper
      slidesPerView={4}
      spaceBetween={30}
      centeredSlides={true}
      pagination={{
        clickable: true,
      }}
      modules={[A11y]}
      className="mySwiper"
    >
      {data.map((item) => (
        <SwiperSlide key={item.id} className={s.slide}>
          <header className={s.header}>
            <p className={s.name}>{item.name}</p>
            <span className={s.location}>{item.location}</span>
          </header>
          <div className={s.stars}>
            <FilledStars />
            <EmptyStars />
            <EmptyStars />
            <EmptyStars />
            <EmptyStars />
          </div>
          <div className={s.content}>
            <p className={s.comment}>{item.comment}</p>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default SwiperCustom;
