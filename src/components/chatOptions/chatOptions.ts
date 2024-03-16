import Block from '../../core/Block';
import Component from './chatOptions.hbs?raw';

export class ChatOptions extends Block<object> {
  protected render() {
    return Component;
  }
}
