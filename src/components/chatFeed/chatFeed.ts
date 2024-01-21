import Handlebars from 'handlebars';

import user1 from '../../assets/user-img.png';

export { default as ChatFeed } from './chatFeed.hbs?raw';

Handlebars.registerHelper('messages', () => {
  return [
    {
      time: '01:34 pm',
      message:
        'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum, dicta nemo? Saepe minus expedita id?',
      avatar: user1,
    },
    {
      time: '01:40 pm',
      message:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat blanditiis tempore quas fuga officiis iusto necessitatibus itaque.',
    },
    {
      time: '02:10 pm',
      message:
        'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum, dicta nemo? Saepe minus expedita id?',
      avatar: user1,
    },
    {
      time: '02:25 pm',
      message: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
    },
    {
      time: '02:25 pm',
      message: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
    },
  ];
});
