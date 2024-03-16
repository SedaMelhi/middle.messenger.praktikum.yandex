import Block from '../../core/Block';
import { navigate } from '../../core/navigate';
import Component from './mainHeader.hbs?raw';

export class MainHeader extends Block<object> {
  constructor() {
    super({
      toLink: () => {
        navigate('chats');
      },
    });
  }
  protected render() {
    return Component;
  }
}
