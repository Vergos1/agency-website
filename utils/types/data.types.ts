import { StaticImageData } from 'next/image';

export type FooterLinksType = {
  title?: string;
  number?: string;
  link: string;
};

export type FeaturesDataType = {
  title: string;
  description: string;
};

export type PortfolioDataType = {
  title: string;
  type: string;
  link: string;
  image: StaticImageData;
};
