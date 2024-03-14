import Block from './../../core/Block';
import { IProps } from './../../core/Block';
import Component from './title.hbs?raw';

export class Title extends Block<IProps> {
  constructor(props: IProps) {
    super({
      ...props,
    });
  }
  protected render(): string {
    return Component;
  }
}
