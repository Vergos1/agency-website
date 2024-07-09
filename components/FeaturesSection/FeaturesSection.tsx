import s from './featuresSection.module.scss';
import Title from '@/components/Title/Title';
import SectionHeader from '@/components/SectionHeader/SectionHeader';
import { featuresData } from '@/utils/constants/data.constants';
import { FeaturesBlocks } from '../FeaturesBlocks/FeaturesBlocks';
import Button from '../elements/Button/Button';

export const FeaturesSection = () => {
  console.log('lol 1');
  return (
    <section className={s.features}>
      <div className="container">
        <SectionHeader
          title="We have been designing, creating, and maintaining it-products since 2019. We provide full-cycle services - from planning and evaluating an idea to launching a product."
          subtitle="About us"
          titleMaxWidth="75%"
          buttonText="learn more"
          mb="70px"
          url="/"
        />
        <div className={s.wrapper}>
          <FeaturesBlocks data={featuresData} />
          <div className={s.footer}>
            <p className={s.description}>
              Follow the trends! We suggest starting every project
              with a prototype and creating a first-class web design
            </p>
            <Button variant="secondary">follow</Button>
          </div>
        </div>
      </div>
    </section>
  );
};
