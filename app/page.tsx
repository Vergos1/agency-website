import { HeroSection } from '@/components/HeroSection/HeroSection';
import { FeaturesSection } from '@/components/FeaturesSection/FeaturesSection';
import { PortfolioSection } from '@/components/PortfolioSection/PortfolioSection';
import { QuestionsSection } from '@/components/QuestionsSection/QuestionsSection';

export default function Home() {
  return (
    <>
      <HeroSection />
      <FeaturesSection />
      <PortfolioSection />
      <QuestionsSection />
    </>
  );
}
