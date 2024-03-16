import Block from './../../core/Block';
import { IProps, RefType } from './../../core/Block';
import ButtonElement from './button.hbs?raw';

interface ButtonProps extends IProps {
  classes: string;
  page: string;
  onClick: (e: Event) => void;
}
export class Button extends Block<ButtonProps, RefType> {
  constructor(props: ButtonProps) {
    super({
      ...props,
      events: {
        click: props.onClick,
      },
    });
  }
  protected init(): void {
    if (this.props.onClick) {
      this.props.events = {
        click: this.props.onClick,
      };
    }
  }

  protected render(): string {
    return ButtonElement;
  }
}
