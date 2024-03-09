import Block from './../../core/Block';
import { IProps, RefType } from './../../core/Block';
import Component from './errorLine.hbs?raw';

interface Props extends IProps {
  classes: string;
  ref: string;
}
export class ErrorLine extends Block<Props, RefType> {
  constructor(props: Props) {
    super({
      ...props,
    });
  }
  // protected init(): void {
  //   if (this.props.onClick) {
  //     this.props.events = {
  //       click: this.props.onClick,
  //     };
  //   }
  // }

  protected render(): string {
    return Component;
  }
}
