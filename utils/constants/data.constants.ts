import { AppRoutes } from '../types/app.types';
import {
  CommentsDataType,
  FeaturesDataType,
  FooterLinksType,
  PortfolioDataType,
} from '../types/data.types';
import firstImage from '@/assets/images/portfolioSection/first-project.jpg';
import secondImage from '@/assets/images/portfolioSection/two-project.jpg';
import thirdImage from '@/assets/images/portfolioSection/third-project.jpg';
import fourthImage from '@/assets/images/portfolioSection/fourth-project.jpg';
import fifthImage from '@/assets/images/portfolioSection/five-project.jpg';
import sixthImage from '@/assets/images/portfolioSection/six-project.jpg';

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

export const featuresData: FeaturesDataType[] = [
  {
    title: 'Personalized approach',
    description:
      'We believe that every project deserves a unique approach. We will take into account all your ideas and needs to create a design that reflects your personality and engages your audience.',
  },
  {
    title: 'Trend following',
    description:
      "We don't just follow the latest trends, we become the source of them. Our team is constantly looking for innovative approaches to design and technology to keep your product at the forefront of the industry.",
  },
  {
    title: 'Guaranteed support',
    description:
      'When your project is complete, our support is just beginning. We are always here to help you when you need it, providing ongoing support and advice on all matters.',
  },
  {
    title: 'Reliability and quality',
    description:
      "When you work with Vin Art Studio, you can rest assured that your project is in good hands. We don't stop until we achieve perfection.",
  },
];

export const portfolioData: PortfolioDataType[] = [
  {
    title: 'Web design & Development',
    type: 'Mobile App & Branding',
    link: '#',
    image: firstImage,
  },
  {
    title: 'Web design & Development',
    type: 'Mobile App & Branding',
    link: '#',
    image: secondImage,
  },
  {
    title: 'Web design & Development',
    type: 'Mobile App & Branding',
    link: '#',
    image: thirdImage,
  },
  {
    title: 'Web design & Development',
    type: 'Mobile App & Branding',
    link: '#',
    image: fourthImage,
  },
  {
    title: 'Web design & Development',
    type: 'Mobile App & Branding',
    link: '#',
    image: fifthImage,
  },
  {
    title: 'Web design & Development',
    type: 'Mobile App & Branding',
    link: '#',
    image: sixthImage,
  },
];

export const questionsListFirstPart = [
  {
    id: 1,
    title: 'What type of photography do you specialize in?',
    description:
      'I specialize in [Portrait, Landscape, Event, etc.] photography, capturing moments that tell unique stories. I specialize in [Portrait, Landscape, Event, etc.] photography, capturing moments that tell unique stories.',
  },
  {
    id: 2,
    title: 'How can I book a photography session with you?',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ut I specialize in [Portrait, Landscape, Event, etc.] photography, capturing moments that tell unique stories. I specialize in [Portrait, Landscape, Event, etc.] photography, capturing moments that tell unique stories. I specialize in [Portrait, Landscape, Event, etc.] photography, capturing moments that tell unique stories.',
  },
  {
    id: 3,
    title: 'What is your editing process like?',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ut I specialize in [Portrait, Landscape, Event, etc.] photography, capturing moments that tell unique stories. I specialize in [Portrait, Landscape, Event, etc.] photography, capturing moments that tell unique stories. I specialize in [Portrait, Landscape, Event, etc.] photography, capturing moments that tell unique stories.',
  },
  {
    id: 4,
    title: 'Are digital files included in your photography packages?',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ut I specialize in [Portrait, Landscape, Event, etc.] photography, capturing moments that tell unique stories.',
  },
];

export const questionsListSecondPart = [
  {
    id: 5,
    title: 'What equipment do you use for your photography?',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ut I specialize in [Portrait, Landscape, Event, etc.] photography, capturing moments that tell unique stories.',
  },
  {
    id: 6,
    title: 'Do you offer prints of your photographs?',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ut I specialize in [Portrait, Landscape, Event, etc.] photography, capturing moments that tell unique stories. I specialize in [Portrait, Landscape, Event, etc.] photography, capturing moments that tell unique stories. I specialize in [Portrait, Landscape, Event, etc.] photography, capturing moments that tell unique stories. I specialize in [Portrait, Landscape, Event, etc.] photography, capturing moments that tell unique stories.',
  },
  {
    id: 7,
    title: 'Can I request a specific location for a',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ut I specialize in [Portrait, Landscape, Event, etc.] photography, capturing moments that tell unique stories.',
  },
  {
    id: 8,
    title:
      'How long does it take to receive the edited photos after a session?',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ut I specialize in [Portrait, Landscape, Event, etc.] photography, capturing moments that tell unique stories.',
  },
];

export const commentsData: CommentsDataType[] = [
  {
    id: 1,
    name: 'Emily Johnson',
    location: 'USA, California',
    stars: 5,
    comment:
      "Damien's photography doesn't just capture moments; it captures emotions. Hes work is simply mesmerizing.",
  },
  {
    id: 2,
    name: 'Michael Smith',
    location: 'Canada, Toronto',
    stars: 5,
    comment:
      "I've never seen such vibrant and captivating photos. Damien truly has an eye for detail and beauty.",
  },
  {
    id: 3,
    name: 'Sophia Williams',
    location: 'UK, London',
    stars: 4,
    comment:
      "Damien's work is outstanding. Each photo tells a story, and the quality is impeccable. Highly recommended!",
  },
  {
    id: 4,
    name: 'James Brown',
    location: 'Australia, Sydney',
    stars: 5,
    comment:
      "Absolutely stunning work! Damien captures the essence of every moment perfectly. I'm beyond impressed.",
  },
  {
    id: 5,
    name: 'Olivia Davis',
    location: 'New Zealand, Auckland',
    stars: 4,
    comment:
      "Damien's photography is a true work of art. The emotions conveyed through his lens are powerful and moving.",
  },
  {
    id: 6,
    name: 'William Martinez',
    location: 'USA, New York',
    stars: 5,
    comment:
      "Incredible talent! Damien's photos are breathtaking and unique. Each shot is a masterpiece.",
  },
  {
    id: 7,
    name: 'Isabella Garcia',
    location: 'Spain, Madrid',
    stars: 4,
    comment:
      "The quality and creativity of Damien's photography are exceptional. His work stands out in every way.",
  },
  {
    id: 8,
    name: 'Alexander Lee',
    location: 'South Korea, Seoul',
    stars: 5,
    comment:
      "Damien's photography is simply mesmerizing. The way he captures light and emotion is truly special.",
  },
  {
    id: 9,
    name: 'Mia Rodriguez',
    location: 'Mexico, Mexico City',
    stars: 4,
    comment:
      'Beautiful and captivating photos! Damien has a remarkable ability to tell a story through his photography.',
  },
  {
    id: 10,
    name: 'Ethan Wilson',
    location: 'Germany, Berlin',
    stars: 5,
    comment:
      "Damien's work is a perfect blend of artistry and technical skill. Every photo is a joy to behold.",
  },
];
