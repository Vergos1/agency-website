import s from './portfolioSection.module.scss';
import SectionHeader from '@/components/SectionHeader/SectionHeader';
import { portfolioData } from '@/utils/constants/data.constants';
import { PortfolioCards } from '../PortfolioCards/PortfolioCards';

export const PortfolioSection = () => {
  return (
    <section className={s.portfolio}>
      <div className="container">
        <SectionHeader
          title="Innovation and quality"
          subtitle="Portfolio"
          titleUpperCase={true}
          titleMaxWidth="max-content"
          buttonText="view all works"
          mb="50px"
          url="/"
        />
        <div className={s.wrapper}>
          <PortfolioCards data={portfolioData} />
        </div>
      </div>
    </section>
  );
};
