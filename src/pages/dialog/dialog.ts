import { InputMessage } from '../../components';
import Block from '../../core/Block';
import Component from './dialog.hbs?raw';
import * as validators from '../../utils/validators';
import { navigate } from '../../core/navigate';

type Refs = {
  inputMessage: InputMessage;
};

export class Dialog extends Block<object, Refs> {
  constructor() {
    super({
      validate: {
        message: validators.message,
      },
      onClick: (event: MouseEvent) => {
        event.preventDefault();
        const message = this.refs.inputMessage.getValue();
        console.log({ message });
        if (!message) {
          return;
        }
      },
      toSettings: () => {
        navigate('settings');
      },
    });
  }
  protected render() {
    return Component;
  }
}
