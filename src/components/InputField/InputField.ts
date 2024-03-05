import { Input } from './../input/Input';
import Block from '../../core/Block';
import { IProps } from '../../core/Block';
import InputComponent from './InputField.hbs?raw';

export interface InputFieldProps extends IProps {
  name: string;
  value: string;
  type: string;
  placeholder: string;
  onChange: (e: Event) => void;
}

type Refs = {
  input: Input;
};

export class InputField extends Block<InputFieldProps, Refs> {
  constructor(props: InputFieldProps) {
    super({
      ...props,
      onChange: () => this.validate(),
    });
  }
  public value() {
    if (!this.validate()) {
      return null;
    }
    return this.refs.input.element!.value;
  }

  private validate() {
    const value = this.refs.input.element.value;
    const error = this.props.validate?.(value);
    if (error) {
      this.refs.errorLine.setProps({ error });
      return false;
    }
    this.refs.errorLine.setProps({ error: undefined });
    return true;
  }

  protected render(): string {
    //const { classes, placeholder, name, type, value } = this.props;
    return InputComponent;
  }
}
