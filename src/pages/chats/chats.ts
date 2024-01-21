import Handlebars from 'handlebars';
import user1 from '../../assets/user-img.png';
import user2 from '../../assets/user-img2.png';

export { default as Chats } from './chats.hbs?raw';

Handlebars.registerHelper('users', () => {
  return [
    {
      name: 'Хеда Амирова',
      avatar: user2,
      message: 'Lorem ipsum dolor sit.',
      time: '05:25 pm',
      count: 2,
    },
    {
      name: 'Expocar',
      avatar: user1,
      active: true,
      message: 'Lorem ipsum dolor sit.',
      time: '07:12 pm',
      count: 3,
    },
    { name: 'Seda Gudieva', avatar: '', message: 'Hello!', time: '11:00 pm' },
    {
      name: 'Хеда Амирова',
      avatar: user2,
      message: 'Lorem ipsum dolor sit.',
      time: '05:25 pm',
      count: 2,
    },
    { name: 'Satoru Gojo', avatar: '', message: 'Hello!', time: '11:00 pm' },
    {
      name: 'Хеда Амирова',
      avatar: user2,
      message: 'Lorem ipsum dolor sit.',
      time: '05:25 pm',
      count: 2,
    },
    {
      name: 'Expocar',
      avatar: user1,
      message: 'Lorem ipsum dolor sit.',
      time: '07:12 pm',
      count: 3,
    },
    { name: 'Seda Gudieva', avatar: '', message: 'Hello!', time: '11:00 pm' },
    {
      name: 'Хеда Амирова',
      avatar: user2,
      message: 'Lorem ipsum dolor sit.',
      time: '05:25 pm',
      count: 2,
    },
    { name: 'Satoru Gojo', avatar: '', message: 'Hello!', time: '11:00 pm' },
  ];
});
