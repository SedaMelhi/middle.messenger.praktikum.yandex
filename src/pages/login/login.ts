import { InputField } from '../../components';
import Block from '../../core/Block';
import { navigate } from '../../core/navigate';
import LoginComponent from './login.hbs?raw';
import * as validators from '../../utils/validators';

type Refs = {
  login: InputField;
  password: InputField;
  onClick: any;
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
        console.log('Login', login, password);
        if (!login || !password) {
          return;
        }
        //navigate('chat');
      },
      toRegister: () => {
        navigate('register');
      },
    });
  }

  protected render() {
    return LoginComponent;
  }
}
