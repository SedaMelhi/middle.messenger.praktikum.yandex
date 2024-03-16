import Block from './../../core/Block';
import { IProps, RefType } from './../../core/Block';
import Component from './errorLine.hbs?raw';

export class ErrorLine extends Block<IProps, RefType> {
  constructor(props: IProps) {
    super({
      ...props,
    });
  }
  protected render(): string {
    return Component;
  }
}
