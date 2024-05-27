import { AppRoutes } from '../types/app.types';
import { FooterLinksType } from '../types/data.types';

export const phonesListLinks: FooterLinksType[] = [
  {
    number: '+38 (066) 363 35 31',
    link: '+380663633531',
  },
  {
    number: '+38 (096) 011 30 33',
    link: '+380960113033',
  },
];

export const messengersLinks: FooterLinksType[] = [
  {
    title: 'Telegram',
    link: 'https://t.me/vinartstudio',
  },
  {
    title: 'WhatsApp',
    link: 'https://wa.me/380663633531',
  },
  {
    title: 'Viber',
    link: 'viber://chat?number=+380663633531',
  },
];

export const navigationLinks: FooterLinksType[] = [
  {
    title: 'Home',
    link: AppRoutes.home,
  },
  {
    title: 'Portfolio',
    link: AppRoutes.portfolio,
  },
  {
    title: 'About Us',
    link: AppRoutes.about,
  },
  {
    title: 'Services',
    link: AppRoutes.services,
  },
  {
    title: 'Contacts',
    link: AppRoutes.contacts,
  },
];
