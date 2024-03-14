import { InputField } from '../../components';
import Block from '../../core/Block';
import { navigate } from '../../core/navigate';
import Component from './settings.hbs?raw';
import * as validators from '../../utils/validators';

type Refs = {
  login: InputField;
  name: InputField;
  surname: InputField;
  email: InputField;
  phone: InputField;
};

export class Settings extends Block<object, Refs> {
  constructor() {
    super({
      validate: {
        first_name: validators.name,
        second_name: validators.name,
        email: validators.email,
        display_name: validators.name,
        login: validators.login,
        phone: validators.phone,
      },
      onClick: (event: MouseEvent) => {
        event.preventDefault();
        const login = this.refs.login.getValue();
        const firstName = this.refs.name.getValue();
        const secondName = this.refs.surname.getValue();
        const email = this.refs.email.getValue();
        const displayName = this.refs.name.getValue();
        const phone = this.refs.phone.getValue();
        if (!login || !firstName || !secondName || !email || !phone || !displayName) {
          return;
        }
        console.log({ login, displayName, firstName, secondName, email, phone });
        navigate('chats');
      },
      toChangePassword: () => {
        navigate('newpassword');
      },
    });
  }

  protected render() {
    return Component;
  }
}
