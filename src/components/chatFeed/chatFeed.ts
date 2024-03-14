import Component from './chatFeed.hbs?raw';
import user1 from '../../assets/user-img.png';

import Block, { IProps } from '../../core/Block';

export class ChatFeed extends Block<IProps> {
  constructor(props: IProps) {
    super({
      ...props,
      messages: [
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
      ],
    });
  }
  protected render() {
    return Component;
  }
}
