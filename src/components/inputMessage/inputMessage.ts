import { InputField } from '..';
import Block, { IProps } from '../../core/Block';
import Component from './inputMessage.hbs?raw';

type Refs = {
  message: InputField;
};

export class InputMessage extends Block<IProps, Refs> {
  public getValue() {
    return this.refs.message.getValue();
  }
  protected render() {
    return Component;
  }
}
