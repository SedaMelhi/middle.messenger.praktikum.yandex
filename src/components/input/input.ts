import Block from '../../core/Block';
import { IProps, RefType } from '../../core/Block';

export interface InputProps extends IProps {
  ref: string;
  name: string;
  value: string;
  type: string;
  classes: string;
  placeholder: string;
  onChange: (e: Event) => void;
}
export class Input extends Block<InputProps, RefType> {
  constructor(props: InputProps) {
    super({
      ...props,
      events: {
        change: props.onChange,
      },
    });
  }

  protected render(): string {
    const { classes, placeholder, name, type, value } = this.props;
    return `<input 
        class="${classes}" 
        placeholder="${placeholder}" 
        value="${value}" 
        name="${name}" 
        type="${type}" 
        value="${value}"
    />`;
  }
}
