import {
  StarIcon,
  Component,
  HomeIcon,
  ScrollText,
  Phone
} from 'lucide-react';

export const dockData = [
  {
    title: 'nav1',
    icon: (
      <HomeIcon className='h-full w-full text-neutral-600 dark:text-neutral-300' />
    ),
    href: '#',
  },
  {
    title: 'nav2',
    icon: (
      <ScrollText className='h-full w-full text-neutral-600 dark:text-neutral-300' />
    ),
    href: '#expertise',
  },
  {
    title: 'nav3',
    icon: (
      <Component className='h-full w-full text-neutral-600 dark:text-neutral-300' />
    ),
    href: '#projects',
  },
  {
    title: 'nav4',
    icon: (
      <StarIcon className='h-full w-full text-neutral-600 dark:text-neutral-300' />
    ),
    href: '#testimonials',
  },
  {
    title: 'nav5',
    icon: (
      <Phone className='h-full w-full text-neutral-600 dark:text-neutral-300' />
    ),
    href: '#contact',
  }
];