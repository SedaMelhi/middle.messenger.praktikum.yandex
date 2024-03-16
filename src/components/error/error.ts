import Block from './../../core/Block';
import Component from './error.hbs?raw';

export class Error extends Block<object> {
  protected render(): string {
    return Component;
  }
}
