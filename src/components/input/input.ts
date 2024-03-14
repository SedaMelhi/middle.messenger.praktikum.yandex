import Block from '../../core/Block';
import { IProps, RefType } from '../../core/Block';

export interface InputProps extends IProps {
  ref: string;
  name: string;
  value: string;
  type: string;
  classes: string;
  placeholder: string;
  error: string;
  onBlur: () => void | '';
}
export class Input extends Block<InputProps, RefType, HTMLInputElement> {
  constructor(props: InputProps) {
    super({
      ...props,
      events: {
        blur: props.onBlur,
      },
    });
  }

  protected render(): string {
    const { classes, placeholder, name, type, value, error } = this.props;

    return `<input 
        class="${classes + (error ? ' input_error' : '')}" 
        placeholder="${placeholder}" 
        value="${value}" 
        name="${name}" 
        type="${type}" 
        value="${value}"
    />`;
  }
}
