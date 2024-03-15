import InputComponent from './inputField.hbs?raw';
import Block from '../../core/Block';
import { IProps } from '../../core/Block';
import { Input } from '../input/input';
import { ErrorLine } from './../errorLine';

export interface InputFieldProps extends IProps {
  name: string;
  value: string;
  type: string;
  placeholder: string;
  blur?: string;
  onBlur: (e: Event) => void;
}

type Refs = {
  input: Input;
  errorLine: ErrorLine;
};

export class InputField extends Block<InputFieldProps, Refs> {
  constructor(props: InputFieldProps) {
    super({
      ...props,
      error: false,
      classes: props.classes || 'input__element',
      value: props.value ? props.value : '',
      onBlur: props.blur === 'none' ? () => true : () => this.validate(),
    });
  }
  public getValue() {
    if (!this.validate()) {
      return null;
    }
    return this.refs.input.element.value;
  }

  private validate() {
    const value = this.refs.input.element.value;
    const error = this.props.validate(value);
    if (error) {
      //this.refs.input.setProps({ error, value });
      this.refs.errorLine.setProps({ error });
      return false;
    } else {
      //this.refs.input.setProps({ error, value });
      this.refs.errorLine.setProps({ error });
    }
    return true;
  }

  protected render(): string {
    return InputComponent;
  }
}
