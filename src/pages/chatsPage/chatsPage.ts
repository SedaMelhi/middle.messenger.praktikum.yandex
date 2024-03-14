import Block from '../../core/Block';
import { navigate } from '../../core/navigate';
import Component from './chatsPage.hbs?raw';

export class ChatsPage extends Block<object> {
  constructor() {
    super({
      toSettings: () => {
        navigate('settings');
      },
    });
  }
  protected render(): string {
    return Component;
  }
}
