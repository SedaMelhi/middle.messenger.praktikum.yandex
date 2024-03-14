import { navigate } from '../../core/navigate';
import Block from './../../core/Block';
import Component from './nav.hbs?raw';

export class Nav extends Block<object> {
  constructor() {
    super({
      toLink: () => {
        navigate('chats');
      },
    });
  }
  protected render(): string {
    return Component;
  }
}
