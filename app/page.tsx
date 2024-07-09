import { HeroSection } from '@/components/HeroSection/HeroSection';
import { FeaturesSection } from '@/components/FeaturesSection/FeaturesSection';
import { PortfolioSection } from '@/components/PortfolioSection/PortfolioSection';
import { QuestionsSection } from '@/components/QuestionsSection/QuestionsSection';
import { CommentsSection } from '@/components/CommentsSection/CommentsSection';
import FloatingText from '@/components/elements/FloatingText/FloatingText';

export default function Home() {
  return (
    <>
      <HeroSection />
      <FeaturesSection />
      <PortfolioSection />
      <QuestionsSection />
      <CommentsSection />
      <FloatingText text="VIN ART STUDIO" />
    </>
  );
}
