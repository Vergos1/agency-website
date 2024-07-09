import React from 'react';
import s from './portfolioCards.module.scss';
import { PortfolioDataType } from '@/utils/types/data.types';
import Image from 'next/image';
import Link from 'next/link';

type Props = {
  data: PortfolioDataType[];
};
export const PortfolioCards: React.FC<Props> = ({ data }) => {
  return (
    <div className={s.wrapper}>
      {data.map((item, index) => (
        <Link href={item.link} className={s.item} key={index}>
          <Image src={item.image} alt="image" className={s.image} />
          <div className={s.info}>
            <h6 className={s.title}>{item.title}</h6>
            <p className={s.description}>{item.type}</p>
          </div>
        </Link>
      ))}
    </div>
  );
};
