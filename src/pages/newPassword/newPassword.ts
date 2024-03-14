import { InputField } from '../../components';
import { navigate } from '../../core/navigate';
import Block from '../../core/Block';
import Component from './newPassword.hbs?raw';

import * as validators from '../../utils/validators';

type Refs = {
  password: InputField;
  passwordConfirm: InputField;
  newPassword: InputField;
};

export class NewPassword extends Block<object, Refs> {
  constructor() {
    super({
      validate: {
        password: validators.password,
        password_confirm: validators.password,
        new_password: validators.password,
      },
      onClick: (event: MouseEvent) => {
        event.preventDefault();
        const password = this.refs.password.getValue();
        const passwordConfirm = this.refs.passwordConfirm.getValue();
        const newPassword = this.refs.newPassword.getValue();
        if (passwordConfirm !== newPassword) {
          const error = "Passwords don't match!";
          this.refs.passwordConfirm.setProps({
            error,
            value: this.refs.passwordConfirm.getValue(),
          });
          return;
        }
        if (!password || !newPassword || !passwordConfirm) {
          return;
        }
        console.log({ password, passwordConfirm, newPassword });

        navigate('chats');
      },
    });
  }

  protected render() {
    return Component;
  }
}
