import s from './commentsSection.module.scss';
import SwiperCustom from '../SwiperCustom/SwiperCustom';
import { commentsData } from '@/utils/constants/data.constants';

export const CommentsSection = () => {
  return (
    <section className={s.comments}>
      <div className="container">
        <SwiperCustom data={commentsData} />
      </div>
    </section>
  );
};
