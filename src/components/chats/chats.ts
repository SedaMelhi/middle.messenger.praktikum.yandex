import { IProps, RefType } from '../../core/Block';
import { navigate } from '../../core/navigate';
import Component from './chats.hbs?raw';
import Block from '../../core/Block';
import user1 from '../../assets/user-img.png';
import user2 from '../../assets/user-img2.png';

export class Chats extends Block<IProps, RefType> {
  constructor() {
    super({
      users: [
        {
          name: 'Хеда Амирова',
          avatar: user2,
          message: 'Lorem ipsum dolor sit.',
          time: '05:25 pm',
          count: 2,
          toDialog: () => navigate('dialog'),
        },
        {
          name: 'Expocar',
          avatar: user1,
          active: true,
          message: 'Lorem ipsum dolor sit.',
          time: '07:12 pm',
          count: 3,
          toDialog: () => navigate('dialog'),
        },
        {
          name: 'Seda Gudieva',
          avatar: '',
          message: 'Hello!',
          time: '11:00 pm',
          toDialog: () => navigate('dialog'),
        },
        {
          name: 'Хеда Амирова',
          avatar: user2,
          message: 'Lorem ipsum dolor sit.',
          time: '05:25 pm',
          count: 2,
          toDialog: () => navigate('dialog'),
        },
        {
          name: 'Satoru Gojo',
          avatar: '',
          message: 'Hello!',
          time: '11:00 pm',
          toDialog: () => navigate('dialog'),
        },
        {
          name: 'Хеда Амирова',
          avatar: user2,
          message: 'Lorem ipsum dolor sit.',
          time: '05:25 pm',
          count: 2,
          toDialog: () => navigate('dialog'),
        },
        {
          name: 'Expocar',
          avatar: user1,
          message: 'Lorem ipsum dolor sit.',
          time: '07:12 pm',
          count: 3,
          toDialog: () => navigate('dialog'),
        },
        {
          name: 'Seda Gudieva',
          avatar: '',
          message: 'Hello!',
          time: '11:00 pm',
          toDialog: () => navigate('dialog'),
        },
        {
          name: 'Хеда Амирова',
          avatar: user2,
          message: 'Lorem ipsum dolor sit.',
          time: '05:25 pm',
          count: 2,
          toDialog: () => navigate('dialog'),
        },
        {
          name: 'Satoru Gojo',
          avatar: '',
          message: 'Hello!',
          time: '11:00 pm',
          toDialog: () => navigate('dialog'),
        },
      ],
    });
  }
  protected render(): string {
    return Component;
  }
}
