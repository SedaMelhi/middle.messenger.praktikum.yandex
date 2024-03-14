import Component from './message.hbs?raw';
import Block from '../../core/Block';

export class Message extends Block<object> {
  protected render() {
    return Component;
  }
}
