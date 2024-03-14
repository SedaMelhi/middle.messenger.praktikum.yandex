import Block from '../../core/Block';
import { IProps } from '../../core/Block';
import Component from './link.hbs?raw';

export class Link extends Block<IProps> {
  constructor(props: IProps) {
    super({
      ...props,
      events: {
        click: props.toLink,
      },
    });
  }
  protected render(): string {
    return Component;
  }
}
