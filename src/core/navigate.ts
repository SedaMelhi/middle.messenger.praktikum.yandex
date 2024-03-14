import * as Pages from '../pages';

const pages = {
  login: Pages.LoginPage,
  signup: Pages.SignUpPage,
  chats: Pages.ChatsPage,
  dialog: Pages.Dialog,
  settings: Pages.Settings,
  newpassword: Pages.NewPassword,
  error: Pages.Error,
};

export function navigate(page: keyof typeof pages) {
  const app = document.getElementById('app');
  const Component = pages[page];
  const component = new Component();
  app?.replaceChildren(component.getContent()!);
}
