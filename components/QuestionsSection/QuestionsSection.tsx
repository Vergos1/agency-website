'use client';
import { useState } from 'react';
import Accordion from '../elements/Accordion/Accordion';
import s from './questionsSection.module.scss';
import SectionHeader from '@/components/SectionHeader/SectionHeader';
import {
  questionsListFirstPart,
  questionsListSecondPart,
} from '@/utils/constants/data.constants';

export const QuestionsSection = () => {
  const [open, setOpen] = useState<null | number>(null);

  const handleOpen = (id: number) => {
    if (open === id) {
      setOpen(null);
    } else {
      setOpen(id);
    }
  };

  return (
    <section className={s.questions}>
      <div className="container">
        <SectionHeader
          title="Frequently Asked Questions"
          subtitle="FAQ’s"
          titleMaxWidth="100%"
          buttonText="contact us"
          titleUpperCase
          mb="70px"
          url="/"
        />
        <div className={s.wrapper}>
          <div className={s.accordionList}>
            {questionsListFirstPart.map((item) => (
              <Accordion
                key={item.id}
                isOpen={open === item.id}
                toggle={() => handleOpen(item.id)}
                title={item.title}
                description={item.description}
              />
            ))}
          </div>
          <div className={s.accordionList}>
            {questionsListSecondPart.map((item) => (
              <Accordion
                key={item.id}
                isOpen={open === item.id}
                toggle={() => handleOpen(item.id)}
                title={item.title}
                description={item.description}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
