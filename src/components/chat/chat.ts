import { IProps, RefType } from '../../core/Block';
import Handlebars from 'handlebars';
import Component from './chat.hbs?raw';
import Block from '../../core/Block';

export class Chat extends Block<IProps, RefType> {
  constructor(props: IProps) {
    super({
      ...props,
      events: {
        click: props.toDialog,
      },
    });
  }
  protected render(): string {
    return Component;
  }
}

Handlebars.registerHelper('firstChar', function (str) {
  return str.charAt(0);
});
