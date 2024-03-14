import Block from './../../core/Block';
import Component from './avatar.hbs?raw';

export class Avatar extends Block<object> {
  protected render(): string {
    return Component;
  }
}
