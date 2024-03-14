import { InputField } from '../../components';
import { navigate } from '../../core/navigate';
import Block from '../../core/Block';
import Component from './signup.hbs?raw';

import * as validators from '../../utils/validators';

type Refs = {
  login: InputField;
  password: InputField;
  name: InputField;
  surname: InputField;
  email: InputField;
  passwordConfirm: InputField;
  phone: InputField;
};

export class SignUpPage extends Block<object, Refs> {
  constructor() {
    super({
      validate: {
        login: validators.login,
        password: validators.password,
        password_confirm: validators.password,
        first_name: validators.name,
        second_name: validators.name,
        email: validators.email,
        phone: validators.phone,
      },
      onClick: (event: MouseEvent) => {
        event.preventDefault();
        const login = this.refs.login.getValue();
        const password = this.refs.password.getValue();
        const firstName = this.refs.name.getValue();
        const secondName = this.refs.surname.getValue();
        const email = this.refs.email.getValue();
        const passwordConfirm = this.refs.passwordConfirm.getValue();
        const phone = this.refs.phone.getValue();
        if (passwordConfirm !== password) {
          const error = "Passwords don't match!";
          this.refs.passwordConfirm.setProps({
            error,
            value: this.refs.passwordConfirm.getValue(),
          });
          return;
        }
        if (
          !login ||
          !password ||
          !firstName ||
          !secondName ||
          !email ||
          !phone ||
          !passwordConfirm
        ) {
          return;
        }
        console.log({ login, password, passwordConfirm, firstName, secondName, email, phone });
        navigate('chats');
      },
      toLink: () => {
        navigate('login');
      },
    });
  }

  protected render() {
    return Component;
  }
}
