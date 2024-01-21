import Handlebars from 'handlebars';

export { default as Chat } from './chat.hbs?raw';

Handlebars.registerHelper('firstChar', function (str) {
  return str.charAt(0);
});
