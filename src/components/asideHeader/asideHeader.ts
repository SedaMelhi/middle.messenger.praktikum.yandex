import Block from '../../core/Block';
import Component from './asideHeader.hbs?raw';

export class AsideHeader extends Block<object> {
  protected render(): string {
    return Component;
  }
}
