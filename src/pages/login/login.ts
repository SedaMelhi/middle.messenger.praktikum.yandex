import { InputField } from '../../components';
import Block from '../../core/Block';
import { navigate } from '../../core/navigate';
import Component from './login.hbs?raw';
import * as validators from '../../utils/validators';

type Refs = {
  login: InputField;
  password: InputField;
};

export class LoginPage extends Block<object, Refs> {
  constructor() {
    super({
      validate: {
        login: validators.login,
        password: validators.password,
      },
      onClick: (event: MouseEvent) => {
        event.preventDefault();
        const login = this.refs.login.getValue();
        const password = this.refs.password.getValue();
        if (!login || !password) {
          return;
        }
        console.log({ login, password });
        navigate('chats');
      },
      toLink: () => {
        navigate('signup');
      },
    });
  }

  protected render() {
    return Component;
  }
}
