import React from 'react';
import s from './featuresBlocks.module.scss';
import { FeaturesDataType } from '@/utils/types/data.types';

type Props = {
  data: FeaturesDataType[];
};
export const FeaturesBlocks: React.FC<Props> = ({ data }) => {
  return (
    <div className={s.wrapper}>
      {data.map((item, index) => (
        <div className={s.item} key={index}>
          <div className={s.info}>
            <h6 className={s.title}>{item.title}</h6>
            <p className={s.description}>{item.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};
