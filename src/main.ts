import Handlebars from 'handlebars';
import * as Components from './components';
import { registerComponent } from './core/registerComponent';
import { navigate } from './core/navigate';
import Block from './core/Block';

Handlebars.registerPartial('Form', Components.Form);

Object.entries(Components).forEach(([name, component]) => {
  registerComponent(name, component as typeof Block);
});

document.addEventListener('DOMContentLoaded', () => navigate('login'));
